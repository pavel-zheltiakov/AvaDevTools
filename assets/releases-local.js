// The release being prepared right now — shown on the Releases page before the
// GitHub release exists (it is created when the version tag is pushed). An entry
// whose tag already exists on GitHub is ignored, so this never duplicates or
// overrides a published release. Updated each release round with RELEASE_NOTES.md.
window.LOCAL_RELEASES = [{
  tag_name: 'v12.1.10',
  name: 'AvaDevTools 12.1.10',
  published_at: '2026-09-25T00:00:00Z',
  html_url: 'https://github.com/pavel-zheltiakov/AvaDevTools/releases',
  body: "Your agent could see the phone app \u2014 now you can too.\n\n## New Features\n\n- **DevTools for your phone app** \u2014 the full DevTools window, connected to an app on a phone.\n  - **Connect** \u2014 finds apps on the simulator, a USB iPhone or Android, no port forwarding.\n  - **Every tab** \u2014 tree, properties, styles, layout, 3D, timeline, problems, logs, session and variants.\n  - **Edit and hold** \u2014 change values and freeze states on the phone from your desktop.\n  - **Display preview** \u2014 the phone's screen beside the tree; click it to select.\n  - **Pick by tap** \u2014 tap the phone to select, and the highlight draws on the phone.\n  - **Several apps at once** \u2014 one window per connected app, side by side.\n\nDocs: https://pavel-zheltiakov.github.io/AvaDevTools/docs.html\n"
}];
