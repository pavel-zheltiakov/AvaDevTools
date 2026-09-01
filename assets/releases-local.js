// The release being prepared right now — shown on the Releases page before the
// GitHub release exists (it is created when the version tag is pushed). An entry
// whose tag already exists on GitHub is ignored, so this never duplicates or
// overrides a published release. Updated each release round with RELEASE_NOTES.md.
window.LOCAL_RELEASES = [{
  tag_name: 'v12.1.8',
  name: 'AvaDevTools 12.1.8',
  published_at: '2026-09-01T00:00:00Z',
  html_url: 'https://github.com/pavel-zheltiakov/AvaDevTools/releases',
  body: "It only looks right in your conditions \u2014 so check it in the others.\n\n## New Features\n\n- **Variants tab** \u2014 read your app under another theme, size, direction or language.\n  - **Only what got worse** \u2014 a choice you made is never reported back at you.\n  - **Findings you can act on** \u2014 cut off, pushed off screen, contrast lost, text that stayed small.\n  - **Three ways to read it** \u2014 by variant, as a table, or one at a time.\n  - **Save as PDF** \u2014 the whole run as a document, pictures and all.\n  - **Every axis explains itself** \u2014 what it varies, and three of its values.\n  - **Your list, per project** \u2014 remembered against that application, not the next one.\n  - **Axes of your own** \u2014 your tenant's colours, your density, your hardware profile.\n  - **A Language axis** \u2014 declare your cultures; right-to-left comes with them.\n  - **Nothing left behind** \u2014 every change put back, even when a check throws.\n  - **run_variants over MCP** \u2014 an agent names an axis and its values.\n\n## Changes\n\n- An agent's findings now reach your open Problems tab, not a list only it could see.\n- The MCP tool list marks every tool that can change your app, not just the input ones.\n\n## Bug Fixes\n\n- The highlight's size chip was drawn off the top edge on a scaled canvas.\n\nDocs: https://pavel-zheltiakov.github.io/AvaDevTools/docs.html\n"
}];
