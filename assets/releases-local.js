// The release being prepared right now — shown on the Releases page before the
// GitHub release exists (it is created when the version tag is pushed). An entry
// whose tag already exists on GitHub is ignored, so this never duplicates or
// overrides a published release. Updated each release round with RELEASE_NOTES.md.
window.LOCAL_RELEASES = [{
  tag_name: 'v12.1.7',
  name: 'AvaDevTools 12.1.7',
  published_at: '2026-08-19T00:00:00Z',
  html_url: 'https://github.com/pavel-zheltiakov/AvaDevTools/releases',
  body: "Keep the repro: record what you do, play it back later.\n\n## New Features\n\n- **Session tab** \u2014 records your clicks and typing, plays them back. Agents can do the same over MCP.\n- **Checks** \u2014 mark what should be true; the build server replays and fails when it isn't.\n\n## Bug Fixes\n\n- **Fixed the 3D view** \u2014 layers sat in the wrong place, text read mirrored.\n- **Clicks from the tool no longer miss** \u2014 they landed on nothing right after the screen changed.\n- **Dragging starts where you pressed** \u2014 sliders ended up at the wrong value.\n- **Search no longer finds our own marker** \u2014 the label the tool draws over your app.\n\nDocs: https://pavel-zheltiakov.github.io/AvaDevTools/docs.html\n",
}];
