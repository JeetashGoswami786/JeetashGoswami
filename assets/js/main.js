/**
 * JEETASH GOSWAMI — PORTFOLIO MAIN CONTROLLER
 * Handles interactive themes, sound synthesizer, 3D card physics,
 * projects modal, research citations, certificates, and the Engineer CLI.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSoundEngine();
  initCircuitCanvas();
  initTypewriter();
  initLiveClock();
  initProjects();
  initResearchPapers();
  initCertificates();
  initExperience();
  initSkillsMatrix();
  initTerminal();
  initContactForm();
  initScrollSpy();
  initSmoothScroll();
});

/* ==========================================================================
   1. Theme Management (Colors & Dark/Light)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('jg_theme') || 'cyan';
  const savedMode = localStorage.getItem('jg_mode') || 'dark';

  setTheme(savedTheme, false);
  setMode(savedMode, false);

  // Theme dropdown toggle
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeDropdown = document.getElementById('theme-dropdown');
  if (themeBtn && themeDropdown) {
    themeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      playSound('click');
      themeDropdown.classList.toggle('open');
    });

    document.addEventListener('click', () => {
      themeDropdown.classList.remove('open');
    });

    // Swatches
    document.querySelectorAll('.theme-swatch').forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        e.stopPropagation();
        const color = swatch.getAttribute('data-color');
        setTheme(color, true);
        themeDropdown.classList.remove('open');
      });
    });
  }

  // Dark/Light Mode button
  const modeBtn = document.getElementById('mode-toggle-btn');
  if (modeBtn) {
    modeBtn.addEventListener('click', () => {
      const currentMode = document.documentElement.getAttribute('data-mode') || 'dark';
      const newMode = currentMode === 'dark' ? 'light' : 'dark';
      setMode(newMode, true);
      playSound('chirp');
    });
  }
}

function setTheme(colorName, notify = true) {
  document.documentElement.setAttribute('data-theme', colorName);
  localStorage.setItem('jg_theme', colorName);

  document.querySelectorAll('.theme-swatch').forEach(sw => {
    sw.classList.toggle('active', sw.getAttribute('data-color') === colorName);
  });

  if (notify) {
    playSound('beep');
    showToast(`Accent theme switched to ${colorName.toUpperCase()}`);
  }
}

function setMode(mode, notify = true) {
  document.documentElement.setAttribute('data-mode', mode);
  localStorage.setItem('jg_mode', mode);

  const icon = document.getElementById('mode-icon');
  if (icon) {
    icon.innerHTML = mode === 'light' 
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
  }

  if (notify) {
    showToast(`${mode.toUpperCase()} mode enabled`);
  }
}

/* ==========================================================================
   2. Web Audio Synthesizer (Micro-interactions)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = false;

function initSoundEngine() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');
  soundEnabled = localStorage.getItem('jg_sound') === 'true';

  updateSoundIcon();

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      localStorage.setItem('jg_sound', soundEnabled);
      updateSoundIcon();
      if (soundEnabled) {
        ensureAudioCtx();
        playSound('beep');
        showToast('Audio feedback enabled');
      } else {
        showToast('Audio feedback muted');
      }
    });
  }
}

function ensureAudioCtx() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function updateSoundIcon() {
  const icon = document.getElementById('sound-icon');
  if (!icon) return;
  icon.innerHTML = soundEnabled 
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>';
}

function playSound(type) {
  if (!soundEnabled) return;
  try {
    ensureAudioCtx();
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.04);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'beep') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'chirp') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.09);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      osc.start(now);
      osc.stop(now + 0.09);
    }
  } catch (e) {
    // Audio context may require user gesture
  }
}

/* ==========================================================================
   3. Interactive Circuit / Constellation Canvas
   ========================================================================== */
