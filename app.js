/* PHYSICS-1101 Master Application Controller
   Features:
   - Dual Filtering (Chapters + Content Type: Definitions, Derivations, Numericals)
   - Interactive Study Mastery Tracker with LocalStorage persistence
   - Left Sidebar Show / Hide (Desktop collapse & Mobile off-canvas drawer)
   - Native Vector SVG physics diagrams
   - Instant live search across all content
   - KaTeX auto-rendering & math typesetting
   - Copy solution with toast feedback
   - Dark/Light Theme toggle
*/

let currentCategory = "all";
let currentContentType = "all";

document.addEventListener("DOMContentLoaded", () => {
  initSidebarState();
  initThemeState();
  renderAllPhysicsCards();
  initKaTeX(document.getElementById("questions-wrapper"));
  initModals();
  updateTopicBadges();
  updateMasteryUI();
  checkUrlSearch();
  initKeyboardShortcuts();
});

function updateTopicBadges() {
  const allEl = document.getElementById("badge-all");
  const rbEl = document.getElementById("badge-rigid-body");
  const gEl = document.getElementById("badge-gravity");
  const qEl = document.getElementById("badge-quantum");

  if (allEl) allEl.innerText = physicsData.length;
  if (rbEl) rbEl.innerText = `${physicsData.filter(d => d.category === 'rigid-body').length} Topics`;
  if (gEl) gEl.innerText = `${physicsData.filter(d => d.category === 'gravity').length} Topics`;
  if (qEl) qEl.innerText = `${physicsData.filter(d => d.category === 'quantum').length} Topics`;
}

// ==========================================
// 1. STUDY MASTERY TRACKER
// ==========================================
function getMasteredList() {
  try {
    return JSON.parse(localStorage.getItem("physics_mastered_topics") || "[]");
  } catch (e) {
    return [];
  }
}

function saveMasteredList(list) {
  localStorage.setItem("physics_mastered_topics", JSON.stringify(list));
  updateMasteryUI();
}

function toggleMastered(id) {
  let list = getMasteredList();
  const index = list.indexOf(id);
  const card = document.getElementById(id);
  const btn = document.getElementById(`master-btn-${id}`);

  if (index >= 0) {
    list.splice(index, 1);
    if (card) card.classList.remove("mastered");
    if (btn) btn.classList.remove("active");
    showToast("Removed from mastered list");
  } else {
    list.push(id);
    if (card) card.classList.add("mastered");
    if (btn) btn.classList.add("active");
    showToast("Marked as Mastered! Keep going!");
  }

  saveMasteredList(list);
}

function resetMasteryProgress() {
  if (confirm("Are you sure you want to reset your study progress?")) {
    saveMasteredList([]);
    applyFilters();
    showToast("Study progress reset to 0%");
  }
}

function updateMasteryUI() {
  const list = getMasteredList();
  const total = physicsData.length;
  const count = list.length;
  const percent = total > 0 ? Math.round((count / total) * 100) : 0;

  const textEl = document.getElementById("studyProgressText");
  const barEl = document.getElementById("studyProgressBar");

  if (textEl) textEl.innerText = `${count} of ${total} Topics Mastered (${percent}%)`;
  if (barEl) barEl.style.width = `${percent}%`;
}

// ==========================================
// 2. SIDEBAR SHOW & HIDE (COLLAPSE / EXPAND)
// ==========================================
function initSidebarState() {
  const isCollapsed = localStorage.getItem("physics_sidebar_collapsed") === "true";
  const app = document.getElementById("app");
  if (app && isCollapsed && window.innerWidth > 992) {
    app.classList.add("sidebar-collapsed");
    updateSidebarToggleIcon(true);
  }
}

function toggleSidebar(forceState) {
  const app = document.getElementById("app");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("sidebarBackdrop");
  const isMobile = window.innerWidth <= 992;

  if (isMobile) {
    const shouldOpen = forceState !== undefined ? forceState : !sidebar.classList.contains("mobile-open");
    if (shouldOpen) {
      sidebar.classList.add("mobile-open");
      backdrop.classList.add("active");
    } else {
      sidebar.classList.remove("mobile-open");
      backdrop.classList.remove("active");
    }
  } else {
    const shouldCollapse = forceState !== undefined ? !forceState : !app.classList.contains("sidebar-collapsed");
    if (shouldCollapse) {
      app.classList.add("sidebar-collapsed");
      localStorage.setItem("physics_sidebar_collapsed", "true");
      updateSidebarToggleIcon(true);
    } else {
      app.classList.remove("sidebar-collapsed");
      localStorage.setItem("physics_sidebar_collapsed", "false");
      updateSidebarToggleIcon(false);
    }
  }
}

function updateSidebarToggleIcon(isCollapsed) {
  const icon = document.getElementById("sidebarToggleIcon");
  if (!icon) return;
  icon.className = isCollapsed ? "fa-solid fa-angles-right" : "fa-solid fa-bars-staggered";
}

function initKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
      e.preventDefault();
      toggleSidebar();
    }
    if (e.key === "Escape") {
      closeModal('formula-modal');
      const sidebar = document.getElementById("sidebar");
      if (sidebar && sidebar.classList.contains("mobile-open")) {
        toggleSidebar(false);
      }
    }
  });
}

// ==========================================
// 3. VECTOR SVG PHYSICS DIAGRAMS
// ==========================================
function getSvgDiagram(id) {
  if (id === "ch1-theo-rotke" || id === "ch1-def-all") {
    return `
      <div class="svg-diagram-wrapper">
        <svg width="280" height="180" viewBox="0 0 280 180">
          <defs>
            <linearGradient id="axisGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#06b6d4"/>
              <stop offset="100%" stop-color="#3b82f6"/>
            </linearGradient>
          </defs>
          <line x1="140" y1="15" x2="140" y2="165" stroke="url(#axisGrad)" stroke-width="3" stroke-dasharray="6 3"/>
          <text x="148" y="25" fill="#06b6d4" font-size="12" font-weight="700">Axis Y</text>
          <text x="148" y="165" fill="#06b6d4" font-size="12" font-weight="700">Y'</text>
          
          <path d="M 60 70 Q 140 30 200 65 Q 230 115 180 145 Q 100 160 55 125 Q 40 90 60 70 Z" fill="rgba(6, 182, 212, 0.12)" stroke="#3b82f6" stroke-width="2"/>
          
          <circle cx="200" cy="85" r="6" fill="#ec4899"/>
          <line x1="140" y1="85" x2="200" y2="85" stroke="#f59e0b" stroke-width="2"/>
          <text x="165" y="80" fill="#f59e0b" font-size="11">r₁</text>
          <text x="210" y="90" fill="#ec4899" font-size="12" font-weight="600">m₁ (v₁=ωr₁)</text>

          <circle cx="80" cy="115" r="5" fill="#10b981"/>
          <line x1="80" y1="115" x2="140" y2="115" stroke="#f59e0b" stroke-width="2"/>
          <text x="105" y="110" fill="#f59e0b" font-size="11">r₂</text>
          <text x="50" y="125" fill="#10b981" font-size="12" font-weight="600">m₂</text>

          <path d="M 125 40 A 18 18 0 0 1 155 40" fill="none" stroke="#a855f7" stroke-width="2"/>
          <text x="162" y="44" fill="#a855f7" font-size="13" font-weight="700">ω</text>
        </svg>
        <div class="svg-diagram-caption">Figure 1.1: Discrete masses rotating with uniform angular velocity ω about axis YY'</div>
      </div>
    `;
  } else if (id === "ch1-theo-axes") {
    return `
      <div class="svg-diagram-wrapper">
        <svg width="280" height="180" viewBox="0 0 280 180">
          <line x1="50" y1="140" x2="240" y2="140" stroke="#64748b" stroke-width="2"/>
          <text x="245" y="145" fill="#64748b" font-size="12">X</text>

          <line x1="80" y1="160" x2="170" y2="30" stroke="#64748b" stroke-width="2"/>
          <text x="175" y="35" fill="#64748b" font-size="12">Y</text>

          <line x1="100" y1="160" x2="100" y2="20" stroke="#06b6d4" stroke-width="2.5"/>
          <text x="80" y="25" fill="#06b6d4" font-size="12" font-weight="700">Z (Iz)</text>

          <path d="M 80 130 C 130 90, 200 90, 220 130 C 210 160, 120 160, 80 130 Z" fill="rgba(59, 130, 246, 0.12)" stroke="#3b82f6" stroke-width="1.8"/>

          <circle cx="170" cy="115" r="5" fill="#ec4899"/>
          <text x="180" y="118" fill="#ec4899" font-size="12">P(x,y)</text>
          <line x1="100" y1="140" x2="170" y2="115" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
          <text x="135" y="123" fill="#f59e0b" font-size="11">r</text>
        </svg>
        <div class="svg-diagram-caption">Figure 1.2: Planar lamina with mutually perpendicular axes: Iz = Ix + Iy</div>
      </div>
    `;
  } else if (id === "ch1-theo-rod") {
    return `
      <div class="svg-diagram-wrapper">
        <svg width="280" height="160" viewBox="0 0 280 160">
          <rect x="40" y="70" width="200" height="12" rx="4" fill="#3b82f6" opacity="0.8"/>
          <line x1="140" y1="20" x2="140" y2="140" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="145" y="30" fill="#06b6d4" font-size="11" font-weight="700">I_center = (1/12)ML²</text>
          
          <line x1="40" y1="20" x2="40" y2="140" stroke="#ec4899" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="45" y="30" fill="#ec4899" font-size="11" font-weight="700">I_end = (1/3)ML²</text>

          <line x1="40" y1="95" x2="140" y2="95" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="80" y="110" fill="#f59e0b" font-size="11">h = L/2</text>
        </svg>
        <div class="svg-diagram-caption">Figure 1.3: Slender rod moment of inertia: center vs end pivoted axis</div>
      </div>
    `;
  } else if (id === "ch2-theo-shell" || id === "ch2-def-all" || id === "ex-a25-2b") {
    return `
      <div class="svg-diagram-wrapper">
        <svg width="720" height="320" viewBox="0 0 720 320" style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
          <defs>
            <linearGradient id="shellGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.18" />
              <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05" />
            </linearGradient>
            <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.38" />
              <stop offset="100%" stop-color="#0891b2" stop-opacity="0.15" />
            </linearGradient>
          </defs>

          <!-- ======================================================== -->
          <!-- PANEL 1: CASE (A) POINT P OUTSIDE SPHERICAL SHELL (r > R) -->
          <!-- ======================================================== -->
          <rect x="8" y="8" width="344" height="304" rx="10" fill="rgba(15, 23, 42, 0.5)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5"/>
          <text x="180" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">Case 1: Outer Shell Point (r &gt; R)</text>
          <text x="180" y="50" fill="#94a3b8" font-size="11" text-anchor="middle">ΔOAP: x² = R² + r² - 2rR cosθ | Limits: [r - R, r + R]</text>

          <!-- Horizontal Reference Axis -->
          <line x1="30" y1="165" x2="330" y2="165" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 3"/>

          <!-- Spherical Shell Circle -->
          <circle cx="105" y="165" r="60" fill="url(#shellGrad1)" stroke="#0284c7" stroke-width="2"/>
          
          <!-- Elemental Ring Slice on Shell -->
          <ellipse cx="147.4" cy="165" rx="8" ry="42.4" fill="url(#ringGrad1)" stroke="#06b6d4" stroke-width="1.8"/>
          
          <!-- Triangle OAP Construction Lines -->
          <!-- Side OA = R (Radius of Shell) -->
          <line x1="105" y1="165" x2="147.4" y2="122.6" stroke="#f59e0b" stroke-width="2.2"/>
          <!-- Side OP = r (Distance to Point P) -->
          <line x1="105" y1="165" x2="285" y2="165" stroke="#38bdf8" stroke-width="2" stroke-dasharray="5 3"/>
          <!-- Side AP = x (Distance from Ring Element to Point P) -->
          <line x1="147.4" y1="122.6" x2="285" y2="165" stroke="#c084fc" stroke-width="2.2"/>

          <!-- Angle theta Arc at Center O -->
          <path d="M 125 165 A 20 20 0 0 0 119 151" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
          <text x="127" y="153" fill="#f59e0b" font-size="12" font-weight="700">θ</text>

          <!-- Vertices of Triangle OAP -->
          <!-- O (Center of Sphere) -->
          <circle cx="105" y="165" r="4.5" fill="#38bdf8"/>
          <text x="90" y="182" fill="#38bdf8" font-size="13" font-weight="800">O</text>

          <!-- A (Point on Elemental Ring) -->
          <circle cx="147.4" y="122.6" r="4.5" fill="#f59e0b"/>
          <text x="145" y="112" fill="#f59e0b" font-size="13" font-weight="800">A</text>
          
          <!-- P (External Observation Point) -->
          <circle cx="285" y="165" r="5" fill="#ec4899"/>
          <text x="295" y="170" fill="#ec4899" font-size="14" font-weight="800">P</text>

          <!-- Parameter Labels on Sides of Triangle -->
          <text x="117" y="138" fill="#f59e0b" font-size="12" font-weight="700">R</text>
          <text x="210" y="136" fill="#c084fc" font-size="13" font-weight="700">x</text>
          <text x="200" y="182" fill="#38bdf8" font-size="13" font-weight="700">r</text>
          <text x="150" y="222" fill="#06b6d4" font-size="11">Ring (dm)</text>

          <!-- Result Badge for Outside Point -->
          <rect x="25" y="270" width="310" height="26" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="1"/>
          <text x="180" y="287" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">V_outside = - GM / r  (Behaves as point mass at O)</text>


          <!-- ======================================================== -->
          <!-- PANEL 2: CASE (B) POINT P INSIDE SPHERICAL SHELL (r < R) -->
          <!-- ======================================================== -->
          <rect x="368" y="8" width="344" height="304" rx="10" fill="rgba(15, 23, 42, 0.5)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5"/>
          <text x="540" y="32" fill="#38bdf8" font-size="13" font-weight="700" text-anchor="middle">Case 2: Inner Shell Point (r &lt; R)</text>
          <text x="540" y="50" fill="#94a3b8" font-size="11" text-anchor="middle">ΔOAP: x² = R² + r² - 2rR cosθ | Limits: [R - r, R + r]</text>

          <!-- Horizontal Reference Axis -->
          <line x1="390" y1="165" x2="690" y2="165" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 3"/>

          <!-- Spherical Shell Circle -->
          <circle cx="475" y="165" r="60" fill="url(#shellGrad1)" stroke="#0284c7" stroke-width="2"/>
          
          <!-- Elemental Ring Slice on Shell -->
          <ellipse cx="509.4" cy="165" rx="8" ry="49.1" fill="url(#ringGrad1)" stroke="#06b6d4" stroke-width="1.8"/>
          
          <!-- Triangle OAP Construction Lines for Internal Point -->
          <!-- Side OA = R (Radius to Ring) -->
          <line x1="475" y1="165" x2="509.4" y2="115.9" stroke="#f59e0b" stroke-width="2.2"/>
          <!-- Side OP = r (Internal Point Distance r < R) -->
          <line x1="475" y1="165" x2="520" y2="165" stroke="#38bdf8" stroke-width="2.5"/>
          <!-- Side AP = x (Distance from Ring to Internal Point P) -->
          <line x1="509.4" y1="115.9" x2="520" y2="165" stroke="#c084fc" stroke-width="2.2"/>

          <!-- Angle theta Arc at Center O -->
          <path d="M 495 165 A 20 20 0 0 0 488 152" fill="none" stroke="#f59e0b" stroke-width="1.8"/>
          <text x="496" y="153" fill="#f59e0b" font-size="12" font-weight="700">θ</text>

          <!-- Vertices of Triangle OAP -->
          <!-- O (Center of Sphere) -->
          <circle cx="475" y="165" r="4.5" fill="#38bdf8"/>
          <text x="460" y="182" fill="#38bdf8" font-size="13" font-weight="800">O</text>

          <!-- A (Point on Ring) -->
          <circle cx="509.4" y="115.9" r="4.5" fill="#f59e0b"/>
          <text x="508" y="105" fill="#f59e0b" font-size="13" font-weight="800">A</text>
          
          <!-- P (Internal Observation Point r < R) -->
          <circle cx="520" y="165" r="5" fill="#ec4899"/>
          <text x="526" y="182" fill="#ec4899" font-size="13" font-weight="800">P (r &lt; R)</text>

          <!-- Parameter Labels on Sides -->
          <text x="485" y="135" fill="#f59e0b" font-size="12" font-weight="700">R</text>
          <text x="522" y="138" fill="#c084fc" font-size="13" font-weight="700">x</text>
          <text x="495" y="180" fill="#38bdf8" font-size="12" font-weight="700">r</text>
          <text x="515" y="226" fill="#06b6d4" font-size="11">Ring (dm)</text>

          <!-- Result Badge for Inside Point -->
          <rect x="385" y="270" width="310" height="26" rx="6" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="1"/>
          <text x="540" y="287" fill="#34d399" font-size="12" font-weight="700" text-anchor="middle">V_inside = - GM / R (Constant)  |  Field E_in = 0</text>
        </svg>
        <div class="svg-diagram-caption">
          <strong>Figure 2.1:</strong> Spherical Shell Gravitational Potential &amp; Field Derivation via Triangle $\\Delta OAP$ (Outer Shell Point vs. Inner Shell Point)
        </div>
      </div>
    `;
  } else if (id === "ch2-theo-pendulum") {
    return `
      <div class="svg-diagram-wrapper">
        <svg width="260" height="190" viewBox="0 0 260 190">
          <circle cx="110" cy="25" r="4" fill="#3b82f6"/>
          <text x="95" y="25" fill="#3b82f6" font-size="13" font-weight="700">S (Pivot)</text>
          <line x1="110" y1="25" x2="110" y2="175" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/>

          <path d="M 125 20 C 170 60, 180 130, 150 165 C 130 185, 95 170, 95 130 C 95 80, 110 30, 125 20 Z" fill="rgba(245, 158, 11, 0.12)" stroke="#f59e0b" stroke-width="2"/>
          
          <circle cx="138" cy="110" r="5" fill="#ec4899"/>
          <line x1="110" y1="25" x2="138" y2="110" stroke="#ec4899" stroke-width="2"/>
          <text x="145" y="115" fill="#ec4899" font-size="12" font-weight="700">G (COM)</text>
          <text x="128" y="70" fill="#ec4899" font-size="12">l</text>

          <path d="M 110 55 A 30 30 0 0 0 120 52" fill="none" stroke="#06b6d4" stroke-width="2"/>
          <text x="114" y="68" fill="#06b6d4" font-size="12">θ</text>

          <line x1="138" y1="110" x2="138" y2="160" stroke="#ef4444" stroke-width="2"/>
          <text x="144" y="155" fill="#ef4444" font-size="12" font-weight="700">Mg</text>
        </svg>
        <div class="svg-diagram-caption">Figure 2.2: Compound physical pendulum pivoted at S with COM at G separated by distance l</div>
      </div>
    `;
  } else if (id === "ch2-math-8") {
    return `
      <div class="svg-diagram-wrapper">
        <svg width="260" height="180" viewBox="0 0 260 180">
          <rect x="50" y="20" width="140" height="140" fill="none" stroke="#3b82f6" stroke-width="2"/>
          
          <circle cx="50" cy="20" r="6" fill="#10b981"/>
          <text x="30" y="18" fill="#10b981" font-size="12" font-weight="700">m</text>

          <circle cx="190" cy="20" r="8" fill="#f59e0b"/>
          <text x="202" y="22" fill="#f59e0b" font-size="12" font-weight="700">2m</text>

          <circle cx="190" cy="160" r="10" fill="#ec4899"/>
          <text x="204" y="165" fill="#ec4899" font-size="12" font-weight="700">3m</text>

          <circle cx="50" cy="160" r="12" fill="#a855f7"/>
          <text x="20" y="165" fill="#a855f7" font-size="12" font-weight="700">4m</text>

          <circle cx="120" cy="90" r="6" fill="#06b6d4"/>
          <text x="128" y="93" fill="#06b6d4" font-size="12" font-weight="700">m</text>

          <line x1="120" y1="90" x2="120" y2="125" stroke="#ef4444" stroke-width="2.5"/>
          <text x="125" y="130" fill="#ef4444" font-size="11" font-weight="700">F_net</text>
        </svg>
        <div class="svg-diagram-caption">Figure 2.3: Superposition of gravitational forces at center of square: F_net = (4√2 Gm²)/a²</div>
      </div>
    `;
  } else if (id === "ch3-def-all" || id === "ch3-theo-schrodinger-ti") {
    return `
      <div class="svg-diagram-wrapper">
        <svg width="300" height="150" viewBox="0 0 300 150">
          <line x1="30" y1="120" x2="280" y2="120" stroke="#64748b" stroke-width="2"/>
          <text x="285" y="125" fill="#64748b" font-size="12">x</text>

          <path d="M 40 120 C 100 120, 120 30, 150 30 C 180 30, 200 120, 260 120" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" stroke-width="3"/>
          <text x="140" y="20" fill="#06b6d4" font-size="12" font-weight="700">|Ψ(x)|² Peak</text>

          <rect x="142" y="32" width="16" height="88" fill="rgba(236, 72, 153, 0.3)" stroke="#ec4899" stroke-width="1.5"/>
          <text x="142" y="135" fill="#ec4899" font-size="11">dx</text>
          <text x="180" y="70" fill="#ec4899" font-size="11">P = |Ψ|²dx</text>
        </svg>
        <div class="svg-diagram-caption">Figure 3.1: Born's statistical probability density curve |Ψ|² and differential element dx</div>
      </div>
    `;
  }
  return "";
}

