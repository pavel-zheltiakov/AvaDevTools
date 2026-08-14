// The release being prepared right now — shown on the Releases page before the
// GitHub release exists (it is created when the version tag is pushed). An entry
// whose tag already exists on GitHub is ignored, so this never duplicates or
// overrides a published release. Updated each release round with RELEASE_NOTES.md.
window.LOCAL_RELEASES = [{
  tag_name: 'v12.1.5',
  name: 'AvaDevTools 12.1.5',
  published_at: '2026-08-14T00:00:00Z',
  html_url: 'https://github.com/pavel-zheltiakov/AvaDevTools/releases',
  body: "Your application has two trees. This release shows you the other one.\n\n## New Features\n\n- **Accessibility** \u2014 a third tree mode with the announced name and role, tab-order overlay, WCAG contrast, findings in Problems.\n- **Accessibility over MCP** \u2014 get_tab_order, plus the new mode in get_tree and the new category in get_problems.\n- **Call counts per MCP tool** \u2014 in the MCP Server tab.\n\n## Changes\n\n- **MCP settings in one place** \u2014 the \u2699 card. The tab is there while the endpoint listens.\n- **UI improvements** \u2014 draggable tree columns, drawn column edges, ellipsized Problems rows.\n\n## Bug Fixes\n\n- **Element screenshots** \u2014 no longer twice-scaled on a scaled display.\n\nDocs: https://pavel-zheltiakov.github.io/AvaDevTools/docs.html\n",
}];