function initCircuitCanvas() {
  const canvas = document.getElementById('canvas-circuit');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  let nodes = [];
  const nodeCount = Math.min(Math.floor((width * height) / 18000), 75);
  const maxDistance = 140;

  const mouse = { x: -1000, y: -1000, active: false };

  class Node {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.6 + 0.8;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse influence
      if (mouse.active) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          this.x -= (dx / dist) * 0.8;
          this.y -= (dy / dist) * 0.8;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || '#00f2fe';
      ctx.fill();
    }
  }

  for (let i = 0; i < nodeCount; i++) {
    nodes.push(new Node());
  }

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-rgb').trim() || '0, 242, 254';

    for (let i = 0; i < nodes.length; i++) {
      nodes[i].update();
      nodes[i].draw();

      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.15;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${primaryColor}, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Connect to mouse
      if (mouse.active) {
        const dx = nodes[i].x - mouse.x;
        const dy = nodes[i].y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const alpha = (1 - dist / 150) * 0.25;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${primaryColor}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   4. Interactive Typewriter
   ========================================================================== */
function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el || !PORTFOLIO_DATA.profile.subtitles) return;

  const roles = PORTFOLIO_DATA.profile.subtitles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 70;

  function tick() {
    const current = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      el.textContent = current.substring(0, charIdx);
      typeSpeed = 35;
    } else {
      charIdx++;
      el.textContent = current.substring(0, charIdx);
      typeSpeed = 70;
    }

    if (!isDeleting && charIdx === current.length) {
      typeSpeed = 2200; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 400; // Pause before typing next
    }

    setTimeout(tick, typeSpeed);
  }

  tick();
}

/* ==========================================================================
   5. Real-Time Telemetry Clock
   ========================================================================== */
function initLiveClock() {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;

  function update() {
    // Format in PKT (UTC+5)
    const options = {
      timeZone: 'Asia/Karachi',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const now = new Date().toLocaleTimeString('en-US', options);
    clockEl.textContent = `${now} PKT`;
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   6. Projects Showcase & 3D Tilt Cards
   ========================================================================== */
function initProjects() {
  const container = document.getElementById('projects-grid');
  const filterTabs = document.querySelectorAll('[data-project-filter]');
  if (!container || !PORTFOLIO_DATA.projects) return;

  renderProjectCards('all');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-project-filter');
      playSound('click');
      renderProjectCards(filter);
    });
  });
}

function renderProjectCards(filterCategory) {
  const container = document.getElementById('projects-grid');
  container.innerHTML = '';

  const filtered = filterCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filterCategory);

  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-id', project.id);

    const heroImg = project.images && project.images[0] ? project.images[0].src : 'assets/images/profile/hero-bg.webp';
    const heroAlt = project.images && project.images[0] ? project.images[0].alt : project.title;

    // First two specs
    const previewSpecs = (project.specs || []).slice(0, 2);
    const specsHtml = previewSpecs.map(s => `
      <div class="spec-cell">
        <span class="spec-name">${s.label}</span>
        <span class="spec-val">${s.value}</span>
      </div>
    `).join('');

    // Tags
    const tagsHtml = (project.tags || []).slice(0, 3).map(t => `
      <span class="project-tag">#${t}</span>
    `).join('');

    card.innerHTML = `
      <div class="project-thumb-wrapper">
        <img class="project-thumb" src="${heroImg}" alt="${heroAlt}" loading="lazy" />
        <span class="project-thumb-badge">${project.badge || 'Hardware'}</span>
        <span class="project-category-badge">${project.categoryLabel || 'Engineering'}</span>
      </div>
      <div class="project-content">
        <div class="project-subtitle">${project.subtitle || ''}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-summary">${project.summary}</p>
        ${specsHtml ? `<div class="project-specs-grid">${specsHtml}</div>` : ''}
        <div class="project-tags">${tagsHtml}</div>
        <div class="project-card-footer">
          <span>View Detailed Case Study</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </div>
      </div>
    `;

    // 3D Card Perspective Tilt
    attach3DTilt(card);

    // Open Modal
    card.addEventListener('click', () => {
      playSound('click');
      openProjectModal(project.id);
    });

    container.appendChild(card);
  });
}

function attach3DTilt(element) {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  });
}

/* ==========================================================================
   7. Project Case Study Modal
   ========================================================================== */
let activeProjectImages = [];
let currentImageIndex = 0;

