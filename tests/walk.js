// Every run the dock offers, driven through the screens' own buttons (not the bar), as a person would: each screen,
// what was clicked to leave it, '!! STUCK' when nothing moves, then any JS errors.
// node tests/walk.js [cv: no|yes] [ends: ok|fail|error] [only: ids, comma-separated, or -] [shard: i/n]
// SHOTS=dir saves a screenshot of each new screen there; GOALS=1 walks Flow 1's goal branches; METHOD=paste|upload|ai|linkedin
const { chromium, PAGE: URL, FIXTURES } = require('./env.js');
const { listFeatures, runFeature, setEnd } = require('./dock.js');
const [cvArg = 'no', result = 'ok', only, shard = '0/1'] = process.argv.slice(2);
const [si, sn] = shard.split('/').map(Number);
const AUD = FIXTURES; const fs = require('fs'), crypto = require('crypto'); const SHOTS = process.env.SHOTS;
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(URL + '#a'); await p.waitForTimeout(600);
  await p.addStyleTag({ content: '.proto, .proto-dock, .flow-bar, .proto-note, .proto-more, .proto-ver, .toast { visibility: hidden !important; }' });
  const ids = process.env.GOALS ? ['goal-tailor', 'goal-ats', 'goal-jobs', 'goal-matcher'] : await listFeatures(p);
  const vis = sel => p.evaluate(s => { const el = [...document.querySelectorAll(s)].find(x => x.getClientRects().length && !x.closest('[hidden], [inert]')); return !!el; }, sel);
  const click = sel => p.evaluate(s => { const el = [...document.querySelectorAll(s)].find(x => x.getClientRects().length && !x.closest('[hidden], [inert]')); if (el) el.click(); return !!el; }, sel);
  const state = () => p.evaluate(() => {
    const pane = document.querySelector('#screen-route .rt-item > .rt-pane:not([hidden])');
    const inner = pane && [...pane.querySelectorAll('.rt-pane')].find(x => !x.hidden && x.getClientRects().length);
    return { bar: document.getElementById('flow-bar').hidden ? '(no run)' : document.querySelector('.fb-now')?.textContent, screen: document.body.dataset.screen, hash: location.hash,
      pane: pane ? pane.dataset.pane + (inner ? '>' + inner.dataset.pane : '') : '', head: document.body.dataset.screen === 'route' ? document.querySelector('#screen-route > .rt-head:not([hidden]) h1')?.textContent || '' : document.querySelector('.screen:not([hidden]) .page-head h1')?.textContent || '',
      toast: document.querySelector('.toast.is-on, .toast.show')?.textContent || '' };
  });
  // the upload modal: wait while it uploads, then Continue, or Retry when it failed
  const upm = async scope => {
    const st = await p.evaluate(s => document.querySelector(s + ' .upm').dataset.state, scope);
    if (st === 'run') { await p.waitForTimeout(1200); return 'wait'; }
    return (await click(scope + ' .upm [data-upm="go"]')) ? (st === 'done' ? 'Upload modal: Continue' : 'Retry (upload modal)') : '';
  };
  for (const [ix, id] of ids.entries()) {
    if (only && only !== '-' && !only.split(',').includes(id)) continue;
    if (ix % sn !== si) continue;
    await p.evaluate(() => document.querySelector('[data-action="restart"]').click()); await p.waitForTimeout(400);
    await setEnd(p, result);
    await runFeature(p, id.startsWith('goal-') ? 'goal-build' : id, cvArg);
    await p.waitForTimeout(1200);
    const log = [], steps = []; let last = '', same = 0, acted = '', after = -1;
    for (let k = 0; k < 40; k++) {
      const s = await state();
      const key = `${s.bar} | ${s.screen} ${s.hash} ${s.pane}`;
      if (key !== last) { await p.waitForTimeout(700); let h = ''; if (SHOTS) { const buf = await p.screenshot({ type: 'jpeg', quality: 72, timeout: 90000 }); h = crypto.createHash('md5').update(buf).digest('hex').slice(0, 12); fs.mkdirSync(SHOTS, { recursive: true }); fs.writeFileSync(SHOTS + '/' + h + '.jpg', buf); }
        steps.push({ bar: s.bar, screen: s.screen, hash: s.hash, head: s.head, action: acted, img: h });
        log.push(`${key}${s.head ? ' — “' + s.head + '”' : ''}${acted ? '   ← ' + acted : ''}${s.toast ? '   [toast: ' + s.toast.trim().slice(0, 60) + ']' : ''}`); last = key; same = 0; if (after > 0 && --after === 0) break; } else same++;
      if (/^state: (Change|Try)|^Retry/.test(acted)) after = 2;
      acted = '';
      const atEnd = await p.evaluate(() => !!document.querySelector('.fb-next[disabled]'));
      const sc = s.screen;
      if (sc === 'loading') { await p.waitForTimeout(1500); continue; }
      if (atEnd && ['editor', 'tool', 'docs', 'dashboard', 'upgrade', 'jobs'].includes(sc)) break;
      if (atEnd && sc === 'cm' && await vis('.cm-map')) break;
      if (atEnd && sc === 'route' && /dest|main/.test(s.pane) && await vis('#screen-route .rt-wire') && !(await vis('#screen-route [data-wire="signup"]'))) break;
      if (same > 14) { log.push('  !! STUCK'); break; }
      // the screen's own primary action
      if (await vis('.cvp-pop .tj-cv')) { await click('.cvp-pop .tj-cv:not(.cvp-new)'); await p.waitForTimeout(150); acted = (await click('.cvp-pop [data-cvp="continue"]')) ? 'Pick a resume: Continue' : ''; await p.waitForTimeout(1300); continue; }
      if (sc === 'auth') { await p.evaluate(() => { const c = document.getElementById('au-consent'); if (c) c.checked = true; }); acted = (await click('.au-em[data-wire="signup"]')) ? 'Sign up with email' : (await click('.au-submit')) ? 'Log In' : ''; }
      else if (sc === 'intent') { const g = id === 'goal-matcher' ? 'jobs' : id.startsWith('goal-') ? id.slice(5) : null; acted = g && await click(`#screen-intent [data-goal="${g}"]`) ? 'goal ' + g : ''; }
      else if (sc === 'create' && await vis('#create-upm .upm')) { acted = await upm('#create-upm'); if (acted === 'wait') { acted = ''; continue; } }
      else if (sc === 'create') {
        const M = process.env.METHOD || 'paste', card = `#screen-create .mcard[data-id="${M}"]`;
        await click(`${card} [data-action="toggle"], ${card} [data-action="open"]`); await p.waitForTimeout(800);
        if (M === 'paste') { await click(`${card} [data-action="paste-sample"]`); await p.waitForTimeout(100); }
        if (M === 'upload') { const inp = await p.$(`${card} input[type="file"]`); await inp.setInputFiles(AUD + 'resume.pdf'); await p.waitForTimeout(100); }
        if (M === 'linkedin') { await p.evaluate(c => { const i = document.querySelector(c + ' input'); i.value = 'https://www.linkedin.com/in/jana-novak'; }, card); }
        if (M === 'ai') await p.evaluate(c => { document.querySelector(c + ' [name="name"]').value = 'Jana Novak'; document.querySelector(c + ' [name="title"]').value = 'Designer'; }, card);
        await click(`${card} [type="submit"]`); acted = 'method: ' + M;
      }
      else if (sc === 'cm') {
        if (await vis('.cm-opt')) { await click('.cm-opt'); acted = 'Career Map: answer'; await p.waitForTimeout(400); }
        else if (await vis('#cm-li')) { await p.fill('#cm-li', 'jana-novak'); acted = (await click('[data-cm="next"]')) ? 'Career Map: LinkedIn, Continue' : ''; }
        else if (await vis('.cm-cv')) { await click('.cm-cv'); acted = (await click('[data-cm="next"]')) ? 'Career Map: resume, Continue' : ''; }
        else if (await vis('.cm-ind')) { await click('.cm-ind:not([disabled])'); acted = (await click('[data-cm="next"]')) ? 'Career Map: industries, Continue' : ''; }
        else if (await vis('[data-cm="next"]')) acted = (await click('[data-cm="next"]')) ? 'Career Map: ' + (await p.$eval('[data-cm="next"]', b => b.textContent)) : '';
      }
      else if (sc === 'tpl') acted = (await click('.tps-card')) ? 'template' : '';
      else if (sc === 'jobs') {
        if (await vis('.jm-drop')) { await p.setInputFiles('.jm-file', AUD + 'resume.pdf'); acted = 'Jobs for You: file'; }
        else if (await vis('.jm-load')) { await p.waitForTimeout(1500); continue; }
        else if (await vis('.tj-cv')) { await click('.tj-cv'); await p.waitForTimeout(200); acted = (await click('[data-tj="continue"]')) ? 'Pick a resume: Continue' : ''; }
        else if (await vis('.tj-box #trl-url')) { await p.fill('.tj-box #trl-url', 'https://jobs.example.com/123'); acted = (await click('.tj-box .trl-go')) ? 'Tailor Now' : ''; }
        else if (await vis('.tj-box .trl-go')) acted = (await click('.tj-box .trl-go')) ? 'Tailor Now' : '';
        else if (await vis('[data-jd="tailor"]')) acted = (await click('[data-jd="tailor"]')) ? 'Tailor Your Resume' : '';
      }
      else if (sc === 'route') {
        if (await vis('#screen-route .rw-go')) acted = (await click('#screen-route .rw-go')) ? 'Rewrite: Continue' : '';
        else if (await vis('#screen-route .rw-list')) { await p.waitForTimeout(1500); continue; }
        else if (await vis('#screen-route .upm')) { acted = await upm('#screen-route'); if (acted === 'wait') { acted = ''; continue; } }
        else if (await vis('#screen-route .tld')) { acted = (await click('.tld-go')) ? 'Continue' : (await click('.tld-retry')) ? 'Retry' : ''; if (!acted) { await p.waitForTimeout(1500); continue; } }
        else if (await vis('#screen-route [data-wire="process"]')) { await p.waitForTimeout(1500); continue; }
        else if (await vis('#screen-route [data-wire="state-next"]')) acted = (await click('#screen-route [data-wire="state-next"]')) ? 'state: Continue' : '';
        else if (await vis('#screen-route [data-wire="state-again"]')) acted = (await click('#screen-route [data-wire="state-again"]')) ? 'state: Try again' : '';
        else if (await vis('#screen-route [data-wire="state-retry"]')) acted = (await click('#screen-route [data-wire="state-retry"]')) ? 'state: Change the input' : '';
        else if (await vis('#aim-name')) { await p.fill('#aim-name', 'Jana Novak'); await p.fill('#aim-title', 'Designer'); await click('.aim-go'); acted = 'AI: Generate'; }
        else if (await vis('#aig-title')) { await p.fill('#aig-title', 'Designer'); await click('.aig-go'); acted = 'Generate'; }
        else if (await vis('#cov-title')) { await p.fill('#cov-title', 'Designer'); await click('.aiw-go'); acted = 'Cover: Generate'; }
        else if (await vis('#ivw-title')) { await p.fill('#ivw-title', 'Designer'); await click('.ivw-go'); acted = 'Interview: Generate'; }
        else if (await vis('#rsg-title')) { await p.fill('#rsg-title', 'Designer'); await click('.rsg-go'); acted = 'Resign: Generate'; }
        else if (await vis('.lki input')) { await p.fill('.lki input', 'jana-novak'); await click('.lki [type="submit"]'); acted = 'Import'; }
        else if (await vis('#screen-route [data-upl="continue"]')) acted = (await click('#screen-route [data-upl="continue"]')) ? 'Upload: Continue' : '';
        else if (await vis('#screen-route .upl')) { const inp = await p.$('#screen-route [data-pane="upload"] input[type="file"]'); if (inp) { await inp.setInputFiles(AUD + 'resume.pdf'); acted = 'file chosen'; } }
        else if (await vis('#jb-q')) { await p.fill('#jb-q', 'Designer'); await click('.jb-go'); acted = 'Job board: Search'; }
        else if (await vis('#trl-url')) { await p.fill('#trl-url', 'https://jobs.example.com/123'); await click('.trl-go'); acted = 'Tailor Now'; }
        else if (await vis('.trl-go')) acted = (await click('.trl-go')) ? 'Tailor Now (job)' : '';
        else if (await vis('#screen-route [data-wire="signup"]')) acted = (await click('#screen-route .wf-btn--primary[data-wire="signup"]')) ? 'wall: Create account' : '';
        else if (await vis('#screen-route [data-wire="tailor"]')) acted = (await click('#screen-route [data-wire="tailor"]')) ? 'Tailor my resume' : '';
        else if (await vis('#screen-route .wf-btn--primary[data-wire]')) acted = (await click('#screen-route .wf-btn--primary[data-wire]')) ? 'wire primary' : '';
        else if (await vis('#screen-route [data-wire="tpl"]')) acted = (await click('#screen-route [data-wire="tpl"]')) ? 'wire template' : '';
      }
      await p.waitForTimeout(1300);
    }
    console.log('\n' + id + '\n  ' + log.join('\n  '));
  }
  console.log('\nerrs', errs);
  await b.close();
})();
