// Every URL loaded directly (#path) at 1440 and 390: JS errors, broken images, duplicate ids, unnamed controls, overflow
const { chromium, PAGE: URL } = require('./env.js');
const PATHS = ['/register/', '/dashboard/create-resume/', '/dashboard/create-resume/modern/', '/dashboard/create/marketing-manager/', '/dashboard/create-ai-resume/', '/dashboard/upload-resume/', '/dashboard/linkedin-import/', '/guest-edit-start/',
 '/dashboard/tailor-resume/', '/dashboard/rewrite-resume/', '/dashboard/summary-generator/', '/ai/resume/', '/ai/resume/experience/', '/ai/resume/general/',
 '/dashboard/analyse-resume/', '/dashboard/proofreading/', '/dashboard/translate-resume/', '/dashboard/recruiter-feedback/', '/dashboard/career-coach/', '/latest-resume/analyze/', '/latest-resume/proofread/', '/latest-resume/recruiter-feedback/',
 '/dashboard/create-ai-cover-from-job/', '/dashboard/create-interview/', '/ai/resignation/', '/career-map/', '/dashboard/create-cover/', '/dashboard/create-cover/modern/', '/dashboard/create-website/', '/dashboard/create-website/modern/', '/cv/creative/',
 '/jobs/', '/jobs/search/', '/jobs/matcher/', '/jobs/job/1234/', '/jobs/organization/kickresume/', '/jobs/job-tracker/',
 '/login/', '/dashboard/', '/dashboard/resumes/', '/edit/', '/latest-resume/', '/upgrade/yearly/', '/upgrade/quarterly/', '/upgrade/monthly/', '/upgrade/student/'];
(async () => {
  const b = await chromium.launch();
  for (const w of [1440, 390]) {
    for (const path of PATHS) {
      const p = await b.newPage({ viewport: { width: w, height: w > 600 ? 900 : 844 } });
      const errs = []; p.on('pageerror', e => errs.push('JS ' + e.message)); p.on('console', m => { if (m.type() === 'error') errs.push('console ' + m.text().slice(0, 120)); });
      await p.goto(URL + '#' + path); await p.waitForTimeout(2200);
      const r = await p.evaluate(() => {
        const vis = el => el.getClientRects().length && !el.closest('[hidden], [inert]') && getComputedStyle(el).visibility !== 'hidden';
        const ids = {}; document.querySelectorAll('[id]').forEach(e => { ids[e.id] = (ids[e.id] || 0) + 1; });
        const dup = Object.entries(ids).filter(([, n]) => n > 1).map(([k]) => k);
        const badImg = [...document.images].filter(i => vis(i) && i.complete && !i.naturalWidth).map(i => (i.getAttribute('src') || '').slice(0, 40));
        const unnamed = [...document.querySelectorAll('button, a[href], [role="button"], input, select, textarea')].filter(vis).filter(e => {
          const n = (e.getAttribute('aria-label') || e.getAttribute('aria-labelledby') && document.getElementById(e.getAttribute('aria-labelledby'))?.textContent || e.textContent || e.title || e.getAttribute('placeholder') || '').trim();
          const lab = e.id && document.querySelector(`label[for="${e.id}"]`); return !n && !lab && !e.closest('label') && e.type !== 'hidden';
        }).map(e => e.tagName + '.' + [...e.classList].join('.')).slice(0, 5);
        const vw = document.documentElement.clientWidth;
        const over = [...document.querySelectorAll('body *')].filter(vis).filter(e => { const rc = e.getBoundingClientRect(); return rc.right > vw + 1 && rc.width > 0 && getComputedStyle(e).position !== 'fixed'; })
          .filter(e => !e.closest('.dk-list, .proto-more, #proto-dock, .pm, [aria-hidden="true"]')).filter(e => { let a = e.parentElement; while (a) { const o = getComputedStyle(a).overflowX; if (o === 'hidden' || o === 'auto' || o === 'scroll' || o === 'clip') return false; a = a.parentElement; } return true; })
          .map(e => e.tagName.toLowerCase() + '.' + [...e.classList].slice(0, 2).join('.')).slice(0, 4);
        return { screen: document.body.dataset.screen, hash: location.hash, dup, badImg, unnamed, over, scrollW: document.documentElement.scrollWidth > vw + 1 };
      });
      const probs = [errs.length && errs.join(' | '), r.dup.length && 'dup ids: ' + r.dup.join(','), r.badImg.length && 'broken img: ' + r.badImg.join(','), r.unnamed.length && 'unnamed: ' + r.unnamed.join(','), (r.scrollW || r.over.length) && 'overflow: ' + r.over.join(',')].filter(Boolean);
      console.log(`${w} ${path} -> ${r.screen} ${r.hash}${probs.length ? '  !! ' + probs.join(' ;; ') : ''}`);
      await p.close();
    }
  }
  await b.close();
})();
