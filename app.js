(() => {
  const translations = {
    en: {
      pageTitle: 'Arne Boedt — Full-Stack Developer',
      skip: 'Skip to content',
      'nav.portfolio': 'Portfolio',
      'hero.heading': 'Pragmatic full-stack software, built to stay simple.',
      'hero.lead':
        "I'm Arne Boedt — a full-stack engineer working across .NET, modern web frontends, DevOps, and server infrastructure. I favor straightforward architectures that hold up in production over unnecessary complexity.",
      'stripper.heading': 'Architecture, without the overhead',
      'stripper.sub':
        'Compare a typical over-engineered stack with the lean setup most production systems actually require.',
      'stripper.btnBloated': 'Over-engineered',
      'stripper.btnKiss': 'KISS stack',
      'stripper.sliderLeft': 'Typical pitch',
      'stripper.sliderRight': 'KISS stack',
      'stripper.trayLabel': 'Omitted by default:',
      'stripper.partsCore': '{n} core components',
      'stripper.partsTotal': '{n} moving parts',
      'stripper.verdictKiss':
        'A cohesive stack one engineer can own end-to-end — fast to change, straightforward to operate.',
      'stripper.verdictMid':
        'Every additional layer should pay for its operational cost in production.',
      'stripper.verdictBloated':
        'High operational overhead, slow onboarding, and brittle coordination before solving the core domain.',
      'node.ui.role': 'Frontend',
      'node.ui.note': 'Chosen for team fit and long-term maintainability',
      'node.be.role': 'Backend',
      'node.be.note': 'Cohesive services and clean domain boundaries',
      'node.ops.role': 'DevOps',
      'node.ops.name': 'CI/CD & Packaging',
      'node.ops.note': 'Repeatable builds, zero pipeline sprawl',
      'node.infra.role': 'Infrastructure',
      'node.infra.note': 'Cloud or on-prem, right-sized to actual load',
      'node.bloatRole': 'Overhead',
      'node.bloat1.note': 'Fragmented deploys for a single product',
      'node.bloat2.note': 'Gateway indirection without multi-org scale',
      'node.bloat3.note': 'Network hops and distributed failure modes',
      'node.bloat4.note': 'Eventual consistency where transactions suffice',
      'node.bloat5.note': 'Cluster overhead for moderate traffic',
      'node.bloat6.note': 'Abstraction layers for a single-cloud workload',
      'portfolio.heading': 'Portfolio',
      'portfolio.rd.tagline':
        'Cross-platform Remote Desktop client for Windows and Linux, built with Avalonia and FreeRDP 3.',
      'portfolio.rd.repo': 'Source on GitHub',
      'portfolio.rd.releases': 'Releases',
      'portfolio.rd.p1':
        'Two-part architecture pairing a managed .NET / Avalonia client with a native C wrapper around FreeRDP 3 APIs.',
      'portfolio.rd.p2':
        'Multi-session tabs, high-DPI dynamic window resizing, coalesced mouse/keyboard input, and bidirectional text & file clipboard.',
      'portfolio.rd.p3':
        'OS credential vault storage (Windows Credential Manager / Linux Secret Service), Remote Desktop Gateway support, and automated multi-platform release packaging.',
      'ledger.heading': 'Experience & background',
      'ledger.gd.meta': '~4 years \u00b7 Ongoing',
      'ledger.gd.desc':
        'Long-term full-stack application development across .NET, web frontends, DevOps, and server infrastructure.',
      'ledger.about.title': 'Cross-country EU',
      'ledger.about.meta': 'Belgium \u2194 Czech Republic',
      'ledger.about.desc':
        'Belgian engineer working remotely from the Czech Republic, with prior software roles in Czechia. Working in English and Dutch, and open to Czech teams communicating in English.',
      'ledger.profiles.title': 'Profiles',
      'ledger.profiles.meta': 'Full history & repositories',
      'contact.heading': 'Contact',
      'contact.intro':
        'Open to discussing freelance engagements, standalone builds, or technical challenges. Reach out directly by email or use the form below.',
      'contact.copy': 'Copy',
      'contact.copied': 'Copied',
      'form.nameLabel': 'Name',
      'form.namePlaceholder': 'Name or company',
      'form.emailLabel': 'Email',
      'form.emailPlaceholder': 'you@company.eu',
      'form.messageLabel': 'Message',
      'form.messagePlaceholder': "Brief context on what you'd like to discuss...",
      'form.submit': 'Send message',
      'form.sending': 'Sending...',
      'form.errName': 'Please enter your name or company.',
      'form.errEmail': 'Please enter a valid email address so I can reply.',
      'form.errMessage': 'Please include a short message before sending.',
      'form.errCaptcha': 'Please complete the captcha verification before sending.',
      'form.mailtoOpened': 'Opened your email client with a pre-filled draft to arne@boedt.me.',
      'form.sentSuccess': 'Message sent. Thanks — I will get back to you directly.',
      'form.sentError': 'Could not submit the form right now. Please email arne@boedt.me directly.',
      'footer.ico': 'I\u010cO',
      'footer.vat': 'VAT'
    },
    nl: {
      pageTitle: 'Arne Boedt — Full-Stack Ontwikkelaar',
      skip: 'Ga naar inhoud',
      'nav.portfolio': 'Portfolio',
      'hero.heading': 'Pragmatische full-stack software, bewust eenvoudig gehouden.',
      'hero.lead':
        'Ik ben Arne Boedt — full-stack ontwikkelaar over .NET, moderne webfrontends, DevOps en serverinfrastructuur. Ik kies voor heldere architecturen die in productie standhouden boven onnodige complexiteit.',
      'stripper.heading': 'Architectuur zonder overbodige ballast',
      'stripper.sub':
        'Vergelijk een typische over-engineered stack met de nuchtere opzet die de meeste productiesystemen echt nodig hebben.',
      'stripper.btnBloated': 'Over-engineered',
      'stripper.btnKiss': 'KISS-stack',
      'stripper.sliderLeft': 'Typische pitch',
      'stripper.sliderRight': 'KISS-stack',
      'stripper.trayLabel': 'Standaard weggelaten:',
      'stripper.partsCore': '{n} kerncomponenten',
      'stripper.partsTotal': '{n} bewegende onderdelen',
      'stripper.verdictKiss':
        'Een samenhangende stack die \u00e9\u00e9n ontwikkelaar end-to-end kan dragen — vlot aanpasbaar en helder in beheer.',
      'stripper.verdictMid':
        'Elke extra laag hoort zijn operationele kost in productie effectief terug te verdienen.',
      'stripper.verdictBloated':
        'Hoge operationele overhead, trage onboarding en broze co\u00f6rdinatie nog voor het kerndomein is opgelost.',
      'node.ui.role': 'Frontend',
      'node.ui.note': 'Gekozen voor teamfit en onderhoudbaarheid op lange termijn',
      'node.be.role': 'Backend',
      'node.be.note': 'Samenhangende services en heldere domeingrenzen',
      'node.ops.role': 'DevOps',
      'node.ops.name': 'CI/CD & Packaging',
      'node.ops.note': 'Herhaalbare builds zonder pipeline-wildgroei',
      'node.infra.role': 'Infrastructuur',
      'node.infra.note': 'Cloud of on-prem, afgestemd op de echte belasting',
      'node.bloatRole': 'Overhead',
      'node.bloat1.note': 'Gefragmenteerde deploys voor \u00e9\u00e9n product',
      'node.bloat2.note': 'Extra gateway-abstractie zonder multi-org schaal',
      'node.bloat3.note': 'Netwerkhops en gedistribueerde faalmodi',
      'node.bloat4.note': 'Eventual consistency waar transacties volstaan',
      'node.bloat5.note': 'Cluster-overhead voor normaal verkeer',
      'node.bloat6.note': 'Abstractielagen voor een single-cloud workload',
      'portfolio.heading': 'Portfolio',
      'portfolio.rd.tagline':
        'Cross-platform Remote Desktop-client voor Windows en Linux, gebouwd met Avalonia en FreeRDP 3.',
      'portfolio.rd.repo': 'Broncode op GitHub',
      'portfolio.rd.releases': 'Releases',
      'portfolio.rd.p1':
        'Tweedelige architectuur die een .NET / Avalonia desktopclient koppelt aan een native C-wrapper rond de FreeRDP 3 API\u2019s.',
      'portfolio.rd.p2':
        'Tabbladen per sessie, dynamische high-DPI schaling, gebundelde muis- en toetsenbordinvoer en bidirectioneel klembord voor tekst en bestanden.',
      'portfolio.rd.p3':
        'Opslag in de systeemkluis (Windows Credential Manager / Linux Secret Service), Remote Desktop Gateway-ondersteuning en geautomatiseerde release-packages.',
      'ledger.heading': 'Ervaring & achtergrond',
      'ledger.gd.meta': '~4 jaar \u00b7 Doorlopend',
      'ledger.gd.desc':
        'Langetermijn full-stack applicatieontwikkeling over .NET, webfrontends, DevOps en serverinfrastructuur.',
      'ledger.about.title': 'Grensoverschrijdend EU',
      'ledger.about.meta': 'Belgi\u00eb \u2194 Tsjechi\u00eb',
      'ledger.about.desc':
        'Belgische ontwikkelaar die vanop afstand werkt vanuit Tsjechi\u00eb, met eerdere functies hier ter plaatse. Actief in Nederlands en Engels, en ook beschikbaar voor Tsjechische teams in het Engels.',
      'ledger.profiles.title': 'Profielen',
      'ledger.profiles.meta': 'Volledige loopbaan & repositories',
      'contact.heading': 'Contact',
      'contact.intro':
        'Beschikbaar om freelance opdrachten, zelfstandige projecten of technische vraagstukken te bespreken. Mail rechtstreeks of gebruik het formulier hieronder.',
      'contact.copy': 'Kopieer',
      'contact.copied': 'Gekopieerd',
      'form.nameLabel': 'Naam',
      'form.namePlaceholder': 'Naam of bedrijf',
      'form.emailLabel': 'E-mail',
      'form.emailPlaceholder': 'jij@bedrijf.eu',
      'form.messageLabel': 'Bericht',
      'form.messagePlaceholder': 'Korte context over wat je wil bespreken...',
      'form.submit': 'Bericht versturen',
      'form.sending': 'Versturen...',
      'form.errName': 'Vul je naam of bedrijf in.',
      'form.errEmail': 'Vul een geldig e-mailadres in zodat ik kan antwoorden.',
      'form.errMessage': 'Voeg eerst een kort bericht toe.',
      'form.errCaptcha': 'Voltooi eerst de captcha-controle.',
      'form.mailtoOpened': 'Je e-mailprogramma is geopend met een vooringevuld bericht aan arne@boedt.me.',
      'form.sentSuccess': 'Bericht verstuurd. Bedankt — ik neem rechtstreeks contact op.',
      'form.sentError': 'Versturen lukt nu niet. Mail rechtstreeks naar arne@boedt.me.',
      'footer.ico': 'I\u010cO',
      'footer.vat': 'BTW'
    }
  };

  let currentLang = 'en';

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || '';
  }

  const stripperPanel = document.querySelector('[data-stripper]');
  const slider = document.getElementById('complexity-slider');
  const bloatNodes = Array.from(document.querySelectorAll('[data-node="bloat"]'));
  const tray = document.querySelector('[data-stripped-tray]');
  const trayChips = document.querySelector('[data-tray-chips]');
  const partsCountEl = document.querySelector('[data-parts-count]');
  const verdictEl = document.querySelector('[data-verdict-text]');
  const modeBtns = Array.from(document.querySelectorAll('[data-mode-btn]'));

  function renderStripper(value) {
    const val = Math.max(0, Math.min(100, Number(value)));
    if (slider) slider.value = String(val);

    let visibleBloat = 0;
    const strippedNames = [];

    bloatNodes.forEach((node) => {
      const threshold = Number(node.getAttribute('data-threshold') || 50);
      const isStripped = val >= threshold;
      const isStripping = !isStripped && val >= threshold - 14;
      node.classList.toggle('is-stripped', isStripped);
      node.classList.toggle('is-stripping', isStripping);
      if (isStripped) {
        const nameEl = node.querySelector('.node-name');
        if (nameEl) strippedNames.push(nameEl.textContent);
      } else {
        visibleBloat += 1;
      }
    });

    const isKiss = visibleBloat === 0;
    const isBloated = visibleBloat === bloatNodes.length;
    if (stripperPanel) {
      stripperPanel.setAttribute('data-mode', isBloated ? 'bloated' : 'kiss');
    }

    modeBtns.forEach((btn) => {
      const target = btn.getAttribute('data-mode-btn');
      const active = (target === 'kiss' && isKiss) || (target === 'bloated' && isBloated);
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    if (tray && trayChips) {
      tray.classList.toggle('is-empty', strippedNames.length === 0);
      trayChips.innerHTML = '';
      strippedNames.forEach((label) => {
        const chip = document.createElement('span');
        chip.className = 'tray-chip';
        chip.textContent = label;
        trayChips.appendChild(chip);
      });
    }

    const totalParts = 4 + visibleBloat;
    if (partsCountEl) {
      const template = isKiss ? t('stripper.partsCore') : t('stripper.partsTotal');
      partsCountEl.textContent = template.replace('{n}', String(totalParts));
    }

    if (verdictEl) {
      if (isKiss) {
        verdictEl.textContent = t('stripper.verdictKiss');
      } else if (isBloated) {
        verdictEl.textContent = t('stripper.verdictBloated');
      } else {
        verdictEl.textContent = t('stripper.verdictMid');
      }
    }
  }

  if (slider) {
    slider.addEventListener('input', (e) => renderStripper(e.target.value));
  }

  modeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-mode-btn');
      renderStripper(target === 'bloated' ? 0 : 100);
    });
  });

  function applyLanguage(lang) {
    currentLang = lang === 'nl' ? 'nl' : 'en';
    document.documentElement.lang = currentLang;
    document.title = t('pageTitle');

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key) el.setAttribute('placeholder', t(key));
    });

    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      const active = btn.getAttribute('data-lang-btn') === currentLang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    renderStripper(slider ? slider.value : 100);

    try {
      localStorage.setItem('ab-lang', currentLang);
    } catch (_) {}
  }

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang-btn')));
  });

  const copyBtn = document.querySelector('[data-copy-email]');
  const copyLabel = document.querySelector('[data-copy-label]');
  let copyTimer = null;

  if (copyBtn && copyLabel) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('arne@boedt.me');
        copyLabel.textContent = t('contact.copied');
        clearTimeout(copyTimer);
        copyTimer = setTimeout(() => {
          copyLabel.textContent = t('contact.copy');
        }, 2000);
      } catch (_) {
        window.location.href = 'mailto:arne@boedt.me';
      }
    });
  }

  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.querySelector('[data-submit-btn]');

  function setFieldError(input, errorId, message) {
    const errEl = document.getElementById(errorId);
    if (message) {
      input.setAttribute('aria-invalid', 'true');
      if (errEl) errEl.textContent = message;
    } else {
      input.removeAttribute('aria-invalid');
      if (errEl) errEl.textContent = '';
    }
  }

  if (form && statusEl && submitBtn) {
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      statusEl.textContent = '';
      statusEl.className = 'form-status';

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      setFieldError(nameInput, 'error-name', name ? '' : t('form.errName'));
      setFieldError(emailInput, 'error-email', emailValid ? '' : t('form.errEmail'));
      setFieldError(messageInput, 'error-message', message ? '' : t('form.errMessage'));

      if (!name) { nameInput.focus(); return; }
      if (!emailValid) { emailInput.focus(); return; }
      if (!message) { messageInput.focus(); return; }

      const botcheck = form.querySelector('input[name="botcheck"]');
      if (botcheck && botcheck.checked) {
        form.reset();
        statusEl.textContent = t('form.sentSuccess');
        statusEl.classList.add('is-success');
        return;
      }

      const endpoint = (form.getAttribute('data-endpoint') || '').trim();
      const accessKey = (form.getAttribute('data-access-key') || '').trim();
      if (!endpoint) {
        const subject = encodeURIComponent(`Contact from ${name}`);
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
        window.location.href = `mailto:arne@boedt.me?subject=${subject}&body=${body}`;
        statusEl.textContent = t('form.mailtoOpened');
        statusEl.classList.add('is-success');
        return;
      }

      const captchaField = form.querySelector('textarea[name="h-captcha-response"]');
      const captchaToken = captchaField ? captchaField.value.trim() : '';
      const captchaErrEl = document.getElementById('error-captcha');
      if (!captchaToken) {
        if (captchaErrEl) captchaErrEl.textContent = t('form.errCaptcha');
        return;
      }
      if (captchaErrEl) captchaErrEl.textContent = '';

      submitBtn.disabled = true;
      const labelSpan = submitBtn.querySelector('span');
      if (labelSpan) labelSpan.textContent = t('form.sending');

      const payload = {
        name,
        email,
        message,
        subject: `Message from ${name} via boedt.me`,
        from_name: 'boedt.me',
        'h-captcha-response': captchaToken
      };
      if (accessKey) payload.access_key = accessKey;

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok || data.success === false) throw new Error('Request failed');
        form.reset();
        if (window.hcaptcha) window.hcaptcha.reset();
        statusEl.textContent = t('form.sentSuccess');
        statusEl.classList.add('is-success');
      } catch (_) {
        statusEl.textContent = t('form.sentError');
        statusEl.classList.add('is-error');
      } finally {
        submitBtn.disabled = false;
        if (labelSpan) labelSpan.textContent = t('form.submit');
      }
    });
  }

  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  let initialLang = 'en';
  if (urlLang === 'nl' || urlLang === 'en') {
    initialLang = urlLang;
  } else {
    try {
      const saved = localStorage.getItem('ab-lang');
      if (saved === 'nl' || saved === 'en') initialLang = saved;
    } catch (_) {}
  }

  applyLanguage(initialLang);
})();
