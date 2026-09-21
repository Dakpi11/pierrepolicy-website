---
# This file is generated automatically from the articles in _posts.
# Do not edit the list by hand: add or edit articles in the Pages CMS dashboard.
---
window.PPSC_ARTICLES = [{% assign live = site.posts | where_exp: "p", "p.status != 'Draft'" %}{% for post in live %}
  {
    title: {{ post.title | jsonify }},
    date: {{ post.date | date: "%Y-%m-%d" | jsonify }},
    tag: {{ post.tag | default: "Analysis" | jsonify }},
    summary: {{ post.summary | strip_html | strip_newlines | jsonify }},
    url: {{ post.url | remove_first: "/" | jsonify }},
    pdf: {% if post.pdf and post.pdf != "" %}{{ post.pdf | relative_url | jsonify }}{% else %}""{% endif %},
    minutes: {{ post.content | number_of_words | divided_by: 200 | plus: 1 | floor }}
  }{% unless forloop.last %},{% endunless %}{% endfor %}
];

/* Shared helpers used by the homepage and Research page. */
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
