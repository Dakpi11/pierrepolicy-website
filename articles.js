/* ==========================================================================
   PP&SC ARTICLE LIST
   To publish: add a new entry at the TOP of this list. The newest entry
   becomes the featured article on the homepage automatically, and every
   entry appears on the Research page.

   Fields:
     title    Article title
     date     Publication date, YYYY-MM-DD
     tag      Topic label (used for filters on the Research page)
     summary  2-3 sentences shown on the homepage and Research page
     url      Link to the article page (copy article-template.html)
     pdf      Optional link to a PDF version ('' if none)
     minutes  Estimated reading time
   ========================================================================== */

window.PPSC_ARTICLES = [
  {
    title: 'Lorem Ipsum Dolor Sit Amet: Consectetur Adipiscing in a Fragile State',
    date: '2026-09-21',
    tag: 'Conflict',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud exercitation.',
    url: 'article-template.html',
    pdf: '',
    minutes: 8
  },
  {
    title: 'Duis Aute Irure: Reprehenderit in Voluptate and Alliance Burden-Sharing',
    date: '2026-09-02',
    tag: 'Defense',
    summary: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    url: 'article-template.html',
    pdf: '',
    minutes: 6
  },
  {
    title: 'Sunt in Culpa: Qui Officia Deserunt Mollit Anim',
    date: '2026-08-14',
    tag: 'Haiti',
    summary: 'Sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus, nulla gravida orci a odio.',
    url: 'article-template.html',
    pdf: '',
    minutes: 5
  },
  {
    title: 'Nullam Varius: Turpis et Commodo Pharetra in Governance Indicators',
    date: '2026-07-30',
    tag: 'Governance',
    summary: 'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.',
    url: 'article-template.html',
    pdf: '',
    minutes: 7
  }
];

/* Shared helpers used by the homepage, Research page and article pages. */
window.PPSC = {
  fmtDate: function (iso) {
    var d = new Date(iso + 'T12:00:00');
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  },
  esc: function (s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; });
  },
  sorted: function () {
    return window.PPSC_ARTICLES.slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  }
};