// ==========================================
// 4. FILTER CONTROLLERS (CHAPTER & TYPE)
// ==========================================
function filterCategory(category) {
  currentCategory = category;

  // Sidebar link highlight
  document.querySelectorAll(".sidebar-nav .nav-item").forEach(el => el.classList.remove("active"));
  const navTarget = document.getElementById(`nav-${category}`);
  if (navTarget) navTarget.classList.add("active");

  // Chapter filter chip highlight
  document.querySelectorAll(".filter-chip:not(.utility-chip)").forEach(el => el.classList.remove("active"));
  const chipTarget = document.getElementById(`chip-${category}`);
  if (chipTarget) chipTarget.classList.add("active");

  // Close mobile drawer immediately for instant responsiveness
  if (window.innerWidth <= 992) {
    toggleSidebar(false);
  }

  applyFilters();
}

function filterType(type) {
  currentContentType = type;

  document.querySelectorAll(".type-pill").forEach(el => el.classList.remove("active"));
  const pillTarget = document.getElementById(`type-${type}`);
  if (pillTarget) pillTarget.classList.add("active");

  applyFilters();
}

// Ultra-fast DOM-based Filter (0ms latency, zero KaTeX re-compilation)
function applyFilters() {
  const query = (document.getElementById("searchInput")?.value || "").toLowerCase().trim();
  const cards = document.querySelectorAll(".question-card");
  let visibleCount = 0;

  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    const cardType = card.getAttribute("data-content-type");
    const cardTags = card.getAttribute("data-tags") || "";
    const cardExamPaper = card.getAttribute("data-exam-paper") || "";
    const cardSearch = card.getAttribute("data-search-text") || "";

    const matchCat = (currentCategory === "all" || cardCat === currentCategory);
    
    let matchType = false;
    if (currentContentType === "all") {
      matchType = true;
    } else if (currentContentType === "board-exam") {
      matchType = cardTags.includes("Board Exam") || cardExamPaper !== "";
    } else {
      matchType = (cardType === currentContentType);
    }

    const matchSearch = (!query || cardSearch.includes(query) || (card.textContent && card.textContent.toLowerCase().includes(query)));

    if (matchCat && matchType && matchSearch) {
      card.style.display = "";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  const noResults = document.getElementById("no-results-box");
  if (noResults) {
    noResults.style.display = (visibleCount === 0) ? "block" : "none";
  }
}

// Helper: Format raw LaTeX formulas into delimited KaTeX math lines
function formatImportantFormulaHtml(formulaStr) {
  if (!formulaStr) return '';
  const lines = formulaStr.split('\n').map(l => l.trim()).filter(Boolean);

  const formattedLines = lines.map(line => {
    if (line.includes('$')) {
      return `<div class="formula-line">${line}</div>`;
    }

    const listMatch = line.match(/^(\d+\.\s*|[a-z]\)\s*|\([ivx]+\)\s*)(.*)$/i);
    if (listMatch) {
      const prefix = listMatch[1];
      let mathPart = listMatch[2].trim();

      const subLabelMatch = mathPart.match(/^([A-Za-z\s]+:)\s*(.*)$/);
      if (subLabelMatch && !subLabelMatch[1].startsWith('\\')) {
        const subLabel = subLabelMatch[1];
        const subMath = subLabelMatch[2].trim();
        return `<div class="formula-line"><span class="formula-prefix">${prefix}</span><strong>${subLabel}</strong> $${subMath}$</div>`;
      }
      return `<div class="formula-line"><span class="formula-prefix">${prefix}</span>$${mathPart}$</div>`;
    }

    const labelMatch = line.match(/^([A-Za-z\s]+:)\s*(.*)$/);
    if (labelMatch && !labelMatch[1].startsWith('\\')) {
      const label = labelMatch[1];
      const mathPart = labelMatch[2].trim();
      return `<div class="formula-line"><strong>${label}</strong> $${mathPart}$</div>`;
    }

    return `<div class="formula-line">$${line}$</div>`;
  });

  return formattedLines.join('');
}

