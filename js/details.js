/* ==========================================================================
   DETAILS.JS — populates the reusable case-study template from
   window.PORTFOLIO_PROJECTS using the ?id= query parameter.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.getElementById("project-root");
  var projects = window.PORTFOLIO_PROJECTS || [];
  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");
  var project = projects.find(function (p) { return p.id === id; });

  if (!project) {
    root.innerHTML =
      '<section class="section-pad"><div class="container">' +
      '<div class="empty-state">' +
      '<span class="moon-mark" aria-hidden="true"></span>' +
      "<h3>Project not found</h3>" +
      "<p>This case study doesn&rsquo;t exist yet, or the link may be out of date.</p>" +
      '<a class="btn btn-secondary" style="margin-top:1.5rem;display:inline-flex;" href="projects.html">Back to Projects</a>' +
      "</div></div></section>";
    document.title = "Project Not Found — Jannatun Ferdous";
    return;
  }

  document.title = project.name + " — Case Study — Jannatun Ferdous";

  var index = projects.indexOf(project);
  var prev = projects[(index - 1 + projects.length) % projects.length];
  var next = projects[(index + 1) % projects.length];

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  var metaBits = [project.role];
  if (project.focus && project.focus.length) metaBits.push(project.focus.join(" · "));
  if (project.event) metaBits.push(project.event);

  var heroImg = project.gallery[0];

  var galleryHtml = "";
  if (project.gallery.length) {
    galleryHtml =
      '<section class="section-pad details-gallery"><div class="container">' +
      '<div class="section-head"><p class="eyebrow">Gallery</p><h2>Project visuals</h2></div>' +
      '<div class="gallery-grid">' +
      project.gallery
        .map(function (g) {
          return (
            '<figure class="gallery-item"><img src="' +
            g.src +
            '" alt="' +
            escapeHtml(g.alt) +
            '" loading="lazy"></figure>'
          );
        })
        .join("") +
      "</div></div></section>";
  }

  var linksHtml = "";
  if (project.links && (project.links.github || project.links.demo)) {
    linksHtml =
      '<div class="details-links">' +
      (project.links.github
        ? '<a class="btn btn-secondary" href="' + project.links.github + '" target="_blank" rel="noopener">View on GitHub</a>'
        : "") +
      (project.links.demo
        ? '<a class="btn btn-primary" href="' + project.links.demo + '" target="_blank" rel="noopener">Live Demo</a>'
        : "") +
      "</div>";
  }

  var heroVisualHtml = heroImg
    ? '<div class="details-hero-visual"><img src="' + heroImg.src + '" alt="' + escapeHtml(heroImg.alt) + '"></div>'
    : '<div class="details-hero-visual details-hero-visual--placeholder"><span class="moon-mark" aria-hidden="true"></span><p>' +
      project.technologies.join(" · ") +
      "</p></div>";

  root.innerHTML =
    '<section class="page-header details-header">' +
    '<div class="container">' +
    '<p class="breadcrumb"><a href="../index.html">Home</a> / <a href="projects.html">Projects</a> / ' +
    escapeHtml(project.name) +
    "</p>" +
    '<span class="tag">' + escapeHtml(project.category) + "</span>" +
    "<h1>" + escapeHtml(project.name) + "</h1>" +
    '<p class="details-meta">' + escapeHtml(metaBits.join(" · ")) + "</p>" +
    heroVisualHtml +
    "</div>" +
    "</section>" +

    '<section class="section-pad details-body"><div class="container details-body-grid">' +
    '<div class="details-main">' +
    "<h2>Overview</h2><p>" + escapeHtml(project.overview) + "</p>" +
    (project.process ? "<h2>Process</h2><p>" + escapeHtml(project.process) + "</p>" : "") +
    linksHtml +
    "</div>" +
    '<aside class="details-side">' +
    '<div class="side-card">' +
    "<h3>Role</h3><p>" + escapeHtml(project.role) + "</p>" +
    (project.event ? "<h3>Context</h3><p>" + escapeHtml(project.event) + "</p>" : "") +
    "<h3>Focus</h3><ul class='side-tags'>" +
    project.focus.map(function (f) { return "<li>" + escapeHtml(f) + "</li>"; }).join("") +
    "</ul>" +
    "<h3>Technologies</h3><ul class='side-tags'>" +
    project.technologies.map(function (t) { return "<li>" + escapeHtml(t) + "</li>"; }).join("") +
    "</ul>" +
    "</div>" +
    "</aside>" +
    "</div></section>" +

    galleryHtml +

    '<section class="section-pad details-nav"><div class="container details-nav-grid">' +
    '<a class="details-nav-link" href="project-details.html?id=' + prev.id + '">' +
    '<span class="details-nav-label">← Previous</span><span class="details-nav-name">' + escapeHtml(prev.name) + "</span>" +
    "</a>" +
    '<a class="details-nav-link details-nav-link--next" href="project-details.html?id=' + next.id + '">' +
    '<span class="details-nav-label">Next →</span><span class="details-nav-name">' + escapeHtml(next.name) + "</span>" +
    "</a>" +
    "</div></section>";
})();
