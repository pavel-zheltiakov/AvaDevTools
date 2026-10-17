// The release being prepared right now — shown on the Releases page before the
// GitHub release exists (it is created when the version tag is pushed). An entry
// whose tag already exists on GitHub is ignored, so this never duplicates or
// overrides a published release. Updated each release round with RELEASE_NOTES.md.
window.LOCAL_RELEASES = [{
  tag_name: 'v12.1.11',
  name: 'AvaDevTools 12.1.11',
  published_at: '2026-10-17T00:00:00Z',
  html_url: 'https://github.com/pavel-zheltiakov/AvaDevTools/releases',
  body: "See the value, shape the gradient, and follow the binding.\n\n## New Features\n\n- **Color previews** — view solid colors and gradients over a transparency checkerboard, with contrasting hex labels for solid colors.\n- **Gradient editor** — drag linear-gradient endpoints and stops, rotate the direction, edit brush geometry, and copy the current brush as XAML.\n- **Binding editor** — follow live values through a flow diagram with property completion, converter stages, errors, and return-flow testing.\n- **MultiBinding** — group inputs by source instance and open each child’s own flow diagram with independent converter, format, null and fallback settings.\n- **Converter picker** — select application, resource and standard Avalonia converters using the binding’s single-value or multi-value interface.\n- **Thickness editor** — edit four sides around a content rectangle, with Enter advancing to the next input.\n\n## Changes\n\n- **Source links** — open property attributes, property-element bindings and identifiable code assignments with the shared blue editor button.\n- **Desktop display preview** — starts hidden until selected; phone previews remain visible by default.\n\n## Bug Fixes\n\n- **Binding indicators** — direct XAML values no longer appear as bindings, and temporary binding edits no longer appear as animations.\n- **Binding experiments** — protect the original binding’s source from experiment values and restore reverse updates on reset.\n- **Popup discovery** — recover already-open popups on Avalonia versions that expose the open-popup lists.\n\nDocs: https://pavel-zheltiakov.github.io/AvaDevTools/docs.html\n"
}];