// ==========================================
// 5. UNIVERSITY EXAM ANSWER SCRIPT BUILDER
// ==========================================
function getDisplayQNumber(q) {
  if (q.examPaper && q.qNumber && q.qNumber.includes("Q.")) {
    return q.qNumber.split("Q.")[1].trim();
  }
  if (q.qNumber && q.qNumber.includes("|")) {
    const raw = q.qNumber.split("|")[1].trim();
    if (raw === "CLO-1") return "1(a)";
    if (raw.startsWith("Broad")) {
      const num = raw.replace("Broad", "").trim();
      return `${num}(b)`;
    }
    if (raw.startsWith("Mid Math")) {
      const num = raw.replace("Mid Math", "").trim();
      return `${num}(c)`;
    }
    return raw;
  }
  return q.qNumber || "1";
}

function formatProofWithQED(proofText) {
  if (!proofText) return "";
  let text = proofText.trim();
  if (!text.includes("[PROVED]") && !text.includes("[Proved]") && !text.includes("[proved]") && !text.includes("\\blacksquare")) {
    text += `\n$$\\blacksquare \\quad \\text{[Proved]}$$`;
  }
  return text;
}

function renderExamScriptBody(q) {
  const displayQNum = getDisplayQNumber(q);
  let out = `<div class="exam-khata-header">Answer to the Question No. ${displayQNum}</div>`;

  if (q.contentType === "definition") {
    // CLO-1: Clean single perfect definition, mathematical form, SI units & dimensions
    out += `
      <div class="exam-khata-section">
        <div class="exam-script-step-title">1. Definition & Core Physical Concept:</div>
        <div class="def-block">${q.definition || q.easyDefinition}</div>
      </div>
    `;

    if (q.importantFormula) {
      out += `
        <div class="exam-khata-section">
          <div class="exam-script-step-title">2. Mathematical Expressions & Governing Formulas:</div>
          <div class="formula-box">
            <div class="formula-content">${formatImportantFormulaHtml(q.importantFormula)}</div>
          </div>
        </div>
      `;
    }

    if (q.stepByStepSolution) {
      out += `
        <div class="exam-khata-section">
          <div class="exam-script-step-title">3. SI Units & Dimensional Analysis:</div>
          <div>${q.stepByStepSolution}</div>
        </div>
      `;
    }
  } else if (q.contentType === "derivation") {
    // CLO-2: Statement / Setup -> Calculus Steps with Limits -> Concluded with ■ [Proved]
    out += `
      <div class="exam-khata-section">
        <div class="exam-script-step-title">1. Statement & Governing Physical Law:</div>
        <div class="def-block">${q.definition || q.title}</div>
      </div>
    `;

    if (q.importantFormula) {
      out += `
        <div class="exam-khata-section">
          <div class="exam-script-step-title">2. Governing Equation:</div>
          <div class="formula-box">
            <div class="formula-content">${formatImportantFormulaHtml(q.importantFormula)}</div>
          </div>
        </div>
      `;
    }

    out += `
      <div class="exam-khata-section">
        <div class="exam-script-step-title">3. Rigorous Step-by-Step Calculus Derivation:</div>
        <div class="exam-script-step">${formatProofWithQED(q.proof || q.stepByStepSolution)}</div>
      </div>
    `;

    if (q.finalAnswer) {
      out += `
        <div class="exam-script-final-answer">
          <i class="fa-solid fa-award"></i> $\\therefore$ Verified Result: ${q.finalAnswer}
        </div>
      `;
    }
  } else {
    // CLO-3: Numerical Problem
    // If q.stepByStepSolution already has an exam-khata-header, strip it so it doesn't duplicate the top header
    let solutionClean = (q.stepByStepSolution || "").replace(/<div class="exam-khata-header">.*?<\/div>/gi, "").trim();

    if (solutionClean.includes("Given Parameters") || solutionClean.includes("Given Data")) {
      // It is already structured as Exam Khata (e.g. from board exam paper)
      out += solutionClean;
    } else {
      out += `
        <div class="exam-khata-section">
          <div class="exam-script-step-title">1. Problem Statement:</div>
          <div class="def-block">${q.definition || q.title}</div>
        </div>
      `;

      if (q.importantFormula) {
        out += `
          <div class="exam-khata-section">
            <div class="exam-script-step-title">2. Relevant Governing Formula:</div>
            <div class="formula-box">
              <div class="formula-content">${formatImportantFormulaHtml(q.importantFormula)}</div>
            </div>
          </div>
        `;
      }

      out += `
        <div class="exam-khata-section">
          <div class="exam-script-step-title">3. Step-by-Step Mathematical Calculation:</div>
          ${solutionClean}
        </div>
      `;
    }

    if (q.finalAnswer && !out.includes(q.finalAnswer)) {
      out += `
        <div class="exam-script-final-answer">
          <i class="fa-solid fa-award"></i> $\\therefore$ Final Answer: ${q.finalAnswer}
        </div>
      `;
    }
  }

  // Personal Bengali Intuition Section - PLACED STRICTLY AT THE VERY END
  if (q.banglaIntuition) {
    out += `
      <hr class="exam-khata-divider" />
      <div class="bangla-box">
        <div class="bangla-box-title"><i class="fa-solid fa-lightbulb"></i> Intuition & Understanding (বাংলায় বোঝার জন্য)</div>
        <div class="bangla-box-content">
          ${q.banglaIntuition}
          ${q.shortcut ? `<div class="bangla-tip-hook"><strong>পরীক্ষার টিপস / মূল নির্যাস:</strong> ${q.shortcut}</div>` : ''}
          ${q.commonMistakes ? `<div class="bangla-tip-pitfall"><strong>পরীক্ষার সাধারণ ভুল ও সতর্কতা:</strong> ${q.commonMistakes}</div>` : ''}
        </div>
      </div>
    `;
  }

  return out;
}

