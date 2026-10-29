(function () {
  const ICON = {
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
    sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
    paste: '<path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"/><path d="m17 10 4 4-4 4"/>',
    clipboard: '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    arrowLeft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    cloud: '<path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    alert: '<path d="M12 5v8"/><path d="M12 19h.01"/>',
    aiSpark: '<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    pen: '<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/>',
    map: '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    list: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
    cloud2: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>',
    redo: '<path d="m15 14 5-5-5-5"/><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
    eyeOff: '<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r="1"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    menu: '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    cap: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    upCircle: '<circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/>',
    grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    trend: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    bike: '<circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>'
  };
  const icon = (n, cls) => `<svg class="i${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true">${ICON[n]}</svg>`;

  /* ---------- Goal cards ----------
     Figma: Kickresume 3.0 › Intent screen [new] (61797:3677). Copy is task-first, the benefit in the description.
     Each picture shows the outcome its card promises and only moves on hover or keyboard focus (CSS, .ga-*). */
  const gl = (w, cls) => `<i class="ga-ln${cls ? ' ' + cls : ''}" style="width:${w}px"></i>`;
  const gaHead = `<span class="ga-row"><span class="ga-av"></span><span class="ga-col">${gl(46, 'dk')}${gl(28)}</span></span>`;
  const GOALS = [
    { id: 'build', title: 'Build my resume', desc: 'Start from LinkedIn or a file. AI helps with the rest.', icon: 'file',
      art: `<div class="ga-stage">
        <div class="ga-paper old">${gl(44, 'dk')}${gl(66)}${gl(56)}${gl(70)}${gl(30, 'dk sec')}${gl(62)}${gl(48)}</div>
        <div class="ga-paper">${gaHead}${gl(82)}${gl(64)}${gl(74)}${gl(34, 'dk sec')}${gl(78)}${gl(56)}<i class="ga-ln ai"></i></div>
        <span class="ga-badge">${icon('aiSpark')}</span></div>` },
    { id: 'tailor', title: 'Tailor my resume', desc: 'Paste a job ad and match your resume to its keywords.', icon: 'target',
      art: `<div class="ga-stage">
        <div class="ga-paper">${gaHead}<span class="ga-row" style="gap:3px">${gl(36)}${gl(40, 'kw')}</span>${gl(64)}<span class="ga-row" style="gap:3px">${gl(30, 'kw')}${gl(42)}</span>${gl(34, 'dk sec')}${gl(70)}${gl(52)}</div>
        <div class="ga-float ga-ad"><span class="ga-row" style="gap:6px"><span class="ga-sq"></span><span class="ga-col">${gl(44, 'dk')}${gl(30)}</span></span>${gl(66)}${gl(52)}<span class="ga-pill match ga-tiny">${icon('check')}92% match</span></div></div>` },
    { id: 'ats', title: 'Pass the ATS check', desc: 'Find and fix what could get your resume auto-rejected.', icon: 'shield',
      art: `<div class="ga-stage is-center"><div class="ga-float ga-report">
        <span class="ga-row" style="gap:10px"><span class="ga-score"><svg viewBox="0 0 38 38" width="38" height="38"><circle cx="19" cy="19" r="17" fill="none" stroke="var(--kr-grey-40)" stroke-width="4"/><circle class="ga-arc" cx="19" cy="19" r="17" fill="none" stroke-width="4" pathLength="100"/></svg><b class="before">72</b><b class="after">94</b></span><span class="ga-col"><span class="ga-tiny">ATS score</span>${gl(54)}</span></span>
        <i class="ga-hr"></i>
        <span class="ga-chk"><span class="ga-row" style="gap:7px"><span class="ga-mark">${icon('check')}</span>${gl(78)}</span><span class="ga-row" style="gap:7px"><span class="ga-mark">${icon('check')}</span>${gl(64)}</span><span class="ga-row" style="gap:7px"><span class="ga-mark flag">${icon('alert', 'issue')}${icon('check', 'fixed')}</span>${gl(56)}</span></span></div></div>` },
    { id: 'jobs', title: 'Find jobs that fit me', desc: 'Get open roles matched to your skills and experience.', icon: 'briefcase',
      art: `<div class="ga-stage is-center"><div class="ga-jobs">${[['var(--kr-blue-tint)', 46, 30, '96% match'], ['var(--kr-primary-tint)', 72, 44], ['rgba(29, 163, 110, .08)', 88, 54]]
        .map(([bg, a, b, fit]) => `<span class="ga-float ga-job"><span class="ga-sq" style="background:${bg}"></span><span class="ga-col">${gl(a, 'dk')}${gl(b)}</span>${fit ? `<span class="ga-pill fit ga-tiny">${fit}</span>` : ''}</span>`).join('')}</div></div>` }
  ];

  let intentLayout = 'grid';
  function renderIntents() {
    const grid = document.getElementById('intent-grid');
    grid.classList.toggle('is-list', intentLayout === 'list');
    grid.innerHTML = intentLayout === 'list'
      ? GOALS.map(g => `
        <button class="irow" type="button" data-action="pick-intent" data-goal="${g.id}" aria-label="${g.title}. ${g.desc}">
          <span class="mtile tone-${g.id}">${icon(g.icon)}</span>
          <span class="mtext"><span class="mtitle">${g.title}</span><span class="msub">${g.desc}</span></span>
          <span class="chev">${icon('chevron')}</span>
        </button>`).join('')
      : GOALS.map(g => `
        <button class="intent" type="button" data-action="pick-intent" data-goal="${g.id}">
          <div class="ga t-${g.id}" aria-hidden="true">${g.art}</div>
          <div class="intent-text"><span class="intent-title">${g.title}</span><span class="intent-desc">${g.desc}</span></div>
        </button>`).join('');
  }
  renderIntents();

  /* ---------- Creation methods ---------- */
  const METHODS = [
    { id: 'linkedin', title: 'Import from LinkedIn', sub: 'Paste your profile link', icon: 'linkedin' },
    { id: 'ai', title: 'Write with AI', sub: 'Answer a few questions', icon: 'sparkles' },
    { id: 'upload', title: 'Upload a resume', sub: 'PDF or Word', icon: 'upload' },
    { id: 'paste', title: 'Paste text', sub: 'Any text you have', icon: 'paste' }
  ];
  const byId = id => METHODS.find(m => m.id === id);

  const SAMPLE_TEXT = `Jana Novák — Product Designer, Bratislava

2021–now: Senior Product Designer at Lumen Health. Led the redesign of the patient booking flow; cut drop-off by 23%. Built the first shared component library with two engineers.
2018–2021: UX Designer at Pixelfield. Designed mobile banking features used by 400k people.

Education: MA Visual Communication, Academy of Fine Arts and Design, Bratislava.
Skills: Figma, user research, prototyping, design systems, accessibility, workshop facilitation. Languages: Slovak, English, German.`;

  function bodyHTML(id, p) {
    const f = `${p}-${id}`;
    if (id === 'linkedin') return `
      <form class="mform" data-method="linkedin" novalidate>
        <p>Paste your profile URL and we’ll build a resume from it.</p>
        <div class="field">
          <label class="sr-only" for="${f}-url">LinkedIn profile URL</label>
          <div class="input-wrap">
            <input class="input" id="${f}-url" name="url" type="url" inputmode="url" autocomplete="url" placeholder="linkedin.com/in/your-name">
            <button class="icon-btn" type="button" data-action="paste-example" aria-label="Paste example URL" title="Paste">${icon('clipboard')}</button>
          </div>
          <span class="error">Enter a LinkedIn profile URL, like linkedin.com/in/your-name.</span>
        </div>
        <div class="actions"><button class="btn btn-coral" type="submit">Import</button></div>
      </form>`;
    if (id === 'ai') return `
      <form class="mform" data-method="ai" novalidate>
        <p>Give us your name and latest job title. The AI drafts a tailored resume in seconds.</p>
        <div class="fpair"><div class="field">
          <label class="label" for="${f}-name">Your name</label>
          <input class="input" id="${f}-name" name="name" autocomplete="name" placeholder="Jana Novák">
          <span class="error">Add your name so we can put it on the resume.</span>
        </div>
        <div class="field">
          <label class="label" for="${f}-title">Job title</label>
          <input class="input" id="${f}-title" name="title" autocomplete="organization-title" placeholder="Product Designer">
          <span class="error">Add a job title. Your most recent one works best.</span>
        </div></div>
        <div class="actions"><button class="btn btn-gradient" type="submit">${icon('sparkles')}Continue</button></div>
      </form>`;
    if (id === 'upload') return `
      <form class="mform" data-method="upload" novalidate>
        <div class="dropzone" role="button" tabindex="0" data-action="browse" aria-label="Choose your resume file, PDF or DOCX up to 10 MB">
          <span class="cloud">${icon('cloud')}</span>
          <span class="dz-title">Drop your resume file here</span>
          <span class="dz-meta">or <span class="dz-link">browse your files</span> · PDF or DOCX, up to&nbsp;10&nbsp;MB</span>
        </div>
        <input class="sr-only" id="${f}-file" type="file" accept=".pdf,.doc,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" tabindex="-1" aria-hidden="true">
        <div class="file-slot field"><span class="error" role="alert">That file type won’t work. Upload a PDF or a Word document.</span></div>
        <div class="actions"><button class="btn btn-coral" type="submit" disabled>Upload</button></div>
      </form>`;
    if (id === 'paste') return `
      <form class="mform" data-method="paste" novalidate>
        <p>An old resume, a bio, notes, a job post you wrote. We’ll sort it into resume sections.</p>
        <div class="field">
          <label class="sr-only" for="${f}-text">Your text</label>
          <textarea class="textarea" id="${f}-text" name="text" maxlength="5000" placeholder="Paste your text here…"></textarea>
          <span class="error">Add a bit more text. We need at least 80 characters to work with.</span>
          <div class="hint-row"><button class="inline-link" type="button" data-action="paste-sample">Use sample text</button><span class="count">0 / 5,000</span></div>
        </div>
        <div class="actions"><button class="btn btn-coral" type="submit">Continue</button></div>
      </form>`;
  }

  /* ---------- Variant C detail screens ----------
     Same list and navigation as B; the detail content helps people finish the step
     (find the link, avoid a failed upload, see what they'll get). */

  function bodyHTML_C(id, p) {
    const f = `${p}-${id}`;
    if (id === 'linkedin') return `
      <form class="mform" data-method="linkedin" data-c novalidate>
        <p>Paste your profile URL and we’ll build a resume from it.</p>
        <div class="field">
          <label class="sr-only" for="${f}-url">LinkedIn profile URL</label>
          <div class="input-wrap">
            <input class="input" id="${f}-url" name="url" type="text" inputmode="url" autocomplete="url" spellcheck="false" placeholder="linkedin.com/in/your-name" aria-describedby="${f}-err">
            <button class="icon-btn" type="button" data-action="paste-example" aria-label="Paste example URL" title="Paste">${icon('clipboard')}</button>
          </div>
          <div aria-live="polite">
            <span class="error" id="${f}-err">That doesn’t look like a LinkedIn profile link. It should contain linkedin.com/in/</span>
            <div class="c-fail" hidden>
              <span>We couldn’t read this profile. It may be private.</span>
              <span class="c-recover">
                <button class="inline-link" type="button" data-action="switch-method" data-to="upload">Upload your resume instead</button>
                <button class="inline-link" type="button" data-action="switch-method" data-to="paste">Paste the text instead</button>
              </span>
            </div>
          </div>
        </div>
        <div class="actions"><button class="btn btn-coral" type="submit">Import</button></div>
      </form>`;
    if (id === 'ai') return bodyHTML(id, p);     // same form as B; the picture shows what you'll get
    if (id === 'upload') return `
      <form class="mform" data-method="upload" data-c novalidate>
        <div class="dropzone" role="button" tabindex="0" data-action="browse" aria-label="Choose your resume file" aria-describedby="${f}-hint ${f}-err">
          <span class="cloud">${icon('cloud')}</span>
          <span class="dz-title">Drop your resume here or <span class="dz-link">browse your files</span></span>
          <span class="dz-meta" id="${f}-hint">PDF or DOCX, up to&nbsp;10&nbsp;MB</span>
        </div>
        <input class="sr-only" id="${f}-file" type="file" accept=".pdf,.doc,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" tabindex="-1" aria-hidden="true">
        <div class="file-slot field" aria-live="polite">
          <div class="c-error" id="${f}-err" hidden><span class="c-msg"></span><span class="c-recover"><button class="inline-link" type="button" data-action="switch-method" data-to="paste">Paste the text instead</button></span></div>
        </div>
        <div class="actions"><button class="btn btn-coral" type="submit" disabled>Upload</button></div>
      </form>`;
    if (id === 'paste') return bodyHTML(id, p);   // same form as B
  }

  /* Variant C: the picture on top of each method screen (decorative; the text says it all) */
  const L = (...ws) => ws.map(w => `<i class="ln ${w}"></i>`).join('');
  const csResume = (extra = '') => `<div class="cs-card cs-paper"><div class="cs-head"><i class="cs-av"></i><div class="cs-stack">${L('dk w80', 'w50')}</div></div>${extra}</div>`;
  const SCENE_C = {
    linkedin: `
      <div class="cs-card cs-profile"><div class="cs-cover"></div><i class="cs-av"></i>
        <div class="cs-pbody">${L('dk w60', 'w80')}<div class="cs-in-row"><span class="cs-in">${icon('linkedin')}</span>${L('w50')}</div></div></div>
      <div class="cs-step">${icon('arrowRight')}</div>
      ${csResume(L('cs-h', 'w90', 'w70', 'cs-h', 'w80', 'w60'))}`,
    ai: `
      <div class="cs-fields">
        <div class="cs-field">${L('dk w30')}<div class="cs-input">${L('dk w60')}</div></div>
        <div class="cs-field">${L('dk w40')}<div class="cs-input is-focus">${L('dk w50')}<i class="cs-caret"></i></div></div>
      </div>
      <div class="cs-step is-ai">${icon('sparkles')}</div>
      ${csResume(L('cs-h', 'w90', 'w70', 'cs-h', 'is-ai w80', 'is-ai w60'))}`,
    upload: `
      <div class="cs-files">
        <div class="cs-card cs-file is-back">${L('dk w70', 'w90', 'w60')}<span class="cs-tag is-doc">DOC</span></div>
        <div class="cs-card cs-file is-front">${L('dk w60', 'w90', 'w80', 'w50')}<span class="cs-tag">PDF</span></div>
      </div>
      <div class="cs-step">${icon('arrowRight')}</div>
      <div class="cs-card cs-paper is-tpl">
        <div class="cs-tpl-side"><i class="cs-av"></i>${L('w80', 'w60', 'w70')}</div>
        <div class="cs-tpl-main">${L('dk w80', 'w50', 'cs-h', 'w90', 'w70', 'cs-h', 'w80')}</div>
      </div>`,
    paste: `
      <div class="cs-card cs-note">
        <i class="ln dk w70"></i><i class="ln w40" style="margin-left:8%"></i><i class="ln w90"></i><i class="ln w30" style="margin-left:30%"></i><i class="ln w80"></i><i class="ln w60" style="margin-left:12%"></i><i class="ln w50"></i>
      </div>
      <div class="cs-step">${icon('arrowRight')}</div>
      ${csResume(L('cs-h', 'w90', 'w70', 'cs-h', 'w80', 'w60'))}`
  };
  const sceneC = id => `<div class="c-scene cs-${id}" aria-hidden="true"><div class="cs-row">${SCENE_C[id]}</div></div>`;

  const headHTML = (m, tag, attrs) => `
    <${tag} class="mhead" ${attrs}>
      <span class="mtile tone-${m.id}">${icon(m.icon)}</span>
      <span class="mtext"><span class="mtitle">${m.title}</span><span class="msub">${m.sub}</span></span>
      ${tag === 'button' ? `<span class="chev">${icon('chevron')}</span>` : ''}
    </${tag}>`;

  /* ---------- State ---------- */
  let variant = 'A';
  /* Variant C is hidden for now but kept in full: no rail button, and #c links or a remembered C
     open A instead. To show it again, set SHOW_C back to true. */
  const SHOW_C = false;
  // the template pickers (resume, cover letter, website) are skipped for now: everyone gets the default template
  const SHOW_TPL_PICKERS = false;
  const VARIANTS = SHOW_C ? ['A', 'B', 'C'] : ['A', 'B'];
  document.querySelector('.proto-more [data-variant="C"]').closest('.pm-row').hidden = !SHOW_C;
  // More options (bottom right): open/close, and a dot on the button while C or the 3D look is on
  const pmWrap = document.getElementById('proto-more'), pmBtn = pmWrap.querySelector('.pm-btn'), pmPanel = document.getElementById('proto-more-panel');
  function setMore(open) {
    pmWrap.classList.toggle('is-open', open); pmBtn.setAttribute('aria-expanded', String(open)); pmPanel.inert = !open;
  }
  // Its two views, Flows and URLs (arrow keys move between the tabs); the one picked last comes back
  const pmTabs = [...pmPanel.querySelectorAll('[data-pm-tab]')];
  function setPmTab(name, focus) {
    pmTabs.forEach(t => {
      const on = t.dataset.pmTab === name;
      t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      if (on && focus) t.focus();
    });
    pmPanel.scrollTop = 0;
    try { localStorage.setItem('kr-start-more', name); } catch (e) {}
  }
  pmPanel.querySelector('.pm-tabs').addEventListener('click', e => { const t = e.target.closest('[data-pm-tab]'); if (t) setPmTab(t.dataset.pmTab); });
  pmPanel.querySelector('.pm-tabs').addEventListener('keydown', e => {
    const step = { ArrowLeft: -1, ArrowRight: 1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const at = pmTabs.findIndex(t => t.getAttribute('aria-selected') === 'true');
    setPmTab(pmTabs[(at + step + pmTabs.length) % pmTabs.length].dataset.pmTab, true);
  });
  try { if (localStorage.getItem('kr-start-more') === 'urls') setPmTab('urls'); } catch (e) {}
  const markMore = () => pmBtn.classList.toggle('has-active', variant === 'C' || document.body.classList.contains('look-3d') || checkerOn);
  // The 3D look's backdrop (only shown on the method screen in 3D; see .d-backdrop). The resume
  // fragments in the margins are hidden for now but kept in full: set SHOW_3D_PAPERS to true to show them.
  const SHOW_3D_PAPERS = false;
  document.getElementById('device').insertAdjacentHTML('afterbegin', `<div class="d-backdrop${SHOW_3D_PAPERS ? '' : ' no-papers'}" aria-hidden="true">
    <div class="d-paper d-p1"><div class="d-row"><i class="d-av"></i><div class="d-stack"><i class="d-ln dk w70"></i><i class="d-ln w45"></i></div></div>
      <i class="d-ln hd" style="--c: var(--kr-blue)"></i><i class="d-ln w90"></i><i class="d-ln w70"></i><i class="d-ln hd" style="--c: var(--kr-blue)"></i><i class="d-ln w80"></i><i class="d-ln w60"></i>
      <span class="d-badge is-in">${icon('linkedin')}</span></div>
    <div class="d-paper d-file d-p2"><i class="d-ln dk w70"></i><i class="d-ln w90"></i><i class="d-ln w80"></i><i class="d-ln w55"></i><span class="d-tag">PDF</span></div>
    <div class="d-paper d-p3"><i class="d-ln dk w60"></i><i class="d-ln ai w90"></i><i class="d-ln ai w80"></i><i class="d-ln ai w45"></i><span class="d-badge is-ai">${icon('sparkles')}</span></div>
    <div class="d-paper d-p4"><i class="d-ln hd" style="--c: var(--kr-mint)"></i><i class="d-ln w90"></i><i class="d-ln w70"></i><i class="d-ln hd" style="--c: var(--kr-mint)"></i><i class="d-ln w80"></i><i class="d-ln w55"></i>
      <span class="d-badge is-ok">${icon('check')}</span></div>
  </div>`);
  const methodsEl = document.getElementById('methods');
  const screens = { intent: document.getElementById('screen-intent'), create: document.getElementById('screen-create'), loading: document.getElementById('screen-loading'), route: document.getElementById('screen-route') };
  const topbarEl = document.getElementById('topbar'), pageEl = document.getElementById('page'), editorEl = document.getElementById('screen-editor'), dashEl = document.getElementById('screen-dash');
  const APPS = { editor: editorEl, dashboard: dashEl };
  let current = 'intent', routesReady = false, cvNext = null, buildNext = null;  // see askCv and SECTION_AS
  let createFrom = { where: 'intent', route: null }, createFromSet = false;  // where the method screen's Back goes
  const topXEl = document.getElementById('top-x');
  let xRoute = null, xPane = '';  // the route screen and step the corner × was last set for (syncTopX)
  /* The prototype rail dims the settings that don't affect the screen you're on */
  function setCurrent(s) {
    if (s === 'create' && current !== 'create' && !createFromSet) createFrom = { where: current === 'loading' ? 'intent' : current, route: routeNow };
    createFromSet = false;
    current = s; document.body.dataset.screen = s; placeVer();
    if (s !== 'editor') closeWriter(true);  // the writer pop-up lives over Fill In only
    if (s !== 'create' && s !== 'loading') cvNext = null;  // a screen's request for a CV (askCv) ends when the person goes elsewhere
    if (s !== 'loading') buildNext = null;  // so does where a section writer's building screen leads (SECTION_AS)
    // a route URL only while it's on screen, or while the method screen gets the CV it asked for
    if (routesReady && !cvNext && !['route', 'auth', 'upgrade', 'docs', 'tool', 'tpl', 'jobs'].includes(s) && location.hash.startsWith('#/')) { routeNow = null; markRoutes(); setHash(''); }
    syncNote(); syncTopX(); syncBackLinks();
    if (routesReady && s !== 'route') flowSync();
  }
  /* The version tag sits bottom left, clear of the left sidebar on the dashboard and editor.
     Layout offsets, not the on-screen box, so a sidebar's entrance slide doesn't shift it. */
  const verEl = document.querySelector('.proto-ver');
  function placeVer() {
    const side = [...document.querySelectorAll('.ed-side')].find(el => el.getClientRects().length && el.offsetParent);
    verEl.style.left = side ? Math.round(side.offsetParent.getBoundingClientRect().left + side.offsetLeft + side.offsetWidth + 12) + 'px' : '';
  }
  window.addEventListener('resize', placeVer);
  setCurrent('intent');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const device = document.getElementById('device');
  const framed = () => getComputedStyle(device).overflowY === 'auto';
  const scroller = () => framed() ? device : window;
  function setVh() {
    const h = framed() ? device.clientHeight - 44 : innerHeight;  // 44 = phone status bar
    document.documentElement.style.setProperty('--vh', (h / 100) + 'px');
  }
  window.addEventListener('resize', setVh);

  /* If an opened form would push past the bottom of the screen, ease the top gap
     down by just enough to fit (never below 8px); give it back when the form closes. */
  let anchorCut = 0, settleT = 0;
  function setCut(px, instant) {
    anchorCut = px;
    if (instant) pageEl.style.transition = 'none';
    pageEl.style.setProperty('--anchor-cut', px + 'px');
    if (instant) { void pageEl.offsetHeight; pageEl.style.transition = ''; }
  }
  function settleAnchor(cb) {
    if (APPS[current]) { if (cb) cb(); return; }
    const over = framed() ? device.scrollHeight - device.clientHeight : document.documentElement.scrollHeight - innerHeight;
    const full = parseFloat(getComputedStyle(pageEl).paddingTop) + anchorCut;
    const next = Math.round(Math.max(0, Math.min(full - 8, anchorCut + over)));
    if (Math.abs(next - anchorCut) < 1) { if (cb) cb(); return; }
    setCut(next, reduce);
    if (cb) setTimeout(cb, reduce ? 0 : DUR.slow + 20);
  }
  /* Variant A: ease the top gap toward where the page will end up (grow = how much taller the
     content gets), in the same motion as the fold, so nothing shifts again once it lands.
     Gives the gap back once every card is closed. Returns false if it still won't fit. */
  function fitCut(grow, keep) {
    const vb = framed() ? device.getBoundingClientRect().top + device.clientTop + device.clientHeight : innerHeight;
    const over = pageEl.getBoundingClientRect().bottom + scrollPos() - vb + grow;
    const full = parseFloat(getComputedStyle(pageEl).paddingTop) + anchorCut;
    let next = Math.round(Math.max(0, Math.min(full - 8, anchorCut + over)));
    if (keep) next = Math.max(next, anchorCut);  // while a card stays open, don't pump the list up and down
    if (Math.abs(next - anchorCut) >= 1) setCut(next, reduce);
    return over - (next - anchorCut) <= 0.5;
  }
  const settleSoon = (cb, ms = DUR.slow + 40) => { clearTimeout(settleT); settleT = setTimeout(() => settleAnchor(cb), ms); };
  window.addEventListener('resize', () => settleSoon(null, 120));
  const timers = new Set();
  const later = (fn, ms) => { const t = setTimeout(() => { timers.delete(t); fn(); }, ms); timers.add(t); return t; };
  const clearTimers = () => { timers.forEach(clearTimeout); timers.clear(); };

  function renderCreate() {
    clearTimers();
    setHead(HEAD0.h, HEAD0.p, false);
    screens.create.querySelector(':scope > .center').inert = false;
    // the upload modal (upmCreate) gives the methods their place back
    const slot = document.getElementById('create-upm');
    slot.hidden = true; slot.innerHTML = '';
    methodsEl.hidden = false; screens.create.querySelector(':scope > .center').hidden = false;
    const card = (m, p, action) => `
      <div class="mcard" data-id="${m.id}">
        ${headHTML(m, 'button', `type="button" data-action="${action}" aria-expanded="false" aria-controls="${p}-${m.id}-panel"`)}
        <div class="acc" id="${p}-${m.id}-panel" role="region" aria-label="${m.title}" inert>
          <div class="acc-inner"><div class="mbody">${p === 'c' ? sceneC(m.id) + bodyHTML_C(m.id, p) : bodyHTML(m.id, p)}</div></div>
        </div>
      </div>`;
    methodsEl.dataset.mode = createMode();
    if (methodsEl.dataset.mode === 'accordion') {
      methodsEl.innerHTML = `<div class="method-list">${METHODS.map(m => card(m, 'a', 'toggle')).join('')}</div>`;
    } else if (variant === 'B') {
      methodsEl.innerHTML = `
        <div class="b-wrap">
          <div class="b-back"><div class="b-back-inner" inert><button class="back" type="button" data-action="back">${icon('arrowLeft')}Back</button></div></div>
          <div class="b-list">${METHODS.map(m => `<div class="slot" data-id="${m.id}"><div class="slot-inner">${card(m, 'b', 'open')}</div></div>`).join('')}</div>
          <aside class="b-aside" aria-label="Good to know" inert><div class="b-aside-inner"></div></aside>
        </div>`;
    } else {
      // Variant C, and A on phones: B's list and navigation, without the tray
      const p = variant === 'C' ? 'c' : 'a';
      methodsEl.innerHTML = `
        <div class="b-wrap is-${p}">
          <div class="b-back"><div class="b-back-inner" inert><button class="back" type="button" data-action="back">${icon('arrowLeft')}Back</button></div></div>
          <div class="b-list">${METHODS.map(m => `<div class="slot" data-id="${m.id}"><div class="slot-inner">${card(m, p, 'open')}</div></div>`).join('')}</div>
        </div>`;
    }
  }
  /* Phones always get two steps (list → the method on its own screen, with Back);
     A's expand-in-place accordion is for wider screens only. Same width as the phone layout's container query. */
  const phone = () => { const cs = getComputedStyle(device); return device.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) <= 560; };
  const createMode = () => variant === 'A' && !phone() ? 'accordion' : 'steps';
  const syncCreateMode = () => { if (current === 'create' && !methodsEl.hidden && methodsEl.dataset.mode !== createMode()) renderCreate(); };
  window.addEventListener('resize', syncCreateMode);

  /* ---------- Motion ---------- */
  // Mirrors the CSS motion tokens so JS-driven and CSS-driven motion share one scale.
  const DUR = { fast: 160, base: 260, slow: 380, travel: 560 };  // travel: one long spatial move (page → editor)
  const EASE = { standard: 'cubic-bezier(.2, 0, 0, 1)', exit: 'cubic-bezier(.4, 0, 1, 1)', inout: 'cubic-bezier(.4, 0, .2, 1)' };
  const STAGGER = 30;
  const play = (el, kf, o) => el.animate(kf, Object.assign({ fill: 'both' }, o));
  const shown = el => el.getClientRects().length > 0;
  const onScreen = el => { const r = el.getBoundingClientRect(); return r.height > 0 && r.width > 0; };  // skips folded-away items so they don't delay the stagger
  const scrollPos = () => framed() ? device.scrollTop : window.scrollY;

  function scrollToTop() {
    if (scrollPos() < 4) return Promise.resolve();
    scroller().scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    return new Promise(res => {
      const t0 = performance.now();
      const tick = () => (scrollPos() < 1 || performance.now() - t0 > 450) ? res() : requestAnimationFrame(tick);
      tick();
    });
  }

  /* Screen change.
     - The two screens overlap; total ≈ 450ms.
     - The headline changes in place (cross-fade, no movement): same flow, next question.
     - Content moves along one axis: forward = from the right, back = from the left.
     - The picked card leaves last, so the eye follows the choice into the next step.
     Clicking mid-way fast-forwards the running change and starts the new one, so no click is lost. */
  let screenRun = null;
  const FLOW = ['intent', 'create', 'route', 'loading'];
  async function go(screen, picked, towards) {
    if (screenRun) screenRun.finish();
    if (screen === current) return;
    if (APPS[current]) return leaveApp(screen);
    // from: the screen on view (current runs ahead of it while an earlier change waits for the scroll)
    const to = screens[screen], from = Object.values(screens).find(s => !s.hidden && s !== to) || screens[current];
    const dir = towards || (FLOW.indexOf(screen) < FLOW.indexOf(current) ? -1 : 1);
    setCurrent(screen);
    await scrollToTop();
    if (current !== screen) return; // another change started while scrolling

    setCut(0, true);
    const fromOffset = from.offsetTop;
    if (screen === 'create') renderCreate();

    // Overlap: pin the outgoing screen where it is while the new one lays out in flow.
    Object.assign(from.style, { position: 'absolute', top: fromOffset + 'px', left: '0', right: '0', pointerEvents: 'none' });
    to.hidden = false;

    const anims = [];
    const outHead = from.querySelector(':scope > .page-head'), inHead = to.querySelector(':scope > .page-head');
    const outItems = [...from.querySelectorAll('.intent, .irow, .b-back, .mcard, .b-aside, .ld-item, .rt-item, :scope > .center')].filter(onScreen);
    const inItems = [...to.querySelectorAll('.intent, .irow, .method-list > .mcard, .slot, .ld-item, .rt-item, :scope > .center')].filter(shown);

    if (reduce) {
      anims.push(play(from, [{ opacity: 1 }, { opacity: 0 }], { duration: DUR.fast, easing: EASE.exit }));
      anims.push(play(to, [{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, delay: 60, easing: EASE.standard }));
    } else {
      // Headline: cross-fade in place
      [...(outHead ? outHead.children : [])].forEach(el => anims.push(play(el, [{ opacity: 1 }, { opacity: 0 }], { duration: DUR.fast, easing: EASE.exit })));
      [...(inHead ? inHead.children : [])].forEach(el => anims.push(play(el, [{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, delay: 100, easing: EASE.standard })));
      // Content: leave toward the side we came from, enter from the side we're heading to
      const order = picked ? outItems.filter(el => el !== picked).concat(picked) : outItems;
      order.forEach((el, i) => {
        anims.push(play(el, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: `translateX(${-24 * dir}px)` }],
          { duration: DUR.fast, delay: i * (STAGGER / 2), easing: EASE.exit }));
      });
      inItems.forEach((el, i) => {
        anims.push(play(el, [{ opacity: 0, transform: `translateX(${32 * dir}px)` }, { opacity: 1, transform: 'none' }],
          { duration: DUR.base, delay: 120 + i * STAGGER, easing: EASE.standard }));
      });
    }

    let finished = false;
    const cleanup = () => {
      if (finished) return; finished = true;
      from.hidden = true; from.removeAttribute('style');
      anims.forEach(a => a.cancel());
      if (screenRun === run) screenRun = null;
    };
    const run = { finish() { anims.forEach(a => { try { a.finish(); } catch (e) {} }); cleanup(); } };
    screenRun = run;
    await Promise.all(anims.map(a => a.finished.catch(() => {})));
    cleanup();
    if (current === screen) landFocus(to);
  }

  let focusTimer = 0;
  function focusLater(el, ms) { clearTimeout(focusTimer); if (el) focusTimer = setTimeout(() => el.focus({ preventScroll: true }), ms); }
  /* After a screen or a step changes: focus left on something now hidden or gone moves to the new view's headline,
     so a screen reader reads it and Tab goes on from there */
  function landFocus(el) {
    const a = document.activeElement;
    if (a && a !== document.body && a.isConnected && a.getClientRects().length && !a.closest('[hidden], [inert]')) return;
    const t = [...el.querySelectorAll('h1')].find(x => x.getClientRects().length && !x.closest('[hidden]')) || el;  // no headline: the view itself
    if (!t.hasAttribute('tabindex')) t.tabIndex = -1;
    t.focus({ preventScroll: true });
  }

  function setOpen(card, open) {
    card.classList.toggle('is-open', open);
    card.querySelector('.mhead').setAttribute('aria-expanded', String(open));
    card.querySelector('.acc').inert = !open;
  }

  /* How an element will look once a state change has finished: lay out an invisible copy with the
     change applied and transitions off, measure it, throw it away. Returns its height and, for the
     probed child, its top and bottom relative to the element's top. */
  function settledLayout(el, apply, probe) {
    const ghost = el.cloneNode(true);
    ghost.querySelectorAll('[id]').forEach(n => n.removeAttribute('id'));
    ghost.classList.add('no-anim');
    Object.assign(ghost.style, { position: 'absolute', visibility: 'hidden', pointerEvents: 'none', top: '0', width: el.getBoundingClientRect().width + 'px' });
    ghost.setAttribute('aria-hidden', 'true');
    apply(ghost);
    el.after(ghost);
    const g = ghost.getBoundingClientRect(), c = probe && probe(ghost)?.getBoundingClientRect();
    ghost.remove();
    return { height: g.height, top: c ? c.top - g.top : 0, bottom: c ? c.bottom - g.top : 0 };
  }

  /* Variant A: one card open at a time. Everything moves in one motion: the fold, the other cards
     shrinking or growing back, the top gap easing to fit and, when even that can't fit the open
     card (short windows), the scroll that brings its bottom into view. Nothing moves afterwards. */
  function toggleA(card) {
    const opening = !card.classList.contains('is-open'), list = card.parentElement, cut0 = anchorCut;
    const after = settledLayout(list,
      ghost => ghost.querySelectorAll('.mcard').forEach(c => c.classList.toggle('is-open', opening && c.dataset.id === card.dataset.id)),
      ghost => ghost.querySelector(`.mcard[data-id="${card.dataset.id}"]`));
    const fits = fitCut(after.height - list.getBoundingClientRect().height, opening);
    let target = 0;
    if (!fits && opening) {
      const vTop = framed() ? device.getBoundingClientRect().top + device.clientTop : 0, vH = framed() ? device.clientHeight : innerHeight;
      const listTop = list.getBoundingClientRect().top - vTop + scrollPos() - (anchorCut - cut0);  // where the list will start once the gap has eased
      target = Math.max(0, Math.min(listTop + after.bottom + (framed() ? 16 : 24) - vH, listTop + after.top - (framed() ? 52 : 16)));
    }
    if (Math.abs(target - scrollPos()) > 1) scroller().scrollTo({ top: target, behavior: reduce ? 'auto' : 'smooth' });
    methodsEl.querySelectorAll('.mcard.is-open').forEach(c => { if (c !== card) setOpen(c, false); });
    setOpen(card, opening);
    focusLater(opening ? card.querySelector('.input, .textarea, .dropzone') : null, DUR.slow);
  }

  /* Variant B: other options fold away and the picked one becomes the screen.
     Pure CSS state, so Back mid-way simply reverses it. */
  /* Must-haves only: effort, the one risk people worry about for this method, and reversibility */
  const ASSURE = {
    linkedin: [['clock', '30 seconds', '30 sec'], ['shield', 'No LinkedIn login'],     ['pen', 'Fully editable']],
    ai:       [['clock', '1 minute', '1 min'],    ['sparkles', 'Tailored to your role'], ['pen', 'Fully editable']],
    upload:   [['clock', '20 seconds', '20 sec'], ['shield', 'Original untouched'],    ['pen', 'Fully editable']],
    paste:    [['clock', '30 seconds', '30 sec'], ['file', 'Messy text is fine'],      ['pen', 'Fully editable']]
  };
  // a short form (phones) keeps every label on one line
  const asideHTML = id => `<ul class="assure">${ASSURE[id].map(([ic, t, short]) =>
    `<li>${icon(ic)}${short ? `<span class="t-long">${t}</span><span class="t-short">${short}</span>` : `<span>${t}</span>`}</li>`).join('')}</ul>`;

  /* Variant C: the open method's title and subtitle take over the page headline, cross-fading in
     place like the headline does between screens; Back (or leaving) puts the original back. */
  const createHead = screens.create.querySelector(':scope > .page-head');
  const HEAD0 = { h: createHead.querySelector('h1').textContent, p: createHead.querySelector('p').textContent };
  let headTok = 0;
  function setHead(h, p, animate = true) {
    const els = [createHead.querySelector('h1'), createHead.querySelector('p')], tok = ++headTok;
    // a change still fading gives way to this one (else going back to the same text could leave it faded out)
    els.forEach(el => el.getAnimations().forEach(a => a.cancel()));
    createHead.getAnimations().forEach(a => a.cancel());
    if (els[0].textContent === h && els[1].textContent === p) return;
    const swap = () => { els[0].textContent = h; els[1].textContent = p; };
    if (!animate || reduce) return swap();
    // A different number of lines (phones) eases the headline's height from the click, with the same
    // duration and easing as the rest of the screen change, so everything below moves in one motion.
    const from = createHead.getBoundingClientRect().height, to = headHeightFor(h, p);
    if (Math.abs(from - to) > .5) createHead.animate([{ height: from + 'px' }, { height: to + 'px' }], { duration: DUR.slow, easing: EASE.inout });
    Promise.all(els.map(el => play(el, [{ opacity: 1 }, { opacity: 0 }], { duration: DUR.fast, easing: EASE.exit }).finished.catch(() => {}))).then(() => {
      if (tok !== headTok) return;
      swap();
      els.forEach(el => { el.getAnimations().forEach(a => a.cancel()); play(el, [{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard }); });
    });
  }

  // How tall the page headline would be with other text (measured on an invisible copy)
  function headHeightFor(h, p) {
    const g = createHead.cloneNode(true);
    g.querySelectorAll('[id]').forEach(n => n.removeAttribute('id'));
    g.querySelector('h1').textContent = h; g.querySelector('p').textContent = p;
    Object.assign(g.style, { position: 'absolute', visibility: 'hidden', top: '0', width: createHead.getBoundingClientRect().width + 'px' });
    createHead.after(g);
    const hh = g.getBoundingClientRect().height;
    g.remove();
    return hh;
  }

  function openB(id) {
    const wrap = methodsEl.querySelector('.b-wrap');
    if (!wrap || wrap.classList.contains('has-focus')) return;
    if (wrap.classList.contains('is-c')) {
      /* C: work out how tall the page will be once the method is open (card, new headline, skip link
         folded away) and ease the top gap in the same motion, so nothing shifts again afterwards */
      const m = byId(id), center = screens.create.querySelector(':scope > .center');
      const after = settledLayout(wrap, g => {
        g.classList.add('has-focus');
        g.querySelectorAll('.slot').forEach(sl => { const mine = sl.dataset.id === id; sl.classList.toggle('is-focus', mine); sl.querySelector('.mcard').classList.toggle('is-open', mine); });
      });
      fitCut(after.height - wrap.getBoundingClientRect().height + headHeightFor(m.title, m.sub) - createHead.getBoundingClientRect().height - center.getBoundingClientRect().height, true);
    }
    const aside = wrap.querySelector('.b-aside');
    if (aside) {
      aside.querySelector('.b-aside-inner').innerHTML = asideHTML(id);
      wrap.querySelector(`.slot[data-id="${id}"] > .slot-inner`).appendChild(aside);  // travels with the card
      void aside.getBoundingClientRect();  // register the folded state so the unfold animates
      aside.inert = false;
    }
    wrap.classList.add('has-focus');
    wrap.querySelector('.b-back-inner').inert = false;
    screens.create.querySelector(':scope > .center').inert = true;
    wrap.querySelectorAll('.slot').forEach(slot => {
      const mine = slot.dataset.id === id, card = slot.querySelector('.mcard'), head = card.querySelector('.mhead');
      slot.classList.toggle('is-focus', mine);
      slot.inert = !mine;
      setOpen(card, mine);
      if (mine) { head.setAttribute('aria-disabled', 'true'); head.tabIndex = -1; }
    });
    if (wrap.classList.contains('is-c')) setHead(byId(id).title, byId(id).sub);
    const top = wrap.getBoundingClientRect().top, minTop = framed() ? device.getBoundingClientRect().top + 52 : 16;
    if (top < minTop) scroller().scrollBy({ top: top - minTop, behavior: reduce ? 'auto' : 'smooth' });
    settleSoon();
    focusLater(wrap.querySelector('.slot.is-focus .input, .slot.is-focus .textarea, .slot.is-focus .dropzone') || wrap.querySelector('.back'), DUR.slow);
  }
  async function switchMethod(to) {
    const wrap = methodsEl.querySelector('.b-wrap.has-focus');
    if (!wrap) return;
    const list = wrap.querySelector('.b-list');
    if (!reduce) await list.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(-16px)' }],
      { duration: DUR.fast, easing: EASE.exit, fill: 'forwards' }).finished.catch(() => {});
    wrap.classList.add('no-anim');
    wrap.querySelectorAll('.slot').forEach(slot => {
      const mine = slot.dataset.id === to, card = slot.querySelector('.mcard'), head = card.querySelector('.mhead');
      slot.classList.toggle('is-focus', mine);
      slot.inert = !mine;
      setOpen(card, mine);
      if (mine) { head.setAttribute('aria-disabled', 'true'); head.tabIndex = -1; }
      else { head.removeAttribute('aria-disabled'); head.removeAttribute('tabindex'); }
    });
    void wrap.offsetHeight;
    wrap.classList.remove('no-anim');
    const isC = wrap.classList.contains('is-c');
    // C: the new method's height is already laid out (instantly, while the list is faded out); fit the
    // top gap now, together with the headline, so nothing shifts again after the fade-in
    if (isC) fitCut(headHeightFor(byId(to).title, byId(to).sub) - createHead.getBoundingClientRect().height, true);
    list.getAnimations().forEach(a => a.cancel());
    if (!reduce) list.animate([{ opacity: 0, transform: 'translateX(16px)' }, { opacity: 1, transform: 'none' }], { duration: DUR.base, easing: EASE.standard });
    if (isC) setHead(byId(to).title, byId(to).sub);
    (isC ? createHead.querySelector('h1') : wrap.querySelector('.slot.is-focus .mhead')).focus({ preventScroll: true });  // the new screen's heading
    settleSoon();
  }

  function backB() {
    const wrap = methodsEl.querySelector('.b-wrap');
    if (!wrap || !wrap.classList.contains('has-focus')) return;
    const focus = wrap.querySelector('.slot.is-focus');
    wrap.classList.remove('has-focus');
    const aside = wrap.querySelector('.b-aside');
    if (aside) aside.inert = true;
    wrap.querySelector('.b-back-inner').inert = true;
    screens.create.querySelector(':scope > .center').inert = false;
    wrap.querySelectorAll('.slot').forEach(slot => {
      const card = slot.querySelector('.mcard'), head = card.querySelector('.mhead');
      slot.classList.remove('is-focus'); slot.inert = false;
      setOpen(card, false);
      head.removeAttribute('aria-disabled'); head.removeAttribute('tabindex');
    });
    if (wrap.classList.contains('is-c')) setHead(HEAD0.h, HEAD0.p);
    settleSoon();
    focusLater(focus && focus.querySelector('.mhead'), wrap.classList.contains('is-c') ? DUR.slow : 0);  // C: once its header is back
  }

  /* ---------- Method behaviour ---------- */
  // a field's message is tied to its control while it shows, so it is read out with it (C's fields tie their own)
  let errSeq = 0;
  const setError = (field, on) => {
    field.classList.toggle('has-error', on);
    const err = field.querySelector(':scope > .error'), ctl = field.querySelector('.input, .textarea');
    if (!err || !ctl) return;
    ctl.setAttribute('aria-invalid', String(on));
    if (ctl.hasAttribute('aria-describedby') && !('errLink' in ctl.dataset)) return;
    err.id ||= 'err-' + ++errSeq;
    if (on) { ctl.setAttribute('aria-describedby', err.id); ctl.dataset.errLink = ''; } else { ctl.removeAttribute('aria-describedby'); delete ctl.dataset.errLink; }
  };

  /* ---------- Creating the resume ---------- */
  const STEPS = {
    linkedin: ['Reading your public profile', 'Pulling work history and education', 'Laying it out on a template'],
    ai: ['Writing your profile summary', 'Drafting your work experience', 'Picking skills for the role'],
    upload: ['Reading your file', 'Finding sections and dates', 'Moving it onto a template'],
    paste: ['Reading your text', 'Sorting it into resume sections', 'Laying it out on a template']
  };
  const BUSY_LABEL = { linkedin: 'Importing…', ai: 'Writing…', upload: 'Uploading…', paste: 'Reading…' };
  const SUBTITLE = {
    linkedin: 'We’re turning your LinkedIn profile into a resume.',
    ai: 'The AI is drafting a resume around your job title.',
    upload: 'We’re moving your old resume onto a fresh template.',
    paste: 'We’re sorting your text into resume sections.'
  };
  const BASE_PERSON = {
    titleBefore: '', titleAfter: '', first: 'Jana', last: 'Novák', jobTitle: 'Product Designer',
    phone: '+421 905 123 456', email: 'jana.novak@email.com', dob: '14.03.1993', nationality: 'Slovak',
    street: 'Obchodná 12', city: 'Bratislava', zip: '811 06', country: 'Slovakia', web: 'jananovak.design',
    profile: 'Product designer with 7 years of experience in health and finance apps. I turn research into clear decisions, prototype early, and work side by side with engineers to ship.',
    work: [
      { title: 'Senior Product Designer', org: 'Lumen Health', place: 'Bratislava', from: '03/2021', to: 'Present',
        bullets: ['Redesigned the patient booking flow and cut drop-off by 23%.', 'Built the first shared component library with two engineers.'] },
      { title: 'UX Designer', org: 'Pixelfield', place: 'Bratislava', from: '09/2018', to: '02/2021',
        bullets: ['Designed mobile banking features used by 400,000 people.'] }
    ],
    education: [{ title: 'MA Visual Communication', org: 'Academy of Fine Arts and Design', place: 'Bratislava', from: '2013', to: '2018' }],
    skills: ['Figma', 'User research', 'Prototyping', 'Design systems', 'Accessibility', 'Workshop facilitation'],
    hobbies: [['plane', 'Exploring distant lands'], ['book', 'Getting lost in a good book'], ['camera', 'Capturing moments'], ['music', 'Feeling the music'], ['bike', 'Weekend cycling']]
  };
  const cap = w => w ? w[0].toUpperCase() + w.slice(1) : '';
  function buildPerson(id, opts) {
    const p = JSON.parse(JSON.stringify(BASE_PERSON));
    if (id === 'ai' && opts) {
      const parts = opts.name.trim().split(/\s+/);
      p.first = parts[0]; p.last = parts.slice(1).join(' ');
      p.jobTitle = opts.title.trim();
      const ascii = w => w.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z]/g, '');
      p.email = [ascii(p.first), ascii(p.last)].filter(Boolean).join('.') + '@email.com';
      p.work[0].title = p.jobTitle;
      if (opts.company && opts.company.trim()) p.work[0].org = opts.company.trim();
      p.profile = `${p.jobTitle} with 7 years of experience delivering work people rely on every day. Known for turning messy problems into clear plans and for working closely with the people around me.`;
    }
    if (id === 'linkedin' && opts) {
      const slug = (opts.url.match(/linkedin\.com\/in\/([^/?#]+)/i) || [])[1] || '';
      const parts = slug.split('-').filter(w => /^[a-z]+$/i.test(w));
      if (parts.length >= 2) { p.first = cap(parts[0].toLowerCase()); p.last = cap(parts[1].toLowerCase()); p.email = `${parts[0]}.${parts[1]}@email.com`.toLowerCase(); }
    }
    const slugOf = w => w.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z]/g, '');
    if (id === 'ai' || id === 'linkedin') p.web = slugOf(p.first) + slugOf(p.last) + '.com';
    return p;
  }
  let person = buildPerson('paste');

  /* A resume uploaded or imported goes through the upload modal (Upload a resume, Import from LinkedIn); one that is
     created (Write with AI, Paste text, a section writer) through the building screen. Either way it then goes
     straight on: to the screen that asked for it (askCv), else to the editor or the run's destination. */
  function startCreation(form, id, opts) {
    const as = opts && opts.as;
    if ((id === 'upload' || id === 'linkedin') && !as) {
      const o = { id, opts, file: id === 'upload' ? (form._file || { name: 'jana-cv.pdf' }).name : '' };
      return current === 'route' ? upmRoute(form.closest('.rt-item'), routeNow, o) : upmCreate(o);
    }
    const btn = form.querySelector('[type="submit"]'), label = btn.innerHTML, at = current;
    btn.style.minWidth = btn.offsetWidth + 'px';
    btn.disabled = true;
    btn.innerHTML = `<svg class="i spin" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>${BUSY_LABEL[id]}`;
    later(() => {
      // left in the meantime (Back, Cancel, ×, the card closed): nothing is made and the button comes back
      if (current !== at || !form.isConnected || form.closest('[inert]')) { btn.innerHTML = label; btn.disabled = false; btn.style.minWidth = ''; return; }
      // a section writer (opts.as, Generate work experience / objective) changes only its section of a resume that is
      // already there; with none, the AI drafts a resume around it
      person = as && cvUploaded ? withSection(person, opts) : buildPerson(id, opts);
      // a screen asked for the resume (askCv): it gets it once the building screen is done
      const then = cvNext;
      if (then && !cvUploaded) setCv(true);
      showBuilding(id, as);
      buildNext = as ? as.done : then;
    }, 450);
  }
  /* The section writers' building screen: what they write, in which section the editor opens afterwards */
  const SECTION_AS = {
    experience: { own: true, head: 'Writing your work experience', sub: 'The AI writes it from your job title and puts it in your resume.', steps: ['Reading your job title', 'Writing the bullet points', 'Adding it to your resume'], ready: 'Your work experience is ready!', done: () => openEditorAt('work') },
    objective: { own: true, head: 'Writing your resume objective', sub: 'The AI writes it for the role you’re aiming for and puts it in your resume.', steps: ['Reading the role', 'Writing your objective', 'Adding it to your resume'], ready: 'Your objective is ready!', done: () => openEditorAt('profile') },
    summary: { own: true, head: 'Writing your resume summary', sub: 'The AI writes it from your job title and puts it at the top of your resume.', steps: ['Reading your resume', 'Writing your summary', 'Adding it to your resume'], ready: 'Your summary is ready!', done: () => openEditorAt('profile') }
  };
  function withSection(p, opts) {
    const q = JSON.parse(JSON.stringify(p)), title = opts.title.trim();
    if (opts.as === SECTION_AS.experience) {
      // the most recent job gets what was written (its dates and place stay)
      Object.assign(q.work[0], { title, org: (opts.company || '').trim() || q.work[0].org,
        bullets: [`Owned the ${title.toLowerCase()} work end to end, from first research to shipped results.`, 'Planned and prioritised with the team so every release landed on time.'] });
    } else if (opts.as === SECTION_AS.summary) q.profile = `${title} with a record of turning messy problems into clear plans and shipped results. Works closely with the people around them and keeps every project moving.`;
    else q.profile = `${title} who turns messy problems into clear plans and works closely with the people around them. Looking for a ${title.toLowerCase()} role where that makes a difference.`;
    return q;
  }
  let buildingAs = null;
  function showBuilding(id, as) {
    buildingAs = as || null;
    edDoc = as && as.letter ? as.letter : as && as.own ? 'resume' : 'resume';  // a section writer adds to the resume; a letter is its own document
    if (!as || !as.own) tailored = null;  // a new resume (a section writer only adds to the one there is)
    document.getElementById('loading-h').textContent = as ? as.head : 'Building your resume';
    document.getElementById('loading-sub').textContent = as ? as.sub : SUBTITLE[id];
    const badge = screens.loading.querySelector('.ld-badge');
    badge.classList.remove('is-on'); badge.style.opacity = ''; badge.getAnimations().forEach(a => a.cancel());  // a celebration cut short
    document.getElementById('loading-steps').innerHTML = (as ? (as.own ? as.steps : [STEPS[id][0], ...as.steps]) : STEPS[id]).map(s => `<li class="step"><span class="dot">${icon('check')}</span>${s}</li>`).join('');
    const paper = screens.loading.querySelector('.ld-paper');
    paper.classList.remove('is-done');
    paper.querySelectorAll('.ld-group').forEach(g => g.classList.remove('is-filled'));
    go('loading');
    runBuilding();
  }

  /* Each finished step visibly fills part of the page, so progress reads as "your resume taking shape" */
  function runBuilding() {
    const steps = [...screens.loading.querySelectorAll('.step')];
    const paper = screens.loading.querySelector('.ld-paper');
    const groups = [...paper.querySelectorAll('.ld-group')];
    const fills = [[0], [1, 2], [3]];
    const T = 900, start = 420;
    // a run's processing set to fail (More options › Result) stops on its second step, with no "ready" and no
    // confetti, and goes on to the processing state that says so
    if (procResult !== 'ok' && flowNow && flowNow.steps[flowAt] && flowNow.steps[flowAt].stage === 'process') {
      steps.slice(0, 2).forEach((st, i) => later(() => { if (i) steps[0].classList.replace('is-active', 'is-done'); st.classList.add('is-active'); }, start + i * T));
      return later(afterBuild, start + 1.6 * T);
    }
    steps.forEach((st, i) => later(() => {
      if (i) { steps[i - 1].classList.replace('is-active', 'is-done'); fills[i - 1].forEach(g => groups[g].classList.add('is-filled')); }
      st.classList.add('is-active');
    }, start + i * T));
    later(() => {
      const last = steps.length - 1;
      steps[last].classList.replace('is-active', 'is-done');
      fills[last].forEach(g => groups[g].classList.add('is-filled'));
      paper.classList.add('is-done');
      later(celebrateBuilt, 220);
    }, start + steps.length * T);
  }

  /* ---------- Celebration ---------- */
  const POP = { duration: 560, easing: 'cubic-bezier(.2, 0, 0, 1)' };
  const popIn = (el, from = .6) => el.animate([
    { transform: `scale(${from})`, opacity: 0 },
    { transform: 'scale(1.12)', opacity: 1, offset: .55 },
    { transform: 'scale(.96)', offset: .78 },
    { transform: 'scale(1)', opacity: 1 }], POP);

  // Lightweight confetti: brand colours, gravity, drag, a little flutter. One shared canvas.
  const CONFETTI_COLORS = ['#ff5e59', '#a066ff', '#666cff', '#1da36e', '#ffc107', '#514eea', '#fbe0de'];
  let confettiCanvas = null, confettiParts = [], confettiRaf = 0;
  function confetti(x, y, opts = {}) {
    if (reduce) return;
    const { count = 90, spread = 70, angle = -90, power = 12 } = opts;
    if (!confettiCanvas) {
      confettiCanvas = document.createElement('canvas');
      confettiCanvas.className = 'confetti';
      document.body.appendChild(confettiCanvas);
    }
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    confettiCanvas.width = innerWidth * dpr; confettiCanvas.height = innerHeight * dpr;
    for (let i = 0; i < count; i++) {
      const a = (angle + (Math.random() - .5) * spread) * Math.PI / 180;
      const v = power * (.55 + Math.random() * .6);
      confettiParts.push({
        x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, rot: Math.random() * 360, vr: (Math.random() - .5) * 18,
        w: 6 + Math.random() * 5, h: 3 + Math.random() * 4, round: Math.random() < .3, t: 0,
        life: 70 + Math.random() * 50, flutter: Math.random() * Math.PI * 2,
        color: CONFETTI_COLORS[(Math.random() * CONFETTI_COLORS.length) | 0]
      });
    }
    if (!confettiRaf) confettiRaf = requestAnimationFrame(drawConfetti);
  }
  function drawConfetti() {
    const ctx = confettiCanvas.getContext('2d'), dpr = confettiCanvas.width / innerWidth;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.save();
    if (framed()) {  // keep the party inside the phone
      const b = device.getBoundingClientRect();
      ctx.beginPath(); ctx.roundRect(b.left + device.clientLeft, b.top + device.clientTop, device.clientWidth, device.clientHeight, 38); ctx.clip();
    }
    confettiParts = confettiParts.filter(p => p.t < p.life && p.y < innerHeight + 40);
    for (const p of confettiParts) {
      p.t++; p.vx *= .985; p.vy = p.vy * .985 + .32; p.flutter += .18;
      p.x += p.vx + Math.sin(p.flutter) * .6; p.y += p.vy; p.rot += p.vr;
      ctx.save();
      ctx.globalAlpha = Math.min(1, (p.life - p.t) / 22);
      ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180);
      ctx.scale(1, Math.abs(Math.cos(p.flutter)) * .7 + .3);
      ctx.fillStyle = p.color;
      if (p.round) { ctx.beginPath(); ctx.arc(0, 0, p.h, 0, Math.PI * 2); ctx.fill(); }
      else ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    ctx.restore();
    if (confettiParts.length) confettiRaf = requestAnimationFrame(drawConfetti);
    else { confettiRaf = 0; confettiCanvas.remove(); confettiCanvas = null; }
  }

  /* On the building screen: the page pops, a check stamps onto it,
     confetti bursts from behind it and the headline changes to the good news. */
  function celebrateBuilt() {
    const h = document.getElementById('loading-h'), sub = document.getElementById('loading-sub');
    const wrap = screens.loading.querySelector('.ld-paper-wrap'), badge = wrap.querySelector('.ld-badge'), paper = wrap.querySelector('.ld-paper');
    const swapText = (el, text) => {
      if (reduce) { el.textContent = text; return; }
      el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 120, easing: EASE.exit }).finished.then(() => {
        el.textContent = text;
        el.animate([{ opacity: 0, transform: 'translateY(6px) scale(.98)' }, { opacity: 1, transform: 'none' }], { duration: DUR.base, easing: EASE.standard });
      });
    };
    swapText(h, buildingAs ? buildingAs.ready : 'Your resume is ready!');
    swapText(sub, `Nice work${person.first ? ', ' + person.first : ''}. That was the hardest part.`);
    badge.classList.add('is-on');
    if (reduce) { badge.style.opacity = 1; later(() => { badge.style.opacity = ''; afterBuild(); }, 900); return; }
    paper.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.06)', offset: .4 }, { transform: 'scale(.99)', offset: .75 }, { transform: 'scale(1)' }], { duration: 520, easing: 'cubic-bezier(.2,0,0,1)' });
    popIn(badge, .2).finished.then(() => { if (badge.classList.contains('is-on')) badge.style.opacity = 1; });
    const r = paper.getBoundingClientRect();
    later(() => {
      confetti(r.left + r.width * .2, r.top + r.height * .35, { angle: -115, spread: 50, power: 13, count: 60 });
      confetti(r.right - r.width * .2, r.top + r.height * .35, { angle: -65, spread: 50, power: 13, count: 60 });
    }, 120);
    later(() => { badge.style.opacity = ''; afterBuild(); }, 1500);
  }


  /* ---------- Editor ---------- */
  const esc = v => String(v ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const fullName = () => [person.titleBefore, person.first, person.last].filter(Boolean).join(' ') + (person.titleAfter ? ', ' + person.titleAfter : '');
  /* The editor's document: the resume, or the cover letter the AI Cover Letter Writer wrote (edDoc 'cover': its
     destination is Fill In with the letter instead of the CV, the user's rule). The letter's fields live on person
     (letterTo, letterCompany, letterRole, letterBody); LETTER_AS words its building screen, the same one a resume has. */
  let edDoc = 'resume';
  const isLetter = () => edDoc !== 'resume';
  // the letters: their name, building screen (LETTER_AS) and what the AI writes
  const LETTER = {
    cover: { name: 'Cover Letter', what: 'cover letter', to: 'Hiring Manager', greet: 'Dear', role: 'Server Administrator', company: 'Cisco',
      body: (role, co) => `I’m writing to apply for the ${role} position at ${co}. ${person.profile || ''}\n\nIn my recent roles I planned and shipped work end to end, kept the people around me in the loop and turned unclear problems into clear plans. I’d bring the same care to your team.\n\nThank you for your time. I’d be glad to talk about how I can help ${co}.` },
    resign: { name: 'Resignation Letter', what: 'resignation letter', to: 'Martin Kováč, Head of Product', greet: 'Dear', role: person.jobTitle || 'Product Designer', company: 'Lumen Health',
      body: (role, co) => `Please accept this letter as formal notice of my resignation from my position as ${role} at ${co}. My last working day will be in four weeks, in line with my notice period.\n\nThank you for the support and the opportunities I’ve had here. I’m proud of what we built together and grateful to the team.\n\nI’ll do everything I can to hand over my work smoothly during the next weeks, and I’m happy to help find and train my replacement.` }
  };
  const docName = () => `${[person.first, person.last].filter(Boolean).join(' ') || 'Untitled'} ${isLetter() ? LETTER[edDoc].name : 'Resume'}`;
  const LETTER_AS = Object.fromEntries(Object.entries(LETTER).map(([k, L]) => [k, { own: true, letter: k, head: `Writing your ${L.what}`, sub: 'The AI writes it from what you gave it. You can edit everything after.',
    steps: ['Reading your details', 'Picking the right tone', `Writing your ${L.what}`], ready: `Your ${L.what} is ready!`, done: () => openEditor() }]));
  // the letter's fields, written once per letter kind (a new Generate rewrites them)
  function letterFor(kind = 'cover', role, company) {
    const L = LETTER[kind];
    role = role || (person.letterKind === kind && person.letterRole) || L.role; company = company || (person.letterKind === kind && person.letterCompany) || L.company;
    Object.assign(person, { letterKind: kind, letterTo: L.to, letterCompany: company, letterRole: role, letterBody: L.body(role, company) });
  }
  // a writer's Generate: the building screen, then Fill In with the letter
  function writeLetter(kind, role, company) { letterFor(kind, role, company); showBuilding('ai', LETTER_AS[kind]); }
  function letterHTML() {
    const P = person, paras = (P.letterBody || '').split(/\n+/).filter(Boolean);
    return `<div class="rv-sec" data-action="rv-sec" data-sec="personal" tabindex="0" role="button" aria-label="Edit personal information">
        <h2 class="rv-name">${esc(fullName()) || '&nbsp;'}</h2>${P.jobTitle ? `<p class="rv-role">${esc(P.jobTitle)}</p>` : ''}
        <div class="rv-details">${[P.phone, P.email, P.web].filter(Boolean).map(v => `<div>${esc(v)}</div>`).join('')}</div></div>
      <div class="rv-sec cl-to" data-action="rv-sec" data-sec="letter-to" tabindex="0" role="button" aria-label="Edit the recipient"><b>${esc(P.letterTo || '')}</b><span>${esc(P.letterCompany || '')}</span><span>Re: ${edDoc === 'resign' ? 'Resignation, ' : ''}${esc(P.letterRole || '')}</span></div>
      <div class="rv-sec cl-body" data-action="rv-sec" data-sec="letter" tabindex="0" role="button" aria-label="Edit the letter"><p>Dear ${esc((P.letterTo || 'Hiring Manager').split(',')[0])},</p>${paras.map(t => `<p>${esc(t)}</p>`).join('')}<p>Sincerely,<br>${esc(fullName())}</p></div>`;
  }

  function resumeHTML() {
    const P = person;
    const addr = [P.street, [P.zip, P.city].filter(Boolean).join(' '), P.country].filter(Boolean).join(', ');
    const rows = [['Date of birth', P.dob], ['Nationality', P.nationality], ['Address', addr], ['Phone number', P.phone], ['Email address', P.email], ['Web', P.web]]
      .filter(r => r[1]).map(([k, v]) => `<div><b>${k}:</b> ${esc(v)}</div>`).join('');
    const sec = (key, n, title, body) => `<div class="rv-sec" data-action="rv-sec" data-sec="${key}" tabindex="0" role="button" aria-label="Edit ${title}"><h3><span>${n}</span>${title}</h3><i class="rv-ul"></i>${body}</div>`;
    const entry = e => `<div class="rv-entry"><b>${esc(e.title)}${e.org ? ' | ' + esc(e.org) : ''}</b><span class="rv-meta">${esc(e.from)} – ${esc(e.to)}${e.place ? ' · ' + esc(e.place) : ''}</span>${e.bullets && e.bullets.length ? `<ul>${e.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}</div>`;
    return `
      <div class="rv-sec" data-action="rv-sec" data-sec="personal" tabindex="0" role="button" aria-label="Edit personal information">
        <h2 class="rv-name">${esc(fullName()) || '&nbsp;'}</h2>
        ${P.jobTitle ? `<p class="rv-role">${esc(P.jobTitle)}</p>` : ''}
        <div class="rv-details">${rows}</div>
      </div>
      ${P.profile ? sec('profile', '01', 'Profile', `<p>${esc(P.profile)}</p>`) : ''}
      ${sec('work', '02', 'Work Experience', P.work.map(entry).join(''))}
      ${sec('education', '03', 'Education', P.education.map(entry).join(''))}
      ${sec('skills', '04', 'Strengths', `<ul class="rv-skills">${P.skills.map(k => `<li>${esc(k)}</li>`).join('')}</ul>`)}
      ${sec('hobbies', '05', 'Hobbies', `<div class="rv-hobbies">${P.hobbies.map(([ic, t]) => `<div>${icon(ic)}<span>${esc(t)}</span></div>`).join('')}</div>`)}
      <span class="rv-mark" aria-hidden="true">PREVIEW</span>`;
  }

  /* The app's menu: the same left sidebar on every page inside the app (editor, dashboard, My Documents, the
     resume tools), and the same top bar on phones. `at` marks the page: dashboard, docs, fill (the editor), ats,
     design (the editor's Design tab), proof or coach. The current resume's group shows on the resume pages, and elsewhere once there is a CV. */
  const NAV_SOON = { download: 'Download &amp; Share' };
  function appNavHTML(at) {
    const P = person, logo = document.querySelector('#topbar .logo').innerHTML;
    const here = key => at === key ? ' is-active" aria-current="page' : '';
    const item = (ic, label, key, extra = '') => `<li><button class="nav-item${here(key)}" type="button"${at === key ? '' : ` data-nav="${key}"`}>${icon(ic)}${label}${extra}</button></li>`;
    const sub = (label, key, nav = key) => `<button class="nav-item nav-sub${here(key)}" type="button"${at === key ? '' : ` data-nav="${nav}"`}>${label}</button>`;
    const doc = ['fill', 'design', 'ats', 'proof', 'coach'].includes(at) || cvUploaded ? `<li class="nav-doc">
        <button class="nav-item" type="button"${['fill', 'design'].includes(at) ? ' aria-current="true"' : ' data-nav="edit"'}>${icon('pen')}<span class="doc-title" data-out="docname">${esc(docName())}</span></button>
        ${sub('Fill In', 'fill', 'edit')}${sub('Design', 'design')}${sub('ATS Checker', 'ats')}${sub('Proofread &amp; Translate', 'proof')}${sub('Download &amp; Share', 'download')}
      </li>` : '';
    return `
      <div class="ed-mbar">
        <button class="logo" type="button" data-action="restart" aria-label="Kickresume, back to start">${logo}</button>
        <button class="icon-sq" type="button" data-action="toast" data-msg="The menu holds the same links as the desktop sidebar." aria-label="Menu">${icon('menu')}</button>
      </div>
      <nav class="ed-side" aria-label="Main">
        <button class="logo" type="button" data-action="restart" aria-label="Kickresume, back to start">${logo}</button>
        <div class="acct"><span class="av" data-out="initial">${esc((P.first || 'J')[0])}</span><span class="acct-text"><b>My Account</b><span data-out="fullname">${esc([P.first, P.last].join(' '))}</span></span></div>
        <ul class="nav">
          ${item('home', 'Dashboard', 'dashboard')}${item('file', 'My Documents', 'docs')}${doc}
          ${item('map', 'Career Map', 'career-map')}${item('chat', 'Job Interviews', 'interviews')}${item('search', 'Find Jobs', 'jobs')}${item('list', 'Job Tracker', 'tracker', ' <span class="badge-new">NEW</span>')}
        </ul>
        <div class="ed-plan"><span>Current plan: <b>FREE</b></span><button class="btn btn-gradient btn-block" type="button" data-nav="upgrade">Upgrade</button></div>
      </nav>`;
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-nav]');
    if (!b) return;
    if (asGuest()) return signupPop('use the rest of Kickresume');  // a guest on the job board: the app's menu needs an account
    const n = b.dataset.nav;
    if (n === 'dashboard') openDashboard();
    else if (n === 'docs') openDocs();
    else if (n === 'edit') openEdit();
    else if (n === 'design') openDesign();
    else if (n === 'ats' || n === 'proof') openTool(n);
    else if (n === 'career-map') openCareer();
    else if (n === 'interviews') openRoute(findRoute('/dashboard/create-interview/'));
    else if (n === 'jobs') openJobs('match');
    else if (n === 'tracker') openJobs('tracker');
    else if (n === 'upgrade') openUpgrade(upgPlan);
    else toast(`${NAV_SOON[n]} isn’t part of this prototype.`.replace('&amp;', '&'));
  });

  /* ---------- Resume Tailoring (the editor's right pane, once a resume has been tailored) ----------
     From Figma (Kickresume 3.0 › Tailor & Rewrite › Initial screen - after tailoring completes, 56166:15938; what
     opens from the frames beside it, 57195:201676 and 58265:12824). The tailoring's Continue opens the editor with this
     tab on (edTab); Edit Preview brings the resume preview back. Both lists start folded; picking a keyword (only one
     at a time) opens and marks every change that added it and folds the rest. The Fill In side doesn't change. */
  // exported from the Figma frame as they are (one-colour ones in currentColor); eye, target and help are the toggle's
  const TRT_IC = {
    scale: '<svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M13.3333 13.3327L15.8333 6.66602L18.3333 13.3327C17.6083 13.8743 16.7333 14.166 15.8333 14.166C14.9333 14.166 14.0583 13.8743 13.3333 13.3327Z" stroke="url(#paint0_linear_57209_2667)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.66675 13.3327L4.16675 6.66602L6.66675 13.3327C5.94175 13.8743 5.06675 14.166 4.16675 14.166C3.26675 14.166 2.39175 13.8743 1.66675 13.3327Z" stroke="url(#paint1_linear_57209_2667)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.83325 17.5H14.1666" stroke="url(#paint2_linear_57209_2667)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 2.5V17.5" stroke="url(#paint3_linear_57209_2667)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 5.83268H4.16667C5.83333 5.83268 8.33333 4.99935 10 4.16602C11.6667 4.99935 14.1667 5.83268 15.8333 5.83268H17.5" stroke="url(#paint4_linear_57209_2667)" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_57209_2667" x1="13.3333" y1="6.66602" x2="20.2563" y2="11.2814" gradientUnits="userSpaceOnUse"><stop stop-color="#5345FF"/><stop offset="1" stop-color="#9C3EFF"/></linearGradient><linearGradient id="paint1_linear_57209_2667" x1="1.66675" y1="6.66602" x2="8.58982" y2="11.2814" gradientUnits="userSpaceOnUse"><stop stop-color="#5345FF"/><stop offset="1" stop-color="#9C3EFF"/></linearGradient><linearGradient id="paint2_linear_57209_2667" x1="5.83325" y1="17.5" x2="6.06984" y2="19.4716" gradientUnits="userSpaceOnUse"><stop stop-color="#5345FF"/><stop offset="1" stop-color="#9C3EFF"/></linearGradient><linearGradient id="paint3_linear_57209_2667" x1="10" y1="2.5" x2="11.9912" y2="2.63274" gradientUnits="userSpaceOnUse"><stop stop-color="#5345FF"/><stop offset="1" stop-color="#9C3EFF"/></linearGradient><linearGradient id="paint4_linear_57209_2667" x1="2.5" y1="4.16602" x2="2.86585" y2="7.4587" gradientUnits="userSpaceOnUse"><stop stop-color="#5345FF"/><stop offset="1" stop-color="#9C3EFF"/></linearGradient></defs></svg>',
    list: '<svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M10.8333 4.16602H17.4999" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.8333 10H17.4999" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.8333 15.834H17.4999" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 14.1667L4.16667 15.8333L7.5 12.5" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 5.83268L4.16667 7.49935L7.5 4.16602" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    bulb: '<svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M12.5 11.666C12.6667 10.8327 13.0833 10.2493 13.75 9.58268C14.5833 8.83268 15 7.74935 15 6.66602C15 5.33993 14.4732 4.06816 13.5355 3.13048C12.5979 2.1928 11.3261 1.66602 10 1.66602C8.67392 1.66602 7.40215 2.1928 6.46447 3.13048C5.52678 4.06816 5 5.33993 5 6.66602C5 7.49935 5.16667 8.49935 6.25 9.58268C6.83333 10.166 7.33333 10.8327 7.5 11.666" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.5 15H12.5" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.33325 18.334H11.6666" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    chev: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    plus: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path d="M3.3335 8H12.6668" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 3.33398V12.6673" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    eye: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_56166_15942)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.46558 8.00013C1.537 8.12299 1.63005 8.27701 1.74416 8.4537C2.05073 8.92838 2.50469 9.55955 3.0939 10.188C4.28508 11.4586 5.94621 12.6335 7.99989 12.6335C10.0536 12.6335 11.7147 11.4586 12.9059 10.188C13.4951 9.55955 13.949 8.92838 14.2556 8.4537C14.3697 8.27701 14.4628 8.12299 14.5342 8.00013C14.4628 7.87727 14.3697 7.72325 14.2556 7.54656C13.949 7.07188 13.4951 6.44071 12.9059 5.81222C11.7147 4.54162 10.0536 3.3668 7.99989 3.3668C5.94621 3.3668 4.28508 4.54162 3.0939 5.81222C2.50469 6.44071 2.05073 7.07188 1.74416 7.54656C1.63005 7.72325 1.537 7.87727 1.46558 8.00013ZM15.3332 8.00013C15.9593 7.68708 15.9591 7.68659 15.9591 7.68659L15.958 7.68439L15.9556 7.67975L15.948 7.66477C15.9416 7.65229 15.9325 7.63487 15.9208 7.61283C15.8975 7.56877 15.8637 7.5062 15.8196 7.42778C15.7315 7.27103 15.6017 7.05036 15.4317 6.78703C15.0924 6.26172 14.588 5.55955 13.9272 4.8547C12.6184 3.45864 10.6129 1.9668 7.99989 1.9668C5.3869 1.9668 3.38136 3.45864 2.07254 4.8547C1.41175 5.55955 0.907373 6.26172 0.568108 6.78703C0.398041 7.05036 0.268321 7.27103 0.180148 7.42778C0.136035 7.5062 0.102243 7.56877 0.0789257 7.61283C0.0672649 7.63487 0.0582163 7.65229 0.0517997 7.66477L0.0441482 7.67975L0.0418056 7.68439L0.0410057 7.68598C0.0410057 7.68598 0.0404537 7.68708 0.666553 8.00013L0.0404537 7.68708C-0.0580809 7.88415 -0.0580809 8.11611 0.0404537 8.31318L0.666553 8.00013C0.0404537 8.31318 0.0404537 8.31318 0.0404537 8.31318L0.0418056 8.31587L0.0441482 8.32051L0.0517997 8.33549C0.0582163 8.34797 0.0672649 8.36539 0.0789257 8.38743C0.102243 8.43149 0.136035 8.49406 0.180148 8.57248C0.268321 8.72923 0.398041 8.9499 0.568108 9.21323C0.907373 9.73854 1.41175 10.4407 2.07254 11.1456C3.38136 12.5416 5.3869 14.0335 7.99989 14.0335C10.6129 14.0335 12.6184 12.5416 13.9272 11.1456C14.588 10.4407 15.0924 9.73854 15.4317 9.21323C15.6017 8.9499 15.7315 8.72923 15.8196 8.57248C15.8637 8.49406 15.8975 8.43149 15.9208 8.38743C15.9325 8.36539 15.9416 8.34797 15.948 8.33549L15.9556 8.32051L15.958 8.31587L15.9588 8.31428C15.9588 8.31428 15.9593 8.31318 15.3332 8.00013ZM15.3332 8.00013L15.9593 8.31318C16.0579 8.11611 16.0576 7.88366 15.9591 7.68659L15.3332 8.00013Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00005 6.70078C7.28208 6.70078 6.70005 7.28281 6.70005 8.00078C6.70005 8.71875 7.28208 9.30078 8.00005 9.30078C8.71802 9.30078 9.30005 8.71875 9.30005 8.00078C9.30005 7.28281 8.71802 6.70078 8.00005 6.70078ZM5.30005 8.00078C5.30005 6.50961 6.50888 5.30078 8.00005 5.30078C9.49122 5.30078 10.7 6.50961 10.7 8.00078C10.7 9.49195 9.49122 10.7008 8.00005 10.7008C6.50888 10.7008 5.30005 9.49195 5.30005 8.00078Z" fill="currentColor"/></g><defs><clipPath id="clip0_56166_15942"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>',
    target: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_56166_15950)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99948 2.03281C4.70418 2.03281 2.03281 4.70418 2.03281 7.99948C2.03281 11.2948 4.70418 13.9661 7.99948 13.9661C11.2948 13.9661 13.9661 11.2948 13.9661 7.99948C13.9661 4.70418 11.2948 2.03281 7.99948 2.03281ZM0.632812 7.99948C0.632812 3.93098 3.93098 0.632812 7.99948 0.632812C12.068 0.632812 15.3661 3.93098 15.3661 7.99948C15.3661 12.068 12.068 15.3661 7.99948 15.3661C3.93098 15.3661 0.632812 12.068 0.632812 7.99948Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.9998 4.70078C6.17726 4.70078 4.6998 6.17824 4.6998 8.00078C4.6998 9.82332 6.17726 11.3008 7.9998 11.3008C9.82234 11.3008 11.2998 9.82332 11.2998 8.00078C11.2998 6.17824 9.82234 4.70078 7.9998 4.70078ZM3.2998 8.00078C3.2998 5.40504 5.40407 3.30078 7.9998 3.30078C10.5955 3.30078 12.6998 5.40504 12.6998 8.00078C12.6998 10.5965 10.5955 12.7008 7.9998 12.7008C5.40407 12.7008 3.2998 10.5965 3.2998 8.00078Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00013 7.3668C7.65035 7.3668 7.3668 7.65035 7.3668 8.00013C7.3668 8.34991 7.65035 8.63346 8.00013 8.63346C8.34991 8.63346 8.63346 8.34991 8.63346 8.00013C8.63346 7.65035 8.34991 7.3668 8.00013 7.3668ZM5.9668 8.00013C5.9668 6.87715 6.87715 5.9668 8.00013 5.9668C9.12311 5.9668 10.0335 6.87715 10.0335 8.00013C10.0335 9.12311 9.12311 10.0335 8.00013 10.0335C6.87715 10.0335 5.9668 9.12311 5.9668 8.00013Z" fill="currentColor"/></g><defs><clipPath id="clip0_56166_15950"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>',
    help: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_56166_15960)"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99997 2.03281C4.70467 2.03281 2.0333 4.70418 2.0333 7.99948C2.0333 11.2948 4.70467 13.9661 7.99997 13.9661C11.2953 13.9661 13.9666 11.2948 13.9666 7.99948C13.9666 4.70418 11.2953 2.03281 7.99997 2.03281ZM0.633301 7.99948C0.633301 3.93098 3.93147 0.632812 7.99997 0.632812C12.0685 0.632812 15.3666 3.93098 15.3666 7.99948C15.3666 12.068 12.0685 15.3661 7.99997 15.3661C3.93147 15.3661 0.633301 12.068 0.633301 7.99948Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.1665 5.38161C7.86391 5.32971 7.55272 5.38657 7.28804 5.54212C7.02335 5.69768 6.82227 5.94189 6.72039 6.2315C6.5921 6.59619 6.19246 6.78783 5.82776 6.65954C5.46307 6.53125 5.27143 6.13161 5.39972 5.76692C5.61131 5.16542 6.02896 4.65822 6.57868 4.33514C7.1284 4.01206 7.77473 3.89396 8.40318 4.00176C9.03163 4.10956 9.60165 4.43629 10.0123 4.92409C10.4228 5.41172 10.6475 6.02885 10.6467 6.66624C10.6465 7.70431 9.87723 8.38683 9.33501 8.74831C9.04257 8.94327 8.75511 9.0865 8.54352 9.18054C8.43673 9.22801 8.34676 9.26404 8.28185 9.28877C8.24934 9.30115 8.22295 9.31077 8.20369 9.31761L8.18021 9.32584L8.17268 9.32841L8.17001 9.32931L8.16895 9.32966L8.16849 9.32982C8.16828 9.32989 8.16808 9.32995 7.95283 8.6842L8.16808 9.32995C7.80132 9.45221 7.4049 9.254 7.28264 8.88724C7.16039 8.52048 7.3586 8.12405 7.72536 8.0018L7.94659 8.6655C7.72536 8.0018 7.72517 8.00186 7.72499 8.00192L7.72467 8.00203L7.72416 8.0022L7.72366 8.00237C7.72355 8.0024 7.72391 8.00229 7.7247 8.00201L7.73467 7.99851C7.74471 7.99495 7.76129 7.98893 7.78346 7.98048C7.82793 7.96354 7.89421 7.93708 7.97492 7.90121C8.13833 7.82858 8.35087 7.72181 8.55843 7.58344C9.01615 7.27829 9.24672 6.96094 9.24672 6.66588L9.24672 6.66483C9.24718 6.35783 9.13897 6.06056 8.94125 5.8257C8.74354 5.59083 8.46909 5.43351 8.1665 5.38161ZM10.6467 6.66624C10.6467 6.66647 10.6467 6.66669 10.6467 6.66692L9.94672 6.66588H10.6467C10.6467 6.666 10.6467 6.66612 10.6467 6.66624Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.2998 11.3328C7.2998 10.9462 7.61321 10.6328 7.9998 10.6328H8.00647C8.39307 10.6328 8.70647 10.9462 8.70647 11.3328C8.70647 11.7194 8.39307 12.0328 8.00647 12.0328H7.9998C7.61321 12.0328 7.2998 11.7194 7.2998 11.3328Z" fill="currentColor"/></g><defs><clipPath id="clip0_56166_15960"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>'
  };
  const TRT = {
    job: 'Portfolio Performance Controller',  // the design's job, when the job post came as a link
    strategy: 'You’re a strong same-field match. Your 10+ years of UAE finance experience across treasury, trade finance, and ERP-based reporting maps directly onto this role. The rewrite repositions your profile around the target title and integrates job keywords throughout.',
    changes: [
      ['Profile rewritten', 'Opened with years of experience and UAE finance trajectory, referenced MBA and CertIFR credentials, closed with bridge to target title.', ['User testing results', 'ERP systems', 'Market analysis']],
      ['Core competencies rebuilt', 'Led with financial control and reporting, the skills the job post asks for first, and moved tools and systems after them.', ['Cash-flow optimization', 'IFRS compliance']],
      ['Performance metrics defined', 'Turned duties into results with numbers, so each role shows what changed because of your work.', ['Market analysis']],
      ['Stakeholder engagement strategies', 'Brought your work with finance, operations and leadership to the front, as the job post asks.', ['Stakeholder engagement']],
      ['Risk management frameworks', 'Identifying, assessing, and mitigating risks: project scope changes, budget overruns, stakeholder conflict, and others.', ['Project financial control', 'Risk assessment tools']],
      ['Agile methodologies implemented', 'Named the delivery methods behind your projects, so a reviewer sees how you work.', ['Design iteration feedback']],
      ['Cross-functional collaboration', 'Showed how you worked with sales, procurement and IT to close the books on time.', ['Project financial control']],
      ['Continuous improvement initiatives', 'Added the process fixes you led and what they saved.', ['ERP systems', 'Final project presentation']],
      ['Customer satisfaction metrics', 'Linked your reporting work to service quality the hiring team can measure.', ['User testing results']]
    ],
    keywords: ['Project financial control', 'Cash-flow optimization', 'IFRS compliance', 'ERP systems', 'Stakeholder engagement', 'Market analysis', 'User testing results', 'Design iteration feedback', 'Final project presentation', 'Risk assessment tools'],
    tips: [
      ['Consider a Power BI course before applying', 'The job explicitly requires it alongside SAP and Excel. Even a beginner certification (Microsoft Learn or Coursera) would let you speak to it confidently in an interview.'],
      ['Add one metric to your Treasury Officer role', 'Your current role sits at the top of the experience section but has no quantified achievements yet. Portfolio size, number of contracts, or a cash-flow improvement figure would significantly strengthen it.'],
      ['Mention any project-based billing exposure', 'The role is at a construction company. If you have any indirect exposure to milestone invoicing or contract finance through your trade finance work, a brief mention would close the one visible gap.']
    ]
  };
  let tailored = null;      // the job a resume was tailored to: { title, fromJob } (a job page's Tailor my resume)
  let edTab = 'preview';    // the editor's right pane: 'preview' or 'tailoring'
  function trtHTML() {
    const acc = (id, ic, title, count, cls, body) => `<section class="trt-acc" data-acc="${id}">
        <button class="trt-acc-h" type="button" aria-expanded="false" aria-controls="trt-${id}">${ic}<b>${title}</b><span class="trt-count ${cls}">${count}</span><span class="trt-chev">${TRT_IC.chev}</span></button>
        <div class="trt-acc-b" id="trt-${id}" hidden>${body}</div></section>`;
    const changes = `<ol class="trt-changes">${TRT.changes.map(([t, d, kws], i) => `<li class="trt-ch" data-kws="${esc(kws.join('|'))}">
        <button class="trt-ch-h" type="button" aria-expanded="false"><span>${i + 1}. ${t}</span><span class="trt-chev">${TRT_IC.chev}</span></button>
        <div class="trt-ch-b" hidden><p>${d}</p><div class="trt-tags">${kws.map(k => `<button class="trt-tag" type="button" data-kw="${esc(k)}">${k}</button>`).join('')}</div></div></li>`).join('')}</ol>
      <div class="trt-kw is-compact">
        <button class="trt-kw-hide" type="button" data-trt="kw-less">Hide added keywords</button>
        <div class="trt-chips" role="group" aria-label="Added keywords">${TRT.keywords.map(k => `<button class="trt-chip" type="button" data-kw="${esc(k)}" aria-pressed="false">${k}</button>`).join('')}</div>
        <div class="trt-kw-more"><button type="button" data-trt="kw-more">View All Keywords${TRT_IC.plus}</button></div>
      </div>`;
    const tips = `<div class="trt-tips">${TRT.tips.map(([t, d]) => `<div class="trt-tip"><b>${t}</b><p>${d}</p></div>`).join('')}</div>`;
    return `<div class="trt-head"><span class="trt-ic">${TRT_IC.scale}</span><div><b>This resume has been tailored</b>
        <button class="trt-job" type="button" data-trt="job">${esc(tailored ? tailored.title : TRT.job)}</button></div></div>
      <div class="trt-strat"><b>Overall strategy</b><p>${TRT.strategy}</p></div>
      ${acc('changes', TRT_IC.list, 'What we changed', `${TRT.changes.length} changes`, 'is-blue', changes)}
      ${acc('tips', TRT_IC.bulb, 'Things to consider', `${TRT.tips.length} tips`, 'is-green', tips)}`;
  }
  // Edit Preview ⇄ Resume Tailoring; before any tailoring, Resume Tailoring starts it
  function setPvTab(tab) {
    if (tab === 'tailoring' && !tailored) return openRoute(findRoute('/dashboard/tailor-resume/'));
    edTab = tab;
    const pv = editorEl.querySelector('.ed-preview');
    pv.querySelectorAll('[data-pv-tab]').forEach(b => { const on = b.dataset.pvTab === tab; b.classList.toggle('is-active', on); b.setAttribute('aria-current', String(on)); });
    pv.querySelector('.pv-body').hidden = tab !== 'preview';
    const trt = pv.querySelector('.trt'); if (trt) trt.hidden = tab !== 'tailoring';
    if (!reduce) play(pv.querySelector(tab === 'preview' ? '.pv-body' : '.trt'), [{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard }).finished.catch(() => {}).then(a => pv.querySelectorAll('.pv-body, .trt').forEach(x => x.getAnimations().forEach(y => y.cancel())));
  }
  // a keyword picked (or picked again to let go): its changes open and are marked, the others fold
  function pickKeyword(trt, kw) {
    const on = trt.dataset.kw === kw ? '' : kw;
    trt.dataset.kw = on;
    trt.querySelectorAll('.trt-chip').forEach(c => c.setAttribute('aria-pressed', String(!!on && c.dataset.kw === on)));
    trt.querySelectorAll('.trt-tag').forEach(t => t.classList.toggle('is-hit', !!on && t.dataset.kw === on));
    trt.querySelectorAll('.trt-ch').forEach(ch => {
      const hit = !!on && ch.dataset.kws.split('|').includes(on);
      ch.classList.toggle('is-hit', hit);
      if (on) foldChange(ch, hit);
    });
  }
  function foldChange(ch, open) {
    const h = ch.querySelector('.trt-ch-h'), b = ch.querySelector('.trt-ch-b');
    if (h.getAttribute('aria-expanded') === String(open)) return;
    h.setAttribute('aria-expanded', String(open)); b.hidden = !open;
  }
  editorEl.addEventListener('click', e => {
    const tab = e.target.closest('[data-pv-tab]');
    if (tab) return tab.dataset.pvTab === 'help' ? toast('Help Center opens in a new tab.') : setPvTab(tab.dataset.pvTab);
    const trt = e.target.closest('.trt'); if (!trt) return;
    const accH = e.target.closest('.trt-acc-h'), chH = e.target.closest('.trt-ch-h'), kw = e.target.closest('[data-kw]'), act = e.target.closest('[data-trt]');
    if (accH) {
      const open = accH.getAttribute('aria-expanded') !== 'true', sec = accH.closest('.trt-acc');
      morphHeight(sec, () => { accH.setAttribute('aria-expanded', String(open)); sec.querySelector('.trt-acc-b').hidden = !open; });
    } else if (chH) {
      const ch = chH.closest('.trt-ch');
      morphHeight(ch, () => foldChange(ch, chH.getAttribute('aria-expanded') !== 'true'));
    } else if (kw) {
      const list = trt.querySelector('.trt-acc[data-acc="changes"]');
      morphHeight(list, () => pickKeyword(trt, kw.dataset.kw));
    } else if (act) {
      const a = act.dataset.trt, kwBox = trt.querySelector('.trt-kw');
      if (a === 'kw-more' || a === 'kw-less') morphHeight(trt.querySelector('.trt-acc[data-acc="changes"]'), () => kwBox.classList.toggle('is-compact', a === 'kw-less'));
      // the job it was tailored to: a job page's own page, else the job post that was given (not in the prototype)
      else if (a === 'job') tailored && tailored.fromJob ? openRoute(findRoute('/jobs/job/1234/')) : toast('The job post you tailored to opens here.');
    }
  });

  /* The editor's Design tab (template, colours, fonts, layout). A new resume always opens here (the user's rule):
     whatever made it (the method screen's upload modal or building screen, a template, a sample, Create Resume with AI,
     Upload resume, LinkedIn import) ends on Design, not Fill In. Opening a resume that already exists (/edit/, the
     latest resume, the menu's Fill In), a section writer, a letter, a tailored or rewritten copy and the guest editor
     stay on Fill In. No design yet: the panel is a Wire wireframe beside the real preview. */
  let edView = 'fill', designNext = false;
  /* From Figma (concepting-KR › Design tab, 294:19823). Templates is designed: the filters, the colour (it recolours
     the preview's accent) and the templates, which are the template picker's own pictures and filters (TPS_T, TPS_IMG)
     so the filters work; Format and Layout have no design yet and are Wire wireframes (DESIGN_NOTE). */
  const DZ_IC = {
    roller: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.667 1.333h-8c-.737 0-1.334.597-1.334 1.334V4c0 .736.597 1.333 1.334 1.333h8C11.403 5.333 12 4.736 12 4V2.667c0-.737-.597-1.334-1.333-1.334Z"/><path d="M6.667 10.667V9.333A1.333 1.333 0 0 1 8 8h5.333a1.333 1.333 0 0 0 1.334-1.333v-2a1.333 1.333 0 0 0-1.334-1.334H12"/><path d="M7.333 10.667H6a.667.667 0 0 0-.667.666V14c0 .368.299.667.667.667h1.333A.667.667 0 0 0 8 14v-2.667a.667.667 0 0 0-.667-.666Z"/></svg>',
    type: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.333 11c0 .184.15.333.334.333H10a1.333 1.333 0 0 1 0 2.667H6a1.333 1.333 0 0 1 0-2.667h.333A.333.333 0 0 0 6.667 11V5a.333.333 0 0 0-.334-.333h-2A.333.333 0 0 0 4 5v.333a1.333 1.333 0 0 1-2.667 0v-2A1.333 1.333 0 0 1 2.667 2h10.666a1.333 1.333 0 0 1 1.334 1.333v2a1.333 1.333 0 0 1-2.667 0V5a.333.333 0 0 0-.333-.333h-2A.333.333 0 0 0 9.333 5v6Z"/></svg>',
    cols: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 14H3.333A1.333 1.333 0 0 1 2 12.667V3.333A1.333 1.333 0 0 1 3.333 2h9.334A1.333 1.333 0 0 1 14 3.333V7"/><path d="m9.533 13.067.667-.267M10 2v5m.133 4.266-.6-.2m1.533 3.4.2-.6m-.066-3.666-.267-.667m1.8.6.2-.6m.133 4.934-.266-.667m1-2.6.666-.267m0 2-.6-.2M6 2v12"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>',
    grid: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="4.667" height="4.667" rx=".667"/><rect x="9.333" y="2" width="4.667" height="4.667" rx=".667"/><rect x="9.333" y="9.333" width="4.667" height="4.667" rx=".667"/><rect x="2" y="9.333" width="4.667" height="4.667" rx=".667"/></svg>'
  };
  // the design's swatches (dark, light); the last one repeats in the design to fill the row
  const DZ_COLORS = [['Cherry', '#FF0000', '#FF8F8F'], ['Sky Blue', '#0500FF', '#8F9AFF'], ['Forest', '#1A993E', '#AED37F'], ['Sunflower', '#FAC02C', '#FFE0A3'],
    ['Coral', '#FA512C', '#F9E0D2'], ['Violet', '#7233F5', '#51F27E'], ['Teal', '#36B4A5', '#51F2DF'], ['Orchid', '#9D2D9F', '#EF51F2']];
  const DZ_FILTERS = [['all', 'All templates'], ['ats', 'ATS Friendly'], ['popular', 'Popular'], ['creative', 'Creative']];
  const DZ_FREE = ['ios', 'square'];
  let dzTab = 'templates', dzCat = 'all', dzColor = 1, dzTpl = 'dotts';
  const dzList = () => Object.keys(TPS_T).filter(k => dzCat === 'all' || TPS_T[k][1].split(' ').includes(dzCat));
  const dzTplsHTML = () => dzList().map(k => `<button class="dz-tpl" type="button" data-dz-tpl="${k}" aria-pressed="${k === dzTpl}" aria-label="${TPS_T[k][0]} template"><img src="${TPS_IMG[k]}" alt="" width="300" height="413">${DZ_FREE.includes(k) || /ats/.test(TPS_T[k][1]) ? `<span class="dz-badges">${DZ_FREE.includes(k) ? '<span class="dz-badge is-free">FREE</span>' : ''}${/ats/.test(TPS_T[k][1]) ? '<span class="dz-badge is-ats">ATS</span>' : ''}</span>` : ''}</button>`).join('');
  const rvAccent = () => `--rv-accent:${DZ_COLORS[dzColor][1]}`;
  function designHTML() {
    const tab = (k, ic, label, extra = '') => `<button class="dz-tab" type="button" data-dz-tab="${k}" aria-pressed="${k === dzTab}">${DZ_IC[ic]}${label}${extra}</button>`;
    const prem = '<span class="dz-prem kr-text-premium-gradient">PREMIUM</span>';
    const body = dzTab === 'templates' ? `<div class="dz-card">
          <div class="dz-chips" role="group" aria-label="Filter templates">${DZ_FILTERS.map(([k, l]) => `<button class="dz-chip" type="button" data-dz-cat="${k}" aria-pressed="${k === dzCat}">${l}</button>`).join('')}</div>
          <div class="dz-row"><span class="dz-lbl">Color: <b data-dz-out="color">${DZ_COLORS[dzColor][0]}</b></span>${prem}</div>
          <div class="dz-sws" role="group" aria-label="Colour">${DZ_COLORS.map(([n, d, l], i) => `<button class="dz-sw" type="button" data-dz-color="${i}" aria-pressed="${i === dzColor}" aria-label="${n}" style="--d:${d};--l:${l}"></button>`).join('')}</div>
          <div class="dz-row dz-tplhead"><span class="dz-lbl">Template: <b data-dz-out="tpl">${TPS_T[dzTpl][0]}</b></span>${prem}<button class="dz-all" type="button" data-dz-all>${DZ_IC.grid}View all</button></div>
          <div class="dz-tpls" data-dz-out="tpls">${dzTplsHTML()}</div>
        </div>` : `<div class="wf dz-wire">${dzTab === 'format' ? `
          <section class="wf-card wf-stack"><h2 class="t-heading">Font</h2><div class="wf-input wf-input--select">Lato</div>
            <div class="wf-row"><span class="t-small">Size</span>${['S', 'M', 'L'].map((t, i) => `<span class="wf-radio${i === 1 ? ' wf-radio--on' : ''}">${t}</span>`).join('')}</div>
            <div class="wf-row"><span class="t-small">Line spacing</span>${['Tight', 'Normal', 'Airy'].map((t, i) => `<span class="wf-radio${i === 1 ? ' wf-radio--on' : ''}">${t}</span>`).join('')}</div></section>
          <section class="wf-card wf-stack"><h2 class="t-heading">Page</h2><div class="wf-row"><span class="wf-check wf-check--on">Show picture</span><span class="wf-check wf-check--on">Section icons</span></div></section>` : `
          <section class="wf-card wf-stack"><h2 class="t-heading">Columns</h2><div class="wf-row">${['One column', 'Two columns'].map((t, i) => `<span class="wf-radio${i === 1 ? ' wf-radio--on' : ''}">${t}</span>`).join('')}</div></section>
          <section class="wf-card wf-stack"><h2 class="t-heading">Section order</h2>${['Profile', 'Work Experience', 'Education', 'Strengths', 'Hobbies'].map(t => `<div class="wf-row"><span class="wf-ph wf-ph--icon"></span><span class="t-small">${t}</span></div>`).join('')}</section>`}
        </div>`;
    return `<div class="ed-design">
        <div class="dz-tabs" role="group" aria-label="Design">${tab('templates', 'roller', 'Templates')}${tab('format', 'type', 'Format')}${tab('layout', 'cols', 'Layout', '<span class="dz-new">NEW</span>')}</div>
        ${body}
      </div>`;
  }
  function dzRedraw() {
    const box = editorEl.querySelector('.ed-design');
    if (box) box.outerHTML = designHTML();
    syncNote();
  }
  editorEl.addEventListener('click', e => {
    const t = e.target.closest('[data-dz-tab], [data-dz-cat], [data-dz-color], [data-dz-tpl], [data-dz-all]');
    if (!t) return;
    if (t.dataset.dzTab) { dzTab = t.dataset.dzTab; return dzRedraw(); }
    if (t.dataset.dzCat) { dzCat = t.dataset.dzCat; editorEl.querySelectorAll('[data-dz-cat]').forEach(b => b.setAttribute('aria-pressed', String(b === t))); editorEl.querySelector('[data-dz-out="tpls"]').innerHTML = dzTplsHTML(); return; }
    if (t.dataset.dzColor) {
      dzColor = +t.dataset.dzColor;
      editorEl.querySelectorAll('[data-dz-color]').forEach(b => b.setAttribute('aria-pressed', String(b === t)));
      editorEl.querySelector('[data-dz-out="color"]').textContent = DZ_COLORS[dzColor][0];
      const rv = editorEl.querySelector('#rv'); if (rv) rv.style.cssText = rvAccent();
      return;
    }
    if (t.dataset.dzTpl) {
      dzTpl = t.dataset.dzTpl;
      editorEl.querySelectorAll('[data-dz-tpl]').forEach(b => b.setAttribute('aria-pressed', String(b === t)));
      editorEl.querySelector('[data-dz-out="tpl"]').textContent = TPS_T[dzTpl][0];
      return toast(`${TPS_T[dzTpl][0]} picked. The preview keeps this prototype’s one template.`);
    }
    if (t.hasAttribute('data-dz-all')) { dzCat = 'all'; return dzRedraw(); }
  });
  // a new resume: the editor on its Design tab
  function madeEditor() { designNext = true; return jumpEditor(); }
  function openDesign() { designNext = true; return editorAt('/edit/'); }
  function editorHTML() {
    const P = person, tab = tailored ? edTab : 'preview';
    const f = (k, label, cls, ph) => `<div class="f${cls ? ' ' + cls : ''}"><label for="ed-${k}">${label}</label><input class="input sm" id="ed-${k}" data-k="${k}" value="${esc(P[k])}"${ph ? ` placeholder="${ph}"` : ''}></div>`;
    const ecard = (key, ic, title, meta, body, open) => `
      <div class="ecard${open ? ' is-open' : ''}" data-sec="${key}">
        <button class="ehead" type="button" data-action="ecard" aria-expanded="${!!open}"><span class="eicon">${icon(ic)}</span>${title}<span class="meta">${meta}</span><span class="chev-d">${icon('down')}</span></button>
        <div class="acc"${open ? '' : ' inert'}><div class="acc-inner"><div class="ebody">${body}</div></div></div>
      </div>`;
    const entries = (list, what) => list.map(e => `
      <div class="entry"><div class="entry-text"><b>${esc(e.title)}</b><span>${esc(e.org)} · ${esc(e.from)} – ${esc(e.to)}</span></div>
        <button class="icon-btn" type="button" data-action="toast" data-msg="Editing a single ${what} opens a detail form here." aria-label="Edit ${esc(e.title)}">${icon('pen')}</button></div>`).join('') +
      `<button class="add-row" type="button" data-action="toast" data-msg="A new empty ${what} would appear here.">${icon('plus')}Add ${what}</button>`;
    const chips = key => `<div class="chips">${person[key].map((c, i) => `<span class="chip">${esc(Array.isArray(c) ? c[1] : c)}<button type="button" data-action="chip-remove" data-list="${key}" data-i="${i}" aria-label="Remove ${esc(Array.isArray(c) ? c[1] : c)}">${icon('x')}</button></span>`).join('')}</div>`;

    return `${appNavHTML(edView)}
      <div class="ed-tabs"><div class="seg-light" role="group" aria-label="Editor view">
        <button type="button" data-action="pane" data-pane="edit" aria-pressed="false">${edView === 'design' ? 'Design' : 'Fill In'}</button>
        <button type="button" data-action="pane" data-pane="preview" aria-pressed="true">Preview</button>
      </div></div>
      <div class="ed-main">
        <div class="ed-top">
          <span class="saved" role="status">${icon('cloud2')}<span data-out="saved">Saved</span></span>
          <div class="hist"><button class="icon-sq" type="button" disabled aria-label="Undo">${icon('undo')}</button><button class="icon-sq" type="button" disabled aria-label="Redo">${icon('redo')}</button></div>
        </div>
        <div class="ed-col">
          <div class="premium">
            <button class="premium-head" type="button" data-action="premium" aria-expanded="false">
              <span class="txt kr-text-premium-gradient">This ${isLetter() ? LETTER[edDoc].what : 'resume'} uses 3 premium features. Upgrade to Premium to download it as is.</span><span class="chev-d">${icon('down')}</span>
            </button>
            <div class="acc" inert><div class="acc-inner"><ul class="premium-list">
              <li><span class="pdot">${icon('check')}</span>Timeline template</li>
              <li><span class="pdot">${icon('check')}</span>Custom accent colour</li>
              <li><span class="pdot">${icon('check')}</span>Hobby icons</li>
              <li><button class="btn btn-gradient" type="button" data-action="toast" data-msg="Upgrade opens the plans page.">See Premium plans</button></li>
            </ul></div></div>
          </div>
          ${edView === 'design' ? '' : `<p class="doc-line">Document: <b data-out="docname">${esc(docName())}</b></p>`}
          ${edView === 'design' ? designHTML() : `<div class="ecard" data-sec="analysis">
            <button class="ehead analysis" type="button" data-action="ecard" aria-expanded="false">Section Analysis<span class="meta">2 suggestions</span><span class="chev-d">${icon('eye')}</span></button>
            <div class="acc" inert><div class="acc-inner"><div class="ebody"><ul class="hint-list">
              <li><span class="hd" style="background:var(--kr-mint)"></span>Personal information is complete.</li>
              <li><span class="hd" style="background:var(--kr-yellow)"></span>Profile: add one result you can measure.</li>
              <li><span class="hd" style="background:var(--kr-yellow)"></span>Work experience: start bullets with a verb.</li>
            </ul></div></div></div>
          </div>
          ${ecard('personal', 'user', 'Personal Information', '', `
            <div class="pi">
              <div class="photo">
                <div class="photo-circle">${icon('eyeOff')}</div>
                <label class="check"><input type="checkbox" id="ed-showpic">Show picture</label>
                <button class="btn-ol-sm" type="button" data-action="toast" data-msg="Edit Labels lets you rename fields like “Date of birth”.">${icon('tag')}Edit Labels</button>
              </div>
              <div class="fgrid">
                ${f('titleBefore', 'Title before', '', 'Mgr.')}${f('titleAfter', 'Title after', '', 'PhD.')}
                ${f('first', 'First name')}${f('last', 'Last name')}
                ${f('jobTitle', 'Job title', 'full')}
                ${f('phone', 'Phone number')}${f('email', 'Email address')}
              </div>
            </div>
            <div class="more"><div class="more-inner">
              <div class="fgrid">
                ${f('dob', 'Date of birth')}${f('nationality', 'Nationality')}
                ${f('street', 'Street')}${f('city', 'City')}${f('zip', 'ZIP code')}${f('country', 'Country')}
                ${f('web', 'Web', 'full')}
              </div>
              <button class="add-fields" type="button" data-action="toast" data-msg="Custom fields let you add things like a driving licence.">+ Add Custom Fields</button>
            </div></div>
            <button class="more-toggle" type="button" data-action="more-toggle" aria-expanded="true">Hide Additional Fields</button>`, true)}
          ${isLetter() ? ecard('letter-to', 'briefcase', 'Recipient', '', `<div class="fgrid">${f('letterTo', 'Recipient')}${f('letterCompany', 'Company')}${f('letterRole', 'Job title', 'full')}</div>`, true)
            + ecard('letter', 'pen', 'Letter', '', `<div class="f"><label for="ed-letterBody" class="sr-only">Letter</label><textarea class="textarea sm cl-ta" id="ed-letterBody" data-k="letterBody">${esc(P.letterBody || '')}</textarea></div>`, true) : `
          ${ecard('profile', 'gauge', 'Profile', '', `<p>Two or three sentences about who you are and what you’re great at.</p>
            <div class="f"><label for="ed-profile" class="sr-only">Profile</label><textarea class="textarea sm" id="ed-profile" data-k="profile">${esc(P.profile)}</textarea></div>`)}
          ${ecard('work', 'briefcase', 'Work Experience', `${P.work.length} positions`, entries(P.work, 'position'))}
          ${ecard('education', 'cap', 'Education', `${P.education.length} school`, entries(P.education, 'school'))}
          ${ecard('skills', 'star', 'Strengths', `<span data-out="skillcount">${P.skills.length}</span>`, `<div data-out="skills">${chips('skills')}</div>
            <div class="f"><label for="ed-skill-new">Add a strength</label><input class="input sm" id="ed-skill-new" data-add="skills" placeholder="Type and press Enter"></div>`)}
          ${ecard('hobbies', 'heart', 'Hobbies', `<span data-out="hobbycount">${P.hobbies.length}</span>`, `<div data-out="hobbies">${chips('hobbies')}</div>`)}`}`}
        </div>
      </div>
      <aside class="ed-preview" aria-label="Resume preview">
        <div class="pv-tabs${tailored ? ' has-trt' : ''}">${[['preview', TRT_IC.eye, 'Edit Preview'], ['tailoring', TRT_IC.target, 'Resume Tailoring'], ['help', TRT_IC.help, 'Help Center']].filter(([k]) => !(isLetter() && k === 'tailoring')).map(([k, ic, l]) =>
          `<button class="pv-tab${k === tab ? ' is-active' : ''}" type="button" data-pv-tab="${k}"${k === 'help' ? '' : ` aria-current="${k === tab}"`}>${ic}${l}</button>`).join('')}</div>
        ${tailored ? `<div class="trt"${tab === 'tailoring' ? '' : ' hidden'}>${trtHTML()}</div>` : ''}
        <div class="pv-body"${tab === 'preview' ? '' : ' hidden'}>
          <div class="pv-tools">
            <button class="icon-sq" type="button" data-action="toast" data-msg="Full-screen preview opens here." aria-label="Full-screen preview">${icon('eye')}</button>
            <button class="icon-sq" type="button" data-action="toast" data-msg="Download is a Premium feature for this template." aria-label="Download">${icon('download')}</button>
          </div>
          <div class="pv-paper-wrap"><div class="rv${isLetter() ? ' is-cover' : ''}" id="rv" style="${rvAccent()}">${isLetter() ? letterHTML() : resumeHTML()}</div></div>
        </div>
      </aside>`;
  }

  function setPane(pane) {
    editorEl.dataset.pane = pane;
    editorEl.querySelectorAll('[data-action="pane"]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.pane === pane)));
  }

  let saveTimer = 0;
  function syncEditor() {
    const rv = editorEl.querySelector('#rv');
    if (rv) rv.innerHTML = isLetter() ? letterHTML() : resumeHTML();
    editorEl.querySelectorAll('[data-out="docname"]').forEach(el => el.textContent = docName());
    editorEl.querySelectorAll('[data-out="fullname"]').forEach(el => el.textContent = [person.first, person.last].join(' '));
    editorEl.querySelectorAll('[data-out="initial"]').forEach(el => el.textContent = (person.first || '?')[0]);
    const saved = editorEl.querySelector('[data-out="saved"]');
    saved.textContent = 'Saving…';
    clearTimeout(saveTimer); saveTimer = setTimeout(() => { saved.textContent = 'Saved'; }, 700);
  }
  function refreshChips(key) {
    const box = editorEl.querySelector(`[data-out="${key}"]`);
    const label = c => Array.isArray(c) ? c[1] : c;
    box.innerHTML = `<div class="chips">${person[key].map((c, i) => `<span class="chip">${esc(label(c))}<button type="button" data-action="chip-remove" data-list="${key}" data-i="${i}" aria-label="Remove ${esc(label(c))}">${icon('x')}</button></span>`).join('')}</div>`;
    const count = editorEl.querySelector(`[data-out="${key === 'skills' ? 'skill' : 'hobby'}count"]`);
    if (count) count.textContent = person[key].length;
    syncEditor();
  }
  function toggleEcard(card, open) {
    open = open ?? !card.classList.contains('is-open');
    card.classList.toggle('is-open', open);
    card.querySelector(':scope > .ehead').setAttribute('aria-expanded', String(open));
    card.querySelector(':scope > .acc').inert = !open;
  }
  function editSection(key) {
    const card = editorEl.querySelector(`.ecard[data-sec="${key}"]`);
    if (!card) return;
    if (editorEl.dataset.pane === 'preview' && getComputedStyle(editorEl.querySelector('.ed-main')).display === 'none') setPane('edit');
    toggleEcard(card, true);
    requestAnimationFrame(() => card.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }));
    card.classList.remove('is-flash'); void card.offsetWidth; card.classList.add('is-flash');
    setTimeout(() => card.classList.remove('is-flash'), 1400);
    focusLater(card.querySelector('.input, .textarea'), 420);
  }

  /* Building screen → editor. The page you watched being built travels into the
     preview pane and becomes the real resume; the editor chrome settles in around it. */
  // the editor with one section open (what a section writer just wrote)
  async function openEditorAt(sec) { await openEditor(); if (current === 'editor') editSection(sec); }
  // the page travels in from the building screen's, or from `from` (the upload modal)
  async function openEditor(from) {
    if (screenRun) screenRun.finish();
    edView = designNext && !isLetter() ? 'design' : 'fill'; designNext = false;
    const r0 = (from || screens.loading.querySelector('.ld-paper')).getBoundingClientRect();
    editorEl.innerHTML = editorHTML();
    setPane('preview');
    topbarEl.hidden = true; pageEl.hidden = true; editorEl.hidden = false;
    Object.values(screens).forEach(sc => { sc.hidden = true; });
    setCurrent('editor');
    syncNote();
    scroller().scrollTo({ top: 0 });
    landFocus(editorEl);
    if (reduce) { editorEl.animate([{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard }); return; }
    const paper = editorEl.querySelector('#rv'), pv = editorEl.querySelector('.ed-preview');
    const r1 = paper.getBoundingClientRect();
    pv.style.overflow = 'visible'; pv.style.zIndex = '7';
    // on the Resume Tailoring tab the page isn't shown: nothing travels, the panel settles in with the chrome
    const anims = r1.width ? [play(paper, [
      { transformOrigin: '0 0', transform: `translate(${r0.left - r1.left}px, ${r0.top - r1.top}px) scale(${r0.width / r1.width})` },
      { transformOrigin: '0 0', transform: 'none' }], { duration: DUR.travel, easing: EASE.standard })] : [];
    const chrome = [...editorEl.querySelectorAll('.ed-mbar, .ed-side, .ed-tabs, .pv-tabs, .pv-tools, .trt > *, .ed-top, .ed-col > *')].filter(shown);
    chrome.forEach((el, i) => anims.push(play(el, [
      { opacity: 0, transform: el.classList.contains('ed-side') ? 'translateX(-16px)' : 'translateY(10px)' }, { opacity: 1, transform: 'none' }],
      { duration: DUR.base, delay: 200 + Math.min(i, 8) * STAGGER, easing: EASE.standard })));
    await Promise.all(anims.map(a => a.finished.catch(() => {})));
    anims.forEach(a => a.cancel());
    pv.style.overflow = ''; pv.style.zIndex = '';
  }

  async function leaveApp(screen) {
    const appEl = APPS[current];
    if (!reduce) await appEl.animate([{ opacity: 1 }, { opacity: 0 }], { duration: DUR.fast, easing: EASE.exit, fill: 'forwards' }).finished.catch(() => {});
    appEl.getAnimations().forEach(a => a.cancel());
    appEl.hidden = true; appEl.innerHTML = '';
    setCut(0, true);
    topbarEl.hidden = false; pageEl.hidden = false;
    Object.entries(screens).forEach(([k, sc]) => { sc.hidden = k !== screen; });
    setCurrent(screen);
    scroller().scrollTo({ top: 0 });
    if (screen === 'create') renderCreate();
    const inItems = [...screens[screen].querySelectorAll('.page-head, .intent, .irow, .method-list > .mcard, .slot, .rt-item, :scope > .center')].filter(shown);
    const anims = inItems.map((el, i) => play(el, reduce ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: 'translateX(-32px)' }, { opacity: 1, transform: 'none' }],
      { duration: DUR.base, delay: 60 + i * STAGGER, easing: EASE.standard }));
    await Promise.all(anims.map(a => a.finished.catch(() => {})));
    anims.forEach(a => a.cancel());
    if (current === screen) landFocus(screens[screen]);
  }

  /* ---------- Dashboard ---------- */
  // Job Openings as in Figma's New user dashboard (Flow 1's Skip personalization), with its logos (JB_LOGO)
  const JOBS = [
    ['cisco', 'Cisco', 'Server Administrator'], ['figma', 'Figma', 'Senior UX Writer, San Francisco area'], ['atlassian', 'Atlassian', 'Data Engineer'],
    ['openai', 'OpenAI', 'CEO'], ['yahoo', 'Yahoo', 'Front-End Developer'], ['microsoft', 'Microsoft', 'Senior Front-End Developer, 8+ years of experience'], ['tesla', 'Tesla', 'CEO']
  ];
  const TIPS = [
    ['How to Write a Powerful Resume Objective (10+ Resume Examples)', 'target', 'linear-gradient(135deg,#d9d4cf,#a99f97)'],
    ['Remote Onboarding of Gen Z Workers: How to Nail It in 5 Simple Steps', 'users', 'linear-gradient(135deg,#7fc8e8,#f3b18f)'],
    ['How to Become a Scrum Master? Courses, Certifications & More', 'cap', 'linear-gradient(135deg,#2c7a8c,#78b7a5)'],
    ['How to Ask for a Raise: 9 Tips That Actually Work', 'trend', 'linear-gradient(135deg,#a066ff,#666cff)']
  ];
  const TOOLS = [
    ['linkedin', 'LinkedIn Import', 'Create a new resume quickly by importing your LinkedIn profile.', '#e4effa', '#0a66c2', 'linkedin'],
    ['file', 'PDF Import', 'Import your old PDF resume and give it a makeover.', 'var(--kr-primary-tint)', 'var(--kr-grey-100)', 'upload'],
    ['sparkles', 'Resume Builder', 'Create and edit your resumes with AI help.', 'var(--kr-blue-tint)', '#666cff', 'ai'],
    ['mail', 'Cover Letter Builder', 'Create and edit your cover letters with AI help.', 'var(--kr-beige)', 'var(--kr-grey-100)', ''],
    ['globe', 'Website Builder', 'Turn your resume into a personal website with a single click.', 'var(--kr-grey-40)', 'var(--kr-grey-100)', ''],
    ['chart', 'Resume Analysis', 'Check your resume for issues and get tips on how to improve it.', 'var(--kr-mint-tint)', 'var(--kr-green-apple)', '']
  ];
  function dashHTML() {
    const paperLines = n => Array.from({ length: n }, (_, i) => `<i class="ln${i % 3 === 0 ? ' dk' : ''}" style="width:${[90, 70, 82, 60, 76][i % 5]}%"></i>`).join('');
    const tile = (cls, label, art, action, extra) => `<button class="doc-tile ${cls}" type="button" ${action}>${extra || ''}<span class="art" aria-hidden="true">${art}</span><span class="doc-label">${label}</span></button>`;
    return `${appNavHTML('dashboard')}
      <main class="dash-main">
        <div class="dash-head">
          <h1>Welcome, ${esc(person.first || 'there')}!</h1>
          <button class="btn btn-gradient btn-up" type="button" data-action="toast" data-msg="Upgrade opens the plans page.">${icon('upCircle')}<span class="lbl">Upgrade Now</span></button>
        </div>
        <section class="panel" aria-labelledby="d-docs">
          <div class="panel-head"><h2 id="d-docs">Documents</h2><button class="sq-arrow" type="button" data-action="toast" data-msg="This opens all your documents." aria-label="All documents">${icon('arrowLeft')}</button></div>
          <div class="doc-row">
            ${tile('t-blue', 'Import from LinkedIn', `
              <span class="a-li"><span class="in">Linked<span style="background:#0a66c2;color:#fff;border-radius:.8cqw;padding:0 .8cqw;margin-left:.4cqw">in</span></span><span class="face"></span><i class="ln dk" style="width:80%"></i><i class="ln" style="width:60%"></i></span>
              <svg class="a-arrow" viewBox="0 0 40 26" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M3 4c2 12 14 18 30 16"/><path d="m27 14 7 6-7 5"/></svg>
              <span class="a-paper" style="left:52cqw;top:9cqw;width:32cqw;height:46cqw">${paperLines(7)}</span>`, 'data-action="dash-start" data-method="linkedin"', '<span class="qs">Quick Start</span>')}
            ${tile('t-beige', 'New Resume', `
              <span class="a-paper" style="left:44cqw;top:7cqw;width:34cqw;height:48cqw">${paperLines(8)}</span>
              <span class="a-bubble" style="left:16cqw;top:22cqw">Aa</span>
              <span class="a-dots" style="left:18cqw;top:40cqw"><i style="background:#ff5e59"></i><i style="background:#514eea"></i><i style="background:#1da36e"></i><i style="background:#ffc107"></i></span>`, 'data-action="dash-start" data-method=""')}
            ${tile('t-beige', 'New Cover Letter', `
              <span class="a-paper" style="left:46cqw;top:6cqw;width:34cqw;height:44cqw">${paperLines(7)}</span>
              <span class="a-letter" style="left:12cqw;top:18cqw;width:52cqw">${paperLines(5)}</span>`, 'data-action="toast" data-msg="The cover letter builder isn’t part of this prototype."')}
            ${tile('t-beige', 'New Resignation Letter', `
              <span class="a-paper" style="left:50cqw;top:12cqw;width:32cqw;height:40cqw">${paperLines(6)}</span>
              <span class="a-letter" style="left:14cqw;top:8cqw;width:50cqw">${paperLines(4)}<span class="a-chip"></span></span>`, 'data-action="toast" data-msg="The resignation letter writer isn’t part of this prototype."')}
            ${tile('t-beige', 'New Website', `<span class="a-laptop"><span class="a-screen"><span></span></span></span>`, 'data-action="toast" data-msg="The website builder isn’t part of this prototype."')}
          </div>
        </section>
        <div class="dash-mid">
          <section class="panel jobs-panel" aria-labelledby="d-jobs">
            <div class="panel-head"><h2 id="d-jobs">Job Openings</h2><button class="sq-arrow" type="button" data-action="toast" data-msg="This opens the job board." aria-label="All job openings">${icon('arrowLeft')}</button></div>
            <ul class="job-list">${JOBS.map(([logo, co, role]) => `<li><button class="job" type="button" data-action="toast" data-msg="${role} at ${co} opens here."><img class="co" src="${JB_LOGO[logo]}" alt="" width="40" height="40"><span class="job-text"><span>${co}</span><b>${role}</b></span></button></li>`).join('')}</ul>
          </section>
          <div class="dash-pair">
            <section class="panel feat" aria-labelledby="d-map">
              <div class="panel-head"><h2 id="d-map">Career Map</h2></div>
              <div class="art" aria-hidden="true">
                <svg class="map-lines" viewBox="0 0 300 150" preserveAspectRatio="none"><path d="M70 40 C 110 40, 110 75, 150 75"/><path d="M200 75 C 230 75, 230 30, 260 30"/><path d="M70 115 C 110 115, 110 75, 150 75"/><path d="M200 75 C 230 75, 230 120, 260 120"/></svg>
                <span class="node faint" style="left:0;top:16%">90% Match<i><b style="width:90%"></b></i></span>
                <span class="node" style="left:32%;top:38%">Front-End Developer<small>100% Match</small><i><b style="width:100%"></b></i></span>
                <span class="node" style="right:0;top:6%">CTO<small>80% Match</small><i><b style="width:80%"></b></i></span>
                <span class="node faint" style="left:0;bottom:4%">Supervisor<small>70% Match</small><i><b style="width:70%"></b></i></span>
                <span class="node faint" style="right:0;bottom:8%">IT Director<small>75% Match</small><i><b style="width:75%"></b></i></span>
              </div>
              <button class="btn-soft" type="button" data-action="toast" data-msg="Career Map shows where your experience can take you.">Explore Your Map</button>
            </section>
            <section class="panel feat" aria-labelledby="d-int">
              <div class="panel-head"><h2 id="d-int">Interviews</h2></div>
              <div class="art" aria-hidden="true">
                <span class="a-paper" style="left:6%;top:8%;width:30%;height:84%;padding:8px;gap:5px"><i class="ln" style="height:8px;background:var(--kr-blue-dark);width:100%"></i>${paperLines(9)}</span>
                <span class="q" style="right:2%;top:6%">Have you thought about…?</span>
                <span class="q q-input" style="right:8%;top:38%"></span>
                <span class="q" style="right:4%;bottom:8%">What would you do?</span>
              </div>
              <button class="btn-soft" type="button" data-action="toast" data-msg="Interview practice asks you real questions for your role.">Practice Interview</button>
            </section>
          </div>
          <section class="panel" aria-labelledby="d-tips">
            <div class="panel-head"><h2 id="d-tips">Tips and Guides</h2><button class="sq-arrow" type="button" data-action="toast" data-msg="This opens the Kickresume blog." aria-label="All articles">${icon('arrowLeft')}</button></div>
            <p class="tips-sub">Recent blog articles</p>
            <div class="tips">${TIPS.map(([t, ic, bg]) => `<button class="tip" type="button" data-action="toast" data-msg="Articles open on the blog."><span class="thumb" style="background:${bg}">${icon(ic)}</span><span>${t}</span></button>`).join('')}</div>
          </section>
        </div>
        <section class="panel" aria-labelledby="d-tools">
          <div class="panel-head"><h2 id="d-tools">All Tools</h2><button class="sq-arrow grid" type="button" data-action="toast" data-msg="This lists every tool." aria-label="All tools">${icon('grid')}</button></div>
          <div class="tools">${TOOLS.map(([ic, t, d, bg, fg, m]) => `<button class="tool" type="button" ${m ? `data-action="dash-start" data-method="${m}"` : `data-action="toast" data-msg="${t} isn’t part of this prototype."`}><span class="tool-ic" style="background:${bg};color:${fg}">${icon(ic)}</span><b style="color:${fg}">${t}</b><span>${d}</span></button>`).join('')}</div>
        </section>
      </main>`;
  }

  /* Moving between pages inside the app the menu stays where it is; only the page next to it changes */
  const hasSide = el => !!el && shown(el) && !!el.querySelector(':scope > .ed-side') && shown(el.querySelector(':scope > .ed-side'));
  async function leaveOut(fromEl, keepSide) {
    if (!fromEl) return;
    const els = keepSide ? [...fromEl.children].filter(c => !c.matches('.ed-side')) : [fromEl];
    if (!reduce) await Promise.all(els.map(x => x.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: APPS[current] ? 'none' : 'translateY(-8px)' }], { duration: DUR.fast, easing: EASE.exit, fill: 'forwards' }).finished.catch(() => {})));
    els.forEach(x => x.getAnimations().forEach(a => a.cancel()));
  }
  /* Open a full-screen app view (dashboard) from any screen */
  async function openDashboard() {
    if (screenRun) screenRun.finish();
    clearTimers();
    const fromEl = APPS[current] || screens[current], keepSide = hasSide(fromEl);
    await leaveOut(fromEl, keepSide);
    Object.values(APPS).forEach(el => { if (el !== dashEl) { el.hidden = true; el.innerHTML = ''; } });
    topbarEl.hidden = true; pageEl.hidden = true;
    Object.values(screens).forEach(sc => { sc.hidden = true; });
    dashEl.innerHTML = dashHTML(); dashEl.hidden = false;
    setCurrent('dashboard');
    if (routesReady) setTimeout(() => checkerAdopt('/dashboard/'));  // the flow checker: the dashboard as a run of its own
    window.scrollTo(0, 0); device.scrollTop = 0;
    landFocus(dashEl);
    const items = [...dashEl.querySelectorAll('.ed-mbar, .ed-side, .dash-head, .dash-main > .panel, .dash-mid > .panel, .dash-pair > .panel')].filter(x => shown(x) && !(keepSide && x.matches('.ed-side')));
    const anims = items.map((el, i) => play(el,
      reduce ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: el.classList.contains('ed-side') ? 'translateX(-12px)' : 'translateY(16px)' }, { opacity: 1, transform: 'none' }],
      { duration: DUR.base + 60, delay: i * (STAGGER + 15), easing: EASE.standard }));
    await Promise.all(anims.map(a => a.finished.catch(() => {})));
    anims.forEach(a => a.cancel());
  }

  /* From the dashboard into creation, with the chosen method already open */
  async function startFromDashboard(method) {
    await go('create');
    if (!method) return;
    if (methodsEl.dataset.mode === 'accordion') { const card = methodsEl.querySelector(`.mcard[data-id="${method}"]`); if (card) toggleA(card); }
    else openB(method);
  }

  /* ---------- Route screens ----------
     Product screens recreated from screenshots, each at its own URL and listed under More options › URLs.
     They are full screens in the flow (same logo bar, background and top line as the goal and method
     screens), not pop-ups. To add one: write its markup function (and an init for its behaviour), then
     add a ROUTES entry. needsCv = it works on the person's resume, so without a CV it asks for one first. */
  const PLAN_NAMES = ['yearly', 'quarterly', 'monthly', 'student'];
  const toolWire = t => () => WIRE.tool({ tool: t });
  // a tool with nothing to ask opens its page: Translate resume the Proofread & Translate page, recruiter feedback the Career Coach
  const TOOL_PAGE = { 'translate-resume': 'proof', 'recruiter-feedback': 'coach', 'career-coach': 'coach', 'proofreading': 'proof' };
  const latest = tool => ({ run: () => !cvUploaded ? openDocs() : tool ? openTool(tool) : openEdit() });
  /* The headline and subheadline above the card of every personalization, processing and processing-state screen
     (route.head, shown by routeHead): the question the screen asks, or what is happening. The shared wireframes'
     ones depend on the feature (o.f) and are looked up by their WIRE id (wireRoute). */
  const HEADS = {
    upload: ['Let’s bring in your resume', 'We’ll move it onto a fresh template, ready to edit.'],
    linkedin: ['Let’s bring in your LinkedIn profile', 'We’ll turn it into a resume, ready to edit.'],
    aiResume: ['What job are you going for?', 'Tell the AI a little about you and it drafts your resume.'],
    experience: ['What did you do in this job?', 'Give the AI a few details and it writes your work experience.'],
    objective: ['What role are you aiming for?', 'The AI writes a short resume objective for it.'],
    coverSamples: ['Pick a sample', 'Start your cover letter from one and make it yours.'],
    tlang: ['Which language should it be in?', 'We translate your resume and keep its design.'],
    summary: ['What role is the summary for?', 'Give the AI your job title and it writes the summary at the top of your resume.'],
    cover: ['Which job are you applying for?', 'The AI writes a cover letter that fits the job post.'],
    coverCv: ['Which resume should we use?', 'The AI picks details from it to personalize your letter.'],
    interview: ['Which job is the interview for?', 'Get the questions you’re likely to hear, with model answers.'],
    interviewCv: ['Which resume should we use?', 'The AI uses it to fit the questions to you.'],
    resign: ['Ready to move on?', 'The AI drafts a polite resignation letter for you.'],
    tailor: ['Which job is it for?', 'Add the job post and we’ll tailor your resume to it.'],
    tailorJob: ['Tailor it to this job', 'Pick how far the AI should go. You can edit everything after.'],
    tailoring: ['Tailoring your resume', 'This takes about 30 seconds.'],
    tailored: { ok: ['Your tailored resume is ready', 'Open it in the editor to check every change.'],
      fail: ['That job post didn’t work', 'Check the link, or paste the job post instead.'],
      error: ['Tailoring didn’t finish', 'It broke on our side. Nothing you entered is lost.'] },
    tailoredJob: { fail: ['We couldn’t read this job post', 'Go back and try again in a moment.'] },  // from a job page: no link or post to fix
    tool: {
      'rewrite-resume': ['How should we rewrite it?', 'Pick a tone and the AI rewrites your resume in it.'],
    },
    templates: o => ['Pick a template', `Start your ${o.kind} from a design you like. You can switch it anytime.`],
    jobBoard: ['Find a job you’ll love.', '3,380,973 jobs waiting for you'],
    process: o => [o.f.verb, 'This takes a few seconds.'],
    state: o => stateView(o.f).slice(0, 2),
    wall: () => { const noun = (flowNow && flowNow.f.noun) || 'resume'; return [`Sign up to see your ${noun}`, `It’s free, and your ${noun} opens right after.`]; }
  };
  const TRL_HEAD = { url: { main: HEADS.tailor, process: HEADS.tailoring }, job: { main: HEADS.tailorJob, process: HEADS.tailoring } };
  /* The six groups both link lists use (More options › Flows' Open and the URLs view): what a feature takes in and
     gives back, so the features in one group ask for the same data, load the same way and end in the same kind of
     place. Every URL is in exactly one; '' is Build my resume (only the goal screen leads there). */
  const KINDS = [
    ['Get a resume', ['', '/dashboard/create-resume/', '/dashboard/create-resume/modern/', '/dashboard/create/marketing-manager/', '/dashboard/create-ai-resume/', '/dashboard/upload-resume/', '/dashboard/linkedin-import/', '/guest-edit-start/']],
    ['Improve my resume', ['/dashboard/tailor-resume/', '/jobs/job/1234/tailor/', '/dashboard/rewrite-resume/', '/dashboard/summary-generator/', '/ai/resume/', '/ai/resume/experience/', '/ai/resume/general/']],
    ['Check my resume', ['/dashboard/analyse-resume/', '/dashboard/proofreading/', '/dashboard/translate-resume/', '/dashboard/recruiter-feedback/', '/dashboard/career-coach/', '/latest-resume/analyze/', '/latest-resume/proofread/', '/latest-resume/recruiter-feedback/']],
    ['Write something new', ['/dashboard/create-ai-cover-from-job/', '/dashboard/create-interview/', '/ai/resignation/', '/career-map/', '/dashboard/create-cover/', '/dashboard/create-cover/modern/', '/dashboard/create-website/', '/dashboard/create-website/modern/', '/cv/creative/']],
    ['Find jobs', ['/jobs/', '/jobs/search/', '/jobs/matcher/', '/jobs/job/1234/', '/jobs/organization/kickresume/', '/jobs/job-tracker/']],
    ['Just open', ['/register/', '/login/', '/dashboard/', '/dashboard/resumes/', '/edit/', '/latest-resume/', ...PLAN_NAMES.map(pl => `/upgrade/${pl}/`)]]
  ];
  const kindOf = path => (KINDS.find(([, paths]) => paths.includes(path)) || KINDS.at(-1))[0];
  const kindAt = path => KINDS.flatMap(([, paths]) => paths).indexOf(path);  // the order within a group
  const ROUTES = [
    { group: '1 · Sign up / log in', path: '/register/', title: 'Sign up', run: () => openAuth('signup') },
    { group: '1 · Sign up / log in', path: '/login/', title: 'Log in', run: () => openAuth('login') },
    { group: '2 · Guest', path: '/guest-edit-start/', title: 'Guest editor (straight to the app)', run: () => editorAt('/guest-edit-start/') },
    // no template pickers for now (the user's rule: everyone gets the default template; SHOW_TPL_PICKERS brings them back)
    { group: '3 · Start from a template', path: '/dashboard/create-resume/', title: SHOW_TPL_PICKERS ? 'New resume · select your template' : 'New resume', run: () => SHOW_TPL_PICKERS ? openTemplates() : askCv(madeEditor, false, '/dashboard/create-resume/') },  // the method screen makes it
    ...[['cover', 'New cover letter'], ['website', 'New website']].map(([k, title]) => (!SHOW_TPL_PICKERS ? { group: '3 · Start from a template', path: `/dashboard/create-${k}/`, title, run: () => openWire(`/dashboard/create-${k}/`, `${k === 'cover' ? 'Cover letter' : 'Website'} editor`, 'dest', { title: `${k === 'cover' ? 'Cover letter' : 'Website'} editor`, kind: k === 'cover' ? 'doc' : 'site', pane: 'dest' }) } : { group: '3 · Start from a template', path: `/dashboard/create-${k}/`, title: title + ' · pick a template', wire: true, head: { main: HEADS.templates({ kind: k === 'cover' ? 'cover letter' : k }) }, html: () => WIRE.templates({ kind: k === 'cover' ? 'cover letter' : k }) })),
    { group: '4 · Generate with AI', path: '/dashboard/create-ai-resume/', title: 'Create Resume with AI', head: { main: HEADS.aiResume }, html: aiModalHTML, init: initAiModal },
    // the section writers: Fill In opens, then the writer pops up over it (openWriter)
    { group: '4 · Generate with AI', path: '/ai/resume/', title: 'Generate work experience', run: () => openWriter('experience', '/ai/resume/') },
    { group: '4 · Generate with AI', path: '/ai/resume/experience/', title: 'Generate work experience', run: () => openWriter('experience') },
    { group: '4 · Generate with AI', path: '/ai/resume/general/', title: 'Generate resume objective', run: () => openWriter('objective') },
    { group: '4 · Generate with AI', path: '/dashboard/create-ai-cover-from-job/', also: ['/ai/cover/'], title: 'AI Cover Letter Writer', head: { main: HEADS.cover, s1: HEADS.cover, s2: HEADS.coverCv }, html: coverHTML, init: initWriter },
    { group: '4 · Generate with AI', path: '/ai/resignation/', title: 'Resignation letter', head: { main: HEADS.resign }, html: resignHTML, init: initResign },
    { group: '4 · Generate with AI', path: '/dashboard/create-interview/', title: 'Job Interview Questions', head: { main: HEADS.interview, s1: HEADS.interview, s2: HEADS.interviewCv }, html: interviewHTML, init: initWriter },
    { group: '5 · Bring a resume to a tool', path: '/dashboard/upload-resume/', title: 'Upload resume', upload: true, head: { upload: HEADS.upload, progress: HEADS.upload } },
    { group: '5 · Bring a resume to a tool', path: '/dashboard/linkedin-import/', title: 'LinkedIn import', head: { main: HEADS.linkedin, progress: HEADS.linkedin }, html: linkedinHTML, init: initLinkedin },
    // the resume tools: Tailor resume asks for the job first; Rewrite resume goes straight to its loading; Summary
    // generator is a section writer (the pop-up over Fill In); the others open their page (analyseNow, toolNow), and
    // Translate resume opens its page straight away (the language is picked there, or came from a landing page). Without a CV the method screen comes first (from a landing page only).
    ...[['analyse-resume', 'Analyse resume'], ['rewrite-resume', 'Rewrite resume'], ['tailor-resume', 'Tailor resume'], ['translate-resume', 'Translate resume'], ['recruiter-feedback', 'Recruiter feedback'],
      ['summary-generator', 'Summary generator'], ['career-coach', 'Career coach'], ['proofreading', 'Proofreading']]
      .map(([t, title]) => { const path = `/dashboard/${t}/`, base = { group: '5 · Bring a resume to a tool', path, title };
        if (t === 'tailor-resume') return { ...base, needsCv: true, head: TRL_HEAD.url, html: () => trlHTML(false), init: initTrl, more: { process: tldHTML } };
        if (t === 'summary-generator') return { ...base, run: () => openWriter('summary') };
        if (t === 'rewrite-resume') return { ...base, run: () => cvUploaded ? rewriteNow() : askCvFor(findRoute(path)) };
        if (t === 'translate-resume') return { ...base, run: () => toolNow(findRoute(path), TOOL_PAGE[t]), cvThen: () => { const i = flowNow ? flowNow.steps.findIndex(s => s.match === 'route:' + path + '#main') : -1; return i >= 0 ? flowGo(i) : openTool(TOOL_PAGE[t], path); } };
        if (t === 'analyse-resume') return { ...base, run: () => analyseNow(findRoute(path)) };
        if (TOOL_PAGE[t]) return { ...base, run: () => toolNow(findRoute(path), TOOL_PAGE[t]) };
        return { ...base, needsCv: true, wire: true, head: { main: HEADS.tool[t] }, html: toolWire(t) }; }),
    { group: '6 · Latest resume', path: '/latest-resume/', title: 'Latest resume (editor)', ...latest('') },
    { group: '6 · Latest resume', path: '/latest-resume/analyze/', title: 'Latest resume · ATS checker', ...latest('ats') },
    { group: '6 · Latest resume', path: '/latest-resume/proofread/', title: 'Latest resume · proofreading', ...latest('proof') },
    { group: '6 · Latest resume', path: '/latest-resume/recruiter-feedback/', title: 'Latest resume · recruiter feedback', ...latest('coach') },
    { group: '6 · Latest resume', path: '/dashboard/resumes/', title: 'My Documents', run: () => openDocs() },
    { group: '6 · Latest resume', path: '/edit/', title: 'Editor', run: () => cvUploaded ? openEdit() : askCvFor(findRoute('/edit/')) },
    { group: '7 · Jobs', path: '/jobs/', title: 'Job board (Find a job you’ll love)', noX: true, head: { main: HEADS.jobBoard }, html: jbHTML, init: initJb },
    { group: '7 · Jobs', path: '/jobs/search/', title: 'Jobs · search results (All Jobs)', run: () => openJobs('search') },
    // Jobs for You: the shared CV step (the method screen) when there is none, then Analyzing your resume…
    { group: '7 · Jobs', path: '/jobs/matcher/', title: 'Jobs for You (job matcher)', run: () => cvUploaded ? openJobs('match') : askCvFor(findRoute('/jobs/matcher/')), cvThen: () => openJobs('match', 'process') },
    { group: '7 · Jobs', path: '/jobs/job/1234/', title: 'Job (/jobs/job/{id}/)', run: () => openJobs('job') },
    // tailoring from a job page: its modals are the job page's (tjOpen); this route is its tailoring screen (and the
    // setup's full-screen version), shown under the job page's URL, and not a URL of its own (hidden)
    { group: '7 · Jobs', path: '/jobs/job/1234/tailor/', shown: '/jobs/job/1234/', hidden: true, title: 'Tailor resume to this job', needsCv: true, noX: true, cvThen: () => openJobs('job', 'setup'), head: TRL_HEAD.job, html: () => trlHTML(true), init: initTrl, more: { process: tldHTML } },
    { group: '7 · Jobs', path: '/jobs/organization/kickresume/', title: 'Company (/jobs/organization/{company}/)', wire: true, html: () => WIRE.company() },
    { group: '7 · Jobs', path: '/jobs/job-tracker/', title: 'Job Tracker', run: () => openJobs('tracker') },
    { group: '8 · Career planning', path: '/career-map/', title: 'Career Map', run: () => openCareer() },
    ...PLAN_NAMES.map(pl => ({ group: '9 · Upgrade', path: `/upgrade/${pl}/`, title: pl === 'student' ? 'Verify student status' : `Upgrade · ${pl}`, run: () => openUpgrade(pl) }))
  ];
  /* A logged-in person with a CV picks which one a feature uses, or creates a new one (the user's rule; cvPick): the
     features that need a CV, but not Career Map and the job page, which have their own picker */
  const PICK_VERB = { '/dashboard/analyse-resume/': 'to check', '/dashboard/proofreading/': 'to proofread', '/dashboard/translate-resume/': 'to translate',
    '/dashboard/recruiter-feedback/': 'for recruiter feedback', '/dashboard/career-coach/': 'for career coaching', '/dashboard/rewrite-resume/': 'to rewrite',
    '/dashboard/tailor-resume/': 'to tailor', '/jobs/matcher/': 'to match jobs to' };
  ROUTES.forEach(r => { if (PICK_VERB[r.path]) r.pick = true; });
  let routeNow = null, routeBack = 'intent', pickPass = false, pickOpen = null;  // pickPass: the CV is picked or just made; pickOpen: the picker's URL
  const normPath = h => { const v = String(h || '').replace(/^#/, '').trim().toLowerCase(); return v.startsWith('/') ? v.replace(/\/*$/, '/') : null; };
  const findRoute = h => { const p = normPath(h); return p ? ROUTES.find(r => [r.path, ...(r.also || [])].some(x => normPath(x) === p)) || null : null; };
  function setHash(path) {
    if (routesReady && path) setTimeout(() => checkerAdopt(path));  // the flow checker: a new task opened in the app
    if (path && findRoute(location.hash) && findRoute(location.hash) === findRoute(path)) return;
    try { history.replaceState(history.state, '', path ? '#' + path : location.href.split('#')[0]); } catch (e) {}
  }
  document.getElementById('pm-count').textContent = ROUTES.filter(r => !r.hidden).length;
  document.getElementById('pm-routes').innerHTML = KINDS.map(([g]) => g).filter(g => ROUTES.some(r => kindOf(r.path) === g)).map(g => `<span class="pm-sub">${g}</span>` +
    ROUTES.filter(r => !r.hidden && kindOf(r.path) === g).sort((a, b) => kindAt(a.path) - kindAt(b.path)).map(r => `<button class="pm-route${r.wire ? ' is-todo' : ''}" type="button" data-route="${r.path}"><b>${r.title}</b><code>${[r.path, ...(r.also || [])].join(' · ')}</code></button>`).join('')).join('');
  /* A goal card opens its feature's first screen: Build the method screen, the others their tool (Tailor and the
     ATS check get a resume on the method screen first when there is none; see openRoute) */
  function pickGoal(id, el) {
    flowGoal(id);
    if (id === 'build') return go('create', el);
    if (id === 'tailor') return openRoute(findRoute('/dashboard/tailor-resume/'));
    if (id === 'ats') return openRoute(findRoute('/dashboard/analyse-resume/'));
    if (flowNow && flowNow.f.id === 'goal-matcher') return openRoute(findRoute('/jobs/matcher/'));
    openRoute(findRoute('/jobs/'));
  }
  const markRoutes = () => document.querySelectorAll('.pm-route').forEach(b => b.setAttribute('aria-current', String(!!routeNow && b.dataset.route === routeNow.path)));

  /* A CV counts as uploaded once the person uploads one (the onboarding upload method or the Upload
     screen), makes one on the method screen for a screen that asked (askCv), or when a flow or the URLs view's CV says so.
     Screens that work on a resume ask for one first. */
  let cvUploaded = false, cvName = '';
  /* No CV yet: the method screen gets one (any of its methods) and hands it to `then`, the screen that asked, once it
     is made: after the upload modal (uploaded or imported) or the building screen (created); see startCreation */
  /* then: what opens once the CV is made; forPath: the URL the CV is for (the upload modal's version, the ATS analysis);
     cvFor's hand-offs carry their own */
  function askCv(then, instant, forPath) {
    if (forPath) then.forPath = forPath;
    cvNext = then;
    if (!instant) return go('create');
    renderCreate();
    Object.entries(screens).forEach(([k, sc]) => { sc.hidden = k !== 'create'; });
    setCurrent('create');
  }
  /* A tool that needs a CV and has none: the method screen first, under the tool's URL, then the tool */
  function askCvFor(r, instant) { return askCv(cvFor(r), instant); }
  // what opens the tool once the CV is there (the URL is the tool's meanwhile)
  function cvFor(r) {
    // × on the tool goes back to where the person asked for it, not to the method or the building screen
    const from = current === 'loading' ? 'intent' : current;
    createFrom = { where: from, route: routeNow }; createFromSet = current !== 'create'; syncBackLinks();
    routeNow = r; markRoutes(); setHash(r.shown || r.path);
    // forPath: what the CV is for (afterBuild's ATS analysis, the upload modal's version)
    const then = r.cvThen ? () => { routeBack = from; return r.cvThen(); }  // Jobs for You's analysis, Translate's page
      : () => { pickPass = true; try { const opening = openRoute(r); routeBack = from; return opening; } finally { pickPass = false; } };  // the CV just made: no picker
    then.forPath = r.path; return then;
  }
  /* Back to a route screen that was left for the method screen: its panes are still as they were */
  async function backToRoute(r, then) {
    await go('route', null, 1);
    if (current !== 'route') return;
    routeNow = r; markRoutes(); setHash(r.shown || r.path); flowSync(); syncNote();
    then();
  }
  function setCv(on, name) {
    cvUploaded = on; cvName = on ? (name || cvName) : '';
    if (!on) tailored = null;  // no resume, nothing tailored
    if (!flowNow && pmCvFree(pmList()) && pmCvOn !== on) { pmCvOn = on; dockUpdate(); }  // outside a run the dock's switch is the person's CV
    if (current === 'docs') docsEl.innerHTML = docsHTML();
    if (current === 'dashboard') {  // the menu's resume group follows the CV
      const t = document.createElement('div'); t.innerHTML = appNavHTML('dashboard');
      ['.ed-mbar', '.ed-side'].forEach(c => dashEl.querySelector(':scope > ' + c).replaceWith(t.querySelector(c)));
    }
  }

  function fillRoute(r, pane) {
    // pane picks where to start: the main pane is "main", or the flow stage a generic wireframe stands for
    // (process, state, dest); more = panes that follow the main one ({ name: markup function }, e.g. Tailor
    // resume's "process"). A tool that needs a CV gets it before it opens (openRoute → askCv).
    const el = screens.route, main = r.pane || 'main';
    // progress: the upload modal (upmRoute) on the screen's first pane; progress-end: the modal's result (a run's state)
    const modal = pane === 'progress' || pane === 'progress-end', first = modal ? (r.upload ? 'upload' : main) : pane || (r.upload ? 'upload' : main);
    const paneHTML = (name, html) => `<div class="rt-pane" data-pane="${name}"${name === first ? '' : ' hidden'}>${html}</div>`;
    el.innerHTML = `<div class="page-head rt-head" hidden><h1></h1><p></p></div><div class="rt-item rt-panes">${r.upload ? uploadHTML('upload', first !== 'upload') : paneHTML(main, r.html())}${Object.entries(r.more || {}).map(([name, html]) => paneHTML(name, html())).join('')}</div>`;
    el.setAttribute('aria-label', r.title);
    routeHead(r, first, true);
    const item = el.querySelector(':scope > .rt-item');
    if (r.init) r.init(item.querySelector(`[data-pane="${main}"]`).firstElementChild, r);
    if (r.upload) initUpload(item.querySelector('[data-pane="upload"]'), { onFile: file => upmRoute(item, r, { id: 'upload', file: file.name }), onCancel: closeRoute });
    if (modal) upmRoute(item, r, { ...(r.upload ? { id: 'upload', file: 'jana-cv.pdf' } : { id: 'linkedin', opts: { url: 'https://www.linkedin.com/in/jana-novak-design' } }), end: pane === 'progress-end' });
  }
  /* Open a route screen the way every other screen opens (go), or straight away on page load */
  async function openRoute(r, instant, pane) {
    setMore(false); clearTimers();
    // a feature that needs a CV, opened with one: which resume first (not on a later pane, nor once picked or made)
    if (r.pick && cvUploaded && !pickPass && !pane) { routeNow = r; markRoutes(); setHash(r.shown || r.path); return cvPick(r.path, () => { pickPass = true; try { return openRoute(r, instant); } finally { pickPass = false; } }); }
    if (r.run) { routeNow = r; markRoutes(); setHash(r.shown || r.path); return r.run(); }  // routeNow: no earlier screen's route lingers (the ATS analysis, the upload modal's version)
    if (r.needsCv && !cvUploaded && !pane) return askCvFor(r, instant);
    if (current === 'route') {
      // already on a route screen: swap its content in place
      if (screenRun) screenRun.finish();
      fillRoute(r, pane); syncBackLinks(); routeNow = r; markRoutes(); setHash(r.shown || r.path); flowSync(); syncNote();
      scroller().scrollTo({ top: 0 }); landFocus(screens.route);
      if (!reduce) play(screens.route.querySelector('.rt-item'), [{ opacity: 0, transform: 'translateX(32px)' }, { opacity: 1, transform: 'none' }], { duration: DUR.base, easing: EASE.standard })
        .finished.catch(() => {}).then(() => screens.route.querySelector('.rt-item')?.getAnimations().forEach(a => a.cancel()));
      return;
    }
    routeBack = current === 'loading' ? 'intent' : current;
    fillRoute(r, pane);
    syncBackLinks();
    if (instant) {
      Object.entries(screens).forEach(([k, sc]) => { sc.hidden = k !== 'route'; });
      setCurrent('route');
    } else await go('route', null, current === 'loading' ? 1 : 0);
    if (current !== 'route') return;
    routeNow = r; markRoutes(); setHash(r.shown || r.path); flowSync(); syncNote();
    const tld = screens.route.querySelector('.tld');
    if (tld && tld._start && !tld.closest('[hidden]')) tld._start();
  }
  /* Back to where the person came from (×, Cancel, Back): the screen they were on, or the goal screen. Someone who has
     signed up or logged in is never sent back to Sign up, nor in a run (only a guest has no account) to the goal
     screen, which is for new users: they land on the dashboard (the user's rule), and the run's bar says they left it
     there. Only Flow 1's method screen goes Back to the goal screen (its board); its × goes to the dashboard too. */
  // where goBack lands: someone who has signed up is never sent back to Sign up, nor in a run to the goal screen
  function backTo(where, close) {
    return where === 'auth' || (where === 'intent' && flowNow && !flowNow.f.guest && (close || flowNow.n !== 1)) ? 'dashboard' : where;
  }
  /* The method screen's and the job board's link under the content: Back when it returns to the goal screen (or the
     method screen), otherwise Skip personalization (the user's rule) */
  function syncBackLinks() {
    if (!routesReady) return;  // flowNow isn't there yet
    const set = (el, where) => { if (el) el.textContent = ['intent', 'create'].includes(backTo(where)) ? 'Back' : 'Skip personalization'; };
    set(document.querySelector('[data-action="create-back"]'), createFrom.where);
    document.querySelectorAll('.jb-back').forEach(el => { set(el, routeBack === 'intent' ? backTo('intent', true) : routeBack); el.hidden = asGuest(); });  // a guest has no app to go back to
  }
  function goBack(where, route, close, skip) {
    where = backTo(where, close);
    if (where === 'dashboard') {
      // left a run's setup for the dashboard: the bar says so (Skip personalization or Closed), and a step brings it back
      if (flowNow && ['intent', 'prep'].includes(flowNow.steps[flowAt].stage)) { flowNow.skipped = flowNow.n === 1 || skip ? true : 'closed'; renderFlowBar(); }
      return openDashboard();
    }
    if (where === 'upgrade') return openUpgrade(upgStudent ? 'student' : upgPlan);
    if (where === 'docs') return openDocs();
    if (where === 'editor') return jumpEditor();
    if (where === 'tool') return openTool(toolKind, toolPath);
    if (where === 'tpl') return openTemplates();
    if (where === 'route' && route) return openRoute(route);
    go(where === 'create' ? 'create' : 'intent');
  }
  function closeRoute() { goBack(routeBack, null, true); }
  /* Steps inside a route screen (upload → tool, step 1 → step 2) move like screens do, sideways */
  /* The route screen's headline and subheadline for the pane on screen (route.head[pane]: [headline, subheadline],
     or a function giving them); a step inside a pane without its own (nested) keeps the pane's */
  function routeHead(r, pane, instant, nested) {
    const h = r && r.head && r.head[pane], t = typeof h === 'function' ? h() : h;
    if (!t && nested) return;
    setRouteHead(t, instant); syncTopX(r, pane);
  }
  /* The × in the top right corner (closeRoute): on the full-screen modal screens' setup steps, the ones with a
     headline; not while a screen processes (it can't be left then), on a result, a destination or the sign-up wall */
  function syncTopX(r = xRoute, pane = xPane) {
    xRoute = r; xPane = pane;
    const show = current === 'route' && !!r && !!r.head && !!r.head[pane] && !r.noX && !['process', 'progress', 'state', 'dest'].includes(pane);
    if (show && topXEl.hidden && !reduce) play(topXEl, [{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard }).finished.catch(() => {}).then(() => topXEl.getAnimations().forEach(a => a.cancel()));
    topXEl.hidden = !show;
  }
  // a new headline cross-fades in place, like the onboarding screens'
  let routeHeadTok = 0;
  function setRouteHead(t, instant) {
    const head = screens.route.querySelector(':scope > .rt-head');
    if (!head) return;
    const [h1, p] = head.children, tok = ++routeHeadTok;
    [h1, p].forEach(el => el.getAnimations().forEach(a => a.cancel()));  // like setHead: the newest change wins
    head.hidden = !t;
    if (!t) return;
    if (h1.textContent === t[0] && p.textContent === t[1]) return;
    if (instant || reduce) { h1.textContent = t[0]; p.textContent = t[1]; return; }
    [[h1, t[0]], [p, t[1]]].forEach(([el, text]) => el.textContent !== text && play(el, [{ opacity: 1 }, { opacity: 0 }], { duration: DUR.fast, easing: EASE.exit }).finished.catch(() => {}).then(() => {
      if (tok !== routeHeadTok) return;
      el.textContent = text;
      play(el, [{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard }).finished.catch(() => {}).then(() => el.getAnimations().forEach(a => a.cancel()));
    }));
  }
  function showPane(root, name, dir = 1) {
    const from = root.querySelector(':scope > .rt-pane:not([hidden])'), to = root.querySelector(`:scope > [data-pane="${name}"]`);
    if (!to || from === to) return;
    if (screens.route.contains(root)) routeHead(routeNow, name, false, !root.matches('#screen-route > .rt-item'));
    scrollToTop();
    if (!from || reduce) { if (from) from.hidden = true; to.hidden = false; flowSync(); syncNote(); landFocus(screens.route.contains(root) ? screens.route : root); return; }
    Object.assign(from.style, { position: 'absolute', top: from.offsetTop + 'px', left: '0', right: '0', pointerEvents: 'none' });
    to.hidden = false;
    const a = play(from, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: `translateX(${-24 * dir}px)` }], { duration: DUR.fast, easing: EASE.exit });
    const b = play(to, [{ opacity: 0, transform: `translateX(${32 * dir}px)` }, { opacity: 1, transform: 'none' }], { duration: DUR.base, delay: 80, easing: EASE.standard });
    Promise.all([a.finished, b.finished].map(p => p.catch(() => {}))).then(() => { from.hidden = true; from.removeAttribute('style'); a.cancel(); b.cancel(); flowSync(); syncNote(); landFocus(screens.route.contains(root) ? screens.route : root); });
  }
  /* One motion for a card whose content changes height */
  function morphHeight(el, change) {
    const h0 = el.offsetHeight; change();
    if (reduce) return;
    const h1 = el.offsetHeight;
    if (h0 !== h1) el.animate([{ height: h0 + 'px', overflow: 'clip' }, { height: h1 + 'px', overflow: 'clip' }], { duration: DUR.slow, easing: EASE.inout });
  }
  window.addEventListener('hashchange', () => {
    const r = findRoute(location.hash);
    if (r) { if (leavesFlow(r)) endFlow(); return openRoute(r); }
    if (normPath(location.hash) === '/dashboard/' && current !== 'dashboard') openDashboard();
  });

  /* ---------- Create Resume with AI (/dashboard/create-ai-resume/) ---------- */
  const AIM_DESC = {
    basic: 'In Basic mode, the AI Writer will quickly produce a solid, generic draft of a resume tailored to your desired job position.',
    personalized: 'In Personalized mode, the AI Writer generates a resume tailored specifically to the job post or description you provide.'
  };
  const AIM_LANGS = ['English (US)', 'English (UK)', 'Czech', 'Slovak', 'German', 'French', 'Spanish', 'Italian', 'Polish', 'Portuguese', 'Dutch'];
  const AIM_POST_MAX = 6000;
  const aimIcon = {
    clock: '<svg class="aim-ic" width="16" height="16" viewBox="0 0 16 16" stroke-width="1.25" aria-hidden="true"><circle cx="8" cy="8" r="6.875"/><path d="M8 4.25V8l2.6 1.4"/></svg>',
    upCircle: '<svg class="aim-ic" width="16" height="16" viewBox="0 0 16 16" stroke-width="1.25" aria-hidden="true"><circle cx="8" cy="8" r="6.875"/><path d="M8 10.75v-5.5M5.25 8 8 5.25 10.75 8"/></svg>',
    globe: '<svg class="aim-ic" width="20" height="20" viewBox="0 0 20 20" stroke-width="1.5" aria-hidden="true"><circle cx="10" cy="10" r="8.75"/><ellipse cx="10" cy="10" rx="3.4" ry="8.75"/><path d="M1.25 10h17.5"/></svg>',
    chevron: '<svg class="aim-ic" width="16" height="16" viewBox="0 0 16 16" stroke-width="1.5" aria-hidden="true"><path d="m3.75 6.25 4.25 4 4.25-4"/></svg>',
    check: '<svg class="aim-ic" width="16" height="16" viewBox="0 0 16 16" stroke-width="1.5" aria-hidden="true"><path d="m3.5 8.5 3 3 6-7"/></svg>'
  };
  function aiModalHTML() {
    const name = [person.first, person.last].filter(Boolean).join(' ');
    return `<form class="aim" aria-labelledby="aim-h" data-mode="basic" novalidate>
      <h1 id="aim-h">Create your resume with AI.</h1>
      <div class="aim-tabs" role="group" aria-label="AI Writer mode">
        <button class="aim-tab" type="button" data-aim-mode="basic" aria-pressed="true">${aimIcon.clock}<span>Basic</span></button>
        <button class="aim-tab" type="button" data-aim-mode="personalized" aria-pressed="false">${aimIcon.upCircle}<span>Personalized</span></button>
      </div>
      <p class="aim-desc" id="aim-desc">${AIM_DESC.basic}</p>
      <div class="aim-field"><label for="aim-name">Your name</label><input class="aim-input" id="aim-name" name="name" value="${esc(name)}" autocomplete="name"></div>
      <div class="aim-field"><label for="aim-title">Job title</label><input class="aim-input" id="aim-title" name="title" autocomplete="organization-title"></div>
      <div class="aim-field aim-post" hidden><label for="aim-post">Paste the job post or job description here</label>
        <textarea class="aim-input aim-ta" id="aim-post" name="post" maxlength="${AIM_POST_MAX}" aria-describedby="aim-count"></textarea>
        <span class="aim-count" id="aim-count">0/${AIM_POST_MAX}</span></div>
      <div class="aim-foot">
        <div class="aim-lang-wrap">
          <button class="aim-lang" type="button" aria-haspopup="listbox" aria-expanded="false" aria-label="Resume language: English (US)">${aimIcon.globe}<span class="val">English (US)</span>${aimIcon.chevron}</button>
          <ul class="aim-menu" role="listbox" aria-label="Resume language" hidden>${AIM_LANGS.map((l, i) =>
            `<li role="presentation"><button class="aim-opt" type="button" role="option" aria-selected="${i === 0}" data-lang="${l}">${l}${aimIcon.check}</button></li>`).join('')}</ul>
        </div>
        <button class="aim-go" type="submit" disabled>Generate with AI</button>
      </div>
    </form>`;
  }
  function initAiModal(form) {
    const go = form.querySelector('.aim-go'), post = form.querySelector('.aim-post'), ta = form.querySelector('textarea');
    const lang = form.querySelector('.aim-lang'), menu = form.querySelector('.aim-menu');
    // Generate needs a name and a job title; Personalized also needs the job post
    const check = () => {
      const v = n => form.elements[n].value.trim();
      go.disabled = !(v('name') && v('title') && (form.dataset.mode === 'basic' || v('post')));
    };
    function setMode(mode) {
      if (mode === form.dataset.mode) return;
      const h0 = form.offsetHeight;
      form.dataset.mode = mode;
      form.querySelectorAll('.aim-tab').forEach(t => t.setAttribute('aria-pressed', String(t.dataset.aimMode === mode)));
      const desc = form.querySelector('.aim-desc');
      desc.textContent = AIM_DESC[mode];
      post.hidden = mode !== 'personalized';
      check();
      if (reduce) return;
      // one motion: the card grows or shrinks to its new height while the text and the extra field fade in
      const h1 = form.offsetHeight;
      play(desc, [{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard });
      if (h0 !== h1) {
        const a = form.animate([{ height: h0 + 'px', overflow: 'clip' }, { height: h1 + 'px', overflow: 'clip' }], { duration: DUR.slow, easing: EASE.inout });
        if (!post.hidden) play(post, [{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, delay: 120, easing: EASE.standard });
        a.finished.catch(() => {}).then(() => post.getAnimations().forEach(x => x.cancel()));
      }
      desc.getAnimations().forEach(x => x.finished.catch(() => {}).then(() => x.cancel()));
    }
    function setMenu(open) {
      menu.hidden = !open; lang.setAttribute('aria-expanded', String(open));
      if (open) (menu.querySelector('[aria-selected="true"]') || menu.querySelector('.aim-opt')).focus();
    }
    form.addEventListener('click', e => {
      const tab = e.target.closest('.aim-tab');
      if (tab) return setMode(tab.dataset.aimMode);
      if (e.target.closest('.aim-lang')) return setMenu(menu.hidden);
      const opt = e.target.closest('.aim-opt');
      if (opt) {
        menu.querySelectorAll('.aim-opt').forEach(o => o.setAttribute('aria-selected', String(o === opt)));
        lang.querySelector('.val').textContent = opt.dataset.lang;
        lang.setAttribute('aria-label', 'Resume language: ' + opt.dataset.lang);
        setMenu(false); lang.focus();
        return;
      }
      if (!menu.hidden && !e.target.closest('.aim-menu')) setMenu(false);
    });
    closeOnLeave(lang.parentElement, () => !menu.hidden, () => setMenu(false));
    form.addEventListener('input', () => { ta.nextElementSibling.textContent = `${ta.value.length}/${AIM_POST_MAX}`; check(); });
    form.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !menu.hidden) { e.stopPropagation(); setMenu(false); lang.focus(); }
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && e.target.closest('.aim-menu')) {
        e.preventDefault();
        const opts = [...menu.querySelectorAll('.aim-opt')], i = opts.indexOf(e.target.closest('.aim-opt'));
        opts[(i + (e.key === 'ArrowDown' ? 1 : opts.length - 1)) % opts.length].focus();
      }
    });
    form.addEventListener('submit', e => {
      e.preventDefault(); e.stopPropagation();
      check();
      if (go.disabled) return;
      startCreation(form, 'ai', { name: form.elements.name.value, title: form.elements.title.value });
    });
    check();
  }

  /* ---------- Shared bits of the recreated screens ---------- */
  const rtIc = p => `<svg class="rt-ic" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`;
  const RT_IC = {
    x: '<path d="M19 5 5 19"/><path d="m5 5 14 14"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    clipboard: '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',
    cloud: '<path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/>',
    smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
    scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
    briefcase: '<path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    goal: '<path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/>',
    list: '<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',
    lines: '<path d="M15 12H3"/><path d="M17 18H3"/><path d="M21 6H3"/>',
    pen: '<path d="M15 3 8.6 10.4"/><path d="M8.6 10.4 4.2 15.3a2 2 0 0 0-.5 1.3V20H11l4-4z"/><path d="m15 16 5.5-5.5"/>'
  };
  /* Language dropdown (the same component as on Create Resume with AI) */
  function langHTML(langs) {
    return `<div class="aim-lang-wrap">
      <button class="aim-lang" type="button" aria-haspopup="listbox" aria-expanded="false" aria-label="Language: ${langs[0]}">${aimIcon.globe}<span class="val">${langs[0]}</span>${aimIcon.chevron}</button>
      <ul class="aim-menu" role="listbox" aria-label="Language" hidden>${langs.map((l, i) =>
        `<li role="presentation"><button class="aim-opt" type="button" role="option" aria-selected="${i === 0}" data-lang="${l}">${l}${aimIcon.check}</button></li>`).join('')}</ul></div>`;
  }
  function initLang(wrap) {
    if (!wrap) return;
    const btn = wrap.querySelector('.aim-lang'), menu = wrap.querySelector('.aim-menu');
    const set = open => { menu.hidden = !open; btn.setAttribute('aria-expanded', String(open)); if (open) (menu.querySelector('[aria-selected="true"]') || menu.querySelector('.aim-opt')).focus(); };
    btn.addEventListener('click', () => set(menu.hidden));
    menu.addEventListener('click', e => {
      const o = e.target.closest('.aim-opt'); if (!o) return;
      menu.querySelectorAll('.aim-opt').forEach(x => x.setAttribute('aria-selected', String(x === o)));
      btn.querySelector('.val').textContent = o.dataset.lang; btn.setAttribute('aria-label', 'Language: ' + o.dataset.lang);
      set(false); btn.focus();
    });
    wrap.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !menu.hidden) { e.stopPropagation(); set(false); btn.focus(); }
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && e.target.closest('.aim-menu')) {
        e.preventDefault();
        const opts = [...menu.querySelectorAll('.aim-opt')], i = opts.indexOf(e.target.closest('.aim-opt'));
        opts.at((i + (e.key === 'ArrowDown' ? 1 : -1)) % opts.length).focus();
      }
    });
    closeOnLeave(wrap, () => !menu.hidden, () => set(false));
  }
  /* Required fields: a coral outline until the person types */
  function needFilled(fields) {
    const bad = fields.filter(el => !el.value.trim());
    fields.forEach(el => el.classList.toggle('is-error', bad.includes(el)));
    if (bad[0]) bad[0].focus();
    return !bad.length;
  }
  document.addEventListener('input', e => { if (e.target.classList && e.target.classList.contains('is-error') && e.target.value.trim()) e.target.classList.remove('is-error'); });
  /* Where the result would open isn't designed yet: show it's working, then say so */
  function notYet(btn, label, msg) { busy(btn, label, 1400, () => toast(msg)); }

  /* ---------- Generate work experience / resume objective (/ai/resume/…) ---------- */
  const TONES = [['friendly', 'Friendly', RT_IC.smile], ['professional', 'Professional', RT_IC.scale], ['formal', 'Formal', RT_IC.briefcase], ['confident', 'Confident', RT_IC.goal]];
  const FORMS = [['bullets', 'Bullet points', RT_IC.list], ['paragraphs', 'Paragraphs', RT_IC.lines], ['structured', 'Structured', RT_IC.pen]];
  // the section writers (Generate work experience / objective) and the Summary generator: one design, their own copy
  const AIG = {
    experience: ['Generate work experience', [['title', 'Job title'], ['company', 'Company']], 'structured'],
    objective: ['Generate resume objective', [['title', 'Job you’re applying for']], 'paragraphs'],
    summary: ['Generate resume summary', [['title', 'Job title']], 'paragraphs']
  };
  function aigHTML(kind) {
    const [title, fields, rec] = AIG[kind];
    const chips = (list, sel, recId) => list.map(([id, label, ic]) => `<button class="aig-chip" type="button" role="radio" aria-checked="${id === sel}" tabindex="${id === sel ? 0 : -1}" data-v="${id}"><span class="aig-in">${rtIc(ic)}<span class="lbl">${label}</span></span>${id === recId ? '<span class="aig-rec">Recommended</span>' : ''}</button>`).join('');
    return `<form class="rt-card aig" data-kind="${kind}" novalidate aria-labelledby="aig-h">
      <div class="aig-head"><h1 id="aig-h">${title}</h1>${langHTML(AIM_LANGS)}</div>
      <div class="aig-fields${fields.length > 1 ? '' : ' is-one'}">${fields.map(([n, l]) => `<div class="aig-field"><label for="aig-${n}">${l}</label><input class="aig-input" id="aig-${n}" name="${n}" placeholder="${l}" autocomplete="off"></div>`).join('')}</div>
      <div class="aig-opts">
        <div><span class="aig-l" id="aig-tone">Tone of Voice</span><div class="aig-chips" role="radiogroup" aria-labelledby="aig-tone">${chips(TONES, 'professional')}</div></div>
        <div><span class="aig-l" id="aig-form">Form</span><div class="aig-chips" role="radiogroup" aria-labelledby="aig-form">${chips(FORMS, rec, rec)}</div></div>
      </div>
      <div class="aig-foot"><button class="rt-btn rt-ai aig-go" type="submit">Generate</button></div>
    </form>`;
  }
  function initAig(form, generate) {
    initLang(form.querySelector('.aim-lang-wrap'));
    form.addEventListener('click', e => {
      const chip = e.target.closest('.aig-chip');
      if (chip) chip.parentElement.querySelectorAll('.aig-chip').forEach(c => c.setAttribute('aria-checked', String(c === chip)));
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!needFilled([form.elements.title])) return;
      if (generate) return generate(form);  // the writer pop-up over Fill In
      startCreation(form, 'ai', { name: [person.first, person.last].filter(Boolean).join(' '), title: form.elements.title.value,
        company: form.elements.company ? form.elements.company.value : '', as: SECTION_AS[form.dataset.kind] });
    });
  }

  /* ---------- AI writers with Basic / Personalized: cover letter, interview questions ---------- */
  const COVER_LANGS = ['English', 'Czech', 'Slovak', 'German', 'French', 'Spanish', 'Italian', 'Polish', 'Portuguese', 'Dutch'];
  const IVW_DESC = {
    basic: 'In Basic mode, Kickresume quickly generates a set of interview questions tailored to your desired job position.',
    personalized: 'In Personalized mode, Kickresume generates interview questions tailored not only to the job you want but also to your previous work experience.'
  };
  const SAMPLE_AD = `Product Designer (mid-level), Lumen Health, Bratislava or remote. You will own the patient onboarding flow end to end: research, flows, UI and hand-off. 3+ years designing web or mobile products, a portfolio with shipped work, and comfort running usability tests. Figma, design systems, working closely with engineers.`;
  const tabsHTML = () => `<div class="aim-tabs" role="group" aria-label="AI Writer mode">
      <button class="aim-tab" type="button" data-aim-mode="basic" aria-pressed="true">${aimIcon.clock}<span>Basic</span></button>
      <button class="aim-tab" type="button" data-aim-mode="personalized" aria-pressed="false">${aimIcon.upCircle}<span>Personalized</span></button>
    </div>`;
  const stepTwoPanes = kind => `<div class="rt-pane" data-pane="s2" hidden>${selectHTML(kind)}</div>`;
  function coverHTML() {
    return `<div class="rt-panes" data-writer="cover">
      <div class="rt-pane" data-pane="s1"><form class="rt-card aiw" data-mode="basic" novalidate aria-labelledby="cov-h">
        <h1 id="cov-h">AI Cover Letter Writer</h1>${tabsHTML()}
        <p class="aim-desc">${AIM_DESC.basic}</p>
        <div class="aim-field"><label for="cov-title">Job title on the application (required)</label><input class="aim-input" id="cov-title" name="title" autocomplete="off"></div>
        <div class="aim-field"><label for="cov-post">Copy and paste the job post here</label><textarea class="aim-input aim-ta" id="cov-post" name="post" maxlength="6000"></textarea><span class="aim-count">0/6000</span></div>
        <p class="rt-step" data-only="personalized" hidden>Step 1/2</p>
        <div class="aim-foot">${langHTML(COVER_LANGS)}<button class="rt-btn rt-ai aiw-go" type="submit" data-only="basic">Generate with AI</button><button class="rt-btn rt-coral aiw-next" type="button" data-only="personalized" hidden>Next</button></div>
      </form></div>${stepTwoPanes('cover')}</div>`;
  }
  function interviewHTML() {
    return `<div class="rt-panes" data-writer="interview">
      <div class="rt-pane" data-pane="s1"><form class="rt-card aiw ivw" data-mode="basic" novalidate aria-labelledby="ivw-h">
        <h1 id="ivw-h">Job Interview Questions</h1>${tabsHTML()}
        <p class="aim-desc">${IVW_DESC.basic}</p>
        <div class="aim-field"><label for="ivw-title">Job title from the job ad (required)</label><input class="aim-input" id="ivw-title" name="title" autocomplete="off"></div>
        <div class="aim-field" data-only="personalized" hidden><label for="ivw-post">Copy-paste the job ad here (required)</label>
          <div class="aiw-ta"><textarea class="aim-input aim-ta" id="ivw-post" name="post" maxlength="1000"></textarea><button class="aiw-paste" type="button">${rtIc(RT_IC.clipboard)}Paste</button></div><span class="aim-count">0/1000</span></div>
        <div class="aim-field"><span class="aiw-l" id="ivw-sen">Seniority</span><div class="seg3" role="radiogroup" aria-labelledby="ivw-sen">${['Junior', 'Mid', 'Senior'].map(s => `<button type="button" role="radio" aria-checked="${s === 'Mid'}" tabindex="${s === 'Mid' ? 0 : -1}">${s}</button>`).join('')}</div></div>
        <p class="rt-step" data-only="personalized" hidden>Step 1/2</p>
        <div class="aim-foot"><button class="rt-btn rt-ai ivw-go" type="submit" data-only="basic">Generate with AI</button><button class="rt-btn rt-coral aiw-next" type="button" data-only="personalized" hidden>Next</button></div>
      </form></div>${stepTwoPanes('interview')}</div>`;
  }
  function initWriter(root) {
    const kind = root.dataset.writer, form = root.querySelector('form'), desc = form.querySelector('.aim-desc');
    const DESC = kind === 'cover' ? AIM_DESC : IVW_DESC, result = kind === 'cover' ? 'cover letter' : 'interview questions';
    initLang(form.querySelector('.aim-lang-wrap'));
    function setMode(mode) {
      if (mode === form.dataset.mode) return;
      morphHeight(form, () => {
        form.dataset.mode = mode;
        form.querySelectorAll('.aim-tab').forEach(t => t.setAttribute('aria-pressed', String(t.dataset.aimMode === mode)));
        desc.textContent = DESC[mode];
        form.querySelectorAll('[data-only]').forEach(el => { el.hidden = el.dataset.only !== mode; });
      });
      if (!reduce) play(desc, [{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard }).finished.catch(() => {}).then(a => desc.getAnimations().forEach(x => x.cancel()));
    }
    const required = () => [form.elements.title, ...(kind === 'interview' && form.dataset.mode === 'personalized' ? [form.elements.post] : [])];
    const toStepTwo = () => { refreshSel(root.querySelector('.sel')); showPane(root, 's2', 1); };
    form.addEventListener('click', e => {
      const tab = e.target.closest('.aim-tab'); if (tab) return setMode(tab.dataset.aimMode);
      const seg = e.target.closest('.seg3 button'); if (seg) return seg.parentElement.querySelectorAll('button').forEach(b => b.setAttribute('aria-checked', String(b === seg)));
      if (e.target.closest('.aiw-paste')) {
        const ta = form.elements.post;
        const fill = t => { ta.value = t.slice(0, +ta.maxLength); ta.dispatchEvent(new Event('input', { bubbles: true })); ta.focus(); };
        (navigator.clipboard && navigator.clipboard.readText ? navigator.clipboard.readText() : Promise.reject()).then(t => fill(t.trim() || SAMPLE_AD), () => fill(SAMPLE_AD));
        return;
      }
      // step 2 picks one of the person's resumes: without one, the method screen makes it first and step 2 follows
      if (e.target.closest('.aiw-next') && needFilled(required())) { const r = routeNow; cvUploaded ? toStepTwo() : askCv(() => backToRoute(r, toStepTwo), false, r.path); }
    });
    form.addEventListener('input', e => { if (e.target.name === 'post') e.target.parentElement.closest('.aim-field').querySelector('.aim-count').textContent = `${e.target.value.length}/${e.target.maxLength}`; });
    form.addEventListener('submit', e => {
      e.preventDefault();
      // Enter in Personalized goes on to step 2, like Next
      if (form.dataset.mode === 'personalized') return form.querySelector('.aiw-next').click();
      if (!needFilled(required())) return;
      if (kind === 'interview') { iqRole = form.elements.title.value.trim() || iqRole; if (!flowOn()) openInterview('process'); return; }  // Job Interviews: its loading, then the questions
      if (kind === 'cover') { if (!flowOn()) writeLetter('cover', form.elements.title.value.trim()); else letterFor('cover', form.elements.title.value.trim()); return; }  // its building screen, then Fill In with the letter
      if (!flowOn()) notYet(form.querySelector('[type="submit"]'), 'Writing…', `The ${result} would open here; that screen isn’t part of the prototype yet.`);
    });
    const sel = root.querySelector('.sel');
    sel.addEventListener('click', e => {
      const it = e.target.closest('.sel-item'); if (it) return sel.querySelectorAll('.sel-item').forEach(x => x.setAttribute('aria-checked', String(x === it)));
      if (e.target.closest('.sel-back')) showPane(root, 's1', -1);
      if (e.target.closest('.sel-go') && kind === 'cover') { const t = form.elements.title.value.trim(); if (!flowOn()) writeLetter('cover', t); else letterFor('cover', t); return; }
      if (e.target.closest('.sel-go') && kind === 'interview') { iqRole = form.elements.title.value.trim() || iqRole; if (!flowOn()) openInterview('process'); return; }
      if (e.target.closest('.sel-go') && !flowOn()) notYet(e.target.closest('.sel-go'), 'Writing…', `The personalized ${result} would open here; that screen isn’t part of the prototype yet.`);
    });
  }

  /* ---------- Tailor your resume to a job (/dashboard/tailor-resume/, /jobs/job/{id}/tailor/) ----------
     The job post as a URL or typed in (the link under the fields switches), or the job a job page passed on;
     Tailor Now opens the tailoring screen (tldHTML) in the same route. */
  const TRL_IC = {
    flame: '<path d="M12 3c.667 2.667 2 4.833 4 6.5s3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.082.351-2.135 1-3a2.5 2.5 0 0 0 5 0c0-2-1.5-3-1.5-5 0-1.333.833-2.667 2.5-4Z"/>',
    clock: '<circle cx="8" cy="8" r="6.667"/><path d="M8 4v4l2.667 1.333"/>',
    pin: '<path d="M13.333 6.667c0 3.329-3.692 6.796-4.932 7.866a.67.67 0 0 1-.802 0C6.359 13.463 2.667 9.996 2.667 6.667a5.333 5.333 0 0 1 10.666 0Z"/><circle cx="8" cy="6.667" r="2"/>',
    fading: '<path d="M8 1.334a6.667 6.667 0 0 1 4.92 11.167"/><path d="M8 4v4l2.667 1.333"/><path d="M1.667 5.916a6.67 6.67 0 0 0-.334 2"/><path d="M1.887 10.666a6.67 6.67 0 0 0 1.62 2.267"/><path d="M3.09 3.491q.28-.303.595-.571"/><path d="M5.763 14.279a6.67 6.67 0 0 0 5.087-.254"/>',
    brief: '<path d="M10.667 13.334V2.667A1.333 1.333 0 0 0 9.333 1.334H6.667a1.333 1.333 0 0 0-1.334 1.333v10.667"/><rect x="1.333" y="4" width="13.333" height="9.333" rx="1.333"/>'
  };
  const TRL_LEVELS = [
    ['conservative', 'Conservative', RT_IC.smile, 'Safe. Sticks close to your own words. Doesn’t invent or oversell.'],
    ['balanced', 'Balanced', RT_IC.scale, 'Recommended. The sweet spot — polished, relevant, and still you.'],
    ['turbo', 'Turbo', TRL_IC.flame, 'Bold. Goes all-in on the job match. Double-check before sending.']
  ];
  const TRL_POST_MAX = 6000;
  // the job a job page passes on (the design's sample)
  // the job the job page shows (Figma concepting-KR › 294:3680), the one tailoring from it uses
  const TRL_JOB = { title: 'Server Administrator', company: 'Cisco', logo: '__ASSET:jobs/cisco.png__',
    meta: [['clock', '5 days ago'], ['pin', 'United States +2'], ['fading', 'Part-time +2'], ['brief', 'Remote']] };
  const TRL_SWITCH = { url: 'No URL? Paste job description', manual: 'Got URL? Paste it instead' };
  function trlHTML(fromJob) {
    const field = (id, label, input) => `<div class="trl-field"><label for="trl-${id}">${label}</label>${input}</div>`;
    const job = `<div class="trl-field"><span class="trl-l">Job post</span><div class="trl-job"><img src="${TRL_JOB.logo}" alt="" width="40" height="40">
      <b title="${TRL_JOB.title}">${TRL_JOB.title}</b><span class="trl-job-co">${TRL_JOB.company}</span>
      <span class="trl-meta">${TRL_JOB.meta.map(([ic, t]) => `<span><svg viewBox="0 0 16 16" aria-hidden="true">${TRL_IC[ic]}</svg>${t}</span>`).join('')}</span></div></div>`;
    const typed = `<div class="trl-fields" data-only="url">${field('url', 'Job post URL', '<input class="trl-input" id="trl-url" name="url" type="url" inputmode="url" autocomplete="off">')}</div>
      <div class="trl-fields" data-only="manual" hidden>
        <div class="trl-row">${field('title', 'Job title', '<input class="trl-input" id="trl-title" name="title" autocomplete="off">')}${field('company', 'Company name', '<input class="trl-input" id="trl-company" name="company" autocomplete="off">')}</div>
        ${field('post', 'Job post', `<textarea class="trl-input trl-ta" id="trl-post" name="post" maxlength="${TRL_POST_MAX}" aria-describedby="trl-count"></textarea><span class="trl-count" id="trl-count">0/${TRL_POST_MAX}</span>`)}
      </div>`;
    return `<form class="rt-card trl" data-mode="${fromJob ? 'job' : 'url'}" novalidate aria-labelledby="trl-h">
      <h1 id="trl-h">Tailor your resume to a job</h1>
      <div class="trl-main"><div class="trl-body"><div class="trl-top">${fromJob ? job : typed}
        <div class="trl-level"><span class="trl-l" id="trl-lv">Tailoring level</span>
          <div class="trl-seg" role="radiogroup" aria-labelledby="trl-lv">${TRL_LEVELS.map(([id, name, ic], i) =>
            `<button class="trl-opt" type="button" role="radio" aria-checked="${i === 1}" tabindex="${i === 1 ? 0 : -1}" aria-label="${name}" data-level="${id}">${rtIc(ic)}<span>${name}</span></button>`).join('')}</div>
          <p class="trl-desc" aria-live="polite">${TRL_LEVELS[1][3]}</p></div>
      </div>${fromJob ? '' : `<button class="trl-switch" type="button">${TRL_SWITCH.url}</button>`}</div>
      <div class="trl-foot">${fromJob ? '<button class="rt-btn rt-ghost trl-cancel" type="button">Cancel</button>' : ''}<button class="rt-btn rt-ai trl-go" type="submit"${fromJob ? '' : ' disabled'}>Tailor Now</button></div></div>
    </form>`;
  }
  function initTrl(form, r) {
    const root = form.closest('.rt-panes'), go = form.querySelector('.trl-go'), desc = form.querySelector('.trl-desc');
    // Cancel (the job version) goes back to the job page; in a run, to its job page step
    form.querySelector('.trl-cancel')?.addEventListener('click', () => {
      const i = flowNow ? flowNow.steps.findIndex(st => st.match.startsWith('route:/jobs/job/1234/#')) : -1;
      if (i >= 0) return flowGo(i);
      openRoute(findRoute('/jobs/job/1234/'));
    });
    const val = n => (form.elements[n] ? form.elements[n].value.trim() : '');
    // Tailor Now needs the URL, or the job post when it's typed in; a job from a job page is enough on its own
    const check = () => { if (form.dataset.mode !== 'job') go.disabled = !val(form.dataset.mode === 'url' ? 'url' : 'post'); };
    function setMode(mode) {
      const part = form.querySelector(`[data-only="${mode}"]`);
      morphHeight(form, () => {
        form.dataset.mode = mode;
        form.querySelectorAll('[data-only]').forEach(el => { el.hidden = el !== part; });
        form.querySelector('.trl-switch').textContent = TRL_SWITCH[mode];
        check();
      });
      if (!reduce) part.animate([{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard });
      part.querySelector('.trl-input').focus({ preventScroll: true });
    }
    function setLevel(opt) {
      form.querySelectorAll('.trl-opt').forEach(o => { o.setAttribute('aria-checked', String(o === opt)); o.tabIndex = o === opt ? 0 : -1; });
      desc.textContent = TRL_LEVELS.find(l => l[0] === opt.dataset.level)[3];
    }
    form.addEventListener('click', e => {
      const opt = e.target.closest('.trl-opt');
      if (opt) return setLevel(opt);
      if (e.target.closest('.trl-switch')) setMode(form.dataset.mode === 'url' ? 'manual' : 'url');
    });
    form.querySelector('.trl-seg').addEventListener('keydown', e => {
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (!step) return;
      e.preventDefault();
      const opts = [...form.querySelectorAll('.trl-opt')], at = opts.findIndex(o => o.getAttribute('aria-checked') === 'true');
      const next = opts[(at + step + opts.length) % opts.length];
      setLevel(next); next.focus();
    });
    form.addEventListener('input', e => {
      if (e.target.name === 'post') form.querySelector('.trl-count').textContent = `${e.target.value.length}/${TRL_POST_MAX}`;
      check();
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      check();
      if (go.disabled) return;
      // the tailoring is this route's next pane: a running flow's bar moves on, and Close comes back to what was typed
      flowTo(`route:${r.path}#process`);
      showPane(root, 'process', 1);
      root.querySelector('.tld')._run();
    });
    initTld(root.querySelector('.tld'), r.path);
    check();
  }

  /* ---------- Tailoring (the route's "process" pane, after Tailor Now) ----------
     Four steps with their own looping pictures (CSS), each TLD_STEP_MS long (about 30 s in the product); then
     Done! (Continue opens the editor) or, when More options › Result is Failed or Error, Something went wrong.
     Clicking beside the card, the spinner button or Escape while it runs shows "Please wait…". */
  const TLD_STEP_MS = 3000;
  const TLD_STEPS = [
    ['Creating a copy...', 'Your original resume stays untouched. Find it in the Documents tab.'],
    ['Scanning resume & job post...', 'Finding the skills and keywords the employer cares about.'],
    ['Tailoring...', 'Rewriting and restructuring your resume to match the job post.'],
    ['Finishing up...', 'It opens in the Design tab, where you can pick a different template, layout or fonts.']
  ];
  const TLD_END = {
    ok: ['Done!', TLD_STEPS[3][1]],
    fail: ['Something went wrong.', 'We couldn’t read the job post. Check it and try again.'],
    error: ['Something went wrong.', 'The server is taking too long to respond.']
  };
  const TLD_IMG = { martinus: '__ASSET:tailor/martinus.webp__', newsweek: '__ASSET:tailor/newsweek.webp__', rectangular: '__ASSET:tailor/rectangular.webp__', postcard: '__ASSET:tailor/postcard.webp__' };
  const TLD_KW = [[256, 22, '#ff9494', -69, 18, -148, 39], [-62, 44, '#fb94ff', 73, 9, 140, 15], [264, 107, '#94bfff', -74, -3, -157, -6], [-58, 144, '#a6ff94', 69, -19, 130, -36]];
  const tldGrad = (id, x1, y1, x2, y2) => `<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" gradientUnits="userSpaceOnUse"><stop stop-color="#5345ff"/><stop offset="1" stop-color="#9c3eff"/></linearGradient>`;
  const TLD_SPIN = `<svg viewBox="0 0 20 20" aria-hidden="true"><defs>${tldGrad('tsp0', 9.2, 14.2, 12.1, 15.14)}${tldGrad('tsp1', 3.31, 3.31, 7.27, 7.27)}${tldGrad('tsp2', 12.73, 12.73, 16.69, 16.69)}${tldGrad('tsp3', .87, 9.2, 1.81, 12.09)}${tldGrad('tsp4', 14.2, 9.2, 15.14, 12.09)}${tldGrad('tsp5', 3.31, 12.73, 7.27, 16.69)}</defs>
    <path fill="#9c3eff" fill-opacity=".6" d="M10 .867c.442 0 .8.358.8.8V5a.8.8 0 0 1-1.6 0V1.667c0-.442.358-.8.8-.8Z"/>
    <path fill="url(#tsp0)" d="M10 14.2c.442 0 .8.358.8.8v3.333a.8.8 0 0 1-1.6 0V15c0-.442.358-.8.8-.8Z"/>
    <path fill="url(#tsp1)" d="M3.543 3.543a.8.8 0 0 1 1.131 0l2.358 2.358a.8.8 0 0 1-1.131 1.131L3.543 4.674a.8.8 0 0 1 0-1.131Z"/>
    <path fill="url(#tsp2)" d="M12.968 12.967a.8.8 0 0 1 1.131 0l2.358 2.358a.8.8 0 0 1-1.131 1.131l-2.358-2.358a.8.8 0 0 1 0-1.131Z"/>
    <path fill="url(#tsp3)" d="M.867 10c0-.442.358-.8.8-.8H5a.8.8 0 0 1 0 1.6H1.667a.8.8 0 0 1-.8-.8Z"/>
    <path fill="url(#tsp4)" d="M14.2 10c0-.442.358-.8.8-.8h3.333a.8.8 0 0 1 0 1.6H15a.8.8 0 0 1-.8-.8Z"/>
    <path fill="url(#tsp5)" d="M7.032 12.967a.8.8 0 0 1 0 1.131l-2.358 2.358a.8.8 0 0 1-1.131-1.131l2.358-2.358a.8.8 0 0 1 1.131 0Z"/>
    <path fill="#9c3eff" fill-opacity=".3" d="M16.457 3.543a.8.8 0 0 1 0 1.131l-2.358 2.358a.8.8 0 0 1-1.131-1.131l2.358-2.358a.8.8 0 0 1 1.131 0Z"/></svg>`;
  const TLD_LINE = `<svg class="tld-line" viewBox="0 0 197 30"><defs><filter id="tld-glow-f" x="0" y="0" width="197" height="30" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="bg"/>
    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="a"/><feGaussianBlur stdDeviation="2"/><feComposite in2="a" operator="out"/><feColorMatrix values="0 0 0 0 0.32549 0 0 0 0 0.270588 0 0 0 0 1 0 0 0 1 0"/><feBlend in2="bg" result="s1"/>
    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="a"/><feGaussianBlur stdDeviation="7"/><feComposite in2="a" operator="out"/><feColorMatrix values="0 0 0 0 0.611765 0 0 0 0 0.243137 0 0 0 0 1 0 0 0 0.8 0"/><feBlend in2="s1" result="s2"/>
    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="a"/><feGaussianBlur stdDeviation="7"/><feComposite in2="a" operator="out"/><feColorMatrix values="0 0 0 0 0.337834 0 0 0 0 0.558556 0 0 0 0 1 0 0 0 1 0"/><feBlend in2="s2" result="s3"/>
    <feBlend in="SourceGraphic" in2="s3"/></filter></defs>
    <g filter="url(#tld-glow-f)"><line x1="15" y1="15" x2="182" y2="15" stroke="#1235ff" stroke-width="2" stroke-linecap="round"/></g></svg>`;
  /* The resume drawn in boxes (110 × 152); anim marks the lines the Tailoring picture moves */
  function tldDoc(anim) {
    const a = n => anim && n ? ` data-a="${n}"` : '';
    const bar = (x, y, w, n, dk) => `<i${dk ? ' class="dk"' : ''} style="left:${x}px;top:${y}px;width:${w}px"${a(n)}></i>`;
    const skill = (x, y, fill, n) => `<s style="left:${x}px;top:${y}px;--fill:${fill}px"${a(n)}></s>`;
    return `<span class="tld-doc"><u><svg viewBox="0 0 19 12"><path d="M4.108 2.4 0 5.28V12h19V4.32L14.892 0 8.73 5.28Z" fill="#b3b3b3"/></svg></u>${bar(33, 10.5, 52, 0, 1)}${bar(33, 20.5, 27, 0, 1)}`
      + bar(9, 39, 25) + bar(9, 45, 92, 1) + bar(9, 51, 92, 2)
      + bar(9, 66, 25, 3) + bar(9, 72, 44) + bar(9, 78, 44, 4) + bar(9, 84, 44, 5) + bar(57, 72, 44, 6) + bar(57, 78, 44, 7) + bar(57, 84, 44)
      + bar(9, 99, 36) + skill(9, 105, 32, 8) + skill(57, 105, 20, 9) + skill(9, 117, 36) + skill(57, 117, 41) + '</span>';
  }
  const TLD_PICS = () => [
    `<span class="tld-copy">${tldDoc()}</span>${tldDoc()}`,
    `${tldDoc()}<span class="tld-glow"></span>${TLD_LINE}`,
    TLD_KW.map(([x, y, c, x1, y1, x2, y2]) => `<span class="tld-kw" style="left:${x}px;top:${y}px;--c:${c};--x1:${x1}px;--y1:${y1}px;--x2:${x2}px;--y2:${y2}px"></span>`).join('') + tldDoc(true),
    `<span class="tld-track">${['martinus', 'newsweek', 'rectangular', 'postcard', 'martinus'].map((n, i) => `<img src="${TLD_IMG[n]}" alt="" style="left:${66 + 191 * i}px">`).join('')}</span>`
  ];
  function tldHTML() {
    return `<div class="rt-card tld" data-state="run" role="group" aria-labelledby="tld-h">
      <div class="tld-art" aria-hidden="true">${TLD_PICS().map((p, i) => `<div class="tld-pic p${i + 1}${i ? '' : ' is-on'}">${p}</div>`).join('')}</div>
      <button class="rt-x tld-x" type="button" aria-label="Close" hidden>${rtIc(RT_IC.x)}</button>
      <div class="tld-bars">${'<span class="tld-bar"><i></i></span>'.repeat(4)}</div>
      <div class="tld-body"><div class="tld-text" aria-live="polite"><h2 id="tld-h">${TLD_STEPS[0][0]}</h2><p>${TLD_STEPS[0][1]}</p></div>
        <div class="tld-foot"><button class="rt-btn tld-btn tld-wait" type="button" aria-label="Tailoring, please wait">${TLD_SPIN}</button>
          <button class="rt-btn rt-coral tld-btn tld-retry" type="button" hidden>Retry</button>
          <button class="rt-btn rt-ai tld-btn tld-go" type="button" hidden>Continue</button></div></div>
      <div class="tld-note" role="status"></div>
    </div>`;
  }
  let tldJump = false;  // the flow bar jumped to the end state: show it without running the steps
  function initTld(card, path) {
    if (!card) return;
    const root = card.closest('.rt-panes'), text = card.querySelector('.tld-text');
    const pics = [...card.querySelectorAll('.tld-pic')], bars = [...card.querySelectorAll('.tld-bar')];
    const wait = card.querySelector('.tld-wait'), retry = card.querySelector('.tld-retry'), cont = card.querySelector('.tld-go'), x = card.querySelector('.tld-x'), note = card.querySelector('.tld-note');
    const live = () => card.isConnected && !card.closest('[hidden]');
    let noteTimer = 0;
    function say(title, line) {
      text.firstElementChild.textContent = title; text.lastElementChild.textContent = line;
      if (!reduce) text.animate([{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard });
    }
    function show(step) {
      pics.forEach((p, k) => p.classList.toggle('is-on', k === step));
      bars.forEach((b, k) => {
        const fill = b.firstElementChild;
        b.classList.toggle('is-done', k < step);
        fill.style.transition = ''; fill.style.width = '';
        if (k === step) { fill.style.width = '0'; void fill.offsetWidth; fill.style.transition = `width ${TLD_STEP_MS}ms linear`; fill.style.width = '100%'; }
      });
      say(...TLD_STEPS[step]);
    }
    function end() {
      const ok = procResult === 'ok';
      card._start = null;
      if (ok) {
        // the job it was tailored to, for the editor's Resume Tailoring tab (a link gives no title: the design's)
        const trl = root.querySelector('form.trl'), mode = trl ? trl.dataset.mode : 'url', typed = trl && trl.elements.title ? trl.elements.title.value.trim() : '';
        tailored = { title: mode === 'job' ? TRL_JOB.title : mode === 'manual' && typed ? typed : TRT.job, fromJob: mode === 'job' };
        edTab = 'tailoring';
      }
      card.dataset.state = ok ? 'done' : 'error';
      pics.forEach((p, k) => p.classList.toggle('is-on', k === 3));
      bars.forEach(b => { b.classList.add('is-done'); b.firstElementChild.removeAttribute('style'); });
      say(...TLD_END[procResult]);
      if (live()) setRouteHead((/^\/jobs\//.test(path) && HEADS.tailoredJob[procResult]) || HEADS.tailored[procResult]);
      wait.hidden = true; cont.hidden = !ok; retry.hidden = ok; x.hidden = ok;
      hideNote();
      flowSeen('tld-end');
    }
    // a failed run stops while it reads the job post
    function run() {
      card._start = null;
      card.dataset.state = 'run';
      if (live()) setRouteHead(HEADS.tailoring);
      wait.hidden = false; cont.hidden = retry.hidden = x.hidden = true;
      const stopAt = procResult === 'ok' ? TLD_STEPS.length : 2;
      const tick = step => {
        if (!live()) return;
        if (step === stopAt || step === TLD_STEPS.length) return end();
        show(step);
        later(() => tick(step + 1), stopAt === step + 1 && procResult !== 'ok' ? TLD_STEP_MS * .6 : TLD_STEP_MS);
      };
      tick(0);
    }
    function hideNote() { clearTimeout(noteTimer); note.classList.remove('is-on'); }
    card._note = () => {
      note.textContent = 'Please wait for tailoring to complete.'; note.classList.add('is-on');
      clearTimeout(noteTimer); noteTimer = setTimeout(hideNote, 2600);
    };
    card._run = run; card._end = end;
    // Back to the setup (Close, or Retry when the job post couldn't be read); Retry after an error runs it again
    const back = () => { flowTo(`route:${path}#main`); showPane(root, 'main', -1); };
    x.addEventListener('click', back);
    retry.addEventListener('click', () => { if (procResult === 'fail') return back(); flowTo(`route:${path}#process`); run(); });
    cont.addEventListener('click', () => { if (!flowOn()) jumpEditor(); });
    wait.addEventListener('click', card._note);
    // opened from another screen, it starts once the route screen shows (openRoute)
    card._start = tldJump ? end : run;
    tldJump = false;
    if (live()) card._start();
  }
  // Leaving while it runs: clicking beside the card or pressing Escape asks the person to wait
  function tldInterrupt(e) {
    const card = current === 'route' && screens.route.querySelector('.tld[data-state="run"]');
    if (!card || card.closest('[hidden]') || (e.type === 'keydown' && e.key !== 'Escape') || (e.type === 'click' && card.contains(e.target))) return;
    card._note();
  }
  screens.route.addEventListener('click', tldInterrupt);
  document.addEventListener('keydown', tldInterrupt);

  /* ---------- Select your resume (step 2) ---------- */
  function selectHTML(kind) {
    return `<div class="rt-card sel" data-kind="${kind}" style="--w:${kind === 'interview' ? 424 : 454}px">
      <h1>Select your resume</h1>
      <p class="sel-sub">The AI will scan this resume for useful information and use it to personalize your ${kind === 'cover' ? 'cover letter' : 'interview questions'}.</p>
      <div class="sel-row" role="radiogroup" aria-label="Your resumes"></div>
      <p class="rt-step">Step 2/2</p>
      <div class="sel-foot"><button class="rt-btn rt-ghost sel-back" type="button">Back</button><button class="rt-btn rt-ai sel-go" type="button">Generate with AI</button></div>
    </div>`;
  }
  function refreshSel(sel) {
    const docs = [cvName || 'My Kickresume (copy)', 'My Kickresume (copy)'];
    sel.querySelector('.sel-row').innerHTML = docs.map((n, i) => `<button class="sel-item" type="button" role="radio" aria-checked="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${i % 2 ? miniB() : miniA()}<span class="sel-name">${esc(n)}</span></button>`).join('');
  }
  /* Two resume previews in the style of the screenshot's templates, drawn with boxes and lines.
     Sizes are in cqw (percent of the thumbnail's width) so they stay crisp at any size. */
  const mb = (x, y, w, h, c, extra = '') => `<i style="left:${x}cqw;top:${y}cqw;width:${w}cqw;height:${h}cqw;background:${c};${extra}"></i>`;
  const lineSet = (x, y, ws, gap = 2.6, c = '#c9c9c9', h = 1.1) => ws.map((w, i) => mb(x, y + i * gap, w, h, c)).join('');
  function miniA() {
    const pill = (x, y) => mb(x, y, 40, 4, '#a9c2cf') + mb(x + 1.2, y + .6, 2.8, 2.8, '#e8a39c');
    return `<span class="rsm" aria-hidden="true">
      ${mb(70, -14, 40, 40, '#eaa7a0')}${mb(58, -5, 9, 9, '#eaa7a0')}${mb(64, 6, 5, 5, '#c8b38e')}${mb(93, 14, 9, 9, '#a9c2cf')}${mb(95, 31, 7, 7, '#c8b38e')}${mb(72, 33, 5, 5, '#c8b38e')}${mb(-5, 26, 9, 9, '#c8b38e')}
      ${mb(70, 9, 20, 20, '#8e959f', 'border:1.2cqw solid #fff')}${mb(76, 12, 8, 8, '#e6c9b4')}${mb(73.5, 20.5, 13, 9, '#3d4652', 'border-radius:6cqw 6cqw 0 0')}
      <b style="left:8cqw;top:9cqw;font-size:5.4cqw">James Snow</b>
      ${lineSet(8, 17, [30, 38, 26, 40, 34], 2.4, '#b9b9b9', .9)}
      ${pill(7, 38)}${lineSet(9, 44, [36, 34, 37, 30, 24])}
      ${pill(7, 59)}${lineSet(9, 65, [28, 22], 2.6, '#9a9a9a')}${lineSet(9, 71, [36, 34, 35, 37, 33, 30, 36, 25])}
      ${lineSet(9, 93, [26, 20], 2.6, '#9a9a9a')}${lineSet(9, 99, [36, 34, 30, 24])}${pill(7, 112)}
      ${pill(53, 38)}${lineSet(55, 44, [32, 36, 30], 2.6)}${lineSet(55, 53, [22, 30, 26], 2.6, '#9a9a9a')}
      ${pill(53, 64)}${lineSet(55, 70, [10, 12, 10, 9], 2.6)}${[0, 1, 2, 3].map(i => mb(70, 70.4 + i * 2.6, 22, .5, '#d7a6a2') + mb(70 + [20, 15, 9, 9].at(i), 69.6 + i * 2.6, 2, 2, '#1f1f1f')).join('')}
      ${pill(53, 84)}${lineSet(55, 90, [16, 14, 12], 2.6)}${lineSet(73, 90, [12, 15, 14], 2.6)}
      ${pill(53, 101)}${lineSet(55, 107, [12, 26, 24, 32], 2.6)}
    </span>`;
  }
  function miniB() {
    const label = (y, w) => mb(0, y, w, 3.2, '#d9593d', 'border-radius:0') + mb(0, y + 3.2, 100, .35, '#d9593d', 'border-radius:0');
    const rows = (y, n) => lineSet(2, y, [11, 12].slice(0, Math.min(2, n)), 2.4, '#9a9a9a', .9) + lineSet(28, y, Array.from({ length: n }, (_, i) => [62, 66, 58, 64, 60, 55].at(i % 6)), 2.4, '#c4c4c4', .9);
    return `<span class="rsm" aria-hidden="true">
      ${mb(6, 4, 16, 15, '#8e959f', 'border-radius:0')}${mb(10, 6, 8, 7, '#e6c9b4')}${mb(7.5, 12.5, 13, 6.5, '#3d4652', 'border-radius:4cqw 4cqw 0 0')}
      <b style="left:28cqw;top:5cqw;font-size:4.8cqw">James Decker</b>${mb(28, 11, 65, .45, '#d9593d', 'border-radius:0')}
      ${lineSet(28, 14, [54, 40, 30], 2.2, '#9a9a9a', .8)}${lineSet(28, 23, [66, 64, 58, 46], 2.2, '#c4c4c4', .8)}
      ${label(34, 13)}${rows(40, 5)}${label(55, 18)}${rows(61, 8)}
      ${label(83, 15)}${[0, 1, 2, 3].map(i => mb(2 + i * 23, 89, 5, 5, '#fff', 'border:.9cqw solid #e2b1a6;border-left-color:#d9593d;border-top-color:#d9593d') + mb(9 + i * 23, 91, 9, .9, '#c4c4c4')).join('')}
      ${label(98, 9)}${[0, 1].map(r => [0, 1].map(c => mb(3 + c * 50, 105 + r * 7, 14, .8, '#9a9a9a') + mb(3 + c * 50, 108 + r * 7, 42, .6, '#1f1f1f') + mb(3 + c * 50 + [40, 28, 21, 33].at(r * 2 + c), 107.4 + r * 7, 1.8, 1.8, '#d9593d')).join('')).join('')}
      ${label(121, 22)}
    </span>`;
  }

  /* ---------- Upload your resume (start · error; then the upload modal) ---------- */
  const UPL_OK = /\.(docx|odt|html?|rtf|txt|pdf)$/i;
  const uplFoot = `<div class="upl-foot"><button class="rt-btn rt-ghost" type="button" data-upl="cancel">Cancel</button><button class="rt-btn rt-coral" type="button" data-upl="pick">Upload</button></div>`;
  const uplDrop = hint => `<div class="upl-drop" role="button" tabindex="0" aria-label="Choose your resume file">${rtIc(RT_IC.cloud)}${hint ? '<p class="upl-hint">Drop your resume text file here</p>' : ''}</div>`;
  const UPL = {
    start: () => `<h1>Upload your resume</h1>${uplDrop(false)}<p class="upl-hint">Drop your resume text file here</p>${uplFoot}`,
    error: () => `<h1>Please upload a valid file</h1><div class="rt-info upl-alert" role="alert">${rtIc(RT_IC.info)}<span>Upload a DOCX, ODT, HTML, RTF, TXT or PDF file that has at least 200 words and less than 10MB.</span></div>${uplDrop(true)}${uplFoot}`
  };
  const uploadHTML = (name, hidden) => `<div class="rt-pane" data-pane="${name}"${hidden ? ' hidden' : ''}><div class="rt-card upl" data-state="start">${UPL.start()}</div></div>`;
  function initUpload(pane, { onFile, onCancel }) {
    if (!pane) return;
    const card = pane.querySelector('.upl'), input = document.createElement('input');
    Object.assign(input, { type: 'file', hidden: true, accept: '.docx,.odt,.html,.htm,.rtf,.txt,.pdf' });
    pane.appendChild(input);
    const setState = st => {
      morphHeight(card, () => { card.dataset.state = st; card.innerHTML = UPL[st](); });
      landFocus(card);
      if (!reduce) [...card.children].forEach(el => play(el, [{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard }).finished.catch(() => {}).then(() => el.getAnimations().forEach(a => a.cancel())));
    };
    // prototype triggers: a file name containing "scan" can't be read; other formats or over 10 MB are refused
    const take = file => { if (!file) return; if (UPL_OK.test(file.name) && file.size <= 10 * 1024 * 1024 && !/scan/i.test(file.name)) onFile(file); else setState('error'); };
    card.addEventListener('click', e => {
      const b = e.target.closest('[data-upl]');
      if (e.target.closest('.upl-drop') || (b && b.dataset.upl === 'pick')) return input.click();
      if (!b) return;
      if (b.dataset.upl === 'cancel') onCancel();
    });
    card.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('.upl-drop')) { e.preventDefault(); input.click(); } });
    input.addEventListener('change', () => { take(input.files[0]); input.value = ''; });
    // a file dropped anywhere on the card counts (and never opens in the tab instead of the prototype)
    ['dragenter', 'dragover'].forEach(t => card.addEventListener(t, e => { e.preventDefault(); const d = e.target.closest('.upl-drop'); if (d) d.classList.add('is-over'); }));
    card.addEventListener('dragleave', e => { const d = e.target.closest('.upl-drop'); if (d && !d.contains(e.relatedTarget)) d.classList.remove('is-over'); });
    card.addEventListener('drop', e => { e.preventDefault(); if (card.querySelector('.upl-drop')) take(e.dataTransfer.files[0]); });
  }

  /* ---------- The upload modal (Figma Kickresume 3.0 › 62245:57072) ----------
     A resume that is uploaded or imported (Upload a resume and Import from LinkedIn on the method screen, the Upload
     and LinkedIn import screens) goes through its states: Uploading resume... → Importing resume... → Finishing
     upload... → Upload successful! (or Upload failed., from the dock's Ends), and Continue goes straight on: to
     the screen that asked for the resume (askCv), else the run's destination or the editor. A resume that is created
     (Write with AI, Paste text) gets the building screen instead (startCreation). The picture and the line under it
     are those of the feature the resume is for (UPM_FOR, by its URL); anything else gets Resume Upload only's. On the
     method screen the modal takes the methods' place under its headline (upmCreate); on the Upload and LinkedIn
     import screens, the card's (upmRoute). */
  const UPM = {
    upload: ['__ASSET:upload/upload.webp__', 'You’re only a few seconds away from a polished resume that will get you invited to interviews.'],
    ats: ['__ASSET:upload/analytics.webp__', 'You’re about to discover your resume score and see how your resume compares against others.'],
    interview: ['__ASSET:upload/interview.webp__', 'In just a few seconds you’ll be able to practice for your next interview with AI-generated questions.'],
    coach: ['__ASSET:upload/coach.webp__', 'Our AI Counsellor will help you fill in the gaps in your skillset based on your current resume.'],
    feedback: ['__ASSET:upload/feedback.webp__', 'Our AI Recruiter is analyzing your resume. It should be done in just a few seconds!'],
    rewrite: ['__ASSET:upload/rewrite.webp__', 'You’re only a few seconds away from an AI-rewritten and polished resume.'],
    tailor: ['__ASSET:upload/tailor.webp__', 'You’re about to have your resume tailored to the job you want—in just a few seconds!'],
    summary: ['__ASSET:upload/summary.webp__', 'In just a few seconds, you’ll be able to generate an impactful summary for your resume.']
  };
  const UPM_FOR = { '/dashboard/analyse-resume/': 'ats', '/dashboard/create-interview/': 'interview', '/dashboard/career-coach/': 'coach', '/dashboard/recruiter-feedback/': 'feedback',
    '/dashboard/rewrite-resume/': 'rewrite', '/dashboard/tailor-resume/': 'tailor', '/jobs/job/1234/tailor/': 'tailor', '/dashboard/summary-generator/': 'summary' };
  // a LinkedIn profile is imported, not uploaded: it starts on Importing resume..., with LinkedIn's note
  const UPM_RUN = ['Uploading resume...', 'Importing resume...', 'Finishing upload...'], UPM_MS = 1000;
  const UPM_INFO = { upload: 'If your resume does not get imported correctly, try uploading it in a different file format (e.g. .docx).', linkedin: 'Recent LinkedIn profile changes may take up to 30 days to update in our system.' };
  const UPM_FAIL = { error: 'The server is taking too long to respond.', upload: 'We couldn’t read your resume. Try uploading it in a different file format (e.g. .docx).', linkedin: 'We couldn’t read this profile. Check that it’s public.' };
  const UPM_SPIN = `<svg class="upm-spin" aria-hidden="true" viewBox="0 0 24 24" fill="#3f3f3f"><path fill-opacity=".4" d="M12 1.04c.53 0 .96.43.96.96v4a.96.96 0 0 1-1.92 0V2c0-.53.43-.96.96-.96Z"/><path d="M12 17.04c.53 0 .96.43.96.96v4a.96.96 0 0 1-1.92 0v-4c0-.53.43-.96.96-.96ZM4.25 4.25a.96.96 0 0 1 1.36 0l2.83 2.83a.96.96 0 0 1-1.36 1.36L4.25 5.61a.96.96 0 0 1 0-1.36ZM15.56 15.56a.96.96 0 0 1 1.36 0l2.83 2.83a.96.96 0 0 1-1.36 1.36l-2.83-2.83a.96.96 0 0 1 0-1.36ZM1.04 12c0-.53.43-.96.96-.96h4a.96.96 0 0 1 0 1.92H2A.96.96 0 0 1 1.04 12ZM17.04 12c0-.53.43-.96.96-.96h4a.96.96 0 0 1 0 1.92h-4a.96.96 0 0 1-.96-.96ZM8.44 15.56a.96.96 0 0 1 0 1.36l-2.83 2.83a.96.96 0 0 1-1.36-1.36l2.83-2.83a.96.96 0 0 1 1.36 0Z"/><path fill-opacity=".2" d="M19.75 4.25a.96.96 0 0 1 0 1.36l-2.83 2.83a.96.96 0 0 1-1.36-1.36l2.83-2.83a.96.96 0 0 1 1.36 0Z"/></svg>`;
  let upmSeq = 0;
  /* A loading card's steps (the upload modal, the ATS analysis): each title for UPM_MS, then done(); a failed result
     stops a step early, on the one that reads the resume. Retry's focus goes to the card's heading before its foot
     hides, and a card no longer on screen does nothing. */
  function cardSteps(card, steps, show, done) {
    if (card.contains(document.activeElement)) { const h = card.querySelector('.upm-h'); h.tabIndex = -1; h.focus(); }
    const n = procResult === 'ok' ? steps.length : steps.length - 1;
    steps.slice(0, n).forEach((t, i) => later(() => { if (card.isConnected) show(t); }, i * UPM_MS));
    later(() => { if (card.isConnected) done(); }, n * UPM_MS);
  }
  const upmKind = () => UPM_FOR[(cvNext && cvNext.forPath) || (flowNow && flowNow.f.path)] || 'upload';
  function upmHTML(o) {
    const [pic, line] = UPM[o.kind], id = 'upm-h' + ++upmSeq;
    return `<div class="rt-card upm" data-state="run" role="group" aria-labelledby="${id}">
      <div class="upm-head"><h2 class="upm-h" id="${id}">${UPM_SPIN}<span>${UPM_RUN[o.id === 'linkedin' ? 1 : 0]}</span></h2>
        <div class="upm-info">${TL_IC.info}<span>${UPM_INFO[o.id]}</span></div></div>
      <img class="upm-pic" src="${pic}" alt="" width="329" height="175">
      <p class="upm-line">${line}</p>
      <div class="upm-foot"><button class="rt-btn rt-ghost" type="button" data-upm="back" hidden>Back</button><button class="rt-btn rt-coral" type="button" data-upm="go" aria-disabled="true">Continue</button></div>
      <p class="sr-only" aria-live="polite"></p>
    </div>`;
  }
  /* o: { id ('upload' | 'linkedin'), opts (what the import needs), file (its name), end (open on the result: a run's
     processing state), back (Back and a failed Retry) } */
  function runUpm(card, o) {
    const title = card.querySelector('.upm-h span'), infoEl = card.querySelector('.upm-info'), info = infoEl.querySelector('span');
    const live = card.querySelector('[aria-live]'), goBtn = card.querySelector('[data-upm="go"]'), back = card.querySelector('[data-upm="back"]');
    const steps = o.id === 'linkedin' ? UPM_RUN.slice(1) : UPM_RUN;
    const swapTitle = t => {
      if (title.textContent === t) return;
      title.textContent = t;
      if (!reduce) play(title, [{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard }).finished.catch(() => {}).then(() => title.getAnimations().forEach(a => a.cancel()));
    };
    const set = (st, instant) => {
      const ok = st !== 'fail', apply = () => {
        card.dataset.state = st;
        title.textContent = st === 'run' ? steps[0] : ok ? 'Upload successful!' : 'Upload failed.';
        info.textContent = ok ? UPM_INFO[o.id] : UPM_FAIL[procResult === 'error' ? 'error' : o.id];
        infoEl.classList.toggle('is-err', !ok);
        back.hidden = ok; goBtn.textContent = ok ? 'Continue' : 'Retry';
        if (st === 'run') goBtn.setAttribute('aria-disabled', 'true'); else goBtn.removeAttribute('aria-disabled');
      };
      if (instant) apply(); else morphHeight(card, apply);
    };
    const end = instant => {
      const ok = procResult === 'ok';
      set(ok ? 'done' : 'fail', instant);
      live.textContent = ok ? 'Upload successful!' : `Upload failed. ${info.textContent}`;
      flowSeen('upm-end');  // the run's processing state, when it shows one
    };
    const run = () => {
      cardSteps(card, steps, t => { swapTitle(t); live.textContent = t; }, () => end());  // a failure stops on Importing resume...
      if (card.dataset.state !== 'run') set('run');
    };
    card.addEventListener('click', e => {
      const b = e.target.closest('[data-upm]'), st = card.dataset.state;
      if (!b) return;
      if (b.dataset.upm === 'back') return o.back();
      if (st === 'run') return;  // no Continue while it uploads
      if (st === 'done') return upmDone(card, o);
      if (procResult === 'fail') return o.back();  // a file or profile that can't be read: try another
      if (flowNow) { const i = flowNow.steps.findIndex(s => s.tag === 'upm'); if (i >= 0 && i !== flowAt) { flowAt = i; renderFlowBar(); } }
      run();  // Retry
    });
    flowSeen('upm');  // uploading is the run's data processing
    if (o.end) end(true); else run();
  }
  /* Continue: the resume is there; straight on to the screen that asked for it, else the run's next step (not the
     building screen, the other way to a CV, nor the modal's own result or the shared one) or the editor */
  function upmDone(card, o) {
    person = buildPerson(o.id, o.opts); tailored = null;  // a new resume
    if (o.id === 'upload') setCv(true, (o.file || '').replace(/\.[^.]+$/, ''));
    const then = cvNext;
    if (then) { if (!cvUploaded) setCv(true); return then(); }
    const k = flowNow ? flowNow.steps.findIndex((s, i) => i > flowAt && !s.alt && !s.result && s.tag !== 'upm-end') : -1;
    if (k >= 0 && flowNow.steps[k].match !== 'screen:editor') return flowGo(k);
    if (k >= 0) { flowAt = k; renderFlowBar(); }
    designNext = k < 0 || !!flowNow.steps[k].design; openEditor(card);  // a new resume: the Design tab; a run's editor step says (Translate: Fill In)
  }
  /* On the method screen: the methods (and Back) make way for the modal, under the method screen's headline */
  const upmSlot = document.getElementById('create-upm'), createBackEl = screens.create.querySelector(':scope > .center');
  async function upmCreate(o) {
    if (screenRun) screenRun.finish();
    clearTimers();
    o = { kind: upmKind(), ...o, back: () => { renderCreate(); flowTo('screen:create'); landFocus(screens.create); } };
    if (variant === 'C') setHead(HEAD0.h, HEAD0.p);
    upmSlot.innerHTML = upmHTML(o);
    const card = upmSlot.firstElementChild, outs = [methodsEl, createBackEl].filter(shown);
    if (!reduce) await Promise.all(outs.map(el => play(el, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateX(-24px)' }], { duration: DUR.fast, easing: EASE.exit }).finished.catch(() => {})));
    if (current !== 'create' || card.parentElement !== upmSlot) return;
    methodsEl.hidden = createBackEl.hidden = true; outs.forEach(el => el.getAnimations().forEach(a => a.cancel()));
    upmSlot.hidden = false;
    landFocus(screens.create);
    if (!reduce) play(card, [{ opacity: 0, transform: 'translateX(24px)' }, { opacity: 1, transform: 'none' }], { duration: DUR.base, easing: EASE.standard }).finished.catch(() => {}).then(() => card.getAnimations().forEach(a => a.cancel()));
    runUpm(card, o);
  }
  /* On the Upload and LinkedIn import screens: the modal takes the card's place, under the screen's headline */
  function upmRoute(item, r, o) {
    const pane = item.querySelector('.rt-pane:not([hidden])') || item.querySelector('.rt-pane');
    // Back: to the screen's own form; in a run whose input came before it (Flow 3, a landing page's CV) there is none,
    // so it goes on as the feature's own run that asks for it, like the processing state's "Change the input"
    o = { kind: upmKind(), ...o, back: () => {
      if (flowNow && flowNow.f.redo && !flowNow.steps.some(s => s.stage === 'prep')) return startFeature(flowNow.f.redo);
      flowTo('route:' + r.path); openRoute(r);
    } };
    pane.innerHTML = upmHTML(o);
    routeHead(r, 'progress');
    landFocus(screens.route);
    if (!reduce && !o.end && current === 'route') play(pane.firstElementChild, [{ opacity: 0, transform: 'translateX(24px)' }, { opacity: 1, transform: 'none' }], { duration: DUR.base, easing: EASE.standard }).finished.catch(() => {}).then(() => pane.firstElementChild?.getAnimations().forEach(a => a.cancel()));
    runUpm(pane.firstElementChild, o);
  }

  /* ---------- LinkedIn import (/dashboard/linkedin-import/) ---------- */
  function linkedinHTML() {
    const slug = [person.first, person.last].filter(Boolean).join('').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    return `<form class="rt-card lki" novalidate aria-labelledby="lki-h">
      <h1 id="lki-h">Paste a link to your LinkedIn profile.</h1>
      <div class="rt-info">${rtIc(RT_IC.info)}<span>Recent LinkedIn profile changes may take up to 30 days to update in our system.</span></div>
      <div class="lki-field"><span class="lki-pre">linkedin.com/in/</span><input name="slug" value="${esc(slug)}" aria-label="Your LinkedIn profile name" autocomplete="off" spellcheck="false"><button class="lki-paste" type="button" aria-label="Paste from clipboard">${rtIc(RT_IC.clipboard)}</button><p class="lki-err" role="alert" hidden>Paste your profile name or the whole link.</p></div>
      <div class="lki-foot"><button class="rt-btn rt-ghost" type="button" data-action="route-close">Cancel</button><button class="rt-btn rt-coral" type="submit">Import</button></div>
    </form>`;
  }
  function initLinkedin(form) {
    const input = form.elements.slug, err = form.querySelector('.lki-err');
    const slugOf = v => { const url = normLinkedIn(v); return (url ? url.split('/in/')[1] : v.trim().replace(/^@/, '')).replace(/\/+$/, ''); };
    form.querySelector('.lki-paste').addEventListener('click', () => {
      const fill = t => { input.value = slugOf(t); input.focus(); err.hidden = true; };
      (navigator.clipboard && navigator.clipboard.readText ? navigator.clipboard.readText() : Promise.reject()).then(t => fill(t || 'jana-novak-design'), () => fill('jana-novak-design'));
    });
    input.addEventListener('input', () => { err.hidden = true; });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const slug = slugOf(input.value);
      if (!/^[\p{L}\p{N}_.-]{2,}$/u.test(slug)) { err.hidden = false; return input.focus(); }
      startCreation(form, 'linkedin', { url: 'https://www.linkedin.com/in/' + slug });
    });
  }

  /* ---------- Resignation letter (/ai/resignation/) ---------- */
  function resignHTML() {
    return `<form class="rt-card rsg" novalidate aria-labelledby="rsg-h">
      <h1 id="rsg-h">What is your job title?</h1>
      <p class="rsg-sub">Enter the job title for which you want to generate a resignation letter.</p>
      <div class="aim-field"><label for="rsg-title">Job title</label><input class="aim-input" id="rsg-title" name="title" autocomplete="organization-title"></div>
      <div class="aim-foot">${langHTML(AIM_LANGS)}<button class="rt-btn rt-ai rsg-go" type="submit">Generate with AI</button></div>
    </form>`;
  }
  function initResign(form) {
    initLang(form.querySelector('.aim-lang-wrap'));
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!needFilled([form.elements.title])) return;
      const t = form.elements.title.value.trim();
      if (!flowOn()) writeLetter('resign', t); else letterFor('resign', t);  // its building screen, then Fill In with the letter
    });
  }

  /* ---------- Sign up and Log in (/register/, /login/) ----------
     Recreated from the product. Full pages with their own top bar and a photo column, so like the
     dashboard they replace the logo bar and the page (APPS.auth) instead of opening in #screen-route.
     Their buttons carry data-wire like the wireframes did, so a running flow moves on. */
  const AUTH = {
    signup: { path: '/register/', h: 'Get started with your account.', q: 'Already have an account?', other: 'login', otherLabel: 'Log In', slide: 1 },
    login: { path: '/login/', h: 'Log in to your account.', q: 'Don’t have an account?', other: 'signup', otherLabel: 'Sign Up', slide: 0 }
  };
  /* The photo column is a carousel of six hired people; the two in the screenshots are known */
  const AUTH_PEOPLE = [
    { name: 'Steve Dominguez, Graphic Designer at K-Brite', img: '__AUTH_STEVE__' },
    { name: 'Ibrahim Mahdi, Video Production Assistant at Disney', img: '__AUTH_IBRAHIM__' }
  ];
  const AUTH_DOTS = 6;
  const AU_IC = {
    linkedin: '<svg viewBox="2.58 2.6 18.56 18.56" aria-hidden="true"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>',
    apple: '<svg viewBox="-0.5 -0.5 25 25" aria-hidden="true"><path fill="currentColor" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>',
    google: '<svg viewBox="-2.4 -2.4 52.8 52.8" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>',
    facebook: '<svg viewBox="-6 -0.5 24 24" aria-hidden="true"><path fill="currentColor" d="M3.3 23V12.6H0V8.6h3.3V5.8C3.3 2.1 5.2 0 8.7 0c1.4 0 2.6.1 3.3.2v3.9H9.9c-1.6 0-2.3.8-2.3 2.2v2.3h4.1l-.6 4H7.6V23z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>'
  };
  const authEl = document.getElementById('screen-auth');
  APPS.auth = authEl;
  let authKind = null, authNote = '';  // authNote: the flow's note for the page, shown in the chrome (syncNote)
  function authSideHTML(on) {
    return `<aside class="au-side" aria-label="Hired with Kickresume Premium">
      ${AUTH_PEOPLE.map((p, i) => `<figure class="au-slide${i === on ? ' is-on' : ''}" data-slide="${i}"${i === on ? '' : ' aria-hidden="true"'}><img src="${p.img}" alt=""><figcaption><span>Hired with Kickresume Premium</span><span>${p.name}</span></figcaption></figure>`).join('')}
      <div class="au-dots">${Array.from({ length: AUTH_DOTS }, (_, i) => i < AUTH_PEOPLE.length
        ? `<button class="au-dot${i === on ? ' is-on' : ''}" type="button" data-slide="${i}" aria-label="Show ${AUTH_PEOPLE[i].name.split(',')[0]}" aria-current="${i === on}"></button>`
        : '<span class="au-dot" aria-hidden="true"></span>').join('')}</div>
    </aside>`;
  }
  function authMainHTML(kind) {
    const A = AUTH[kind], up = kind === 'signup', verb = up ? 'Sign up' : 'Log in';
    const btn = (cls, ic, label) => `<button class="au-btn ${cls}" type="button" data-wire="${kind}"><span class="au-ic">${AU_IC[ic]}</span><span>${verb} with ${label}</span></button>`;
    const body = up
      ? `<div class="au-consent"><input type="checkbox" id="au-consent" aria-describedby="au-consent-err"><label for="au-consent">I have read and agree to Kickresume’s <a class="au-link" href="#" data-action="toast" data-msg="The Terms of use aren’t part of this prototype.">Terms of use</a>,&nbsp; <a class="au-link" href="#" data-action="toast" data-msg="The Privacy Policy isn’t part of this prototype.">Privacy Policy</a>&nbsp; and&nbsp; <a class="au-link" href="#" data-action="toast" data-msg="The Cookie Policy isn’t part of this prototype.">Cookie Policy</a></label><span class="sr-only" id="au-consent-err" aria-live="polite"></span></div>
        ${btn('au-li', 'linkedin', 'LinkedIn')}<p class="au-or">or</p><button class="au-btn au-em" type="button" data-wire="signup">${AU_IC.mail}<span>Sign up with email</span></button>
        ${btn('au-ap', 'apple', 'Apple')}${btn('au-go', 'google', 'Google')}${btn('au-fb', 'facebook', 'Facebook')}`
      : `${btn('au-li', 'linkedin', 'LinkedIn')}${btn('au-ap', 'apple', 'Apple')}${btn('au-go', 'google', 'Google')}${btn('au-fb', 'facebook', 'Facebook')}<p class="au-or">or</p>
        <form class="au-login" novalidate><label class="sr-only" for="au-email">E-mail</label><input class="au-input" id="au-email" type="email" placeholder="E-mail" autocomplete="email">
        <label class="sr-only" for="au-pass">Password</label><input class="au-input" id="au-pass" type="password" placeholder="Password" autocomplete="current-password">
        <button class="au-submit" type="submit" data-wire="login">Log In</button></form>
        <button class="au-forgot" type="button" data-action="toast" data-msg="Password reset isn’t part of this prototype.">Forgot Password?</button>`;
    return `<div class="au-main">
      <header class="au-top"><button class="au-logo" type="button" data-action="restart" aria-label="Kickresume, back to start">${document.querySelector('#topbar .logo').innerHTML}</button>
        <p class="au-switch"><span class="au-q">${A.q}</span><button class="au-other" type="button" data-auth="${A.other}">${A.otherLabel}</button></p></header>
      <section class="au-form is-${kind}" aria-labelledby="au-h"><h1 id="au-h">${A.h}</h1>${body}</section>
    </div>`;
  }
  /* The photo column: the new person fades in over the old one */
  function showSlide(i) {
    const slides = [...authEl.querySelectorAll('.au-slide')], to = slides.at(i);
    if (!to || to.classList.contains('is-on')) return;
    slides.forEach(s => { s.classList.toggle('is-under', s.classList.contains('is-on')); s.classList.remove('is-on'); s.setAttribute('aria-hidden', 'true'); });
    to.classList.remove('is-under'); to.classList.add('is-on'); to.removeAttribute('aria-hidden');
    authEl.querySelectorAll('button.au-dot').forEach(d => { const on = +d.dataset.slide === i; d.classList.toggle('is-on', on); d.setAttribute('aria-current', String(on)); });
    later(() => slides.forEach(s => s.classList.remove('is-under')), reduce ? 0 : DUR.slow);
  }
  /* Parts arrive like the dashboard's: rising 16px and fading in, one after another */
  function enterAuth(withSide) {
    const items = [...authEl.querySelectorAll(`${withSide ? '.au-side, ' : ''}.au-top, .au-form > *`)].filter(shown);
    const anims = items.map((el, i) => play(el, reduce || el.classList.contains('au-side') ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }],
      { duration: DUR.base + 60, delay: i * (STAGGER + 15), easing: EASE.standard }));
    Promise.all(anims.map(a => a.finished.catch(() => {}))).then(() => anims.forEach(a => a.cancel()));
  }
  async function openAuth(kind, note = '') {
    if (screenRun) screenRun.finish();
    clearTimers(); setMore(false);
    const A = AUTH[kind];
    authNote = note;
    if (current === 'auth') {
      if (authKind === kind) return syncNote();
      // Sign up ⇄ Log in: the form fades over in place and the photo cross-fades to this page's person
      authKind = kind;
      const main = authEl.querySelector('.au-main');
      if (!reduce) await main.animate([{ opacity: 1 }, { opacity: 0 }], { duration: DUR.fast, easing: EASE.exit, fill: 'forwards' }).finished.catch(() => {});
      main.outerHTML = authMainHTML(kind);
      showSlide(A.slide);
      routeNow = ROUTES.find(r => r.path === A.path) || null; markRoutes(); setHash(A.path); flowSync(); syncNote();
      enterAuth(false);
      return;
    }
    const fromEl = APPS[current] || screens[current];
    if (fromEl && !reduce) await fromEl.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: APPS[current] ? 'none' : 'translateY(-8px)' }], { duration: DUR.fast, easing: EASE.exit, fill: 'forwards' }).finished.catch(() => {});
    if (fromEl) fromEl.getAnimations().forEach(a => a.cancel());
    Object.values(APPS).forEach(el => { if (el !== authEl) { el.hidden = true; el.innerHTML = ''; } });
    topbarEl.hidden = true; pageEl.hidden = true;
    Object.values(screens).forEach(sc => { sc.hidden = true; });
    authKind = kind;
    authEl.innerHTML = authSideHTML(A.slide) + authMainHTML(kind); authEl.hidden = false;
    setCurrent('auth');
    window.scrollTo(0, 0); device.scrollTop = 0;
    routeNow = ROUTES.find(r => r.path === A.path) || null; markRoutes(); setHash(A.path); flowSync();
    enterAuth(true);
  }
  authEl.addEventListener('click', e => {
    if (e.target.closest('a.au-link')) e.preventDefault();  // a toast, not a jump to #
    const sw = e.target.closest('[data-auth]');
    if (sw) { const step = flowNow && flowNow.steps.at(flowAt), to = sw.dataset.auth; return openAuth(to, step && step.match === 'route:' + AUTH[to].path ? step.note || '' : ''); }
    const dot = e.target.closest('button.au-dot');
    if (dot) return showSlide(+dot.dataset.slide);
    // the product asks for consent before any sign-up: without it the box turns coral and takes focus
    const box = authEl.querySelector('#au-consent');
    if (box && !box.checked && e.target.closest('[data-wire="signup"]')) {
      e.stopPropagation();
      box.closest('.au-consent').classList.add('is-error');
      authEl.querySelector('#au-consent-err').textContent = 'Agree to the Terms of use, Privacy Policy and Cookie Policy to sign up.';
      box.focus();
    }
  });
  authEl.addEventListener('change', e => {
    if (e.target.id !== 'au-consent') return;
    e.target.closest('.au-consent').classList.remove('is-error');
    authEl.querySelector('#au-consent-err').textContent = '';
  });
  authEl.addEventListener('submit', e => { e.preventDefault(); });

  /* ---------- Upgrade: Premium plans and student verification (/upgrade/…) ----------
     Recreated from Figma. Purple pages of their own, so like Sign up they replace the logo bar and the page
     (APPS.upgrade). /upgrade/<plan>/ opens the plans with that one picked, and picking another changes the URL;
     "for free today" leads to /upgrade/student/. Upgrade Now carries data-wire, so a running flow moves on. */
  const UPG_PLANS = [
    { id: 'yearly', name: 'Yearly', price: '€7 /month', pay: 'Pay €84 every 12 months' },
    { id: 'quarterly', name: 'Quarterly', price: '€12 /month', pay: 'Pay €36 every 3 months', popular: true },
    { id: 'monthly', name: 'Monthly', price: '€19 /month', pay: 'Pay every month' }
  ];
  const UPG_PERKS = ['Stand out with 40+ templates', 'Generate tailored documents with AI', 'Beat ATS bots with our tools', 'Plan careers, prepare for interviews &amp; more'];
  const UPG_IMG = {
    logo: '__ASSET:upgrade/premium-logo.svg__', check: '__ASSET:upgrade/check.svg__', grad: '__ASSET:upgrade/grad.svg__',
    michelle: '__ASSET:upgrade/michelle.webp__', peter: '__ASSET:upgrade/peter.webp__', david: '__ASSET:upgrade/david.webp__',
    google: '__ASSET:upgrade/google.svg__', dell: '__ASSET:upgrade/dell.svg__', trustpilot: '__ASSET:upgrade/trustpilot.svg__',
    google2015: '__ASSET:upgrade/google-2015.svg__', appstore: '__ASSET:upgrade/appstore.svg__', stars: '__ASSET:upgrade/stars.svg__',
    isic: '__ASSET:upgrade/isic.webp__'
  };
  /* The design's own icons (Feather-style paths from the Figma file) */
  const UPG_IC = {
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.71 5.29a1 1 0 0 1 0 1.42l-12 12a1 1 0 0 1-1.42-1.42l12-12a1 1 0 0 1 1.42 0Z"/><path fill="currentColor" d="M5.29 5.29a1 1 0 0 1 1.42 0l12 12a1 1 0 0 1-1.42 1.42l-12-12a1 1 0 0 1 0-1.42Z"/></svg>',
    chev: '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M6.88 4.38a.88.88 0 0 1 1.24 0l5 5a.88.88 0 0 1 0 1.24l-5 5a.88.88 0 0 1-1.24-1.24L11.26 10 6.88 5.62a.88.88 0 0 1 0-1.24Z"/></svg>',
    chevDown: '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M3.51 5.5a.7.7 0 0 1 .99 0L8 9.01l3.51-3.51a.7.7 0 0 1 .99.99l-4 4a.7.7 0 0 1-.99 0l-4-4a.7.7 0 0 1 0-.99Z"/></svg>',
    tick: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M13.33 4 6 11.33 2.67 8"/></svg>',
    help: '<svg viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M10 2.47a7.53 7.53 0 1 0 0 15.06 7.53 7.53 0 0 0 0-15.06ZM.87 10a9.13 9.13 0 1 1 18.26 0A9.13 9.13 0 0 1 .87 10Z"/><path fill="currentColor" d="M10.22 6.65a1.65 1.65 0 0 0-1.89 1.12.8.8 0 1 1-1.51-.54 3.23 3.23 0 0 1 6.41 1.1c0 1.26-.93 2.1-1.6 2.54a6.6 6.6 0 0 1-1.44.72h-.01a.8.8 0 0 1-.5-1.52l.07-.03c.06-.02.14-.05.25-.1.21-.09.48-.23.74-.4.58-.38.89-.8.89-1.21a1.63 1.63 0 0 0-1.41-1.68ZM9.2 14.17c0-.45.36-.8.8-.8h.01a.8.8 0 0 1 0 1.6H10a.8.8 0 0 1-.8-.8Z"/></svg>'
  };
  /* Student verification: a few countries and their universities, enough to try the two linked dropdowns */
  const STU_UNIS = {
    'Czechia': ['Charles University', 'Czech Technical University in Prague', 'Masaryk University'],
    'Germany': ['Heidelberg University', 'Humboldt University of Berlin', 'LMU Munich'],
    'Slovakia': ['Comenius University Bratislava', 'Slovak University of Technology', 'Technical University of Košice'],
    'United Kingdom': ['University of Edinburgh', 'University of Manchester', 'University of Oxford'],
    'United States': ['Stanford University', 'University of Michigan', 'University of Texas at Austin']
  };
  const upgEl = document.getElementById('screen-upgrade');
  APPS.upgrade = upgEl;
  // upgPlan: the picked billing period; upgStudent: the student page is showing; upgBack: where × leads
  let upgPlan = 'quarterly', upgStudent = false, upgBack = 'intent', upgBackRoute = null, stuFromPlans = false;
  const upgPath = () => upgStudent ? '/upgrade/student/' : `/upgrade/${upgPlan}/`;
  function upgPlanHTML(p) {
    return `<button class="upg-plan" type="button" role="radio" aria-checked="${p.id === upgPlan}" tabindex="${p.id === upgPlan ? 0 : -1}" data-plan="${p.id}">
      ${p.popular ? '<span class="upg-pop">Popular</span>' : ''}<span class="upg-radio" aria-hidden="true"></span>
      <span class="upg-plan-t"><span><span>${p.name}</span><b>${p.price}</b></span><span>${p.pay}</span></span></button>`;
  }
  function upgPlansHTML() {
    const hire = (img, who, job, logo, alt, w) => `<div class="upg-hire"><img src="${img}" alt=""><div><p><b>${who}</b> got hired as ${job} at</p><img src="${logo}" width="${w}" height="16" alt="${alt}"></div></div>`;
    const store = (logo, w, h, alt, score) => `<div class="upg-store"><span><img src="${logo}" width="${w}" height="${h}" alt="${alt}"><i>174 reviews</i></span><span><img src="${UPG_IMG.stars}" width="81" height="13" alt=""><b>${score} / 5</b></span></div>`;
    return `<section class="upg-modal" aria-labelledby="upg-h"><button class="upg-x" type="button" data-upg="close" aria-label="Close">${UPG_IC.x}</button>
      <div class="upg-pitch"><img class="upg-logo" src="${UPG_IMG.logo}" alt="Kickresume Premium">
        <div><h1 id="upg-h">Premium = more jobs. Period.</h1><ul class="upg-perks">${UPG_PERKS.map(t => `<li><img src="${UPG_IMG.check}" alt="">${t}</li>`).join('')}</ul></div>
        <div class="upg-proof">${hire(UPG_IMG.michelle, 'Michelle D’Aquino', 'Google Account Executive', UPG_IMG.google, 'Google', 46.67)}${hire(UPG_IMG.peter, 'Peter Trenkner', 'Product Line Manager', UPG_IMG.dell, 'Dell', 40)}</div></div>
      <div class="upg-plans"><div><h2>Select billing period</h2><p>Pick the perfect plan that works for you.</p></div>
        <div class="upg-pick" role="radiogroup" aria-label="Billing period">${UPG_PLANS.map(upgPlanHTML).join('')}</div>
        <div><p class="upg-safe">${UPG_IC.tick}14-day money-back guarantee</p><button class="upg-go" type="button" data-wire="upgrade">Upgrade Now${UPG_IC.chev}</button></div></div>
    </section>
    <section class="upg-cred" aria-label="What people say about Kickresume">
      <div class="upg-cred-l"><div><p class="upg-quote">“Not only does Kickresume provide templates, it also makes you think vigorously about yourself as a candidate, thus getting the best out of you. I would highly recommend Kickresume to every enthusiastic jobseeker — give it a try and you’ll fall in love with it.”</p>
          <div class="upg-who"><img src="${UPG_IMG.david}" alt=""><span><b>David Mantic</b>Hired as Product Manager at Telekom</span></div></div>
        <p class="upg-stu"><img src="${UPG_IMG.grad}" alt=""><b>Are you a student or a teacher?</b><span>Get Kickresume Premium <button class="upg-free" type="button" data-upg="student">for free today</button>.</span></p></div>
      <div class="upg-cred-r"><img src="${UPG_IMG.trustpilot}" alt="Trustpilot: TrustScore 4.5, 1,382 reviews">
        <div class="upg-stores">${store(UPG_IMG.google2015, 60, 20, 'Google', '4.7')}${store(UPG_IMG.appstore, 80, 19, 'App Store', '4.6')}</div></div>
    </section>`;
  }
  function stuHTML() {
    const help = tip => `<button class="stu-help" type="button" aria-label="${tip}" data-tip="${tip}">${UPG_IC.help}</button>`;
    const field = (id, label, ctl, tip) => `<div class="stu-field"><div class="stu-label"><label for="${id}">${label}</label>${tip ? help(tip) : ''}</div>${ctl}</div>`;
    const sel = (id, ph, off) => `<div class="stu-sel-wrap"><button class="stu-sel" id="${id}" type="button" aria-haspopup="listbox" aria-expanded="false"${off ? ' disabled' : ''}><span class="val" data-ph="${ph}"></span>${UPG_IC.chevDown}</button><ul class="aim-menu" role="listbox" aria-label="${ph}" hidden></ul></div>`;
    return `<section class="stu" aria-labelledby="stu-h"><button class="upg-x" type="button" data-upg="back" aria-label="Close">${UPG_IC.x}</button>
      <div><h1 id="stu-h">Verify your student status</h1>
        <div class="stu-tabs" role="tablist" aria-label="How to verify">${['ISIC/ITIC', 'UniDays', 'Other'].map((t, i) => `<button class="stu-tab" type="button" role="tab" aria-selected="${!i}"${i ? ` data-upg="tab" data-tab="${t}"` : ''}><span>${t}</span></button>`).join('')}</div>
        <p class="stu-lead">Enter your details and get six months of Premium for free.</p></div>
      <form class="stu-form" novalidate>
        <div class="stu-row"><div class="stu-fields">
          ${field('stu-name', 'Full name', '<input class="stu-input" id="stu-name" autocomplete="name">', 'As printed on your card')}
          ${field('stu-country', 'Country / region', sel('stu-country', 'Select Country'))}
          ${field('stu-uni', 'Institution', sel('stu-uni', 'Select University', true))}
          ${field('stu-num', 'ISIC/ITIC card number', '<input class="stu-input" id="stu-num" autocomplete="off">', 'The number printed on your card')}
        </div><img class="stu-card" src="${UPG_IMG.isic}" alt="An ISIC card: the name, institution and card number are printed on the front"></div>
        <div class="stu-acts"><button class="stu-go" type="submit">Continue</button></div>
      </form></section>`;
  }
  /* A dropdown like the language one, opening downwards; btn.value holds the pick so needFilled can check it */
  function stuSelect(btn, onPick) {
    const wrap = btn.parentElement, menu = wrap.querySelector('.aim-menu');
    const set = open => { menu.hidden = !open; btn.setAttribute('aria-expanded', String(open)); if (open) (menu.querySelector('[aria-selected="true"]') || menu.querySelector('.aim-opt')).focus(); };
    btn._fill = list => { btn.value = ''; btn.querySelector('.val').textContent = ''; menu.innerHTML = list.map(o => `<li role="presentation"><button class="aim-opt" type="button" role="option" aria-selected="false" data-val="${esc(o)}">${esc(o)}${aimIcon.check}</button></li>`).join(''); };
    btn.addEventListener('click', () => set(menu.hidden));
    menu.addEventListener('click', e => {
      const o = e.target.closest('.aim-opt'); if (!o) return;
      menu.querySelectorAll('.aim-opt').forEach(x => x.setAttribute('aria-selected', String(x === o)));
      btn.value = o.dataset.val; btn.querySelector('.val').textContent = o.dataset.val; btn.classList.remove('is-error');
      set(false); btn.focus();
      if (onPick) onPick(o.dataset.val);
    });
    wrap.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !menu.hidden) { e.stopPropagation(); set(false); btn.focus(); }
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && e.target.closest('.aim-menu')) {
        e.preventDefault();
        const opts = [...menu.querySelectorAll('.aim-opt')], i = opts.indexOf(e.target.closest('.aim-opt'));
        opts.at((i + (e.key === 'ArrowDown' ? 1 : -1)) % opts.length).focus();
      }
    });
    closeOnLeave(wrap, () => !menu.hidden, () => set(false));
  }
  function initStu(root) {
    const form = root.querySelector('.stu-form'), country = root.querySelector('#stu-country'), uni = root.querySelector('#stu-uni');
    // the institution list waits for a country, then offers that country's universities
    stuSelect(uni);
    stuSelect(country, c => { uni._fill(STU_UNIS[c]); uni.disabled = false; });
    country._fill(Object.keys(STU_UNIS));
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!needFilled([root.querySelector('#stu-name'), country, uni, root.querySelector('#stu-num')].filter(el => !el.disabled))) return;
      busy(form.querySelector('.stu-go'), 'Verifying…', 1400, () => { if (!(flowNow && flowNext())) toast('Card verified. Six months of Premium would start here; that isn’t part of the prototype.'); });
    });
  }
  function fillUpg() {
    upgEl.classList.toggle('is-student', upgStudent);
    upgEl.innerHTML = upgStudent ? stuHTML() : upgPlansHTML();
    if (upgStudent) initStu(upgEl.querySelector('.stu'));
  }
  const syncUpg = () => { routeNow = findRoute(upgPath()); markRoutes(); setHash(upgPath()); flowSync(); syncNote(); };
  /* The card and the reviews panel rise in one after the other, like the dashboard's parts */
  function enterUpg() {
    const items = [...upgEl.querySelectorAll('.upg-modal, .upg-cred, .stu')].filter(shown);
    const anims = items.map((el, i) => play(el, reduce ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'none' }],
      { duration: DUR.base + 60, delay: i * 90, easing: EASE.standard }));
    Promise.all(anims.map(a => a.finished.catch(() => {}))).then(() => anims.forEach(a => a.cancel()));
  }
  async function openUpgrade(which) {
    if (screenRun) screenRun.finish();
    clearTimers(); setMore(false);
    const student = which === 'student';
    if (!student) upgPlan = which;
    if (current === 'upgrade') {
      if (student === upgStudent) {
        if (!student) upgEl.querySelectorAll('.upg-plan').forEach(b => b.setAttribute('aria-checked', String(b.dataset.plan === upgPlan)));
        return syncUpg();
      }
      // plans ⇄ student: the purple stays, the content fades over in place
      stuFromPlans = student; upgStudent = student;
      if (!reduce) await Promise.all([...upgEl.children].map(el => el.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-8px)' }], { duration: DUR.fast, easing: EASE.exit, fill: 'forwards' }).finished.catch(() => {})));
      fillUpg(); window.scrollTo(0, 0); device.scrollTop = 0; syncUpg(); enterUpg();
      return;
    }
    upgBack = current; upgBackRoute = current === 'route' ? routeNow : null;
    upgStudent = student; stuFromPlans = false;
    const fromEl = APPS[current] || screens[current];
    if (fromEl && !reduce) await fromEl.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: APPS[current] ? 'none' : 'translateY(-8px)' }], { duration: DUR.fast, easing: EASE.exit, fill: 'forwards' }).finished.catch(() => {});
    if (fromEl) fromEl.getAnimations().forEach(a => a.cancel());
    Object.values(APPS).forEach(el => { if (el !== upgEl) { el.hidden = true; el.innerHTML = ''; } });
    topbarEl.hidden = true; pageEl.hidden = true;
    Object.values(screens).forEach(sc => { sc.hidden = true; });
    fillUpg(); upgEl.hidden = false;
    setCurrent('upgrade');
    window.scrollTo(0, 0); device.scrollTop = 0;
    syncUpg(); enterUpg();
  }
  /* × on the plans: back where the person came from; on the student page: back to the plans if they came from there */
  function closeUpgrade() { goBack(upgBack, upgBackRoute, true); }
  upgEl.addEventListener('click', e => {
    const p = e.target.closest('.upg-plan');
    if (p) return p.getAttribute('aria-checked') === 'true' || openUpgrade(p.dataset.plan);
    const b = e.target.closest('[data-upg]');
    if (!b) return;
    const act = b.dataset.upg;
    if (act === 'close') closeUpgrade();
    else if (act === 'student') openUpgrade('student');
    else if (act === 'back') stuFromPlans ? openUpgrade(upgPlan) : closeUpgrade();
    else if (act === 'tab') toast(b.dataset.tab === 'UniDays' ? 'Verifying with UniDays isn’t part of this prototype yet.' : 'Other ways to verify aren’t part of this prototype yet.');
  });
  // the plans are a radio group: arrow keys pick the next or previous one
  upgEl.addEventListener('keydown', e => {
    const p = e.target.closest('.upg-plan');
    if (!p || !['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    e.preventDefault();
    const all = [...upgEl.querySelectorAll('.upg-plan')], to = all.at((all.indexOf(p) + (/Down|Right/.test(e.key) ? 1 : -1)) % all.length);
    to.focus(); openUpgrade(to.dataset.plan);
  });

  /* ---------- My Documents and the resume tools (/dashboard/resumes/, /latest-resume/…) ----------
     Recreated from Figma. Pages of their own (their own top bar and menu), so like the dashboard they replace the
     logo bar and the page: APPS.docs is My Documents, APPS.tool the resume tools (ATS checker, Proofreading,
     Career Coach). /latest-resume/… opens the editor or a tool on the latest resume when there is a CV, and
     My Documents when there isn't. The design for recruiter feedback is the Career Coach page. */
  const TL_IMG = {
    premiumWord: '__ASSET:tools/premium-word.svg__', resume: '__ASSET:tools/resume.webp__',
    hlManager: '__ASSET:tools/hl-manager.svg__', hlAssistant: '__ASSET:tools/hl-assistant.svg__', gauss: '__ASSET:tools/gauss.svg__',
    joe: '__ASSET:tools/joe.webp__', patricia: '__ASSET:tools/patricia.webp__', flagUs: '__ASSET:tools/flag-us.webp__', flagEs: '__ASSET:tools/flag-es.webp__',
    thumb: '__ASSET:docs/resume-thumb.webp__'
  };
  /* The designs' own icons (paths from the Figma file; one colour ones take currentColor) */
  const TL_IC = {
    arrowR16: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.66 8.00C2.66 7.63 2.96 7.33 3.33 7.33H12.66C13.03 7.33 13.33 7.63 13.33 8.00C13.33 8.36 13.03 8.66 12.66 8.66H3.33C2.96 8.66 2.66 8.36 2.66 8.00Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.52 2.86C7.78 2.6 8.21 2.6 8.47 2.86L13.13 7.52C13.39 7.78 13.39 8.21 13.13 8.47L8.47 13.13C8.21 13.39 7.78 13.39 7.52 13.13C7.26 12.87 7.26 12.45 7.52 12.19L11.72 7.99L7.52 3.80C7.26 3.54 7.26 3.12 7.52 2.86Z" fill="currentColor"/></svg>',
    ok: '<svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.86 10.00C0.86 4.95 4.95 0.86 10 0.86C15.04 0.86 19.13 4.95 19.13 10.00C19.13 15.04 15.04 19.13 10 19.13C4.95 19.13 0.86 15.04 0.86 10.00Z" fill="#48AD43"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7 7.29C15.09 7.68 15.09 8.31 14.7 8.70L9.33 14.08C9.14 14.27 8.88 14.37 8.62 14.37C8.35 14.37 8.1 14.27 7.91 14.08L5.29 11.46C4.9 11.07 4.9 10.43 5.29 10.04C5.68 9.65 6.31 9.65 6.7 10.04L8.62 11.96L13.29 7.29C13.68 6.9 14.31 6.9 14.7 7.29Z" fill="white"/></svg>',
    err: '<svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.86 10.00C0.86 4.95 4.95 0.86 10 0.86C15.04 0.86 19.13 4.95 19.13 10.00C19.13 15.04 15.04 19.13 10 19.13C4.95 19.13 0.86 15.04 0.86 10.00Z" fill="#F74C4A"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.66C10.55 5.66 11 6.11 11 6.66V9.99C11 10.55 10.55 10.99 10 10.99C9.44 10.99 9 10.55 9 9.99V6.66C9 6.11 9.44 5.66 10 5.66Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9 13.33C9 12.78 9.44 12.33 9.99 12.33H10.00C10.55 12.33 11 12.78 11 13.33C11 13.88 10.55 14.33 10 14.33H9.99C9.44 14.33 9 13.88 9 13.33Z" fill="white"/></svg>',
    chevUp: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 5.50C7.77 5.23 8.22 5.23 8.49 5.50L12.49 9.50C12.76 9.77 12.76 10.22 12.49 10.49C12.22 10.76 11.77 10.76 11.5 10.49L7.99 6.98L4.49 10.49C4.22 10.76 3.77 10.76 3.5 10.49C3.23 10.22 3.23 9.77 3.5 9.50L7.5 5.50Z" fill="currentColor"/></svg>',
    chevDown: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 5.50C3.77 5.23 4.22 5.23 4.49 5.50L7.99 9.00L11.5 5.50C11.77 5.23 12.22 5.23 12.49 5.50C12.76 5.77 12.76 6.22 12.49 6.49L8.49 10.49C8.22 10.76 7.77 10.76 7.5 10.49L3.5 6.49C3.23 6.22 3.23 5.77 3.5 5.50Z" fill="currentColor"/></svg>',
    chevRight: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 3.50C5.77 3.23 6.22 3.23 6.49 3.50L10.49 7.50C10.76 7.77 10.76 8.22 10.49 8.49L6.49 12.49C6.22 12.76 5.77 12.76 5.5 12.49C5.23 12.22 5.23 11.77 5.5 11.50L9.0 7.99L5.5 4.49C5.23 4.22 5.23 3.77 5.5 3.50Z" fill="currentColor"/></svg>',
    cbOff: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill="white"/><rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke="#FF5E59"/></svg>',
    cbOn: '<svg aria-hidden="true" viewBox="0 0 17 17" fill="none"><rect x="0.5" y="0.5" width="16" height="16" rx="4" fill="white"/><rect x="0.5" y="0.5" width="16" height="16" rx="4" stroke="#48AD43"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 12.50C7.23 12.5 6.98 12.39 6.79 12.20L4.79 10.20C4.4 9.81 4.4 9.18 4.79 8.79C5.18 8.4 5.81 8.4 6.2 8.79L7.34 9.93L10.66 4.94C10.97 4.48 11.59 4.36 12.05 4.66C12.51 4.97 12.63 5.59 12.33 6.05L8.33 12.05C8.16 12.3 7.89 12.46 7.59 12.49C7.56 12.49 7.53 12.5 7.5 12.50Z" fill="#48AD43"/></svg>',
    arrowL24: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 11.44 4.44 11 5 11H19C19.55 11 20 11.44 20 12C20 12.55 19.55 13 19 13H5C4.44 13 4 12.55 4 12Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.7 4.29C13.09 4.68 13.09 5.31 12.7 5.70L6.41 12L12.7 18.29C13.09 18.68 13.09 19.31 12.7 19.70C12.31 20.09 11.68 20.09 11.29 19.70L4.29 12.70C3.9 12.31 3.9 11.68 4.29 11.29L11.29 4.29C11.68 3.9 12.31 3.9 12.7 4.29Z" fill="currentColor"/></svg>',
    arrowR24: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 11.44 4.44 11 5 11H19C19.55 11 20 11.44 20 12C20 12.55 19.55 13 19 13H5C4.44 13 4 12.55 4 12Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.29 4.29C11.68 3.9 12.31 3.9 12.7 4.29L19.7 11.29C20.09 11.68 20.09 12.31 19.7 12.70L12.7 19.70C12.31 20.09 11.68 20.09 11.29 19.70C10.9 19.31 10.9 18.68 11.29 18.29L17.58 12L11.29 5.70C10.9 5.31 10.9 4.68 11.29 4.29Z" fill="currentColor"/></svg>',
    checkCircle: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.26 2.23C4.93 2.23 2.23 4.93 2.23 8.26C2.23 11.59 4.93 14.29 8.26 14.29C11.59 14.29 14.29 11.59 14.29 8.26C14.29 4.93 11.59 2.23 8.26 2.23ZM0.95 8.26C0.95 4.23 4.23 0.95 8.26 0.95C12.3 0.95 15.57 4.23 15.57 8.26C15.57 12.3 12.3 15.57 8.26 15.57C4.23 15.57 0.95 12.3 0.95 8.26Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.65 5.94C11.9 6.19 11.9 6.6 11.65 6.85L7.35 11.15C7.23 11.27 7.06 11.34 6.89 11.34C6.72 11.34 6.56 11.27 6.44 11.15L4.34 9.05C4.09 8.8 4.09 8.4 4.34 8.15C4.59 7.9 5 7.9 5.25 8.15L6.89 9.79L10.74 5.94C10.99 5.69 11.4 5.69 11.65 5.94Z" fill="currentColor"/></svg>',
    eye: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.46 8.00C1.53 8.12 1.63 8.27 1.74 8.45C2.05 8.92 2.5 9.55 3.09 10.18C4.28 11.45 5.94 12.63 7.99 12.63C10.05 12.63 11.71 11.45 12.9 10.18C13.49 9.55 13.94 8.92 14.25 8.45C14.36 8.27 14.46 8.12 14.53 8.00C14.46 7.87 14.36 7.72 14.25 7.54C13.94 7.07 13.49 6.44 12.9 5.81C11.71 4.54 10.05 3.36 7.99 3.36C5.94 3.36 4.28 4.54 3.09 5.81C2.5 6.44 2.05 7.07 1.74 7.54C1.63 7.72 1.53 7.87 1.46 8.00ZM15.33 8.00C15.95 7.68 15.95 7.68 15.95 7.68L15.95 7.68L15.95 7.67L15.94 7.66C15.94 7.65 15.93 7.63 15.92 7.61C15.89 7.56 15.86 7.5 15.81 7.42C15.73 7.27 15.6 7.05 15.43 6.78C15.09 6.26 14.58 5.55 13.92 4.85C12.61 3.45 10.61 1.96 7.99 1.96C5.38 1.96 3.38 3.45 2.07 4.85C1.41 5.55 0.9 6.26 0.56 6.78C0.39 7.05 0.26 7.27 0.18 7.42C0.13 7.5 0.1 7.56 0.07 7.61C0.06 7.63 0.05 7.65 0.05 7.66L0.04 7.67L0.04 7.68L0.04 7.68C0.04 7.68 0.04 7.68 0.66 8.00L0.04 7.68C-0.05 7.88 -0.05 8.11 0.04 8.31L0.66 8.00C0.04 8.31 0.04 8.31 0.04 8.31L0.04 8.31L0.04 8.32L0.05 8.33C0.05 8.34 0.06 8.36 0.07 8.38C0.1 8.43 0.13 8.49 0.18 8.57C0.26 8.72 0.39 8.94 0.56 9.21C0.9 9.73 1.41 10.44 2.07 11.14C3.38 12.54 5.38 14.03 7.99 14.03C10.61 14.03 12.61 12.54 13.92 11.14C14.58 10.44 15.09 9.73 15.43 9.21C15.6 8.94 15.73 8.72 15.81 8.57C15.86 8.49 15.89 8.43 15.92 8.38C15.93 8.36 15.94 8.34 15.94 8.33L15.95 8.32L15.95 8.31L15.95 8.31C15.95 8.31 15.95 8.31 15.33 8.00ZM15.33 8.00L15.95 8.31C16.05 8.11 16.05 7.88 15.95 7.68L15.33 8.00Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.0 6.69C7.28 6.69 6.7 7.28 6.7 7.99C6.7 8.71 7.28 9.29 8 9.29C8.71 9.29 9.3 8.71 9.3 7.99C9.3 7.28 8.71 6.69 8 6.69ZM5.3 7.99C5.3 6.5 6.5 5.29 8 5.29C9.49 5.29 10.7 6.5 10.7 7.99C10.7 9.49 9.49 10.7 8 10.7C6.5 10.7 5.3 9.49 5.3 7.99Z" fill="currentColor"/></svg>',
    book: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.63 1.99C0.63 1.61 0.94 1.29 1.33 1.29H5.33C6.22 1.29 7.08 1.65 7.71 2.28C8.34 2.91 8.69 3.77 8.69 4.66V14C8.69 14.38 8.38 14.7 7.99 14.7C7.61 14.7 7.29 14.38 7.29 14C7.29 13.65 7.16 13.32 6.91 13.08C6.67 12.83 6.34 12.7 5.99 12.7H1.33C0.94 12.7 0.63 12.38 0.63 12V1.99ZM7.29 11.63V4.66C7.29 4.14 7.09 3.64 6.72 3.27C6.35 2.9 5.85 2.69 5.33 2.69H2.03V11.3H5.99C6.45 11.3 6.9 11.41 7.29 11.63Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.28 2.28C8.91 1.65 9.77 1.29 10.66 1.29H14.66C15.05 1.29 15.36 1.61 15.36 1.99V12C15.36 12.38 15.05 12.7 14.66 12.7H10C9.65 12.7 9.32 12.83 9.08 13.08C8.83 13.32 8.7 13.65 8.7 14C8.7 14.38 8.38 14.7 8 14.7C7.61 14.7 7.3 14.38 7.3 14V4.66C7.3 3.77 7.65 2.91 8.28 2.28ZM8.7 11.63C9.09 11.41 9.54 11.3 10 11.3H13.96V2.69H10.66C10.14 2.69 9.64 2.9 9.27 3.27C8.9 3.64 8.7 4.14 8.7 4.66V11.63Z" fill="currentColor"/></svg>',
    target: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99 2.03C4.7 2.03 2.03 4.7 2.03 8.00C2.03 11.29 4.7 13.96 7.99 13.96C11.29 13.96 13.96 11.29 13.96 8.00C13.96 4.7 11.29 2.03 7.99 2.03ZM0.63 8.00C0.63 3.93 3.93 0.63 7.99 0.63C12.06 0.63 15.36 3.93 15.36 8.00C15.36 12.06 12.06 15.36 7.99 15.36C3.93 15.36 0.63 12.06 0.63 8.00Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.0 4.69C6.17 4.69 4.7 6.17 4.7 7.99C4.7 9.82 6.17 11.3 8 11.3C9.82 11.3 11.3 9.82 11.3 7.99C11.3 6.17 9.82 4.69 8 4.69ZM3.3 7.99C3.3 5.4 5.4 3.29 8 3.29C10.59 3.29 12.7 5.4 12.7 7.99C12.7 10.59 10.59 12.7 8 12.7C5.4 12.7 3.3 10.59 3.3 7.99Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.0 7.36C7.65 7.36 7.36 7.65 7.36 7.99C7.36 8.34 7.65 8.63 8 8.63C8.35 8.63 8.63 8.34 8.63 7.99C8.63 7.65 8.35 7.36 8 7.36ZM5.96 7.99C5.96 6.87 6.87 5.96 8 5.96C9.12 5.96 10.03 6.87 10.03 7.99C10.03 9.12 9.12 10.03 8 10.03C6.87 10.03 5.96 9.12 5.96 7.99Z" fill="currentColor"/></svg>',
    help: '<svg aria-hidden="true" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.99 2.03C4.7 2.03 2.03 4.7 2.03 8C2.03 11.29 4.7 13.96 7.99 13.96C11.29 13.96 13.96 11.29 13.96 8C13.96 4.7 11.29 2.03 7.99 2.03ZM0.63 8C0.63 3.93 3.93 0.63 7.99 0.63C12.06 0.63 15.36 3.93 15.36 8C15.36 12.06 12.06 15.36 7.99 15.36C3.93 15.36 0.63 12.06 0.63 8Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.16 5.38C7.86 5.33 7.55 5.38 7.28 5.54C7.02 5.69 6.82 5.94 6.72 6.23C6.59 6.59 6.19 6.78 5.82 6.66C5.46 6.53 5.27 6.13 5.39 5.76C5.61 5.16 6.02 4.65 6.57 4.33C7.12 4.01 7.77 3.89 8.4 4.00C9.03 4.11 9.6 4.43 10.01 4.92C10.42 5.41 10.64 6.02 10.64 6.66C10.64 7.7 9.87 8.38 9.33 8.74C9.04 8.94 8.75 9.08 8.54 9.18C8.43 9.22 8.34 9.26 8.28 9.28C8.24 9.3 8.22 9.31 8.2 9.31L8.18 9.32L8.17 9.32L8.17 9.33L8.16 9.33L8.16 9.33C8.16 9.33 8.16 9.33 7.95 8.68L8.16 9.33C7.8 9.45 7.4 9.25 7.28 8.88C7.16 8.52 7.35 8.12 7.72 8.00L7.94 8.66C7.72 8 7.72 8 7.72 8.00L7.72 8.00L7.72 8.00L7.72 8.00C7.72 8 7.72 8 7.72 8.00L7.73 7.99C7.74 7.99 7.76 7.98 7.78 7.98C7.82 7.96 7.89 7.93 7.97 7.90C8.13 7.82 8.35 7.72 8.55 7.58C9.01 7.27 9.24 6.96 9.24 6.66L9.24 6.66C9.24 6.35 9.13 6.06 8.94 5.82C8.74 5.59 8.46 5.43 8.16 5.38ZM10.64 6.66C10.64 6.66 10.64 6.66 10.64 6.66L9.94 6.66H10.64C10.64 6.66 10.64 6.66 10.64 6.66Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.3 11.33C7.3 10.94 7.61 10.63 8 10.63H8.00C8.39 10.63 8.7 10.94 8.7 11.33C8.7 11.71 8.39 12.03 8 12.03H8.00C7.61 12.03 7.3 11.71 7.3 11.33Z" fill="currentColor"/></svg>',
    userCheck: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.49 15.49C2.42 14.56 3.68 14.04 5 14.04H12C13.31 14.04 14.57 14.56 15.5 15.49C16.43 16.42 16.96 17.68 16.96 19V21C16.96 21.53 16.53 21.96 16 21.96C15.46 21.96 15.04 21.53 15.04 21V19C15.04 18.19 14.71 17.42 14.14 16.85C13.57 16.28 12.8 15.96 12 15.96H5.00C4.19 15.96 3.42 16.28 2.85 16.85C2.28 17.42 1.96 18.19 1.96 19V21C1.96 21.53 1.53 21.96 1 21.96C0.46 21.96 0.04 21.53 0.04 21V19C0.04 17.68 0.56 16.42 1.49 15.49Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 3.96C6.82 3.96 5.46 5.32 5.46 7.00C5.46 8.67 6.82 10.04 8.5 10.04C10.17 10.04 11.54 8.67 11.54 7.00C11.54 5.32 10.17 3.96 8.5 3.96ZM3.54 7.00C3.54 4.26 5.76 2.04 8.5 2.04C11.23 2.04 13.46 4.26 13.46 7.00C13.46 9.73 11.23 11.96 8.5 11.96C5.76 11.96 3.54 9.73 3.54 7.00Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23.67 8.32C24.05 8.69 24.05 9.3 23.67 9.67L19.67 13.67C19.3 14.05 18.69 14.05 18.32 13.67L16.32 11.67C15.94 11.3 15.94 10.69 16.32 10.32C16.69 9.94 17.3 9.94 17.67 10.32L19 11.64L22.32 8.32C22.69 7.94 23.3 7.94 23.67 8.32Z" fill="currentColor"/></svg>',
    tick: '<svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.58 4.08C18.09 4.58 18.09 5.41 17.58 5.91L8.41 15.08C8.17 15.32 7.84 15.46 7.49 15.46C7.15 15.46 6.82 15.32 6.58 15.08L2.41 10.91C1.9 10.41 1.9 9.58 2.41 9.08C2.92 8.57 3.74 8.57 4.25 9.08L7.49 12.32L15.74 4.08C16.25 3.57 17.07 3.57 17.58 4.08Z" fill="currentColor"/></svg>',
    languages: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 8L11 14M4 14L10 8L12 5M2 5H14M7 2H8M22 22L17 12L12 22M14 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    info: '<svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.46C5.83 2.46 2.46 5.83 2.46 10C2.46 14.16 5.83 17.53 10 17.53C14.16 17.53 17.53 14.16 17.53 10C17.53 5.83 14.16 2.46 10 2.46ZM0.86 10C0.86 4.95 4.95 0.86 10 0.86C15.04 0.86 19.13 4.95 19.13 10C19.13 15.04 15.04 19.13 10 19.13C4.95 19.13 0.86 15.04 0.86 10Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99 9.19C10.44 9.19 10.8 9.55 10.8 9.99V13.33C10.8 13.77 10.44 14.13 9.99 14.13C9.55 14.13 9.19 13.77 9.19 13.33V9.99C9.19 9.55 9.55 9.19 9.99 9.19Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.19 6.66C9.19 6.22 9.55 5.86 9.99 5.86H10.00C10.45 5.86 10.8 6.22 10.8 6.66C10.8 7.1 10.45 7.46 10 7.46H9.99C9.55 7.46 9.19 7.1 9.19 6.66Z" fill="currentColor"/></svg>',
    starsAi: '<svg aria-hidden="true" viewBox="0 0 21 21" fill="none"><path d="M14.94 0C14.94 3.82 12.56 6.69 9.5 6.69C12.63 6.69 14.94 9.55 14.94 13.19C14.94 9.52 16.81 6.69 20.05 6.69C16.81 6.69 14.94 3.82 14.94 0Z" fill="url(#paint0_linear_22452_14392)"/><path d="M3.77 5.95C3.77 8.07 2.12 9.66 0 9.66C2.17 9.66 3.77 11.25 3.77 13.27C3.77 11.23 5.07 9.66 7.31 9.66C5.07 9.66 3.77 8.07 3.77 5.95Z" fill="url(#paint1_linear_22452_14392)"/><path d="M9.73 12.76C9.73 14.88 8.08 16.47 5.95 16.47C8.12 16.47 9.73 18.06 9.73 20.08C9.73 18.04 11.03 16.47 13.27 16.47C11.03 16.47 9.73 14.88 9.73 12.76Z" fill="url(#paint2_linear_22452_14392)"/><defs><linearGradient id="paint0_linear_22452_14392" x1="18.35" y1="6.59" x2="10.74" y2="6.59" gradientUnits="userSpaceOnUse"><stop stop-color="#A066FF"/><stop offset="1" stop-color="#666CFF"/></linearGradient><linearGradient id="paint1_linear_22452_14392" x1="6.14" y1="9.61" x2="0.86" y2="9.61" gradientUnits="userSpaceOnUse"><stop stop-color="#A066FF"/><stop offset="1" stop-color="#666CFF"/></linearGradient><linearGradient id="paint2_linear_22452_14392" x1="12.09" y1="16.42" x2="6.82" y2="16.42" gradientUnits="userSpaceOnUse"><stop stop-color="#A066FF"/><stop offset="1" stop-color="#666CFF"/></linearGradient></defs></svg>',
    filePen: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M18.226 5.22601L15.706 2.70601C15.4823 2.48153 15.2164 2.30357 14.9236 2.18239C14.6308 2.06122 14.3169 1.99923 14 2.00001H6C5.46957 2.00001 4.96086 2.21072 4.58579 2.58579C4.21071 2.96087 4 3.46957 4 4.00001V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V19.649" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.377 12.626C21.7754 12.2277 21.9991 11.6874 21.9991 11.124C21.9991 10.5607 21.7754 10.0204 21.377 9.62203C20.9786 9.22367 20.4384 8.99988 19.875 8.99988C19.3116 8.99988 18.7714 9.22367 18.373 9.62203L14.363 13.634C14.1252 13.8716 13.9512 14.1654 13.857 14.488L13.02 17.358C12.9949 17.4441 12.9934 17.5353 13.0156 17.6221C13.0379 17.7089 13.0831 17.7882 13.1464 17.8516C13.2098 17.915 13.2891 17.9601 13.3759 17.9824C13.4627 18.0046 13.554 18.0031 13.64 17.978L16.51 17.141C16.8327 17.0468 17.1264 16.8728 17.364 16.635L21.377 12.626Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 18H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    sparkles: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M11.0155 2.81401C11.0583 2.58462 11.1801 2.37743 11.3596 2.22833C11.5391 2.07924 11.7651 1.99762 11.9985 1.99762C12.2319 1.99762 12.4579 2.07924 12.6374 2.22833C12.8169 2.37743 12.9386 2.58462 12.9815 2.81401L14.0325 8.37201C14.1071 8.76716 14.2992 9.13063 14.5835 9.41498C14.8679 9.69934 15.2313 9.89137 15.6265 9.96601L21.1845 11.017C21.4139 11.0599 21.6211 11.1816 21.7702 11.3611C21.9193 11.5406 22.0009 11.7667 22.0009 12C22.0009 12.2334 21.9193 12.4594 21.7702 12.6389C21.6211 12.8184 21.4139 12.9402 21.1845 12.983L15.6265 14.034C15.2313 14.1087 14.8679 14.3007 14.5835 14.585C14.2992 14.8694 14.1071 15.2329 14.0325 15.628L12.9815 21.186C12.9386 21.4154 12.8169 21.6226 12.6374 21.7717C12.4579 21.9208 12.2319 22.0024 11.9985 22.0024C11.7651 22.0024 11.5391 21.9208 11.3596 21.7717C11.1801 21.6226 11.0583 21.4154 11.0155 21.186L9.96449 15.628C9.88984 15.2329 9.69781 14.8694 9.41346 14.585C9.12911 14.3007 8.76564 14.1087 8.37049 14.034L2.81249 12.983C2.58309 12.9402 2.3759 12.8184 2.22681 12.6389C2.07771 12.4594 1.99609 12.2334 1.99609 12C1.99609 11.7667 2.07771 11.5406 2.22681 11.3611C2.3759 11.1816 2.58309 11.0599 2.81249 11.017L8.37049 9.96601C8.76564 9.89137 9.12911 9.69934 9.41346 9.41498C9.69781 9.13063 9.88984 8.76716 9.96449 8.37201L11.0155 2.81401Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 4H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 22C5.10457 22 6 21.1046 6 20C6 18.8954 5.10457 18 4 18C2.89543 18 2 18.8954 2 20C2 21.1046 2.89543 22 4 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    linkedin: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    import: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M12 3V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 11L12 15L16 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 5H4C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    example: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.84254 1.84328C4.41453 1.27129 5.19031 0.949951 5.99922 0.949951H13.9992C14.2777 0.949951 14.5448 1.06058 14.7417 1.25749L20.7417 7.25749C20.9386 7.4544 21.0492 7.72147 21.0492 7.99995V20C21.0492 20.8089 20.7279 21.5846 20.1559 22.1566C19.5839 22.7286 18.8081 23.0499 17.9992 23.0499H5.99922C5.19031 23.0499 4.41453 22.7286 3.84254 22.1566C3.27056 21.5846 2.94922 20.8089 2.94922 20V3.99995C2.94922 3.19104 3.27056 2.41526 3.84254 1.84328ZM5.99922 3.04995C5.74726 3.04995 5.50563 3.15004 5.32747 3.3282C5.14931 3.50636 5.04922 3.748 5.04922 3.99995V20C5.04922 20.2519 5.14931 20.4935 5.32747 20.6717C5.50563 20.8499 5.74726 20.9499 5.99922 20.9499H17.9992C18.2512 20.9499 18.4928 20.8499 18.671 20.6717C18.8491 20.4935 18.9492 20.2519 18.9492 20V8.43488L13.5643 3.04995H5.99922Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.9992 0.949951C14.5791 0.949951 15.0492 1.42005 15.0492 1.99995V6.94995H19.9992C20.5791 6.94995 21.0492 7.42005 21.0492 7.99995C21.0492 8.57985 20.5791 9.04995 19.9992 9.04995H13.9992C13.4193 9.04995 12.9492 8.57985 12.9492 7.99995V1.99995C12.9492 1.42005 13.4193 0.949951 13.9992 0.949951Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.94922 13C6.94922 12.4201 7.41932 11.95 7.99922 11.95H15.9992C16.5791 11.95 17.0492 12.4201 17.0492 13C17.0492 13.5799 16.5791 14.05 15.9992 14.05H7.99922C7.41932 14.05 6.94922 13.5799 6.94922 13Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.94922 17C6.94922 16.4201 7.41932 15.95 7.99922 15.95H15.9992C16.5791 15.95 17.0492 16.4201 17.0492 17C17.0492 17.5799 16.5791 18.05 15.9992 18.05H7.99922C7.41932 18.05 6.94922 17.5799 6.94922 17Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.94922 8.99995C6.94922 8.42005 7.41932 7.94995 7.99922 7.94995H9.99922C10.5791 7.94995 11.0492 8.42005 11.0492 8.99995C11.0492 9.57985 10.5791 10.05 9.99922 10.05H7.99922C7.41932 10.05 6.94922 9.57985 6.94922 8.99995Z" fill="currentColor"/></svg>',
    more: '<svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.96719 9.99997C9.96719 10.0184 9.98211 10.0333 10.0005 10.0333C10.0189 10.0333 10.0339 10.0184 10.0339 9.99997C10.0339 9.98156 10.0189 9.96663 10.0005 9.96663C9.98211 9.96663 9.96719 9.98156 9.96719 9.99997ZM10.0005 11.6333C9.09846 11.6333 8.36719 10.902 8.36719 9.99997C8.36719 9.0979 9.09846 8.36663 10.0005 8.36663C10.9026 8.36663 11.6339 9.0979 11.6339 9.99997C11.6339 10.902 10.9026 11.6333 10.0005 11.6333Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.13516 9.99997C4.13516 10.0184 4.15008 10.0333 4.16849 10.0333C4.1869 10.0333 4.20182 10.0184 4.20182 9.99997C4.20182 9.98156 4.1869 9.96663 4.16849 9.96663C4.15008 9.96663 4.13516 9.98156 4.13516 9.99997ZM4.16849 11.6333C3.26643 11.6333 2.53516 10.902 2.53516 9.99997C2.53516 9.0979 3.26643 8.36663 4.16849 8.36663C5.07056 8.36663 5.80182 9.0979 5.80182 9.99997C5.80182 10.902 5.07056 11.6333 4.16849 11.6333Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7992 9.99997C15.7992 10.0184 15.8141 10.0333 15.8326 10.0333C15.851 10.0333 15.8659 10.0184 15.8659 9.99997C15.8659 9.98156 15.851 9.96663 15.8326 9.96663C15.8141 9.96663 15.7992 9.98156 15.7992 9.99997ZM15.8326 11.6333C14.9305 11.6333 14.1992 10.902 14.1992 9.99997C14.1992 9.0979 14.9305 8.36663 15.8326 8.36663C16.7346 8.36663 17.4659 9.0979 17.4659 9.99997C17.4659 10.902 16.7346 11.6333 15.8326 11.6333Z" fill="currentColor"/></svg>'
  };
  const docsEl = document.getElementById('screen-docs'), toolEl = document.getElementById('screen-tool');
  APPS.docs = docsEl; APPS.tool = toolEl;
  const TOOL_PATH = { ats: '/latest-resume/analyze/', proof: '/latest-resume/proofread/', coach: '/latest-resume/recruiter-feedback/' };
  let toolKind = 'ats', toolPath = TOOL_PATH.ats, atsBusy = false;  // the tool page on screen and the URL it shows; atsBusy: the ATS page analysing a CV (atsAnalyze)

  /* My Documents: the "create" card, then the resumes (only with a CV) and their pages */
  function docsHTML() {
    const opt = (ic, label, act, li) => `<div class="md-row"><button class="md-opt${li ? ' is-li' : ''}" type="button" ${act}>${TL_IC[ic]}${label}</button></div>`;
    const card = `<div class="md-card"><div class="md-prev"><button class="md-open" type="button" data-md="open" aria-label="Open My Kickresume in the editor"><img src="${TL_IMG.thumb}" alt=""><span>My Kickresume</span></button>
      <button class="md-more" type="button" data-md="more" aria-label="More actions for My Kickresume">${TL_IC.more}</button></div></div>`;
    const page = (label, extra = '') => `<button class="md-page" type="button" ${extra || 'data-md="page"'}>${label}</button>`;
    return `${appNavHTML('docs')}
      <main class="md-body"><section class="md-panel" aria-labelledby="md-h">
        <h1 id="md-h">My Documents</h1>
        <div class="md-docs">
          <div class="md-bar"><div class="md-tabs" role="tablist" aria-label="Document type">${['Resumes', 'Cover Letters', 'Resignation Letters', 'Websites']
            .map((t, i) => `<button class="md-tab" type="button" role="tab" aria-selected="${!i}"${i ? ' data-md="tab"' : ''}>${t}</button>`).join('')}</div>
            <button class="md-new" type="button" data-action="dash-start" data-method="">Create New</button></div>
          <div class="md-grid">
            <div class="md-create" role="group" aria-label="Create a resume"><svg viewBox="0 0 264 373" aria-hidden="true"><rect x=".5" y=".5" width="263" height="372" rx="15.5" fill="none" stroke="#ff5e59" stroke-dasharray="4 4"/></svg>
              ${opt('filePen', 'New Resume', 'data-action="dash-start" data-method=""')}<i></i>${opt('sparkles', 'New Resume with AI', 'data-route="/dashboard/create-ai-resume/"')}<i></i>
              ${opt('linkedin', 'Import from LinkedIn', 'data-route="/dashboard/linkedin-import/"', true)}<i></i>${opt('import', 'Import PDF', 'data-route="/dashboard/upload-resume/"')}<i></i>
              ${opt('example', 'Use Example', 'data-md="example"')}</div>
            ${cvUploaded ? card.repeat(4) : ''}
          </div>
          ${cvUploaded ? `<nav class="md-pages" aria-label="Pages">${page(TL_IC.chevRight, 'data-md="page" aria-label="Previous page"').replace('md-page', 'md-page is-prev')}${page('1', 'aria-current="page"')}${page('2')}${page('3')}<span class="md-page is-gap" aria-hidden="true">...</span>${page('8')}${page(TL_IC.chevRight, 'data-md="page" aria-label="Next page"')}</nav>` : ''}
        </div>
      </section></main>`;
  }

  /* The tools share the app menu and the resume preview on the right */
  /* The resume on the right; the ATS checker marks words in it, the other two have the preview tabs above it */
  const ATS_MARKS = [[190, 454, 114, 14, '#fff'], [190, 604, 221, 17, '#fff'], [190, 326, 114, 16, '#fff']].map(([x, y, w, h, c]) => `<i style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;background:${c}"></i>`).join('') +
    `<img src="${TL_IMG.hlAssistant}" alt="" width="106" height="20" style="left:189px;top:447px"><img src="${TL_IMG.hlAssistant}" alt="" width="106" height="20" style="left:189px;top:600px"><img src="${TL_IMG.hlManager}" alt="" width="107" height="20" style="left:189px;top:319px">` +
    [[282, 380, 37, 'rgba(160,102,255,.4)'], [206, 380, 32, 'rgba(81,78,234,.4)'], [450, 240, 43, 'rgba(160,102,255,.4)'], [284, 240, 43, 'rgba(1,150,162,.4)'], [248, 494, 47, 'rgba(255,182,26,.4)']]
      .map(([x, y, w, c]) => `<i style="left:${x}px;top:${y}px;width:${w}px;height:11px;background:${c}"></i>`).join('');
  function tlPrevHTML(kind) {
    const tabs = kind === 'ats' ? '' : `<div class="tl-ptabs"${kind === 'proof' ? ' inert' : ''}><div>
      <button type="button" aria-current="page">${TL_IC.eye}Preview</button><button type="button" data-action="toast" data-msg="Examples show resumes from people in similar jobs.">${TL_IC.book}Examples</button>
      <button type="button" data-action="toast" data-msg="Guides open on the Kickresume blog.">${TL_IC.target}Guides</button><button type="button" data-action="toast" data-msg="Help Center opens in a new tab.">${TL_IC.help}Help Center</button></div><i></i></div>`;
    return `<aside class="tl-prev" aria-label="Resume preview"><div class="tl-pv"><i class="tl-frame"></i>${tabs}
      <div class="tl-paper"><img src="${TL_IMG.resume}" alt="The resume: Emma South, Marketing Manager">${kind === 'ats' ? ATS_MARKS : ''}</div></div></aside>`;
  }

  const TL_CATS = ['Communication skills', 'Leadership', 'Teamwork', 'Problem solving'];
  let tlCat = 0;
  /* ATS checker (Analytics): scores, then each check with what to fix */
  function atsHTML() {
    const st = s => s === 'ok' ? TL_IC.ok : TL_IC.err;
    const chk = (s, name, body, open) => body === undefined
      ? `<div class="tl-chk"><span class="tl-chk-h">${st(s)}<span>${name}</span></span></div>`
      : `<div class="tl-chk"><button class="tl-chk-h" type="button" aria-expanded="${!!open}" data-tl="chk">${st(s)}<span>${name}</span>${TL_IC.chevUp}</button><div class="tl-chk-b"${open ? '' : ' hidden'}>${body}</div></div>`;
    const fix = (label, act) => `<button class="tl-fix" type="button" ${act}>${label}</button>`;
    const head = (h, score, desc, id) => `<div class="tl-ch"><h2 id="${id}">${h}</h2><b>${score}</b></div><p class="tl-desc${id === 'tl-design' ? ' is-434' : ''}">${desc}</p>`;
    const key = (label, score, to) => `<button class="tl-key" type="button" data-tl="key" data-to="${to}">${label}<span>${score}${TL_IC.arrowR16}</span></button>`;
    const row = (label, ideal, max, val, cls, left, open) => `<div class="tl-row"><button class="tl-row-h${open ? ' is-open' : ''}" type="button" data-tl="details">${label}<span><i>View details</i>${TL_IC.chevRight}</span></button>
      <div class="tl-len"><i></i><span>0<b>${ideal}</b>${max}</span></div><span class="tl-val ${cls}" style="left:${left}px">${val}</span></div>`;
    const meter = () => `<div class="tl-num"><span>ATS Score</span><b>85/100</b></div><div class="tl-meter" role="img" aria-label="ATS score 85 out of 100"></div>`;
    return `<h1 class="tl-h tl-ats-h">ATS Metrics<img src="${TL_IMG.premiumWord}" alt="Premium"></h1>
      <div class="tl-col">
        <div class="tl-score">${meter()}</div>
        <div class="tl-score is-key"><div>${meter()}</div><div class="tl-keys">${key('Design', '55/100', 'design')}${key('Structure', '60/100', 'structure')}${key('Content', '25/100', 'content')}</div></div>
        <section class="tl-card is-shadow" data-sec="design" aria-labelledby="tl-design">${head('Design', '55/100', 'This is where you can make sure your resume’s design does not interfere with the ATS’s ability to process it.', 'tl-design')}
          <div class="tl-checks is-one"><div>${chk('ok', 'Resume template')}${chk('ok', 'Font type')}
            ${chk('err', 'Skills section', `<p>ATS systems can sometimes struggle to determine skill levels from  graphical representations. Try using text descriptions instead.</p>${fix('Edit Skills', 'data-tl="edit"')}`, true)}
            ${chk('err', 'Background', `<p>ATS systems can have issues reading text when there’s a background pattern. Try to avoid these for optimal ATS performance.</p>${fix('Remove Background', 'data-action="toast" data-msg="The background pattern would be removed from the template."')}`, true)}</div></div></section>
        <section class="tl-card is-shadow" data-sec="structure" aria-labelledby="tl-structure">${head('Structure', '60/100', 'Here you can confirm that your resume contains all the essential information every ATS will be looking for.', 'tl-structure')}
          <div class="tl-checks is-two"><div>${chk('ok', 'Profile section', '<p>An ATS can find your profile at the top of the resume.</p>')}
            ${chk('err', 'Dates', `<div class="tl-boxes"><span>${TL_IC.cbOff}Start dates</span><span>${TL_IC.cbOn}End dates</span></div>`, true)}${chk('ok', 'Work experience')}</div>
            <div>${chk('err', 'Skills')}${chk('ok', 'Education section')}${chk('ok', 'Strengths')}</div></div></section>
        <section class="tl-card is-shadow" data-sec="content" aria-labelledby="tl-content">${head('Content', '25/100', 'Some parts of your resume appear to be either shorter or longer than the average calculated from successful resumes in our database.', 'tl-content')}
          <div class="tl-rows">${row('Word count', '450-600 ideal', '1500', '392', 'is-ok', 142)}${row('Paragraphs per section', '5-6 ideal', '7', '6', 'is-ok', 212)}
            ${row('Characters per paragraph', '67-94 ideal', '300', '184', 'is-warn', 322, true)}${row('Work experiences', '5-6 ideal', '20', '2', 'is-bad', 32)}</div></section>
        <h2 class="tl-h">Non-ATS Metrics<img src="${TL_IMG.premiumWord}" alt="Premium"></h2>
        <section class="tl-card is-shadow tl-words" aria-labelledby="tl-words"><div class="tl-tt"><h2 id="tl-words">Word choice analysis</h2><p class="tl-desc is-434">Analyze the language used on your resume and see how it compares against other successful resumes in our database.</p></div>
          <div class="tl-chart"><div class="tl-cats"><button type="button" data-tl="cat" data-dir="-1" aria-label="Previous category">${TL_IC.arrowL24}</button><button class="tl-cat" type="button" data-tl="cat" data-dir="1"><em>${TL_CATS[0]}</em>${TL_IC.chevDown}</button><button type="button" data-tl="cat" data-dir="1" aria-label="Next category">${TL_IC.arrowR24}</button></div>
            <div class="tl-gauss"><img src="${TL_IMG.gauss}" alt="Chart: your result is above the category average" width="402" height="200">
              <div class="tl-found"><p>${TL_IC.checkCircle}Phrases found:</p><div class="tl-chips">${['authored', 'facilitated', 'performed', 'animated'].map(w => `<span>${w}</span>`).join('')}</div></div></div></div>
          <button class="tl-more" type="button" data-action="toast" data-msg="Every phrase found in this category is listed here.">See All Phrases</button></section>
        <section class="tl-card" aria-labelledby="tl-verbs"><div class="tl-tt"><h2 id="tl-verbs">Repetitive verbs</h2><p class="tl-desc is-434">Consider introducing more variety to your action verbs. It can help you make your resume more engaging.</p></div>
          <div class="tl-verbs">${[['Industry', 4], ['Marketing', 3], ['act', 2], ['managed', 2]].map(([w, n]) => `<span><b>${w}</b>appears<b>${n} times</b></span>`).join('')}</div>
          <button class="tl-vmore" type="button" data-action="toast" data-msg="More repeated verbs are listed here.">View more</button></section>
      </div>`;
  }

  /* Proofreading by people, and translation by AI */
  function proofHTML() {
    const person = (img, name, flag, lang, bio) => `<div class="tl-person"><img src="${img}" alt=""><div><b>${name}</b><span><i class="tl-flag"><img src="${flag}" alt=""></i>${lang}</span><p>${bio}</p></div></div>`;
    return `<div class="tl-col">
      <section class="tl-sec" aria-labelledby="tl-pr"><h1 class="tl-sh" id="tl-pr">${TL_IC.userCheck}Proofreading</h1>
        <div class="tl-pcard">
          <div class="tl-price"><div><span><b>€<em>26</em></b>/ resume</span><em>Ready in 2 work days (or less)</em></div><button class="tl-coral" type="button" data-tl="proofbuy">Get Proofreading</button></div><hr>
          <div class="tl-pg"><div class="tl-pt"><h3>Have it proofread by professionals</h3></div>
            <ul class="tl-perks">${['Grammar correction from human editors', 'Enhanced readability review', 'Increase your chances of getting hired'].map(t => `<li>${TL_IC.tick}${t}</li>`).join('')}</ul></div><hr>
          <div class="tl-pg"><div class="tl-pt"><h3>Meet our proofreaders</h3><p>Perfectionists who put ‘pro’ in proofreading.</p></div>
            <div class="tl-people">${person(TL_IMG.joe, 'Joe Solomon', TL_IMG.flagUs, 'American English', 'Professional ESL teacher, copy editor and proofreader since 2006. Native American English speaker.')}
              ${person(TL_IMG.patricia, 'Patricia Tejera Correa', TL_IMG.flagEs, 'Spanish (Castellano)', 'Consultora de adaptación cultural, localizadora, traductora e intérprete. CEO de etnonautas.com.')}</div></div>
        </div></section>
      <section class="tl-sec" aria-labelledby="tl-tr"><h2 class="tl-sh" id="tl-tr">${TL_IC.languages}Translation</h2>
        <div class="tl-pcard"><div class="tl-pt"><h3>Translate your resume</h3><p>Easily translate your resume in seconds.</p></div>
          <div class="tl-pg"><div class="tl-tr"><button class="tl-lang" type="button" data-action="toast" data-msg="Pick from 20+ languages here; only Spanish is part of this prototype." aria-label="Language: Spanish"><i class="tl-flag"><img src="${TL_IMG.flagEs}" alt=""></i><em>Spanish</em>${TL_IC.chevDown}</button>
            <button class="tl-coral" type="button" data-tl="translate">Translate</button></div><p class="tl-ready">Ready in about 40 seconds.</p></div></div>
        <p class="tl-info">${TL_IC.info}We use AI for translations. Always check translated resumes for errors.</p></section>
    </div>`;
  }

  /* Career Coach (Beta): the design for /latest-resume/recruiter-feedback/ */
  function coachHTML() {
    const skill = `<article class="tl-skill"><h3>Wireframing and prototyping</h3><div><p>To possess expertise in cloud-based infrastructure, with a strong understanding of AI and blockchain technologies. To be skilled in agile development methodologies, DevOps practices, and microservices architecture.</p><hr>
      <div class="tl-res"><div><b>The Guide to Wireframing, eBook, Chris Bank</b><p>User experience remains a priority for digital platforms and products. We will be taking a closer look at the power of wireframing and the examples, comparisons</p></div><button type="button" data-action="toast" data-msg="Resources open on the publisher’s site.">Resource</button></div></div></article>`;
    return `<div class="tl-col">
      <div class="tl-cc"><div class="tl-cc-top"><h1 class="tl-h is-top"><b class="tl-ai">AI</b>Career Coach (Beta)</h1>
          <div class="tl-intro"><p>Don’t know what separates you from your dream career? Our AI Career Counsellor will help you identify gaps in your skillset based on your resume and tell you how to become the ideal candidate for the job you want.</p>
            <p>Enter the name of your desired role and the AI will recommend books and resources that will help you grow into the professional you dream to be.</p></div>
          <div class="tl-gen"><p>${TL_IC.starsAi}Generate career advice for</p><form data-tl="gen" novalidate><label class="sr-only" for="tl-job">Your job title</label><input id="tl-job" placeholder="Your job title (include seniority)" autocomplete="off"><button type="submit">Generate</button></form></div></div>
        <p class="tl-note">AI-generated responses may sometimes be inaccurate. We recommend to verify any information provided with other reliable sources.</p></div>
      <section class="tl-skills" aria-labelledby="tl-sk"><h2 id="tl-sk">Focus on these skills to increase your professional value in the job market:</h2>${skill.repeat(3)}</section>
    </div>`;
  }
  /* ---------- Job Interviews (Figma concepting-KR › 285:361) ----------
     The Interview questions' loading (285:185) and its result (285:5): an app page with the app menu (APPS.tool, kind
     'iq'). iqState: process (the questions are loading) or dest (the questions, one open with its model answer).
     Interview ⇄ Follow Up switch the list, a question opens on the right, Hide Answer folds the answer, View More adds
     the rest. iqRole is the job title typed in the form (the design's when none). */
  const IQ_IC = {
    badge: '<svg viewBox="0 0 24 16" fill="none" aria-hidden="true"><rect width="24" height="16" rx="4" fill="url(#iq-badge-g)"/><path d="M7.22117 11.5H8.47117L9.03117 9.73H11.7612L12.3312 11.5H13.7112L11.3512 4.35H9.61117L7.22117 11.5ZM10.4012 5.44L11.4512 8.76H9.34117L10.4012 5.44ZM14.8424 11.5H16.1824V4.35H14.8424V11.5Z" fill="#fff"/><defs><linearGradient id="iq-badge-g" x1="20.1516" y1="8" x2="2.83382" y2="8" gradientUnits="userSpaceOnUse"><stop stop-color="#A066FF"/><stop offset="1" stop-color="#666CFF"/></linearGradient></defs></svg>',
    plus: '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15ZM.83 10a9.17 9.17 0 1 1 18.34 0A9.17 9.17 0 0 1 .83 10Z"/><path fill-rule="evenodd" d="M10 5.83c.46 0 .83.38.83.84v6.66a.83.83 0 1 1-1.66 0V6.67c0-.46.37-.84.83-.84Z"/><path fill-rule="evenodd" d="M5.83 10c0-.46.38-.83.84-.83h6.66a.83.83 0 1 1 0 1.66H6.67a.83.83 0 0 1-.84-.83Z"/></svg>',
    spinner: '<svg viewBox="0 0 24 24" fill="#3F3F3F" aria-hidden="true"><path fill-opacity=".4" d="M12 1.04c.53 0 .96.43.96.96v4a.96.96 0 1 1-1.92 0V2c0-.53.43-.96.96-.96Z"/><path d="M12 17.04c.53 0 .96.43.96.96v4a.96.96 0 1 1-1.92 0v-4c0-.53.43-.96.96-.96ZM4.25 4.25c.38-.37.98-.37 1.36 0l2.83 2.83a.96.96 0 1 1-1.36 1.36L4.25 5.6a.96.96 0 0 1 0-1.36ZM15.56 15.56c.38-.37.98-.37 1.36 0l2.83 2.83a.96.96 0 1 1-1.36 1.36l-2.83-2.83a.96.96 0 0 1 0-1.36ZM1.04 12c0-.53.43-.96.96-.96h4a.96.96 0 1 1 0 1.92H2A.96.96 0 0 1 1.04 12ZM17.04 12c0-.53.43-.96.96-.96h4a.96.96 0 1 1 0 1.92h-4a.96.96 0 0 1-.96-.96ZM8.44 15.56c.37.38.37.98 0 1.36L5.6 19.75a.96.96 0 1 1-1.36-1.36l2.83-2.83c.38-.37.98-.37 1.36 0Z"/><path fill-opacity=".2" d="M19.75 4.25c.37.38.37.98 0 1.36l-2.83 2.83a.96.96 0 1 1-1.36-1.36l2.83-2.83c.38-.37.98-.37 1.36 0Z"/></svg>'
  };
  const IQ = {
    interview: [
      ['Can you describe a project where you used Python for back-end development? What challenges did you face and how did you overcome them?',
        'This question tests your practical experience with Python back-end development and problem-solving skills.',
        '<p>In one of my projects, I developed a <b>leave application system</b> for a university using <b>Python</b> with the <b>Flutter and Firebase</b> framework for the front end. The challenge was to ensure the <b>real-time synchronization</b> between the <b>database</b> and <b>user interface</b>, especially during high traffic times.</p><p>To overcome this, I implemented efficient use of <b>Firebase\'s real-time database</b> features and wrote <b>optimized queries to minimize load times</b>. Moreover, I used <b>async programming in Python to handle requests concurrently</b>, which improved the overall <b>responsiveness</b> of the application.</p>',
        'This answer is strong because it describes a relevant project, highlights specific technical challenges, and explains practical solutions in a clear and concise manner.'],
      ['How do you approach writing scalable and maintainable code in Python?',
        'This question checks how you think about code quality beyond getting something to work.',
        '<p>I keep modules <b>small and single-purpose</b>, follow <b>PEP 8</b> and use <b>type hints</b> so the code explains itself. Every feature ships with <b>unit tests</b>, and I refactor as soon as a function starts doing two things.</p><p>For scale, I separate <b>I/O from business logic</b>, so the slow parts can move to <b>background workers</b> or be cached without touching the core.</p>',
        'This answer is strong because it names concrete habits and shows they serve both maintainability and scale.'],
      ['Have you worked with any web frameworks in Python?',
        'This question maps your hands-on experience to the team\'s stack.',
        '<p>Yes, mostly <b>Django</b> and <b>FastAPI</b>. I used Django for an internal admin tool, where its <b>ORM and admin</b> saved weeks, and FastAPI for a public API, where <b>async endpoints</b> and automatic <b>OpenAPI docs</b> mattered more.</p>',
        'This answer is strong because it says when each framework fits, not only that you know them.'],
      ['What experience do you have with databases, particularly PostgreSQL?',
        'This question tests how deep your database knowledge goes.',
        '<p>I have designed <b>PostgreSQL schemas</b> for two production apps, written <b>migrations</b> with Alembic and tuned slow queries with <b>EXPLAIN ANALYZE</b> and the right <b>indexes</b>. One fix took a report from 40 seconds to under one.</p>',
        'This answer is strong because a measurable result backs up the claim.'],
      ['How do you make sure an API stays reliable under heavy load?',
        'This question looks for experience with performance and resilience.',
        '<p>I start with <b>load tests</b> to find the limit, then add <b>caching</b>, <b>rate limiting</b> and <b>timeouts with retries</b>. <b>Monitoring and alerts</b> tell us before users do.</p>',
        'This answer is strong because it moves from measuring to fixing to watching.'],
      ['Tell us about a time you disagreed with a technical decision.',
        'This question shows how you handle conflict and collaboration.',
        '<p>Our team wanted to add a new queue service; I thought <b>PostgreSQL\'s LISTEN/NOTIFY</b> would do. I wrote a <b>short comparison</b> with numbers, we tried my approach for a sprint, and it held up, so we <b>saved a service</b> to run.</p>',
        'This answer is strong because it is respectful, evidence-based and ends with an outcome.']
    ],
    follow: [
      ['What would success look like in this role after the first six months?', 'Asking this shows you think about results, not only the job description.', '<p>Ask it near the end, then <b>link one of your strengths</b> to what they describe.</p>', 'It turns the last minutes into a conversation about how you would deliver.'],
      ['How does the team review code and share knowledge?', 'This tells you how the team works day to day.', '<p>Listen for <b>code reviews</b>, <b>pairing</b> or <b>documentation</b>, and mention how you have done the same.</p>', 'It shows you care about quality and about the people you would work with.'],
      ['What are the biggest technical challenges the team faces right now?', 'This gives you a chance to show how you would help.', '<p>Pick one challenge they mention and <b>describe briefly how you solved something similar</b>.</p>', 'It ends the interview on your experience, framed around their needs.'],
      ['What are the next steps in the hiring process?', 'This keeps you informed and shows you are interested.', '<p>Ask it last, and <b>thank them</b> for their time.</p>', 'It is simple, polite and leaves a clear next step.']
    ]
  };
  let iqState = 'dest', iqSet = 'interview', iqAt = 0, iqShown = 4, iqHidden = false, iqRole = 'Managing Director - BioPharma s.r.o.';
  function iqListHTML() {
    const list = IQ[iqSet], n = iqState === 'process' ? 5 : iqShown;
    return `<section class="iq-list" aria-label="Questions">
      <div class="iq-role"><span class="iq-emoji" aria-hidden="true">🧑‍💻</span><span>${esc(iqRole)}</span></div>
      <div class="iq-seg" role="radiogroup" aria-label="Questions to show">${[['interview', 'Interview'], ['follow', 'Follow Up']].map(([k, l]) => `<button type="button" role="radio" data-iq-set="${k}" aria-checked="${k === iqSet}" tabindex="${k === iqSet ? 0 : -1}">${l}</button>`).join('')}</div>
      <ul class="iq-qs">${list.slice(0, n).map(([q], i) => `<li><button class="iq-q" type="button" data-iq-q="${i}" aria-current="${iqState === 'dest' && i === iqAt}"><span>${esc(q)}</span></button></li>`).join('')}
        ${n < list.length || iqState === 'process' ? `<li><button class="iq-more" type="button" data-iq-more>${IQ_IC.plus}${iqState === 'process' ? 'More Questions' : 'View More'}</button></li>` : ''}</ul>
    </section>`;
  }
  function iqViewHTML() {
    if (iqState === 'process') return `<section class="iq-load" role="status"><div class="iq-load-h">${IQ_IC.spinner}<span>Your interview questions are loading...</span></div><p>We use a fine-tuned OpenAI GPT-4o mini model to generate questions.</p></section>`;
    const [q, why, a, good] = IQ[iqSet][iqAt];
    return `<section class="iq-view" aria-live="polite"><div class="iq-qa">
        <div><p class="iq-lbl">Question:</p><p class="iq-text">${esc(q)}</p><p class="iq-why">${esc(why)}</p></div>
        <div class="iq-a"${iqHidden ? ' hidden' : ''}><p class="iq-lbl">Answer:</p><div class="iq-ans">${a}</div><p class="iq-why">${esc(good)}</p></div>
      </div><div class="iq-foot"><button class="iq-hide" type="button" data-iq-hide aria-expanded="${!iqHidden}">${iqHidden ? 'Show Answer' : 'Hide Answer'}</button></div></section>`;
  }
  const iqHTML = () => `<h1 class="tl-h iq-h">${IQ_IC.badge}Job Interviews</h1><div class="iq-row">${iqListHTML()}${iqViewHTML()}</div>`;
  const IQ_PATH = '/dashboard/create-interview/';
  // the loading, then the questions (in a run, processDone moves it on as the dock's Ends says)
  async function openInterview(state, role) {
    if (role) iqRole = role;
    iqState = state; iqSet = 'interview'; iqAt = 0; iqShown = 4; iqHidden = false;
    await openTool('iq', IQ_PATH);
    if (state === 'process') later(() => { if (current !== 'tool' || toolKind !== 'iq' || iqState !== 'process') return; if (flowNow && flowNow.steps[flowAt] && flowNow.steps[flowAt].stage === 'process') processDone(); else iqShow('dest'); }, 2600);
  }
  function iqShow(state) { iqState = state; iqRedraw(); flowSync(); }
  function iqRedraw(focusSel) {
    const row = toolEl.querySelector('.iq-row'); if (!row) return;
    row.innerHTML = iqListHTML() + iqViewHTML();
    if (focusSel) row.querySelector(focusSel)?.focus();
  }
  toolEl.addEventListener('click', e => {
    if (toolKind !== 'iq') return;
    const set = e.target.closest('[data-iq-set]'), q = e.target.closest('[data-iq-q]');
    if (set && set.dataset.iqSet !== iqSet) { iqSet = set.dataset.iqSet; iqAt = 0; iqShown = 4; iqHidden = false; return iqRedraw(`[data-iq-set="${iqSet}"]`); }
    if (q && iqState === 'dest') { iqAt = +q.dataset.iqQ; iqHidden = false; return iqRedraw(`[data-iq-q="${iqAt}"]`); }
    if (e.target.closest('[data-iq-more]')) { if (iqState === 'process') return; iqShown = IQ[iqSet].length; return iqRedraw('[data-iq-q="4"]'); }
    if (e.target.closest('[data-iq-hide]')) { iqHidden = !iqHidden; return iqRedraw('[data-iq-hide]'); }
  });
  toolEl.addEventListener('keydown', e => {
    const b = toolKind === 'iq' && e.target.closest('[data-iq-set]');
    if (!b || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;
    e.preventDefault(); toolEl.querySelector(`[data-iq-set]:not([data-iq-set="${b.dataset.iqSet}"])`).click();
  });

  function toolHTML(kind) {
    if (kind === 'iq') return `${appNavHTML('interviews')}<main class="tl-main">${iqHTML()}</main>`;
    const main = kind === 'ats' ? (atsBusy ? atlMainHTML() : atsHTML()) : kind === 'proof' ? proofHTML() : coachHTML();
    return `${appNavHTML(kind)}<main class="tl-main">${main}</main>${tlPrevHTML(kind)}`;
  }

  /* Open an app page (My Documents, a tool) the way the dashboard opens; its URL goes in the address bar */
  const syncApp = path => { routeNow = findRoute(path); markRoutes(); setHash(path); flowSync(); syncNote(); };
  function riseIn(el, keepSide) {
    const items = [...el.querySelectorAll(':scope > .ed-mbar, :scope > .ed-side, .md-panel, .tl-ats-h, .tl-col > *, .tl-prev, .tps-head > *, .tps-card, .jbs-col > *, .jm-col > *, .jd-col > *, .jt-main > *, .iq-h, .iq-list, .iq-view, .iq-load')].filter(x => shown(x) && !(keepSide && x.matches('.ed-side')));
    const anims = items.map((x, i) => play(x, reduce ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: x.matches('.ed-side') ? 'translateX(-12px)' : 'translateY(16px)' }, { opacity: 1, transform: 'none' }],
      { duration: DUR.base + 60, delay: Math.min(i, 8) * (STAGGER + 15), easing: EASE.standard }));
    Promise.all(anims.map(a => a.finished.catch(() => {}))).then(() => anims.forEach(a => a.cancel()));
  }
  async function enterApp(el, fill, screen, path) {
    if (screenRun) screenRun.finish();
    clearTimers(); setMore(false);
    const fromEl = APPS[current] || screens[current], keepSide = hasSide(fromEl);
    await leaveOut(fromEl, keepSide);
    Object.values(APPS).forEach(x => { if (x !== el) { x.hidden = true; x.innerHTML = ''; } });
    topbarEl.hidden = true; pageEl.hidden = true;
    Object.values(screens).forEach(sc => { sc.hidden = true; });
    fill(); el.hidden = false;
    setCurrent(screen);
    window.scrollTo(0, 0); device.scrollTop = 0;
    syncApp(path); riseIn(el, keepSide);
    landFocus(el);
  }
  const openDocs = () => enterApp(docsEl, () => { docsEl.innerHTML = docsHTML(); }, 'docs', '/dashboard/resumes/');
  // path: the URL it shows (a tool's own, e.g. /dashboard/translate-resume/; the latest-resume one otherwise)
  async function openTool(kind, path = TOOL_PATH[kind], busy = false) {
    atsBusy = busy; toolKind = kind; toolPath = path; tlCat = 0;
    const fill = () => { toolEl.className = 'tl is-' + kind; toolEl.innerHTML = toolHTML(kind); requestAnimationFrame(fitPrev); };
    if (current !== 'tool') { await enterApp(toolEl, fill, 'tool', path); return toolAt(path); }
    // from one tool to another: the page stays, its content fades over
    clearTimers(); setMore(false);
    await leaveOut(toolEl, hasSide(toolEl));
    fill(); placeVer(); window.scrollTo(0, 0); device.scrollTop = 0;
    syncApp(path); riseIn(toolEl, true); toolAt(path);
  }
  // Translate resume opens the Proofread & Translate page and brings its Translation part (below the fold) into view
  function toolAt(path) {
    const sec = path === '/dashboard/translate-resume/' && toolEl.querySelector('#tl-tr');
    if (sec) later(() => sec.closest('.tl-sec').scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' }), 350);
  }
  /* The resume tools with nothing to ask (no setup screen) open their page under their own URL (Translate resume took
     its language on a landing page). Without a CV the method screen comes first (askCvFor): the page opens once the CV
     is uploaded or built, with no loading of its own (the ATS checker included). */
  function toolNow(r, kind) { if (!cvUploaded) return askCvFor(r); openTool(kind, r.path); }
  function analyseNow(r) { toolNow(r, 'ats'); }
  /* Below 1440px the preview column narrows; the preview shrinks to fit it */
  function fitPrev() {
    const pv = current === 'tool' && toolEl.querySelector('.tl-prev');
    if (pv && pv.clientWidth) toolEl.style.setProperty('--tl-z', String(Math.min(1, pv.clientWidth / 628)));
  }
  window.addEventListener('resize', fitPrev);
  /* The editor at its own URL (/edit/): a returning user's latest resume */
  // the editor under a URL of its own (/edit/, /guest-edit-start/)
  function editorAt(path) { const opening = jumpEditor(); routeNow = findRoute(path); markRoutes(); setHash(path); return opening; }
  function openEdit() { editorAt('/edit/'); }

  /* ---------- Find Jobs: the job board (/jobs/), its search results (/jobs/search/) and Jobs for You (/jobs/matcher/) ----------
     From Figma (Kickresume 3.0 › Flow 1, 62207:3265: Job Board setup 62221:19596, Jobs results 62221:16319, Job Matcher
     setup 62221:17042, Loading 62221:17823, Results 62221:18465). The job board is an onboarding screen (a route screen,
     Back instead of ×, as in the design); the search results and Jobs for You are app pages with the app menu
     (APPS.jobs, jobsHTML). Jobs for You asks for a resume (upload), analyses it (its own loading, then processDone in a
     run) and lists the top matches; with a CV it opens on the matches. Icons are the Figma exports (one-colour ones in
     currentColor; the clock icons' whole-box clip dropped, which renders the same), logos in assets/jobs/. */
  const JB_IC = {
    search24: '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9433 15.9413C16.3338 15.5508 16.967 15.5508 17.3575 15.9413L21.7075 20.2913C22.098 20.6819 22.098 21.315 21.7075 21.7055C21.317 22.0961 20.6838 22.0961 20.2933 21.7055L15.9433 17.3555C15.5528 16.965 15.5528 16.3319 15.9433 15.9413Z" fill="currentColor"/></svg>',
    x: '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    searchBtn: '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.4995 17.4995L13.8828 13.8828" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    funnelX: '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10.4425 2.5H2.50003C2.33886 2.50006 2.18118 2.54685 2.04607 2.6347C1.91096 2.72255 1.80422 2.84769 1.73878 2.99497C1.67334 3.14225 1.65201 3.30534 1.67738 3.46449C1.70274 3.62364 1.77371 3.77203 1.88169 3.89167L7.90252 10.5492C8.17964 10.8554 8.33317 11.2537 8.33336 11.6667V16.6667C8.33329 16.8215 8.37637 16.9733 8.45777 17.1051C8.53917 17.2368 8.65566 17.3433 8.79419 17.4125L10.4609 18.2458C10.5879 18.3093 10.7291 18.3393 10.8711 18.3329C11.013 18.3264 11.1509 18.2838 11.2717 18.2091C11.3925 18.1344 11.4922 18.03 11.5614 17.9059C11.6305 17.7818 11.6668 17.6421 11.6667 17.5V11.6667C11.6669 11.2537 11.8204 10.8554 12.0975 10.5492L12.4534 10.155" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.75 2.91797L17.9167 7.08464" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.9167 2.91797L13.75 7.08464" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    panelRight: '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 2.5V17.5" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.33398 12.5L5.83398 10L8.33398 7.5" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    calDown: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9.33398 12L12.0007 14.6667L14.6673 12" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.666 1.33203V3.9987" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 9.33203V14.6654" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 7.57064V4.0013C14 3.64768 13.8595 3.30854 13.6095 3.05849C13.3594 2.80844 13.0203 2.66797 12.6667 2.66797H3.33333C2.97971 2.66797 2.64057 2.80844 2.39052 3.05849C2.14048 3.30854 2 3.64768 2 4.0013V13.3346C2 13.6883 2.14048 14.0274 2.39052 14.2774C2.64057 14.5275 2.97971 14.668 3.33333 14.668H8.22867" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 6.66797H14" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.33398 1.33203V3.9987" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    chevDown: '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    mapPin: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.3327 6.66536C13.3327 9.99403 9.64002 13.4607 8.40002 14.5314C8.2845 14.6182 8.14388 14.6652 7.99935 14.6652C7.85482 14.6652 7.7142 14.6182 7.59868 14.5314C6.35868 13.4607 2.66602 9.99403 2.66602 6.66536C2.66602 5.25088 3.22792 3.89432 4.22811 2.89413C5.22831 1.89393 6.58486 1.33203 7.99935 1.33203C9.41384 1.33203 10.7704 1.89393 11.7706 2.89413C12.7708 3.89432 13.3327 5.25088 13.3327 6.66536Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 8.66797C9.10457 8.66797 10 7.77254 10 6.66797C10 5.5634 9.10457 4.66797 8 4.66797C6.89543 4.66797 6 5.5634 6 6.66797C6 7.77254 6.89543 8.66797 8 8.66797Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    clockFading: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.33203C9.29343 1.3318 10.559 1.70782 11.6425 2.41427C12.7259 3.12072 13.5805 4.12709 14.102 5.31072C14.6235 6.49436 14.7894 7.80413 14.5795 9.08042C14.3697 10.3567 13.7931 11.5444 12.92 12.4987" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 4V8L10.6667 9.33333" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.66732 5.91797C1.45488 6.56374 1.34247 7.23821 1.33398 7.91797" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.88672 10.668C2.26105 11.5292 2.81311 12.3016 3.50672 12.9346" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.08984 3.4893C3.27587 3.28679 3.47425 3.09598 3.68384 2.91797" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.76172 14.2807C7.42418 14.8729 9.25365 14.7818 10.8491 14.0273" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    briefcase: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.6673 13.332V2.66536C10.6673 2.31174 10.5268 1.9726 10.2768 1.72256C10.0267 1.47251 9.68761 1.33203 9.33398 1.33203H6.66732C6.3137 1.33203 5.97456 1.47251 5.72451 1.72256C5.47446 1.9726 5.33398 2.31174 5.33398 2.66536V13.332" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.334 4H2.66732C1.93094 4 1.33398 4.59695 1.33398 5.33333V12C1.33398 12.7364 1.93094 13.3333 2.66732 13.3333H13.334C14.0704 13.3333 14.6673 12.7364 14.6673 12V5.33333C14.6673 4.59695 14.0704 4 13.334 4Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    clock: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.00065 14.6654C11.6825 14.6654 14.6673 11.6806 14.6673 7.9987C14.6673 4.3168 11.6825 1.33203 8.00065 1.33203C4.31875 1.33203 1.33398 4.3168 1.33398 7.9987C1.33398 11.6806 4.31875 14.6654 8.00065 14.6654Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 4V8L10.6667 9.33333" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    sparkles: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.34496 1.87629C7.37353 1.72336 7.45468 1.58524 7.57436 1.48584C7.69404 1.38644 7.84472 1.33203 8.00029 1.33203C8.15587 1.33203 8.30655 1.38644 8.42623 1.48584C8.54591 1.58524 8.62706 1.72336 8.65563 1.87629L9.35629 5.58163C9.40606 5.84506 9.53408 6.08737 9.72365 6.27694C9.91322 6.46651 10.1555 6.59453 10.419 6.64429L14.1243 7.34496C14.2772 7.37353 14.4154 7.45468 14.5147 7.57436C14.6141 7.69404 14.6686 7.84472 14.6686 8.00029C14.6686 8.15587 14.6141 8.30655 14.5147 8.42623C14.4154 8.54591 14.2772 8.62706 14.1243 8.65563L10.419 9.35629C10.1555 9.40606 9.91322 9.53408 9.72365 9.72365C9.53408 9.91322 9.40606 10.1555 9.35629 10.419L8.65563 14.1243C8.62706 14.2772 8.54591 14.4154 8.42623 14.5147C8.30655 14.6141 8.15587 14.6686 8.00029 14.6686C7.84472 14.6686 7.69404 14.6141 7.57436 14.5147C7.45468 14.4154 7.37353 14.2772 7.34496 14.1243L6.64429 10.419C6.59453 10.1555 6.46651 9.91322 6.27694 9.72365C6.08737 9.53408 5.84506 9.40606 5.58163 9.35629L1.87629 8.65563C1.72336 8.62706 1.58524 8.54591 1.48584 8.42623C1.38644 8.30655 1.33203 8.15587 1.33203 8.00029C1.33203 7.84472 1.38644 7.69404 1.48584 7.57436C1.58524 7.45468 1.72336 7.37353 1.87629 7.34496L5.58163 6.64429C5.84506 6.59453 6.08737 6.46651 6.27694 6.27694C6.46651 6.08737 6.59453 5.84506 6.64429 5.58163L7.34496 1.87629Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.333 1.33203V3.9987" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6667 2.66797H12" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.66634 14.6667C3.40272 14.6667 3.99967 14.0697 3.99967 13.3333C3.99967 12.597 3.40272 12 2.66634 12C1.92996 12 1.33301 12.597 1.33301 13.3333C1.33301 14.0697 1.92996 14.6667 2.66634 14.6667Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    search16: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.9998 13.9988L11.1064 11.1055" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    heart: '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M1.66602 7.91711C1.66603 6.98977 1.94734 6.08426 2.47279 5.32016C2.99824 4.55606 3.74311 3.96932 4.60902 3.63744C5.47493 3.30556 6.42115 3.24414 7.32269 3.46131C8.22424 3.67848 9.0387 4.16401 9.65852 4.85377C9.70217 4.90045 9.75495 4.93767 9.81358 4.96311C9.87221 4.98855 9.93544 5.00168 9.99935 5.00168C10.0633 5.00168 10.1265 4.98855 10.1851 4.96311C10.2437 4.93767 10.2965 4.90045 10.3402 4.85377C10.958 4.15952 11.7727 3.66991 12.6757 3.45011C13.5787 3.2303 14.5273 3.29073 15.3951 3.62334C16.2629 3.95596 17.0088 4.54498 17.5336 5.31203C18.0584 6.07907 18.3371 6.98774 18.3327 7.91711C18.3327 9.82544 17.0827 11.2504 15.8327 12.5004L11.256 16.9279C11.1007 17.1063 10.9093 17.2495 10.6944 17.3482C10.4795 17.4468 10.2461 17.4986 10.0096 17.5001C9.77313 17.5016 9.53906 17.4528 9.32292 17.3569C9.10679 17.261 8.91354 17.1201 8.75602 16.9438L4.16602 12.5004C2.91602 11.2504 1.66602 9.83377 1.66602 7.91711Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    userStar: '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.7015 8.40926C10.7455 8.27415 10.8316 8.15665 10.9471 8.0739C11.0626 7.99115 11.2016 7.94749 11.3437 7.94927C11.4858 7.95106 11.6236 7.9982 11.737 8.08383C11.8504 8.16946 11.9335 8.28908 11.9741 8.42526L12.4655 9.39326C12.5133 9.48736 12.5828 9.56876 12.6682 9.63077C12.7536 9.69277 12.8525 9.73361 12.9568 9.74992L14.0461 9.92059C14.1864 9.92114 14.3229 9.96592 14.4363 10.0486C14.5496 10.1312 14.634 10.2475 14.6774 10.3809C14.7209 10.5142 14.7211 10.6579 14.6782 10.7915C14.6352 10.925 14.5512 11.0416 14.4381 11.1246L13.6568 11.9033C13.582 11.9777 13.5259 12.0689 13.4933 12.1693C13.4606 12.2696 13.4522 12.3763 13.4688 12.4806L13.6415 13.5559C13.689 13.6907 13.6919 13.8372 13.6498 13.9738C13.6078 14.1103 13.5229 14.2298 13.4078 14.3145C13.2927 14.3992 13.1535 14.4446 13.0106 14.4442C12.8677 14.4437 12.7287 14.3974 12.6141 14.3119L11.6375 13.8119C11.5434 13.7637 11.4392 13.7386 11.3335 13.7386C11.2278 13.7386 11.1236 13.7637 11.0295 13.8119L10.0528 14.3119C9.93826 14.3967 9.79958 14.4425 9.6571 14.4426C9.51463 14.4428 9.37584 14.3973 9.26111 14.3128C9.14637 14.2284 9.06171 14.1093 9.01954 13.9733C8.97738 13.8372 8.97992 13.6911 9.0268 13.5566L9.1988 12.4813C9.21541 12.377 9.20703 12.2703 9.17434 12.1699C9.14166 12.0696 9.08561 11.9784 9.0108 11.9039L8.24014 11.1353C8.12324 11.0543 8.0353 10.938 7.98917 10.8035C7.94304 10.669 7.94114 10.5232 7.98373 10.3876C8.02633 10.2519 8.11119 10.1334 8.22593 10.0494C8.34067 9.96536 8.47926 9.92023 8.62147 9.92059L9.71014 9.74992C9.81442 9.73361 9.91334 9.69277 9.99876 9.63077C10.0842 9.56876 10.1537 9.48736 10.2015 9.39326L10.7015 8.40926Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.33333 10H4.66667C3.95942 10 3.28115 10.281 2.78105 10.781C2.28095 11.2811 2 11.9594 2 12.6667V14" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.66667 7.33333C8.13943 7.33333 9.33333 6.13943 9.33333 4.66667C9.33333 3.19391 8.13943 2 6.66667 2C5.19391 2 4 3.19391 4 4.66667C4 6.13943 5.19391 7.33333 6.66667 7.33333Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    chevRight: '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="#FFC75C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 18L15 12L9 6" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    load: '<svg aria-hidden="true" width="64" height="64" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="32" fill="url(#paint0_linear_62221_17917)" fill-opacity="0.1"/><g filter="url(#filter0_d_62221_17917)"><rect x="12" y="12" width="40" height="40" rx="20" fill="url(#paint1_linear_62221_17917)"/><path d="M31.6875 38C31.5729 37.3229 31.2708 36.5938 30.7812 35.8125C30.2917 35.0208 29.5937 34.2865 28.6875 33.6094C27.7917 32.9323 26.8958 32.5 26 32.3125V31.6562C26.8854 31.4479 27.7344 31.0625 28.5469 30.5C29.3698 29.9271 30.0573 29.2396 30.6094 28.4375C31.1719 27.6146 31.5312 26.8021 31.6875 26H32.3438C32.4375 26.5208 32.625 27.0573 32.9062 27.6094C33.1875 28.151 33.5469 28.6719 33.9844 29.1719C34.4323 29.6615 34.9323 30.1042 35.4844 30.5C36.3073 31.0833 37.1458 31.4687 38 31.6562V32.3125C37.4271 32.4271 36.8333 32.6615 36.2188 33.0156C35.6146 33.3698 35.0521 33.7917 34.5312 34.2813C34.0104 34.7604 33.5833 35.2656 33.25 35.7969C32.7604 36.5781 32.4583 37.3125 32.3438 38H31.6875Z" fill="white"/></g><defs><filter id="filter0_d_62221_17917" x="7" y="8" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="1" dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix type="matrix" values="0 0 0 0 0.611765 0 0 0 0 0.243137 0 0 0 0 1 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62221_17917"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62221_17917" result="shape"/></filter><linearGradient id="paint0_linear_62221_17917" x1="-7.15256e-07" y1="3.09944e-06" x2="64" y2="64" gradientUnits="userSpaceOnUse"><stop stop-color="#5345FF"/><stop offset="1" stop-color="#9C3EFF"/></linearGradient><linearGradient id="paint1_linear_62221_17917" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse"><stop stop-color="#5345FF"/><stop offset="1" stop-color="#9C3EFF"/></linearGradient></defs></svg>'
  };
  const jobsEl = document.getElementById('screen-jobs');
  APPS.jobs = jobsEl;
  const JB_LOGO = { cisco: '__ASSET:jobs/cisco.png__', figma: '__ASSET:jobs/figma.png__', openai: '__ASSET:jobs/openai.png__', atlassian: '__ASSET:jobs/atlassian.png__', yahoo: '__ASSET:jobs/yahoo.png__', microsoft: '__ASSET:jobs/microsoft.png__', tesla: '__ASSET:jobs/tesla.png__', snapchat: '__ASSET:jobs/snapchat.png__', meta: '__ASSET:jobs/meta.png__' };
  const JB_TRENDS = [['📋', 'Project Manager'], ['🎯', 'Product Manager'], ['💻', 'Software Developer'], ['📊', 'Data Analyst']];
  const JB_FILTERS = ['United States+1', 'Full-time', 'Remote'];
  // the search results: [logo, title, company, salary, [place, type, site, posted]]
  const JB_RESULTS = [
    ['cisco', 'Server Administrator', 'Cisco', '$20,000 - $25,000 / month', ['United States', 'Part-time', 'On-site', 'Today']],
    ['figma', 'Server Administrator', 'Figma', '', ['United States', 'Part-time', 'On-site', '7 days ago']],
    ['openai', 'Innovative front-end developer with a focus on user experience', 'OpenAI', '$20,000 - $25,000 / month', ['United States', 'Contract', 'Remote', '15 days ago']],
    ['atlassian', 'Back-end Developer', 'Atlassian', '', ['United States +3', 'Full-time +1', 'Remote', '8 days ago']],
    ['yahoo', 'Data scientist with machine learning expertise', 'Yahoo', '', ['United States', 'Full-time', 'On-site', '10 days ago']],
    ['microsoft', 'Graphic designer specializing in branding and digital media', 'Microsoft', '$125,000 / year', ['United States', 'Part-time', 'On-site', '5 days ago']]
  ];
  // Jobs for You: [title, company, match %, [posted, place, type, site]] (the design gives every one Atlassian's logo)
  const JB_MATCHES = [
    ['Back-end Developer', 'Atlassian', 90, ['8 days ago', 'United States +3', 'Full-time +1', 'Remote']],
    ['Front-end Developer', 'TechCorp', 85, ['10 days ago', 'Canada +2', 'Part-time', 'On-site']],
    ['UI/UX Designer', 'Designify', 88, ['12 days ago', 'United Kingdom +1', 'Contract', 'Remote']],
    ['Data Analyst', 'DataSolutions', 92, ['5 days ago', 'Australia +4', 'Full-time +2', 'Hybrid']],
    ['DevOps Engineer', 'CloudTech', 87, ['3 days ago', 'Germany', 'Full-time +1', 'Remote']],
    ['Product Manager', 'Innovatech', 90, ['1 day ago', 'France +2', 'Full-time +1', 'On-site']],
    ['System Administrator', 'NetSolutions', 84, ['2 weeks ago', 'India +3', 'Full-time +2', 'Remote']]
  ];
  const JOBS_PATH = { lp: '/jobs/', search: '/jobs/search/', match: '/jobs/matcher/', tracker: '/jobs/job-tracker/', job: '/jobs/job/1234/' };
  let jobsView = 'match', jobsState = 'main', jobsQuery = 'Frontend developer';  // state: main (the page, or Upload), process (Analyzing), dest (matches)
  const jbLogo = k => `<img class="jb-logo" src="${JB_LOGO[k]}" alt="" width="40" height="40">`;

  /* The job board: a search for any job, with trending positions under it */
  function jbHTML() {
    return `<div class="jb">
      <form class="jb-search" role="search" novalidate>
        <div class="jb-box">${JB_IC.search24}<label class="sr-only" for="jb-q">Job title or keyword</label><input id="jb-q" type="search" placeholder="Enter job title or keyword" autocomplete="off"><button class="jb-go" type="submit">Search</button></div>
      </form>
      <div class="jb-trends" role="group" aria-label="Trending positions">${JB_TRENDS.map(([e, t]) => `<button class="jb-trend" type="button" data-q="${t}"><span aria-hidden="true">${e}</span>${t}</button>`).join('')}</div>
      <div class="center"><button class="text-link jb-back" type="button" data-action="route-close">Back</button></div>
    </div>`;
  }
  function initJb(root) {
    const form = root.querySelector('form'), q = form.querySelector('input');
    // a running flow moves on to the results (its destination); otherwise they open
    const search = text => { jobsQuery = text.trim() || 'Frontend developer'; if (!flowOn()) openJobs('search'); };
    form.addEventListener('submit', e => { e.preventDefault(); search(q.value); });
    root.querySelector('.jb-trends').addEventListener('click', e => { const b = e.target.closest('[data-q]'); if (b) { q.value = b.dataset.q; search(b.dataset.q); } });
  }

  /* The jobs landing page for a visitor (/jobs/ without an account; Figma concepting-KR › 432:2424, "Search - Start
     (visitor)"): its own top bar (Log In, Create My Resume), the pink hero with the search, popular companies, trending
     positions and the latest jobs. Everything opens the search results or the job page; no account needed. */
  // the hero's floating company cards: [logo, name, centre x from the page's middle, centre y, scale, turn, faded]
  const JL_FLOAT = [['openai', 'OpenAI', -470, 241, 1.25, -11.47], ['yahoo', 'Yahoo', -157, 83, .75, -2.71, 1.5], ['microsoft', 'Microsoft', 205, 59, .5, 29.71, 1], ['meta', 'Meta', 427, 238, 1, 5.36]];
  const JL_COS = [['cisco', 'Cisco'], ['atlassian', 'Atlassian'], ['openai', 'OpenAI'], ['yahoo', 'Yahoo'], ['microsoft', 'Microsoft'], ['snapchat', 'Snapchat'], ['meta', 'Meta']];
  const JL_TRENDS = [['📋', 'Project Manager'], ['💻', 'Software Developer'], ['📊', 'Data Analyst'], ['📈', 'Business Analyst'], ['💰', 'Sales Manager']];
  // [logo, title, company, salary, posted, place, type]
  const JL_JOBS = [
    ['cisco', 'Server Administrator', 'Cisco', '$20,000 - $25,000', '5 days ago', 'Santa Clara, CA', 'Part-time'],
    ['figma', 'Server Administrator', 'Figma', '', '7 days ago', 'San Antonio, Tx', 'Part-time'],
    ['atlassian', 'Back-end Developer', 'Atlassian', '$20,000 - $25,000', '8 days ago', 'United States, California', 'Full-time'],
    ['openai', 'Innovative front-end developer with a focus on user experience', 'OpenAI', '$70,000 - $85,000', '15 days ago', 'United States, New York', 'Remote'],
    ['yahoo', 'Data scientist with machine learning expertise', 'Yahoo', '', '10 days ago', 'United States, Texas', 'Contract'],
    ['microsoft', 'Graphic designer specializing in branding and digital media', 'Microsoft', '$50,000 - $65,000', '5 days ago', 'United States, Florida', 'Part-time']
  ];
  function jlHTML() {
    const co = ([k, name]) => `<img src="${JB_LOGO[k]}" alt="" width="40" height="40"><span>${name}</span>`;
    const meta = (ic, t) => `<span class="jl-tag">${JB_IC[ic]}${t}</span>`;
    return `<header class="jl-top"><span class="jl-logo" role="img" aria-label="Kickresume">${document.querySelector('#topbar .logo').innerHTML}</span>
        <div class="jl-btns"><button class="jl-login" type="button" data-jobs="login">Log In</button><button class="jl-create" type="button" data-jobs="signup">Create My Resume</button></div></header>
      <div class="jl-hero">
        <div class="jl-floats" aria-hidden="true">${JL_FLOAT.map(([k, name, x, y, sc, turn, blur]) => `<span class="jl-float${blur ? ' is-far' : ''}" style="--x:${x}px;--y:${y}px;--s:${sc};--r:${turn}deg${blur ? `;--b:${blur}px` : ''}">${co([k, name])}</span>`).join('')}</div>
        <h1 class="jl-h" tabindex="-1">Find a job you’ll love.</h1>
        <p class="jl-sub">3,380,973 jobs waiting for you</p>
        <form class="jb-search jl-search" role="search" novalidate>
          <div class="jb-box">${JB_IC.search24}<label class="sr-only" for="jl-q">Job title or keyword</label><input id="jl-q" type="search" placeholder="Enter job title or keyword" autocomplete="off"><button class="jb-go" type="submit">Search</button></div>
        </form>
      </div>
      <section class="jl-sec" aria-labelledby="jl-cos"><h2 id="jl-cos">Popular companies</h2>
        <div class="jl-cos">${JL_COS.map(c => `<button class="jl-co" type="button" data-q="${c[1]}">${co(c)}</button>`).join('')}</div></section>
      <section class="jl-sec" aria-labelledby="jl-trends"><h2 id="jl-trends">Trending positions</h2>
        <div class="jl-trends">${JL_TRENDS.map(([e, t]) => `<button class="jl-trend" type="button" data-q="${t}"><span aria-hidden="true">${e}</span>${t}</button>`).join('')}</div></section>
      <section class="jl-sec" aria-labelledby="jl-latest"><h2 id="jl-latest">Latest jobs</h2>
        <ul class="jl-jobs">${JL_JOBS.map(([k, title, company, pay, when, place, type]) => `<li class="jl-job">${jbLogo(k)}
          <div class="jl-name"><button class="jb-open" type="button" data-jobs="job">${esc(title)}</button><span>${company}</span></div>
          <div class="jl-meta">${pay ? `<span class="jl-pay">${pay}</span>` : ''}<span class="jl-tags">${meta('clock', when)}${meta('mapPin', place)}${meta('clockFading', type)}</span></div></li>`).join('')}</ul>
        <div class="jl-more"><button type="button" data-jobs="all">Discover More Jobs</button></div></section>`;
  }

  /* The search results (All Jobs) */
  const jbMeta = (ic, t) => `<span class="jbs-tag">${JB_IC[ic]}${t}</span>`;
  function jbsHTML() {
    const row = ([logo, title, company, pay, [place, type, site, when]]) => `<li class="jbs-job">${jbLogo(logo)}
      <div class="jbs-text"><div class="jbs-line"><button class="jb-open" type="button" data-jobs="job">${esc(title)}</button>${pay ? `<span class="jbs-pay">${pay}</span>` : ''}</div>
        <div class="jbs-line"><span class="jbs-co">${company}</span><span class="jbs-tags">${jbMeta('mapPin', place)}${jbMeta('clockFading', type)}${jbMeta('briefcase', site)}${jbMeta('clock', when)}</span></div></div></li>`;
    return `<div class="jbs-col">
      <h1 class="jbs-h" tabindex="-1">Search results for ${esc(jobsQuery)}</h1>
      <form class="jbs-box" role="search" novalidate><button class="jbs-x" type="button" data-jobs="clear" aria-label="Clear the search">${JB_IC.x}</button>
        <label class="sr-only" for="jbs-q">Job title or keyword</label><input id="jbs-q" type="search" value="${esc(jobsQuery)}" placeholder="Enter job title or keyword" autocomplete="off"><button class="jbs-go" type="submit" aria-label="Search">${JB_IC.searchBtn}</button></form>
      <div class="jbs-filters"><div class="jbs-chips" role="group" aria-label="Filters"><button class="jbs-unfilter" type="button" data-jobs="unfilter" aria-label="Clear the filters">${JB_IC.funnelX}</button>${JB_FILTERS.map(f => `<button class="jbs-chip" type="button" aria-pressed="true">${f}</button>`).join('')}</div>
        <button class="jbs-btn" type="button" data-jobs="all-filters">All Filters${JB_IC.panelRight}</button></div>
      <div class="jbs-bar"><p>1,732 results</p><button class="jbs-sort" type="button" data-jobs="sort">${JB_IC.calDown}Latest${JB_IC.chevDown}</button></div>
      <ul class="jbs-list">${JB_RESULTS.map(row).join('')}</ul>
    </div>`;
  }

  /* Jobs for You (the matcher): upload a resume → Analyzing your resume… → the top matches */
  const jmCard = ([title, company, pct, [when, place, type, site]]) => `<li class="jm-job">${jbLogo('atlassian')}
    <div class="jm-text"><button class="jb-open" type="button" data-jobs="job">${title}</button><span class="jm-co">${company}</span>
      <span class="jm-tags">${jbMeta('clock', when)}${jbMeta('mapPin', place)}${jbMeta('clockFading', type)}${jbMeta('briefcase', site)}</span></div>
    <div class="jm-cta"><span class="jm-match"><b>${pct}%</b>Match</span><button class="jm-save" type="button" aria-pressed="false">${JB_IC.heart}<span>Save</span></button></div></li>`;
  function jmHTML() {
    const tabs = `<nav class="jm-tabs" aria-label="Find Jobs"><button class="is-on" type="button" aria-current="page">${JB_IC.sparkles}Jobs for You</button><button type="button" data-jobs="all">${JB_IC.search16}All Jobs</button></nav>`;
    const head = `<div class="jm-head"><h1 class="jm-h" tabindex="-1">Let’s skip the search.</h1><p>Select your resume and instantly see jobs matched to your skills and experience.</p></div>`;
    const blur = `<ul class="jm-list is-blur" aria-hidden="true" inert>${JB_MATCHES.slice(0, 3).map(jmCard).join('')}</ul>`;
    if (jobsState === 'main') return `<div class="jm-col">${tabs}${head}
      <div class="jm-drop" data-jobs="drop"><p class="jm-drop-h">Upload your resume to begin</p>
        <div class="jm-drop-b"><button class="jm-up" type="button" data-jobs="upload">Upload a File</button><p>Supports PDF, DOCX • Max 10MB<br>english only</p></div>
        <input class="jm-file" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" tabindex="-1" aria-hidden="true">
        <span class="jm-shine" aria-hidden="true"></span></div>${blur}</div>`;
    if (jobsState === 'process') return `<div class="jm-col">${tabs}${head}
      <div class="jm-load"><span class="jm-cv is-b" aria-hidden="true"><img src="__ASSET:jobs/cv-black.webp__" alt=""></span><span class="jm-cv is-a" aria-hidden="true"><img src="__ASSET:templates/square.webp__" alt=""></span><span class="jm-pill" aria-hidden="true"><b>90%</b>match</span>
        ${JB_IC.load}<div class="jm-load-b" role="status"><p class="jm-load-h">Analyzing your resume…</p><div class="jm-bar"><i></i></div><p class="jm-pct">0% Complete</p></div></div>${blur}</div>`;
    return `<div class="jm-col">${tabs}
      <div class="jm-top"><div class="jm-cvrow"><img class="jm-thumb" src="__ASSET:tailor/postcard.webp__" alt="" width="100" height="138">
          <div class="jm-cvtext"><b>My new resume_2025</b><span>Last edited 4 days ago</span>
            <button class="jm-prefs" type="button" data-jobs="prefs">Adjust Preferences</button>
            <span class="jm-tags">${jbMeta('mapPin', 'United States')}${jbMeta('clockFading', 'Full-time')}${jbMeta('briefcase', 'Remote')}${jbMeta('userStar', 'Entry-level')}<span class="jbs-tag is-wide">${JB_IC.search16}Snowman</span></span></div></div>
        <button class="jm-banner" type="button" data-jobs="upgrade"><img src="__ASSET:jobs/premium-banner.webp__" alt="" width="90" height="90"><span><b>Becoming the perfect fit can be easier. Upgrade to Premium.</b><span>Unlock the full power of Kickresume and get hired faster than ever.</span></span>${JB_IC.chevRight}</button></div>
      <h1 class="jm-top5" tabindex="-1">Your Top 5 Matches</h1>
      <ul class="jm-list">${JB_MATCHES.map(jmCard).join('')}</ul></div>`;
  }
  /* ---------- Job Tracker (/jobs/job-tracker/, Figma concepting-KR › 285:1410 My Jobs) ----------
     Tabs by status with their counts (the design's), the jobs in a table, each job's status as a menu (moves it to
     another tab), Delete, Add Job and search as toasts. JT_IC: the design's Lucide icons (currentColor). */
  const JT_IC = {
    plus: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.17 10h11.66M10 4.17v11.66"/></svg>',
    search: '<svg viewBox="0 0 16 16" fill="none" stroke="#8C8C8C" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m14 14-2.9-2.9"/><circle cx="7.33" cy="7.33" r="5.33"/></svg>',
    saved: '<path d="M1.33 6.33a3.67 3.67 0 0 1 6.4-2.45.37.37 0 0 0 .54 0 3.66 3.66 0 0 1 6.4 2.45c0 1.53-1 2.67-2 3.67l-3.66 3.54a1.33 1.33 0 0 1-2 .01L3.33 10c-1-1-2-2.13-2-3.67Z"/>',
    applied: '<path d="M7.28 8.72a1.33 1.33 0 0 0-.45-.29L1.54 6.31a.33.33 0 0 1 .02-.62l12.67-4.34a.33.33 0 0 1 .42.42L10.32 14.44a.33.33 0 0 1-.63.02L7.57 9.17a1.33 1.33 0 0 0-.29-.45Zm0 0 7.29-7.29"/>',
    interviewing: '<path d="M13.33 6a1.33 1.33 0 0 1 1.34 1.33v6.86a.5.5 0 0 1-.81.34l-1.47-1.47a1.33 1.33 0 0 0-.94-.4H6.67a1.33 1.33 0 0 1-1.34-1.33v-.66m5.34-4a1.33 1.33 0 0 1-1.34 1.33H4.55c-.35 0-.69.14-.94.39L2.14 9.86a.5.5 0 0 1-.81-.34V2.67c0-.74.6-1.34 1.34-1.34h6.66c.74 0 1.34.6 1.34 1.34v4Z"/>',
    offer: '<path d="M14.67 6.67c0-.42-.2-.82-.54-1.07L8.8 1.6a1.33 1.33 0 0 0-1.6 0L1.87 5.6c-.34.25-.54.65-.54 1.07m13.34 0v6.66c0 .74-.6 1.34-1.34 1.34H2.67c-.74 0-1.34-.6-1.34-1.34V6.67m13.34 0-5.98 3.8a1.33 1.33 0 0 1-1.38 0l-5.98-3.8"/>',
    accepted: '<path d="m6 8 1.33 1.33L10 6.67M14.67 8A6.67 6.67 0 1 1 1.33 8a6.67 6.67 0 0 1 13.34 0Z"/>',
    closed: '<path d="M2.67 5.33v7.34c0 .73.6 1.33 1.33 1.33h8c.74 0 1.33-.6 1.33-1.33V5.33M6.67 8h2.66M2 2h12c.37 0 .67.3.67.67v2c0 .36-.3.66-.67.66H2a.67.67 0 0 1-.67-.66v-2C1.33 2.3 1.63 2 2 2Z"/>',
    sort: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 5.33 4.67 2.67l2.66 2.66M4.67 2.67v10.66M7.33 8H10M7.33 10.67H12M7.33 13.33H14"/></svg>',
    chev: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg>',
    trash: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.67 7.33v4m2.66-4v4M12.67 4v9.33c0 .74-.6 1.34-1.34 1.34H4.67c-.74 0-1.34-.6-1.34-1.34V4M2 4h12M5.33 4V2.67c0-.74.6-1.34 1.34-1.34h2.66c.74 0 1.34.6 1.34 1.34V4"/></svg>'
  };
  // status: label, the row icon's colour (the design's)
  const JT_ST = { saved: ['Saved', '#FF5E59'], applied: ['Applied', '#514EEA'], interviewing: ['Interviewing', '#3190FF'], offer: ['Offer', '#3F3F3F'], accepted: ['Accepted', '#48AD43'], closed: ['Closed', '#8C8C8C'] };
  const jtIc = (k, color, w = 1.33) => `<svg viewBox="0 0 16 16" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${JT_IC[k]}</svg>`;
  // the design's counts for the jobs not shown; the shown ones add to them
  const JT_MORE = { all: 147, saved: 12, applied: 9, interviewing: 4, offer: 0, accepted: -1, closed: 1233 };
  const JT_JOBS0 = [
    ['Front-end Javascript developer Javascript developer', 'saved', 'Cisco', 'Papua New Guinea', '14/02/2026', '-'],
    ['UX Designer', 'accepted', 'Microsoft', 'Multiple locations (12)', '14/02/2026', '02/03/2025', true],
    ['Product Designer', 'interviewing', 'Snapchat', 'Multiple locations (12)', '14/02/2026', '02/03/2025'],
    ['Interaction Designer', 'accepted', 'OpenAI', 'United States, North Carolina', '14/02/2026', '02/03/2025'],
    ['Apprentice', 'saved', 'Meta Platforms, Inc.', 'Papua New Guinea', '14/02/2026', '-'],
    ['Back-end Python developer', 'closed', 'Yahoo', 'United States, North Carolina', '14/02/2026', '02/03/2025'],
    ['Warehouse manager', 'applied', 'Atlassian', 'Czech Republic', '14/02/2026', '02/03/2025'],
    ['Purchase Officer', 'saved', 'Figma', 'Redmond, Washington', '14/02/2026', '-']
  ];
  let jtJobs = JT_JOBS0.map(j => j.slice()), jtTab = 'all', jtOpen = -1;  // the design marks Saved but lists every status: All Jobs is what it shows
  function jtHTML() {
    const n = k => (k === 'all' ? jtJobs.length : jtJobs.filter(j => j[1] === k).length) + JT_MORE[k];
    const tab = (k, label) => `<button class="jt-tab" type="button" role="tab" data-jt-tab="${k}" aria-selected="${k === jtTab}" tabindex="${k === jtTab ? 0 : -1}">${k === 'all' ? '' : jtIc(k, k === jtTab ? '#FF5E59' : '#3F3F3F', k === jtTab ? 1.5 : 1)}${label} (${n(k)})</button>`;
    const rows = jtJobs.map((j, i) => [j, i]).filter(([j]) => jtTab === 'all' || j[1] === jtTab);
    return `<div class="jt-top"><h1>My Jobs</h1><button class="jt-add" type="button" data-jt="add">${JT_IC.plus}Add Job</button></div>
      <div class="jt-bar"><div class="jt-tabwrap"><div class="jt-tabs" role="tablist" aria-label="Jobs by status">${tab('all', 'All Jobs')}${Object.entries(JT_ST).map(([k, [l]]) => tab(k, l)).join('')}</div><div class="jt-line"></div></div>
        <button class="jt-find" type="button" data-jt="search" aria-label="Search your jobs">${JT_IC.search}</button></div>
      <div class="jt-card" role="tabpanel"><table class="jt-table"><thead><tr><th>Position</th><th>Status</th><th>Company</th><th>Location</th><th class="is-sort" aria-sort="ascending"><span>Date Added${JT_IC.sort}</span></th><th>Date Applied</th><th><span class="sr-only">Delete</span></th></tr></thead>
        <tbody>${rows.length ? rows.map(([[pos, st, co, loc, added, applied, link], i]) => `<tr>
          <td class="jt-pos">${link ? `<a href="#" data-jt="job">${esc(pos)}</a>` : esc(pos)}</td>
          <td class="jt-st"><button class="jt-stb" type="button" data-jt-st="${i}" aria-haspopup="menu" aria-expanded="${i === jtOpen}">${jtIc(st, JT_ST[st][1])}<span>${JT_ST[st][0]}</span>${JT_IC.chev}</button>${i === jtOpen ? `<div class="jt-menu" role="menu">${Object.entries(JT_ST).map(([k, [l]]) => `<button type="button" role="menuitemradio" data-jt-set="${k}" aria-checked="${k === st}">${l}</button>`).join('')}</div>` : ''}</td>
          <td>${esc(co)}</td><td>${esc(loc)}</td><td>${added}</td><td>${applied}</td>
          <td class="jt-x"><button class="jt-del" type="button" data-jt-del="${i}" aria-label="Delete ${esc(pos)}">${JT_IC.trash}</button></td></tr>`).join('') : `<tr><td class="jt-empty" colspan="7">No jobs here yet.</td></tr>`}</tbody></table></div>`;
  }
  function jtRedraw(focusSel) { const m = jobsEl.querySelector('.jt-main'); if (!m) return; m.innerHTML = jtHTML(); if (focusSel) m.querySelector(focusSel)?.focus(); }
  jobsEl.addEventListener('click', e => {
    if (jobsView !== 'tracker') return;
    const t = e.target.closest('[data-jt-tab]'), st = e.target.closest('[data-jt-st]'), set = e.target.closest('[data-jt-set]'), del = e.target.closest('[data-jt-del]'), a = e.target.closest('[data-jt]');
    if (t) { jtTab = t.dataset.jtTab; jtOpen = -1; return jtRedraw(`[data-jt-tab="${jtTab}"]`); }
    if (st) { const i = +st.dataset.jtSt; jtOpen = jtOpen === i ? -1 : i; return jtRedraw(jtOpen < 0 ? `[data-jt-st="${i}"]` : '.jt-menu [aria-checked="true"]'); }
    if (set) { const i = jtOpen; jtJobs[i][1] = set.dataset.jtSet; if (jtJobs[i][1] !== 'saved' && jtJobs[i][5] === '-') jtJobs[i][5] = '28/10/2026'; jtOpen = -1; jtRedraw(`[data-jt-st="${i}"]`); return toast(`Moved to ${JT_ST[jtJobs[i][1]][0]}.`); }
    if (del) { const [pos] = jtJobs[+del.dataset.jtDel]; jtJobs.splice(+del.dataset.jtDel, 1); jtOpen = -1; jtRedraw('.jt-add'); return toast(`${pos} was deleted.`); }
    if (a) { e.preventDefault(); const w = a.dataset.jt; return w === 'job' ? openRoute(findRoute('/jobs/job/1234/')) : toast(w === 'add' ? 'Add Job opens a form for a job from anywhere.' : 'Search filters your jobs.'); }
    if (jtOpen >= 0 && !e.target.closest('.jt-menu')) { jtOpen = -1; jtRedraw(); }
  });
  jobsEl.addEventListener('keydown', e => {
    if (jobsView !== 'tracker') return;
    if (e.key === 'Escape' && jtOpen >= 0) { const i = jtOpen; jtOpen = -1; return jtRedraw(`[data-jt-st="${i}"]`); }
    const tab = e.target.closest('[data-jt-tab]'), item = e.target.closest('.jt-menu button');
    const step = ['ArrowRight', 'ArrowDown'].includes(e.key) ? 1 : ['ArrowLeft', 'ArrowUp'].includes(e.key) ? -1 : 0;
    if (!step || (!tab && !item)) return;
    e.preventDefault();
    const list = [...(tab ? jobsEl.querySelectorAll('[data-jt-tab]') : jobsEl.querySelectorAll('.jt-menu button'))], k = (list.indexOf(tab || item) + step + list.length) % list.length;
    if (tab) list[k].click(); else list[k].focus();
  });

  /* ---------- The job page (/jobs/job/{id}/, Figma concepting-KR › 294:3680) ----------
     A jobs app page (jobsView 'job'): the job with Save Job and Apply, Back to Search, and Prepare for this job (Tailor
     Your Resume open; Practice Job Interview and Write a Cover Letter fold out in its place). Tailor Your Resume opens
     two modals over the page (the user's rule): Pick a resume to tailor (jobsState 'pick'), then Tailor your resume to
     a job ('setup', the tailoring setup's job version); Tailor Now goes on to the tailoring screen (JTP's process pane,
     shown under the job page's URL). Without a CV the method screen comes first and the setup follows (cvThen). */
  const JTP = '/jobs/job/1234/tailor/';  // the tailoring's route: an inner key, its address is the job page's (shown)
  const JD_IC = {
    back: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.667" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 15.833 4.167 10 10 4.167M15.833 10H4.167"/></svg>',
    heart: '<svg viewBox="0 0 16 16" fill="none" stroke="#3F3F3F" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1.333 6.333a3.667 3.667 0 0 1 6.394-2.451.37.37 0 0 0 .545 0 3.66 3.66 0 0 1 6.395 2.451c0 1.527-1 2.667-2 3.667l-3.661 3.542a1.333 1.333 0 0 1-2 .012L3.333 10c-1-1-2-2.133-2-3.667Z"/></svg>',
    chev: '<svg viewBox="0 0 20 20" fill="none" stroke="#3F3F3F" stroke-width="1.667" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 7.5 5 5 5-5"/></svg>',
    check: '<svg viewBox="0 0 8 8" fill="none" stroke="#48AD43" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.667 2 3 5.667 1.333 4"/></svg>',
    pin: TRL_IC.pin, clock: TRL_IC.clock, fading: TRL_IC.fading, brief: TRL_IC.brief,
    star: '<path d="M10.7 8.41a.67.67 0 0 1 1.27.02l.49.97c.05.09.12.17.2.24.09.06.19.1.29.12l1.09.17a.67.67 0 0 1 .39 1.2l-.78.78a.67.67 0 0 0-.19.58l.17 1.07a.67.67 0 0 1-1.03.76l-.98-.5a.67.67 0 0 0-.6 0l-.98.5a.67.67 0 0 1-1.03-.76l.17-1.07a.67.67 0 0 0-.19-.58l-.77-.77a.67.67 0 0 1 .38-1.21l1.09-.17c.1-.02.2-.06.29-.12.08-.07.15-.15.2-.24l.5-.98ZM5.333 10h-.666A2.667 2.667 0 0 0 2 12.667V14"/><circle cx="6.667" cy="4.667" r="2.667"/>',
    visa: '<path d="M9 5.334H7M10 1.334l-.667 1.333h2a1.333 1.333 0 0 1 1.334 1.334v9.333a1.333 1.333 0 0 1-1.334 1.333H4.667a1.333 1.333 0 0 1-1.334-1.333V4.001a1.333 1.333 0 0 1 1.334-1.334h2M11.266 14.668a3.333 3.333 0 0 0-6.533 0M6 1.334l2 4"/><circle cx="8" cy="10" r="2"/>'
  };
  const JD = { title: 'Server Administrator', company: 'Cisco', logo: '__ASSET:jobs/cisco.png__', pay: '$20,000 - $25,000',
    chips: [['pin', 'United States |  London | United Arab Emirates'], ['clock', '5 days ago'], ['fading', 'Part-time | Full-time | Any-time'], ['brief', 'Remote'], ['star', 'Senior Level'], ['visa', 'Visa Sponsorship']],
    resp: ['Support the Store Manager in day-to-day store operations', 'Establish and maintain high standards of Guest Services', 'Maximize sales and profitability through staff development', 'Control expenses and minimize shrinkage', 'Oversee merchandising and inventory control in line with company policies', 'Ensure compliance with all Company procedures and standards'],
    req: ['Minimum age of 18', 'Ability to stand, walk, climb ladders, and lift up to 50 pounds for over 8 hours', 'Prior retail and/or management experience required'] };
  // Prepare for this job: [id, header, title, line, button]
  const JD_PREP = [['tailor', 'Tailor Your Resume', 'Be the perfect match.', 'Have your resume tailored to this job post in seconds.', 'Tailor Your Resume'],
    ['interview', 'Practice Job Interview', 'Walk in prepared.', 'Practice the questions this job is most likely to ask.', 'Practice Interview'],
    ['cover', 'Write a Cover Letter', 'Increase your chances.', 'Tailor your cover letter to a specific job, get hired faster.', 'Tailor a Cover Letter']];
  let jdOpen = 'tailor', jdSaved = false;
  const jdIc = k => `<svg viewBox="0 0 16 16" fill="none" stroke="#3F3F3F" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${JD_IC[k]}</svg>`;
  function jdHTML() {
    const ul = items => `<ul>${items.map(t => `<li>${t}</li>`).join('')}</ul>`;
    const text = `<p>Assistant Store Manager</p><p>&nbsp;</p><p>Responsibilities:</p>${ul(JD.resp)}<p>Requirements:</p>${ul([...JD.req, ...JD.resp, ...JD.req, ...JD.resp, ...JD.req])}`;
    const pic = `<div class="jd-pic" aria-hidden="true"><img src="__ASSET:tailor/rectangular.webp__" alt=""><span class="jd-tag"><img src="__ASSET:jobs/microsoft.png__" alt=""><span>Front-End developer at Microsoft<i>${JD_IC.check}Tailoring completed!</i></span></span></div>`;
    return `<div class="jd-col"><h1 class="jd-h">Job detail for ${JD.title}</h1>
      <button class="jd-back" type="button" data-jd="back">${JD_IC.back}Back to Search</button>
      <div class="jd-row"><article class="jd-card" aria-label="${JD.title} at ${JD.company}"><div class="jd-top">
          <div class="jd-id"><img src="${JD.logo}" alt=""><div class="jd-name"><b>${JD.title}</b><button class="jd-co" type="button" data-jd="company">${JD.company}</button></div>
            <div class="jd-acts"><button class="jd-save" type="button" data-jd="save" aria-pressed="${jdSaved}">${JD_IC.heart}${jdSaved ? 'Saved' : 'Save Job'}</button><button class="jd-apply" type="button" data-jd="apply">Apply</button></div></div>
          <div class="jd-pay">${JD.pay}</div>
          <div class="jd-chips">${JD.chips.map(([ic, t]) => `<span>${jdIc(ic)}${t}</span>`).join('')}</div></div>
        <div class="jd-text">${text}</div></article>
        <aside class="jd-prep" aria-labelledby="jd-prep-h"><div><h2 id="jd-prep-h">Prepare for this job</h2><p>Use Kickresume to increase your chances.</p></div>
          <div class="jd-items">${JD_PREP.map(([id, head, title, line, cta]) => `<div class="jd-item${id === jdOpen ? ' is-open' : ''}" data-jd-item="${id}">
            <button type="button" data-jd="open" aria-expanded="${id === jdOpen}">${head}${JD_IC.chev}</button>
            <div class="jd-body"><div><b>${title}</b><p>${line}</p>${id === 'tailor' ? pic : ''}</div><button class="jd-go" type="button" data-jd="${id}">${cta}</button></div></div>`).join('')}</div></aside></div></div>`;
  }
  // the person's resumes to tailor (My Documents' ones)
  const tjCvs = () => [[docName(), '__ASSET:docs/resume-thumb.webp__'], ['[Rewritten] ' + docName(), '__ASSET:tools/resume.webp__']];
  function tjOpen(step) {
    tjClose(true);
    const pop = document.createElement('div');
    pop.className = 'wr-pop tj-pop';
    const inner = step === 'pick'
      ? `<div class="tj-pick" role="dialog" aria-modal="true" aria-labelledby="tj-h"><h2 id="tj-h">Pick a resume to tailor</h2>
          <p>Kickresume creates a tailored version of your resume that fits this role perfectly using your experience and the job details.</p>
          <div class="tj-cvs" role="radiogroup" aria-labelledby="tj-h">${tjCvs().map(([name, img], i) => `<button class="tj-cv" type="button" role="radio" aria-checked="false" tabindex="${i ? -1 : 0}"><img src="${img}" alt=""><span>${esc(name)}</span></button>`).join('')}</div>
          <div class="tj-foot"><button class="rt-btn rt-ghost" type="button" data-tj="cancel">Cancel</button><button class="rt-btn rt-ai" type="button" data-tj="continue" disabled>Continue</button></div></div>`
      : trlHTML(true).replace('class="rt-card trl"', 'class="rt-card trl tj-trl" role="dialog" aria-modal="true"');
    pop.innerHTML = `<div class="wr-back" data-tj="cancel"></div><div class="wr-box tj-box">${inner}</div>`;
    document.body.appendChild(pop);
    if (step === 'setup') {
      const form = pop.querySelector('form'), desc = form.querySelector('.trl-desc');
      const setLevel = opt => { form.querySelectorAll('.trl-opt').forEach(o => { o.setAttribute('aria-checked', String(o === opt)); o.tabIndex = o === opt ? 0 : -1; }); desc.textContent = TRL_LEVELS.find(l => l[0] === opt.dataset.level)[3]; };
      form.addEventListener('click', e => { const o = e.target.closest('.trl-opt'); if (o) setLevel(o); if (e.target.closest('.trl-cancel')) tjCancel(); });
      form.querySelector('.trl-seg').addEventListener('keydown', e => {
        const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (!k) return;
        e.preventDefault(); const opts = [...form.querySelectorAll('.trl-opt')], at = opts.findIndex(o => o.getAttribute('aria-checked') === 'true'), nx = opts[(at + k + opts.length) % opts.length]; setLevel(nx); nx.focus();
      });
      form.addEventListener('submit', e => { e.preventDefault(); tjTailor(); });
    }
    pop.addEventListener('click', e => {
      const cv = e.target.closest('.tj-cv'), b = e.target.closest('[data-tj]');
      if (cv) { pop.querySelectorAll('.tj-cv').forEach(c => { c.setAttribute('aria-checked', String(c === cv)); c.tabIndex = c === cv ? 0 : -1; }); pop.querySelector('[data-tj="continue"]').disabled = false; return; }
      if (!b) return;
      if (b.dataset.tj === 'cancel') return tjCancel();
      if (b.dataset.tj === 'continue') { if (flowNow && flowNow.steps[flowAt] && flowNow.steps[flowAt].match === `route:${JOBS_PATH.job}#pick` && flowNext()) return; jobsState = 'setup'; tjOpen('setup'); flowSync(); }
    });
    pop.addEventListener('keydown', e => {
      if (e.key === 'Escape') return tjCancel();
      const cv = e.target.closest('.tj-cv'), k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (!cv || !k) return;
      e.preventDefault(); const all = [...pop.querySelectorAll('.tj-cv')], nx = all[(all.indexOf(cv) + k + all.length) % all.length]; nx.click(); nx.focus();
    });
    (pop.querySelector('.tj-cv, .trl-go')).focus();
    if (!reduce) pop.animate([{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard });
  }
  /* Pick a resume (the user's rule: a logged-in person with a CV): their resumes or a new one, in the job page's modal.
     go: what opens with the resume picked; a new one goes to CV creation (in a run, the feature's no-CV run) */
  function cvPick(path, go) {
    cvPickClose(true); pickOpen = path;
    const pop = document.createElement('div');
    pop.className = 'wr-pop tj-pop cvp-pop';
    const tile = ([name, img], i) => `<button class="tj-cv" type="button" role="radio" aria-checked="false" tabindex="${i ? -1 : 0}"><img src="${img}" alt=""><span>${esc(name)}</span></button>`;
    pop.innerHTML = `<div class="wr-back" data-cvp="cancel"></div><div class="wr-box tj-box cvp-box"><div class="tj-pick" role="dialog" aria-modal="true" aria-labelledby="cvp-h">
      <h2 id="cvp-h">Pick a resume ${PICK_VERB[path] || 'to use'}</h2><p>Use one of your resumes, or create a new one.</p>
      <div class="tj-cvs" role="radiogroup" aria-labelledby="cvp-h">${tjCvs().map(tile).join('')}<button class="tj-cv cvp-new" type="button" role="radio" aria-checked="false" tabindex="-1" data-new><span class="cvp-plus" aria-hidden="true">+</span><span>New resume</span></button></div>
      <div class="tj-foot"><button class="rt-btn rt-ghost" type="button" data-cvp="cancel">Cancel</button><button class="rt-btn rt-ai" type="button" data-cvp="continue" disabled>Continue</button></div></div></div>`;
    document.body.appendChild(pop);
    const step = () => flowNow && flowNow.steps[flowAt] && flowNow.steps[flowAt].match === `route:${path}#pick`;
    pop.addEventListener('click', e => {
      const cv = e.target.closest('.tj-cv'), b = e.target.closest('[data-cvp]');
      if (cv) { pop.querySelectorAll('.tj-cv').forEach(c => { c.setAttribute('aria-checked', String(c === cv)); c.tabIndex = c === cv ? 0 : -1; }); pop.querySelector('[data-cvp="continue"]').disabled = false; return; }
      if (!b) return;
      if (b.dataset.cvp === 'cancel') { cvPickClose(); return flowSync(); }
      const fresh = !!pop.querySelector('.cvp-new[aria-checked="true"]');
      const inRun = step(); cvPickClose();
      if (!fresh) return inRun ? flowNext() : go();
      // a new resume: CV creation, then the feature (a run goes on as the feature's run without a CV)
      const nocv = inRun && FEATURES.find(f => f.path === path && fromOf(f) === 'app' && f.cv === false);
      if (nocv) return startFeature(nocv.id);
      askCvFor(findRoute(path));
    });
    pop.addEventListener('keydown', e => {
      if (e.key === 'Escape') { cvPickClose(); return flowSync(); }
      const cv = e.target.closest('.tj-cv'), k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (!cv || !k) return;
      e.preventDefault(); const all = [...pop.querySelectorAll('.tj-cv')], nx = all[(all.indexOf(cv) + k + all.length) % all.length]; nx.click(); nx.focus();
    });
    pop.querySelector('.tj-cv').focus();
    if (!reduce) pop.animate([{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard });
    flowSync();
  }
  function cvPickClose(instant) {
    const pop = document.querySelector('.cvp-pop'); pickOpen = null;
    if (!pop) return;
    if (instant || reduce) return pop.remove();
    pop.animate([{ opacity: 1 }, { opacity: 0 }], { duration: DUR.fast, easing: EASE.exit }).finished.catch(() => {}).then(() => pop.remove());
  }
  function tjClose(instant) {
    const pop = document.querySelector('.tj-pop');
    if (!pop) return;
    if (instant || reduce) return pop.remove();
    pop.animate([{ opacity: 1 }, { opacity: 0 }], { duration: DUR.fast, easing: EASE.exit }).finished.catch(() => {}).then(() => pop.remove());
  }
  // Cancel, Escape or the backdrop: back to the job page (in a run, to its job page step)
  function tjCancel() {
    tjClose(); jobsState = 'main';
    const i = flowNow ? flowNow.steps.findIndex(st => st.match === `route:${JOBS_PATH.job}#main`) : -1;
    if (i >= 0 && i < flowAt) { flowAt = i; flowNow.skipped = false; renderFlowBar(); }
    if (current === 'jobs') { setHash(JOBS_PATH.job); jobsEl.querySelector('[data-jd="tailor"]')?.focus(); }
  }
  // Tailor Now: the tailoring screen (a run's next step, or the tailoring route's process pane)
  function tjTailor() {
    tjClose(); jobsState = 'main';
    if (flowNow && flowNow.steps[flowAt] && flowNow.steps[flowAt].match === `route:${JOBS_PATH.job}#setup` && flowNext()) return;
    openRoute(findRoute(JTP), false, 'process');
  }
  // Tailor Your Resume: pick a resume, or without one make it first (the setup follows: the route's cvThen)
  function tjStart() {
    if (asGuest()) return signupPop('tailor your resume');
    if (!cvUploaded) return askCvFor(findRoute(JTP));
    jobsState = 'pick'; tjOpen('pick'); flowSync();
  }
  function jdClick(e) {
    const b = e.target.closest('[data-jd]'); if (!b) return;
    const a = b.dataset.jd;
    if (a === 'back') return openJobs('search');
    if (a === 'company') return openRoute(findRoute('/jobs/organization/kickresume/'));
    if (a === 'save') { if (asGuest()) return signupPop('save jobs to your Job Tracker'); jdSaved = !jdSaved; b.setAttribute('aria-pressed', String(jdSaved)); b.lastChild.textContent = jdSaved ? 'Saved' : 'Save Job'; return toast(jdSaved ? 'Saved to your Job Tracker.' : 'Removed from your Job Tracker.'); }
    if (a === 'apply') return toast('Applying isn’t part of this prototype.');
    if (a === 'open') { jdOpen = b.closest('[data-jd-item]').dataset.jdItem; jobsEl.querySelectorAll('[data-jd-item]').forEach(it => { const on = it.dataset.jdItem === jdOpen; it.classList.toggle('is-open', on); it.firstElementChild.setAttribute('aria-expanded', String(on)); }); return jobsEl.querySelector(`[data-jd-item="${jdOpen}"] .jd-go`).focus(); }
    if (a === 'tailor') return tjStart();
    if (a === 'interview') return openRoute(findRoute('/dashboard/create-interview/'));
    if (a === 'cover') return openRoute(findRoute('/dashboard/create-ai-cover-from-job/'));
  }
  function jobsHTML() { return jobsView === 'lp' ? `<main class="jl">${jlHTML()}</main>` : jobsView === 'job' ? `${appNavHTML('jobs')}<main class="jd-main">${jdHTML()}</main>` : jobsView === 'tracker' ? `${appNavHTML('tracker')}<main class="jt-main">${jtHTML()}</main>` : `${appNavHTML('jobs')}<main class="jbs-main">${jobsView === 'search' ? jbsHTML() : jmHTML()}</main>`; }

  /* Open a jobs page (or one of its states); between them the page stays and its content fades over */
  async function openJobs(view, state) {
    // on the job page, its modals open and close over it (no redraw)
    if (current === 'jobs' && jobsView === 'job' && view === 'job' && jobsEl.querySelector('.jd-main')) {
      jobsState = state || 'main'; syncApp(JOBS_PATH.job);
      if (jobsState === 'pick' || jobsState === 'setup') tjOpen(jobsState); else tjClose();
      return;
    }
    tjClose(true);
    jobsView = view;
    jobsState = state || (view === 'match' && cvUploaded ? 'dest' : 'main');
    const fill = () => { jobsEl.className = 'jobs is-' + view; jobsEl.innerHTML = jobsHTML(); if (jobsState === 'process') runMatching(); };
    if (current !== 'jobs') await enterApp(jobsEl, fill, 'jobs', JOBS_PATH[view]);
    else {
      clearTimers(); setMore(false);
      await leaveOut(jobsEl, true);
      fill(); placeVer(); window.scrollTo(0, 0); device.scrollTop = 0;
      syncApp(JOBS_PATH[view]); riseIn(jobsEl, true); landFocus(jobsEl);
    }
    if (view === 'job' && current === 'jobs' && (jobsState === 'pick' || jobsState === 'setup')) tjOpen(jobsState);
  }
  jobsEl.addEventListener('click', e => { if (jobsView === 'job') jdClick(e); });
  // Analyzing your resume…: the bar fills, then the matches (or, in a run, what its Result leads to)
  function runMatching() {
    const bar = jobsEl.querySelector('.jm-bar > i'), pct = jobsEl.querySelector('.jm-pct'), T = 3200, t0 = performance.now();
    const tick = () => {
      if (!bar.isConnected) return;
      const k = Math.min(1, (performance.now() - t0) / T);
      bar.style.width = (k * 100) + '%'; pct.textContent = Math.round(k * 100) + '% Complete';
      if (k < 1) return requestAnimationFrame(tick);
      later(() => { if (current !== 'jobs' || jobsState !== 'process') return; flowNow && flowNow.steps[flowAt].match === 'route:/jobs/matcher/#process' ? processDone() : openJobs('match', 'dest'); }, 300);
    };
    requestAnimationFrame(tick);
  }
  // a resume picked (or dropped): it is the person's CV from now on, and the analysis starts
  function jmUpload(file) {
    setCv(true, file ? file.name.replace(/\.[^.]+$/, '') : '');
    if (!flowOn()) openJobs('match', 'process');
  }
  jobsEl.addEventListener('click', e => {
    const b = e.target.closest('[data-jobs], [data-q], .jm-save, .jbs-chip');
    if (!b) return;
    if (b.matches('.jm-save') && asGuest()) return openAuth('signup');
    if (b.matches('.jm-save')) { const on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', String(on)); b.querySelector('span').textContent = on ? 'Saved' : 'Save'; return; }
    if (b.matches('.jbs-chip')) return b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
    const a = b.dataset.jobs;
    if (b.dataset.q) { jobsQuery = b.dataset.q; return openJobs('search'); }  // the landing page's companies and positions
    if (a === 'login') { guestBack = () => openRoute(findRoute('/jobs/')); return openAuth('login'); }  // back to the job board, signed in
    if (a === 'signup') return openAuth('signup');
    if (a === 'job') openRoute(findRoute('/jobs/job/1234/'));
    else if (a === 'all') openJobs('search');
    else if (a === 'upload' || a === 'drop') jobsEl.querySelector('.jm-file').click();
    else if (a === 'clear') { const q = jobsEl.querySelector('#jbs-q'); q.value = ''; q.focus(); }
    else if (a === 'unfilter') jobsEl.querySelectorAll('.jbs-chip').forEach(c => c.setAttribute('aria-pressed', 'false'));
    else if (a === 'all-filters') toast('All the filters open in a side panel here.');
    else if (a === 'sort') toast('Sorting (Latest, Relevance, Salary) opens here.');
    else if (a === 'prefs') toast('Your job preferences (location, type, level) open here.');
    else if (a === 'upgrade') openUpgrade(upgPlan);
  });
  jobsEl.addEventListener('change', e => { if (e.target.matches('.jm-file') && e.target.files[0]) jmUpload(e.target.files[0]); });
  jobsEl.addEventListener('submit', e => {
    if (e.target.matches('.jl-search')) { e.preventDefault(); jobsQuery = e.target.querySelector('input').value.trim() || 'Frontend developer'; return openJobs('search'); }
    if (!e.target.matches('.jbs-box')) return;
    e.preventDefault();
    const q = e.target.querySelector('input').value.trim();
    if (!q) return e.target.querySelector('input').focus();
    jobsQuery = q;
    const h = jobsEl.querySelector('.jbs-h'); h.textContent = 'Search results for ' + q;
    if (!reduce) play(jobsEl.querySelector('.jbs-list'), [{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard });
  });
  // the drop zone takes a dragged file too
  jobsEl.addEventListener('dragover', e => { const z = e.target.closest('.jm-drop'); if (z) { e.preventDefault(); z.classList.add('is-over'); } });
  jobsEl.addEventListener('dragleave', e => { const z = e.target.closest('.jm-drop'); if (z && !z.contains(e.relatedTarget)) z.classList.remove('is-over'); });
  jobsEl.addEventListener('drop', e => { const z = e.target.closest('.jm-drop'); if (!z) return; e.preventDefault(); z.classList.remove('is-over'); jmUpload(e.dataTransfer.files[0]); });

  /* ---------- Select your template (/dashboard/create-resume/) ----------
     Recreated from Figma (Kickresume 3.0 › 61941:33517). A page of its own (its own top bar and background), so like
     Sign up it replaces the logo bar and the page (APPS.tpl). The chips filter the templates; All shows the design's
     twelve (Dotts twice). A template carries data-wire: it moves a running flow on, otherwise it opens the editor.
     × goes back where the person came from. */
  const TPS_T = {
    bubbles: ['Bubbles', 'popular creative'], ios: ['iOS', 'ats popular'], doodle: ['Doodle', 'creative'], dotts: ['Dotts', 'ats popular'],
    stanford: ['Stanford', 'ats'], rectangular: ['Rectangular', 'ats popular'], visibility: ['Visibility', 'popular creative'],
    ribbon: ['Ribbon', 'creative'], square: ['Square', 'ats'], vegan: ['Vegan', 'creative'], sharp: ['Sharp', 'ats popular']
  };
  const TPS_IMG = {
    bubbles: '__ASSET:templates/bubbles.webp__', ios: '__ASSET:templates/ios.webp__', doodle: '__ASSET:templates/doodle.webp__',
    dotts: '__ASSET:templates/dotts.webp__', stanford: '__ASSET:templates/stanford.webp__', rectangular: '__ASSET:templates/rectangular.webp__',
    visibility: '__ASSET:templates/visibility.webp__', ribbon: '__ASSET:templates/ribbon.webp__', square: '__ASSET:templates/square.webp__',
    vegan: '__ASSET:templates/vegan.webp__', sharp: '__ASSET:templates/sharp.webp__', bg: '__ASSET:templates/kr-bg.svg__'
  };
  const TPS_ORDER = ['bubbles', 'ios', 'doodle', 'dotts', 'stanford', 'rectangular', 'dotts', 'visibility', 'ribbon', 'square', 'vegan', 'sharp'];
  const TPS_CATS = [['all', 'All templates'], ['ats', 'ATS Friendly'], ['popular', 'Popular'], ['creative', 'Creative']];
  const tplEl = document.getElementById('screen-tpl');
  APPS.tpl = tplEl;
  let tpsCat = 'all', tplBack = 'intent', tplBackRoute = null;
  const tpsList = () => tpsCat === 'all' ? TPS_ORDER : Object.keys(TPS_T).filter(k => TPS_T[k][1].split(' ').includes(tpsCat));
  const tpsCards = () => tpsList().map(k => `<button class="tps-card" type="button" data-wire="tpl" aria-label="${TPS_T[k][0]} template"><img src="${TPS_IMG[k]}" alt="" width="300" height="413"></button>`).join('');
  function tpsHTML() {
    return `<div class="tps-bg" aria-hidden="true"><img src="${TPS_IMG.bg}" alt=""></div>
      <header class="tps-top"><button class="tps-logo" type="button" data-action="restart" aria-label="Kickresume, back to start">${document.querySelector('#topbar .logo').innerHTML}</button>
        <button class="tps-x" type="button" data-tps="close" aria-label="Close">${UPG_IC.x}</button></header>
      <div class="tps-body"><div class="tps-head"><h1>Select your template.</h1>
        <div class="tps-chips" role="group" aria-label="Show">${TPS_CATS.map(([k, l]) => `<button class="tps-chip" type="button" data-cat="${k}" aria-pressed="${k === tpsCat}">${l}</button>`).join('')}</div></div>
        <div class="tps-grid">${tpsCards()}</div></div>`;
  }
  function openTemplates() {
    if (current === 'tpl') return;
    // coming back from a screen opened here keeps where × leads
    if (!(current === 'route' && routeBack === 'tpl') && !(current === 'upgrade' && upgBack === 'tpl')) { tplBack = current; tplBackRoute = current === 'route' ? routeNow : null; }
    tpsCat = 'all';
    return enterApp(tplEl, () => { tplEl.innerHTML = tpsHTML(); }, 'tpl', '/dashboard/create-resume/');
  }
  tplEl.addEventListener('click', e => {
    if (e.target.closest('[data-tps="close"]')) return goBack(tplBack, tplBackRoute, true);
    const c = e.target.closest('.tps-chip');
    if (!c || c.dataset.cat === tpsCat) return;
    // another filter: the chips swap, the templates fade over
    tpsCat = c.dataset.cat;
    tplEl.querySelectorAll('.tps-chip').forEach(b => b.setAttribute('aria-pressed', String(b === c)));
    const grid = tplEl.querySelector('.tps-grid');
    grid.innerHTML = tpsCards();
    const anims = [...grid.children].map((x, i) => play(x, reduce ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }],
      { duration: DUR.base, delay: Math.min(i, 8) * STAGGER, easing: EASE.standard }));
    Promise.all(anims.map(a => a.finished.catch(() => {}))).then(() => anims.forEach(a => a.cancel()));
  });

  docsEl.addEventListener('click', e => {
    const b = e.target.closest('[data-md]');
    if (!b) return;
    const a = b.dataset.md;
    if (a === 'open') openEdit();
    else if (a === 'more') toast('Rename, duplicate, download and delete are in this menu.');
    else if (a === 'tab') toast(`${b.textContent} aren’t part of this prototype.`);
    else if (a === 'example') toast('Examples open the template gallery; that isn’t part of this prototype.');
    else if (a === 'page') toast('Only the first page of resumes is part of this prototype.');
  });
  toolEl.addEventListener('click', e => {
    const b = e.target.closest('[data-tl]');
    if (!b) return;
    const a = b.dataset.tl;
    if (a === 'edit') openEdit();
    else if (a === 'chk') { const open = b.getAttribute('aria-expanded') !== 'true'; b.setAttribute('aria-expanded', String(open)); b.nextElementSibling.hidden = !open; }
    else if (a === 'key') toolEl.querySelector(`[data-sec="${b.dataset.to}"]`).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    else if (a === 'details') toast(`${b.firstChild.textContent.trim()}: the paragraphs that are too long or too short are listed here.`);
    else if (a === 'cat') { tlCat = (tlCat + +b.dataset.dir + TL_CATS.length) % TL_CATS.length; toolEl.querySelector('.tl-cat em').textContent = TL_CATS[tlCat]; }
    else if (a === 'proofbuy') notYet(b, 'Opening checkout…', 'Paying for proofreading isn’t part of this prototype.');
    else if (a === 'translate') busy(b, 'Translating…', 1400, () => toast('A Spanish copy of the resume would open in the editor.'));
  });
  toolEl.addEventListener('submit', e => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    if (!needFilled([input])) return;
    busy(e.target.querySelector('[type="submit"]'), 'Generating…', 1400, () => toast(`Advice for “${input.value.trim()}” would replace the skills below.`));
  });

  /* ---------- Wireframes (Wire) for screens that have no design yet ----------
     Grey, system font, Wire's classes only, so they read as "needs design" next to the recreated screens.
     Buttons carry data-wire; in a flow they move it on, otherwise they do the obvious thing. */
  const wLines = (n = 2) => `<div class="wf-lines">${'<i class="wf-line"></i>'.repeat(n)}</div>`;
  const wField = (label, value = '', kind = '') => `<div class="wf-field">${label}<span class="wf-input${kind ? ' wf-input--' + kind : ''}">${value}</span></div>`;
  // the processing state for the result picked in More options › Result: [headline, subheadline, alert, buttons]
  const stateView = f => { const noun = f.noun || 'result';
    return procResult === 'ok' ? [`Your ${noun} ${/s$/.test(noun) ? 'are' : 'is'} ready`, 'Everything went through.', 'wf-alert--success', '<button class="wf-btn wf-btn--primary" type="button" data-wire="state-next">Continue</button>']
      : procResult === 'fail' ? [f.fail || 'We couldn’t use what you gave us', 'The input can’t be used (an unreadable file, a private profile, an empty job ad). Fix it and try again.', 'wf-alert--error', '<button class="wf-btn" type="button" data-wire="state-retry">Change the input</button>']
      : ['Something went wrong', 'It broke on our side. Nothing you entered is lost.', 'wf-alert--error', '<button class="wf-btn wf-btn--primary" type="button" data-wire="state-again">Try again</button>']; };
  const wShell = (label, body, notes = '', width = 440) => `<div class="wf wf-screen rt-wire" style="width:min(100%,${width}px)"><span class="wf-screen-label">Wireframe · ${label}</span>${body}${notes}</div>`;
  const wNote = text => `<template class="wf-note-src">${text}</template>`;  // shown by syncNote, outside the screen
  const wSocial = () => `<button class="wf-btn" type="button" data-wire="signup">Continue with Google</button><button class="wf-btn" type="button" data-wire="signup">Continue with LinkedIn</button><p class="t-small">or with email</p>`;
  const WIRE_TOOLS = {
    'rewrite-resume': ['Rewrite your resume', [['Resume', 'My Kickresume', 'select'], ['Tone', 'Professional', 'select']], 'Rewrite with AI', 'Result: the rewritten resume in the editor, changes highlighted. Not designed yet.'],
  };
  const START_WAYS = { 'Cover letter editor': [['cover-ai', 'Write it with AI'], ['cover-sample', 'From a sample']], 'Website editor': [['site-cv', 'From my resume'], ['site-linkedin', 'Import from LinkedIn']] };
  const WIRE = {
    wall: () => wShell('Sign-up wall', `<div class="wf-card wf-stack">
        ${wLines(1)}
        ${wSocial()}${wField('Email', 'you@example.com')}${wField('Password', '••••••••')}
        <button class="wf-btn wf-btn--primary" type="button" data-wire="signup">Create account</button>
      </div>`, wNote('Guests reach this when processing is done, before the destination (Flow 2’s guest features). Their work is kept and opens right after sign-up.')),
    tool: o => { const [title, fields, cta, note] = WIRE_TOOLS[o.tool];
      const body = `<div class="wf-card wf-stack">${wLines(2)}${fields.map(([l, v, k]) => wField(l, v, k)).join('')}<div class="wf-row wf-spread"><button class="wf-btn wf-btn--ghost" type="button" data-action="route-close">Cancel</button><button class="wf-btn wf-btn--primary" type="button" data-wire="tool">${cta}</button></div></div>`;
      return wShell(title, body, wNote(note), 520); },
    /* The flow stages every feature shares (see FLOW_T): one screen each, only the wording changes */
    process: o => wShell('Data processing', `<div class="wf-card wf-stack">
        <div class="wf-progress" style="--value:55%"></div>
        <div class="wf-stack wf-gap-sm">${(o.f.psteps || ['Reading what you gave us', 'Working on it', 'Finishing up']).map((t, i) => `<span class="wf-check${i ? '' : ' wf-check--on'}">${t}</span>`).join('')}</div>
        <div class="wf-row wf-spread"><span></span><button class="wf-btn wf-btn--ghost wf-btn--sm" type="button" data-wire="process">Skip</button></div>
      </div>`, wNote(`Data processing (Flows 1–3): one screen for every feature; only the wording and the steps change. It moves on by itself; what follows depends on More options › Result.`), 520),
    state: o => { const r = procResult, view = stateView(o.f);
      return wShell('Processing state', `<div class="wf-card wf-stack">
        <div class="wf-row">${[['ok', 'Completed'], ['fail', 'Failed'], ['error', 'Error']].map(([k, l]) => `<button class="wf-btn wf-btn--sm${k === r ? ' wf-btn--primary' : ' wf-btn--ghost'}" type="button" data-wire="result" data-result="${k}" aria-pressed="${k === r}">${l}</button>`).join('')}</div>
        <div class="wf-alert ${view[2]}">${['Completed', 'Failed', 'Error'][['ok', 'fail', 'error'].indexOf(r)]}</div>${wLines(2)}
        <div class="wf-row">${view[3]}</div>
      </div>`, wNote('Processing state (Flows 1–3): Completed goes straight on to the destination (this screen shows only when you jump to it); Failed sends the person back to fix the input; Error lets them try again. Pick one under More options › Result.'), 520); },
    // a new cover letter or website opens with the default template; it can also start another way (the user's rule):
    // a cover letter with AI (its data) or from a sample, a website from an existing CV or a LinkedIn import
    dest: o => wShell(o.title, (START_WAYS[o.title] ? `<div class="wf-row"><span class="t-small">Or start</span>${START_WAYS[o.title].map(([w, l]) => `<button class="wf-btn" type="button" data-wire="${w}">${l}</button>`).join('')}</div>` : '') + (o.kind === 'list'
        ? `<div class="wf-card wf-stack"><h1 class="t-title">${o.title}</h1>${[1, 2, 3, 4].map(() => `<div class="wf-card wf-row"><span class="wf-ph wf-ph--icon"></span><div class="wf-grow">${wLines(2)}</div></div>`).join('')}</div>`
        : `<div class="wf-card wf-split"><div class="wf-pane wf-pane--muted"><span class="t-label">${o.title}</span>${wField('Title', '')}${wField('Text', '', 'area')}</div><div class="wf-pane"><span class="wf-ph wf-ph--square">[${o.kind === 'site' ? 'website preview' : 'page preview'}]</span></div></div>`
      ), wNote(`Destination: ${o.title}. Not designed yet; the flow ends here.${START_WAYS[o.title] ? ' It opens with the default template; the buttons above start it another way.' : ''}`), o.kind === 'list' ? 560 : 760),
    coverSamples: () => wShell('Cover letter samples', `<div class="wf-card wf-stack">${wLines(1)}<div class="wf-grid" style="--cols:3">${['Marketing', 'Engineering', 'Sales'].map(t => `<button class="wf-card wf-stack wf-gap-sm" type="button" data-wire="cover-sample-pick"><span class="wf-ph wf-ph--square">[sample]</span><span class="t-small">${t}</span></button>`).join('')}</div></div>`,
      wNote('Starting a cover letter from a sample: the sample is what it needs. No design yet.'), 640),
    templates: o => wShell('Pick a template', `<div class="wf-card wf-stack">
        ${wLines(1)}
        <div class="wf-grid" style="--cols:3">${[1, 2, 3, 4, 5, 6].map(i => `<button class="wf-card wf-stack wf-gap-sm" type="button" data-wire="tpl"><span class="wf-ph wf-ph--square">[template ${i}]</span><span class="t-small">Template ${i}</span></button>`).join('')}</div>
      </div>`, wNote(`Feature personalization for a new ${o.kind} without a template in the URL. With one (…/{template}) the flow starts at processing (Flow 3).`), 640),
    job: () => wShell('Job', `<div class="wf-card wf-stack">
        <div class="wf-row"><span class="wf-ph wf-ph--icon"></span><span class="t-label">Company</span><span class="wf-badge">96% match</span></div>
        <h1 class="t-title">Product designer</h1>${wLines(4)}
        <div class="wf-row"><button class="wf-btn wf-btn--primary" type="button" data-wire="apply">Apply</button><button class="wf-btn" type="button" data-wire="tailor">Tailor my resume</button><button class="wf-btn" type="button" data-wire="track">Save to Job Tracker</button><button class="wf-btn wf-btn--ghost" type="button" data-wire="company">About the company</button></div>
      </div>`, wNote('A job’s page (/jobs/job/{id}/): the role, the match, Apply and Tailor my resume (opens Tailor resume with this job). Not designed yet.'), 600),
    company: () => wShell('Company', `<div class="wf-card wf-stack"><div class="wf-row"><span class="wf-ph wf-ph--icon"></span><h1 class="t-title">Company</h1></div>${wLines(3)}
        <span class="t-label">Open roles</span>${[1, 2].map(i => `<button class="wf-card" type="button" data-wire="job" aria-label="Open role ${i}">${wLines(2)}</button>`).join('')}</div>`, wNote('A company’s page (/jobs/organization/{company}/): about it and its open roles. Not designed yet.'), 600),
    tracker: () => wShell('Job Tracker', `<div class="wf-card wf-stack"><h1 class="t-title">Job Tracker</h1>
        <div class="wf-grid" style="--cols:4">${['Saved', 'Applied', 'Interview', 'Offer'].map((c, i) => `<div class="wf-stack wf-gap-sm"><span class="t-label">${c}</span><div class="wf-card">${wLines(2)}</div>${i < 2 ? `<div class="wf-card">${wLines(2)}</div>` : ''}</div>`).join('')}</div></div>`, wNote('Job Tracker (/jobs/job-tracker/): every application and its status. Not designed yet.'), 760)
  };
  /* A wireframe opened as its own route screen (keeps the URL it belongs to) */
  const wireRoute = (path, title, id, opts = {}) => ({ path, title, wire: true, pane: opts.pane, noX: id === 'wall', html: () => WIRE[id](opts),
    head: HEADS[id] ? { [opts.pane || 'main']: () => (typeof HEADS[id] === 'function' ? HEADS[id](opts) : HEADS[id]) } : undefined });
  function openWire(path, title, id, opts) { openRoute(wireRoute(path, title, id, opts)); }
  /* Wireframe buttons: the next flow step when a flow is running, else the obvious place */
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-wire]');
    if (!b) return;
    const w = b.dataset.wire;
    if (w === 'result') return setResult(b.dataset.result);
    if (w === 'process') return processDone();
    if (w.startsWith('state-')) return stateAction(w);
    if (w === 'track' && asGuest()) return signupPop('save jobs to your Job Tracker');  // a guest browses; saving a job needs an account
    // a page's side buttons (Apply, Save to Job Tracker, About the company) lead off the run, never along it
    if (flowNow && !['apply', 'track', 'company', 'cover-ai', 'cover-sample', 'cover-sample-pick', 'site-cv', 'site-linkedin'].includes(w) && flowNext()) return;
    const coverEd = () => openWire('/dashboard/create-cover/', 'Cover letter editor', 'dest', { title: 'Cover letter editor', kind: 'doc', pane: 'dest' });
    const siteEd = () => openWire('/dashboard/create-website/', 'Website editor', 'dest', { title: 'Website editor', kind: 'site', pane: 'dest' });
    if (w === 'cover-ai') return openRoute(findRoute('/dashboard/create-ai-cover-from-job/'));  // its form is the data
    if (w === 'cover-sample') return openWire('/dashboard/create-cover/', 'Cover letter samples', 'coverSamples');
    if (w === 'cover-sample-pick') { coverEd(); return toast('The sample is in your cover letter.'); }
    if (w === 'site-cv' && cvUploaded) return toast('Your website is filled in from your resume.');
    if (w === 'site-cv' || w === 'site-linkedin') return askCv(siteEd, false, '/dashboard/create-website/');  // the method screen (LinkedIn import is one of its ways)
    if ((w === 'signup' || w === 'login') && guestBack) { const back = guestBack; guestBack = null; endFlow(); return back(); }  // a guest's work opens again
    if (w === 'signup') go('intent');
    else if (w === 'login') openDashboard();
    else if (w === 'translate') openTool('proof', TR);
    else if (w === 'tool') {
      // a tool's button opens what it makes (its feature's destination), when that exists
      const f = routeNow && FEATURES.find(x => x.flow === 2 && x.path === routeNow.path), d = f && [].concat(typeof f.dest === 'function' ? f.dest() : f.dest)[0];
      d ? d.run() : notYet(b, 'Working…', 'The result screen isn’t designed yet.');
    }
    else if (w === 'upgrade') toast('Checkout isn’t part of this prototype.');
    else if (w === 'tpl') madeEditor();
    else if (w === 'job') openRoute(findRoute('/jobs/job/1234/'));
    else if (w === 'company') openRoute(findRoute('/jobs/organization/kickresume/'));
    else if (w === 'track') openJobs('tracker');
    else if (w === 'tailor') openRoute(findRoute('/jobs/job/1234/tailor/'));
    else if (w === 'apply') toast('Applying isn’t part of this prototype.');
  });

  /* ---------- Flow templates ----------
     Four flows serve every URL (the flow board in Figma). A URL picks one and fills in only its own screens:
     the feature personalization (its form, upload or setup), the wording of the data processing, and the destination.
       1 Intent collection → personalization → processing → state → destination (Skip personalization → Dashboard)
       2 personalization → processing → state → destination (a feature's URL)
       3 processing → state → destination (the input came earlier, e.g. a CV on a landing page)
       4 destination (the URL opens an app screen)
     Sign up, Log in or a landing page can come before (Entry). Run one from the dock (bottom right); the bar at the
     bottom shows the stages and their steps (hollow dots are wireframes) and jumps between them. */
  /* ---------- Career Map (/career-map/) ----------
     From Figma (concepting-KR › Career Map, 294:22071): its own page (the dashed-line background and the logo, APPS.cm)
     with one card: Welcome → Select a resume (the person's resumes, or a LinkedIn profile: the only way without a CV,
     since the app never makes a resume) → Customize your preferences (five questions that move on when picked, then the
     industries to prefer and to avoid; Skip Customization asks first) → Your career map is ready! → the map itself, an
     app page with the app menu. `cmState` is the step; the flow bar reads route:/career-map/#<state>. */
  const cmEl = document.getElementById('screen-cm');
  APPS.cm = cmEl;
  const CM_Q = [
    ['Expectations', 'What do you expect from this tool?', ['I want to explore my career options.', 'I want to advance in my current career.', 'I want to change career.', 'I’m not sure.']],
    ['Lifestyle', 'What is your ideal lifestyle?', ['My job gives me a lot of free time to enjoy life.', 'My job and my personal life are equally important.', 'I love my job and devote a lot of time to it.', 'I’m not sure.']],
    ['Career goals', 'Who do you want to become?', ['An expert in my field, known for my specialized skills.', 'A jack of all trades with a wide range of skills in many fields.', 'Running my own business.', 'I’m not sure.']],
    ['Income', 'What is your dream income?', ['I indulge in luxury, supported by a generous income.', 'I lead a comfortable life thanks to a moderate, stable income.', 'Earning money isn\'t my primary concern, I focus on other aspects of life.', 'I’m not sure.']],
    ['Recognition', 'Pick one quality you want to be known for.', ['Leadership', 'Expertise in a specific field', 'Creativity and/or knack for innovation', 'Interpersonal skills', 'Social impact', 'Not sure']]
  ];
  const CM_IND = ['Accounting / Finance', 'Administrative', 'Art / Design', 'Business / Sales', 'Education', 'Engineering', 'Food Production', 'Healthcare', 'Human Resources', 'IT', 'Legal', 'Management', 'Manufacturing', 'Marketing / PR', 'Retail & Customer Service', 'Science', 'Software Engineering', 'Transportation / Logistics', 'Hospitality', 'Government'];
  // the welcome card's and the ready card's little map: [label, colour, left, top, width]
  const CM_MINI = [['🧑‍🎨 Creative Director', '#52bab1', 57, 119.21, 133.65], ['✍️ UX Writer', '#9058d7', 77.79, 217.96, 96.53], ['👨‍💼 Brand Manager', '#e78c49', 272.33, 111.04, 124.74], ['📚 Senior Editor', '#5ecb42', 293.12, 225.39, 113.6], ['📈 Digital Marketing Director', '#3c81e8', 144.62, 168.22, 176.72]];
  // the map: [role, left, top, blurred (not unlocked yet)], in the design's 1440 × 900 frame
  const CM_ROLES = [['Product Manager', 443, 341], ['Data Analyst', 525, 449], ['Anarchist', 610, 561, 1], ['President', 832, 528, 1], ['Back-end Developer', 766, 641, 1], ['Clown', 426, 528, 1], ['Robo Human', 485, 657, 1], ['Front-end Developer', 854, 325], ['Farmer', 692, 398], ['Archeologist', 834, 433]];
  const CM_SVG = {
    bg: '<svg class="cm-bg" width="1217" height="1024" viewBox="0 0 1217 1024" fill="none" stroke="#D4D4D4" stroke-width="2.24535" stroke-linecap="square" stroke-dasharray="4.49 8.98" aria-hidden="true"><path d="M193.987 -52.9998C193.987 436.5 837.487 598.5 837.487 1065.5"/><path d="M778.487 653.5C778.487 467.5 918.886 224.5 918.886 -208"/><path d="M854.987 -49.0004C759.987 127.001 257.987 228.5 194.987 435"/><path d="M527.987 361C527.987 280 612.987 88.0005 612.987 -36.4997"/><path d="M164.987 1106.5C164.987 920.5 299.513 732 299.513 642"/><path d="M1303.49 708.001C1303.49 521 519.987 576.5 519.987 486.5"/><path d="M1340.49 568.5C1340.49 381.5 530.487 772 530.487 682"/></svg>',
    mini: '<svg class="cm-mini-lines" width="227" height="163" viewBox="0 0 227 163" fill="none" stroke="#D4D4D4" stroke-width="1.48503" stroke-linecap="square" stroke-dasharray="2.97 5.94" aria-hidden="true"><path d="M101.353 1.48511C101.353 32.6707 0.742493 26.3594 0.742493 56.06"/><path d="M101.724 1.11377C101.724 33.4132 212.359 12.6228 212.359 48.2635"/><path d="M101.353 0.742432C101.353 44.1796 107.293 55.6885 107.293 104.695"/><path d="M101.353 1.48511C101.353 58.6588 4.0838 117.317 4.0838 154.072"/><path d="M101.353 1.48511C101.353 49.7486 225.725 127.713 225.725 161.497"/></svg>',
    back: '<svg class="cm-back-lines" width="418" height="417" viewBox="0 0 418 417" fill="none" stroke="#E9E9E9" stroke-width="2" stroke-linecap="square" stroke-dasharray="2 8" aria-hidden="true"><path d="M228.5 1C228.5 48.5 1 220 1 286.5"/><path d="M195 319.5C195 265 229 105 229 1"/><path d="M416.5 286C416.5 233.5 228.5 94 228.5 1"/><path d="M388 399C388 338 229 131 229 1"/><path d="M81 416C81 361.5 228.5 105 228.5 1"/></svg>',
    front: '<svg class="cm-front-lines" width="428" height="209" viewBox="0 0 428 209" fill="none" stroke="#E9E9E9" stroke-width="2" stroke-linecap="square" stroke-dasharray="2 8" aria-hidden="true"><path d="M177 2C177 44 1 59.5 1 99.5"/><path d="M177.5 1.5C177.5 45 426.5 35 426.5 83"/><path d="M177 1C177 59.5 217 90.5 217 156.5"/><path d="M177 2C177 79 70.5 158.5 70.5 208"/><path d="M177 2C177 67 380 147 380 192.5"/></svg>',
    back20: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.667" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 15.833 4.167 10 10 4.167M15.833 10H4.167"/></svg>',
    check: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#05AF49" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.333 4 6 11.333 2.667 8"/></svg>',
    tick: '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3 4.5 8.5 2 6"/></svg>',
    sliders: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.667 14V9.333M2.667 6.667V2M8 14V8M8 5.333V2M13.333 14v-3.333M13.333 8V2M.667 9.333h4M6 5.333h4M11.333 10.667h4"/></svg>',
    plus: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="8" cy="8" r="6.667"/><path d="M8 5.333v5.334M5.333 8h5.334"/></svg>'
  };
  let cmState = 'welcome', cmPick = -1, cmLi = false, cmUser = '', cmAns = [], cmInd = [new Set(), new Set()];
  const cmLogo = () => document.querySelector('#topbar .logo').innerHTML;
  const cmResumes = () => cvUploaded ? [docName(), 'Human Resources Intern Awesome', 'Marketing Manager'] : [];
  function cmStepsHTML() {
    const s = cmState, at = s === 'welcome' ? 0 : s === 'cv' ? 1 : /^(q|ind)/.test(s) ? 2 : 3, w = s === 'welcome';
    const qi = s[0] === 'q' ? +s[1] - 1 : s.startsWith('ind') ? 5 : -1;
    const num = (n, done) => `<span class="cm-num${done ? ' is-done' : ''}">${n}</span>`;
    const step = (n, title, sub, extra = '') => `<li class="cm-step${at === n ? ' is-on' : ''}"${at === n ? ' aria-current="step"' : ''}>${num(n, at > n && !w)}<div><b>${title}</b>${extra || `<span>${sub}</span>`}</div></li>`;
    const subs = `<ul class="cm-subs">${[...CM_Q.map(q => q[0]), 'Industries'].map((t, i) => `<li>${i < qi ? CM_SVG.check : '<i></i>'}${t}</li>`).join('')}</ul>`;
    return `<ol class="cm-steps">
        ${step(1, 'Select your resume', w ? 'Your career paths will start from here.' : 'We need it to discover career paths.')}
        ${step(2, 'Customize your preferences', 'Tailor your career map to your liking.', at === 2 ? subs : '')}
        ${step(3, w ? 'Explore your career map' : 'View your career map', w ? 'Discover your options and set goals.' : 'Identify opportunities and milestones.')}
      </ol>`;
  }
  const cmMiniHTML = () => `<div class="cm-mini" aria-hidden="true"><span class="cm-mini-you">You</span>${CM_SVG.mini}${CM_MINI.map(([t, c, l, tp, w]) => `<span class="cm-mini-role" style="color:${c};left:${l}px;top:${tp}px;width:${w}px">${t}</span>`).join('')}</div>`;
  function cmRightHTML() {
    const s = cmState;
    if (s === 'welcome') return `<div class="cm-head"><h1>Welcome to your career map!</h1><p>Map out your career trajectory with ease. Our Career Map feature helps you see where you've been, where you are, and where you want to go. Identify opportunities and milestones to reach your career aspirations.</p></div>
        <div class="cm-body is-end">${cmMiniHTML()}<div class="cm-acts"><button class="cm-btn" type="button" data-cm="next">Continue</button></div></div>`;
    if (s === 'cv') {
      const list = cmResumes(), li = cmLi || !list.length;
      return `<div class="cm-head"><h1>Select a resume</h1><p>We will use that resume to learn more about you and draw more personalized career paths.</p></div>
        <div class="cm-body">${li ? `<label class="cm-li"><span class="cm-li-pre">linkedin.com/in/</span><input id="cm-li" value="${esc(cmUser)}" placeholder="yourusername" autocomplete="off" aria-label="Your LinkedIn username"></label>
          ${list.length ? '<button class="cm-link" type="button" data-cm="list">Or select one of your existing resumes.</button>' : ''}`
          : `<div class="cm-cvs" role="radiogroup" aria-label="Your resumes">${list.map((n, i) => `<button class="cm-cv" type="button" role="radio" aria-checked="${i === cmPick}" tabindex="${i === Math.max(cmPick, 0) ? 0 : -1}" data-cm-cv="${i}"><img src="${TL_IMG.resume}" alt=""><span>${esc(n)}</span></button>`).join('')}</div>
          <button class="cm-link" type="button" data-cm="li">Or import your LinkedIn profile instead</button>`}
          <div class="cm-acts">${li && list.length ? '<button class="cm-btn cm-ghost" type="button" data-cm="list">Cancel</button>' : ''}<button class="cm-btn" type="button" data-cm="next"${(li ? cmUser.trim() : cmPick >= 0) ? '' : ' disabled'}>Continue</button></div></div>`;
    }
    if (s[0] === 'q') {
      const [, q, opts] = CM_Q[+s[1] - 1], a = cmAns[+s[1] - 1];
      return `<div class="cm-head is-q"><h1>${q}</h1></div>
        <div class="cm-body"><div class="cm-opts" role="radiogroup" aria-label="${esc(q)}">${opts.map((o, i) => `<button class="cm-opt" type="button" role="radio" aria-checked="${i === a}" tabindex="${i === (a ?? 0) ? 0 : -1}" data-cm-a="${i}"><i class="cm-radio"></i>${o}</button>`).join('')}</div>
          <div class="cm-acts is-skip"><button class="cm-skip" type="button" data-cm="skip">Skip Customization</button></div></div>`;
    }
    if (s.startsWith('ind')) {
      const k = s === 'ind1' ? 0 : 1, set = cmInd[k];
      return `<div class="cm-head is-q"><h1>${k ? 'What industries do you want to avoid?' : 'What are your preferred industries?'}</h1></div>
        <div class="cm-body"><div class="cm-inds" role="group" aria-label="Industries">${CM_IND.map((t, i) => { const off = k && cmInd[0].has(i); return `<button class="cm-ind" type="button" role="checkbox" aria-checked="${set.has(i)}" data-cm-i="${i}"${off ? ' disabled' : ''}><i class="cm-box">${CM_SVG.tick}</i>${esc(t)}</button>`; }).join('')}</div>
          <div class="cm-acts is-split">${k ? '<span></span>' : '<button class="cm-skip" type="button" data-cm="skip">Skip Customization</button>'}<button class="cm-btn" type="button" data-cm="next">Continue</button></div></div>`;
    }
    return `<div class="cm-head"><h1>Your career map is ready!</h1><p>You can change the resume your map is based on as well as your customization via preferences.</p></div>
        <div class="cm-body is-end">${cmMiniHTML()}<div class="cm-acts"><button class="cm-btn" type="button" data-cm="next">View Career Map</button></div></div>`;
  }
  function cmMapHTML() {
    return `${appNavHTML('career-map')}<main class="cm-map" aria-label="Career Map">
        <div class="cm-tools"><button class="cm-tool" type="button" data-cm="prefs">${CM_SVG.sliders}Preferences</button><button class="cm-tool" type="button" data-cm="more">${CM_SVG.plus}More positions</button></div>
        <div class="cm-stage">${CM_SVG.back}${CM_SVG.front}
          <div class="cm-you"><span>${esc([person.first, person.last].join(' '))}</span><b>${esc(person.jobTitle || 'Product Designer')}</b></div>
          ${CM_ROLES.map(([t, l, tp, blur]) => `<button class="cm-role${blur ? ' is-locked' : ''}" type="button" data-cm-role="${esc(t)}" style="left:${l - 380}px;top:${tp - 120}px"${blur ? ' aria-label="A locked position"' : ''}><span>${esc(t)}</span></button>`).join('')}
        </div></main>`;
  }
  function cmHTML() {
    if (cmState === 'dest') return cmMapHTML();
    const back = cmState === 'welcome' ? 'Dashboard' : 'Back';
    return `${CM_SVG.bg}<div class="cm-logo" aria-hidden="true">${cmLogo()}</div>
      <section class="cm-card" aria-labelledby="cm-h">
        <div class="cm-left"><div class="cm-logo2">${cmLogo()}</div>${cmStepsHTML()}
          ${cmState === 'ready' ? '' : `<button class="cm-back" type="button" data-cm="back">${CM_SVG.back20}${back}</button>`}</div>
        <div class="cm-right">${cmRightHTML().replace('<h1>', '<h1 id="cm-h">')}</div>
      </section>`;
  }
  const CM_ORDER = ['welcome', 'cv', 'q1', 'q2', 'q3', 'q4', 'q5', 'ind1', 'ind2', 'ready', 'dest'];
  function cmFit() {
    const st = cmEl.querySelector('.cm-stage'); if (!st) return;
    const w = st.parentElement.clientWidth; st.style.setProperty('--k', Math.min(1, (w - 32) / 720));
  }
  async function openCareer(state = 'welcome') {
    const fill = () => { cmState = state; cmEl.className = 'cmp' + (state === 'dest' ? ' is-map' : ''); cmEl.innerHTML = cmHTML(); requestAnimationFrame(cmFit); };
    if (current !== 'cm' || (state === 'dest') !== (cmState === 'dest')) return enterApp(cmEl, fill, 'cm', '/career-map/');
    // from one step to the next: the card stays, its content changes
    fill(); syncApp('/career-map/'); landFocus(cmEl);
  }
  // the next step: in a run whose next stage starts there, the run moves on (its steps match route:/career-map/#…)
  function cmGo(state) {
    const st = flowNow && flowNow.steps[flowAt];
    // Continue after the industries, or Skip: the run's processing (a landing page's upload first, then the ready card)
    if (state === 'ready' && st && st.stage === 'prep') { const k = flowNow.steps.findIndex((x, i) => i > flowAt && x.stage === 'process'); if (k >= 0) return flowGo(k); }
    if (state === 'dest' && st && st.stage === 'process') return processDone();  // Completed: the map; Failed or Error: the processing state
    openCareer(state);
  }
  function cmSkip() {
    const pop = document.createElement('div');
    pop.className = 'wr-pop cm-pop';
    pop.innerHTML = `<div class="wr-back" data-cmp="cancel"></div><div class="cm-modal" role="dialog" aria-modal="true" aria-labelledby="cm-skip-h"><h2 id="cm-skip-h">Skip customization?</h2><p>This will take you directly to your career map. Keep in mind that skipping customization may lead to lower-quality results.</p>
      <div class="cm-modal-acts"><button class="cm-btn cm-ghost" type="button" data-cmp="cancel">Cancel</button><button class="cm-btn" type="button" data-cmp="skip">Skip</button></div></div>`;
    cmEl.appendChild(pop);
    const close = () => pop.remove();
    pop.addEventListener('click', e => { const b = e.target.closest('[data-cmp]'); if (!b) return; close(); if (b.dataset.cmp === 'skip') cmGo('ready'); });
    pop.addEventListener('keydown', e => { if (e.key === 'Escape') { close(); cmEl.querySelector('[data-cm="skip"]')?.focus(); } });
    pop.querySelector('[data-cmp="skip"]').focus();
  }
  cmEl.addEventListener('click', e => {
    const b = e.target.closest('[data-cm], [data-cm-cv], [data-cm-a], [data-cm-i], [data-cm-role]');
    if (!b || b.disabled) return;
    const at = CM_ORDER.indexOf(cmState);
    if (b.dataset.cmCv) { cmPick = +b.dataset.cmCv; cmEl.querySelectorAll('.cm-cv').forEach((c, i) => { c.setAttribute('aria-checked', String(i === cmPick)); c.tabIndex = i === cmPick ? 0 : -1; }); cmEl.querySelector('[data-cm="next"]').disabled = false; return; }
    if (b.dataset.cmA) {
      cmAns[+cmState[1] - 1] = +b.dataset.cmA;
      cmEl.querySelectorAll('.cm-opt').forEach(o => o.setAttribute('aria-checked', String(o === b)));
      const from = cmState;
      return later(() => { if (current === 'cm' && cmState === from) cmGo(CM_ORDER[at + 1]); }, 250);
    }
    if (b.dataset.cmI) { const set = cmInd[cmState === 'ind1' ? 0 : 1], i = +b.dataset.cmI; set.has(i) ? set.delete(i) : set.add(i); b.setAttribute('aria-checked', String(set.has(i))); return; }
    if (b.dataset.cmRole) return toast(b.classList.contains('is-locked') ? 'More positions open as you set goals on your map.' : `${b.dataset.cmRole}: the path from your role, its skills and salary open here.`);
    const a = b.dataset.cm;
    if (a === 'next') {
      if (cmState === 'cv' && cmLi) cmUser = cmEl.querySelector('#cm-li').value;
      return cmGo(CM_ORDER[at + 1]);
    }
    if (a === 'back') return cmState === 'welcome' ? goBack() : openCareer(CM_ORDER[at - 1]);
    if (a === 'li' || a === 'list') { cmLi = a === 'li'; return openCareer('cv'); }
    if (a === 'skip') return cmSkip();
    if (a === 'prefs') return openCareer('q1');
    if (a === 'more') return toast('More positions would add roles further from yours.');
  });
  cmEl.addEventListener('input', e => { if (e.target.id === 'cm-li') { cmUser = e.target.value; cmEl.querySelector('[data-cm="next"]').disabled = !cmUser.trim(); } });
  window.addEventListener('resize', () => { if (current === 'cm') cmFit(); });

  const S = {
    wire: (label, path, id, opts = {}) => ({ label, wire: true, match: `route:${path}#${opts.pane || 'main'}`, run: () => openWire(path, label, id, opts) }),
    // pane progress / progress-end: the upload modal on the Upload or LinkedIn import screen, uploading / with its result
    route: (label, path, pane) => ({ label, tag: { progress: 'upm', 'progress-end': 'upm-end' }[pane] || '', match: 'route:' + path + (pane && !pane.startsWith('progress') ? '#' + pane : ''), run: () => openRoute(findRoute(path), false, pane) }),
    wireTool: (label, path, pane) => ({ label, wire: pane === 'main', match: 'route:' + path + '#' + pane, run: () => openRoute(findRoute(path), false, pane) }),
    // a tool's CV when there is none: the method screen, which hands it to the tool once it is made (askCv)
    cv: path => ({ label: 'Method screen · your resume', match: 'screen:create', run: () => askCvFor(findRoute(path)) }),
    // the CV made on the method screen, by uploading or importing it (the upload modal) or by creating it (the building
    // screen); for a tool (path) it then goes on to the tool
    upm: path => ({ label: 'Upload modal (upload, LinkedIn)', tag: 'upm', match: 'screen:create', run: async () => {
      if (current !== 'create' || (path && !cvNext)) await (path ? askCvFor(findRoute(path)) : go('create'));
      if (current === 'create') upmCreate({ id: 'upload', file: 'jana-cv.pdf' });
    } }),
    buildFor: path => ({ label: 'Building screen (AI, paste)', match: 'screen:loading', run: () => {
      const then = current === 'create' && cvNext ? cvNext : cvFor(findRoute(path));
      person = buildPerson('ai'); if (!cvUploaded) setCv(true);
      cvNext = then; showBuilding('ai'); buildNext = then;
    } }),
    screen: (label, s) => ({ label, match: 'screen:' + s, run: () => go(s) }),
    build: (id = 'ai', as) => ({ label: 'Building screen' + (as ? ' · ' + as.head : ''), match: 'screen:loading', run: () => { showBuilding(id, as); if (as) buildNext = as.done; } }),
    // sec: the section it opens at (what the feature wrote)
    editor: (label, path, sec) => ({ label: label || 'Editor', match: 'screen:editor', design: sec === 'design', run: () => {
      if (sec === 'tailoring') {
        const fromJob = !!flowNow && flowNow.f.path === '/jobs/job/1234/tailor/';
        tailored = tailored || { title: fromJob ? TRL_JOB.title : TRT.job, fromJob }; edTab = 'tailoring';
      }
      if (sec === 'design') designNext = true;
      const opening = path ? editorAt(path) : jumpEditor();
      if (sec && sec !== 'tailoring' && sec !== 'design') opening.then(() => { if (current === 'editor') editSection(sec); });
    } }),
    dash: label => ({ label: label || 'Dashboard', match: 'screen:dashboard', run: openDashboard }),
    // which resume a logged-in person with a CV uses: the picker over the dashboard, where they opened the feature
    pick: path => ({ label: 'Pick a resume (modal)', tag: 'pick', match: `route:${path}#pick`, run: () => openDashboard().then(() => { routeNow = findRoute(path); setHash(path); cvPick(path, () => {}); }) }),  // over the dashboard, under the feature's URL
    docs: label => ({ label: label || 'My Documents', match: 'route:/dashboard/resumes/#main', run: openDocs }),
    tpl: () => ({ label: 'Select your template', match: 'route:/dashboard/create-resume/#main', run: openTemplates }),
    tool: (label, kind, path = TOOL_PATH[kind]) => ({ label, match: `route:${path}#main`, run: () => { setCv(true); openTool(kind, path); } }),
    auth: (label, kind, note) => ({ label, note, match: 'route:' + AUTH[kind].path, run: () => openAuth(kind, note) }),
    upgrade: (label, plan) => ({ label, match: `route:/upgrade/${plan}/`, run: () => openUpgrade(plan) }),
    // state: the step's states start with it (q: q1–q5, ind: ind1–ind2); open: the one it opens
    cm: (label, state, open = state) => ({ label, match: `route:/career-map/#${state}`, run: () => openCareer(open) }),
    jobs: (label, view, state = 'main') => ({ label, match: `route:${JOBS_PATH[view]}#${state}`, run: () => openJobs(view, state) }),
    latest: (label, path, cv, match) => ({ label, match: match || 'route:' + path, run: () => { setCv(cv); openRoute(findRoute(path)); } }),
    // the shared stages, worded for the feature: processing (moves on by itself) and its result
    process: f => ({ label: f.verb, wire: true, match: `route:${f.path}#process`, run: () => { openWire(f.path, f.verb, 'process', { f, pane: 'process' }); later(processDone, 2600); } }),
    state: f => ({ label: 'Completed · Failed · Error', wire: true, result: true, match: `route:${f.path}#state`, run: () => openWire(f.path, 'Processing state', 'state', { f, pane: 'state' }) }),
    dest: (label, path, kind) => S.wire(label, path, 'dest', { title: label, kind, pane: 'dest' })
  };
  const STAGE = { entry: 'Entry', intent: 'Intent collection', prep: 'Feature personalization', process: 'Data processing', state: 'Processing state', dest: 'Destination' };
  const FLOW_T = [
    { n: 1, title: 'Goal first', stages: ['intent', 'prep', 'process', 'state', 'dest'], skip: true },
    { n: 2, title: 'Feature first', stages: ['prep', 'process', 'state', 'dest'] },
    { n: 3, title: 'Input given before', stages: ['process', 'state', 'dest'] },
    { n: 4, title: 'Straight to the app', stages: ['dest'] }
  ];
  /* The CV made on the method screen: uploaded or imported (the upload modal) or created (the building screen); two
     ways, so two steps, and a run goes on from whichever the person took. For a tool (path) it goes on to the tool. */
  const cvMade = path => [S.upm(path), { ...(path ? S.buildFor(path) : { ...S.build(), label: 'Building screen (AI, paste)' }), alt: true }];
  /* A tool that needs a CV: the method screen when there is none and the CV made there, then its own form; its
     processing is its own loading */
  const toolPrep = (path, label) => () => {
    const r = findRoute(path);
    return [...(cvUploaded ? [] : [S.cv(path), ...cvMade(path)]), r.wire ? S.wireTool(label, path, 'main') : S.route(label, path, 'main')];
  };
  // the ATS check has no loading of its own: the CV made on the method screen is its processing, the ATS checker next
  const ATS = '/dashboard/analyse-resume/', atsOut = () => [S.tool('ATS checker', 'ats', ATS)];
  // after the building screen (not the upload modal, whose Analytics version is the analysis): Analyzing your resume
  const ATS_LOAD = { label: 'Analyzing your resume (a CV from the building screen)', alt: true, match: `route:${ATS}#process`, run: () => atsAnalyze() };
  /* Tailoring has its own processing screen (the route's process pane), which ends in its own Done! or Something went wrong */
  const trlRun = path => ({
    process: [S.route('Tailoring', path, 'process')],
    state: [{ label: 'Done! or Something went wrong', tag: 'tld-end', match: `route:${path}#process`, run: () => { tldJump = true; openRoute(findRoute(path), false, 'process'); } }]
  });
  // Job Interviews: its own loading and the questions page (Figma 285:361)
  const IQ_STEP = st => ({ label: st === 'process' ? 'Job Interviews · questions loading' : 'Job Interviews · your questions', match: `route:${IQ_PATH}#${st}`, run: () => openInterview(st) });
  // a letter's processing and destination: the building screen, then Fill In with the letter (the user's rule)
  const letterRun = kind => ({
    process: [{ label: `Building screen · Writing your ${LETTER[kind].what}`, match: 'screen:loading', run: () => { if (person.letterKind !== kind) letterFor(kind); showBuilding('ai', LETTER_AS[kind]); } }],
    dest: [{ label: `Fill In · the ${LETTER[kind].what}`, match: 'screen:editor', run: () => { if (person.letterKind !== kind) letterFor(kind); return jumpEditor(kind); } }]
  });
  const signUp = S.auth('Sign up', 'signup');
  const landing = (what, note) => S.auth('Sign up · ' + what, 'signup', note || `Flow 3: the visitor gave ${what === 'CV attached' ? 'a CV (jana-cv.pdf)' : 'their input'} on a landing page, so after sign-up processing starts straight away.`);
  /* Every URL, paired with its flow in each situation (the user's doc "URLs by flow and situation"): { flow, group
     (the URL checklist's), title, path, entry, prep, process, dest, verb + psteps (the processing wording), noun (the
     result), cv (start with or without a CV), data (a landing page already gave the feature's data), guest (no
     account), state (its own processing state instead of the shared one) }. The App runs are written here, the
     landing-page runs are made from them below (lpVariant). */
  // a new resume ends on the editor's Design tab; a given label (a tailored or rewritten copy) keeps Fill In
  const resumeOut = (label, sec) => [S.editor(label || 'Editor · Design', undefined, label ? sec : 'design')];
  // the upload modal on the Upload or LinkedIn import screen as the processing, and its result as the processing state
  const upmRun = (path, verb = 'Uploading') => ({
    process: [S.route(`Upload modal · ${verb} resume...`, path, 'progress')],
    state: [S.route('Upload successful! or Upload failed.', path, 'progress-end')]
  });
  // Jobs for You: the shared CV step when there is none (the user's rule), then Analyzing your resume…, then the matches
  const JM = '/jobs/matcher/', JM_PROC = [S.jobs('Analyzing your resume', 'match', 'process')], JM_DEST = [S.jobs('Jobs for You · top matches', 'match', 'dest')];
  const TR = '/dashboard/translate-resume/', TR_DEST = [S.tool('Proofread & Translate', 'proof', TR)], TR_FILL = [S.editor('Fill In · the translated copy')];  // the language is picked on the page (WIRE.tlang, the old language step, stays unused)
  const BOARD = [S.route('Job board · Find a job you’ll love', '/jobs/')];
  // a URL that needs a CV: the person's own (Flow 4, or 3 with its loading), else the method screen first (Flow 2)
  const needsCv = (id, title, path, dest, o = {}) => [
    { id, flow: o.process ? 3 : 4, title, path, cv: true, dest, ...o },
    { id: id + '-new', flow: 2, title: title + ' · no CV yet', path, cv: false, dest, ...o,
      // the CV made on the method screen is the loading of a page that has none of its own (the ATS check)
      ...(o.process ? { prep: [S.cv(path), ...cvMade(path)] } : { prep: [S.cv(path)], process: [...cvMade(path), ...(path === ATS ? [ATS_LOAD] : [])] }) }
  ];
  // Rewrite resume: its loading straight away (it needs only a CV), then the rewritten copy in Fill In
  const REWRITE = { verb: 'Rewriting your resume', path: '/dashboard/rewrite-resume/', noun: 'rewritten resume' };
  /* Its loading (Figma concepting-KR › 294:5202): the sections are rewritten one by one, then Resume rewrite done! and
     Continue (the run's next step, else the rewritten copy in Fill In). A run set to fail stops early (processDone
     shows the processing state). The design's upload variant isn't used: without a CV the method screen comes first. */
  const RW_SECS = ['Work Experience', 'Education', 'Skills', 'Certificates'];
  const RW_CHECK = '<svg viewBox="0 0 20 20" fill="none" stroke="#48AD43" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16.667 5 7.5 14.167 3.333 10"/></svg>';
  const rwHTML = () => `<div class="rt-card rw" data-state="run" role="status" aria-live="polite"><div class="rw-l" aria-hidden="true"><span class="rw-beta">Beta</span><img src="__ASSET:tailor/martinus.webp__" alt=""></div>
    <div class="rw-r"><h2 class="rw-h">${IQ_IC.spinner}<span>In progress...</span></h2><p>Generating a revamped copy of your resume. This process can take up to 2 minutes.</p>
      <ul class="rw-list">${RW_SECS.map((t, i) => `<li${i ? ' hidden' : ''}>${RW_CHECK}${t}</li>`).join('')}</ul>
      <div class="rw-foot"><button class="rw-go" type="button" hidden>Continue</button></div></div>
    <span class="rw-wait">Please wait for the rewrite to complete—it shouldn’t take much longer.</span></div>`;
  /* The ATS check's loading after a CV written on the building screen (the user's rule): an uploaded one has it in
     the upload modal's Analytics version, which says it is being analysed, so only a created one gets this card */
  const ATS_RUN = ['Analyzing your resume...', 'Checking it the way ATS read it...', 'Calculating your score...'];
  const ATL_INFO = 'We read your resume the way applicant tracking systems do.';
  const atsLoadHTML = () => { const id = 'atl-h' + ++upmSeq; return `<div class="rt-card upm" data-state="run" role="group" aria-labelledby="${id}">
      <div class="upm-head"><h2 class="upm-h" id="${id}" tabindex="-1">${UPM_SPIN}<span>${ATS_RUN[0]}</span></h2>
        <div class="upm-info">${TL_IC.info}<span>${ATL_INFO}</span></div></div>
      <img class="upm-pic" src="${UPM.ats[0]}" alt="" width="329" height="175">
      <p class="upm-line">${UPM.ats[1]}</p>
      <div class="upm-foot"><button class="rt-btn rt-coral" type="button" data-atl="retry">Retry</button></div>
      <p class="sr-only" aria-live="polite"></p>
    </div>`; };
  // in the app, on the ATS page itself (the user's rule): its heading, the card in the report's place, the resume beside
  const atlMainHTML = () => `<h1 class="tl-h tl-ats-h">ATS Metrics<img src="${TL_IMG.premiumWord}" alt="Premium"></h1><div class="tl-atl">${atsLoadHTML()}</div>`;
  async function atsAnalyze() {
    cvNext = null;
    await openTool('ats', ATS, true);
    const card = toolEl.querySelector('.tl-atl .upm'), title = card && card.querySelector('.upm-h span');
    if (!card) return;
    const live = card.querySelector('[aria-live]'), info = card.querySelector('.upm-info span'), btn = card.querySelector('[data-atl="retry"]');
    const run = () => {
      cardSteps(card, ATS_RUN, t => { title.textContent = t; live.textContent = t; }, () => {
        if (procResult === 'ok') {  // the report takes the card's place
          atsBusy = false;
          const main = toolEl.querySelector('.tl-main');
          main.innerHTML = atsHTML(); riseIn(toolEl, true); flowSync(); landFocus(toolEl); return;
        }
        // a resume that can't be read (Failed) needs another one, as the upload modal's Retry does; an Error, a retry
        const failed = procResult === 'fail';
        morphHeight(card, () => {
          card.dataset.state = 'fail'; title.textContent = 'Analysis failed.';
          info.textContent = failed ? 'We couldn’t read your resume. Try another one.' : UPM_FAIL.error;
          card.querySelector('.upm-info').classList.add('is-err');
          btn.textContent = failed ? 'Try another resume' : 'Retry';
        });
        live.textContent = 'Analysis failed. ' + info.textContent;
      });
      card.dataset.state = 'run'; title.textContent = ATS_RUN[0]; info.textContent = ATL_INFO; card.querySelector('.upm-info').classList.remove('is-err');
    };
    btn.addEventListener('click', () => procResult === 'fail' ? askCvFor(findRoute(ATS)) : run());
    run();
  }
  const RW_ROUTE = { path: REWRITE.path, title: 'Rewrite resume', pane: 'process', html: rwHTML, head: { process: ['Rewriting your resume', 'A revamped copy of it opens in Fill In when it’s done.'] } };
  async function rewriteNow() {
    await openRoute(RW_ROUTE);
    const card = screens.route.querySelector('.rw');
    if (!card) return;
    const items = [...card.querySelectorAll('.rw-list li')], go = card.querySelector('.rw-go');
    const stopAt = procResult === 'ok' ? items.length : 2;
    const tick = i => {
      if (!card.isConnected) return;
      if (i < stopAt) { items[i].hidden = false; return later(() => tick(i + 1), 1100); }
      if (procResult !== 'ok') return processDone();  // Failed or Error: the processing state says so
      card.dataset.state = 'done';
      card.querySelector('.rw-h span').textContent = 'Resume rewrite done!';
      card.querySelector('.rw-r > p').textContent = 'Note: Resume rewrite is still in beta, and it can make mistakes. Double-check your resume for errors.';
      go.hidden = false; go.focus();
    };
    later(() => tick(1), 1100);
    go.addEventListener('click', () => processDone());
  }
  // a click beside the card while it runs: please wait (the design's note)
  document.addEventListener('click', e => {
    const card = current === 'route' && screens.route.querySelector('.rw[data-state="run"]');
    if (!card || card.contains(e.target) || e.target.closest('#proto-dock, #flow-bar, .proto, .proto-more')) return;
    const note = card.querySelector('.rw-wait');
    note.classList.add('is-on'); clearTimeout(note._t); note._t = setTimeout(() => note.classList.remove('is-on'), 2600);
  });
  // a guest (no account) can browse the job board and its results; the app's menu and saving a job ask them to sign up
  const asGuest = () => !!(flowNow && flowNow.f.guest);
  /* The section writers (Summary generator, Generate work experience / objective): Fill In opens at their section,
     then the writer pops up over it (the user's rule: they need nothing first). Generate writes that section into the
     resume there; ×, Escape or a click beside it closes the pop-up and leaves Fill In as it was. */
  const WRITER_AT = { experience: 'work', objective: 'profile', summary: 'profile' };
  const WRITER_URL = { experience: '/ai/resume/experience/', objective: '/ai/resume/general/', summary: '/dashboard/summary-generator/' };
  async function openWriter(kind, path = WRITER_URL[kind]) {
    if (current !== 'editor') await editorAt(path); else { routeNow = findRoute(path); markRoutes(); setHash(path); }
    if (current !== 'editor') return;
    editSection(WRITER_AT[kind]);
    closeWriter(true);
    const pop = document.createElement('div');
    pop.className = 'wr-pop';
    pop.innerHTML = `<div class="wr-back" data-wr="close"></div><div class="wr-box" role="dialog" aria-modal="true" aria-labelledby="aig-h">${aigHTML(kind)}<button class="wr-x" type="button" data-wr="close" aria-label="Close">${rtIc(RT_IC.x)}</button></div>`;
    document.body.appendChild(pop);
    const form = pop.querySelector('form');
    initAig(form, () => {
      const btn = form.querySelector('[type="submit"]');
      btn.style.minWidth = btn.offsetWidth + 'px'; btn.disabled = true;
      btn.innerHTML = `<svg class="i spin" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>Generating…`;
      later(() => {
        person = withSection(person, { title: form.elements.title.value, company: form.elements.company ? form.elements.company.value : '', as: SECTION_AS[kind] });
        closeWriter(true);
        editorEl.innerHTML = editorHTML(); setPane('preview'); editSection(WRITER_AT[kind]);
        toast(SECTION_AS[kind].ready);
      }, 1200);
    });
    pop.addEventListener('click', e => { if (e.target.closest('[data-wr="close"]')) closeWriter(); });
    pop.addEventListener('keydown', e => { if (e.key === 'Escape' && !e.target.closest('.aim-lang-wrap')) { e.stopPropagation(); closeWriter(); } });
    if (!reduce) play(pop.querySelector('.wr-box'), [{ opacity: 0, transform: 'translateY(12px) scale(.98)' }, { opacity: 1, transform: 'none' }], { duration: DUR.base, easing: EASE.standard });
    focusLater(form.elements.title, 120);
  }
  function closeWriter(instant) {
    const pop = document.querySelector('.wr-pop');
    if (!pop) return;
    if (instant || reduce) return pop.remove();
    pop.animate([{ opacity: 1 }, { opacity: 0 }], { duration: DUR.fast, easing: EASE.exit }).finished.catch(() => {}).then(() => pop.remove());
  }
  /* A guest (asGuest) is in the app without an account: what needs one (saving, the app's menu, AI, tailoring) opens
     this sign-up pop-up over the page (the user's rule). Sign up or Log in brings them back to where they were. */
  let guestBack = null;
  function signupPop(what) {
    closeSignupPop(true);
    const at = routeNow ? routeNow.path : '/guest-edit-start/';
    const back = current === 'editor' ? () => editorAt(at) : current === 'jobs' ? () => openJobs(jobsView) : routeNow ? (r => () => openRoute(r))(routeNow) : null;
    const pop = document.createElement('div');
    pop.className = 'wr-pop su-pop';
    pop.innerHTML = `<div class="wr-back" data-su="close"></div><div class="wr-box su-box" role="dialog" aria-modal="true" aria-labelledby="su-h"><h2 id="su-h">Sign up to ${what}</h2><p>It’s free. What you’ve done so far is kept and opens again right after.</p><div class="su-foot"><button class="rt-btn rt-ghost" type="button" data-su="login">Log in</button><button class="rt-btn rt-coral" type="button" data-su="signup">Sign up</button></div><button class="wr-x" type="button" data-su="close" aria-label="Close">${rtIc(RT_IC.x)}</button></div>`;
    document.body.appendChild(pop);
    pop.addEventListener('click', e => {
      const b = e.target.closest('[data-su]');
      if (!b) return;
      closeSignupPop();
      if (b.dataset.su !== 'close') { guestBack = back; openAuth(b.dataset.su); }
    });
    pop.addEventListener('keydown', e => { if (e.key === 'Escape') closeSignupPop(); });
    pop.querySelector('[data-su="signup"]').focus();
    if (!reduce) pop.animate([{ opacity: 0 }, { opacity: 1 }], { duration: DUR.base, easing: EASE.standard });
  }
  function closeSignupPop(instant) {
    const pop = document.querySelector('.su-pop');
    if (!pop) return;
    if (instant || reduce) return pop.remove();
    pop.animate([{ opacity: 1 }, { opacity: 0 }], { duration: DUR.fast, easing: EASE.exit }).finished.catch(() => {}).then(() => pop.remove());
  }
  // in the editor, a guest can write; the menu, AI, tailoring, Upgrade and Download ask them to sign up
  editorEl.addEventListener('click', e => {
    if (!asGuest()) return;
    const b = e.target.closest('[data-nav], [data-pv-tab="tailoring"], [data-action="premium"], .btn-gradient, [aria-label="Download"], .rt-ai');
    if (!b) return;
    e.stopPropagation(); e.preventDefault();
    signupPop(b.matches('[data-pv-tab="tailoring"]') ? 'tailor your resume' : b.matches('[aria-label="Download"]') ? 'download your resume' : b.matches('.rt-ai') ? 'write with AI' : 'save your resume');
  }, true);
  // the section writers: Fill In opens, then the writer pops up over it (the user's rule); nothing needed
  const writerAt = (kind, label) => [{ label: `Editor · ${label} + the writer pop-up`, match: 'screen:editor', run: () => openWriter(kind) }];
  const FEATURES = [
    ...[['build', 'Build my resume', '', { prep: [S.screen('Method screen', 'create')], process: cvMade(), dest: resumeOut(), verb: 'Building your resume', noun: 'resume' }],
      ['tailor', 'Tailor my resume', '/dashboard/tailor-resume/', { prep: toolPrep('/dashboard/tailor-resume/', 'Tailor resume'), ...trlRun('/dashboard/tailor-resume/'), dest: resumeOut('Editor · the tailored copy', 'tailoring'), noun: 'tailored resume' }],
      ['ats', 'Pass the ATS check', ATS, { prep: [S.cv(ATS)], process: [...cvMade(ATS), ATS_LOAD], dest: atsOut, noun: 'ATS report' }],
      ['jobs', 'Find jobs that fit me · Job board', '/jobs/', { process: false, dest: BOARD, noun: 'job board' }],
      ['matcher', 'Find jobs that fit me · Jobs for You', JM, { goal: 'jobs', prep: [S.cv(JM), ...cvMade(JM)], process: JM_PROC, dest: JM_DEST, noun: 'job matches' }]]
      .map(([id, title, path, o]) => ({ id: 'goal-' + id, goal: id, flow: 1, group: 'Goal picked on the goal screen', title, path, url: '/register/', entry: signUp, cv: false, ...o })),

    // Get a resume. New resume makes one on the method screen (no template picker: everyone gets the default one)
    { id: 'create-resume', flow: 2, title: 'New resume', path: '/dashboard/create-resume/', prep: [{ label: 'Method screen', match: 'screen:create', run: () => openRoute(findRoute('/dashboard/create-resume/')) }], process: cvMade(), dest: resumeOut(), verb: 'Building your resume', noun: 'resume' },
    { id: 'create-resume-tpl', flow: 4, title: 'Resume with a chosen template', path: '/dashboard/create-resume/modern/', url: '/dashboard/create-resume/{template}', cv: true, dest: resumeOut() },
    { id: 'create-resume-tpl-new', flow: 2, title: 'Resume with a chosen template · no CV yet', path: '/dashboard/create-resume/modern/', url: '/dashboard/create-resume/{template}', cv: false, prep: [S.screen('Method screen', 'create')], process: cvMade(), dest: resumeOut(), verb: 'Building your resume', noun: 'resume' },
    { id: 'sample', flow: 4, title: 'Resume from a sample', path: '/dashboard/create/marketing-manager/', url: '/dashboard/create/{sample}/', dest: resumeOut() },
    { id: 'ai-resume', flow: 2, title: 'Create Resume with AI', path: '/dashboard/create-ai-resume/', prep: [S.route('Create Resume with AI', '/dashboard/create-ai-resume/')], process: [S.build('ai')], dest: resumeOut(), verb: 'Building your resume', noun: 'resume' },
    { id: 'upload', flow: 2, title: 'Upload resume', path: '/dashboard/upload-resume/', prep: [S.route('Upload your resume', '/dashboard/upload-resume/')], ...upmRun('/dashboard/upload-resume/'), dest: resumeOut(), noun: 'resume' },
    { id: 'linkedin', flow: 2, title: 'LinkedIn import', path: '/dashboard/linkedin-import/', prep: [S.route('LinkedIn import', '/dashboard/linkedin-import/')], ...upmRun('/dashboard/linkedin-import/', 'Importing'), dest: resumeOut(), noun: 'resume' },
    { id: 'guest-edit', flow: 4, title: 'Guest editor', path: '/guest-edit-start/', guest: true, cv: false, dest: [S.editor('Editor (guest)', '/guest-edit-start/')] },

    // Improve my resume
    { id: 'tailor-resume', flow: 2, title: 'Tailor resume', path: '/dashboard/tailor-resume/', prep: toolPrep('/dashboard/tailor-resume/', 'Tailor resume'), ...trlRun('/dashboard/tailor-resume/'), dest: resumeOut('Editor · the tailored copy', 'tailoring'), noun: 'tailored resume' },
    // from a job page (/jobs/job/{id}/): Tailor Your Resume → Pick a resume to tailor → Tailor your resume to a job (two
    // modals over the page) → tailoring; without a CV the method screen makes it first and the setup follows
    { id: 'jobs-tailor', flow: 2, title: 'Tailor resume to a job', path: JTP, url: '/jobs/job/{id}/ · Tailor Your Resume', entry: S.jobs('Job page', 'job'),
      prep: () => cvUploaded ? [S.jobs('Pick a resume to tailor (modal)', 'job', 'pick'), S.jobs('Tailor your resume to a job (modal)', 'job', 'setup')]
        : [S.cv(JTP), ...cvMade(JTP), S.jobs('Tailor your resume to a job (modal)', 'job', 'setup')],
      ...trlRun(JTP), dest: resumeOut('Editor · the tailored copy', 'tailoring'), noun: 'tailored resume' },
    // Rewrite resume: only a CV, then its loading (no setup screen; the user's rule)
    ...needsCv('rewrite-resume', 'Rewrite resume', '/dashboard/rewrite-resume/', resumeOut('Editor · the rewritten copy'), { process: [{ label: 'Resume rewrite · In progress… then done!', match: 'route:/dashboard/rewrite-resume/#process', run: () => rewriteNow() }], verb: REWRITE.verb, noun: REWRITE.noun }),
    { id: 'summary-generator', flow: 4, title: 'Summary generator', path: '/dashboard/summary-generator/', dest: writerAt('summary', 'Profile summary') },
    { id: 'ai-experience', flow: 4, title: 'Generate work experience', path: '/ai/resume/experience/', dest: writerAt('experience', 'Work experience') },
    { id: 'ai-objective', flow: 4, title: 'Generate resume objective', path: '/ai/resume/general/', dest: writerAt('objective', 'Profile') },

    // Check my resume: the page needs a CV (ATS has no loading of its own); Translate also needs the language
    ...needsCv('analyse-resume', 'Analyse resume', ATS, atsOut, { noun: 'ATS report' }),
    ...[['proofreading', 'Proofreading', 'Proofreading'], ['recruiter-feedback', 'Recruiter feedback', 'Career Coach · recruiter feedback'], ['career-coach', 'Career coach', 'Career Coach']]
      .flatMap(([t, title, label]) => needsCv(t, title, `/dashboard/${t}/`, [S.tool(label, TOOL_PAGE[t], `/dashboard/${t}/`)], { noun: label.toLowerCase() })),
    // in the app Translate is the document's Proofread & Translate (its second navigation), there only with a CV: like the
    // ATS check it opens straight away (Flow 4), the language is picked on the page (the user's rule)
    { id: 'translate-app', flow: 4, title: 'Translate resume', path: TR, cv: true, dest: TR_DEST, noun: 'translation' },
    { id: 'translate-app-new', flow: 2, title: 'Translate resume · no CV yet', path: TR, cv: false, prep: [S.cv(TR), ...cvMade(TR)], process: false, dest: TR_DEST, noun: 'translation' },
    ...[['analyze', 'ATS checker'], ['proofread', 'Proofreading'], ['recruiter-feedback', 'Career Coach']].flatMap(([t, label]) => [
      { id: 'latest-' + t, flow: 4, title: `Latest resume · ${label}`, path: `/latest-resume/${t}/`, cv: true, dest: [S.latest(label, `/latest-resume/${t}/`, true)] },
      { id: `latest-${t}-new`, flow: 4, title: `Latest resume · ${label}, no CV yet`, path: `/latest-resume/${t}/`, cv: false, dest: [S.latest('My Documents', `/latest-resume/${t}/`, false, 'route:/dashboard/resumes/')] }]),

    // Write something new: the writer's form is its data (a CV is optional, used if there)
    // its loading is the building screen (as for a resume) and it ends in Fill In with the cover letter (the user's rule)
    { id: 'ai-cover', flow: 2, title: 'AI Cover Letter Writer', path: '/dashboard/create-ai-cover-from-job/', prep: [S.route('AI Cover Letter Writer', '/dashboard/create-ai-cover-from-job/')],
      ...letterRun('cover'), noun: 'cover letter', given: 'Job details' },
    { id: 'ai-interview', flow: 2, title: 'Job Interview Questions', path: '/dashboard/create-interview/', prep: [S.route('Job Interview Questions', '/dashboard/create-interview/')], process: [IQ_STEP('process')], dest: [IQ_STEP('dest')], verb: 'Preparing your questions', noun: 'interview questions', given: 'The role' },
    { id: 'ai-resign', flow: 2, title: 'Resignation letter', path: '/ai/resignation/', prep: [S.route('Resignation letter', '/ai/resignation/')], ...letterRun('resign'), noun: 'resignation letter', given: 'Letter details' },
    // Career Map has its own CV step (the user's rule): Select a resume lists the person's resumes, or takes a LinkedIn
    // profile when there is none, so no method screen; answers given on a landing page skip the questions, not that step
    { id: 'career-map', flow: 2, title: 'Career Map', path: '/career-map/', prep: [S.cm('Career Map · Welcome', 'welcome'), S.cm('Select a resume (or LinkedIn)', 'cv'), S.cm('Preferences · five questions', 'q', 'q1'), S.cm('Industries · preferred, to avoid', 'ind', 'ind1')],
      process: [S.cm('Your career map is ready!', 'ready')], dest: [S.cm('Career Map', 'dest')], noun: 'Career Map', given: 'Career answers', dataPrep: [S.cm('Select a resume (or LinkedIn)', 'cv')] },
    // no template pickers (the user's rule): a new cover letter or website opens with the default template
    { id: 'create-cover', flow: 4, title: 'New cover letter', path: '/dashboard/create-cover/', dest: [S.dest('Cover letter editor', '/dashboard/create-cover/', 'doc')] },
    { id: 'create-cover-tpl', flow: 4, title: 'Cover letter with a chosen template', path: '/dashboard/create-cover/modern/', url: '/dashboard/create-cover/{template}', dest: [S.dest('Cover letter editor', '/dashboard/create-cover/modern/', 'doc')] },
    { id: 'create-website', flow: 4, title: 'New website', path: '/dashboard/create-website/', dest: [S.dest('Website editor', '/dashboard/create-website/', 'site')] },
    { id: 'create-website-tpl', flow: 4, title: 'Website with a chosen template', path: '/dashboard/create-website/modern/', url: '/dashboard/create-website/{template}', dest: [S.dest('Website editor', '/dashboard/create-website/modern/', 'site')] },
    { id: 'site-tpl', flow: 4, title: 'Website template', path: '/cv/creative/', url: '/cv/{website-template}/', dest: [S.dest('Website template', '/cv/creative/', 'site')] },

    // Find jobs: the board and the pages need nothing; a guest can browse the board and its results
    { id: 'jobs-board', flow: 4, title: 'Job board', path: '/jobs/', dest: BOARD, noun: 'job board' },
    { id: 'jobs-results', flow: 4, title: 'Jobs · search results', path: '/jobs/search/', dest: [S.jobs('Search results', 'search')] },
    { id: 'guest-jobs', flow: 4, title: 'Jobs landing page · guest', path: '/jobs/', guest: true, cv: false, dest: [S.jobs('Jobs landing page · Find a job you’ll love', 'lp')] },
    { id: 'guest-results', flow: 4, title: 'Jobs · search results · guest', path: '/jobs/search/', guest: true, cv: false, dest: [S.jobs('Search results', 'search')] },
    { id: 'jobs-matcher', flow: 3, title: 'Jobs for You (job matcher)', path: JM, cv: true, process: JM_PROC, dest: JM_DEST, noun: 'job matches' },
    { id: 'jobs-matcher-new', flow: 2, title: 'Jobs for You · no CV yet', path: JM, cv: false, prep: [S.cv(JM), ...cvMade(JM)], process: JM_PROC, dest: JM_DEST, noun: 'job matches' },
    { id: 'jobs-job', flow: 4, title: 'Job', path: '/jobs/job/1234/', url: '/jobs/job/{id}/', dest: [S.jobs('Job page', 'job')] },
    ...[['/jobs/organization/kickresume/', 'Company', 'company', '/jobs/organization/{company}/']]
      .map(([path, title, w, url]) => ({ id: 'jobs-' + w, flow: 4, title, path, url, dest: [S.wire(title, path, w)] })),
    { id: 'jobs-tracker', flow: 4, title: 'Job Tracker', path: '/jobs/job-tracker/', dest: [S.jobs('Job Tracker · My Jobs', 'tracker')] },

    // Just open
    { id: 'login', flow: 4, title: 'Log in', path: '/login/', entry: S.auth('Log in', 'login'), dest: [S.dash()] },
    { id: 'dashboard', flow: 4, title: 'Dashboard', path: '/dashboard/', dest: [S.dash()] },
    { id: 'docs', flow: 4, title: 'My Documents', path: '/dashboard/resumes/', dest: [S.docs()] },
    ...needsCv('edit', 'Editor', '/edit/', [S.editor('Editor', '/edit/')], { noun: 'resume' }),
    { id: 'latest', flow: 4, title: 'Latest resume, returning user', path: '/latest-resume/', cv: true, dest: [S.latest('Editor (/edit/)', '/latest-resume/', true, 'screen:editor')] },
    { id: 'latest-new', flow: 4, title: 'Latest resume, no CV yet', path: '/latest-resume/', cv: false, dest: [S.latest('My Documents', '/latest-resume/', false, 'route:/dashboard/resumes/')] },
    ...PLAN_NAMES.map(pl => ({ id: 'upgrade-' + pl, flow: 4, title: pl === 'student' ? 'Verify student status' : `Upgrade · ${pl}`, path: `/upgrade/${pl}/`, dest: [S.upgrade(pl === 'student' ? 'Student verification' : `Premium plans · ${pl} picked`, pl)] })),

    // guests land straight in the app (the user's rule): no CV step, setup or loading; saving, the menu, AI and
    // tailoring open the sign-up pop-up (signupPop)
    { id: 'guest-ai', flow: 4, title: 'Create Resume with AI · guest', path: '/dashboard/create-ai-resume/', guest: true, cv: false, dest: [S.editor('Editor (guest) · AI asks to sign up', '/dashboard/create-ai-resume/')] },
    { id: 'guest-tailor', flow: 4, title: 'Tailor resume · guest', path: '/dashboard/tailor-resume/', guest: true, cv: false, dest: [S.editor('Editor (guest) · Resume Tailoring asks to sign up', '/dashboard/tailor-resume/')] },

    // landing pages that gave more than a CV: tailoring with the job, Translate with the language (a Translate landing
    // page takes both or neither: the user's rule), and a CV for the Upload resume screen and the ATS check (Back after
    // a failed upload: their own runs)
    { id: 'landing-cv', flow: 3, title: 'CV given on the landing page', path: '/dashboard/upload-resume/', entry: landing('CV attached'), cv: true, lp: true, redo: 'upload', ...upmRun('/dashboard/upload-resume/'), dest: resumeOut(), noun: 'resume' },
    { id: 'landing-ats', flow: 3, title: 'ATS check of a CV from the landing page', path: ATS, entry: landing('CV attached'), cv: true, lp: true, redo: 'analyse-resume-new', ...upmRun('/dashboard/upload-resume/'), dest: atsOut, noun: 'ATS report' },
    { id: 'landing-tailor', flow: 3, title: 'Tailoring with a CV and a job from the landing page', path: '/dashboard/tailor-resume/', cv: true, data: true, lp: true, redo: 'tailor-resume-new',
      entry: landing('CV and job', 'Flow 3: the visitor gave a CV (jana-cv.pdf) and the tailoring setup (the job post and Balanced) on a landing page, so after sign-up the CV is uploaded and tailoring starts straight away.'),
      ...trlRun('/dashboard/tailor-resume/'),  // the CV is uploaded inside the tailoring (no upload modal of its own)
      dest: resumeOut('Editor · the tailored copy', 'tailoring'), noun: 'tailored resume' },
    { id: 'landing-jobs-tailor', flow: 3, title: 'Tailoring to a job with a CV from the landing page', path: '/jobs/job/1234/tailor/', url: '/jobs/job/{id}/ · Tailor Your Resume', cv: true, data: true, lp: true, redo: 'jobs-tailor-new',
      entry: landing('CV and job', 'Flow 3: the visitor gave a CV (jana-cv.pdf) on a job’s landing page, which carries the job, so after sign-up the CV is uploaded and tailoring to that job starts straight away.'),
      ...trlRun('/jobs/job/1234/tailor/'),
      dest: resumeOut('Editor · the tailored copy', 'tailoring'), noun: 'tailored resume' },
    { id: 'translate-resume', flow: 3, title: 'Translate resume from a landing page, with a CV', path: TR, cv: true, data: true, lp: true, redo: 'translate-app-new',
      entry: landing('CV and language', 'Flow 3: the visitor gave a CV (jana-cv.pdf) and picked a language (Spanish) on a landing page, so after sign-up the CV is uploaded and the translated copy opens in Fill In.'),
      ...upmRun('/dashboard/upload-resume/'), dest: TR_FILL, noun: 'translation' },
    // without a CV the landing page has no language either (the user's rule): the CV first, then Proofread & Translate,
    // where the language is picked
    { id: 'translate-lp-new', flow: 2, title: 'Translate resume from a landing page, no CV', path: TR, cv: false, lp: true,
      entry: landing('no CV', 'Flow 2: the visitor came from a Translate landing page without a CV, so nothing to translate and no language yet: after sign-up they make the CV first, then Proofread & Translate asks for the language.'),
      prep: [S.cv(TR), ...cvMade(TR)], process: false, dest: TR_DEST, noun: 'translation' }
  ];
  /* Where the person comes from (the dock's From): Sign up (a new user, Flow 1's goal screen), a landing page (lp),
     no account yet (guest) or the app */
  const fromOf = f => f.flow === 1 ? 'signup' : f.lp ? 'lp' : f.guest || f.id === 'guest-edit' ? 'guest' : 'app';
  /* From a landing page (a new user, the doc's "New"): the App's run after Sign up. Landing pages collect a CV only
     for URLs that need or make one (the user's rule: none on the others, and none for Log in, the latest-resume links
     or the guest editor). The editor (/edit/) has no landing page: it only opens with a document (the user's rule:
     uploaded, a sample…; /edit/ alone is a 404). With a CV it is uploaded after sign-up (the upload modal; a LinkedIn profile is imported)
     and the run goes on to the setup (Flow 2), or straight to the loading or page when there is none (Flow 3). The
     writers' details may come with it too (data): then their form is skipped and the run is Flow 3. */
  const LP_UPM = S.route('Upload modal · Uploading resume...', '/dashboard/upload-resume/', 'progress');
  // the job board and its results need no account (the user's rule: the jobs landing page is the board itself), so
  // a visitor from a landing page is a guest there (guest-jobs, guest-results), never sent to Sign up first
  const LP_NONE = ['', '/login/', '/edit/', '/guest-edit-start/', '/latest-resume/', '/latest-resume/analyze/', '/latest-resume/proofread/', '/latest-resume/recruiter-feedback/', '/jobs/', '/jobs/search/'];
  // not the resume-building URLs (New resume, a template, Create Resume with AI): someone there has no resume yet, and
  // a landing page with an upload block leads to Upload resume (the user's rule)
  const LP_CV = ['/dashboard/upload-resume/', '/dashboard/linkedin-import/', '/dashboard/tailor-resume/',
    '/jobs/job/1234/tailor/', '/dashboard/rewrite-resume/', ATS, '/dashboard/proofreading/', TR, '/dashboard/recruiter-feedback/', '/dashboard/career-coach/', JM,
    '/dashboard/create-ai-cover-from-job/', '/dashboard/create-interview/', '/ai/resignation/', '/career-map/'];
  function lpVariant(base, cv, data) {
    const list = x => [].concat(typeof x === 'function' ? x() : x || []), li = base.id === 'linkedin';
    const f = { ...base, id: `lp-${base.id}-${cv ? 'cv' : 'nocv'}${data ? '-data' : ''}`, lp: true, cv, data, redo: undefined,
      title: `${base.title.replace(/(, | · )(returning user|no CV yet)$/, '')} from a landing page${cv ? (li ? ', with a profile' : ', with a CV') : LP_CV.includes(base.path) ? ', no CV' : ''}${data ? ' and the ' + base.given.toLowerCase() : ''}` };
    if (cv && li) Object.assign(f, { flow: 3, prep: undefined, ...upmRun('/dashboard/linkedin-import/', 'Importing') });
    // with its own loading (rewriting, matching, writing) the CV is uploaded inside it: no upload modal of its own (the user's rule)
    else if (cv && (data || !base.prep)) Object.assign(f, base.flow === 4 ? { flow: 3, ...upmRun('/dashboard/upload-resume/') } : { flow: 3, prep: undefined, process: list(base.process).length ? list(base.process) : [S.process(base)] });
    // still a setup to fill (Flow 2): the CV given is uploaded first, as every feature's CV step comes before its data
    else if (cv) f.prep = [LP_UPM, ...list(base.prep)];
    // the data skips the form, not a CV the feature needs (Career Map's answers: the CV step stays)
    else if (data) Object.assign(f, { flow: base.dataPrep ? 2 : 3, prep: base.dataPrep });
    const what = cv ? (li ? 'LinkedIn profile' : data ? 'CV and ' + base.given.toLowerCase() : 'CV attached') : data ? base.given.toLowerCase() : LP_CV.includes(base.path) ? 'no CV' : 'from a landing page';
    const note = `Flow ${f.flow}: the visitor came from a landing page${cv ? (li ? ' with their LinkedIn profile' : ' with a CV (jana-cv.pdf)') : LP_CV.includes(base.path) ? ' without a CV' : ''}${data ? ` and the ${base.given.toLowerCase()}` : ''}, so after sign-up ${cv ? `it is ${li ? 'imported' : 'uploaded'} and ` : ''}${f.flow === 3 ? 'the run goes straight on' : f.flow === 4 ? 'the page opens' : cv ? 'then the setup' : 'the run goes on as in the app'}.`;
    f.entry = [S.auth('Sign up · ' + what, 'signup', note), ...list(base.entry)];
    return f;
  }
  // Tailor resume (and to a job) runs either way in the code; in the app it is offered with a CV only (the user's rule:
  // the app never goes through resume creation), so its no-CV run is a copy kept for the landing pages and redo
  ['tailor-resume', 'jobs-tailor'].forEach(id => { const f = FEATURES.find(x => x.id === id); f.cv = true; FEATURES.push({ ...f, id: id + '-new', title: f.title + ' · no CV yet', cv: false }); });
  FEATURES.push(...[...new Set(FEATURES.map(f => f.path))].filter(p => !LP_NONE.includes(p)).flatMap(path => {
    const app = FEATURES.filter(f => f.path === path && fromOf(f) === 'app'), here = FEATURES.filter(f => f.path === path && f.lp);
    if (!app.length || path === TR) return [];  // Translate's landing runs are written above (with the CV and the language, or neither)
    const pick = cv => app.find(f => f.cv === cv) || app.find(f => f.cv === undefined) || app[0];
    // Tailor, like Translate, is one landing-page flow: a landing page that takes the CV takes the job too (the user's
    // rule), so with a CV there is only the run with the data (landing-tailor, landing-jobs-tailor)
    const both = cv => cv && ['/dashboard/tailor-resume/', '/jobs/job/1234/tailor/'].includes(path);
    return [false, true].filter(cv => !cv || LP_CV.includes(path)).flatMap(cv => (both(cv) ? [true] : [false, ...(pick(cv).given ? [true] : [])]).map(data => [cv, data]))
      .filter(([cv, data]) => !here.some(f => f.cv === cv && !!f.data === data)).map(([cv, data]) => lpVariant(pick(cv), cv, data));
  }));
  // in the app a feature that needs a CV runs only with one (the user's rule: the app never goes through resume
  // creation). The resume checks (ATS, Recruiter feedback, Career coach, Proofreading, Translate) aren't even shown
  // without a CV; Tailor, Rewrite, Jobs for You and the editor are shown but can't be reached without one. Their no-CV
  // runs are not offered from the app; they stay as the landing-page runs' base and as a failed upload's redo
  // the app runs without a CV now go through CV creation (the user's rule), except the editor's: /edit/ needs a document
  const APP_CV_ONLY = ['edit-new'];
  // and with a CV, the features that need one start with Pick a resume (the user's rule): Flow 2 in the app
  FEATURES.forEach(f => {
    if (!PICK_VERB[f.path] || f.lp || f.cv !== true || fromOf(f) !== 'app') return;
    const prep = f.prep, list = () => [].concat(typeof prep === 'function' ? prep() : prep || []);
    Object.assign(f, { flow: 2, prep: typeof prep === 'function' ? () => [S.pick(f.path), ...list()] : [S.pick(f.path), ...list()] });
    if (!f.process) f.process = false;  // the checks still open their page straight away: no loading of their own
  });
  FEATURES.forEach(f => { if (APP_CV_ONLY.includes(f.id)) f.appOff = true; });
  FEATURES.forEach(f => { f.group = kindOf(f.path); });  // the six groups (the old checklist groups are gone)
  /* A feature's run through its flow's stages */
  function buildFlow(f) {
    // process and state may depend on the CV (functions); when they give nothing, the shared ones stand in
    const T = FLOW_T[f.flow - 1], has = st => T.stages.includes(st), list = x => [].concat(typeof x === 'function' ? x() : x || []), or = (a, b) => a.length ? a : b;
    const at = (stage, steps) => list(steps).map(s => ({ ...s, stage }));
    return { n: f.flow, title: f.title, f, steps: [
      ...at('entry', f.entry),
      ...(has('intent') ? at('intent', S.screen('Goal screen', 'intent')) : []),
      ...(has('prep') ? at('prep', f.prep) : []),
      ...(has('process') && f.process !== false ? at('process', or(list(f.process), [S.process(f)])) : []),
      ...(has('state') && f.process !== false ? at('state', [...or(list(f.state), [S.state(f)]), ...(f.guest ? [S.wire('Sign-up wall', '/register/', 'wall')] : [])]) : []),
      ...at('dest', f.dest)
    ] };
  }
  let flowNow = null, flowAt = 0, procResult = 'ok';

  /* The run dock (bottom right, beside More options): the flow to try in one row, always at hand. The URL says where
     the person ends up; where they come from and whether they have a CV decide which of the four flows that makes, and
     so which steps they see: Open (the URL) · From (Sign up, App, Landing page, Guest) · CV · Ends (the processing
     result) → Run (Flow N). FEATURES has an entry per URL and arrival (fromOf); a URL's CV is the person's to choose
     only when it runs both ways from there. The dock is drawn once and updated in place (dockUpdate); each list opens
     upwards and scrolls inside itself (the native select fills a Mac's screen with 46 URLs). */
  const dockEl = document.getElementById('proto-dock'), pmFlows = document.getElementById('pm-flows');
  const FROM = [
    ['signup', 'Sign up', 'A new user from /register: we ask what they want first (the goal screen)'],
    ['app', 'App', 'The app menu, the dashboard, an email or the URL itself'],
    ['lp', 'Landing page', 'Any URL, with a CV given on the landing page or without one; sign-up comes first', 'Landing'],
    ['guest', 'Guest', 'No account yet: straight into the app; saving, AI and the menu ask them to sign up']
  ];
  const ENDS = [['ok', 'Completed', 'Processing goes straight on to the result', 'Done'], ['fail', 'Failed', 'The input can’t be used (an unreadable file, a private profile)'], ['error', 'Error', 'Something broke on our side; the person can try again']];
  let pmKey = '', pmFrom = 'signup', pmCvOn = false, pmDataOn = false;  // the URL (a feature's path; '' is Build my resume, only the goal screen leads there)
  const runsWithCv = f => f.cv ?? pmCvOn;
  // Flow 1 lives on /register/ only (the user's rule): its goal runs are branches of Build my resume's entry, picked on
  // the goal screen, never their tools' URLs
  const dockPath = f => f.flow === 1 ? '' : f.path;
  const pmList = (key = pmKey, from = pmFrom) => FEATURES.filter(f => !f.appOff && dockPath(f) === key && fromOf(f) === from);
  const pmCvFree = list => list.some(f => f.cv === undefined) || (list.some(f => f.cv === true) && list.some(f => f.cv === false));
  // the entries for that CV (else the URL's either-way one), then the one with or without the landing page's data
  const pmPool = (list, cv) => [list.filter(f => f.cv === cv), list.filter(f => f.cv === undefined), list].find(p => p.length) || [];
  const pmPickOf = (list, cv, data = pmDataOn) => { const pool = pmPool(list, cv); return pool.find(f => !!f.data === data) || pool[0]; };
  const pmDataFree = list => { const pool = pmPool(list, runsWithCv(pmPickOf(list, pmCvOn))); return pool.some(f => f.data) && pool.some(f => !f.data); };
  const pmFeature = () => pmPickOf(pmList(), pmCvOn);
  const pmAvail = () => new Set(FEATURES.filter(x => !x.appOff && dockPath(x) === pmKey).map(fromOf));
  // the steps a run shows with the CV it starts with
  function pmSteps(f) { const had = cvUploaded; cvUploaded = runsWithCv(f); const st = buildFlow(f).steps; cvUploaded = had; return st; }
  // Open's list: one entry per URL, named after the app's feature there (else the first), in the six groups (KINDS)
  const PM_URLS = KINDS.flatMap(([group, paths]) => paths.filter(key => FEATURES.some(f => f.path === key)).map(key => {
    const all = FEATURES.filter(f => f.path === key), main = all.find(f => fromOf(f) === 'app') || all[0];
    return { key, title: key ? main.title.replace(/, (returning user|no CV yet)$/, '') : 'Sign up (/register/)', group };
  }));
  const PM_GROUPS = KINDS.map(([g]) => g).filter(g => PM_URLS.some(u => u.group === g));
  const chev = '<svg class="dk-chev" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 15 6-6 6 6"/></svg>';
  let ddSeq = 0;
  const ddHTML = (name, cap, groups) => `<div class="dk-dd" data-dd="${name}"><button class="dk-btn" type="button" aria-haspopup="listbox" aria-expanded="false" id="dk-${name}"><span class="dk-cap">${cap}</span><span class="dk-val"><b></b>${chev}</span></button>
    <div class="dk-list" role="listbox" tabindex="-1" aria-labelledby="dk-${name}" hidden>${groups.map(([g, opts]) => `<div role="group"${g ? ` aria-label="${g}"` : ''}>${g ? `<div class="dk-g" aria-hidden="true">${g}</div>` : ''}${opts.map(([v, l, sub]) => `<div class="dk-opt" role="option" id="dk-o${++ddSeq}" data-value="${v}" aria-selected="false"><span>${l}</span>${sub ? `<small>${sub}</small>` : ''}</div>`).join('')}</div>`).join('')}</div></div>`;
  function renderDock() {
    dockEl.innerHTML = ddHTML('url', 'Open', PM_GROUPS.map(g => [g, PM_URLS.filter(u => u.group === g).map(u => [u.key, u.title])]))
      + ddHTML('from', 'From', [['', FROM]])
      + `<button class="dk-cv" type="button" role="switch" aria-checked="false"><span class="dk-cap">CV</span><span class="dk-sw" aria-hidden="true"><i></i></span></button>`
      + `<button class="dk-cv dk-data" type="button" role="switch" aria-checked="false"><span class="dk-cap">Data</span><span class="dk-sw" aria-hidden="true"><i></i></span></button>`
      + ddHTML('end', 'Ends', [['', ENDS]])
      + `<button class="dk-run" type="button" data-flow-run><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12.5-7.5z"/></svg><span></span></button>`;
    dockUpdate();
  }
  function dockUpdate() {
    if (!dockEl.firstChild) return;
    const f = pmFeature(), T = FLOW_T[f.flow - 1], avail = pmAvail(), fixed = !pmCvFree(pmList()), on = runsWithCv(f);
    const val = (name, v, label, short) => {  // a short label for phones, where the dock is one tight row
      const d = dockEl.querySelector(`[data-dd="${name}"]`);
      d.querySelector('.dk-val b').innerHTML = short ? `<span class="dk-long">${label}</span><span class="dk-short">${short}</span>` : label;
      d.querySelectorAll('.dk-opt').forEach(o => o.setAttribute('aria-selected', String(o.dataset.value === v)));
    };
    val('url', pmKey, PM_URLS.find(u => u.key === pmKey).title);
    val('from', pmFrom, ...FROM.find(([v]) => v === pmFrom).filter((x, i) => i === 1 || i === 3));
    dockEl.querySelectorAll('[data-dd="from"] .dk-opt').forEach(o => { if (avail.has(o.dataset.value)) o.removeAttribute('aria-disabled'); else o.setAttribute('aria-disabled', 'true'); });
    val('end', procResult, ...ENDS.find(([v]) => v === procResult).filter((x, i) => i === 1 || i === 3));
    const sw = dockEl.querySelector('.dk-cv:not(.dk-data)');
    sw.setAttribute('aria-checked', String(on));
    sw.setAttribute('aria-label', `The person has a CV${fixed ? ' (set by where they come from)' : ''}`);
    sw.dataset.tip = fixed ? (on ? 'Has a CV · set by where they come from' : 'No CV · set by where they come from') : on ? 'Has a CV' : 'No CV';
    if (fixed) sw.setAttribute('aria-disabled', 'true'); else sw.removeAttribute('aria-disabled');
    // Data: what the feature's setup asks, already given on the landing page (the job post, the letter's details, the
    // language); only where both can happen, else dimmed
    const ds = dockEl.querySelector('.dk-data'), dFree = pmDataFree(pmList()), dOn = !!f.data, dNoun = (pmList().find(x => x.data) || f).given || (f.path === TR ? 'Language' : 'Job post');
    ds.setAttribute('aria-checked', String(dOn));
    ds.setAttribute('aria-label', `The landing page gave the data (${dNoun.toLowerCase()})${dFree ? '' : ' (set by the URL)'}`);
    ds.dataset.tip = !dFree && !dOn ? 'Nothing to give before' : `${dOn ? dNoun + ' given on the landing page' : 'Asked in the setup'}${dFree ? '' : ' · set by the URL'}`;
    if (dFree) ds.removeAttribute('aria-disabled'); else ds.setAttribute('aria-disabled', 'true');
    const run = dockEl.querySelector('.dk-run');
    run.dataset.feature = f.id; run.querySelector('span').innerHTML = '<span class="dk-long">Flow </span>' + T.n;
    run.setAttribute('aria-label', `Run flow ${T.n}, ${T.title}: ${f.title}`);
    run.dataset.tip = `${T.title} · ${pmSteps(f).length} steps`;
    run.classList.toggle('is-on', !!flowNow && (flowNow.f === f || (flowNow.n === 1 && f.flow === 1)));
  }
  /* the lists: above their button (below when there's more room), as tall as the window allows, scrolling inside
     themselves; arrow keys, Home / End, Page Up / Down, a letter, Enter or Space, Escape */
  const ddParts = d => ({ btn: d.querySelector('.dk-btn'), list: d.querySelector('.dk-list') });
  const ddOpts = list => [...list.querySelectorAll('.dk-opt:not([aria-disabled="true"])')];
  function ddActive(list, o, center) {
    list.querySelector('.is-active')?.classList.remove('is-active');
    if (!o) return;
    o.classList.add('is-active'); list.setAttribute('aria-activedescendant', o.id);
    const top = o.offsetTop, bot = top + o.offsetHeight;
    if (center) list.scrollTop = top - (list.clientHeight - o.offsetHeight) / 2;
    else if (top - 26 < list.scrollTop) list.scrollTop = top - 26;  // with its group's name when there is one above
    else if (bot > list.scrollTop + list.clientHeight) list.scrollTop = bot - list.clientHeight + 4;
  }
  function ddOpen(d) {
    ddClose();
    const { btn, list } = ddParts(d), r = btn.getBoundingClientRect(), w = Math.min(innerWidth - 16, Math.max(r.width, d.dataset.dd === 'url' ? 260 : 280));
    const above = r.top - 12, below = innerHeight - r.bottom - 12, up = above >= 260 || above >= below;
    Object.assign(list.style, { left: Math.max(8, Math.min(r.left, innerWidth - w - 8)) + 'px', width: w + 'px', maxHeight: Math.min(440, up ? above : below) + 'px',
      top: up ? 'auto' : r.bottom + 6 + 'px', bottom: up ? innerHeight - r.top + 6 + 'px' : 'auto' });
    list.hidden = false; btn.setAttribute('aria-expanded', 'true');
    ddActive(list, list.querySelector('[aria-selected="true"]') || ddOpts(list)[0], true);
    list.focus({ preventScroll: true });
  }
  function ddClose(refocus) {
    const d = dockEl.querySelector('.dk-btn[aria-expanded="true"]')?.closest('.dk-dd');
    if (!d) return;
    const { btn, list } = ddParts(d);
    list.hidden = true; btn.setAttribute('aria-expanded', 'false'); list.removeAttribute('aria-activedescendant');
    if (refocus) btn.focus({ preventScroll: true });
  }
  function ddPick(d, v) {
    const name = d.dataset.dd;
    if (name === 'url') {
      pmKey = v;
      const avail = pmAvail();
      if (!avail.has(pmFrom)) pmFrom = avail.has('app') ? 'app' : [...avail][0];
    } else if (name === 'from') pmFrom = v;
    ddClose(true);
    if (name === 'end') setResult(v); else dockUpdate();
  }
  dockEl.addEventListener('click', e => {
    const opt = e.target.closest('.dk-opt'), btn = e.target.closest('.dk-btn'), cv = e.target.closest('.dk-cv:not(.dk-data)'), data = e.target.closest('.dk-data');
    if (data) return data.getAttribute('aria-disabled') === 'true' ? null : (pmDataOn = !pmDataOn, dockUpdate());
    if (btn) return btn.getAttribute('aria-expanded') === 'true' ? ddClose(true) : ddOpen(btn.closest('.dk-dd'));
    if (opt) return opt.getAttribute('aria-disabled') === 'true' ? null : ddPick(opt.closest('.dk-dd'), opt.dataset.value);
    if (cv && cv.getAttribute('aria-disabled') !== 'true') { pmCvOn = !pmCvOn; dockUpdate(); if (!flowNow) setCv(pmCvOn); }  // no run: the CV now too
  });
  dockEl.addEventListener('pointermove', e => { const o = e.target.closest('.dk-opt:not([aria-disabled="true"])'); if (o && !o.classList.contains('is-active')) ddActive(o.closest('.dk-list'), o); });
  dockEl.addEventListener('keydown', e => {
    if (e.target.closest('.dk-btn') && ['ArrowDown', 'ArrowUp'].includes(e.key)) { e.preventDefault(); return ddOpen(e.target.closest('.dk-dd')); }
    const list = e.target.closest('.dk-list'); if (!list) return;
    const opts = ddOpts(list), i = opts.indexOf(list.querySelector('.is-active'));
    const to = k => { e.preventDefault(); ddActive(list, opts[Math.max(0, Math.min(opts.length - 1, k))]); };
    if (e.key === 'ArrowDown') to(i + 1); else if (e.key === 'ArrowUp') to(i - 1);
    else if (e.key === 'Home') to(0); else if (e.key === 'End') to(opts.length - 1);
    else if (e.key === 'PageDown') to(i + 8); else if (e.key === 'PageUp') to(i - 8);
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (opts[i]) ddPick(list.closest('.dk-dd'), opts[i].dataset.value); }
    else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); ddClose(true); }
    else if (e.key === 'Tab') ddClose();
    else if (e.key.length === 1 && /\S/.test(e.key)) {  // the next entry starting with that letter
      const k = e.key.toLowerCase(), next = [...opts.slice(i + 1), ...opts.slice(0, i + 1)].find(o => o.textContent.trim().toLowerCase().startsWith(k));
      if (next) { e.preventDefault(); ddActive(list, next); }
    }
  });
  // a press outside the open list, leaving it with Tab or resizing the window closes it
  document.addEventListener('pointerdown', e => { if (!e.target.closest('.dk-dd')) ddClose(); });
  dockEl.addEventListener('focusout', e => { if (e.target.closest('.dk-list') && !e.target.closest('.dk-dd').contains(e.relatedTarget)) ddClose(); });
  window.addEventListener('resize', () => ddClose());
  // the dock follows the run: the URL, where the person came from and the CV of the feature that runs
  function pmShow(f) {
    pmKey = dockPath(f); pmFrom = fromOf(f);
    if (f.cv !== undefined && pmCvFree(pmList())) pmCvOn = f.cv;
    pmDataOn = !!f.data;
    dockUpdate();
  }
  // More options › Flows keeps only the Flow checker (and the look under it)
  function renderFlowsPanel() {
    pmFlows.innerHTML = `<div class="pmf-check"><span class="pm-key" id="pmf-check">Flow checker</span><button class="pmf-cv" type="button" role="switch" data-pm-check aria-checked="${checkerOn}" aria-labelledby="pmf-check" data-tip="Start as a new user on Sign up; the bar shows the flow you’re in"><i aria-hidden="true"></i><span>${checkerOn ? 'On' : 'Off'}</span></button></div>`;
  }
  pmFlows.addEventListener('click', e => { if (e.target.closest('[data-pm-check]')) setChecker(!checkerOn); });

  /* Flow checker (More options › Flows): you go through the prototype as a new user. On, it starts on Sign up as
     Flow 1 (the goal you pick decides the rest); once a run has reached its destination, or the person skipped to the
     dashboard, whatever they open in the app becomes its own run (checkerAdopt), so the bar always says which flow and
     step they're in. Restart starts on Sign up again; it is remembered. Off ends the run. */
  let checkerOn = false;
  try { checkerOn = localStorage.getItem('kr-flow-checker') === 'on'; } catch (e) {}
  function setChecker(on) {
    checkerOn = on;
    try { localStorage.setItem('kr-flow-checker', on ? 'on' : 'off'); } catch (e) {}
    const sw = pmFlows.querySelector('[data-pm-check]');
    sw.setAttribute('aria-checked', String(on)); sw.querySelector('span').textContent = on ? 'On' : 'Off';
    markMore();
    if (on) startChecker(); else endFlow();
  }
  function startChecker() { setCv(false); setResult('ok'); startFeature('goal-build'); }
  function checkerAdopt(path) {
    if (!checkerOn || !path) return;
    const r = findRoute(path), key = r ? r.path : path, at = s => s.match.split('#')[0] === 'route:' + key;
    if (key === '/dashboard/' && flowNow && flowNow.skipped) return;  // Flow 1's Skip personalization says so itself
    // a new task: no run, a skipped one, or a screen the run doesn't have (once it has reached its destination, any
    // screen but that one)
    const st = flowNow && flowNow.steps, last = st && flowAt === st.length - 1;
    if (flowNow && !flowNow.skipped && (last ? at(st[flowAt]) : st.some(at))) return;
    const list = FEATURES.filter(f => f.path === key && fromOf(f) === 'app' && !f.appOff); if (!list.length) return;
    const f = pmPickOf(list, cvUploaded, false);
    if (flowNow && flowNow.f === f && !flowNow.skipped) return;
    flowNow = buildFlow(f); flowAt = 0; pmShow(f); renderFlowBar(); flowSync();
  }
  renderFlowsPanel(); renderDock();
  function startFeature(id) {
    const f = FEATURES.find(x => x.id === id);
    setCv(runsWithCv(f));
    cvNext = buildNext = null; tailored = null;  // nothing from an earlier run carries over
    flowNow = buildFlow(f); pmShow(f);
    flowGo(0);
  }

  const flowBar = document.getElementById('flow-bar'), flowLive = document.getElementById('flow-live');
  function renderFlowBar() {
    syncBackLinks();
    // the bar is drawn anew: focus on one of its buttons comes back to the same button (or the step now on)
    const had = flowBar.contains(document.activeElement) && document.activeElement, was = had && (had.matches('.fb-dot') ? '' : had.getAttribute('aria-label'));
    flowBar.hidden = !flowNow;
    dockEl.querySelector('.dk-run')?.classList.toggle('is-on', !!flowNow && (flowNow.f === pmFeature() || (flowNow.n === 1 && pmFeature().flow === 1)));
    if (!flowNow) { flowLive.textContent = ''; if (had) pmBtn.focus(); return; }
    const st = flowNow.steps[flowAt], groups = [];
    flowNow.steps.forEach((s, i) => { const g = groups.at(-1); if (g && g.stage === s.stage) g.items.push([s, i]); else groups.push({ stage: s.stage, items: [[s, i]] }); });
    const dot = ([s, i]) => `<button class="fb-dot${s.wire ? ' is-wire' : ''}${i === flowAt ? ' is-on' : ''}${i < flowAt ? ' is-past' : ''}" type="button" data-flow-step="${i}"${i === flowAt ? ' aria-current="step"' : ''} aria-label="Step ${i + 1}, ${STAGE[s.stage]}: ${s.label}${s.wire ? ' (wireframe)' : ''}" data-tip="${STAGE[s.stage]} · ${s.label}${s.wire ? ' · wireframe' : ''}"></button>`;
    const left = flowNow.skipped === 'closed' ? 'Closed → Dashboard' : 'Skipped personalization → Dashboard';
    const now = flowNow.skipped ? left : `${flowAt + 1}/${flowNow.steps.length} · ${STAGE[st.stage]} · ${st.label}${st.wire ? ' <i>wireframe</i>' : ''}`;
    flowBar.innerHTML = `<b class="fb-name">Flow ${flowNow.n} · ${flowNow.title}</b>
      <span class="fb-steps">${groups.map(g => `<span class="fb-grp st-${g.stage}">${g.items.map(dot).join('')}</span>`).join('')}</span>
      <span class="fb-now">${now}</span>
      <button class="fb-nav" type="button" data-flow-step="${flowAt - 1}" aria-label="Previous step"${flowAt ? '' : ' disabled'}>${icon('arrowLeft')}</button>
      <button class="fb-nav fb-next" type="button" data-flow-step="${flowAt + 1}" aria-label="Next step"${flowAt < flowNow.steps.length - 1 ? '' : ' disabled'}>${icon('arrowLeft')}</button>
      <button class="fb-nav" type="button" data-flow-end aria-label="End the flow">${rtIc(RT_IC.x)}</button>`;
    flowLive.textContent = flowNow.skipped ? left.replace(' → Dashboard', ', on the dashboard') : `Step ${flowAt + 1} of ${flowNow.steps.length}, ${STAGE[st.stage]}: ${st.label}`;
    if (had) (was && flowBar.querySelector(`[aria-label="${was}"]:not(:disabled)`) || flowBar.querySelector('.fb-dot.is-on')).focus({ preventScroll: true });
  }
  function flowGo(i) {
    if (!flowNow || i < 0 || i >= flowNow.steps.length) return false;
    flowAt = i; flowNow.skipped = false; setMore(false); clearTimers(); renderFlowBar();
    flowNow.steps[i].run();
    return true;
  }
  const flowNext = () => flowGo(flowAt + 1);
  const flowOn = () => !!flowNow && flowNext();  // a screen's own button moves a running flow on
  function endFlow() { flowNow = null; renderFlowBar(); }
  /* Flow 1: the goal picked on the goal screen decides the feature for the rest of the flow */
  function flowGoal(id) {
    if (!flowNow || flowNow.n !== 1 || flowNow.f.goal === id) return;
    const at = flowAt;
    flowNow = buildFlow(FEATURES.find(f => f.flow === 1 && f.goal === id)); flowAt = at;
    pmShow(flowNow.f); renderFlowBar();
  }
  /* A step a screen reaches on its own (uploading starts): mark it in the bar */
  function flowSeen(tag) {
    if (!flowNow) return;
    const i = flowNow.steps.findIndex((s, k) => k > flowAt && s.tag === tag);
    if (i > flowAt) { flowAt = i; renderFlowBar(); }
  }
  /* After processing: Completed goes straight on to the destination (the processing screen ends on its own success),
     Failed and Error show the processing state. More options › Result picks which. */
  function afterProcessAt() {
    const st = flowNow.steps; let k = st.findLastIndex(s => s.stage === 'process') + 1;
    if (st[k] && st[k].result && procResult === 'ok') k++;
    return k;
  }
  function processDone() {
    if (flowNow) return flowGo(afterProcessAt());
    // no run (it was ended, or the screen was opened from URLs): on to what the feature makes, as Skip promises
    const f = routeNow && FEATURES.find(x => x.path === routeNow.path && x.dest), d = f && [].concat(typeof f.dest === 'function' ? f.dest() : f.dest)[0];
    if (d) d.run();
  }
  /* Put the bar back on a step the screen returned to by itself (Tailor's Retry and Close), without opening it again */
  function flowTo(match) {
    if (!flowNow) return;
    const i = flowNow.steps.findIndex(s => s.match === match);
    if (i >= 0 && i !== flowAt) { flowAt = i; renderFlowBar(); }
  }
  function stateAction(w) {
    if (!flowNow) return toast('Run a flow (More options › Flows) to move on from here.');
    const first = st => flowNow.steps.findIndex(s => s.stage === st);
    if (w === 'state-next') flowNext();
    else if (w === 'state-retry') {
      // back to the input just given; a run whose input came before it (Flow 3: a landing page's CV, a template in
      // the URL) has no screen for it, so it goes on as the feature's own run that asks for it (redo)
      const prep = flowNow.steps.findLastIndex(s => s.stage === 'prep');
      if (prep >= 0) flowGo(prep); else if (flowNow.f.redo) startFeature(flowNow.f.redo); else flowGo(first('process'));
    }
    else flowGo(first('process'));
  }
  function setResult(r) {
    procResult = r;
    document.querySelectorAll('[data-result]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.result === r)));
    dockUpdate();
    const card = current === 'route' && screens.route.querySelector('[data-pane="state"]');
    if (card) { card.innerHTML = WIRE.state({ f: flowNow ? flowNow.f : { noun: 'result' } }); syncNote(); routeHead(routeNow, 'state'); }
    const tld = current === 'route' && screens.route.querySelector('.tld:not([data-state="run"])');
    if (tld && !tld.closest('[hidden]')) tld._end();
    markMore();
  }
  /* A screen picked from the Screens list or typed as a URL ends the running flow unless it is one of its steps */
  function leavesFlow(r) { return !!flowNow && !flowNow.steps.some(s => s.match.split('#')[0] === 'route:' + r.path); }
  /* The wireframe's note (wNote) sits in the chrome at the bottom, never on the screen: the one on screen now, or none.
     Sign up and Log in show one only when their flow step gives it (S.auth's note). */
  function syncNote() {
    const note = document.getElementById('proto-note');
    const wire = current === 'route' && [...screens.route.querySelectorAll('.rt-wire')].find(el => !el.closest('[hidden]'));
    const src = wire && wire.querySelector(':scope > .wf-note-src');
    const text = src ? src.innerHTML : current === 'auth' ? authNote : current === 'editor' && edView === 'design' && dzTab !== 'templates' ? `The Design tab’s ${dzTab === 'format' ? 'Format' : 'Layout'}: no design yet.` : '';  // a designed page only when its flow step gives one
    note.hidden = !text; document.body.classList.toggle('has-note', !!text);
    if (text) note.querySelector('.pn-text').innerHTML = text;
  }
  /* Keep the bar in step when the person moves on with the screen's own buttons */
  function flowSync() {
    if (!flowNow) return;
    if (flowNow.n === 1 && current === 'dashboard' && ['intent', 'prep'].includes(flowNow.steps[flowAt].stage)) { flowNow.skipped = true; return renderFlowBar(); }  // Skip personalization
    const pane = current === 'route' && screens.route.querySelector('.rt-item > .rt-pane:not([hidden])');
    const key = pickOpen ? `route:${pickOpen}#pick` : current === 'route' ? `route:${routeNow ? routeNow.path : ''}#${pane ? pane.dataset.pane : ''}` : current === 'auth' ? `route:${AUTH[authKind].path}#main` : current === 'upgrade' ? `route:${upgPath()}#main` : current === 'docs' ? 'route:/dashboard/resumes/#main' : current === 'tool' ? `route:${toolPath}#${toolKind === 'iq' ? iqState : atsBusy ? 'process' : 'main'}` : current === 'tpl' ? 'route:/dashboard/create-resume/#main' : current === 'jobs' ? `route:${JOBS_PATH[jobsView]}#${jobsState}` : current === 'cm' ? `route:/career-map/#${cmState}` : 'screen:' + current;
    const i = flowNow.steps.findIndex((s, k) => k >= flowAt && key.startsWith(s.match));
    if (i > flowAt || (i === flowAt && flowNow.skipped)) { flowAt = i; flowNow.skipped = false; renderFlowBar(); }  // back in the run
  }
  flowBar.addEventListener('click', e => {
    const b = e.target.closest('[data-flow-step]');
    if (b && !b.disabled) return flowGo(+b.dataset.flowStep);
    if (e.target.closest('[data-flow-end]')) endFlow();
  });
  /* After the building screen: the editor (or the section a writer wrote, or the screen that asked for the CV), unless
     the building screen is the running flow's processing and something else comes next (a failed result, a sign-up
     wall, the ATS checker) */
  function afterBuild() {
    const next = buildNext; buildNext = null;
    if (next && next.forPath === ATS && (procResult === 'ok' || !flowNow)) return atsAnalyze();  // the ATS check's loading
    if (flowNow && flowNow.steps[flowAt] && flowNow.steps[flowAt].stage === 'process' && flowNow.steps[flowAt].match === 'screen:loading') {
      const k = afterProcessAt(), nx = flowNow.steps[k];
      if (nx && nx.match !== 'screen:editor') return flowGo(k);
    }
    if (next) next(); else { designNext = true; openEditor(); }  // a new resume: the Design tab
  }
  /* Straight into the editor (a returning user, or a flow step) */
  function jumpEditor(doc) {
    edDoc = doc || 'resume';
    if (screenRun) screenRun.finish();
    clearTimers();
    if (APPS[current]) { APPS[current].hidden = true; APPS[current].innerHTML = ''; topbarEl.hidden = false; pageEl.hidden = false; }
    Object.entries(screens).forEach(([k, sc]) => { sc.hidden = k !== 'loading'; });
    setCurrent('loading');
    return openEditor();
  }

  /* Accepts links with or without https:// and www., mobile (m.) and country subdomains,
     trailing slashes and query/tracking params (e.g. app share links ending in ?utm_…). */
  function normLinkedIn(v) {
    const s = v.trim().replace(/^https?:\/\//i, '').replace(/^(www\.|m\.|[a-z]{2}\.)/i, '');
    const m = s.match(/^linkedin\.com\/in\/([^/?#\s]+)/i);
    if (!m) return null;
    try { return `https://www.linkedin.com/in/${decodeURIComponent(m[1])}`; } catch (e) { return null; }  // a broken %-escape
  }
  function checkLinkedInC(form) {
    const input = form.querySelector('[name="url"]'), url = normLinkedIn(input.value);
    setError(input.closest('.field'), !url);
    input.setAttribute('aria-invalid', String(!url));
    form.querySelector('.c-fail').hidden = true;
    return url;
  }
  function busy(btn, label, ms, done) {
    const html = btn.innerHTML, w = btn.offsetWidth;
    btn.style.minWidth = w + 'px'; btn.disabled = true;
    btn.innerHTML = `<svg class="i spin" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>${label}`;
    later(() => { btn.innerHTML = html; btn.disabled = false; btn.style.minWidth = ''; done(); }, ms);
  }
  function showUploadErrorC(form, msg) {
    const box = form.querySelector('.c-error');
    box.querySelector('.c-msg').textContent = msg;
    box.hidden = !msg;
  }
  function submitC(form, id) {
    if (id === 'linkedin') {
      const url = checkLinkedInC(form);
      if (!url) return form.querySelector('[name="url"]').focus();
      form.querySelector('[name="url"]').value = url.replace(/^https:\/\/www\./, '');
      // Prototype stand-in for a failed import: any profile link containing "private"
      if (/private/i.test(url)) return busy(form.querySelector('[type="submit"]'), 'Importing…', 1000, () => { form.querySelector('.c-fail').hidden = false; });
      return startCreation(form, id, { url });
    }
    if (id === 'upload') {
      if (!form._file) return;
      // Prototype stand-in for a file with no readable text: any file name containing "scan"
      if (/scan/i.test(form._file.name)) return busy(form.querySelector('[type="submit"]'), 'Uploading…', 1100, () => {
        setFile(form, null); form.querySelector('input[type="file"]').value = '';
        showUploadErrorC(form, 'We couldn’t read the text in this file. It may be a scan.');
      });
      return startCreation(form, id);
    }
  }
  function setFileC(form, file) {
    const slot = form.querySelector('.file-slot');
    slot.querySelector('.file-row')?.remove();
    form._file = null;
    form.querySelector('[type="submit"]').disabled = true;
    if (!file) return showUploadErrorC(form, '');
    if (!/\.(pdf|docx?)$/i.test(file.name)) return showUploadErrorC(form, 'This file type isn’t supported. Use a PDF or DOCX.');
    if (file.size > 10 * 1024 * 1024) return showUploadErrorC(form, 'This file is over 10 MB. Try a smaller file or paste the text instead.');
    showUploadErrorC(form, '');
    form._file = file;
    form.querySelector('[type="submit"]').disabled = false;
    const kb = file.size / 1024;
    const size = kb > 1024 ? (kb / 1024).toFixed(1) + ' MB' : Math.max(1, Math.round(kb)) + ' KB';
    slot.insertAdjacentHTML('afterbegin', `
      <div class="file-row">${icon('file')}
        <span class="ftext"><span class="fname">${file.name.replace(/[<>&"]/g, '')}</span><span class="fsize">${size}</span></span>
        <button class="icon-btn" type="button" data-action="remove-file" aria-label="Remove file">${icon('x')}</button>
      </div>`);
  }

  function handleSubmit(form) {
    const id = form.dataset.method;
    if (form.hasAttribute('data-c') && (id === 'linkedin' || id === 'upload')) return submitC(form, id);
    if (id === 'linkedin') {
      const input = form.querySelector('input');
      const ok = /linkedin\.com\/in\/[\w\-%.]{2,}/i.test(input.value.trim());
      setError(input.closest('.field'), !ok);
      if (!ok) return input.focus();
      startCreation(form, id, { url: input.value.trim() });
    } else if (id === 'ai') {
      let firstBad = null;
      form.querySelectorAll('.field').forEach(fl => {
        const inp = fl.querySelector('input'); const bad = !inp.value.trim();
        setError(fl, bad); if (bad && !firstBad) firstBad = inp;
      });
      if (firstBad) return firstBad.focus();
      startCreation(form, id, { name: form.querySelector('[name="name"]').value.trim(), title: form.querySelector('[name="title"]').value.trim() });
    } else if (id === 'upload') {
      if (form._file) startCreation(form, id);
    } else if (id === 'paste') {
      const ta = form.querySelector('textarea');
      const bad = ta.value.trim().length < 80;
      setError(ta.closest('.field'), bad);
      if (bad) return ta.focus();
      startCreation(form, id);
    }
  }

  function setFile(form, file) {
    if (form.hasAttribute('data-c')) return setFileC(form, file);
    const slot = form.querySelector('.file-slot');
    const okType = file && /\.(pdf|docx?)$/i.test(file.name);
    slot.querySelector('.file-row')?.remove();
    form._file = okType ? file : null;
    setError(slot, !!file && !okType);
    form.querySelector('[type="submit"]').disabled = !okType;
    if (!okType) return;
    const kb = file.size / 1024;
    const size = kb > 1024 ? (kb / 1024).toFixed(1) + ' MB' : Math.max(1, Math.round(kb)) + ' KB';
    slot.insertAdjacentHTML('afterbegin', `
      <div class="file-row">${icon('file')}
        <span class="ftext"><span class="fname">${file.name.replace(/[<>&"]/g, '')}</span><span class="fsize">${size}</span></span>
        <button class="icon-btn" type="button" data-action="remove-file" aria-label="Remove file">${icon('x')}</button>
      </div>`);
  }

  /* ---------- Events ---------- */
  let toastTimer;
  function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
  }

  function setVariant(v) {
    if (!VARIANTS.includes(v)) return;
    variant = v;
    document.querySelectorAll('[data-variant]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.variant === v)));
    try { localStorage.setItem('kr-start-variant', v); } catch (e) {}
    markMore();
    if (current === 'create') renderCreate();
  }

  /* Flat or 3D look for the goal and method screens, in any variant (a class on <body>; see "3D look" in the CSS) */
  function setLook(v) {
    if (v !== 'flat' && v !== '3d') return;
    document.body.classList.toggle('look-3d', v === '3d');
    document.querySelectorAll('[data-look]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.look === v)));
    try { localStorage.setItem('kr-start-look', v); } catch (e) {}
    markMore();
  }

  function setLayout(v) {
    if (v !== 'grid' && v !== 'list') return;
    const changed = v !== intentLayout;
    intentLayout = v;
    document.querySelectorAll('[data-layout]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.layout === v)));
    try { localStorage.setItem('kr-start-layout', v); } catch (e) {}
    if (!changed) return;
    renderIntents();
    if (current === 'intent' && !reduce) {
      const items = [...screens.intent.querySelectorAll('.intent, .irow')];
      items.forEach((el, i) => play(el, [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: DUR.base, delay: i * STAGGER, easing: EASE.standard })
        .finished.catch(() => {}).then(a => el.getAnimations().forEach(x => x.cancel())));
    }
  }

  function setView(v) {
    if (v !== 'desktop' && v !== 'mobile') return;
    document.body.classList.toggle('is-mobile', v === 'mobile');
    setVh();
    document.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.view === v)));
    try { localStorage.setItem('kr-start-view', v); } catch (e) {}
    window.scrollTo(0, 0); device.scrollTop = 0;
    syncCreateMode(); placeVer();
  }

  document.addEventListener('click', e => {
    if (pmWrap.classList.contains('is-open') && !pmWrap.contains(e.target)) setMore(false);
    const vb = e.target.closest('[data-variant]');
    if (vb) {
      setVariant(vb.dataset.variant);
      if (current !== 'create') { clearTimers(); go('create', current === 'intent' ? screens.intent.querySelector('[data-goal="build"]') : null); }
      return;
    }
    const lk = e.target.closest('[data-look]');
    if (lk) {
      setLook(lk.dataset.look);
      if (current !== 'intent' && current !== 'create') { clearTimers(); go('intent'); }  // it shows on the goal and method screens
      return;
    }
    const lb = e.target.closest('[data-layout]');
    if (lb) {
      setLayout(lb.dataset.layout);
      if (current !== 'intent') { clearTimers(); go('intent'); }
      return;
    }
    const vw = e.target.closest('[data-view]');
    if (vw) return setView(vw.dataset.view);
    const rt = e.target.closest('[data-route]');
    if (rt) { const r = findRoute(rt.dataset.route); if (!flowNow || leavesFlow(r)) { endFlow(); setCv(runsWithCv(pmFeature())); } return openRoute(r); }  // with the dock's CV
    const run = e.target.closest('[data-flow-run]');
    if (run) return startFeature(run.dataset.feature);
    const res = e.target.closest('[data-result]');
    if (res && !res.closest('.rt-wire')) return setResult(res.dataset.result);
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const a = el.dataset.action;
    const form = el.closest('form');
    if (a === 'pick-intent') pickGoal(el.dataset.goal, el);
    else if (a === 'restart') { clearTimers(); endFlow(); if (checkerOn) startChecker(); else go('intent'); }
    else if (a === 'toggle') toggleA(el.closest('.mcard'));
    else if (a === 'open') { if (el.getAttribute('aria-disabled') !== 'true') openB(el.closest('.mcard').dataset.id); }
    else if (a === 'back') backB();
    else if (a === 'toast') toast(el.dataset.msg);
    else if (a === 'paste-example') {
      const inp = form.querySelector('input');
      inp.value = 'linkedin.com/in/jana-novak-design';
      setError(inp.closest('.field'), false); inp.focus();
    }
    else if (a === 'browse') form.querySelector('input[type="file"]').click();
    else if (a === 'remove-file') { setFile(form, null); form.querySelector('input[type="file"]').value = ''; }
    else if (a === 'paste-sample') {
      const ta = form.querySelector('textarea'); ta.value = SAMPLE_TEXT;
      ta.dispatchEvent(new Event('input', { bubbles: true })); ta.focus();
    }
    else if (a === 'proto-more') setMore(!pmWrap.classList.contains('is-open'));
    else if (a === 'proto-toggle') { const bar = el.closest('.proto'), open = !bar.classList.contains('is-open'); bar.classList.toggle('is-open', open); el.setAttribute('aria-expanded', String(open)); }
    else if (a === 'dashboard') openDashboard();
    else if (a === 'create-back') goBack(createFrom.where, createFrom.route, false, el.textContent !== 'Back');
    else if (a === 'route-close') closeRoute();
    else if (a === 'dash-start') startFromDashboard(el.dataset.method);
    else if (a === 'switch-method') switchMethod(el.dataset.to);
    else if (a === 'pane') setPane(el.dataset.pane);
    else if (a === 'ecard') toggleEcard(el.closest('.ecard'));
    else if (a === 'premium') {
      const box = el.closest('.premium'), open = !box.classList.contains('is-open');
      box.classList.toggle('is-open', open); el.setAttribute('aria-expanded', String(open));
      box.querySelector('.acc').inert = !open;
      box.querySelector('.acc').style.gridTemplateRows = open ? '1fr' : '';
    }
    else if (a === 'more-toggle') {
      const more = el.previousElementSibling, hide = !more.classList.contains('is-hidden');
      more.classList.toggle('is-hidden', hide); more.inert = hide;
      el.textContent = hide ? 'Show Additional Fields' : 'Hide Additional Fields';
      el.setAttribute('aria-expanded', String(!hide));
    }
    else if (a === 'chip-remove') {
      const key = el.dataset.list, i = +el.dataset.i, card = el.closest('.ecard');
      person[key].splice(i, 1); refreshChips(key);
      // the focus goes to the chip that took its place, the one before it, the field that adds one, or the section
      const btns = editorEl.querySelectorAll(`[data-out="${key}"] [data-action="chip-remove"]`);
      (btns[Math.min(i, btns.length - 1)] || card.querySelector('[data-add]') || card.querySelector('.ehead')).focus();
    }
    else if (a === 'rv-sec') editSection(el.dataset.sec);
  });

  /* A menu closes when the focus leaves it. Safari doesn't focus a button on click, so pressing an option blurs the
     menu with no relatedTarget: a press inside doesn't count as leaving */
  function closeOnLeave(wrap, isOpen, close) {
    let pressed = false;
    wrap.addEventListener('pointerdown', () => { pressed = true; setTimeout(() => { pressed = false; }); });
    wrap.addEventListener('focusout', e => { if (isOpen() && !pressed && !wrap.contains(e.relatedTarget)) close(); });
  }
  /* Radio groups of buttons (Tone, Form, Seniority, Select your resume, billing period): one Tab stop, the checked
     option, and the arrow keys move the choice (Tailor's levels and the billing period handle their own keys) */
  new MutationObserver(ms => new Set(ms.map(m => m.target.closest('[role="radiogroup"]')).filter(Boolean))
    .forEach(g => g.querySelectorAll('[role="radio"]').forEach(r => { r.tabIndex = r.getAttribute('aria-checked') === 'true' ? 0 : -1; })))
    .observe(document.body, { subtree: true, attributes: true, attributeFilter: ['aria-checked'] });
  document.addEventListener('keydown', e => {
    const r = e.target.closest && e.target.closest('[role="radio"]'), group = r && r.closest('[role="radiogroup"]');
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!group || !step || group.matches('.trl-seg, .upg-pick')) return;
    e.preventDefault();
    const all = [...group.querySelectorAll('[role="radio"]')], next = all[(all.indexOf(r) + step + all.length) % all.length];
    next.click(); next.focus();
  });

  // C: check the LinkedIn link when the field loses focus (never on each keystroke)
  document.addEventListener('focusout', e => {
    if (e.target.matches('form[data-c][data-method="linkedin"] [name="url"]') && e.target.value.trim()) checkLinkedInC(e.target.form);
  });

  document.addEventListener('submit', e => {
    if (!e.target.matches('form[data-method]')) return;
    e.preventDefault();
    handleSubmit(e.target);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && pmWrap.classList.contains('is-open')) { setMore(false); pmBtn.focus(); }
    if (e.key === 'Enter' && e.target.matches('[data-add]')) {
      e.preventDefault();
      const v = e.target.value.trim();
      if (v) { person[e.target.dataset.add].push(v); e.target.value = ''; refreshChips(e.target.dataset.add); }
    }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.rv-sec')) { e.preventDefault(); editSection(e.target.dataset.sec); }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.dropzone')) { e.preventDefault(); e.target.closest('form').querySelector('input[type="file"]').click(); }
  });

  document.addEventListener('input', e => {
    if (e.target.matches('#screen-editor [data-k]')) { person[e.target.dataset.k] = e.target.value; syncEditor(); return; }
    const fl = e.target.closest('.field');
    if (fl && fl.classList.contains('has-error') && e.target.value.trim()) setError(fl, false);
    if (e.target.matches('.textarea')) {
      fl.querySelector('.count').textContent = `${e.target.value.length.toLocaleString('en-US')} / 5,000`;
    }
  });

  document.addEventListener('change', e => {
    if (e.target.matches('input[type="file"]') && e.target.closest('form[data-method]')) setFile(e.target.closest('form'), e.target.files[0] || null);
  });

  ['dragenter', 'dragover'].forEach(t => document.addEventListener(t, e => {
    const dz = e.target.closest && e.target.closest('.dropzone');
    if (!dz) return;
    e.preventDefault(); dz.classList.add('is-over');
  }));
  document.addEventListener('dragleave', e => {
    const dz = e.target.closest && e.target.closest('.dropzone');
    if (dz && !dz.contains(e.relatedTarget)) dz.classList.remove('is-over');
  });
  document.addEventListener('drop', e => {
    const dz = e.target.closest && e.target.closest('.dropzone');
    if (!dz) return;
    e.preventDefault(); dz.classList.remove('is-over');
    if (e.dataTransfer.files[0]) setFile(dz.closest('form'), e.dataTransfer.files[0]);
  });

  /* Start: #a, #b, #a-mobile, #b-mobile deep-link a state; otherwise remember the last one */
  const hash = (location.hash || '').replace('#', '').toLowerCase();
  const hv = hash.match(/^(a|b|c|d)\b/), hm = hash.match(/mobile|desktop/);
  let savedV = null, savedView = null;
  try { savedV = localStorage.getItem('kr-start-variant'); savedView = localStorage.getItem('kr-start-view'); } catch (e) {}
  let wantV = hv ? hv[1].toUpperCase() : (savedV || 'A');
  let savedLook = null;
  try { savedLook = localStorage.getItem('kr-start-look'); } catch (e) {}
  const hk = hash.match(/3d|flat/);
  let wantLook = hk ? hk[0] : (savedLook || 'flat');
  if (wantV === 'D') { wantV = 'B'; if (!hk) wantLook = '3d'; }  // D became B in the 3D look
  setVariant(VARIANTS.includes(wantV) ? wantV : 'A');
  setLook(wantLook);
  setView(hm ? hm[0] : (savedView || 'desktop'));
  let savedLayout = null;
  try { savedLayout = localStorage.getItem('kr-start-layout'); } catch (e) {}
  const hl = hash.match(/list|grid/);
  setLayout(hl ? hl[0] : (savedLayout || 'grid'));
  const startRoute = findRoute(location.hash);
  if (startRoute) openRoute(startRoute, true);
  else if (hash.split(/[-,]/).includes('dashboard') || normPath(hash) === '/dashboard/') openDashboard();
  routesReady = true; syncBackLinks();
  if (checkerOn && !startRoute) startChecker();
  if (/editor/.test(hash)) {
    screens.intent.hidden = true; screens.loading.hidden = false; setCurrent('loading');
    openEditor();
  }
})();