function openProjectModal(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById('project-modal-overlay');
  const mainImage = document.getElementById('modal-main-img');
  const thumbsStrip = document.getElementById('modal-thumbs-strip');
  const categoryEl = document.getElementById('modal-category');
  const titleEl = document.getElementById('modal-title');
  const subtitleEl = document.getElementById('modal-subtitle');
  const descEl = document.getElementById('modal-description');
  const specsTableEl = document.getElementById('modal-specs-tbody');

  activeProjectImages = project.images || [];
  currentImageIndex = 0;

  categoryEl.textContent = `// ${project.categoryLabel || 'PROJECT CASE STUDY'}`;
  titleEl.textContent = project.title;
  subtitleEl.textContent = project.subtitle || '';
  descEl.innerHTML = project.fullDescription.replace(/\n\s*\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>');

  // Populate Specs Table
  specsTableEl.innerHTML = (project.specs || []).map(s => `
    <tr>
      <th>${s.label}</th>
      <td>${s.value}</td>
    </tr>
  `).join('');

  // Render Thumbnails
  thumbsStrip.innerHTML = '';
  activeProjectImages.forEach((img, idx) => {
    const thumb = document.createElement('img');
    thumb.src = img.src;
    thumb.alt = img.alt || `Thumbnail ${idx + 1}`;
    thumb.className = `modal-thumb ${idx === 0 ? 'active' : ''}`;
    thumb.addEventListener('click', () => {
      setCarouselImage(idx);
    });
    thumbsStrip.appendChild(thumb);
  });

  setCarouselImage(0);

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Navigation Buttons
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      setCarouselImage((currentImageIndex - 1 + activeProjectImages.length) % activeProjectImages.length);
    };
  }
  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      setCarouselImage((currentImageIndex + 1) % activeProjectImages.length);
    };
  }

  // Close handlers
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) closeBtn.onclick = closeProjectModal;
  modalOverlay.onclick = (e) => {
    if (e.target === modalOverlay) closeProjectModal();
  };
}

function setCarouselImage(idx) {
  if (!activeProjectImages.length) return;
  currentImageIndex = idx;
  const mainImage = document.getElementById('modal-main-img');
  mainImage.src = activeProjectImages[idx].src;
  mainImage.alt = activeProjectImages[idx].alt || 'Project illustration';

  const thumbs = document.querySelectorAll('.modal-thumb');
  thumbs.forEach((th, i) => {
    th.classList.toggle('active', i === idx);
  });
}

function closeProjectModal() {
  const modalOverlay = document.getElementById('project-modal-overlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Global Key Listeners for Carousel
window.addEventListener('keydown', (e) => {
  const modal = document.getElementById('project-modal-overlay');
  if (modal && modal.classList.contains('open')) {
    if (e.key === 'Escape') closeProjectModal();
    if (e.key === 'ArrowLeft') {
      setCarouselImage((currentImageIndex - 1 + activeProjectImages.length) % activeProjectImages.length);
    }
    if (e.key === 'ArrowRight') {
      setCarouselImage((currentImageIndex + 1) % activeProjectImages.length);
    }
  }
});

/* ==========================================================================
   8. Research Papers & Patents
   ========================================================================== */
function initResearchPapers() {
  const container = document.getElementById('research-grid');
  const filterTabs = document.querySelectorAll('[data-research-filter]');
  if (!container || !PORTFOLIO_DATA.researchPapers) return;

  renderResearchPapers('all');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-research-filter');
      playSound('click');
      renderResearchPapers(filter);
    });
  });
}

function renderResearchPapers(filter) {
  const container = document.getElementById('research-grid');
  container.innerHTML = '';

  const papers = filter === 'all'
    ? PORTFOLIO_DATA.researchPapers
    : PORTFOLIO_DATA.researchPapers.filter(p => p.category === filter);

  papers.forEach(paper => {
    const card = document.createElement('div');
    card.className = 'research-card';

    // Highlight Jeetash Goswami in authors
    const authorsFormatted = paper.authors.replace(
      /Jeetash Goswami/g,
      '<strong>Jeetash Goswami</strong>'
    );

    card.innerHTML = `
      <div class="research-card-top">
        <span class="research-venue-pill">${paper.venue} (${paper.year})</span>
        <span class="research-status-pill">${paper.status}</span>
      </div>
      <h3 class="research-title">${paper.title}</h3>
      <div class="research-authors">${authorsFormatted}</div>
      <div class="research-abstract" id="abstract-${paper.id}">${paper.abstract}</div>
      <div class="research-actions">
        <button class="btn-action-sm btn-toggle-abstract" data-id="${paper.id}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          <span>Expand Abstract</span>
        </button>
        ${paper.bibtex ? `
          <button class="btn-action-sm btn-copy-bibtex" data-id="${paper.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Copy BibTeX</span>
          </button>
        ` : ''}
        ${paper.pdfUrl ? `
          <a class="btn-action-sm" href="${paper.pdfUrl}" target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            <span>Read PDF</span>
          </a>
        ` : ''}
      </div>
    `;

    // Abstract toggle
    const toggleBtn = card.querySelector('.btn-toggle-abstract');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const abs = card.querySelector(`#abstract-${paper.id}`);
        const isExp = abs.classList.toggle('expanded');
        toggleBtn.querySelector('span').textContent = isExp ? 'Collapse Abstract' : 'Expand Abstract';
        toggleBtn.querySelector('svg').style.transform = isExp ? 'rotate(180deg)' : 'rotate(0deg)';
        playSound('click');
      });
    }

    // Copy BibTeX
    const bibBtn = card.querySelector('.btn-copy-bibtex');
    if (bibBtn) {
      bibBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(paper.bibtex).then(() => {
          playSound('beep');
          showToast('BibTeX citation copied to clipboard!');
        });
      });
    }

    container.appendChild(card);
  });
}