// ==========================================
// 6. RENDER ALL QUESTIONS ONCE (HIGH PERFORMANCE)
// ==========================================
function renderAllPhysicsCards() {
  const container = document.getElementById("questions-wrapper");
  if (!container) return;

  const masteredList = getMasteredList();
  let html = "";

  physicsData.forEach((q) => {
    const isMastered = masteredList.includes(q.id);
    const tagsHtml = q.tags.map(t => `<span class="exam-tag">${t}</span>`).join(" ");
    const svgDiagramHtml = getSvgDiagram(q.id);
    const searchString = [
      q.title,
      q.qNumber,
      q.category,
      q.contentType,
      ...(q.tags || []),
      q.finalAnswer || '',
      q.shortcut || ''
    ].join(' ').toLowerCase();

    html += `
      <div class="question-card ${isMastered ? 'mastered' : ''}" 
           id="${q.id}" 
           data-category="${q.category}" 
           data-content-type="${q.contentType}"
           data-tags="${(q.tags || []).join(' ')}"
           data-exam-paper="${q.examPaper || ''}"
           data-search-text="${searchString.replace(/"/g, '&quot;')}">
        <div class="question-card-header" onclick="toggleCard('${q.id}')">
          <div class="question-title-group">
            <span class="q-number-badge">${q.qNumber}</span>
            ${tagsHtml}
            <span class="q-title-text">${q.title}</span>
          </div>
          <div class="card-actions-right">
            <!-- Mark as Mastered Button -->
            <button class="master-btn ${isMastered ? 'active' : ''}" id="master-btn-${q.id}" onclick="event.stopPropagation(); toggleMastered('${q.id}')" title="${isMastered ? 'Mastered! Click to unmark' : 'Mark as Mastered'}">
              <i class="fa-solid fa-check"></i>
            </button>
            <!-- Copy Solution Button -->
            <button class="action-icon-btn" onclick="event.stopPropagation(); copyPhysicsSolution('${q.id}')" title="Copy Complete Solution">
              <i class="fa-solid fa-copy"></i>
            </button>
            <i class="fa-solid fa-chevron-down toggle-icon"></i>
          </div>
        </div>

        <div class="question-card-body">
          ${svgDiagramHtml}

          <div class="exam-script-container">
            <div class="exam-script-header">
              <div class="exam-script-badge">
                <i class="fa-solid fa-circle-check"></i> Verified IIUC Physics Solution
              </div>
              <button class="copy-sol-btn" onclick="copyPhysicsSolution('${q.id}')">
                <i class="fa-solid fa-copy"></i> Copy Solution
              </button>
            </div>

            <div class="exam-script-content" id="content-${q.id}">
              ${renderExamScriptBody(q)}
            </div>
          </div>
        </div>
      </div>
    `;
  });

  html += `
    <div id="no-results-box" style="display: none; text-align: center; padding: 4rem 2rem; color: var(--text-dim);">
      <i class="fa-solid fa-atom" style="font-size: 3.5rem; margin-bottom: 1.25rem; color: var(--accent-primary);"></i>
      <h3>No matching physics topics or problems found</h3>
      <p style="margin-top:0.5rem;">Try adjusting your keyword search or resetting filters.</p>
      <button class="btn btn-secondary" onclick="resetFilters()" style="margin-top:1.25rem;">
        <i class="fa-solid fa-rotate-left"></i> Reset Filters
      </button>
    </div>
  `;

  container.innerHTML = html;
}

