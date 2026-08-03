// AvaDevTools site string resources. One object per language; site.js applies them.
window.I18N = {

en: {
  title: 'AvaDevTools — free DevTools for Avalonia 12',
  descr: 'Free in-process developer tools for Avalonia 12: tree inspector, live property editing, styles, 3D view, event timeline, logs and go-to-source. Press F12.',
  nav: { docs: 'Documentation', releases: 'Releases', feedback: 'Feedback' },
  fb: { issues: 'Report a bug or request a feature', tg: 'News, questions, quick help' },
  hero: {
    title: 'DevTools for <em>Avalonia 12</em>.<br>Free. In-process. One key away.',
    tag: 'The built-in F12 tools are gone in Avalonia 12. AvaDevTools brings them back — inspector, live editors, styles, 3D view, event timeline and logs — as a single free NuGet package.',
    get: 'Get started', stories: 'See it in action', copy: 'copy',
  },
  video: { h: 'See it in action', sub: 'A real workflow: pick, edit, trace, watch events fire — fifty seconds from F12 to fixed.' },
  wn: { h: "What's New in 12.1.1", docs: 'Documentation →', notes: 'Version history →' },
  video2: { h: 'The smart tree, in 40 seconds', sub: 'Pick, peel hidden levels, open folds precisely, hide noise, scope and search — one continuous workflow.' },
  video3: { h: 'Value tracking, in 45 seconds', sub: 'Track one property across the whole tree: colors by value, a live legend, fold-to-changes and pinned rows — one continuous workflow.' },
  stories: {
    h: 'Stories', wn: 'explain',
    lead: 'Every major feature as a step-by-step story: scroll, and each action unfolds exactly the way it happens on screen — at your pace, nothing to scrub or rewind.',
    list: [
      { key: 'explain', h: '🔍 Explain everything', sub: 'Why this size, what lives inside this value, who moved focus, how this gradient looks — answered in place.',
        steps: [
          { t: '🔍 Explain everything',
            d: 'DevTools show you every value. Why the value is what it is — a width, a focus jump, the inside of a DataContext — stayed your job to reconstruct.',
            d2: 'Explain everything: the Layout tab explains how an element got its size, any value opens in the inspector, focus changes land on the Timeline, and gradient brushes get a visual editor.',
            painsTitle: 'Before 12.1.1',
            pains: [
              { k: 'A width of 349', d: 'appears — and nothing says who decided it' },
              { k: 'A view model', d: 'is a type name with no way to look inside' },
              { k: 'Focus', d: 'jumps somewhere and nothing records why' },
              { k: 'A gradient', d: 'reads LinearGradientBrush and edits blind' },
            ],
            hook: 'One release explains all of it — sizes, values, focus, gradients.',
            hookIco: '🔍' },
          { img: 'story/e02.png', t: 'Why this size?', d: 'The Layout tab reconstructs the decision: what the parent offered, what the element asked for, which constraint decided, and what alignment did with the remainder. The deciding property links straight to where it is set — and a 3×3 pad edits alignment in one click.' },
          { img: 'story/e03.png', t: 'Inspect any value', d: 'Every reference value in the Properties panel gets a 🔍 — the DataContext opens as a live card: properties and fields, nested objects that drill deeper, 👁 observe on the Timeline, a jump to the C# source.' },
          { img: 'story/e04.png', t: 'Search and pin what matters', d: 'Big objects stay manageable: search members by name or value, pin the ones you care about — the type reopens showing just those, the rest behind "show all".' },
          { img: 'story/e05.png', t: 'The focus story', d: 'Focus changes land on the Timeline next to the events that caused them, and the status bar always names the focused element — turn on follow and the tree tracks it live.' },
          { img: 'story/e06.png', t: 'Edit gradients visually', d: 'Gradient brushes open a real editor: color stops with a picker, offsets, geometry, spread mode — with a live preview that applies as you change it.' },
        ] },
      { key: 'hold', h: '❄ Hold the moment', sub: 'Popups, flyouts, tooltips and hover styling — frozen mid-flight with one gesture, then inspected like ordinary UI.',
        steps: [
          { t: '❄ Hold the moment',
            d: 'Tooltips, flyouts and hover styling live only while the pointer keeps them alive — the moment you reach for an inspector, the thing you were chasing dismisses itself.',
            d2: 'Freeze popups, flyouts, tooltips and hover styling with one gesture — press Shift+F12 while your app shows the moment — then walk into the frozen scene and inspect it like anything else. Plus a pin-states panel, copy-as-bug-report and Office-style menus.',
            painsTitle: 'Without Hold',
            pains: [
              { k: 'A flyout', d: 'closes on the first click outside it' },
              { k: 'A tooltip', d: 'vanishes as soon as the pointer leaves' },
              { k: ':pointerover styling', d: 'is gone before any inspector opens' },
              { k: 'A drag-over highlight', d: 'lives only while the button is held' },
            ],
            hook: 'Hold freezes all of it — one gesture, mid-flight.' },
          { img: 'story/h02.png', t: 'Freeze it mid-flight', d: 'Arm the countdown from the ❄ button — or press Shift+F12 right in the app — and stage the moment while the pill floats above. At zero the open flyout stops obeying focus: it stays exactly as it was, and everything the hold keeps alive wears a ❄ badge in the tree.' },
          { img: 'story/h03.png', t: 'Walk into the frozen scene', d: 'The popup is ordinary UI now: select a menu item, read its properties, bounds and styles — nothing dismisses while the hold is on.' },
          { img: 'story/h04.png', t: 'Pin the states you need', d: 'The Styles tab grows a pin-states panel: force :pointerover, :pressed, :focus or any custom pseudo-class — the app renders it as if the mouse were still there.' },
          { img: 'story/h05.png', t: 'Copy as bug report', d: '📷 puts a DPI-correct screenshot on the clipboard — or a full report: pseudo-XAML path, bounds and every non-default property, ready to paste into an issue.' },
          { img: 'story/h06.png', t: 'Release when done', d: 'Esc in the app — or Unfreeze in the ❄ chooser — restores everything exactly as it was. Custom countdowns are remembered for next time.' },
        ] },
      { key: 'tree', h: 'The smart tree', sub: 'Pick, peel hidden levels, open folds precisely, hide noise, scope and search — one continuous workflow.',
        steps: [
          { img: 'story/s01.png', t: 'Pick — the tree compacts', d: 'Click ⌖ Pick element, then click anything in the running app. The tree collapses to your window, your views and the target — every wrapper run folds into a "⋯ N levels" chip.' },
          { img: 'story/s02.png', t: 'Step through hidden levels', d: 'Press Alt+↑ — exactly one hidden level opens per step. No tree explosions.' },
          { img: 'story/s03.png', t: 'Click a fold…', d: 'A picker lists the hidden elements, rendered like the tree itself.' },
          { img: 'story/s04.png', t: '…and only that element appears', d: 'The chip splits around your choice: "⋯ N levels" + element + "⋯ M levels".' },
          { img: 'story/s05.png', t: 'Hide the noise', d: 'Press Delete — the element folds back into the chip it came from.' },
          { img: 'story/s06.png', t: 'An Office-style menu', d: 'Ancestors, Descendants, Element and Copy submenus — an icon and a shortcut for every action, ancestors first, matching the tree’s up-then-down reading order.' },
          { img: 'story/s07.png', t: 'Collapse ancestors', d: 'Shift+↑ keeps your views visible and folds the wrappers away.' },
          { img: 'story/s08.png', t: 'Scope', d: 'Any element becomes the root, with clickable breadcrumbs. Esc leads back.' },
          { img: 'story/s09.png', t: 'Search', d: 'Find by type, name or style class — F3 cycles through the matches.' },
          { img: 'story/s10.png', t: 'Live sizes', d: 'The size column flashes as the app changes — resize and watch.' },
        ] },
      { key: 'track', h: 'Value tracking', sub: 'Track one property across the whole tree: colors by value, a live legend, fold-to-changes and pinned rows — one continuous workflow.',
        steps: [
          { img: 'story/t01.png', t: 'Two hidden buttons on every row', d: 'Hover any Properties row: ⊙ track follows the value across the tree, 📌 pin keeps the row on top.' },
          { img: 'story/t02.png', t: 'One click — the tree, colored by value', d: 'Track DataContext: the MainViewModel everywhere it inherits, an OrbitViewModel island, null in its own bucket.' },
          { img: 'story/t03.png', t: 'A legend that counts everything', d: 'Every value in the tree with a live count — and instances get ordinals: "OrbitViewModel #1".' },
          { img: 'story/t04.png', t: 'Values change — colors follow', d: 'A second OrbitViewModel assigned in the running app: same type, its own color — #2. Re-classified within 250 ms, even inside folded chips.' },
          { img: 'story/t05.png', t: 'Fold to changes', d: 'One click keeps only the elements where the value differs from its parent — every DataContext boundary on one screen.' },
          { img: 'story/t06.png', t: 'Pin what you watch', d: '📌 floats your properties to the top of the list; the rest waits behind "Show more".' },
        ] },
      { key: 'timeline', h: 'One timeline: events, properties, view models', sub: 'Mark what you care about — everything it does lands in one chronological feed, cause and effect side by side.',
        steps: [
          { img: 'story/u01.png', t: 'Nothing is recorded until you say so', d: 'Mark a slider, a button and a view model — the watchlist chips show exactly what the timeline is allowed to see.' },
          { img: 'story/u02.png', t: 'Four lanes, one chronological feed', d: '⚡ routed events, ◆ property changes, ↻ view-model notifies and ⚠ binding errors interleave — quiet stretches become "⋯ +1.2 s" markers.' },
          { img: 'story/u03.png', t: 'A bound change opens its whole binding', d: 'Old → new, priority, the metadata default — and the expression walk: every path step with its live source and value. The ↞ cause link names the notify that produced it.' },
          { img: 'story/u04.png', t: 'Any instance, inspected', d: '🔍 opens a reflection card — properties and fields read live. 👁 adds a view model to the watchlist from anywhere.' },
          { img: 'story/u05.png', t: 'Events carry their route', d: 'Direction, source, args — and the visual chain the event bubbled through, every element clickable.' },
          { img: 'story/u06.png', t: 'You choose the events', d: 'The full routed-event registry with a filter and a Common preset — captured only inside observed subtrees.' },
        ] },
    ],
  },
  tour: [
    { img: 'tab-properties.png', t: 'Inspect and edit everything — live',
      lead: 'Every property of the selected element with typed editors and full provenance.',
      pts: ['Grouped attached properties, resizable columns, instant filter',
            'Color swatches with a live picker, segmented enum switches, checkboxes',
            'Source badges: ✏️ set by hand · 🎨 style · ⇡ inherited — click to see where and how',
            'Locally-set values highlighted so overrides stand out'] },
    { img: 'tab-styles.png', t: 'Styles with go-to-source',
      lead: 'The full cascade for the element: theme, styles with selectors, template and local values.',
      pts: ['Edit setter values as live local overrides, browser-devtools style',
            'file:line links with syntax-highlighted XAML previews',
            'Bindings traced to the view-model member — one click to your editor'] },
    { img: 'tab-3d.png', t: 'Your UI in 3D',
      lead: 'The window exploded into textured layers from a live snapshot.',
      pts: ['Drag to orbit, wheel to zoom, click a layer to select it in the tree',
            'Visual · merged, Visual · all or Logical granularity',
            'Spot stray overlays and z-order surprises instantly'] },
    { img: 'tab-layout.png', t: 'Box model like the browser',
      lead: 'Margin, border and padding as interactive bands — edit any side in place.',
      pts: ['Size, min/max, desired, bounds and alignment at a glance',
            'Changes apply to the running app immediately'] },
  ],
  feat: {
    h: 'Everything you expect from DevTools', sub: 'Attach once, press F12 in any window.',
    cards: [
      { i: '🌳', t: 'Smart tree inspector', d: 'A tree that reads like XAML: syntax colors, code-style folding, a compact pick view, one-level stepping, hide, focus, scope and search — with live sizes.' },
      { i: '🎯', t: 'Value tracking', d: 'Track any property across the whole tree: same value = same color, null in its own bucket, a live legend with counts — and "Fold to changes" shows every boundary at once.' },
      { i: '❄', t: 'Hold the moment', d: 'Shift+F12 freezes what your app shows right now — open popups, flyouts, tooltips, hover styling. Inspect the frozen scene like ordinary UI; Esc restores everything exactly as it was. A pin-states panel forces :focus, :disabled or any custom pseudo-class on demand.' },
      { i: '📷', t: 'Copy as bug report', d: 'One click puts a DPI-correct screenshot plus a readable report — pseudo-XAML path, bounds, non-default properties — on the clipboard. Rich targets paste both, image targets the PNG, text targets the markdown.' },
      { i: '🔍', t: 'Inspect any value', d: 'Any object in the Properties panel opens in a live inspector card: drill into nested values, search members by name or value, pin members per type, 👁 observe on the Timeline, jump to the C# source.' },
      { i: '📏', t: 'Why this size?', d: 'The Layout tab reconstructs how the element got its size — what the parent offered, what it asked for, which constraint decided, what alignment did — and links to where the deciding value is set.' },
      { i: '✏️', t: 'Live property editing', d: 'Typed editors — checkboxes, enum dropdowns, flat segmented switches — grouped attached properties, and instant visual feedback without rebuilds.' },
      { i: '📌', t: 'Pinned properties', d: 'Pin the properties you actually watch — they float to a group at the top of the list; everything else waits behind "Show more". Persisted per user.' },
      { i: '🎨', t: 'Color picker', d: 'Every Color and brush gets a swatch with a full color picker flyout. Gradient brushes get a visual gradient editor — stops, geometry, spread, live preview. Changes apply live as you drag.' },
      { i: '📐', t: 'Layout box model', d: 'Interactive margin / border / padding bands with per-side editing, plus size, constraints and alignment at a glance.' },
      { i: '🧩', t: 'Styles & value frames', d: 'Every applied style, theme and local value with its setters, priority and active state. Edit setter values as live local overrides.' },
      { i: '🧊', t: '3D exploded view', d: 'Your window as textured layers in 3D — orbit, zoom, click to select. Visual, merged or logical tree granularity.' },
      { i: '🔗', t: 'Go to source', d: 'file:line for elements, styles, bindings and view models. Syntax-highlighted XAML/C# previews and one-click jump to your editor.' },
      { i: '⏱', t: 'Timeline', d: 'Routed events, property changes, VM notifies and focus changes in one chronological feed, scoped to a watchlist you control. Cause links connect a notify to the bound update it produced; every entry opens full details.' },
      { i: '📜', t: 'Log viewer', d: 'Binding errors, layout and property-system messages — even without LogToTrace(). Filtered, batched and feedback-loop safe.' },
      { i: '📊', t: 'Renderer overlays', d: 'FPS meter, layout/render time graphs and dirty-rect flashing on the inspected window, one toggle away.' },
      { i: '🕵️', t: 'Source of every value', d: 'See whether a value is default, set by hand, styled, templated or inherited — and jump to the ancestor or the exact XAML that set it.' },
      { i: '🌒', t: 'IDE-style dark UI', d: 'Compact Rider/Unity-like controls, scoped strictly to the tool window. Your application’s theme is never touched.' },
    ],
  },
  quick: { h: 'Quick start', sub: 'Two lines in your App.axaml.cs — Debug builds only, nothing ships in Release.' },
  footer: { home: 'Home', docs: 'Docs' },
  docs: {
    title: 'Documentation — AvaDevTools', h: 'Documentation',
    lead: 'Free in-process DevTools for Avalonia 12 — a free analog of the classic F12 tools.',
    contents: 'Contents',
    groups: [
      { t: 'Getting started', ids: ['install', 'quickstart'] },
      { t: 'Features', ids: ['hold', 'tree', 'tracking', 'layout', 'inspector', 'timeline', 'tabs', 'capture', 'source'] },
      { t: 'Reference', ids: ['options', 'env', 'limits'] },
    ],
    sections: [
      { id: 'install', t: 'Installation', html: `<pre><code>dotnet add package AvaDevTools</code></pre>
<p>The package targets <code>net8.0</code> and works with Avalonia <strong>12.x</strong>. Reference it Debug-only if you prefer:</p>
<pre><code>&lt;PackageReference Include=<span class="s">"AvaDevTools"</span> Condition=<span class="s">"'$(Configuration)' == 'Debug'"</span> /&gt;</code></pre>` },
      { id: 'quickstart', t: 'Quick start', html: `<pre><code><span class="k">using</span> AvaDevTools;

<span class="k">public override void</span> Initialize()
{
    AvaloniaXamlLoader.Load(<span class="k">this</span>);
<span class="c">#if DEBUG</span>
    <span class="k">this</span>.AttachAvaDevTools();          <span class="c">// all windows, F12 opens the tools</span>
<span class="c">#endif</span>
}</code></pre>
<p>Or attach to a single window: <code>myWindow.AttachAvaDevTools()</code>. Press <span class="kbd">F12</span> in the app window to open DevTools for it. The DevTools window stays on top by default (📌 toggle in the toolbar).</p>
<p>Hold <span class="kbd">Ctrl</span>+<span class="kbd">Shift</span> over the running app to inspect the element under the pointer — exactly like the classic DevTools.</p>
<p>Press <span class="kbd">Shift</span>+<span class="kbd">F12</span> while the app shows a transient state — an open flyout, a tooltip, hover styling — to freeze it and inspect at leisure: see <a href="#hold">❄ Hold the moment</a>.</p>` },
      { id: 'hold', t: '❄ Hold the moment', html: `<p>Transient UI is the hardest thing to inspect: a flyout closes the instant DevTools takes focus, hover styling vanishes when the pointer leaves. <b>Hold the moment</b> freezes all of it, so you can explore an open menu or a hover state as calmly as any other UI.</p>
<h3>Step 1. Freeze the moment</h3>
<ol class="steps"><li>Put your app in the state you care about — open the menu, hover the control, let the tooltip show.</li>
<li>Press <span class="kbd">Shift</span>+<span class="kbd">F12</span> <em>in the app</em>.</li>
<li>A banner confirms the hold. DevTools opens for you if it wasn't open yet.</li></ol>
<div class="shot"><img src="assets/img/docs/hold-held.png" alt="The app with the ❄ Moment held banner and a menu frozen open"><span class="cap">The menu stays open while you work in DevTools — the banner reminds you a hold is active.</span></div>
<p>Behind the scenes, light dismiss is suppressed on every open popup — if app logic closes one anyway, the hold re-opens it — and the pseudo-classes of the chain under the pointer (<code>:pointerover</code>, <code>:pressed</code>, <code>:focus</code>, …) are re-asserted if the framework clears them.</p>
<h3>Step 2. Inspect the frozen scene</h3>
<p>The tree folds to the held scene: popup hosts, tooltip hosts and their owners, each marked with an icy ❄ badge and a dotted underline. Held popups are ordinary tree content — walk in, pick inside them, highlight and inspect.</p>
<div class="shot"><img src="assets/img/docs/hold-tree.png" alt="The element tree with ❄ badges on the held popup and its host"><span class="cap">The held popup and its host carry ❄ badges — press ↻ and walk in like anywhere else.</span></div>
<p class="tip"><b>Tip.</b> A hover-only hold selects the styled element under the pointer for you and opens the Styles tab on it.</p>
<h3>Step 3. Release</h3>
<p>Everything releases atomically — <span class="kbd">Esc</span> in the app, the ❄ toolbar toggle, or closing DevTools. Every forced value is restored from a ledger; a self-test asserts full restoration.</p>
<h3>Can't reach the gesture? The ❄ button counts down</h3>
<p>Clicking into DevTools already closed your app's popups — so the ❄ toolbar button can't freeze on the spot. Instead it opens a chooser: <b>5 s / 10 s / 30 s / custom</b>.</p>
<div class="shot"><img src="assets/img/docs/hold-chooser.png" alt="The ❄ button chooser with Unfreeze, presets and a custom countdown"><span class="cap">Pick a delay — custom times are remembered as one-click presets.</span></div>
<p>Focus returns to the app and a banner counts down while you set the scene — re-open the menu, hover the control — and the hold engages by itself. The gesture in the app stays the instant path.</p>
<div class="shot"><img src="assets/img/docs/hold-countdown.png" alt="The countdown banner over the live app: Freezing in 2 — set the scene"><span class="cap">"❄ Freezing in 2…" — set the scene; the hold engages when the countdown ends.</span></div>
<h3>Pin states</h3>
<p>The Styles tab's <b>📌 Pin states</b> panel forces pseudo-classes without flipping app logic: it scans the element's applied styles and offers exactly the states they react to — <code>:disabled</code>, <code>:focus</code>, plus whatever custom states the theme defines.</p>
<div class="shot"><img src="assets/img/docs/hold-pinstates.png" alt="The Pin states panel offering :pointerover, :pressed, :focus and other states"><span class="cap">Only the states the element actually reacts to are offered — ● marks the active ones.</span></div>
<p>Pinned elements get a 📌 on their tree line; pins share the ❄ restore ledger, so releasing restores everything.</p>` },
      { id: 'tree', t: 'Smart tree inspector', html: `<p>The tree panel is a read-only, code-editor-style view of your UI: elements render as syntax-colored pseudo-XAML lines (<code>&lt;Button x:Name="Save" Classes="primary"&gt;</code>) with fold chevrons, indent guides and a live <b>Size</b> column that flashes when an element changes. Two modes match Avalonia exactly: <b>Visual tree</b> (<code>GetVisualChildren</code>, default) and <b>Logical tree</b> (<code>GetLogicalChildren</code>).</p>
<h3>Step 1. Pick an element</h3>
<ol class="steps"><li>Click <b>⌖</b> and pick in the app — or just hold <span class="kbd">Ctrl</span>+<span class="kbd">Shift</span> over it.</li>
<li>The tree rebuilds into a compact view: the window, your user controls on the path, the control owning the picked template part, and the element itself.</li></ol>
<div class="shot"><img src="assets/img/docs/tree-compact.png" alt="A compact tree: MainWindow, a ⋯ 9 levels chip, the picked element"><span class="cap">Every run of wrappers folds into a <code>⋯ N levels</code> chip — a deep tree becomes a handful of lines.</span></div>
<h3>Step 2. Unfold exactly what you need</h3>
<p>A single click on a chip opens a picker listing the hidden elements in the same syntax-colored style — choose one and only it is revealed: <code>⋯ 7 levels</code> becomes <code>⋯ N</code> + element + <code>⋯ M</code>. A double click expands the whole chip.</p>
<div class="shot"><img src="assets/img/docs/tree-chip.png" alt="The chip picker listing the hidden wrapper elements"><span class="cap">Click a chip and pick one element from the hidden run — the rest stays folded.</span></div>
<p><b>Alt+↑/↓</b> steps to the visual parent or child, peeling exactly one hidden level (the selected line shows ▲▼ step buttons — an 👁 eye marks steps that reveal something hidden). <b>Delete</b> hides the selected element back into a chip; adjacent chips merge.</p>
<h3>Step 3. Shape the tree from the menu</h3>
<p>The context menu reads like a Word menu: a monochrome icon for every action, labels aligned by the icon gutter, shortcuts in a gesture column, and the bulky groups tucked into <b>Ancestors</b>, <b>Descendants</b>, <b>Element</b> and <b>Copy</b> submenus — ancestors first, matching the tree's up-then-down reading order.</p>
<div class="shot"><img src="assets/img/docs/tree-menu.png" alt="The tree context menu: Ancestors, Descendants, fold, hide, focus, scope and copy actions"><span class="cap">Everything for shaping the tree lives in one menu — show one or all levels, fold into ⋯, fold keeping your views, hide, focus, scope, copy.</span></div>
<h3>Focus &amp; Scope</h3>
<p><b>Focus</b> (F) folds everything off the path to the selected element; Esc restores the previous state. <b>Scope</b> (S) re-roots the tree at any element, with clickable breadcrumbs, a scope-up button and Esc to leave. Picking an element outside the scope leaves it automatically.</p>
<h3>Keyboard</h3>
<table><tr><th>Keys</th><th>Action</th></tr><tr><td><code>↑ ↓</code></td><td>move selection</td></tr><tr><td><code>← →</code></td><td>fold / unfold, go to parent / first child</td></tr><tr><td><code>Space</code></td><td>toggle fold</td></tr><tr><td><code>Enter</code></td><td>expand a chip · open Properties</td></tr><tr><td><code>Alt+↑ / Alt+↓</code></td><td>step to parent / child, revealing one hidden level</td></tr><tr><td><code>Delete</code></td><td>hide the element into a ⋯ chip</td></tr><tr><td><code>Ctrl+↑ / Ctrl+↓</code></td><td>structural parent / child (chooser when several)</td></tr><tr><td><code>Ctrl+← / Ctrl+→</code></td><td>previous / next sibling</td></tr><tr><td><code>Shift+→</code></td><td>show all levels</td></tr><tr><td><code>Shift+←</code></td><td>fold descendants into ⋯</td></tr><tr><td><code>Shift+↓</code></td><td>fold descendants, keep views</td></tr><tr><td><code>Shift+↑</code></td><td>collapse ancestors, keep views</td></tr><tr><td><code>Ctrl+Shift+↑</code></td><td>collapse ancestors — all</td></tr><tr><td><code>Ctrl+Shift+↓</code></td><td>collapse descendants, keep one level</td></tr><tr><td><code>F / S / Esc</code></td><td>focus / scope / exit</td></tr><tr><td><code>Ctrl+F, F3</code></td><td>search, next match</td></tr><tr><td><code>Ctrl+C / Ctrl+Shift+C / Ctrl+E</code></td><td>copy path / copy as XAML / open in editor</td></tr></table>` },
      { id: 'tracking', t: 'Value tracking & pinned properties', html: `<p>"Where did my DataContext break?" is normally an hour of clicking through elements. Value tracking answers it on one screen: color the whole tree by any property's value and see exactly where it changes.</p>
<h3>Step 1. Start tracking</h3>
<p>Hover any row in the Properties tab and two buttons appear: <b>⊙ track</b> and <b>📌 pin</b>. Click <b>⊙</b>.</p>
<div class="shot"><img src="assets/img/docs/track-buttons.png" alt="A property row on hover, showing the ⊙ track button next to the value"><span class="cap">The ⊙ track button appears when you hover a row — here on DataContext.</span></div>
<h3>Step 2. Read the colored tree</h3>
<p>Every element gets a gutter bar and an underline — <em>same value = same color</em>. Strings and value types compare by equality; reference values (view models!) by instance, labeled like <code>OrbitViewModel #1</code>. <code>null</code> and "no such property" get their own buckets. Folded <code>⋯</code> chips stack up to three colors of the values hidden inside them, so nothing can hide.</p>
<div class="shot"><img src="assets/img/docs/track-legend.png" alt="The tree colored by DataContext with the live legend counting each bucket"><span class="cap">The legend under the tree counts every bucket live.</span></div>
<p>Values changed in the running app — even off-screen or inside folded chips — re-classify within 250&nbsp;ms. (Plain CLR properties have no change notifications; they re-classify on ↻ Refresh.)</p>
<h3>Step 3. Fold to changes</h3>
<p><b>Fold to changes</b> (button in the legend) folds the tree to exactly the elements where the tracked value differs from its parent — the break points, on one screen. ✕ stops tracking.</p>
<div class="shot"><img src="assets/img/docs/track-fold.png" alt="The tree folded to the elements where the tracked DataContext changes"><span class="cap">Only the elements where the value changes stay visible — the lost-DataContext card stands out immediately.</span></div>
<h3>Pin the properties you watch</h3>
<p><b>📌 pin</b> keeps a property in a <b>Pinned</b> group at the top of the list; the rest collapses behind "Show more". Pins are per name (pin <code>Text</code> once — pinned for every element type), shared by all DevTools windows and persisted per user.</p>
<div class="shot"><img src="assets/img/docs/track-pinned.png" alt="The Pinned group at the top of the Properties list with Show 234 more properties below"><span class="cap">Your watched properties stay on top; the other 234 wait behind "Show more".</span></div>` },
      { id: 'layout', t: 'Layout: why this size?', html: `<p>An element is 349 pixels wide and nothing on screen says who decided that. The <b>Layout</b> tab shows the classic interactive box model — and then explains the size, step by step.</p>
<h3>Read the box model</h3>
<p>Margin / border / padding bands are editable per side and update live as the control re-layouts. Below them: size, min/max, desired size, bounds — and a 3×3 <b>alignment pad</b> that sets horizontal and vertical alignment with one click, with <b>Stretch H</b> / <b>Stretch V</b> toggling stretching per axis.</p>
<div class="shot"><img src="assets/img/docs/layout-box.png" alt="The interactive box model with editable margin, border and padding, the alignment pad and the size summary"><span class="cap">Edit any band or click the alignment pad — the running app follows immediately.</span></div>
<h3>The four steps of "Why this size?"</h3>
<p>Avalonia sizes an element in a fixed sequence, and the card narrates it: <b>1. The parent offered</b> — the constraint passed down (a vertical StackPanel offers unbounded height, a Grid cell its slot); <b>2. The element desired</b> — what it measured for its content; <b>3. Constraints applied</b> — Width/Height and Min/Max clamping the measurement; <b>4. Alignment placed it</b> — how Stretch, Center or an edge used the remaining space.</p>
<div class="shot"><img src="assets/img/docs/layout-card.png" alt="The Why this size? card narrating the four layout steps with a verdict per axis"><span class="cap">Each axis gets a verdict naming the decider — here, Stretch fills the parent's slot for width, content decides height.</span></div>
<p>The deciding property renders as a chip — click it to see <em>where that value is set</em>, the same provenance card the Properties tab shows. When the parent decided, its name links straight into the tree.</p>
<p class="tip"><b>Tip.</b> The classic traps get a callout: Stretch inside an Auto row, a Canvas ignoring alignment, the StackPanel stacking axis.</p>
<h3>Alignment pad</h3>
<p>The 3×3 pad in the box model view sets alignment with one click; <b>Stretch H</b> / <b>Stretch V</b> toggle stretching per axis. Changes apply to the running app immediately — combined with the explainer card, you see the size react and the verdict update in place.</p>` },
      { id: 'inspector', t: 'Inspect any value', html: `<p>A view model in the Properties panel is normally just a type name. The instance inspector opens it up — and the same card serves the whole tool: every <b>reference value</b> in Properties shows a 🔍 in its value column, and every instance mentioned on the Timeline (event args, old/new values, binding step sources, view models) opens the same way.</p>
<h3>Step 1. Drill into a value</h3>
<p>Click the 🔍 and the card lists <b>properties and fields</b> read live via reflection (throwing getters show as ⚠), under the type's name and full name. Nested objects and collections drill deeper — cards stack as flyouts, so the way back stays open.</p>
<div class="shot"><img src="assets/img/story/e03.png" alt="The DataContext row drilled into a live DeploymentViewModel card"><span class="cap">The DataContext opens as a live card — nested objects and collections keep drilling.</span></div>
<p>From any card, <b>👁 observe</b> puts a view model on the Timeline's watchlist, and <b>C# source</b> jumps to the type's declaration in your editor.</p>
<h3>Step 2. Search and pin what matters</h3>
<ul><li><b>Search</b> — a filter box appears on cards with more than ten members and matches member names <em>and</em> value text.</li>
<li><b>Show more</b> — long member lists collapse behind a "show N more" link instead of a wall of rows.</li>
<li><b>Pins per type</b> — hover a row and pin it: a type with pins opens showing <em>just the pinned members</em>, the rest behind "show all N". Pins are per concrete type and last for the app's session.</li></ul>
<div class="shot"><img src="assets/img/story/e04.png" alt="A reopened card showing only the three pinned members with show-all links"><span class="cap">A type with pins opens showing just those — the rest is one click away.</span></div>
<h3>Safe by design</h3>
<p>Values are read when the card opens and instances are held weakly — inspecting never keeps your objects alive.</p>` },
      { id: 'timeline', t: 'Timeline', html: `<p>The <b>Timeline</b> tab interleaves routed events, property changes, view-model notifies, focus changes and binding errors in one chronological feed — so "the slider moved, then the VM notified, then the binding wrote the value" reads as three adjacent rows, not three separate tools.</p>
<h3>Step 1. Build a watchlist</h3>
<p>Nothing is recorded until something is on the watchlist. Add to it from anywhere:</p>
<ol class="steps"><li>Right-click a tree element → <b>Observe in Timeline</b> (or <b>Observe DataContext</b>).</li>
<li>Or press <b>＋ whole window</b> to observe everything at once.</li>
<li>Or 👁 a view model from any inspector card.</li></ol>
<h3>Step 2. Read the feed</h3>
<div class="shot"><img src="assets/img/docs/tl-feed.png" alt="The timeline feed: watching chips, lane toggles, and interleaved event, change and notify rows"><span class="cap">Watching chips on top, lane toggles in the toolbar, quiet stretches folded into ⋯ +N s markers.</span></div>
<ul><li><b>⚡ Events</b> — routed events chosen from the registry (the Common preset enables automatically) whose source lies inside an observed element's subtree.</li>
<li><b>◆ Property changes</b> — styled, attached and direct property changes of the observed elements: old → new, priority, and a <em>⇠ binding</em> mark when a binding produced the value. Noisy properties (Bounds, IsPointerOver, …) stay hidden unless "Noisy" is on.</li>
<li><b>↻ Notifies</b> — <code>INotifyPropertyChanged</code> from observed view models, with the fresh value.</li>
<li><b>◉ Focus</b> — every focus change in the app, captured with no watchlist needed: what had focus, what got it.</li>
<li><b>⚠ Binding errors</b> — straight from Avalonia's logger.</li></ul>
<p>When a VM notify produces a bound update, the property row is stamped with its cause: <em>↞ TelemetryViewModel.Throttle</em>.</p>
<h3>Step 3. Open the details</h3>
<p>Click any row. Events show the route direction, the source and the visual chain the event routed through — every element clickable. Property changes show kind, priority, the metadata default and, for bound properties, the <b>full binding</b>: every path step with its live source and value, converter with parameter, fallback and string format — re-read live each time the pane opens; MultiBindings unfold recursively.</p>
<div class="shot"><img src="assets/img/docs/tl-binding.png" alt="The details pane of a bound property change: old and new values, the cause, and the binding walk-through"><span class="cap">A bound change carries its cause and the whole binding — every step with its live source and value.</span></div>
<p><b>🔍 opens the instance inspector</b> for any instance on the timeline — event args, old/new values, step sources, converters, view models: see <a href="#inspector">Inspect any value</a>. Mentioned objects are held weakly — the timeline never keeps your objects alive.</p>
<h3>The focus story</h3>
<p>Focus changes are always captured — no watchlist needed. ◉ rows show what had focus and what got it, interleaved with the clicks and events that caused the move.</p>
<div class="shot"><img src="assets/img/docs/tl-focus.png" alt="Focus rows on the timeline interleaved with GotFocus and LostFocus events and a Button.Click"><span class="cap">Focus (none) → Slider → Button — with the click that moved it right in between.</span></div>
<p>The status bar always names the focused element (click selects it in the tree), and a <b>follow</b> toggle keeps the tree on it with a ring in the app.</p>
<div class="shot"><img src="assets/img/docs/tl-status.png" alt="The status bar naming the focused element with the follow toggle"><span class="cap">The status bar always answers "who has focus right now?"</span></div>
<p>Pause stops capture, lanes and text filter the feed, entries are capped and batch-rendered, and quiet stretches show as <code>⋯ +N s</code> markers.</p>` },
      { id: 'tabs', t: 'Tabs', html: `<h3>Properties</h3>
<ul><li>Styled, direct, attached (grouped under 📎 owners) and plain CLR properties.</li>
<li>Hover a row for <b>⊙ track</b> and <b>📌 pin</b> — see <a href="#tracking">Value tracking &amp; pinned properties</a>.</li>
<li>Typed editors: checkboxes, enum dropdowns, flat segmented switches, color swatches with a live picker, monospace text (Enter commits, Escape reverts). Gradient brushes open a <b>gradient editor</b> — color stops, geometry, spread mode, live preview.</li>
<li>Reference values show a 🔍 — the value opens in the <a href="#inspector">instance inspector</a>.</li>
<li><strong>Source column</strong>: ∅ default · ✏️ set locally · 🎨 style · ⧉ template · ⇡ inherited. Click a badge to see <em>where and how</em> the value is set — including the style's setter, its file:line and a highlighted XAML snippet; for bindings, the binding markup and a jump to the view-model member.</li>
<li>Click a property name for metadata (declared by, default value, inherits), copy name/value, and the declaration in your code.</li>
<li>Columns are resizable — drag between the header cells.</li></ul>
<div class="shot"><img src="assets/img/docs/props-source.png" alt="The provenance popover of a style-sourced Background: the style, its setter and priority"><span class="cap">Click a source badge and the popover names the style, the setter and where it lives.</span></div>
<h3>Layout</h3><ul><li>Interactive box model, the 3×3 alignment pad and the "Why this size?" explainer — see <a href="#layout">Layout: why this size?</a>.</li></ul>
<h3>Styles</h3><ul><li>All applied value frames — control theme, styles with selectors, template and local values — with setters, priority and active state.</li>
<li>The header shows the element's full selector (<code>Type#name.classes</code>, with the <code>/template/</code> chain) and a copy button; a setter filter narrows the frames to matching setters and expands the survivors.</li>
<li>Edits apply as live local overrides (browser-devtools semantics); local values have a ✕ clear button.</li>
<li><b>📌 Pin states</b> — force <code>:disabled</code>, <code>:focus</code> or any custom pseudo-class the element's styles react to, without flipping app logic. See <a href="#hold">❄ Hold the moment</a>.</li>
<li>file:line links for the element and each style; ⟨⟩/▤/{} chips open code previews.</li></ul>
<h3>3D</h3><ul><li>Exploded 3D view textured from a live snapshot. Drag to orbit, wheel to zoom, click a card to select in the tree.</li>
<li>Granularity: <em>Visual · merged</em> (wrappers collapsed), <em>Visual · all</em>, or <em>Logical</em>. "Reset view" restores the camera.</li></ul>
<div class="shot"><img src="assets/img/docs/view-3d.png" alt="The exploded 3D view of the window's visual layers"><span class="cap">141 layers of the live window, orbitable — click any card to select it in the tree.</span></div>
<h3>Timeline</h3><ul><li>Events, property changes, VM notifies, focus changes and binding errors in one feed, scoped to a watchlist — with cause links, a binding walk-through and the instance inspector. See <a href="#timeline">Timeline</a>.</li></ul>
<h3>Logs</h3><ul><li>Live Avalonia logger output with Pause, level, area and text filters. Captures at Warning by default. Entries produced by the DevTools UI itself are dropped and appends are batched — verbose logging can't freeze the tool.</li></ul>` },
      { id: 'capture', t: 'Screenshots & bug reports', html: `<p>"Can you send me a screenshot and the XAML path?" is one click here — the element, its bounds and the properties that differ from defaults travel together with the picture.</p>
<h3>Step 1. Choose what to copy</h3>
<p>The <b>📷 toolbar button</b> is a two-click chooser — <em>Copy screenshot</em> or <em>Copy report (screenshot + XAML)</em> — capturing the selected element or the whole window. The same actions live in the tree context menu under <b>Copy ▸</b>: <b>Path</b> (<span class="kbd">Ctrl+C</span>), <b>As XAML</b> (<span class="kbd">Ctrl+Shift+C</span>), <b>Screenshot</b> and <b>As bug report</b>.</p>
<div class="shot"><img src="assets/img/docs/capture-chooser.png" alt="The 📷 chooser: Copy screenshot, or Copy report — screenshot + XAML"><span class="cap">Two clicks: the picture alone, or the picture with a readable report.</span></div>
<h3>Step 2. Paste it anywhere</h3>
<p><b>Copy as bug report</b> puts a DPI-correct PNG of the element <em>plus</em> a readable report — the pseudo-XAML path, bounds, and the properties that differ from their defaults — on the clipboard in three flavors at once: rich targets like an email compose window paste the screenshot <em>with</em> the details under it, image-only targets get the PNG, plain-text targets the markdown. Paste into an issue and it reads like a report, not a riddle.</p>
<p class="tip"><b>Tip.</b> Combined with <a href="#hold">❄ Hold</a>, popup and hover states are capturable too.</p>` },
      { id: 'source', t: 'Go to source', html: `<p>Source locations come from the XAML compiler's <code>AvaloniaXamlCreateSourceInfo</code>, which Avalonia 12 enables automatically in Debug builds. C# types (view models) are located by searching your solution tree. Clicking opens JetBrains Rider by default on macOS; override with:</p>
<pre><code>AVA_DEVTOOLS_EDITOR=<span class="s">"code --goto {file}:{line}"</span></code></pre>
<p>Compiled Fluent theme styles have no source on disk — the popover shows reflection details and a "View theme XAML on GitHub" link matched to your Avalonia version.</p>` },
      { id: 'options', t: 'Options', html: `<pre><code><span class="k">this</span>.AttachAvaDevTools(<span class="k">new</span> DevToolsOptions
{
    Gesture              = <span class="k">new</span> KeyGesture(Key.F11),                     <span class="c">// default: F12</span>
    HoldGesture          = <span class="k">new</span> KeyGesture(Key.F11, KeyModifiers.Shift), <span class="c">// ❄ hold — default: Shift+F12</span>
    HoldCountdownSeconds = 5,                                  <span class="c">// ❄ button countdown — default: 3</span>
    WindowSize           = <span class="k">new</span> Size(1280, 760),
    StayOnTop            = <span class="k">false</span>,                              <span class="c">// default: true</span>
});</code></pre>` },
      { id: 'env', t: 'Environment variables', html: `<table>
<tr><th>Variable</th><th>Meaning</th></tr>
<tr><td><code>AVA_DEVTOOLS_AUTO_OPEN=1</code></td><td>Open DevTools automatically when a window loads.</td></tr>
<tr><td><code>AVA_DEVTOOLS_TAB=3D</code></td><td>Preselect a tab (any tab header) on open.</td></tr>
<tr><td><code>AVA_DEVTOOLS_EDITOR</code></td><td>Editor command template with <code>{file}</code> / <code>{line}</code>.</td></tr>
<tr><td><code>AVA_DEVTOOLS_SRC_ROOT</code></td><td>Source root for resolving files when auto-detection fails.</td></tr>
<tr><td><code>AVA_DEVTOOLS_LOG_LEVEL=Verbose</code></td><td>Initial log capture level.</td></tr>
</table>` },
      { id: 'limits', t: 'Limitations', html: `<ul>
<li>Desktop only — secondary windows are not supported on mobile/browser targets.</li>
<li>The tool window uses the host app's loaded theme (Fluent, Simple, …).</li>
<li>The tree is a snapshot — use ↻ Refresh after structural UI changes (property values update live).</li></ul>` },
    ],
  },
  rel: {
    title: 'Releases — AvaDevTools', h: 'Releases',
    lead: 'Every version with notes and downloadable packages. Also on <a href="https://github.com/pavel-zheltiakov/AvaDevTools/releases">GitHub Releases</a> and <a href="https://www.nuget.org/packages/AvaDevTools">NuGet</a>.',
    loading: 'Loading release history…', none: 'No releases yet — the first one is coming soon.',
    view: 'View on GitHub', fail: 'Could not load the release list — see', locale: 'en-US',
  },
},

uk: {
  title: 'AvaDevTools — безкоштовні DevTools для Avalonia 12',
  descr: 'Безкоштовні інструменти розробника для Avalonia 12: інспектор дерева, живе редагування властивостей, стилі, 3D-вигляд, таймлайн подій, логи та перехід до коду. Натисніть F12.',
  nav: { docs: 'Документація', releases: 'Релізи', feedback: 'Фідбек' },
  fb: { issues: 'Повідомити про ваду або запропонувати функцію', tg: 'Новини, запитання, швидка допомога' },
  hero: {
    title: 'DevTools для <em>Avalonia 12</em>.<br>Безкоштовно. In-process. Одна клавіша.',
    tag: 'Вбудованих інструментів F12 в Avalonia 12 більше немає. AvaDevTools повертає їх — інспектор, живі редактори, стилі, 3D-вигляд, таймлайн подій і логи — одним безкоштовним NuGet-пакетом.',
    get: 'Почати', stories: 'Подивитися в дії', copy: 'копіювати',
  },
  video: { h: 'Подивіться в дії', sub: 'Реальний робочий процес: вибір, редагування, трасування, події — п’ятдесят секунд від F12 до виправлення.' },
  wn: { h: 'Що нового у 12.1.1', docs: 'Документація →', notes: 'Історія версій →' },
  video2: { h: 'Розумне дерево за 40 секунд', sub: 'Вибір елемента, розкриття прихованих рівнів по одному, точне відкриття згорток, приховування зайвого, scope і пошук — один безперервний сценарій.' },
  video3: { h: 'Трекінг значень за 45 секунд', sub: 'Відстежуйте одну властивість по всьому дереву: кольори за значенням, жива легенда, згортання до змін і закріплені рядки — один безперервний сценарій.' },
  stories: {
    h: 'Історії', wn: 'explain',
    lead: 'Кожна велика можливість — покрокова історія: гортайте, і кожна дія розгортається саме так, як на екрані — у вашому темпі, без перемотування.',
    list: [
      { key: 'explain', h: '🔍 Explain everything', sub: 'Чому такий розмір, що всередині значення, хто перемістив фокус, як виглядає градієнт — відповіді на місці.',
        steps: [
          { t: '🔍 Explain everything',
            d: 'DevTools показують кожне значення. Але чому воно саме таке — ширина, стрибок фокуса, вміст DataContext — досі доводилося з’ясовувати самотужки.',
            d2: 'Explain everything: вкладка Layout пояснює, як елемент отримав свій розмір, будь-яке значення відкривається в інспекторі, зміни фокуса лягають на таймлайн, а градієнтні пензлі отримали візуальний редактор.',
            painsTitle: 'До 12.1.1',
            pains: [
              { k: 'Ширина 349', d: 'зʼявилася — і ніщо не каже, хто її вирішив' },
              { k: 'В’ю-модель', d: 'це назва типу, всередину якої не зазирнути' },
              { k: 'Фокус', d: 'стрибає кудись, і ніщо не фіксує чому' },
              { k: 'Градієнт', d: 'пише LinearGradientBrush — редагуйте наосліп' },
            ],
            hook: 'Один реліз пояснює все — розміри, значення, фокус, градієнти.',
            hookIco: '🔍' },
          { img: 'story/e02.png', t: 'Чому такий розмір?', d: 'Вкладка Layout відновлює рішення: що запропонував батько, що попросив елемент, яке обмеження вирішило і що вирівнювання зробило з рештою місця. Вирішальна властивість веде просто туди, де її задано, а панель 3×3 редагує вирівнювання одним кліком.' },
          { img: 'story/e03.png', t: 'Інспектуйте будь-яке значення', d: 'Кожне посилальне значення у Properties має 🔍 — DataContext відкривається живою карткою: властивості й поля, вкладені об’єкти для заглиблення, 👁 спостереження на таймлайні, перехід до C#-коду.' },
          { img: 'story/e04.png', t: 'Шукайте і закріплюйте потрібне', d: 'Великі об’єкти залишаються керованими: шукайте члени за іменем чи значенням, закріплюйте важливі — тип відкриється лише з ними, решта за «show all».' },
          { img: 'story/e05.png', t: 'Історія фокуса', d: 'Зміни фокуса лягають на таймлайн поруч із подіями, що їх спричинили, а статусний рядок завжди називає сфокусований елемент — увімкніть follow, і дерево слідкуватиме наживо.' },
          { img: 'story/e06.png', t: 'Редагуйте градієнти візуально', d: 'Градієнтні пензлі відкривають справжній редактор: колірні стопи з пікером, зсуви, геометрія, режим spread — із живим прев’ю, що застосовується одразу.' },
        ] },
      { key: 'hold', h: '❄ Hold the moment', sub: 'Попапи, флаяути, тултіпи та hover-стилі — заморожені на льоту одним жестом і досліджувані як звичайний UI.',
        steps: [
          { t: '❄ Hold the moment',
            d: 'Тултіпи, флаяути та hover-стилі живуть, лише поки їх тримає курсор — щойно ви тягнетеся до інспектора, те, за чим ви полювали, закривається саме.',
            d2: 'Заморозьте попапи, флаяути, тултіпи та hover-стилі одним жестом — натисніть Shift+F12, поки застосунок показує потрібний момент — і досліджуйте заморожену сцену як будь-що інше. Плюс панель закріплення станів, копіювання баг-репорту та меню в стилі Office.',
            painsTitle: 'Без Hold',
            pains: [
              { k: 'Флаяут', d: 'закривається від першого кліку повз нього' },
              { k: 'Тултіп', d: 'зникає, щойно курсор відходить' },
              { k: ':pointerover-стиль', d: 'пропадає ще до відкриття інспектора' },
              { k: 'Підсвітка перетягування', d: 'живе, лише поки затиснута кнопка' },
            ],
            hook: 'Hold заморожує все це — одним жестом, на льоту.' },
          { img: 'story/h02.png', t: 'Заморозьте на льоту', d: 'Озбройте відлік кнопкою ❄ — або натисніть Shift+F12 просто в застосунку — і підготуйте сцену, поки таймер спливає над вікном. На нулі відкритий флаяут перестає слухатись фокуса: він залишається точно як був, а все, що утримує заморозка, отримує в дереві значок ❄.' },
          { img: 'story/h03.png', t: 'Увійдіть у заморожену сцену', d: 'Попап тепер — звичайний UI: виберіть пункт меню, читайте його властивості, межі та стилі — ніщо не закривається, поки діє hold.' },
          { img: 'story/h04.png', t: 'Закріпіть потрібні стани', d: 'У вкладці Styles з’являється панель закріплення станів: увімкніть :pointerover, :pressed, :focus чи будь-який власний псевдоклас — застосунок рендерить його, ніби миша досі там.' },
          { img: 'story/h05.png', t: 'Скопіюйте баг-репорт', d: '📷 кладе в буфер DPI-коректний скриншот — або повний звіт: псевдо-XAML шлях, межі та всі змінені властивості, готові до вставки в issue.' },
          { img: 'story/h06.png', t: 'Відпустіть, коли готово', d: 'Esc у застосунку — або Unfreeze у меню ❄ — повертає все точно як було. Власні інтервали відліку запам’ятовуються.' },
        ] },
      { key: 'tree', h: 'Розумне дерево', sub: 'Вибір елемента, розкриття прихованих рівнів по одному, точне відкриття згорток, приховування зайвого, scope і пошук — один безперервний сценарій.',
        steps: [
          { img: 'story/s01.png', t: 'Вибір — дерево стискається', d: 'Натисніть ⌖ Pick element і клацніть будь-що в застосунку. Дерево згортається до вікна, ваших view та цілі — обгортки складаються в чипи «⋯ N levels».' },
          { img: 'story/s02.png', t: 'Крок за кроком', d: 'Alt+↑ відкриває рівно один прихований рівень за раз.' },
          { img: 'story/s03.png', t: 'Клацніть згортку…', d: 'Зʼявляється список прихованих елементів — у стилі самого дерева.' },
          { img: 'story/s04.png', t: '…і зʼявляється лише він', d: 'Чип розділяється: «⋯ N levels» + елемент + «⋯ M levels».' },
          { img: 'story/s05.png', t: 'Ховайте зайве', d: 'Delete — елемент повертається у свій чип.' },
          { img: 'story/s06.png', t: 'Меню у стилі Office', d: 'Підменю Ancestors, Descendants, Element і Copy — іконка та шорткат для кожної дії; предки першими, як і читається дерево.' },
          { img: 'story/s07.png', t: 'Згорнути предків', d: 'Shift+↑ лишає ваші view, ховає обгортки.' },
          { img: 'story/s08.png', t: 'Scope', d: 'Будь-який елемент стає коренем, хлібні крихти ведуть назад. Esc — вихід.' },
          { img: 'story/s09.png', t: 'Пошук', d: 'За типом, іменем або класом стилю — F3 циклює збіги.' },
          { img: 'story/s10.png', t: 'Живі розміри', d: 'Колонка розмірів спалахує, щойно застосунок змінюється.' },
        ] },
      { key: 'track', h: 'Трекінг значень', sub: 'Відстежуйте одну властивість по всьому дереву: кольори за значенням, жива легенда, згортання до змін і закріплені рядки — один безперервний сценарій.',
        steps: [
          { img: 'story/t01.png', t: 'Дві приховані кнопки на кожному рядку', d: 'Наведіть курсор на будь-який рядок Properties: ⊙ track відстежує значення по дереву, 📌 pin тримає рядок згори.' },
          { img: 'story/t02.png', t: 'Один клік — дерево у кольорах значень', d: 'Відстежуйте DataContext: MainViewModel скрізь, де він успадковується, острівець OrbitViewModel, null у власній групі.' },
          { img: 'story/t03.png', t: 'Легенда, що рахує все', d: 'Кожне значення в дереві з живим лічильником — а інстанси отримують номери: «OrbitViewModel #1».' },
          { img: 'story/t04.png', t: 'Значення змінюються — кольори слідують', d: 'Другий OrbitViewModel, призначений у запущеному застосунку: той самий тип, власний колір — #2. Перекласифікація за 250 мс, навіть у згорнутих чипах.' },
          { img: 'story/t05.png', t: 'Згорнути до змін', d: 'Один клік лишає тільки елементи, де значення відрізняється від батьківського — кожна межа DataContext на одному екрані.' },
          { img: 'story/t06.png', t: 'Закріпіть те, що пильнуєте', d: '📌 піднімає ваші властивості на початок списку; решта чекає за «Show more».' },
        ] },
      { key: 'timeline', h: 'Один таймлайн: події, властивості, в’ю-моделі', sub: 'Позначте те, що вас цікавить — усе, що з ним відбувається, лягає в одну хронологічну стрічку: причина і наслідок поруч.',
        steps: [
          { img: 'story/u01.png', t: 'Нічого не записується без вашої згоди', d: 'Позначте слайдер, кнопку та в’ю-модель — чипи списку спостереження показують, що саме бачить таймлайн.' },
          { img: 'story/u02.png', t: 'Чотири доріжки, одна хронологічна стрічка', d: '⚡ routed-події, ◆ зміни властивостей, ↻ сповіщення в’ю-моделей і ⚠ помилки біндінгів впереміш — тихі проміжки стають маркерами «⋯ +1.2 s».' },
          { img: 'story/u03.png', t: 'Зміна з біндінгу відкриває весь біндінг', d: 'Старе → нове, пріоритет, дефолт із метаданих — і прохід виразу: кожен крок шляху з живим джерелом і значенням. Посилання ↞ називає сповіщення-причину.' },
          { img: 'story/u04.png', t: 'Будь-який інстанс — під лупою', d: '🔍 відкриває рефлексійну картку: властивості й поля читаються наживо. 👁 додає в’ю-модель до списку спостереження звідусіль.' },
          { img: 'story/u05.png', t: 'Події несуть свій маршрут', d: 'Напрямок, джерело, аргументи — і візуальний ланцюжок, яким подія спливала; кожен елемент клікабельний.' },
          { img: 'story/u06.png', t: 'Події обираєте ви', d: 'Повний реєстр routed-подій із фільтром і пресетом Common — запис лише в піддеревах позначених елементів.' },
        ] },
    ],
  },
  tour: [
    { img: 'tab-properties.png', t: 'Інспектуйте та редагуйте все — наживо',
      lead: 'Кожна властивість вибраного елемента з типізованими редакторами та повним походженням значень.',
      pts: ['Згруповані attached-властивості, змінна ширина колонок, миттєвий фільтр',
            'Зразки кольору з пікером, сегментні перемикачі enum, чекбокси',
            'Значки джерела: ✏️ вручну · 🎨 стиль · ⇡ успадковано — клік показує, де і як',
            'Локально задані значення підсвічено — перевизначення видно одразу'] },
    { img: 'tab-styles.png', t: 'Стилі з переходом до коду',
      lead: 'Повний каскад елемента: тема, стилі з селекторами, шаблон і локальні значення.',
      pts: ['Редагуйте сеттери як живі локальні перевизначення',
            'Посилання file:line з підсвіченими фрагментами XAML',
            'Біндінги простежуються до члена в’ю-моделі — один клік до редактора'] },
    { img: 'tab-3d.png', t: 'Ваш UI у 3D',
      lead: 'Вікно, розкладене на текстуровані шари з живого знімка.',
      pts: ['Тягніть для обертання, колесо — масштаб, клік — вибір у дереві',
            'Деталізація: Visual · merged, Visual · all або Logical',
            'Зайві оверлеї та сюрпризи z-order видно миттєво'] },
    { img: 'tab-layout.png', t: 'Боксова модель як у браузері',
      lead: 'Margin, border і padding як інтерактивні зони — редагуйте будь-яку сторону на місці.',
      pts: ['Розміри, min/max, desired, bounds та вирівнювання перед очима',
            'Зміни застосовуються до запущеного застосунку одразу'] },
  ],
  feat: {
    h: 'Усе, що очікуєш від DevTools', sub: 'Підключіть один раз і натискайте F12 у будь-якому вікні.',
    cards: [
      { i: '🌳', t: 'Розумне дерево', d: 'Дерево, що читається як XAML: підсвічування синтаксису, згортання як у редакторі, компактний вигляд після вибору, покрокове розкриття, hide, focus, scope і пошук.' },
      { i: '🎯', t: 'Трекінг значень', d: 'Відстежуйте будь-яку властивість по всьому дереву: однакове значення = однаковий колір, null у власній групі, жива легенда з лічильниками — а «Fold to changes» показує всі межі одразу.' },
      { i: '❄', t: 'Hold the moment', d: 'Shift+F12 заморожує те, що застосунок показує просто зараз — відкриті попапи, флаяути, тултіпи, hover-стилі. Досліджуйте заморожену сцену як звичайний UI; Esc відновлює все точно як було. Панель pin states вмикає :focus, :disabled чи будь-який кастомний псевдоклас на вимогу.' },
      { i: '📷', t: 'Копія як баг-репорт', d: 'Один клік кладе в буфер DPI-коректний скриншот плюс читабельний звіт — псевдо-XAML шлях, bounds, властивості з нетиповими значеннями. Rich-цілі вставляють обидва, графічні — PNG, текстові — markdown.' },
      { i: '🔍', t: 'Інспекція будь-якого значення', d: 'Будь-який об’єкт із панелі Properties відкривається в живій картці інспектора: вкладені значення розкриваються глибше, члени шукаються за іменем чи значенням, закріплення діють на тип, 👁 — на таймлайн, C# source — у редактор.' },
      { i: '📏', t: 'Чому такий розмір?', d: 'Вкладка Layout відновлює, як елемент отримав розмір — що запропонував батько, що він попросив, яке обмеження вирішило, що зробило вирівнювання — з переходом туди, де задано вирішальне значення.' },
      { i: '✏️', t: 'Живе редагування властивостей', d: 'Типізовані редактори — чекбокси, списки enum, плоскі сегментні перемикачі — згруповані attached-властивості та миттєвий результат без перезбирання.' },
      { i: '📌', t: 'Закріплені властивості', d: 'Закріпіть властивості, які справді пильнуєте — вони підіймаються у групу вгорі списку; решта чекає за «Show more». Зберігається для користувача.' },
      { i: '🎨', t: 'Палітра кольорів', d: 'Кожен Color і пензель має зразок кольору з повноцінним колірним пікером. Градієнтні пензлі мають візуальний редактор — стопи, геометрія, spread, живе прев’ю. Зміни застосовуються наживо.' },
      { i: '📐', t: 'Боксова модель', d: 'Інтерактивні зони margin / border / padding із редагуванням кожної сторони, а також розміри, обмеження та вирівнювання.' },
      { i: '🧩', t: 'Стилі та фрейми значень', d: 'Усі застосовані стилі, тема і локальні значення з сеттерами, пріоритетом та станом активності. Редагування — як живі локальні перевизначення.' },
      { i: '🧊', t: '3D-вигляд шарами', d: 'Ваше вікно як текстуровані шари у 3D — обертайте, масштабуйте, клікайте для вибору. Візуальне, згорнуте або логічне дерево.' },
      { i: '🔗', t: 'Перехід до коду', d: 'file:line для елементів, стилів, біндінгів і в’ю-моделей. Підсвічені фрагменти XAML/C# та перехід у редактор одним кліком.' },
      { i: '⏱', t: 'Таймлайн', d: 'Routed-події, зміни властивостей, сповіщення VM і зміни фокуса в одній хронологічній стрічці за вашим списком спостереження. Причинні зв’язки з’єднують сповіщення з оновленням від біндінга; кожен запис відкриває повні деталі.' },
      { i: '📜', t: 'Перегляд логів', d: 'Помилки біндінгів, layout і система властивостей — навіть без LogToTrace(). З фільтрами, батчингом і захистом від зациклення.' },
      { i: '📊', t: 'Оверлеї рендерера', d: 'Лічильник FPS, графіки часу layout/render та підсвічування dirty-rect — одним перемикачем.' },
      { i: '🕵️', t: 'Джерело кожного значення', d: 'Одразу видно: значення типове, задане вручну, зі стилю, шаблону чи успадковане — з переходом до предка або точного місця в XAML.' },
      { i: '🌒', t: 'Темна тема в стилі IDE', d: 'Компактні елементи в дусі Rider/Unity, лише у вікні інструментів. Тема вашого застосунку не змінюється.' },
    ],
  },
  quick: { h: 'Швидкий старт', sub: 'Два рядки в App.axaml.cs — лише в Debug, у Release нічого не потрапляє.' },
  footer: { home: 'Головна', docs: 'Документація' },
  docs: {
    title: 'Документація — AvaDevTools', h: 'Документація',
    lead: 'Безкоштовні in-process DevTools для Avalonia 12 — безкоштовний аналог класичних інструментів F12.',
    contents: 'Зміст',
    groups: [
      { t: 'Початок роботи', ids: ['install', 'quickstart'] },
      { t: 'Можливості', ids: ['hold', 'tree', 'tracking', 'layout', 'inspector', 'timeline', 'tabs', 'capture', 'source'] },
      { t: 'Довідник', ids: ['options', 'env', 'limits'] },
    ],
    sections: [
      { id: 'install', t: 'Встановлення', html: `<pre><code>dotnet add package AvaDevTools</code></pre>
<p>Пакет націлений на <code>net8.0</code> і працює з Avalonia <strong>12.x</strong>. За бажанням підключайте лише в Debug:</p>
<pre><code>&lt;PackageReference Include=<span class="s">"AvaDevTools"</span> Condition=<span class="s">"'$(Configuration)' == 'Debug'"</span> /&gt;</code></pre>` },
      { id: 'quickstart', t: 'Швидкий старт', html: `<pre><code><span class="k">using</span> AvaDevTools;

<span class="k">public override void</span> Initialize()
{
    AvaloniaXamlLoader.Load(<span class="k">this</span>);
<span class="c">#if DEBUG</span>
    <span class="k">this</span>.AttachAvaDevTools();
<span class="c">#endif</span>
}</code></pre>
<p>Або для одного вікна: <code>myWindow.AttachAvaDevTools()</code>. Натисніть <span class="kbd">F12</span> у вікні застосунку. Вікно DevTools за замовчуванням поверх інших (перемикач 📌 на панелі).</p>
<p>Утримуйте <span class="kbd">Ctrl</span>+<span class="kbd">Shift</span> над застосунком, щоб інспектувати елемент під курсором — як у класичних DevTools.</p>
<p>Натисніть <span class="kbd">Shift</span>+<span class="kbd">F12</span>, поки застосунок показує перехідний стан — відкритий флаяут, тултіп, hover-стиль — щоб заморозити його й дослідити без поспіху: див. <a href="#hold">❄ Hold the moment</a>.</p>` },
      { id: 'hold', t: '❄ Hold the moment', html: `<p>Перехідний UI — найважче для інспекції: флаяут закривається, щойно DevTools забирає фокус, hover-стиль зникає, коли курсор іде геть. <b>Hold the moment</b> заморожує все це — і відкрите меню чи hover-стан досліджується так само спокійно, як будь-який інший UI.</p>
<h3>Крок 1. Заморозьте момент</h3>
<ol class="steps"><li>Приведіть застосунок у потрібний стан — відкрийте меню, наведіть курсор, дочекайтеся тултіпа.</li>
<li>Натисніть <span class="kbd">Shift</span>+<span class="kbd">F12</span> <em>у застосунку</em>.</li>
<li>Банер підтверджує hold. Якщо DevTools ще не відкрито, він відкриється сам.</li></ol>
<div class="shot"><img src="assets/img/docs/hold-held.png" alt="Застосунок із банером ❄ Moment held і замороженим відкритим меню"><span class="cap">Меню лишається відкритим, поки ви працюєте в DevTools — банер нагадує, що hold активний.</span></div>
<p>За лаштунками light dismiss придушено для кожного відкритого попапа — якщо логіка застосунку все ж закриє якийсь, hold відкриє його знову — а псевдокласи ланцюжка під курсором (<code>:pointerover</code>, <code>:pressed</code>, <code>:focus</code>, …) виставляються повторно, якщо фреймворк їх скидає.</p>
<h3>Крок 2. Дослідіть заморожену сцену</h3>
<p>Дерево згортається до замороженої сцени: хости попапів, тултіпів та їхні власники, кожен із крижаним значком ❄ і пунктирним підкресленням. Заморожені попапи — звичайний вміст дерева: заходьте всередину, вибирайте, підсвічуйте та інспектуйте.</p>
<div class="shot"><img src="assets/img/docs/hold-tree.png" alt="Дерево елементів зі значками ❄ на замороженому попапі та його хості"><span class="cap">Заморожений попап і його хост позначені ❄ — натисніть ↻ і заходьте, як будь-куди.</span></div>
<p class="tip"><b>Порада.</b> Hover-only hold сам вибирає стилізований елемент під курсором і відкриває вкладку Styles.</p>
<h3>Крок 3. Відпустіть</h3>
<p>Усе відпускається атомарно — <span class="kbd">Esc</span> у застосунку, перемикач ❄ на панелі або закриття DevTools. Кожне форсоване значення відновлюється з реєстру; самоперевірка стверджує повне відновлення.</p>
<h3>Не встигаєте з жестом? Кнопка ❄ веде відлік</h3>
<p>Клік у DevTools уже закрив попапи вашого застосунку — тому кнопка ❄ не може заморозити «на місці». Натомість вона відкриває вибір: <b>5 с / 10 с / 30 с / свій час</b>.</p>
<div class="shot"><img src="assets/img/docs/hold-chooser.png" alt="Вибір кнопки ❄: Unfreeze, пресети та власний відлік"><span class="cap">Оберіть затримку — власні часи запам'ятовуються як пресети в один клік.</span></div>
<p>Фокус повертається до застосунку, і банер веде відлік, поки ви відтворюєте сцену — знову відкриваєте меню, наводите курсор — і hold вмикається сам. Жест у застосунку лишається миттєвим шляхом.</p>
<div class="shot"><img src="assets/img/docs/hold-countdown.png" alt="Банер відліку над живим застосунком: Freezing in 2 — set the scene"><span class="cap">«❄ Freezing in 2…» — відтворіть сцену; hold увімкнеться, коли відлік добіжить.</span></div>
<h3>Pin states</h3>
<p>Панель <b>📌 Pin states</b> у вкладці Styles форсує псевдокласи без жодної логіки застосунку: вона сканує застосовані стилі елемента й пропонує саме ті стани, на які вони реагують — <code>:disabled</code>, <code>:focus</code>, плюс кастомні стани теми.</p>
<div class="shot"><img src="assets/img/docs/hold-pinstates.png" alt="Панель Pin states зі станами :pointerover, :pressed, :focus та іншими"><span class="cap">Пропонуються лише стани, на які елемент справді реагує — ● позначає активні.</span></div>
<p>Закріплені елементи отримують 📌 на рядку дерева; піни ділять реєстр відновлення з ❄ — відпускання повертає все.</p>` },
      { id: 'tree', t: 'Розумний інспектор дерева', html: `<p>Панель дерева — це «редактор коду» лише для читання: елементи відображаються як підсвічені псевдо-XAML рядки (<code>&lt;Button x:Name="Save" Classes="primary"&gt;</code>) зі шевронами згортання, лініями відступів і живою колонкою <b>Size</b>, що спалахує при зміні. Два режими точно відповідають Avalonia: <b>Visual tree</b> (<code>GetVisualChildren</code>, за замовчуванням) і <b>Logical tree</b> (<code>GetLogicalChildren</code>).</p>
<h3>Крок 1. Виберіть елемент</h3>
<ol class="steps"><li>Натисніть <b>⌖</b> і вкажіть елемент у застосунку — або просто утримуйте <span class="kbd">Ctrl</span>+<span class="kbd">Shift</span> над ним.</li>
<li>Дерево перебудовується в компактний вигляд: вікно, ваші user controls на шляху, контрол-власник вибраної частини шаблону та сам елемент.</li></ol>
<div class="shot"><img src="assets/img/docs/tree-compact.png" alt="Компактне дерево: MainWindow, чип ⋯ 9 levels, вибраний елемент"><span class="cap">Кожна низка обгорток згортається в чип <code>⋯ N levels</code> — глибоке дерево стає кількома рядками.</span></div>
<h3>Крок 2. Розкрийте саме те, що треба</h3>
<p>Один клік на чипі відкриває список прихованих елементів у тому ж стилі — оберіть один, і буде показано лише його: <code>⋯ 7 levels</code> перетворюється на <code>⋯ N</code> + елемент + <code>⋯ M</code>. Подвійний клік розкриває весь чип.</p>
<div class="shot"><img src="assets/img/docs/tree-chip.png" alt="Список чипа з прихованими елементами-обгортками"><span class="cap">Клік по чипу — і ви вибираєте один елемент із прихованої низки; решта лишається згорнутою.</span></div>
<p><b>Alt+↑/↓</b> крокує до батька чи дитини, розкриваючи рівно один прихований рівень (на вибраному рядку є кнопки ▲▼; око 👁 позначає крок, що відкриє приховане). <b>Delete</b> ховає елемент назад у чип; сусідні чипи зливаються.</p>
<h3>Крок 3. Формуйте дерево з меню</h3>
<p>Контекстне меню читається як меню Word: монохромна іконка для кожної дії, підписи вирівняні по колонці іконок, шорткати в колонці жестів, а великі групи сховано в підменю <b>Ancestors</b>, <b>Descendants</b>, <b>Element</b> і <b>Copy</b> — предки першими, як і читається дерево.</p>
<div class="shot"><img src="assets/img/docs/tree-menu.png" alt="Контекстне меню дерева: Ancestors, Descendants, згортання, приховування, focus, scope і копіювання"><span class="cap">Усе для формування дерева в одному меню — один/усі рівні, згорнути в ⋯, лишити view, сховати, focus, scope, копіювання.</span></div>
<h3>Focus і Scope</h3>
<p><b>Focus</b> (F) згортає все поза шляхом до вибраного елемента; Esc повертає попередній стан. <b>Scope</b> (S) робить будь-який елемент коренем дерева — з клікабельними хлібними крихтами, кнопкою «на рівень вище» та Esc для виходу. Вибір елемента поза scope виходить із нього автоматично.</p>
<h3>Клавіатура</h3>
<table><tr><th>Клавіші</th><th>Дія</th></tr><tr><td><code>↑ ↓</code></td><td>перемістити вибір</td></tr><tr><td><code>← →</code></td><td>згорнути / розгорнути, до батька / першої дитини</td></tr><tr><td><code>Space</code></td><td>перемкнути згортання</td></tr><tr><td><code>Enter</code></td><td>розкрити чип · відкрити Properties</td></tr><tr><td><code>Alt+↑ / Alt+↓</code></td><td>крок до батька / дитини з розкриттям одного рівня</td></tr><tr><td><code>Delete</code></td><td>сховати елемент у чип ⋯</td></tr><tr><td><code>Ctrl+↑ / Ctrl+↓</code></td><td>структурний батько / дитина (вибір, якщо кілька)</td></tr><tr><td><code>Ctrl+← / Ctrl+→</code></td><td>попередній / наступний сусід</td></tr><tr><td><code>Shift+→</code></td><td>показати всі рівні</td></tr><tr><td><code>Shift+←</code></td><td>згорнути нащадків у ⋯</td></tr><tr><td><code>Shift+↓</code></td><td>згорнути нащадків, лишити view</td></tr><tr><td><code>Shift+↑</code></td><td>згорнути предків, лишити view</td></tr><tr><td><code>Ctrl+Shift+↑</code></td><td>згорнути предків — усе</td></tr><tr><td><code>Ctrl+Shift+↓</code></td><td>згорнути нащадків, лишити один рівень</td></tr><tr><td><code>F / S / Esc</code></td><td>focus / scope / вийти</td></tr><tr><td><code>Ctrl+F, F3</code></td><td>пошук, наступний збіг</td></tr><tr><td><code>Ctrl+C / Ctrl+Shift+C / Ctrl+E</code></td><td>копіювати шлях / як XAML / відкрити в редакторі</td></tr></table>` },
      { id: 'tracking', t: 'Трекінг значень і закріплені властивості', html: `<p>«Де зламався мій DataContext?» — зазвичай це година клацання по елементах. Трекінг значень відповідає на одному екрані: розфарбуйте все дерево за значенням будь-якої властивості й побачте, де саме воно змінюється.</p>
<h3>Крок 1. Увімкніть трекінг</h3>
<p>Наведіть курсор на будь-який рядок вкладки Properties — з'являться дві кнопки: <b>⊙ track</b> і <b>📌 pin</b>. Натисніть <b>⊙</b>.</p>
<div class="shot"><img src="assets/img/docs/track-buttons.png" alt="Рядок властивості при наведенні з кнопкою ⊙ track біля значення"><span class="cap">Кнопка ⊙ track з'являється при наведенні — тут на DataContext.</span></div>
<h3>Крок 2. Читайте розфарбоване дерево</h3>
<p>Кожен елемент отримує смужку в гаттері та підкреслення — <em>однакове значення = однаковий колір</em>. Рядки та value-типи порівнюються за рівністю; посилальні значення (в'ю-моделі!) — за інстансом, з підписом на кшталт <code>OrbitViewModel #1</code>. <code>null</code> і «немає такої властивості» мають власні групи. Згорнуті чипи <code>⋯</code> складають до трьох кольорів прихованих значень — сховатися неможливо.</p>
<div class="shot"><img src="assets/img/docs/track-legend.png" alt="Дерево, розфарбоване за DataContext, із живою легендою, що рахує групи"><span class="cap">Легенда під деревом рахує кожну групу наживо.</span></div>
<p>Значення, змінені в запущеному застосунку — навіть поза екраном чи всередині згорток — перекласифікуються за 250&nbsp;мс. (Звичайні CLR-властивості не мають сповіщень про зміни; вони перекласифікуються після ↻ Refresh.)</p>
<h3>Крок 3. Fold to changes</h3>
<p><b>Fold to changes</b> (кнопка в легенді) згортає дерево до елементів, де відстежуване значення відрізняється від батьківського — точки зламу на одному екрані. ✕ вимикає трекінг.</p>
<div class="shot"><img src="assets/img/docs/track-fold.png" alt="Дерево, згорнуте до елементів, де відстежуваний DataContext змінюється"><span class="cap">Видимими лишаються лише елементи, де значення змінюється — картка з загубленим DataContext впадає в око одразу.</span></div>
<h3>Закріпіть властивості, які пильнуєте</h3>
<p><b>📌 pin</b> тримає властивість у групі <b>Pinned</b> угорі списку; решта згортається за «Show more». Закріплення діє за іменем (закріпіть <code>Text</code> один раз — і для всіх типів елементів), спільне для всіх вікон DevTools і зберігається для користувача.</p>
<div class="shot"><img src="assets/img/docs/track-pinned.png" alt="Група Pinned угорі списку Properties із Show 234 more properties нижче"><span class="cap">Властивості, які ви пильнуєте, завжди згори; решта 234 чекають за «Show more».</span></div>` },
      { id: 'layout', t: 'Layout: чому такий розмір?', html: `<p>Елемент завширшки 349 пікселів — і ніщо на екрані не каже, хто це вирішив. Вкладка <b>Layout</b> показує класичну інтерактивну боксову модель — а потім пояснює розмір, крок за кроком.</p>
<h3>Читайте боксову модель</h3>
<p>Зони margin / border / padding редагуються з кожної сторони й оновлюються наживо разом із лейаутом. Нижче — розміри, min/max, desired і bounds — та панель вирівнювання <b>3×3</b>, що задає горизонтальне й вертикальне вирівнювання одним кліком; <b>Stretch H</b> / <b>Stretch V</b> перемикають розтягування по осях.</p>
<div class="shot"><img src="assets/img/docs/layout-box.png" alt="Інтерактивна боксова модель із редагованими margin, border і padding, панеллю вирівнювання та підсумком розмірів"><span class="cap">Редагуйте будь-яку зону чи клацніть панель вирівнювання — запущений застосунок реагує одразу.</span></div>
<h3>Чотири кроки «Why this size?»</h3>
<p>Avalonia визначає розмір елемента у фіксованій послідовності, і картка переказує її: <b>1. Батько запропонував</b> — обмеження, передане згори (вертикальний StackPanel пропонує необмежену висоту, комірка Grid — свій слот); <b>2. Елемент попросив</b> — що він наміряв для свого вмісту; <b>3. Обмеження застосовано</b> — Width/Height та Min/Max, що затискають результат; <b>4. Вирівнювання розмістило</b> — як Stretch, Center чи край використали залишок місця.</p>
<div class="shot"><img src="assets/img/docs/layout-card.png" alt="Картка Why this size? переказує чотири кроки лейаута з вердиктом для кожної осі"><span class="cap">Для кожної осі — вердикт із вирішальним чинником: тут ширину вирішив Stretch у слоті батька, висоту — вміст.</span></div>
<p>Вирішальна властивість відображається чипом — клік показує, <em>де це значення задано</em>, тією ж карткою походження, що й у вкладці Properties. Якщо вирішив батько, його ім’я веде просто в дерево.</p>
<p class="tip"><b>Порада.</b> Класичні пастки мають позначки: Stretch в Auto-рядку, Canvas, що ігнорує вирівнювання, вісь укладання StackPanel.</p>
<h3>Панель вирівнювання</h3>
<p>Панель 3×3 у боксовій моделі задає вирівнювання одним кліком; <b>Stretch H</b> / <b>Stretch V</b> перемикають розтягування по осях. Зміни застосовуються одразу — разом із карткою пояснення видно, як розмір реагує і вердикт оновлюється на місці.</p>` },
      { id: 'inspector', t: 'Інспекція будь-якого значення', html: `<p>В’ю-модель у панелі Properties — зазвичай лише ім’я типу. Інспектор інстансів відкриває її зсередини — і та сама картка обслуговує весь інструмент: кожне <b>посилальне значення</b> у Properties має 🔍 у колонці значення, і кожен інстанс, згаданий на таймлайні (аргументи подій, старі/нові значення, джерела кроків біндінгів, в’ю-моделі), відкривається так само.</p>
<h3>Крок 1. Загляньте всередину значення</h3>
<p>Натисніть 🔍 — картка покаже <b>властивості й поля</b>, прочитані наживо через рефлексію (геттери з винятками позначаються ⚠), під іменем і повним іменем типу. Вкладені об’єкти й колекції розкриваються глибше — картки нашаровуються флаяутами, тож шлях назад залишається відкритим.</p>
<div class="shot"><img src="assets/img/story/e03.png" alt="Рядок DataContext, розкритий у живу картку DeploymentViewModel"><span class="cap">DataContext відкривається живою карткою — вкладені об’єкти й колекції розкриваються далі.</span></div>
<p>З будь-якої картки <b>👁 observe</b> додає в’ю-модель до списку спостереження таймлайна, а <b>C# source</b> відкриває оголошення типу в редакторі.</p>
<h3>Крок 2. Шукайте і закріплюйте важливе</h3>
<ul><li><b>Пошук</b> — поле фільтра з’являється на картках із понад десятьма членами і шукає за іменами <em>та</em> текстом значень.</li>
<li><b>Show more</b> — довгі списки членів згортаються за посиланням «show N more» замість стіни рядків.</li>
<li><b>Закріплення на тип</b> — наведіть на рядок і закріпіть його: тип із закріпленнями відкривається <em>лише з ними</em>, решта за «show all N». Закріплення діють на конкретний тип і живуть до кінця сесії застосунку.</li></ul>
<div class="shot"><img src="assets/img/story/e04.png" alt="Повторно відкрита картка лише з трьома закріпленими членами та посиланнями show all"><span class="cap">Тип із закріпленнями відкривається лише з ними — решта за один клік.</span></div>
<h3>Безпечно за задумом</h3>
<p>Значення читаються при відкритті картки, інстанси утримуються слабкими посиланнями — інспекція не подовжує життя ваших об’єктів.</p>` },
      { id: 'timeline', t: 'Таймлайн', html: `<p>Вкладка <b>Timeline</b> зводить routed-події, зміни властивостей, сповіщення в’ю-моделей, зміни фокуса й помилки біндінгів в одну хронологічну стрічку — «слайдер посунувся, VM сповістила, біндінг записав значення» читається трьома сусідніми рядками, а не трьома окремими інструментами.</p>
<h3>Крок 1. Зберіть список спостереження</h3>
<p>Нічого не записується, поки список порожній. Додавайте звідусіль:</p>
<ol class="steps"><li>Правий клік по елементу дерева → <b>Observe in Timeline</b> (або <b>Observe DataContext</b>).</li>
<li>Або кнопка <b>＋ whole window</b> — спостерігати все одразу.</li>
<li>Або 👁 на в’ю-моделі в будь-якій картці інспектора.</li></ol>
<h3>Крок 2. Читайте стрічку</h3>
<div class="shot"><img src="assets/img/docs/tl-feed.png" alt="Стрічка таймлайна: чипи спостереження, перемикачі смуг і переплетені рядки подій, змін та сповіщень"><span class="cap">Чипи Watching згори, перемикачі смуг на панелі, тихі проміжки згорнуто в позначки ⋯ +N s.</span></div>
<ul><li><b>⚡ Події</b> — routed-події з реєстру (пресет Common вмикається автоматично), джерело яких лежить у піддереві спостережуваного елемента.</li>
<li><b>◆ Зміни властивостей</b> — styled-, attached- і direct-властивості спостережуваних елементів: old → new, пріоритет і позначка <em>⇠ binding</em>, якщо значення дав біндінг. «Шумні» властивості (Bounds, IsPointerOver, …) приховані, поки не ввімкнено "Noisy".</li>
<li><b>↻ Сповіщення</b> — <code>INotifyPropertyChanged</code> від спостережуваних в’ю-моделей, зі свіжим значенням.</li>
<li><b>◉ Фокус</b> — кожна зміна фокуса в застосунку, без жодного списку спостереження: що втратило фокус і що його отримало.</li>
<li><b>⚠ Помилки біндінгів</b> — просто з логера Avalonia.</li></ul>
<p>Коли сповіщення VM спричиняє оновлення через біндінг, рядок властивості отримує позначку причини: <em>↞ TelemetryViewModel.Throttle</em>.</p>
<h3>Крок 3. Відкрийте деталі</h3>
<p>Клікніть будь-який рядок. Події показують напрям маршруту, джерело та візуальний ланцюжок, яким пройшла подія — кожен елемент клікабельний. Зміни властивостей показують вид, пріоритет, типове значення з метаданих і, для біндінгів, <b>увесь біндінг</b>: кожен крок шляху з живим джерелом і значенням, конвертер із параметром, fallback і формат рядка — перечитуються наживо при кожному відкритті; MultiBinding розгортається рекурсивно.</p>
<div class="shot"><img src="assets/img/docs/tl-binding.png" alt="Панель деталей зміни зв’язаної властивості: старе й нове значення, причина та розбір біндінгу"><span class="cap">Зміна через біндінг несе свою причину й увесь біндінг — кожен крок із живим джерелом і значенням.</span></div>
<p><b>🔍 відкриває інспектор інстансів</b> для будь-якого об’єкта на таймлайні — аргументи подій, старі/нові значення, джерела кроків, конвертери, в’ю-моделі: див. <a href="#inspector">Інспекція будь-якого значення</a>. Об’єкти утримуються слабкими посиланнями — таймлайн не подовжує їхнє життя.</p>
<h3>Історія фокуса</h3>
<p>Зміни фокуса записуються завжди — без списку спостереження. Рядки ◉ показують, що втратило фокус і що отримало, упереміш із кліками та подіями, які цей рух спричинили.</p>
<div class="shot"><img src="assets/img/docs/tl-focus.png" alt="Рядки фокуса на таймлайні впереміш із подіями GotFocus, LostFocus і Button.Click"><span class="cap">Focus (none) → Slider → Button — і клік, що це спричинив, просто між ними.</span></div>
<p>Статусний рядок завжди називає сфокусований елемент (клік вибирає його в дереві), а перемикач <b>follow</b> тримає дерево на ньому з кільцем у застосунку.</p>
<div class="shot"><img src="assets/img/docs/tl-status.png" alt="Статусний рядок називає сфокусований елемент, поруч перемикач follow"><span class="cap">Статусний рядок завжди відповідає: «у кого зараз фокус?»</span></div>
<p>Pause зупиняє захоплення, смуги й текст фільтрують стрічку, записи обмежені та батчаться, а тихі проміжки позначаються як <code>⋯ +N s</code>.</p>` },
      { id: 'tabs', t: 'Вкладки', html: `<h3>Properties</h3>
<ul><li>Styled-, direct-, attached- (згруповані під 📎 власниками) та звичайні CLR-властивості.</li>
<li>Наведіть курсор на рядок — <b>⊙ track</b> і <b>📌 pin</b>: див. <a href="#tracking">Трекінг значень і закріплені властивості</a>.</li>
<li>Типізовані редактори: чекбокси, списки enum, сегментні перемикачі, зразки кольору з пікером, моноширинний текст (Enter — застосувати, Escape — скасувати). Градієнтні пензлі відкривають <b>редактор градієнтів</b> — колірні стопи, геометрія, режим spread, живе прев’ю.</li>
<li>Посилальні значення мають 🔍 — значення відкривається в <a href="#inspector">інспекторі інстансів</a>.</li>
<li><strong>Колонка Source</strong>: ∅ типове · ✏️ задано вручну · 🎨 стиль · ⧉ шаблон · ⇡ успадковане. Клік по значку показує, <em>де і як</em> задано значення — сеттер стилю, file:line і підсвічений фрагмент XAML; для біндінгів — розмітку та перехід до члена в’ю-моделі.</li>
<li>Клік по імені властивості — метадані (де оголошено, типове значення, успадкування), копіювання імені/значення, оголошення у вашому коді.</li>
<li>Ширину колонок можна змінювати — тягніть між заголовками.</li></ul>
<div class="shot"><img src="assets/img/docs/props-source.png" alt="Поповер походження стильового Background: стиль, його сеттер і пріоритет"><span class="cap">Клік по значку Source — і поповер називає стиль, сеттер і де він живе.</span></div>
<h3>Layout</h3><ul><li>Інтерактивна боксова модель, панель вирівнювання 3×3 і пояснення «Why this size?» — див. <a href="#layout">Layout: чому такий розмір?</a>.</li></ul>
<h3>Styles</h3><ul><li>Усі застосовані фрейми значень — тема контролу, стилі з селекторами, шаблон і локальні значення — із сеттерами, пріоритетом і станом.</li>
<li>Заголовок показує повний селектор елемента (<code>Type#name.classes</code>, із ланцюжком <code>/template/</code>) і кнопку копіювання; фільтр сеттерів звужує фрейми до збігів і розкриває вцілілі.</li>
<li>Редагування застосовується як живі локальні перевизначення; локальні значення мають кнопку ✕ для очищення.</li>
<li><b>📌 Pin states</b> — форсуйте <code>:disabled</code>, <code>:focus</code> чи будь-який кастомний псевдоклас, на який реагують стилі елемента, без зміни логіки застосунку. Див. <a href="#hold">❄ Hold the moment</a>.</li>
<li>Посилання file:line для елемента і кожного стилю; чипи ⟨⟩/▤/{} відкривають прев'ю коду.</li></ul>
<h3>3D</h3><ul><li>3D-вигляд шарами з текстурами з живого знімка. Тягніть для обертання, колесо — масштаб, клік — вибір у дереві.</li>
<li>Деталізація: <em>Visual · merged</em> (обгортки згорнуто), <em>Visual · all</em> або <em>Logical</em>. «Reset view» повертає камеру.</li></ul>
<div class="shot"><img src="assets/img/docs/view-3d.png" alt="Пошаровий 3D-вигляд візуальних шарів вікна"><span class="cap">141 шар живого вікна, з обертанням — клік по будь-якій картці вибирає її в дереві.</span></div>
<h3>Timeline</h3><ul><li>Події, зміни властивостей, сповіщення VM, зміни фокуса й помилки біндінгів в одній стрічці за вашим списком спостереження — з причинними зв’язками, розбором біндінгів та інспектором інстансів. Див. <a href="#timeline">Таймлайн</a>.</li></ul>
<h3>Logs</h3><ul><li>Живі логи Avalonia з Pause та фільтрами за рівнем, областю і текстом. За замовчуванням — Warning. Записи від самого DevTools відкидаються, оновлення батчаться — «зациклення» неможливе.</li></ul>` },
      { id: 'capture', t: 'Скриншоти та баг-репорти', html: `<p>«Надішли скриншот і XAML-шлях» — тут це один клік: елемент, його bounds і властивості, що відрізняються від типових, їдуть разом із картинкою.</p>
<h3>Крок 1. Оберіть, що копіювати</h3>
<p><b>Кнопка 📷 на панелі</b> — вибір у два кліки: <em>Copy screenshot</em> або <em>Copy report (screenshot + XAML)</em> — для вибраного елемента чи всього вікна. Ті самі дії живуть у контекстному меню дерева під <b>Copy ▸</b>: <b>Path</b> (<span class="kbd">Ctrl+C</span>), <b>As XAML</b> (<span class="kbd">Ctrl+Shift+C</span>), <b>Screenshot</b> і <b>As bug report</b>.</p>
<div class="shot"><img src="assets/img/docs/capture-chooser.png" alt="Вибір 📷: Copy screenshot або Copy report — screenshot + XAML"><span class="cap">Два кліки: сама картинка або картинка з читабельним звітом.</span></div>
<h3>Крок 2. Вставте будь-куди</h3>
<p><b>Copy as bug report</b> кладе в буфер DPI-коректний PNG елемента <em>плюс</em> читабельний звіт — псевдо-XAML шлях, bounds і властивості, що відрізняються від типових — одразу у трьох форматах: rich-цілі (вікно листа) вставляють скриншот <em>разом</em> із деталями під ним, графічні цілі отримують PNG, текстові — markdown. Вставте в issue — і це читається як звіт, а не загадка.</p>
<p class="tip"><b>Порада.</b> Разом із <a href="#hold">❄ Hold</a> можна захопити й попапи та hover-стани.</p>` },
      { id: 'source', t: 'Перехід до коду', html: `<p>Локації беруться з <code>AvaloniaXamlCreateSourceInfo</code> компілятора XAML (в Avalonia 12 увімкнено в Debug автоматично). C#-типи (в'ю-моделі) знаходяться пошуком по дереву рішення. Клік відкриває JetBrains Rider (macOS) за замовчуванням; можна змінити:</p>
<pre><code>AVA_DEVTOOLS_EDITOR=<span class="s">"code --goto {file}:{line}"</span></code></pre>
<p>Скомпільовані стилі Fluent не мають коду на диску — поповер показує дані з рефлексії та посилання «View theme XAML on GitHub» для вашої версії Avalonia.</p>` },
      { id: 'options', t: 'Налаштування', html: `<pre><code><span class="k">this</span>.AttachAvaDevTools(<span class="k">new</span> DevToolsOptions
{
    Gesture              = <span class="k">new</span> KeyGesture(Key.F11),                     <span class="c">// типово: F12</span>
    HoldGesture          = <span class="k">new</span> KeyGesture(Key.F11, KeyModifiers.Shift), <span class="c">// ❄ hold — типово: Shift+F12</span>
    HoldCountdownSeconds = 5,                                  <span class="c">// відлік кнопки ❄ — типово: 3</span>
    WindowSize           = <span class="k">new</span> Size(1280, 760),
    StayOnTop            = <span class="k">false</span>,                              <span class="c">// типово: true</span>
});</code></pre>` },
      { id: 'env', t: 'Змінні середовища', html: `<table>
<tr><th>Змінна</th><th>Значення</th></tr>
<tr><td><code>AVA_DEVTOOLS_AUTO_OPEN=1</code></td><td>Відкривати DevTools автоматично при завантаженні вікна.</td></tr>
<tr><td><code>AVA_DEVTOOLS_TAB=3D</code></td><td>Попередньо вибрати вкладку (будь-який заголовок).</td></tr>
<tr><td><code>AVA_DEVTOOLS_EDITOR</code></td><td>Шаблон команди редактора з <code>{file}</code> / <code>{line}</code>.</td></tr>
<tr><td><code>AVA_DEVTOOLS_SRC_ROOT</code></td><td>Корінь сорсів, якщо автопошук не спрацював.</td></tr>
<tr><td><code>AVA_DEVTOOLS_LOG_LEVEL=Verbose</code></td><td>Початковий рівень захоплення логів.</td></tr>
</table>` },
      { id: 'limits', t: 'Обмеження', html: `<ul>
<li>Лише десктоп — додаткові вікна не підтримуються на мобільних/браузерних платформах.</li>
<li>Вікно інструментів використовує тему застосунку (Fluent, Simple, …).</li>
<li>Дерево — знімок: після структурних змін UI натисніть ↻ Refresh (значення властивостей оновлюються наживо).</li></ul>` },
    ],
  },
  rel: {
    title: 'Релізи — AvaDevTools', h: 'Релізи',
    lead: 'Усі версії з нотатками та пакетами. Також на <a href="https://github.com/pavel-zheltiakov/AvaDevTools/releases">GitHub Releases</a> і <a href="https://www.nuget.org/packages/AvaDevTools">NuGet</a>.',
    loading: 'Завантаження історії релізів…', none: 'Релізів ще немає — перший незабаром.',
    view: 'Переглянути на GitHub', fail: 'Не вдалося завантажити список релізів — див.', locale: 'uk-UA',
  },
},

zh: {
  title: 'AvaDevTools — Avalonia 12 免费开发者工具',
  descr: 'Avalonia 12 的免费进程内开发者工具：树检查器、实时属性编辑、样式、3D 视图、事件时间线、日志与源码跳转。按 F12 即可打开。',
  nav: { docs: '文档', releases: '版本', feedback: '反馈' },
  fb: { issues: '报告问题或提出功能建议', tg: '新闻、提问与快速交流' },
  hero: {
    title: '<em>Avalonia 12</em> 的 DevTools。<br>免费、进程内、一键打开。',
    tag: 'Avalonia 12 移除了内置的 F12 工具。AvaDevTools 把它们带了回来 —— 检查器、实时编辑器、样式、3D 视图、事件时间线和日志 —— 全部打包在一个免费 NuGet 包里。',
    get: '快速上手', stories: '看实际效果', copy: '复制',
  },
  video: { h: '实际效果', sub: '真实的工作流：拾取、编辑、溯源、观察事件 —— 从 F12 到修好只要五十秒。' },
  wn: { h: '12.1.1 新特性', docs: '文档 →', notes: '版本历史 →' },
  video2: { h: '智能树，40 秒看懂', sub: '拾取、逐层展开隐藏级别、精确打开折叠、隐藏噪音、Scope 与搜索 —— 一个连贯的工作流。' },
  video3: { h: '值追踪，45 秒看懂', sub: '在整棵树上追踪一个属性：按值着色、实时图例、折叠到变化处、置顶属性行 —— 一个连贯的工作流。' },
  stories: {
    h: '功能演示', wn: 'explain',
    lead: '每个主要功能都是一段循序渐进的图解演示：滚动页面，每个动作都按屏幕上真实发生的顺序展开 —— 节奏由你掌握，无需拖动视频。',
    list: [
      { key: 'explain', h: '🔍 全部讲清楚', sub: '为什么是这个尺寸、值的内部是什么、谁移动了焦点、渐变长什么样 —— 就地作答。',
        steps: [
          { t: '🔍 全部讲清楚',
            d: 'DevTools 能展示每一个值。但值为什么是这样 —— 一个宽度、一次焦点跳动、DataContext 的内部 —— 一直要靠你自己还原。',
            d2: 'Explain everything：Layout 标签页解释元素的尺寸从何而来，任何值都能在检查器中打开，焦点变化落进时间线，渐变画刷有了可视化编辑器。',
            painsTitle: '12.1.1 之前',
            pains: [
              { k: '宽度 349', d: '就这么出现了 —— 没有任何东西说明是谁决定的' },
              { k: 'ViewModel', d: '只是一个类型名，无法看到内部' },
              { k: '焦点', d: '跳到某处，没有任何记录说明原因' },
              { k: '渐变', d: '只显示 LinearGradientBrush，只能盲改' },
            ],
            hook: '一个版本把它们全部讲清楚 —— 尺寸、值、焦点、渐变。',
            hookIco: '🔍' },
          { img: 'story/e02.png', t: '为什么是这个尺寸？', d: 'Layout 标签页还原整个决策：父级给了什么、元素要了什么、哪个约束说了算、对齐又拿剩余空间做了什么。起决定作用的属性直接链接到它被设置的地方，3×3 对齐面板一键修改对齐。' },
          { img: 'story/e03.png', t: '检查任何值', d: 'Properties 里每个引用值都有 🔍 —— DataContext 打开为实时卡片：属性与字段、可继续深入的嵌套对象、👁 时间线观察、跳转 C# 源码。' },
          { img: 'story/e04.png', t: '搜索并固定关注项', d: '大对象也能从容应对：按名称或值搜索成员，固定关心的成员 —— 该类型下次打开只显示它们，其余收在「show all」后面。' },
          { img: 'story/e05.png', t: '焦点的故事', d: '焦点变化落在时间线上，紧挨着引发它们的事件；状态栏始终显示当前焦点元素 —— 打开 follow，树会实时跟随。' },
          { img: 'story/e06.png', t: '可视化编辑渐变', d: '渐变画刷有了真正的编辑器：带取色器的色标、偏移、几何参数、spread 模式 —— 实时预览，边改边生效。' },
        ] },
      { key: 'hold', h: '❄ 定格瞬间', sub: '弹出层、浮出菜单、工具提示与悬停样式 —— 一个手势原地冻结，然后像普通 UI 一样检查。',
        steps: [
          { t: '❄ 定格瞬间',
            d: '工具提示、浮出菜单和悬停样式只在指针托着它们时存在 —— 你一伸手去开检查器，追踪的目标就自己消失了。',
            d2: '一个手势冻结弹出层、浮出菜单、工具提示与悬停样式 —— 在应用呈现关键状态时按 Shift+F12 —— 然后像检查其他元素一样检查被冻结的场景。还有伪类固定面板、一键复制缺陷报告与 Office 风格菜单。',
            painsTitle: '没有 Hold 时',
            pains: [
              { k: '浮出菜单', d: '在第一次点到别处时就关闭' },
              { k: '工具提示', d: '指针一离开立即消失' },
              { k: ':pointerover 样式', d: '等不到检查器打开就没了' },
              { k: '拖拽高亮', d: '只在按住鼠标时存在' },
            ],
            hook: 'Hold 一个手势，把这一切原地冻结。' },
          { img: 'story/h02.png', t: '原地冻结', d: '用 ❄ 按钮设定倒计时 —— 或直接在应用里按 Shift+F12 —— 趁药丸悬浮在窗口上方布置场景。归零那一刻，打开的浮出菜单不再响应焦点：保持原样，冻结保留的每个元素都在树中带上 ❄ 徽章。' },
          { img: 'story/h03.png', t: '走进冻结的场景', d: '弹出层现在就是普通 UI：选中菜单项，查看它的属性、边界和样式 —— 只要冻结还在，什么都不会消失。' },
          { img: 'story/h04.png', t: '固定需要的伪类状态', d: 'Styles 标签页多出一个伪类固定面板：强制 :pointerover、:pressed、:focus 或任何自定义伪类 —— 应用会像鼠标还停在那里一样渲染。' },
          { img: 'story/h05.png', t: '一键复制缺陷报告', d: '📷 把 DPI 正确的截图放入剪贴板 —— 或复制完整报告：伪 XAML 路径、边界和所有非默认属性，直接粘进 issue。' },
          { img: 'story/h06.png', t: '完成后释放', d: '在应用里按 Esc —— 或在 ❄ 菜单选 Unfreeze —— 一切精确恢复原状。自定义倒计时会被记住。' },
        ] },
      { key: 'tree', h: '智能树', sub: '拾取、逐层展开隐藏级别、精确打开折叠、隐藏噪音、Scope 与搜索 —— 一个连贯的工作流。',
        steps: [
          { img: 'story/s01.png', t: '拾取 —— 树自动压缩', d: '点击 ⌖ Pick element，再点击应用中的任意元素。树压缩为窗口、你的视图和目标 —— 中间的包装元素折叠成「⋯ N levels」芯片。' },
          { img: 'story/s02.png', t: '逐级展开', d: '按 Alt+↑，每次只展开一个隐藏级别。' },
          { img: 'story/s03.png', t: '点击折叠芯片…', d: '弹出隐藏元素列表，样式与树一致。' },
          { img: 'story/s04.png', t: '…只显示所选元素', d: '芯片围绕所选项拆分：「⋯ N」+ 元素 +「⋯ M」。' },
          { img: 'story/s05.png', t: '隐藏噪音', d: '按 Delete —— 元素折回原来的芯片。' },
          { img: 'story/s06.png', t: 'Office 风格菜单', d: 'Ancestors、Descendants、Element 与 Copy 子菜单 —— 每个动作都有图标和快捷键；祖先在前，与树的阅读顺序一致。' },
          { img: 'story/s07.png', t: '折叠祖先', d: 'Shift+↑ 保留视图，收起包装元素。' },
          { img: 'story/s08.png', t: 'Scope', d: '任意元素成为根，面包屑随时带你回去。Esc 退出。' },
          { img: 'story/s09.png', t: '搜索', d: '按类型、名称或样式类查找 —— F3 循环匹配。' },
          { img: 'story/s10.png', t: '实时尺寸', d: '应用一变化，尺寸列立即闪烁提示。' },
        ] },
      { key: 'track', h: '值追踪', sub: '在整棵树上追踪一个属性：按值着色、实时图例、折叠到变化处、置顶属性行 —— 一个连贯的工作流。',
        steps: [
          { img: 'story/t01.png', t: '每一行都藏着两个按钮', d: '悬停任意 Properties 行：⊙ track 在整棵树上追踪该值，📌 pin 把该行固定在顶部。' },
          { img: 'story/t02.png', t: '一次点击 —— 整棵树按值着色', d: '追踪 DataContext：MainViewModel 覆盖它所继承到的一切，一座 OrbitViewModel 小岛，null 自成一组。' },
          { img: 'story/t03.png', t: '图例统计一切', d: '树中的每个值都有实时计数 —— 实例还有序号：「OrbitViewModel #1」。' },
          { img: 'story/t04.png', t: '值一变，颜色即变', d: '在运行中的应用里赋第二个 OrbitViewModel：同一类型，独立颜色 —— #2。250 毫秒内重新分类，折叠芯片内也不例外。' },
          { img: 'story/t05.png', t: '折叠到变化处', d: '一次点击，只保留值与父级不同的元素 —— 每一处 DataContext 边界尽在一屏。' },
          { img: 'story/t06.png', t: '置顶你关注的属性', d: '📌 把你的属性浮到列表顶部；其余的收在「Show more」后面。' },
        ] },
      { key: 'timeline', h: '一条时间线：事件、属性、ViewModel', sub: '标记你关心的对象 —— 它的一切都按时间顺序汇入同一条流，因果并排可见。',
        steps: [
          { img: 'story/u01.png', t: '未经允许，不记录任何内容', d: '标记一个滑块、一个按钮和一个 ViewModel —— 观察列表徽章清楚显示时间线能看到什么。' },
          { img: 'story/u02.png', t: '四条泳道，一条时间流', d: '⚡ 路由事件、◆ 属性变化、↻ ViewModel 通知与 ⚠ 绑定错误交织排列 —— 安静时段化作「⋯ +1.2 s」标记。' },
          { img: 'story/u03.png', t: '绑定引发的变化，展开整个绑定', d: '旧值 → 新值、优先级、元数据默认值 —— 还有表达式路径：每一步的实时来源与值。↞ 因果链接指明触发它的通知。' },
          { img: 'story/u04.png', t: '任何实例，即点即查', d: '🔍 打开反射卡片：实时读取属性与字段。👁 随处可把 ViewModel 加入观察列表。' },
          { img: 'story/u05.png', t: '事件自带路由链', d: '路由方向、来源、参数 —— 以及事件冒泡经过的可视链，每个元素都可点击。' },
          { img: 'story/u06.png', t: '事件由你挑选', d: '完整路由事件注册表，带过滤与 Common 预设 —— 只在被观察元素的子树内捕获。' },
        ] },
    ],
  },
  tour: [
    { img: 'tab-properties.png', t: '实时检查与编辑一切',
      lead: '所选元素的每个属性都有类型化编辑器和完整的取值来源。',
      pts: ['附加属性分组、列宽可调、即时过滤',
            '带取色器的色板、分段枚举开关、复选框',
            '来源徽标：✏️ 手动 · 🎨 样式 · ⇡ 继承 —— 点击查看在哪里、如何设置',
            '本地设置的值高亮显示，覆盖一目了然'] },
    { img: 'tab-styles.png', t: '样式与源码跳转',
      lead: '元素的完整级联：主题、带选择器的样式、模板与本地值。',
      pts: ['以实时本地覆盖方式编辑 setter（浏览器 DevTools 风格）',
            'file:line 链接与语法高亮的 XAML 预览',
            '绑定可追溯到 ViewModel 成员 —— 一键跳转编辑器'] },
    { img: 'tab-3d.png', t: '3D 呈现你的 UI',
      lead: '基于实时快照，把窗口展开为带纹理的图层。',
      pts: ['拖动旋转、滚轮缩放、点击图层即在树中选中',
            'Visual · merged、Visual · all 或 Logical 粒度',
            '多余的覆盖层和 z 顺序问题一眼看穿'] },
    { img: 'tab-layout.png', t: '像浏览器一样的盒模型',
      lead: 'margin、border、padding 化为可交互色带 —— 任意一边就地编辑。',
      pts: ['尺寸、min/max、desired、bounds 与对齐一目了然',
            '修改立即作用于正在运行的应用'] },
  ],
  feat: {
    h: 'DevTools 应有的一切', sub: '接入一次，在任意窗口按 F12。',
    cards: [
      { i: '🌳', t: '智能树检查器', d: '像 XAML 一样的树：语法着色、代码式折叠、拾取后的紧凑视图、逐层展开、隐藏、Focus、Scope 与搜索，并有实时尺寸列。' },
      { i: '🎯', t: '值追踪', d: '在整棵树上追踪任意属性：相同值 = 相同颜色，null 独立分组，实时图例带计数 ——「Fold to changes」一次显示所有边界。' },
      { i: '❄', t: '定格瞬间（Hold）', d: 'Shift+F12 冻结应用此刻呈现的一切 —— 打开的弹出层、浮出菜单、工具提示、悬停样式。像普通 UI 一样检查被冻结的场景；Esc 把一切精确还原。Pin states 面板可随时强制 :focus、:disabled 或任意自定义伪类。' },
      { i: '📷', t: '复制为缺陷报告', d: '一次点击把 DPI 精确的截图加上可读的报告 —— 伪 XAML 路径、bounds、非默认属性 —— 放进剪贴板。富文本目标同时粘贴两者，图像目标得到 PNG，纯文本目标得到 markdown。' },
      { i: '🔍', t: '检查任何值', d: 'Properties 面板中的任何对象都能在实时检查器卡片中打开：嵌套值可继续深入，成员可按名称或值搜索，按类型固定成员，👁 加入时间线观察，一键跳转 C# 源码。' },
      { i: '📏', t: '为什么是这个尺寸？', d: 'Layout 标签页还原元素尺寸的由来 —— 父级给了什么、元素要了什么、哪个约束说了算、对齐做了什么 —— 并可跳到起决定作用的值被设置的地方。' },
      { i: '✏️', t: '实时属性编辑', d: '类型化编辑器 —— 复选框、枚举下拉、扁平分段开关 —— 附加属性分组显示，无需重新编译即刻生效。' },
      { i: '📌', t: '置顶属性', d: '把真正关注的属性固定住 —— 它们浮到列表顶部的分组；其余的收在「Show more」后面。按用户持久保存。' },
      { i: '🎨', t: '取色器', d: '每个 Color 和画刷都有色板，并附带完整取色器。渐变画刷有可视化渐变编辑器 —— 色标、几何参数、spread、实时预览。拖动即实时应用。' },
      { i: '📐', t: '布局盒模型', d: '可交互的 margin / border / padding 色带，支持逐边编辑；尺寸、约束与对齐一目了然。' },
      { i: '🧩', t: '样式与值帧', d: '所有生效的样式、主题与本地值，含 setter、优先级和激活状态。编辑即作为实时本地覆盖生效。' },
      { i: '🧊', t: '3D 分层视图', d: '把窗口展开为带纹理的 3D 图层 —— 旋转、缩放、点击选中。支持可视化、合并或逻辑树粒度。' },
      { i: '🔗', t: '跳转到源码', d: '元素、样式、绑定与 ViewModel 的 file:line。语法高亮的 XAML/C# 预览，一键跳转到编辑器。' },
      { i: '⏱', t: '时间线', d: '路由事件、属性变化、VM 通知与焦点变化汇入一条按时间排序的流，范围由你的观察列表决定。因果链接把通知与它产生的绑定更新连在一起；每条记录都可展开完整细节。' },
      { i: '📜', t: '日志查看器', d: '绑定错误、布局与属性系统消息 —— 无需 LogToTrace()。带过滤、批量刷新，杜绝反馈循环。' },
      { i: '📊', t: '渲染器叠加层', d: 'FPS 计数、布局/渲染耗时曲线与脏矩形闪烁，一个开关即可打开。' },
      { i: '🕵️', t: '每个值的来源', d: '一眼看出取值来自默认、手动设置、样式、模板还是继承 —— 并可跳到祖先元素或设置它的那行 XAML。' },
      { i: '🌒', t: 'IDE 风格深色界面', d: '紧凑的 Rider/Unity 风格控件，只作用于工具窗口，绝不影响应用本身的主题。' },
    ],
  },
  quick: { h: '快速开始', sub: '在 App.axaml.cs 里加两行 —— 仅 Debug 生效，Release 不包含任何内容。' },
  footer: { home: '首页', docs: '文档' },
  docs: {
    title: '文档 — AvaDevTools', h: '文档',
    lead: 'Avalonia 12 的免费进程内 DevTools —— 经典 F12 工具的免费替代品。',
    contents: '目录',
    groups: [
      { t: '入门', ids: ['install', 'quickstart'] },
      { t: '功能', ids: ['hold', 'tree', 'tracking', 'layout', 'inspector', 'timeline', 'tabs', 'capture', 'source'] },
      { t: '参考', ids: ['options', 'env', 'limits'] },
    ],
    sections: [
      { id: 'install', t: '安装', html: `<pre><code>dotnet add package AvaDevTools</code></pre>
<p>包面向 <code>net8.0</code>，适用于 Avalonia <strong>12.x</strong>。也可以只在 Debug 下引用：</p>
<pre><code>&lt;PackageReference Include=<span class="s">"AvaDevTools"</span> Condition=<span class="s">"'$(Configuration)' == 'Debug'"</span> /&gt;</code></pre>` },
      { id: 'quickstart', t: '快速开始', html: `<pre><code><span class="k">using</span> AvaDevTools;

<span class="k">public override void</span> Initialize()
{
    AvaloniaXamlLoader.Load(<span class="k">this</span>);
<span class="c">#if DEBUG</span>
    <span class="k">this</span>.AttachAvaDevTools();
<span class="c">#endif</span>
}</code></pre>
<p>也可以只附加到单个窗口：<code>myWindow.AttachAvaDevTools()</code>。在应用窗口中按 <span class="kbd">F12</span> 即可打开。工具窗口默认置顶（工具栏上的 📌 可切换）。</p>
<p>在运行中的应用上按住 <span class="kbd">Ctrl</span>+<span class="kbd">Shift</span>，即可检查指针下的元素 —— 与经典 DevTools 完全一致。</p>
<p>当应用正呈现瞬态状态 —— 打开的浮出菜单、工具提示、悬停样式 —— 按 <span class="kbd">Shift</span>+<span class="kbd">F12</span> 把它冻结后从容检查：见 <a href="#hold">❄ 定格瞬间</a>。</p>` },
      { id: 'hold', t: '❄ 定格瞬间（Hold）', html: `<p>瞬态 UI 最难检查：DevTools 一夺焦点浮出菜单就关闭，指针一离开悬停样式就消失。<b>Hold</b> 把这一切冻结 —— 打开的菜单、悬停状态，都能像普通 UI 一样从容检查。</p>
<h3>第 1 步：冻结瞬间</h3>
<ol class="steps"><li>让应用进入你关心的状态 —— 打开菜单、悬停控件、等工具提示出现。</li>
<li><em>在应用中</em>按 <span class="kbd">Shift</span>+<span class="kbd">F12</span>。</li>
<li>横幅确认 hold 已生效。DevTools 未打开时会自动为你打开。</li></ol>
<div class="shot"><img src="assets/img/docs/hold-held.png" alt="应用带着 ❄ Moment held 横幅，菜单被冻结在打开状态"><span class="cap">你在 DevTools 里工作时菜单保持打开 —— 横幅提醒 hold 正在生效。</span></div>
<p>幕后机制：所有打开的弹出层都禁用 light dismiss —— 即使应用逻辑把某个关掉，hold 也会重新打开它；指针下元素链的伪类（<code>:pointerover</code>、<code>:pressed</code>、<code>:focus</code> 等）在框架清除时会被重新断言。</p>
<h3>第 2 步：检查被冻结的场景</h3>
<p>树折叠到被冻结的场景：弹出层宿主、工具提示宿主及其所有者，每个都带冰蓝 ❄ 徽标和点状下划线。被冻结的弹出层就是普通树内容 —— 走进去、拾取、高亮、检查。</p>
<div class="shot"><img src="assets/img/docs/hold-tree.png" alt="元素树上被冻结的弹出层及其宿主带有 ❄ 徽标"><span class="cap">被冻结的弹出层与宿主带 ❄ 徽标 —— 按 ↻ 后像普通元素一样走进去。</span></div>
<p class="tip"><b>提示：</b>纯悬停的 hold 会替你选中指针下的样式化元素，并直接打开 Styles 选项卡。</p>
<h3>第 3 步：释放</h3>
<p>一切原子释放 —— 在应用中按 <span class="kbd">Esc</span>、工具栏 ❄ 开关或关闭 DevTools。每个被强制的值都从台账中恢复；自检确保完全还原。</p>
<h3>来不及按手势？❄ 按钮会倒计时</h3>
<p>点进 DevTools 的那一刻，应用的弹出层已经关掉了 —— 所以 ❄ 工具栏按钮无法当场冻结。它改为弹出选择：<b>5 秒 / 10 秒 / 30 秒 / 自定义</b>。</p>
<div class="shot"><img src="assets/img/docs/hold-chooser.png" alt="❄ 按钮的选择菜单：Unfreeze、预设与自定义倒计时"><span class="cap">选一个延时 —— 自定义时长会被记住，成为一键预设。</span></div>
<p>焦点交还应用，横幅开始倒计时，你重新布置场景 —— 再次打开菜单、悬停控件 —— hold 自行启动。应用内的手势仍是即时通道。</p>
<div class="shot"><img src="assets/img/docs/hold-countdown.png" alt="实时应用上方的倒计时横幅：Freezing in 2 — set the scene"><span class="cap">"❄ Freezing in 2…" —— 布置好场景，倒计时结束 hold 即生效。</span></div>
<h3>Pin states（固定伪类）</h3>
<p>Styles 选项卡的 <b>📌 Pin states</b> 面板无需改动应用逻辑即可强制伪类：它扫描元素应用的样式，只列出它们真正响应的状态 —— <code>:disabled</code>、<code>:focus</code>，以及主题定义的任意自定义状态。</p>
<div class="shot"><img src="assets/img/docs/hold-pinstates.png" alt="Pin states 面板列出 :pointerover、:pressed、:focus 等状态"><span class="cap">只列出元素真正响应的状态 —— ● 标记当前激活的。</span></div>
<p>被固定的元素在树行上有 📌；固定与 ❄ 共用恢复台账，释放即全部还原。</p>` },
      { id: 'tree', t: '智能树检查器', html: `<p>树面板是只读的「代码编辑器」视图：元素渲染为语法着色的伪 XAML 行（<code>&lt;Button x:Name="Save" Classes="primary"&gt;</code>），带折叠箭头、缩进参考线和实时 <b>Size</b> 列（元素变化时闪烁）。两种模式与 Avalonia 完全一致：<b>Visual tree</b>（<code>GetVisualChildren</code>，默认）和 <b>Logical tree</b>（<code>GetLogicalChildren</code>）。</p>
<h3>第 1 步：拾取元素</h3>
<ol class="steps"><li>点 <b>⌖</b> 后在应用中拾取 —— 或直接在应用上按住 <span class="kbd">Ctrl</span>+<span class="kbd">Shift</span>。</li>
<li>树重建为紧凑视图：窗口、路径上的用户控件、拥有所选模板部件的控件，以及元素本身。</li></ol>
<div class="shot"><img src="assets/img/docs/tree-compact.png" alt="紧凑树：MainWindow、⋯ 9 levels 芯片、被拾取的元素"><span class="cap">中间所有包装元素折叠成 <code>⋯ N levels</code> 芯片 —— 深树只剩几行。</span></div>
<h3>第 2 步：只展开你需要的</h3>
<p>单击芯片会弹出隐藏元素列表（同样语法着色）—— 选择一个就只显示它：<code>⋯ 7 levels</code> 变为 <code>⋯ N</code> + 元素 + <code>⋯ M</code>。双击展开整个芯片。</p>
<div class="shot"><img src="assets/img/docs/tree-chip.png" alt="芯片选择器列出被隐藏的包装元素"><span class="cap">点芯片，从隐藏链中挑一个元素 —— 其余保持折叠。</span></div>
<p><b>Alt+↑/↓</b> 逐级跳到父/子元素，每次只展开一个隐藏级别（选中行显示 ▲▼ 按钮，👁 眼睛表示该步会展开隐藏内容）。<b>Delete</b> 把选中元素折回芯片，相邻芯片自动合并。</p>
<h3>第 3 步：用菜单塑形树</h3>
<p>右键菜单读起来像 Word 的菜单：每个动作一枚单色图标、标签按图标列对齐、快捷键排在手势列，大块的组收进 <b>Ancestors</b>、<b>Descendants</b>、<b>Element</b> 与 <b>Copy</b> 子菜单 —— 祖先在前，符合树先上后下的阅读顺序。</p>
<div class="shot"><img src="assets/img/docs/tree-menu.png" alt="树的右键菜单：Ancestors、Descendants、折叠、隐藏、Focus、Scope 与复制操作"><span class="cap">塑形树的一切都在这个菜单里 —— 一级/全部、折叠成 ⋯、保留视图、隐藏、Focus、Scope、复制。</span></div>
<h3>Focus 与 Scope</h3>
<p><b>Focus</b>（F）折叠所选元素路径之外的一切；Esc 恢复。<b>Scope</b>（S）把任意元素设为树根 —— 带可点击面包屑、上一级按钮，Esc 退出。拾取 scope 之外的元素会自动退出。</p>
<h3>键盘</h3>
<table><tr><th>按键</th><th>动作</th></tr><tr><td><code>↑ ↓</code></td><td>移动选择</td></tr><tr><td><code>← →</code></td><td>折叠 / 展开，跳到父级 / 第一个子级</td></tr><tr><td><code>Space</code></td><td>切换折叠</td></tr><tr><td><code>Enter</code></td><td>展开芯片 · 打开属性</td></tr><tr><td><code>Alt+↑ / Alt+↓</code></td><td>逐级跳到父/子元素，只展开一个隐藏级别</td></tr><tr><td><code>Delete</code></td><td>把元素隐藏进 ⋯ 芯片</td></tr><tr><td><code>Ctrl+↑ / Ctrl+↓</code></td><td>结构父级 / 子级（多个时弹出选择）</td></tr><tr><td><code>Ctrl+← / Ctrl+→</code></td><td>上一个 / 下一个兄弟元素</td></tr><tr><td><code>Shift+→</code></td><td>显示所有级别</td></tr><tr><td><code>Shift+←</code></td><td>把后代折叠成 ⋯</td></tr><tr><td><code>Shift+↓</code></td><td>折叠后代，保留视图</td></tr><tr><td><code>Shift+↑</code></td><td>折叠祖先，保留视图</td></tr><tr><td><code>Ctrl+Shift+↑</code></td><td>折叠祖先 —— 全部</td></tr><tr><td><code>Ctrl+Shift+↓</code></td><td>折叠后代，保留一级</td></tr><tr><td><code>F / S / Esc</code></td><td>Focus / Scope / 退出</td></tr><tr><td><code>Ctrl+F, F3</code></td><td>搜索，下一个匹配</td></tr><tr><td><code>Ctrl+C / Ctrl+Shift+C / Ctrl+E</code></td><td>复制路径 / 复制为 XAML / 在编辑器打开</td></tr></table>` },
      { id: 'tracking', t: '值追踪与置顶属性', html: `<p>「我的 DataContext 在哪里断了？」—— 通常要在元素间点上一个小时。值追踪一屏作答：按任意属性的值给整棵树着色，一眼看出它在哪里变了。</p>
<h3>第 1 步：开始追踪</h3>
<p>悬停 Properties 选项卡中的任意行，会出现两个按钮：<b>⊙ track</b> 和 <b>📌 pin</b>。点 <b>⊙</b>。</p>
<div class="shot"><img src="assets/img/docs/track-buttons.png" alt="悬停时的属性行，值旁边显示 ⊙ track 按钮"><span class="cap">悬停行即出现 ⊙ track 按钮 —— 这里是 DataContext。</span></div>
<h3>第 2 步：读这棵着色的树</h3>
<p>每个元素获得一条边栏色带和下划线 —— <em>相同值 = 相同颜色</em>。字符串和值类型按相等性比较；引用值（ViewModel！）按实例比较，标注为 <code>OrbitViewModel #1</code> 这样的名字。<code>null</code> 和「无此属性」各有独立分组。折叠的 <code>⋯</code> 芯片最多叠放三种其隐藏内容的颜色 —— 什么都藏不住。</p>
<div class="shot"><img src="assets/img/docs/track-legend.png" alt="按 DataContext 着色的树与实时统计每组的图例"><span class="cap">树下方的图例实时统计每个分组。</span></div>
<p>运行中的应用改变了值 —— 即使在屏幕外或折叠芯片内 —— 也会在 250&nbsp;毫秒内重新分类。（普通 CLR 属性没有变更通知，需 ↻ Refresh 后重新分类。）</p>
<h3>第 3 步：Fold to changes</h3>
<p><b>Fold to changes</b>（图例中的按钮）把树折叠到追踪值与父级不同的那些元素 —— 断点一屏尽收。✕ 停止追踪。</p>
<div class="shot"><img src="assets/img/docs/track-fold.png" alt="树折叠到被追踪的 DataContext 发生变化的元素"><span class="cap">只留下值发生变化的元素 —— 丢了 DataContext 的卡片一眼可见。</span></div>
<h3>置顶你关注的属性</h3>
<p><b>📌 pin</b> 把属性放进列表顶部的 <b>Pinned</b> 分组；其余属性收在「Show more」后面。按名称生效（把 <code>Text</code> 固定一次，对所有元素类型都固定），所有 DevTools 窗口共享，并按用户持久保存。</p>
<div class="shot"><img src="assets/img/docs/track-pinned.png" alt="Properties 列表顶部的 Pinned 分组，下方是 Show 234 more properties"><span class="cap">你关注的属性始终在顶部；其余 234 个收在「Show more」后面。</span></div>` },
      { id: 'layout', t: 'Layout：为什么是这个尺寸？', html: `<p>一个元素宽 349 像素，屏幕上却没有任何东西告诉你这是谁决定的。<b>Layout</b> 标签页展示经典的可交互盒模型 —— 然后一步一步解释这个尺寸。</p>
<h3>读盒模型</h3>
<p>margin / border / padding 逐边可编辑，随控件重新布局实时更新。下方是尺寸、min/max、desired 与 bounds —— 以及 <b>3×3 对齐面板</b>，一键设置水平与垂直对齐；<b>Stretch H</b> / <b>Stretch V</b> 按轴切换拉伸。</p>
<div class="shot"><img src="assets/img/docs/layout-box.png" alt="可交互盒模型：可编辑的 margin、border、padding、对齐面板与尺寸摘要"><span class="cap">编辑任意区带或点击对齐面板 —— 运行中的应用立即跟上。</span></div>
<h3>「Why this size?」的四个步骤</h3>
<p>Avalonia 按固定顺序确定元素尺寸，卡片逐步讲述：<b>1. 父级给出约束</b> —— 从上传下来的限制（垂直 StackPanel 提供无限高度，Grid 单元格提供自己的槽位）；<b>2. 元素提出期望</b> —— 为内容测量出的大小；<b>3. 应用约束</b> —— Width/Height 与 Min/Max 对测量值的钳制；<b>4. 对齐安放</b> —— Stretch、Center 或靠边如何使用剩余空间。</p>
<div class="shot"><img src="assets/img/docs/layout-card.png" alt="Why this size? 卡片讲述四个布局步骤，每个轴一个结论"><span class="cap">每个轴都有指出决定因素的结论 —— 这里宽度由 Stretch 填满父级槽位决定，高度由内容决定。</span></div>
<p>起决定作用的属性显示为徽章 —— 点击即可看到<em>该值在哪里被设置</em>，与 Properties 标签页相同的来源卡片。若由父级决定，其名称直接链接到树中。</p>
<p class="tip"><b>提示：</b>经典陷阱都有提示：Auto 行里的 Stretch、忽略对齐的 Canvas、StackPanel 的堆叠轴。</p>
<h3>对齐面板</h3>
<p>盒模型视图中的 3×3 面板一键设置对齐；<b>Stretch H</b> / <b>Stretch V</b> 按轴切换拉伸。修改立即生效 —— 配合解释卡片，你能看到尺寸如何反应、结论如何就地更新。</p>` },
      { id: 'inspector', t: '检查任何值', html: `<p>Properties 面板里的 ViewModel 通常只是一个类型名。实例检查器把它打开 —— 而且同一张卡片服务整个工具：Properties 中的每个<b>引用值</b>都在值列显示 🔍，时间线上提到的每个实例（事件参数、新旧值、绑定路径来源、ViewModel）也以同样方式打开。</p>
<h3>第 1 步：深入一个值</h3>
<p>点 🔍，卡片通过反射实时读取<b>属性与字段</b>（抛异常的 getter 显示为 ⚠），上方是类型名与完整类型名。嵌套对象与集合可继续深入 —— 卡片以浮出层叠放，返回的路径始终敞开。</p>
<div class="shot"><img src="assets/img/story/e03.png" alt="DataContext 行深入为实时的 DeploymentViewModel 卡片"><span class="cap">DataContext 打开为实时卡片 —— 嵌套对象与集合继续深入。</span></div>
<p>在任意卡片上，<b>👁 observe</b> 把 ViewModel 加入时间线观察列表，<b>C# source</b> 在编辑器中打开类型声明。</p>
<h3>第 2 步：搜索并固定关键成员</h3>
<ul><li><b>搜索</b> —— 成员超过十个的卡片会出现过滤框，同时匹配成员名<em>和</em>值文本。</li>
<li><b>Show more</b> —— 长成员列表收在「show N more」链接后面，而不是一墙的行。</li>
<li><b>按类型固定</b> —— 悬停某行即可固定：有固定成员的类型打开时<em>只显示它们</em>，其余收在「show all N」后面。固定按具体类型生效，持续到应用会话结束。</li></ul>
<div class="shot"><img src="assets/img/story/e04.png" alt="重新打开的卡片只显示三个被固定的成员，附 show all 链接"><span class="cap">有固定成员的类型打开时只显示它们 —— 其余一键展开。</span></div>
<h3>安全的设计</h3>
<p>值在卡片打开时读取，实例以弱引用持有 —— 检查不会延长你对象的生命周期。</p>` },
      { id: 'timeline', t: '时间线', html: `<p><b>Timeline</b> 选项卡把路由事件、属性变化、ViewModel 通知、焦点变化与绑定错误交织成一条按时间排序的流 —— 「滑块动了、VM 通知了、绑定写入了值」读起来是三条相邻的行，而不是三个各自为政的工具。</p>
<h3>第 1 步：建立观察列表</h3>
<p>观察列表为空时不记录任何内容。随处都能添加：</p>
<ol class="steps"><li>在树中右键元素 → <b>Observe in Timeline</b>（或 <b>Observe DataContext</b>）。</li>
<li>或点 <b>＋ whole window</b>，一次观察整个窗口。</li>
<li>或在任意检查器卡片中点 👁。</li></ol>
<h3>第 2 步：读这条流</h3>
<div class="shot"><img src="assets/img/docs/tl-feed.png" alt="时间线流：观察芯片、泳道开关，事件、变化与通知交织的行"><span class="cap">Watching 芯片在上，泳道开关在工具栏，安静时段折叠为 ⋯ +N s 标记。</span></div>
<ul><li><b>⚡ 事件</b> —— 从注册表中挑选的路由事件（Common 预设自动启用），来源位于被观察元素的子树内。</li>
<li><b>◆ 属性变化</b> —— 被观察元素的 styled / attached / direct 属性：old → new、优先级，值来自绑定时标注 <em>⇠ binding</em>。高频属性（Bounds、IsPointerOver 等）默认隐藏，除非勾选 "Noisy"。</li>
<li><b>↻ 通知</b> —— 被观察 ViewModel 的 <code>INotifyPropertyChanged</code>，附带最新值。</li>
<li><b>◉ 焦点</b> —— 应用中的每次焦点变化，无需任何观察列表：谁失去焦点、谁得到焦点。</li>
<li><b>⚠ 绑定错误</b> —— 直接来自 Avalonia 日志。</li></ul>
<p>当 VM 通知引发绑定更新时，属性行会标注其原因：<em>↞ TelemetryViewModel.Throttle</em>。</p>
<h3>第 3 步：打开细节</h3>
<p>点击任意行。事件显示路由方向、来源以及事件经过的可视链 —— 每个元素都可点击。属性变化显示种类、优先级、元数据默认值；对绑定属性还有<b>完整的绑定</b>：路径上每一步的实时来源与值、转换器及参数、fallback 与字符串格式 —— 每次打开面板都实时重读；MultiBinding 递归展开。</p>
<div class="shot"><img src="assets/img/docs/tl-binding.png" alt="绑定属性变化的细节面板：新旧值、原因与绑定逐步展开"><span class="cap">来自绑定的变化带着它的原因和完整的绑定 —— 每一步都有实时来源与值。</span></div>
<p><b>🔍 打开实例检查器</b>：时间线上任何实例 —— 事件参数、新旧值、路径来源、转换器、ViewModel：见<a href="#inspector">检查任何值</a>。所有对象以弱引用持有 —— 时间线不会延长你对象的生命周期。</p>
<h3>焦点的故事</h3>
<p>焦点变化始终被捕获 —— 无需观察列表。◉ 行显示谁失去焦点、谁得到焦点，与引发这次移动的点击和事件交织在一起。</p>
<div class="shot"><img src="assets/img/docs/tl-focus.png" alt="时间线上的焦点行与 GotFocus、LostFocus 事件及 Button.Click 交织"><span class="cap">Focus (none) → Slider → Button —— 引发它的点击就夹在中间。</span></div>
<p>状态栏始终显示当前焦点元素（点击即在树中选中），<b>follow</b> 开关让树一路跟随，并在应用中画出焦点环。</p>
<div class="shot"><img src="assets/img/docs/tl-status.png" alt="状态栏显示当前焦点元素，旁边是 follow 开关"><span class="cap">状态栏永远回答「现在焦点在谁那里？」</span></div>
<p>Pause 暂停捕获，泳道与文本过滤流内容，记录有上限并批量渲染，安静时段显示为 <code>⋯ +N s</code> 标记。</p>` },
      { id: 'tabs', t: '选项卡', html: `<h3>Properties（属性）</h3>
<ul><li>Styled、direct、attached（按 📎 所有者分组）以及普通 CLR 属性。</li>
<li>悬停属性行可见 <b>⊙ track</b> 与 <b>📌 pin</b> —— 见<a href="#tracking">值追踪与置顶属性</a>。</li>
<li>类型化编辑器：复选框、枚举下拉、分段开关、带取色器的色板、等宽文本框（Enter 提交，Escape 还原）。渐变画刷打开<b>渐变编辑器</b> —— 色标、几何参数、spread 模式、实时预览。</li>
<li>引用值显示 🔍 —— 值在<a href="#inspector">实例检查器</a>中打开。</li>
<li><strong>Source 列</strong>：∅ 默认 · ✏️ 手动设置 · 🎨 样式 · ⧉ 模板 · ⇡ 继承。点击徽标可查看该值<em>在哪里、如何</em>被设置 —— 包括样式的 setter、file:line 和高亮 XAML 片段；对绑定则显示绑定标记并可跳到 ViewModel 成员。</li>
<li>点击属性名可查看元数据（声明者、默认值、是否继承）、复制名称/值、以及它在你代码中的声明位置。</li>
<li>列宽可调 —— 在表头之间拖动即可。</li></ul>
<div class="shot"><img src="assets/img/docs/props-source.png" alt="来自样式的 Background 的来源弹窗：样式、setter 与优先级"><span class="cap">点击 Source 徽标，弹窗说出样式、setter 以及它住在哪里。</span></div>
<h3>Layout（布局）</h3><ul><li>可交互盒模型、3×3 对齐面板与「Why this size?」解释卡片 —— 见 <a href="#layout">Layout：为什么是这个尺寸？</a>。</li></ul>
<h3>Styles（样式）</h3><ul><li>所有生效的值帧 —— 控件主题、带选择器的样式、模板与本地值 —— 含 setter、优先级与激活状态。</li>
<li>标题栏显示元素的完整选择器（<code>Type#name.classes</code>，含 <code>/template/</code> 链）并附复制按钮；setter 过滤器把值帧缩小到匹配的 setter 并展开幸存者。</li>
<li>编辑以实时本地覆盖生效（浏览器 DevTools 语义）；本地值带 ✕ 清除按钮。</li>
<li><b>📌 Pin states</b> —— 无需改动应用逻辑即可强制 <code>:disabled</code>、<code>:focus</code> 或元素样式响应的任意自定义伪类。见 <a href="#hold">❄ 定格瞬间</a>。</li>
<li>元素与每个样式都有 file:line 链接；⟨⟩/▤/{} 徽章可打开代码预览。</li></ul>
<h3>3D</h3><ul><li>基于实时快照纹理的 3D 分层视图。拖动旋转、滚轮缩放、点击图层即在树中选中。</li>
<li>粒度：<em>Visual · merged</em>（折叠包装层）、<em>Visual · all</em> 或 <em>Logical</em>。"Reset view" 复位相机。</li></ul>
<div class="shot"><img src="assets/img/docs/view-3d.png" alt="窗口可视图层的 3D 分层视图"><span class="cap">实时窗口的 141 个图层，可旋转 —— 点击任意图层即在树中选中。</span></div>
<h3>Timeline（时间线）</h3><ul><li>事件、属性变化、VM 通知、焦点变化与绑定错误汇入一条流，范围由观察列表决定 —— 带因果链接、绑定逐步展开与实例检查器。见<a href="#timeline">时间线</a>。</li></ul>
<h3>Logs（日志）</h3><ul><li>实时 Avalonia 日志，支持暂停、级别、区域与文本过滤。默认捕获 Warning 及以上。工具自身产生的日志会被丢弃、UI 批量刷新 —— 不会出现反馈循环卡死。</li></ul>` },
      { id: 'capture', t: '截图与缺陷报告', html: `<p>「发我一张截图和 XAML 路径」在这里是一次点击 —— 元素、它的 bounds 和与默认值不同的属性，随图片一起上路。</p>
<h3>第 1 步：选择要复制的内容</h3>
<p><b>📷 工具栏按钮</b>两次点击即可 —— <em>Copy screenshot</em> 或 <em>Copy report (screenshot + XAML)</em> —— 捕获选中元素或整个窗口。同样的操作也在树右键菜单的 <b>Copy ▸</b> 下：<b>Path</b>（<span class="kbd">Ctrl+C</span>）、<b>As XAML</b>（<span class="kbd">Ctrl+Shift+C</span>）、<b>Screenshot</b> 与 <b>As bug report</b>。</p>
<div class="shot"><img src="assets/img/docs/capture-chooser.png" alt="📷 选择器：Copy screenshot，或 Copy report — screenshot + XAML"><span class="cap">两次点击：只要图片，或图片加一份可读报告。</span></div>
<h3>第 2 步：随处粘贴</h3>
<p><b>Copy as bug report</b> 把元素的 DPI 精确 PNG <em>加上</em>可读报告 —— 伪 XAML 路径、bounds、与默认值不同的属性 —— 以三种格式同时放进剪贴板：富文本目标（如邮件撰写窗口）把截图和细节一起粘贴，仅图像目标得到 PNG，纯文本目标得到 markdown。贴进 issue，读起来是报告，不是谜语。</p>
<p class="tip"><b>提示：</b>配合 <a href="#hold">❄ Hold</a>，弹出层和悬停状态也能捕获。</p>` },
      { id: 'source', t: '跳转到源码', html: `<p>源码位置来自 XAML 编译器的 <code>AvaloniaXamlCreateSourceInfo</code>（Avalonia 12 在 Debug 构建中默认开启）。C# 类型（ViewModel）通过在解决方案目录中搜索定位。macOS 下默认用 JetBrains Rider 打开，可自定义：</p>
<pre><code>AVA_DEVTOOLS_EDITOR=<span class="s">"code --goto {file}:{line}"</span></code></pre>
<p>编译进主题程序集的 Fluent 样式在磁盘上没有源码 —— 弹窗会显示反射信息，并给出与你的 Avalonia 版本匹配的 "View theme XAML on GitHub" 链接。</p>` },
      { id: 'options', t: '选项', html: `<pre><code><span class="k">this</span>.AttachAvaDevTools(<span class="k">new</span> DevToolsOptions
{
    Gesture              = <span class="k">new</span> KeyGesture(Key.F11),                     <span class="c">// 默认：F12</span>
    HoldGesture          = <span class="k">new</span> KeyGesture(Key.F11, KeyModifiers.Shift), <span class="c">// ❄ hold — 默认：Shift+F12</span>
    HoldCountdownSeconds = 5,                                  <span class="c">// ❄ 按钮倒计时 — 默认：3</span>
    WindowSize           = <span class="k">new</span> Size(1280, 760),
    StayOnTop            = <span class="k">false</span>,                              <span class="c">// 默认：true</span>
});</code></pre>` },
      { id: 'env', t: '环境变量', html: `<table>
<tr><th>变量</th><th>含义</th></tr>
<tr><td><code>AVA_DEVTOOLS_AUTO_OPEN=1</code></td><td>窗口加载时自动打开 DevTools。</td></tr>
<tr><td><code>AVA_DEVTOOLS_TAB=3D</code></td><td>打开时预选某个选项卡（任意标签名）。</td></tr>
<tr><td><code>AVA_DEVTOOLS_EDITOR</code></td><td>编辑器命令模板，支持 <code>{file}</code> / <code>{line}</code>。</td></tr>
<tr><td><code>AVA_DEVTOOLS_SRC_ROOT</code></td><td>自动探测失败时的源码根目录。</td></tr>
<tr><td><code>AVA_DEVTOOLS_LOG_LEVEL=Verbose</code></td><td>日志捕获的初始级别。</td></tr>
</table>` },
      { id: 'limits', t: '限制', html: `<ul>
<li>仅桌面端 —— 移动/浏览器平台不支持辅助窗口。</li>
<li>工具窗口使用宿主应用已加载的主题（Fluent、Simple 等）。</li>
<li>树是快照 —— UI 结构变化后请点 ↻ Refresh（属性值本身是实时更新的）。</li></ul>` },
    ],
  },
  rel: {
    title: '版本历史 — AvaDevTools', h: '版本历史',
    lead: '所有版本及其说明和可下载的包。另见 <a href="https://github.com/pavel-zheltiakov/AvaDevTools/releases">GitHub Releases</a> 和 <a href="https://www.nuget.org/packages/AvaDevTools">NuGet</a>。',
    loading: '正在加载版本历史…', none: '暂无版本 —— 首个版本即将发布。',
    view: '在 GitHub 上查看', fail: '无法加载版本列表 —— 请见', locale: 'zh-CN',
  },
},
};
