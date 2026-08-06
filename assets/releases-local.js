// The release being prepared right now — shown on the Releases page before the
// GitHub release exists (it is created when the version tag is pushed). An entry
// whose tag already exists on GitHub is ignored, so this never duplicates or
// overrides a published release. Updated each release round with RELEASE_NOTES.md.
window.LOCAL_RELEASES = [{
  tag_name: 'v12.1.3',
  name: 'AvaDevTools 12.1.3',
  published_at: '2026-08-06T00:00:00Z',
  html_url: 'https://github.com/pavel-zheltiakov/AvaDevTools/releases',
  body: "The tree shows now: live, across every window, in any theme.\n\n## New Features\n\n- **Live tree** \u2014 shows new and removed elements in the tree without a refresh.\n- **Hidden changes** \u2014 flash the nearest visible line when the change is under a fold.\n- **Pause** \u2014 queues updates while you read, then applies them at once.\n- **All windows, one DevTools** \u2014 every window is a node of one tree; F12 works anywhere.\n- **Its own theme** \u2014 DevTools looks the same under Fluent, Simple, any theme or none.\n- **Settings card** \u2014 remaps the gestures and toggles stay-on-top, live tree and update checks.\n- **Version on the toolbar** \u2014 turns blue with an \u2191 when a newer version is out.\n\nDocs: https://pavel-zheltiakov.github.io/AvaDevTools/docs.html",
}];