// ==========================================
// 6. CARD EXPAND & COLLAPSE
// ==========================================
function toggleCard(cardId) {
  const card = document.getElementById(cardId);
  if (card) {
    card.classList.toggle("collapsed");
  }
}

function toggleAllCards(collapse) {
  const cards = document.querySelectorAll(".question-card");
  cards.forEach(card => {
    if (collapse) {
      card.classList.add("collapsed");
    } else {
      card.classList.remove("collapsed");
    }
  });
}

// ==========================================
// 7. REAL-TIME SEARCH (DEBOUNCED)
// ==========================================
let searchDebounceTimer = null;
function handleSearch() {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("searchClearBtn");
  const query = input ? input.value.trim() : "";

  if (clearBtn) {
    clearBtn.style.display = query.length > 0 ? "block" : "none";
  }

  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    applyFilters();
  }, 100);
}

function clearSearch() {
  const input = document.getElementById("searchInput");
  if (input) {
    input.value = "";
    handleSearch();
    input.focus();
  }
}

function resetFilters() {
  currentCategory = "all";
  currentContentType = "all";
  clearSearch();
  filterCategory("all");
  filterType("all");
}

function checkUrlSearch() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get('search');
  if (q) {
    const input = document.getElementById("searchInput");
    if (input) {
      input.value = q;
      handleSearch();
    }
  }
}

