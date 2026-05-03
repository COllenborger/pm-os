// GreenPath Studios Marketing Ops — Rachel Torres
// Source: taskflow-test/fixtures.md + week-2/week-2/sample-data/taskflow-projects.json

const TEAM = {
  name: 'GreenPath Studios Marketing Ops',
  lead: 'Rachel Torres'
};

const PROJECTS = [
  { id: 'PRJ-001', name: 'Launch Email — Q2 Product v3',                       status: 'blocked',   owner: 'Marcus Lee',     target: '2026-04-20', pct: 62 },
  { id: 'PRJ-002', name: 'GreenPath Summit 2026 — Event Logistics',             status: 'at_risk',   owner: 'Anika Raman',    target: '2026-06-08', pct: 40 },
  { id: 'PRJ-003', name: 'Website Rebrand Phase 2 — Product Pages',             status: 'at_risk',   owner: 'Theo Kim',       target: '2026-05-15', pct: 55 },
  { id: 'PRJ-004', name: 'Lifecycle Email Overhaul — Onboarding Series',        status: 'on_track',  owner: 'Jenna Pak',      target: '2026-05-01', pct: 70 },
  { id: 'PRJ-005', name: 'Customer Case Study Series — Q2',                     status: 'on_track',  owner: 'Hana Nakamura',  target: '2026-05-30', pct: 45 },
  { id: 'PRJ-006', name: 'Q1 Marketing Retro Report',                           status: 'completed', owner: 'Rachel Torres',  target: '2026-04-10', pct: 100 },
  { id: 'PRJ-007', name: 'Paid Ads Reactivation — Google + Meta',               status: 'blocked',   owner: 'Priya Shah',     target: '2026-04-25', pct: 35 },
  { id: 'PRJ-008', name: 'Partner Co-Marketing — BrightWave + Apex',            status: 'at_risk',   owner: 'Ben Alvarez',    target: '2026-05-12', pct: 30 },
  { id: 'PRJ-009', name: 'Quarterly Stakeholder Deck — Q2',                     status: 'on_track',  owner: 'Rachel Torres',  target: '2026-04-24', pct: 25 },
  { id: 'PRJ-010', name: 'Q2 Launch One-Pager',                                 status: 'on_track',  owner: 'Sofia Ruiz',     target: '2026-04-17', pct: 65 },
  { id: 'PRJ-011', name: 'SEO Content Backlog — Q2 Batch',                      status: 'overdue',   owner: 'Amara Okafor',   target: '2026-04-05', pct: 55 },
  { id: 'PRJ-012', name: 'Trade Show Booth — ODSC East 2026',                   status: 'on_track',  owner: 'Ben Alvarez',    target: '2026-05-05', pct: 50 },
  { id: 'PRJ-013', name: 'Email Deliverability Audit',                          status: 'blocked',   owner: 'Marcus Lee',     target: '2026-04-30', pct: 20 },
  { id: 'PRJ-014', name: 'HubSpot Cleanup — Contacts + Workflows',              status: 'at_risk',   owner: 'Priya Shah',     target: '2026-04-22', pct: 48 },
  { id: 'PRJ-015', name: 'Brand Asset Library Migration — Frontify to Bynder',  status: 'overdue',   owner: 'Theo Kim',       target: '2026-04-08', pct: 72, controlled_tail: true }
];

