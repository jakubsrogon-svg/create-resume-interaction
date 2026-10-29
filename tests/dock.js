// Drive the run dock (Open · From · CV · Data · Ends → Run) from the test scripts.
// listFeatures(p): every run the dock offers. runFeature(p, id, cv): set the dock so Run holds that run
// (cv: 'yes' | 'no' | undefined, applied when the CV is the person's to choose), then Run. setEnd(p, r): Ends.
const inPage = async ({ id, cv, list }) => {
  const wait = () => new Promise(r => setTimeout(r, 10));
  const dock = document.getElementById('proto-dock');
  const pick = (dd, v) => dock.querySelector(`[data-dd="${dd}"] .dk-opt[data-value="${v}"]`).click();
  const run = () => dock.querySelector('.dk-run'), sw = () => dock.querySelector('.dk-cv:not(.dk-data)'), ds = () => dock.querySelector('.dk-data');
  const free = b => b().getAttribute('aria-disabled') !== 'true';
  const seen = [];
  for (const key of [...dock.querySelectorAll('[data-dd="url"] .dk-opt')].map(o => o.dataset.value)) {
    pick('url', key); await wait();
    for (const fr of [...dock.querySelectorAll('[data-dd="from"] .dk-opt:not([aria-disabled="true"])')].map(o => o.dataset.value)) {
      pick('from', fr); await wait();
      for (let k = 0; k < 2; k++) {
        for (let d = 0; d < 2; d++) {
          const now = run().dataset.feature;
          if (list) { if (!seen.includes(now)) seen.push(now); }
          else if (now === id) {
            if (free(sw) && cv && (sw().getAttribute('aria-checked') === 'true') !== (cv === 'yes')) { sw().click(); await wait(); }
            if (run().dataset.feature !== id) { sw().click(); await wait(); }  // that CV makes another run: keep the one asked for
            run().click(); return true;
          }
          if (!free(ds)) break;
          ds().click(); await wait();
        }
        if (!free(sw)) break;
        sw().click(); await wait();
      }
    }
  }
  return list ? seen : false;
};
exports.listFeatures = p => p.evaluate(inPage, { list: true });
exports.runFeature = (p, id, cv) => p.evaluate(inPage, { id, cv });
exports.setEnd = (p, r) => p.evaluate(r => document.querySelector(`#proto-dock [data-dd="end"] .dk-opt[data-value="${r}"]`).click(), r);
