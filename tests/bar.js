// Every run the dock offers, end to end through the flow bar's Next button: each step, then any JS errors.
// node tests/bar.js [no|yes: the CV, where it is the person's to choose] [only: part of a run's id]
const { chromium, PAGE } = require('./env.js');
const { listFeatures, runFeature } = require('./dock.js');
const [cv = 'no', only] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message + ' @ ' + (e.stack || '').split('\n').slice(1, 3).join(' '))); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto(PAGE); await p.waitForTimeout(600);
  const ids = await listFeatures(p);
  console.log('features', ids.length);
  for (const id of ids) {
    if (only && !id.includes(only)) continue;
    await p.evaluate(() => { document.querySelector('[data-action="restart"]').click(); });
    await p.waitForTimeout(500);
    await runFeature(p, id, cv);
    await p.waitForTimeout(1300);
    const out = [];
    for (let k = 0; k < 12; k++) {
      const st = await p.evaluate(() => ({ now: document.querySelector('.fb-now')?.textContent, screen: document.body.dataset.screen, hash: location.hash, pane: (document.querySelector('#screen-route .rt-pane:not([hidden])') || {}).dataset?.pane || '' }));
      out.push(`${st.now} [${st.screen}${st.hash ? ' ' + st.hash : ''}${st.pane ? ' #' + st.pane : ''}]`);
      const next = await p.$('.fb-next:not([disabled])');
      if (!next) break;
      await next.click(); await p.waitForTimeout(1300);
    }
    console.log('\n' + id + '\n  ' + out.join('\n  '));
  }
  console.log('errs', errs);
  await b.close();
})();
