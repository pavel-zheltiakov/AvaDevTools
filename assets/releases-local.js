// The release being prepared right now — shown on the Releases page before the
// GitHub release exists (it is created when the version tag is pushed). An entry
// whose tag already exists on GitHub is ignored, so this never duplicates or
// overrides a published release. Updated each release round with RELEASE_NOTES.md.
window.LOCAL_RELEASES = [{
  tag_name: 'v12.1.9',
  name: 'AvaDevTools 12.1.9',
  published_at: '2026-09-15T00:00:00Z',
  html_url: 'https://github.com/pavel-zheltiakov/AvaDevTools/releases',
  body: "It only works on your desktop \u2014 so take it to the phone.\n\n## New Features\n\n- **MCP on iOS and Android** \u2014 an agent inspects your phone app with every tool.\n  - **Simulator or device** \u2014 a USB iPhone or an Android phone is one port forward away.\n  - **Touch input** \u2014 click taps, drag and scroll move a finger.\n  - **Honest refusals** \u2014 no hover on a touch screen, no window size on a phone.\n\n## Bug Fixes\n\n- A click on an element its scroller clips away is now refused, not reported as delivered.\n- Scrolling sideways over MCP now goes right as documented, not left.\n\nDocs: https://pavel-zheltiakov.github.io/AvaDevTools/docs.html\n"
}];
