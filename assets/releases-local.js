// The release being prepared right now — shown on the Releases page before the
// GitHub release exists (it is created when the version tag is pushed). An entry
// whose tag already exists on GitHub is ignored, so this never duplicates or
// overrides a published release. Updated each release round with RELEASE_NOTES.md.
window.LOCAL_RELEASES = [{
  tag_name: 'v12.1.6',
  name: 'AvaDevTools 12.1.6',
  published_at: '2026-08-18T00:00:00Z',
  html_url: 'https://github.com/pavel-zheltiakov/AvaDevTools/releases',
  body: "An agent could read the application, not touch it. This release adds input over MCP.\n\n## New Features\n\n- **Eight new tools, twenty-five in all** \u2014 click, hover, drag, scroll, keys, text, focus, wait.\n- **Real input, not simulated** \u2014 your handlers run as for a person.\n- **An input lane on the Timeline** \u2014 every action, above what it caused.\n- **A marker over the application** \u2014 a pill naming what is happening.\n\n## Changes\n\n- **No pretend success** \u2014 an impossible action is refused, with the reason.\n- **The acting tools are marked** \u2014 the tool list says which ones can act.\n- **The handshake says what is allowed** \u2014 before the agent's first call.\n\nDocs: https://pavel-zheltiakov.github.io/AvaDevTools/docs.html\n",
}];
