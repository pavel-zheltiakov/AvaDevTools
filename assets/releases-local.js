// The release being prepared right now — shown on the Releases page before the
// GitHub release exists (it is created when the version tag is pushed). An entry
// whose tag already exists on GitHub is ignored, so this never duplicates or
// overrides a published release. Updated each release round with RELEASE_NOTES.md.
window.LOCAL_RELEASES = [{
  tag_name: 'v12.1.4',
  name: 'AvaDevTools 12.1.4',
  published_at: '2026-08-11T00:00:00Z',
  html_url: 'https://github.com/pavel-zheltiakov/AvaDevTools/releases',
  body: "The app answers for itself now — to you, and to an agent.\n\n## New Features\n\n- **MCP server** — a read-only endpoint on loopback; sixteen tools hand a coding agent the tree, properties, styles, layout, resources, problems, timeline, logs and screenshots.\n- **MCP Server tab** — what is listening, on which port, what an agent has asked for, and every tool it can reach.\n- **MCP in the settings card** — turn the endpoint on or off and set its port from the ⚙ card, saved per machine.\n- **One line to register it** — the card hands you the `claude mcp add` or `codex mcp add` command, already carrying this application's name and port.\n- **Named per application** — each app serves as `<assembly>-avadevtools`, so two open at once stay apart in the agent's list.\n- **Cause capture** — the call stack behind every recorded change, so one reproduction answers \"who changed this\" for every hit at once.\n- **Break next** — arms the debugger for exactly one change, for when a live stack with locals is what you need.\n- **Perf lane** — slow frames and layout passes filed into the timeline beside what the app was doing.\n- **Walk the view model** — `inspect_object` follows the data context into its collections and the objects inside them.\n- **Reach the transient UI** — an agent can list open popups, freeze them, and force `:pointerover` on something that has no pointer.\n\nDocs: https://pavel-zheltiakov.github.io/AvaDevTools/docs.html",
}];