/* ==========================================================================
   9. Certificates Showcase
   ========================================================================== */
function initCertificates() {
  const container = document.getElementById('certs-grid');
  if (!container || !PORTFOLIO_DATA.certificates) return;

  PORTFOLIO_DATA.certificates.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card';

    const skillsHtml = (cert.skills || []).map(s => `
      <span class="cert-skill-pill">${s}</span>
    `).join('');

    card.innerHTML = `
      <div>
        <div class="cert-header">
          <div class="cert-icon-box">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <div class="cert-issuer-meta">
            <span class="cert-issuer">${cert.issuer}</span>
            <span class="cert-date">${cert.platform} • ${cert.date}</span>
          </div>
        </div>
        <h4 class="cert-title">${cert.title}</h4>
        <div class="cert-skills">${skillsHtml}</div>
      </div>
      <div class="cert-footer">
        <span class="mono">${cert.credentialId ? `ID: ${cert.credentialId}` : 'Verified Credential'}</span>
        ${cert.pdfUrl ? `
          <a class="cert-link" href="${cert.pdfUrl}" target="_blank" rel="noopener">
            <span>View Certificate</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        ` : ''}
      </div>
    `;

    container.appendChild(card);
  });
}

/* ==========================================================================
   10. Experience & Leadership Timeline
   ========================================================================== */
function initExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container || !PORTFOLIO_DATA.experience) return;

  PORTFOLIO_DATA.experience.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';

    const achievementsHtml = (item.achievements || []).map(a => `
      <li>${a}</li>
    `).join('');

    timelineItem.innerHTML = `
      <div class="timeline-node"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${item.role}</h3>
            <div class="timeline-org">${item.organization} — ${item.location}</div>
          </div>
          <div class="timeline-period">${item.period}</div>
        </div>
        <p class="timeline-desc">${item.description}</p>
        <ul class="timeline-achievements">
          ${achievementsHtml}
        </ul>
      </div>
    `;

    container.appendChild(timelineItem);
  });
}

/* ==========================================================================
   11. Skills Matrix & Proficiency Bars
   ========================================================================== */
function initSkillsMatrix() {
  const container = document.getElementById('skills-matrix-grid');
  if (!container || !PORTFOLIO_DATA.skillsMatrix) return;

  const categories = [
    { key: 'hardware', title: 'Hardware & PCB Engineering', icon: 'cpu' },
    { key: 'simulation', title: 'Electromagnetic & Thermal FEA', icon: 'zap' },
    { key: 'softwareAi', title: 'Embedded Firmware & Applied AI', icon: 'terminal' },
    { key: 'creativeStrategy', title: 'Strategic Narrative & Digital Media', icon: 'film' }
  ];

  categories.forEach(cat => {
    const list = PORTFOLIO_DATA.skillsMatrix[cat.key] || [];
    const card = document.createElement('div');
    card.className = 'skill-category-card';

    const rowsHtml = list.map(s => `
      <div class="skill-row">
        <div class="skill-info">
          <span>${s.name}</span>
          <span>${s.level}%</span>
        </div>
        <div class="skill-bar-bg">
          <div class="skill-bar-fill" style="width: 0%;" data-target-width="${s.level}%"></div>
        </div>
      </div>
    `).join('');

    card.innerHTML = `
      <h4 class="skill-category-title">
        <i data-lucide="${cat.icon}"></i>
        <span>${cat.title}</span>
      </h4>
      <div class="skill-list">${rowsHtml}</div>
    `;

    container.appendChild(card);
  });

  // Intersection observer to animate skill bars
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.getAttribute('data-target-width');
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skill-category-card').forEach(el => observer.observe(el));
}

/* ==========================================================================
   12. Interactive Engineer Terminal (CLI)
   ========================================================================== */