const FLAGGED_TASKS = [
  {
    id: 'TSK-001-3', project: 'PRJ-001',
    title: 'Legal review of email copy',
    assignee: 'unassigned', due: '2026-04-10',
    provenance: 'Status set to Blocked on 4/2. No internal legal owner assigned after 3/29 standup.\n\nMarcus Lee, 4/8: "Need legal to unblock this week or we miss the send window."\n\nRachel Torres, 4/6: "Who owns legal review on our side? Third project blocked on the same ambiguity."'
  },
  {
    id: 'TSK-007-3', project: 'PRJ-007',
    title: 'Audience research from analytics',
    assignee: 'unassigned', due: '2026-04-03',
    provenance: 'No assignee since 3/25 — overdue 11 days.\n\nPriya Shah, 4/7: "Blocked on audience data. If I don\'t get it by Thursday the 4/25 launch slips."\n\nRachel Torres, 4/5: "I\'ll claim audience research temporarily unless someone else picks it up."'
  },
  {
    id: 'TSK-013-2', project: 'PRJ-013',
    title: 'Vendor NDA + SOW signed (Mailhealth Inc)',
    assignee: 'Marcus Lee', due: '2026-04-05',
    provenance: 'Status: Blocked. Procurement has held Mailhealth SOW for 14 days without response.\n\nMarcus Lee, 4/6: "Procurement is sitting on the SOW. Rachel, can you nudge?"\n\nRachel Torres, 4/6: "I\'ll ping Dana Kwon Monday. Every week this slips pushes audit into May."'
  },
  {
    id: 'TSK-003-5', project: 'PRJ-003',
    title: 'SEO redirects mapping',
    assignee: 'unassigned', due: '2026-05-01',
    provenance: 'Not started. Last touched 3/15 — 4 weeks with no owner claimed.\n\nRachel Torres, 4/9: "Redirects task has no owner. Lucas or Devon — please claim by Monday."'
  },
  {
    id: 'TSK-008-4', project: 'PRJ-008',
    title: 'Co-branded landing page',
    assignee: 'unassigned', due: '2026-04-22',
    provenance: 'Not started since 3/20. Task note: "Ownership unclear across three orgs. We volunteered to drive but no internal owner."\n\nBen Alvarez, 4/9: "Topic mediation taking longer than expected — partners want different things."'
  },
  {
    id: 'TSK-011-3', project: 'PRJ-011',
    title: 'Freelancer drafts (12 articles)',
    assignee: 'Amara Okafor', due: '2026-04-01',
    provenance: 'In progress, overdue since 4/1. 7 of 12 delivered.\n\nAmara Okafor, 4/3: "Mira stopped responding. I\'m sourcing a replacement via Upwork but this slips target for sure."\n\nRachel Torres, 4/3: "Let\'s reset target to 4/30 once you have the new freelancer signed."'
  },
  {
    id: 'TSK-002-2', project: 'PRJ-002',
    title: 'Keynote speaker confirmations (3 of 3)',
    assignee: 'Anika Raman', due: '2026-04-01',
    provenance: 'In progress, overdue. 2 of 3 confirmed. Dr. Patel unresponsive for 10 days.\n\nAnika Raman, 4/11: "If no reply by 4/15 I\'ll swap to backup (Maya Liu). Reg copy depends on final speaker list."\n\nRachel Torres, 4/10: "Decide the swap by Wednesday — reg site can\'t slip past 4/25."'
  },
  {
    id: 'TSK-014-3', project: 'PRJ-014',
    title: 'Audit 63 active workflows',
    assignee: 'Priya Shah', due: '2026-04-05',
    provenance: 'In progress, overdue. Scope 30% larger than estimated.\n\nPriya Shah, 4/11: "I can hit 4/22 only if I drop the paid-ads audience work. Need Rachel to pick."\n\nRachel Torres, 4/11: "Let\'s discuss Monday — PRJ-007 is already blocked on your audience work. Real tradeoff."'
  }
];

// ── Helpers ──

function getFlaggedTasks(projectId) {
  return FLAGGED_TASKS.filter(t => t.project === projectId);
}

function initials(name) {
  if (!name || name === 'unassigned') return '?';
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function fmtDate(d) {
  return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function isPast(d) {
  return new Date(d + 'T00:00:00') < new Date('2026-04-14T00:00:00');
}

function statusLabel(s) {
  return { blocked: 'BLOCKED', at_risk: 'AT RISK', on_track: 'ON TRACK', overdue: 'OVERDUE', completed: 'COMPLETED' }[s] || s;
}

function renderSidebar(containerId, activeLabel) {
  const navItems = [
    { label: 'Home',           href: 'dashboard.html' },
    { label: 'My Work',        href: '#demo' },
    { label: 'Weekly Summary', href: 'summary.html'   },
    { label: 'Projects',       href: '#demo' },
    { label: 'Reports',        href: '#demo' }
  ];

  let html = '<div class="sidebar-section">';
  navItems.forEach(item => {
    const active = item.label === activeLabel ? ' active' : '';
    const href = item.href === '#demo' ? '#' : item.href;
    const onclick = item.href === '#demo' ? ' onclick="demoAlert(event)"' : '';
    html += `<a href="${href}" class="sidebar-item${active}"${onclick}>${item.label}</a>`;
  });
  html += '</div><div class="sidebar-divider"></div>';

  html += '<div class="sidebar-section"><div class="sidebar-label">My Projects</div>';
  PROJECTS.filter(p => p.status !== 'completed').forEach(p => {
    html += `<a href="#" class="sidebar-item" onclick="demoAlert(event)" title="${p.name}">
      <span class="status-dot ${p.status}"></span>
      <span class="sidebar-project-name">${p.name}</span>
    </a>`;
  });
  html += '</div>';

  document.getElementById(containerId).innerHTML = html;
}

function demoAlert(e) {
  e.preventDefault();
  showToast('Demo only — opens in full build');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2500);
}