// ==========================================
// 8. CLIPBOARD COPY WITH TOAST FEEDBACK
// ==========================================
function copyPhysicsSolution(id) {
  const q = physicsData.find(item => item.id === id);
  if (!q) return;

  const contentEl = document.getElementById(`content-${id}`);
  let plainText = "";

  if (contentEl) {
    plainText = `=== PHYSICS-1101: ${q.qNumber} - ${q.title} ===\n\n` + contentEl.innerText;
  } else {
    plainText = `${q.qNumber}: ${q.title}\nResult: ${q.finalAnswer || ''}`;
  }

  navigator.clipboard.writeText(plainText).then(() => {
    showToast(`Copied solution for "${q.title}" to clipboard!`);
  }).catch(() => {
    showToast(`Solution copied!`);
  });
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast show";
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ==========================================
// 9. THEME CONTROLLER (DARK / LIGHT)
// ==========================================
function initThemeState() {
  const saved = localStorage.getItem("physics_theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("physics_theme", next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.className = theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
  }
}

// ==========================================
// 10. MODALS & KATEX AUTO-RENDER
// ==========================================
function initModals() {
  const modalBody = document.getElementById("formula-modal-body");
  if (modalBody && typeof physicsConstantsData !== "undefined") {
    modalBody.innerHTML = physicsConstantsData;
  }
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("active");
    const body = modal.querySelector(".modal-content") || modal;
    initKaTeX(body);
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("active");
  }
}

function initKaTeX(target) {
  const el = target || document.getElementById("questions-wrapper") || document.body;
  if (window.renderMathInElement) {
    renderMathInElement(el, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false},
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}
      ],
      throwOnError : false
    });
  }
}