function initTerminal() {
  const terminalOverlay = document.getElementById('terminal-modal');
  const triggerBtn = document.getElementById('btn-open-terminal');
  const triggerHeroBtn = document.getElementById('hero-terminal-btn');
  const closeBtn = document.getElementById('terminal-close-btn');
  const inputEl = document.getElementById('terminal-input');
  const outputEl = document.getElementById('terminal-output');
  const pillCmds = document.querySelectorAll('.term-cmd-pill');

  let cmdHistory = [];
  let historyIdx = -1;

  function openTerminal() {
    terminalOverlay.classList.add('open');
    inputEl.focus();
    playSound('beep');
    document.body.style.overflow = 'hidden';
  }

  function closeTerminal() {
    terminalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (triggerBtn) triggerBtn.onclick = openTerminal;
  if (triggerHeroBtn) triggerHeroBtn.onclick = openTerminal;
  if (closeBtn) closeBtn.onclick = closeTerminal;

  terminalOverlay.addEventListener('click', (e) => {
    if (e.target === terminalOverlay) closeTerminal();
  });

  // Keyboard shortcut Ctrl+K or `~`
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.key === 'k') || e.key === '`') {
      e.preventDefault();
      if (terminalOverlay.classList.contains('open')) {
        closeTerminal();
      } else {
        openTerminal();
      }
    }
  });

  // Command Execution
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = inputEl.value.trim();
      if (cmd) {
        cmdHistory.push(cmd);
        historyIdx = cmdHistory.length;
        executeCommand(cmd);
        inputEl.value = '';
      }
    } else if (e.key === 'ArrowUp') {
      if (cmdHistory.length > 0 && historyIdx > 0) {
        historyIdx--;
        inputEl.value = cmdHistory[historyIdx];
      }
    } else if (e.key === 'ArrowDown') {
      if (cmdHistory.length > 0 && historyIdx < cmdHistory.length - 1) {
        historyIdx++;
        inputEl.value = cmdHistory[historyIdx];
      } else {
        historyIdx = cmdHistory.length;
        inputEl.value = '';
      }
    }
  });

  pillCmds.forEach(pill => {
    pill.addEventListener('click', () => {
      const cmd = pill.getAttribute('data-cmd');
      executeCommand(cmd);
      inputEl.focus();
    });
  });

  function executeCommand(rawCmd) {
    playSound('click');
    const cmd = rawCmd.toLowerCase().trim();
    const args = cmd.split(' ');
    const mainCmd = args[0];

    // Print command line
    printTermLine(`<span class="term-prompt-symbol">jeetash@nust:~$</span> ${escapeHtml(rawCmd)}`);

    switch (mainCmd) {
      case 'help':
        printTermLine(`
<span style="color: var(--primary); font-weight: bold;">Available CLI Commands:</span>
  <span style="color: #38bdf8;">bio</span>       - View professional bio & engineering background
  <span style="color: #38bdf8;">skills</span>    - Technical proficiencies & engineering toolchain
  <span style="color: #38bdf8;">projects</span>  - List hardware prototypes & case studies
  <span style="color: #38bdf8;">papers</span>    - Published research papers & patent filings
  <span style="color: #38bdf8;">certs</span>     - Verified credentials (Stanford, IBM, ASU, GE)
  <span style="color: #38bdf8;">fern</span>      - Formula Electric Racing NUST achievements
  <span style="color: #38bdf8;">theme &lt;c&gt;</span> - Set theme: cyan, emerald, amber, violet, crimson
  <span style="color: #38bdf8;">contact</span>   - Contact channels, LinkedIn, GitHub & email
  <span style="color: #38bdf8;">matrix</span>    - Run Matrix digital rain effect
  <span style="color: #38bdf8;">clear</span>     - Clear terminal buffer
  <span style="color: #38bdf8;">exit</span>      - Close the engineer console
        `);
        break;

      case 'bio':
        printTermLine(`
<span style="color: var(--primary); font-weight: 700;">Jeetash Goswami</span>
Location: Karachi, Pakistan (NUST-PNEC)
Degree: Bachelor of Electrical Engineering
Specialization: Power Electronics, Custom PCB Design, Sensorless BLDC/PMSM Drives, Applied AI
Founder: VisuAle (Cinematic Visual Direction)
Former: Senior Marketing Exec & Electrical Engineer at Formula Electric Racing NUST (FERN)
        `);
        break;

      case 'skills':
        printTermLine(`
<span style="color: var(--primary);">Hardware/PCB:</span> Altium Designer, KiCad, Custom Inverters, High-Voltage Gates, Sensorless Back-EMF
<span style="color: var(--primary);">Simulation:</span>   ANSYS Maxwell 2D, RMxprt, Icepak (Thermal), MATLAB/Simulink, LTspice, SolidWorks
<span style="color: var(--primary);">Embedded/AI:</span>  ESP32, STM32, Jetson Nano, PyTorch, TensorFlow, OpenCV, C/C++, Modbus RTU/TCP
        `);
        break;

      case 'projects':
        let pList = '<span style="color: var(--primary); font-weight: bold;">Engineering Projects:</span>\n';
        PORTFOLIO_DATA.projects.forEach((p, idx) => {
          pList += `  [${idx + 1}] <span style="color: #38bdf8;">${p.title}</span> (${p.badge})\n`;
        });
        printTermLine(pList);
        break;

      case 'papers':
        let papList = '<span style="color: var(--primary); font-weight: bold;">Research Publications & Patents:</span>\n';
        PORTFOLIO_DATA.researchPapers.forEach((p, idx) => {
          papList += `  [${idx + 1}] ${p.title} — <span style="color: #38bdf8;">${p.venue}</span>\n`;
        });
        printTermLine(papList);
        break;

      case 'certs':
        let cList = '<span style="color: var(--primary); font-weight: bold;">Verified Certifications:</span>\n';
        PORTFOLIO_DATA.certificates.forEach((c, idx) => {
          cList += `  [${idx + 1}] ${c.title} — <span style="color: #38bdf8;">${c.issuer}</span>\n`;
        });
        printTermLine(cList);
        break;

      case 'fern':
        printTermLine(`
<span style="color: var(--primary); font-weight: bold;">Formula Electric Racing NUST (FERN):</span>
• Senior Marketing Executive & Electrical Engineer
• Formula Student UK 2025 at Silverstone Circuit: 34th Rank globally
• Winner of NUST High Achiever Award 2025
• Spearheaded corporate sponsorship pitches translating EV electronics into clear investment propositions.
        `);
        break;

      case 'theme':
        if (args[1] && ['cyan', 'emerald', 'amber', 'violet', 'crimson'].includes(args[1])) {
          setTheme(args[1], true);
          printTermLine(`Theme accent updated to <span style="color: var(--primary);">${args[1].toUpperCase()}</span>.`);
        } else {
          printTermLine(`Usage: theme &lt;cyan|emerald|amber|violet|crimson&gt;`);
        }
        break;

      case 'contact':
        printTermLine(`
Email:    <a href="mailto:${PORTFOLIO_DATA.profile.email}" style="color: var(--primary);">${PORTFOLIO_DATA.profile.email}</a>
LinkedIn: <a href="${PORTFOLIO_DATA.profile.linkedin}" target="_blank" style="color: var(--primary);">linkedin.com/in/jeetash-goswami</a>
GitHub:   <a href="${PORTFOLIO_DATA.profile.github}" target="_blank" style="color: var(--primary);">github.com/jeetash</a>
Status:   🟢 Available for Hardware R&D & Power Systems Roles
        `);
        break;

      case 'clear':
        outputEl.innerHTML = '';
        break;

      case 'exit':
      case 'quit':
        closeTerminal();
        break;

      case 'matrix':
        triggerMatrixRain();
        printTermLine('<span style="color: #00ff87;">Matrix digital stream initialized.</span>');
        break;

      default:
        printTermLine(`Command not found: "${escapeHtml(rawCmd)}". Type <span style="color: var(--primary);">help</span> for available commands.`);
        break;
    }

    outputEl.scrollTop = outputEl.scrollHeight;
  }

  function printTermLine(htmlContent) {
    const line = document.createElement('div');
    line.className = 'term-line';
    line.innerHTML = htmlContent;
    outputEl.appendChild(line);
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function triggerMatrixRain() {
    setTheme('emerald', false);
    showToast('ENTERING THE MATRIX');
  }
}

/* ==========================================================================
   13. Contact Form Handler
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyBtn = document.getElementById('copy-email-btn');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email).then(() => {
        playSound('beep');
        showToast('Email address copied to clipboard!');
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      const email = document.getElementById('contact-email').value;
      const subject = document.getElementById('contact-subject').value;
      const message = document.getElementById('contact-message').value;

      playSound('chirp');
      showToast('Opening your default email client...');

      // Formulate mailto URL
      const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(subject + ' - via Portfolio from ' + name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
      window.location.href = mailtoUrl;

      form.reset();
    });
  }
}

/* ==========================================================================
   14. Toast Notification Manager
   ========================================================================== */
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(30px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   15. ScrollSpy & Navigation
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        playSound('click');
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
