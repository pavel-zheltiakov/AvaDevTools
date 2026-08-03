// The release being prepared right now — shown on the Releases page before the
// GitHub release exists (it is created when the version tag is pushed). An entry
// whose tag already exists on GitHub is ignored, so this never duplicates or
// overrides a published release. Updated each release round with RELEASE_NOTES.md.
window.LOCAL_RELEASES = [{
  tag_name: 'v12.1.1',
  name: 'AvaDevTools 12.1.1',
  published_at: '2026-08-03T00:00:00Z',
  html_url: 'https://github.com/pavel-zheltiakov/AvaDevTools/releases',
  body: "See why an element got its size, drill into any value, follow focus, and edit gradients \u2014 DevTools now explains what you see.\n\n## New features\n\n### Why this size?\n\nThe Layout tab explains how the selected element got its size: what the parent offered, what the element asked for, which constraint decided, and what alignment did with the remainder. The deciding property links straight to where its value is set. A new alignment pad edits horizontal and vertical alignment with one click.\n\n### Inspect any value\n\nAny object value in the Properties panel opens in the inspector: view its properties and fields, drill deeper into nested values, watch it on the Timeline, or jump to its C# source. Big objects stay manageable \u2014 search members by name or value, expand long lists on demand, and pin the members you care about: a type with pins opens showing just those.\n\n### Focus story\n\nFocus changes are recorded on the Timeline next to the events around them, so you can see what moved focus and why. The status bar always names the focused element; a follow switch selects it in the tree and marks it in the app.\n\n### Gradient editor\n\nGradient brushes get a visual editor: color stops, angle and center controls, spread mode, and a live preview. Image and visual brushes now describe themselves readably instead of showing a type name.\n\n## Fixes\n\n### Layout tab scrolling\n\nThe Layout tab now scrolls when its content is taller than the window.\n\nDocs: https://pavel-zheltiakov.github.io/AvaDevTools/docs.html"
}];
