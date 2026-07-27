// AvaDevTools site string resources. One object per language; site.js applies them.
window.I18N = {

en: {
  title: 'AvaDevTools — free DevTools for Avalonia 12',
  descr: 'Free in-process developer tools for Avalonia 12: tree inspector, live property editing, styles, 3D view, events, logs and go-to-source. Press F12.',
  nav: { features: 'Features', docs: 'Documentation', videos: 'Videos', releases: 'Releases' },
  hero: {
    title: 'DevTools for <em>Avalonia 12</em>.<br>Free. In-process. One key away.',
    tag: 'The built-in F12 tools are gone in Avalonia 12. AvaDevTools brings them back — inspector, live editors, styles, 3D view, events and logs — as a single free NuGet package.',
    get: 'Get started', watch: '▶ Watch the demo', copy: 'copy',
  },
  video: { h: 'See it in action', sub: 'A real workflow: pick, edit, trace, watch events fire — fifty seconds from F12 to fixed.' },
  wn: { h: "What's New in 12.0.3 — value tracking", videos: 'All videos →', notes: 'Version history →' },
  video2: { h: 'The smart tree, in 40 seconds', sub: 'Pick, peel hidden levels, open folds precisely, hide noise, scope and search — one continuous workflow.' },
  video3: { h: 'Value tracking, in 45 seconds', sub: 'Track one property across the whole tree: colors by value, a live legend, fold-to-changes and pinned rows — one continuous workflow.' },
  story: [
    { img: 'story/t01.png', t: 'Two hidden buttons on every row', d: 'Hover any Properties row: ⊙ track follows the value across the tree, 📌 pin keeps the row on top.' },
    { img: 'story/t02.png', t: 'One click — the tree, colored by value', d: 'Track DataContext: the MainViewModel everywhere it inherits, an OrbitViewModel island, null in its own bucket.' },
    { img: 'story/t03.png', t: 'A legend that counts everything', d: 'Every value in the tree with a live count — and instances get ordinals: "OrbitViewModel #1".' },
    { img: 'story/t04.png', t: 'Values change — colors follow', d: 'A second OrbitViewModel assigned in the running app: same type, its own color — #2. Re-classified within 250 ms, even inside folded chips.' },
    { img: 'story/t05.png', t: 'Fold to changes', d: 'One click keeps only the elements where the value differs from its parent — every DataContext boundary on one screen.' },
    { img: 'story/t06.png', t: 'Pin what you watch', d: '📌 floats your properties to the top of the list; the rest waits behind "Show more".' },
  ],
  tour: [
    { img: 'tab-track.png', t: 'Track any value across the tree',
      lead: 'The classic MVVM question — "where did my DataContext break?" — answered in one click.',
      pts: ['⊙ track on any Properties row colors the whole tree: same value = same color, null and "no such property" get their own buckets',
            'A legend under the tree counts every value bucket, live; folded ⋯ chips stack the colors they hide',
            'Values changed in the running app re-classify within 250 ms — even off-screen or inside folds',
            '"Fold to changes" keeps only the elements where the value changes; 📌 pins your properties to the top of the list'] },
    { img: 'tab-tree.png', t: 'A tree that reads like XAML',
      lead: 'The smart tree inspector: syntax-colored elements, code-style folding and a live size column that flashes on change.',
      pts: ['Pick an element — the tree compacts to your window, your views and the target; wrappers fold into "⋯ N levels" chips',
            'Step hidden levels one at a time (Alt+↑/↓) or click a fold and choose exactly which element to reveal',
            'Hide any element with Delete — it folds back into the chip it came from',
            'Focus, Scope with breadcrumbs, search with F3 cycling, and a symmetric menu that shows every shortcut'] },
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
    { img: 'tab-events.png', t: 'Events and logs, tamed',
      lead: 'Watch routed events finish routing and read Avalonia’s own logs.',
      pts: ['Full event registry with a Common preset, source + handled state',
            'Log viewer with level/area/text filters — feedback-loop safe'] },
  ],
  feat: {
    h: 'Everything you expect from DevTools', sub: 'Attach once, press F12 in any window.',
    cards: [
      { i: '🌳', t: 'Smart tree inspector', d: 'A tree that reads like XAML: syntax colors, code-style folding, a compact pick view, one-level stepping, hide, focus, scope and search — with live sizes.' },
      { i: '🎯', t: 'Value tracking', d: 'Track any property across the whole tree: same value = same color, null in its own bucket, a live legend with counts — and "Fold to changes" shows every boundary at once.' },
      { i: '✏️', t: 'Live property editing', d: 'Typed editors — checkboxes, enum dropdowns, flat segmented switches — grouped attached properties, and instant visual feedback without rebuilds.' },
      { i: '📌', t: 'Pinned properties', d: 'Pin the properties you actually watch — they float to a group at the top of the list; everything else waits behind "Show more". Persisted per user.' },
      { i: '🎨', t: 'Color picker', d: 'Every Color and brush gets a swatch with a full color picker flyout. Changes apply live as you drag.' },
      { i: '📐', t: 'Layout box model', d: 'Interactive margin / border / padding bands with per-side editing, plus size, constraints and alignment at a glance.' },
      { i: '🧩', t: 'Styles & value frames', d: 'Every applied style, theme and local value with its setters, priority and active state. Edit setter values as live local overrides.' },
      { i: '🧊', t: '3D exploded view', d: 'Your window as textured layers in 3D — orbit, zoom, click to select. Visual, merged or logical tree granularity.' },
      { i: '🔗', t: 'Go to source', d: 'file:line for elements, styles, bindings and view models. Syntax-highlighted XAML/C# previews and one-click jump to your editor.' },
      { i: '⚡', t: 'Events inspector', d: 'Pick routed events from the full registry and watch them finish routing: source, timestamp and final handled state.' },
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
<p>Hold <span class="kbd">Ctrl</span>+<span class="kbd">Shift</span> over the running app to inspect the element under the pointer — exactly like the classic DevTools.</p>` },
      { id: 'tree', t: 'Smart tree inspector', html: `<p>The tree panel is a read-only, code-editor-style view of your UI: elements render as syntax-colored pseudo-XAML lines (<code>&lt;Button x:Name="Save" Classes="primary"&gt;</code>) with fold chevrons, indent guides and a live <b>Size</b> column that flashes when an element changes. Two modes match Avalonia exactly: <b>Visual tree</b> (<code>GetVisualChildren</code>, default) and <b>Logical tree</b> (<code>GetLogicalChildren</code>).</p>
<h3>Compact pick</h3>
<p>Picking an element (the ⌖ button or Ctrl+Shift over the app) rebuilds the tree into a compact view: the window, your user controls on the path, the control owning the picked template part, and the element itself. Every run of wrappers in between folds into a <code>⋯ N levels</code> chip — a deep tree becomes a handful of lines.</p>
<h3>Folds are first-class</h3>
<p>A single click on a chip opens a picker listing the hidden elements in the same syntax-colored style — choose one and only it is revealed: <code>⋯ 7 levels</code> becomes <code>⋯ N</code> + element + <code>⋯ M</code>. A double click expands the whole chip. <b>Alt+↑/↓</b> steps to the visual parent or child, peeling exactly one hidden level (the selected line shows ▲▼ step buttons — an 👁 eye marks steps that reveal something hidden). <b>Delete</b> hides the selected element back into a chip; adjacent chips merge.</p>
<h3>Shaping the tree</h3>
<p>The context menu is symmetric — a Descendants group, an Ancestors group and an Element group, every action with its shortcut displayed: show one level / all levels, fold into ⋯, fold keeping views (only your user controls stay visible below), collapse ancestors keeping views or entirely, hide, focus, scope.</p>
<h3>Focus &amp; Scope</h3>
<p><b>Focus</b> (F) folds everything off the path to the selected element; Esc restores the previous state. <b>Scope</b> (S) re-roots the tree at any element, with clickable breadcrumbs, a scope-up button and Esc to leave. Picking an element outside the scope leaves it automatically.</p>
<h3>Keyboard</h3>
<table><tr><th>Keys</th><th>Action</th></tr><tr><td><code>↑ ↓</code></td><td>move selection</td></tr><tr><td><code>← →</code></td><td>fold / unfold, go to parent / first child</td></tr><tr><td><code>Space</code></td><td>toggle fold</td></tr><tr><td><code>Enter</code></td><td>expand a chip · open Properties</td></tr><tr><td><code>Alt+↑ / Alt+↓</code></td><td>step to parent / child, revealing one hidden level</td></tr><tr><td><code>Delete</code></td><td>hide the element into a ⋯ chip</td></tr><tr><td><code>Ctrl+↑ / Ctrl+↓</code></td><td>structural parent / child (chooser when several)</td></tr><tr><td><code>Ctrl+← / Ctrl+→</code></td><td>previous / next sibling</td></tr><tr><td><code>Shift+→</code></td><td>show all levels</td></tr><tr><td><code>Shift+←</code></td><td>fold descendants into ⋯</td></tr><tr><td><code>Shift+↓</code></td><td>fold descendants, keep views</td></tr><tr><td><code>Shift+↑</code></td><td>collapse ancestors, keep views</td></tr><tr><td><code>Ctrl+Shift+↑</code></td><td>collapse ancestors — all</td></tr><tr><td><code>Ctrl+Shift+↓</code></td><td>collapse descendants, keep one level</td></tr><tr><td><code>F / S / Esc</code></td><td>focus / scope / exit</td></tr><tr><td><code>Ctrl+F, F3</code></td><td>search, next match</td></tr><tr><td><code>Ctrl+C / Ctrl+Shift+C / Ctrl+E</code></td><td>copy path / copy as XAML / open in editor</td></tr></table>` },
      { id: 'tracking', t: 'Value tracking & pinned properties', html: `<p>Hover any row in the Properties tab and two buttons appear: <b>⊙ track</b> and <b>📌 pin</b>.</p>
<h3>Track a value across the tree</h3>
<p><b>⊙ track</b> colors the whole tree by that property's value: every element gets a gutter bar and an underline — <em>same value = same color</em>. Strings and value types compare by equality; reference values (view models!) by instance, labeled like <code>OrbitViewModel #1</code>. <code>null</code> and "no such property" get their own buckets. Folded <code>⋯</code> chips stack up to three colors of the values hidden inside them, so nothing can hide.</p>
<p>A legend under the tree counts every bucket live. Values changed in the running app — even off-screen or inside folded chips — re-classify within 250&nbsp;ms. (Plain CLR properties have no change notifications; they re-classify on ↻ Refresh.)</p>
<p><b>Fold to changes</b> (button in the legend) folds the tree to exactly the elements where the tracked value differs from its parent — the classic "where did my DataContext break?" answered on one screen. ✕ stops tracking.</p>
<h3>Pin the properties you watch</h3>
<p><b>📌 pin</b> keeps a property in a <b>Pinned</b> group at the top of the list; the rest collapses behind "Show more". Pins are per name (pin <code>Text</code> once — pinned for every element type), shared by all DevTools windows and persisted per user.</p>` },
      { id: 'tabs', t: 'Tabs', html: `<h3>Properties</h3>
<ul><li>Styled, direct, attached (grouped under 📎 owners) and plain CLR properties.</li>
<li>Hover a row for <b>⊙ track</b> and <b>📌 pin</b> — see <a href="#tracking">Value tracking &amp; pinned properties</a>.</li>
<li>Typed editors: checkboxes, enum dropdowns, flat segmented switches, color swatches with a live picker, monospace text (Enter commits, Escape reverts).</li>
<li><strong>Source column</strong>: ∅ default · ✏️ set locally · 🎨 style · ⧉ template · ⇡ inherited. Click a badge to see <em>where and how</em> the value is set — including the style's setter, its file:line and a highlighted XAML snippet; for bindings, the binding markup and a jump to the view-model member.</li>
<li>Click a property name for metadata (declared by, default value, inherits), copy name/value, and the declaration in your code.</li>
<li>Columns are resizable — drag between the header cells.</li></ul>
<h3>Layout</h3><ul><li>Interactive box model: margin / border / padding bands editable per side; size, min/max, desired, bounds and alignment below.</li></ul>
<h3>Styles</h3><ul><li>All applied value frames — control theme, styles with selectors, template and local values — with setters, priority and active state.</li>
<li>Edits apply as live local overrides (browser-devtools semantics); local values have a ✕ clear button.</li>
<li>file:line links for the element and each style; ⟨⟩/▤/{} chips open code previews.</li></ul>
<h3>3D</h3><ul><li>Exploded 3D view textured from a live snapshot. Drag to orbit, wheel to zoom, click a card to select in the tree.</li>
<li>Granularity: <em>Visual · merged</em> (wrappers collapsed), <em>Visual · all</em>, or <em>Logical</em>. "Reset view" restores the camera.</li></ul>
<h3>Events</h3><ul><li>Enable routed events from the full registry ("Common" preset included) and watch source, time and final handled state. Pause/Clear included.</li></ul>
<h3>Logs</h3><ul><li>Live Avalonia logger output with Pause, level, area and text filters. Captures at Warning by default. Entries produced by the DevTools UI itself are dropped and appends are batched — verbose logging can't freeze the tool.</li></ul>` },
      { id: 'source', t: 'Go to source', html: `<p>Source locations come from the XAML compiler's <code>AvaloniaXamlCreateSourceInfo</code>, which Avalonia 12 enables automatically in Debug builds. C# types (view models) are located by searching your solution tree. Clicking opens JetBrains Rider by default on macOS; override with:</p>
<pre><code>AVA_DEVTOOLS_EDITOR=<span class="s">"code --goto {file}:{line}"</span></code></pre>
<p>Compiled Fluent theme styles have no source on disk — the popover shows reflection details and a "View theme XAML on GitHub" link matched to your Avalonia version.</p>` },
      { id: 'options', t: 'Options', html: `<pre><code><span class="k">this</span>.AttachAvaDevTools(<span class="k">new</span> DevToolsOptions
{
    Gesture    = <span class="k">new</span> KeyGesture(Key.F11),      <span class="c">// default: F12</span>
    WindowSize = <span class="k">new</span> Size(1280, 760),
    StayOnTop  = <span class="k">false</span>,                        <span class="c">// default: true</span>
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
  descr: 'Безкоштовні інструменти розробника для Avalonia 12: інспектор дерева, живе редагування властивостей, стилі, 3D-вигляд, події, логи та перехід до коду. Натисніть F12.',
  nav: { features: 'Можливості', docs: 'Документація', videos: 'Відео', releases: 'Релізи' },
  hero: {
    title: 'DevTools для <em>Avalonia 12</em>.<br>Безкоштовно. In-process. Одна клавіша.',
    tag: 'Вбудованих інструментів F12 в Avalonia 12 більше немає. AvaDevTools повертає їх — інспектор, живі редактори, стилі, 3D-вигляд, події та логи — одним безкоштовним NuGet-пакетом.',
    get: 'Почати', watch: '▶ Дивитися демо', copy: 'копіювати',
  },
  video: { h: 'Подивіться в дії', sub: 'Реальний робочий процес: вибір, редагування, трасування, події — п’ятдесят секунд від F12 до виправлення.' },
  wn: { h: 'Що нового у 12.0.3 — трекінг значень', videos: 'Усі відео →', notes: 'Історія версій →' },
  video2: { h: 'Розумне дерево за 40 секунд', sub: 'Вибір елемента, розкриття прихованих рівнів по одному, точне відкриття згорток, приховування зайвого, scope і пошук — один безперервний сценарій.' },
  video3: { h: 'Трекінг значень за 45 секунд', sub: 'Відстежуйте одну властивість по всьому дереву: кольори за значенням, жива легенда, згортання до змін і закріплені рядки — один безперервний сценарій.' },
  story: [
    { img: 'story/t01.png', t: 'Дві приховані кнопки на кожному рядку', d: 'Наведіть курсор на будь-який рядок Properties: ⊙ track відстежує значення по дереву, 📌 pin тримає рядок згори.' },
    { img: 'story/t02.png', t: 'Один клік — дерево у кольорах значень', d: 'Відстежуйте DataContext: MainViewModel скрізь, де він успадковується, острівець OrbitViewModel, null у власній групі.' },
    { img: 'story/t03.png', t: 'Легенда, що рахує все', d: 'Кожне значення в дереві з живим лічильником — а інстанси отримують номери: «OrbitViewModel #1».' },
    { img: 'story/t04.png', t: 'Значення змінюються — кольори слідують', d: 'Другий OrbitViewModel, призначений у запущеному застосунку: той самий тип, власний колір — #2. Перекласифікація за 250 мс, навіть у згорнутих чипах.' },
    { img: 'story/t05.png', t: 'Згорнути до змін', d: 'Один клік лишає тільки елементи, де значення відрізняється від батьківського — кожна межа DataContext на одному екрані.' },
    { img: 'story/t06.png', t: 'Закріпіть те, що пильнуєте', d: '📌 піднімає ваші властивості на початок списку; решта чекає за «Show more».' },
  ],
  tour: [
    { img: 'tab-track.png', t: 'Відстежуйте будь-яке значення по дереву',
      lead: 'Класичне питання MVVM — «де зламався мій DataContext?» — відповідь одним кліком.',
      pts: ['⊙ track на будь-якому рядку Properties розфарбовує все дерево: однакове значення = однаковий колір; null і «немає такої властивості» мають власні групи',
            'Легенда під деревом рахує кожну групу наживо; згорнуті чипи ⋯ складають кольори того, що ховають',
            'Значення, змінені в запущеному застосунку, перекласифікуються за 250 мс — навіть поза екраном чи у згортках',
            '«Fold to changes» лишає тільки елементи, де значення змінюється; 📌 закріплює властивості вгорі списку'] },
    { img: 'tab-tree.png', t: 'Дерево, що читається як XAML',
      lead: 'Розумний інспектор дерева: підсвічені елементи, згортання як у редакторі коду та жива колонка розмірів.',
      pts: ['Виберіть елемент — дерево стискається до вікна, ваших view та цілі; обгортки згортаються у чипи «⋯ N levels»',
            'Розкривайте приховані рівні по одному (Alt+↑/↓) або клацніть згортку та оберіть, який саме елемент показати',
            'Ховайте будь-який елемент клавішею Delete — він повертається у свій чип',
            'Focus, Scope з хлібними крихтами, пошук із циклом F3 та симетричне меню з усіма шорткатами'] },
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
    { img: 'tab-events.png', t: 'Події та логи під контролем',
      lead: 'Спостерігайте routed-події та читайте власні логи Avalonia.',
      pts: ['Повний реєстр подій із пресетом Common, джерело + стан handled',
            'Лог-в’ювер із фільтрами за рівнем/областю/текстом — без зациклень'] },
  ],
  feat: {
    h: 'Усе, що очікуєш від DevTools', sub: 'Підключіть один раз і натискайте F12 у будь-якому вікні.',
    cards: [
      { i: '🌳', t: 'Розумне дерево', d: 'Дерево, що читається як XAML: підсвічування синтаксису, згортання як у редакторі, компактний вигляд після вибору, покрокове розкриття, hide, focus, scope і пошук.' },
      { i: '🎯', t: 'Трекінг значень', d: 'Відстежуйте будь-яку властивість по всьому дереву: однакове значення = однаковий колір, null у власній групі, жива легенда з лічильниками — а «Fold to changes» показує всі межі одразу.' },
      { i: '✏️', t: 'Живе редагування властивостей', d: 'Типізовані редактори — чекбокси, списки enum, плоскі сегментні перемикачі — згруповані attached-властивості та миттєвий результат без перезбирання.' },
      { i: '📌', t: 'Закріплені властивості', d: 'Закріпіть властивості, які справді пильнуєте — вони підіймаються у групу вгорі списку; решта чекає за «Show more». Зберігається для користувача.' },
      { i: '🎨', t: 'Палітра кольорів', d: 'Кожен Color і пензель має зразок кольору з повноцінним колірним пікером. Зміни застосовуються наживо.' },
      { i: '📐', t: 'Боксова модель', d: 'Інтерактивні зони margin / border / padding із редагуванням кожної сторони, а також розміри, обмеження та вирівнювання.' },
      { i: '🧩', t: 'Стилі та фрейми значень', d: 'Усі застосовані стилі, тема і локальні значення з сеттерами, пріоритетом та станом активності. Редагування — як живі локальні перевизначення.' },
      { i: '🧊', t: '3D-вигляд шарами', d: 'Ваше вікно як текстуровані шари у 3D — обертайте, масштабуйте, клікайте для вибору. Візуальне, згорнуте або логічне дерево.' },
      { i: '🔗', t: 'Перехід до коду', d: 'file:line для елементів, стилів, біндінгів і в’ю-моделей. Підсвічені фрагменти XAML/C# та перехід у редактор одним кліком.' },
      { i: '⚡', t: 'Інспектор подій', d: 'Обирайте routed-події з повного реєстру та спостерігайте: джерело, час і фінальний стан handled.' },
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
<p>Утримуйте <span class="kbd">Ctrl</span>+<span class="kbd">Shift</span> над застосунком, щоб інспектувати елемент під курсором — як у класичних DevTools.</p>` },
      { id: 'tree', t: 'Розумний інспектор дерева', html: `<p>Панель дерева — це «редактор коду» лише для читання: елементи відображаються як підсвічені псевдо-XAML рядки (<code>&lt;Button x:Name="Save" Classes="primary"&gt;</code>) зі шевронами згортання, лініями відступів і живою колонкою <b>Size</b>, що спалахує при зміні. Два режими точно відповідають Avalonia: <b>Visual tree</b> (<code>GetVisualChildren</code>, за замовчуванням) і <b>Logical tree</b> (<code>GetLogicalChildren</code>).</p>
<h3>Компактний вибір</h3>
<p>Вибір елемента (кнопка ⌖ або Ctrl+Shift над застосунком) перебудовує дерево в компактний вигляд: вікно, ваші user controls на шляху, контрол-власник вибраної частини шаблону та сам елемент. Усі проміжні обгортки згортаються в чип <code>⋯ N levels</code> — глибоке дерево стає кількома рядками.</p>
<h3>Згортки — повноцінні елементи</h3>
<p>Один клік на чипі відкриває список прихованих елементів у тому ж стилі — оберіть один, і буде показано лише його: <code>⋯ 7 levels</code> перетворюється на <code>⋯ N</code> + елемент + <code>⋯ M</code>. Подвійний клік розкриває весь чип. <b>Alt+↑/↓</b> крокує до батька чи дитини, розкриваючи рівно один прихований рівень (на вибраному рядку є кнопки ▲▼; око 👁 позначає крок, що відкриє приховане). <b>Delete</b> ховає елемент назад у чип; сусідні чипи зливаються.</p>
<h3>Формування дерева</h3>
<p>Контекстне меню симетричне — групи Descendants, Ancestors і Element, кожна дія з шорткатом: показати один/усі рівні, згорнути в ⋯, згорнути лишивши view, згорнути предків (з view чи повністю), сховати, focus, scope.</p>
<h3>Focus і Scope</h3>
<p><b>Focus</b> (F) згортає все поза шляхом до вибраного елемента; Esc повертає попередній стан. <b>Scope</b> (S) робить будь-який елемент коренем дерева — з клікабельними хлібними крихтами, кнопкою «на рівень вище» та Esc для виходу. Вибір елемента поза scope виходить із нього автоматично.</p>
<h3>Клавіатура</h3>
<table><tr><th>Клавіші</th><th>Дія</th></tr><tr><td><code>↑ ↓</code></td><td>перемістити вибір</td></tr><tr><td><code>← →</code></td><td>згорнути / розгорнути, до батька / першої дитини</td></tr><tr><td><code>Space</code></td><td>перемкнути згортання</td></tr><tr><td><code>Enter</code></td><td>розкрити чип · відкрити Properties</td></tr><tr><td><code>Alt+↑ / Alt+↓</code></td><td>крок до батька / дитини з розкриттям одного рівня</td></tr><tr><td><code>Delete</code></td><td>сховати елемент у чип ⋯</td></tr><tr><td><code>Ctrl+↑ / Ctrl+↓</code></td><td>структурний батько / дитина (вибір, якщо кілька)</td></tr><tr><td><code>Ctrl+← / Ctrl+→</code></td><td>попередній / наступний сусід</td></tr><tr><td><code>Shift+→</code></td><td>показати всі рівні</td></tr><tr><td><code>Shift+←</code></td><td>згорнути нащадків у ⋯</td></tr><tr><td><code>Shift+↓</code></td><td>згорнути нащадків, лишити view</td></tr><tr><td><code>Shift+↑</code></td><td>згорнути предків, лишити view</td></tr><tr><td><code>Ctrl+Shift+↑</code></td><td>згорнути предків — усе</td></tr><tr><td><code>Ctrl+Shift+↓</code></td><td>згорнути нащадків, лишити один рівень</td></tr><tr><td><code>F / S / Esc</code></td><td>focus / scope / вийти</td></tr><tr><td><code>Ctrl+F, F3</code></td><td>пошук, наступний збіг</td></tr><tr><td><code>Ctrl+C / Ctrl+Shift+C / Ctrl+E</code></td><td>копіювати шлях / як XAML / відкрити в редакторі</td></tr></table>` },
      { id: 'tracking', t: 'Трекінг значень і закріплені властивості', html: `<p>Наведіть курсор на будь-який рядок вкладки Properties — з'являться дві кнопки: <b>⊙ track</b> і <b>📌 pin</b>.</p>
<h3>Відстежуйте значення по дереву</h3>
<p><b>⊙ track</b> розфарбовує все дерево за значенням цієї властивості: кожен елемент отримує смужку в гаттері та підкреслення — <em>однакове значення = однаковий колір</em>. Рядки та value-типи порівнюються за рівністю; посилальні значення (в'ю-моделі!) — за інстансом, з підписом на кшталт <code>OrbitViewModel #1</code>. <code>null</code> і «немає такої властивості» мають власні групи. Згорнуті чипи <code>⋯</code> складають до трьох кольорів прихованих значень — сховатися неможливо.</p>
<p>Легенда під деревом рахує кожну групу наживо. Значення, змінені в запущеному застосунку — навіть поза екраном чи всередині згорток — перекласифікуються за 250&nbsp;мс. (Звичайні CLR-властивості не мають сповіщень про зміни; вони перекласифікуються після ↻ Refresh.)</p>
<p><b>Fold to changes</b> (кнопка в легенді) згортає дерево до елементів, де відстежуване значення відрізняється від батьківського — класичне «де зламався мій DataContext?» на одному екрані. ✕ вимикає трекінг.</p>
<h3>Закріпіть властивості, які пильнуєте</h3>
<p><b>📌 pin</b> тримає властивість у групі <b>Pinned</b> угорі списку; решта згортається за «Show more». Закріплення діє за іменем (закріпіть <code>Text</code> один раз — і для всіх типів елементів), спільне для всіх вікон DevTools і зберігається для користувача.</p>` },
      { id: 'tabs', t: 'Вкладки', html: `<h3>Properties</h3>
<ul><li>Styled-, direct-, attached- (згруповані під 📎 власниками) та звичайні CLR-властивості.</li>
<li>Наведіть курсор на рядок — <b>⊙ track</b> і <b>📌 pin</b>: див. <a href="#tracking">Трекінг значень і закріплені властивості</a>.</li>
<li>Типізовані редактори: чекбокси, списки enum, сегментні перемикачі, зразки кольору з пікером, моноширинний текст (Enter — застосувати, Escape — скасувати).</li>
<li><strong>Колонка Source</strong>: ∅ типове · ✏️ задано вручну · 🎨 стиль · ⧉ шаблон · ⇡ успадковане. Клік по значку показує, <em>де і як</em> задано значення — сеттер стилю, file:line і підсвічений фрагмент XAML; для біндінгів — розмітку та перехід до члена в’ю-моделі.</li>
<li>Клік по імені властивості — метадані (де оголошено, типове значення, успадкування), копіювання імені/значення, оголошення у вашому коді.</li>
<li>Ширину колонок можна змінювати — тягніть між заголовками.</li></ul>
<h3>Layout</h3><ul><li>Інтерактивна боксова модель: margin / border / padding з редагуванням кожної сторони; нижче — розміри, min/max, desired, bounds та вирівнювання.</li></ul>
<h3>Styles</h3><ul><li>Усі застосовані фрейми значень — тема контролу, стилі з селекторами, шаблон і локальні значення — із сеттерами, пріоритетом і станом.</li>
<li>Редагування застосовується як живі локальні перевизначення; локальні значення мають кнопку ✕ для очищення.</li>
<li>Посилання file:line для елемента і кожного стилю; чипи ⟨⟩/▤/{} відкривають прев'ю коду.</li></ul>
<h3>3D</h3><ul><li>3D-вигляд шарами з текстурами з живого знімка. Тягніть для обертання, колесо — масштаб, клік — вибір у дереві.</li>
<li>Деталізація: <em>Visual · merged</em> (обгортки згорнуто), <em>Visual · all</em> або <em>Logical</em>. «Reset view» повертає камеру.</li></ul>
<h3>Events</h3><ul><li>Вмикайте routed-події з повного реєстру (є пресет «Common») і спостерігайте джерело, час і фінальний handled. Є Pause/Clear.</li></ul>
<h3>Logs</h3><ul><li>Живі логи Avalonia з Pause та фільтрами за рівнем, областю і текстом. За замовчуванням — Warning. Записи від самого DevTools відкидаються, оновлення батчаться — «зациклення» неможливе.</li></ul>` },
      { id: 'source', t: 'Перехід до коду', html: `<p>Локації беруться з <code>AvaloniaXamlCreateSourceInfo</code> компілятора XAML (в Avalonia 12 увімкнено в Debug автоматично). C#-типи (в'ю-моделі) знаходяться пошуком по дереву рішення. Клік відкриває JetBrains Rider (macOS) за замовчуванням; можна змінити:</p>
<pre><code>AVA_DEVTOOLS_EDITOR=<span class="s">"code --goto {file}:{line}"</span></code></pre>
<p>Скомпільовані стилі Fluent не мають коду на диску — поповер показує дані з рефлексії та посилання «View theme XAML on GitHub» для вашої версії Avalonia.</p>` },
      { id: 'options', t: 'Налаштування', html: `<pre><code><span class="k">this</span>.AttachAvaDevTools(<span class="k">new</span> DevToolsOptions
{
    Gesture    = <span class="k">new</span> KeyGesture(Key.F11),
    WindowSize = <span class="k">new</span> Size(1280, 760),
    StayOnTop  = <span class="k">false</span>,
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
  descr: 'Avalonia 12 的免费进程内开发者工具：树检查器、实时属性编辑、样式、3D 视图、事件、日志与源码跳转。按 F12 即可打开。',
  nav: { features: '功能', docs: '文档', videos: '视频', releases: '版本' },
  hero: {
    title: '<em>Avalonia 12</em> 的 DevTools。<br>免费、进程内、一键打开。',
    tag: 'Avalonia 12 移除了内置的 F12 工具。AvaDevTools 把它们带了回来 —— 检查器、实时编辑器、样式、3D 视图、事件和日志 —— 全部打包在一个免费 NuGet 包里。',
    get: '快速上手', watch: '▶ 观看演示', copy: '复制',
  },
  video: { h: '实际效果', sub: '真实的工作流：拾取、编辑、溯源、观察事件 —— 从 F12 到修好只要五十秒。' },
  wn: { h: '12.0.3 新特性 — 值追踪', videos: '全部视频 →', notes: '版本历史 →' },
  video2: { h: '智能树，40 秒看懂', sub: '拾取、逐层展开隐藏级别、精确打开折叠、隐藏噪音、Scope 与搜索 —— 一个连贯的工作流。' },
  video3: { h: '值追踪，45 秒看懂', sub: '在整棵树上追踪一个属性：按值着色、实时图例、折叠到变化处、置顶属性行 —— 一个连贯的工作流。' },
  story: [
    { img: 'story/t01.png', t: '每一行都藏着两个按钮', d: '悬停任意 Properties 行：⊙ track 在整棵树上追踪该值，📌 pin 把该行固定在顶部。' },
    { img: 'story/t02.png', t: '一次点击 —— 整棵树按值着色', d: '追踪 DataContext：MainViewModel 覆盖它所继承到的一切，一座 OrbitViewModel 小岛，null 自成一组。' },
    { img: 'story/t03.png', t: '图例统计一切', d: '树中的每个值都有实时计数 —— 实例还有序号：「OrbitViewModel #1」。' },
    { img: 'story/t04.png', t: '值一变，颜色即变', d: '在运行中的应用里赋第二个 OrbitViewModel：同一类型，独立颜色 —— #2。250 毫秒内重新分类，折叠芯片内也不例外。' },
    { img: 'story/t05.png', t: '折叠到变化处', d: '一次点击，只保留值与父级不同的元素 —— 每一处 DataContext 边界尽在一屏。' },
    { img: 'story/t06.png', t: '置顶你关注的属性', d: '📌 把你的属性浮到列表顶部；其余的收在「Show more」后面。' },
  ],
  tour: [
    { img: 'tab-track.png', t: '在整棵树上追踪任意值',
      lead: '经典的 MVVM 之问 ——「我的 DataContext 在哪里断了？」—— 一次点击给出答案。',
      pts: ['在任意 Properties 行点击 ⊙ track，整棵树按值着色：相同值 = 相同颜色；null 和「无此属性」各有分组',
            '树下方的图例实时统计每个分组；折叠的 ⋯ 芯片叠放其隐藏内容的颜色',
            '运行中的应用改变了值 —— 即使在屏幕外或折叠内 —— 250 毫秒内重新分类',
            '「Fold to changes」只保留值发生变化的元素；📌 把属性固定在列表顶部'] },
    { img: 'tab-tree.png', t: '像 XAML 一样阅读的树',
      lead: '智能树检查器：语法着色的元素、代码编辑器式折叠、实时闪烁的尺寸列。',
      pts: ['拾取元素 —— 树压缩为窗口、你的视图和目标；中间的包装元素折叠成「⋯ N levels」芯片',
            '逐层展开隐藏级别（Alt+↑/↓），或点击折叠芯片精确选择要显示的元素',
            '按 Delete 隐藏任何元素 —— 它会折回原来的芯片',
            'Focus、带面包屑的 Scope、F3 循环搜索，以及显示全部快捷键的对称菜单'] },
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
    { img: 'tab-events.png', t: '事件与日志，尽在掌握',
      lead: '观察路由事件完成路由，并阅读 Avalonia 自身的日志。',
      pts: ['完整事件注册表 + Common 预设，来源与 handled 状态',
            '日志查看器带级别/区域/文本过滤 —— 无反馈循环'] },
  ],
  feat: {
    h: 'DevTools 应有的一切', sub: '接入一次，在任意窗口按 F12。',
    cards: [
      { i: '🌳', t: '智能树检查器', d: '像 XAML 一样的树：语法着色、代码式折叠、拾取后的紧凑视图、逐层展开、隐藏、Focus、Scope 与搜索，并有实时尺寸列。' },
      { i: '🎯', t: '值追踪', d: '在整棵树上追踪任意属性：相同值 = 相同颜色，null 独立分组，实时图例带计数 ——「Fold to changes」一次显示所有边界。' },
      { i: '✏️', t: '实时属性编辑', d: '类型化编辑器 —— 复选框、枚举下拉、扁平分段开关 —— 附加属性分组显示，无需重新编译即刻生效。' },
      { i: '📌', t: '置顶属性', d: '把真正关注的属性固定住 —— 它们浮到列表顶部的分组；其余的收在「Show more」后面。按用户持久保存。' },
      { i: '🎨', t: '取色器', d: '每个 Color 和画刷都有色板，并附带完整取色器。拖动即实时应用。' },
      { i: '📐', t: '布局盒模型', d: '可交互的 margin / border / padding 色带，支持逐边编辑；尺寸、约束与对齐一目了然。' },
      { i: '🧩', t: '样式与值帧', d: '所有生效的样式、主题与本地值，含 setter、优先级和激活状态。编辑即作为实时本地覆盖生效。' },
      { i: '🧊', t: '3D 分层视图', d: '把窗口展开为带纹理的 3D 图层 —— 旋转、缩放、点击选中。支持可视化、合并或逻辑树粒度。' },
      { i: '🔗', t: '跳转到源码', d: '元素、样式、绑定与 ViewModel 的 file:line。语法高亮的 XAML/C# 预览，一键跳转到编辑器。' },
      { i: '⚡', t: '事件检查器', d: '从完整注册表中挑选路由事件，观察其路由完成时的来源、时间与最终 handled 状态。' },
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
<p>在运行中的应用上按住 <span class="kbd">Ctrl</span>+<span class="kbd">Shift</span>，即可检查指针下的元素 —— 与经典 DevTools 完全一致。</p>` },
      { id: 'tree', t: '智能树检查器', html: `<p>树面板是只读的「代码编辑器」视图：元素渲染为语法着色的伪 XAML 行（<code>&lt;Button x:Name="Save" Classes="primary"&gt;</code>），带折叠箭头、缩进参考线和实时 <b>Size</b> 列（元素变化时闪烁）。两种模式与 Avalonia 完全一致：<b>Visual tree</b>（<code>GetVisualChildren</code>，默认）和 <b>Logical tree</b>（<code>GetLogicalChildren</code>）。</p>
<h3>紧凑拾取</h3>
<p>拾取元素（⌖ 按钮或在应用上按 Ctrl+Shift）会把树重建为紧凑视图：窗口、路径上的用户控件、拥有所选模板部件的控件，以及元素本身。中间所有包装元素折叠成 <code>⋯ N levels</code> 芯片 —— 深树只剩几行。</p>
<h3>折叠是一等公民</h3>
<p>单击芯片会弹出隐藏元素列表（同样语法着色）—— 选择一个就只显示它：<code>⋯ 7 levels</code> 变为 <code>⋯ N</code> + 元素 + <code>⋯ M</code>。双击展开整个芯片。<b>Alt+↑/↓</b> 逐级跳到父/子元素，每次只展开一个隐藏级别（选中行显示 ▲▼ 按钮，👁 眼睛表示该步会展开隐藏内容）。<b>Delete</b> 把选中元素折回芯片，相邻芯片自动合并。</p>
<h3>塑形树</h3>
<p>右键菜单完全对称 —— Descendants、Ancestors、Element 三组，每个动作都显示快捷键：显示一级/全部、折叠成 ⋯、折叠但保留视图、折叠祖先（保留视图或全部）、隐藏、Focus、Scope。</p>
<h3>Focus 与 Scope</h3>
<p><b>Focus</b>（F）折叠所选元素路径之外的一切；Esc 恢复。<b>Scope</b>（S）把任意元素设为树根 —— 带可点击面包屑、上一级按钮，Esc 退出。拾取 scope 之外的元素会自动退出。</p>
<h3>键盘</h3>
<table><tr><th>按键</th><th>动作</th></tr><tr><td><code>↑ ↓</code></td><td>移动选择</td></tr><tr><td><code>← →</code></td><td>折叠 / 展开，跳到父级 / 第一个子级</td></tr><tr><td><code>Space</code></td><td>切换折叠</td></tr><tr><td><code>Enter</code></td><td>展开芯片 · 打开属性</td></tr><tr><td><code>Alt+↑ / Alt+↓</code></td><td>逐级跳到父/子元素，只展开一个隐藏级别</td></tr><tr><td><code>Delete</code></td><td>把元素隐藏进 ⋯ 芯片</td></tr><tr><td><code>Ctrl+↑ / Ctrl+↓</code></td><td>结构父级 / 子级（多个时弹出选择）</td></tr><tr><td><code>Ctrl+← / Ctrl+→</code></td><td>上一个 / 下一个兄弟元素</td></tr><tr><td><code>Shift+→</code></td><td>显示所有级别</td></tr><tr><td><code>Shift+←</code></td><td>把后代折叠成 ⋯</td></tr><tr><td><code>Shift+↓</code></td><td>折叠后代，保留视图</td></tr><tr><td><code>Shift+↑</code></td><td>折叠祖先，保留视图</td></tr><tr><td><code>Ctrl+Shift+↑</code></td><td>折叠祖先 —— 全部</td></tr><tr><td><code>Ctrl+Shift+↓</code></td><td>折叠后代，保留一级</td></tr><tr><td><code>F / S / Esc</code></td><td>Focus / Scope / 退出</td></tr><tr><td><code>Ctrl+F, F3</code></td><td>搜索，下一个匹配</td></tr><tr><td><code>Ctrl+C / Ctrl+Shift+C / Ctrl+E</code></td><td>复制路径 / 复制为 XAML / 在编辑器打开</td></tr></table>` },
      { id: 'tracking', t: '值追踪与置顶属性', html: `<p>悬停 Properties 选项卡中的任意行，会出现两个按钮：<b>⊙ track</b> 和 <b>📌 pin</b>。</p>
<h3>在整棵树上追踪一个值</h3>
<p><b>⊙ track</b> 按该属性的值给整棵树着色：每个元素获得一条边栏色带和下划线 —— <em>相同值 = 相同颜色</em>。字符串和值类型按相等性比较；引用值（ViewModel！）按实例比较，标注为 <code>OrbitViewModel #1</code> 这样的名字。<code>null</code> 和「无此属性」各有独立分组。折叠的 <code>⋯</code> 芯片最多叠放三种其隐藏内容的颜色 —— 什么都藏不住。</p>
<p>树下方的图例实时统计每个分组。运行中的应用改变了值 —— 即使在屏幕外或折叠芯片内 —— 也会在 250&nbsp;毫秒内重新分类。（普通 CLR 属性没有变更通知，需 ↻ Refresh 后重新分类。）</p>
<p><b>Fold to changes</b>（图例中的按钮）把树折叠到追踪值与父级不同的那些元素 —— 经典的「我的 DataContext 在哪里断了？」一屏作答。✕ 停止追踪。</p>
<h3>置顶你关注的属性</h3>
<p><b>📌 pin</b> 把属性放进列表顶部的 <b>Pinned</b> 分组；其余属性收在「Show more」后面。按名称生效（把 <code>Text</code> 固定一次，对所有元素类型都固定），所有 DevTools 窗口共享，并按用户持久保存。</p>` },
      { id: 'tabs', t: '选项卡', html: `<h3>Properties（属性）</h3>
<ul><li>Styled、direct、attached（按 📎 所有者分组）以及普通 CLR 属性。</li>
<li>悬停属性行可见 <b>⊙ track</b> 与 <b>📌 pin</b> —— 见<a href="#tracking">值追踪与置顶属性</a>。</li>
<li>类型化编辑器：复选框、枚举下拉、分段开关、带取色器的色板、等宽文本框（Enter 提交，Escape 还原）。</li>
<li><strong>Source 列</strong>：∅ 默认 · ✏️ 手动设置 · 🎨 样式 · ⧉ 模板 · ⇡ 继承。点击徽标可查看该值<em>在哪里、如何</em>被设置 —— 包括样式的 setter、file:line 和高亮 XAML 片段；对绑定则显示绑定标记并可跳到 ViewModel 成员。</li>
<li>点击属性名可查看元数据（声明者、默认值、是否继承）、复制名称/值、以及它在你代码中的声明位置。</li>
<li>列宽可调 —— 在表头之间拖动即可。</li></ul>
<h3>Layout（布局）</h3><ul><li>可交互盒模型：margin / border / padding 逐边编辑；下方显示尺寸、min/max、desired、bounds 与对齐。</li></ul>
<h3>Styles（样式）</h3><ul><li>所有生效的值帧 —— 控件主题、带选择器的样式、模板与本地值 —— 含 setter、优先级与激活状态。</li>
<li>编辑以实时本地覆盖生效（浏览器 DevTools 语义）；本地值带 ✕ 清除按钮。</li>
<li>元素与每个样式都有 file:line 链接；⟨⟩/▤/{} 徽章可打开代码预览。</li></ul>
<h3>3D</h3><ul><li>基于实时快照纹理的 3D 分层视图。拖动旋转、滚轮缩放、点击图层即在树中选中。</li>
<li>粒度：<em>Visual · merged</em>（折叠包装层）、<em>Visual · all</em> 或 <em>Logical</em>。"Reset view" 复位相机。</li></ul>
<h3>Events（事件）</h3><ul><li>从完整注册表启用路由事件（内置 "Common" 预设），观察来源、时间与最终 handled 状态。支持暂停/清空。</li></ul>
<h3>Logs（日志）</h3><ul><li>实时 Avalonia 日志，支持暂停、级别、区域与文本过滤。默认捕获 Warning 及以上。工具自身产生的日志会被丢弃、UI 批量刷新 —— 不会出现反馈循环卡死。</li></ul>` },
      { id: 'source', t: '跳转到源码', html: `<p>源码位置来自 XAML 编译器的 <code>AvaloniaXamlCreateSourceInfo</code>（Avalonia 12 在 Debug 构建中默认开启）。C# 类型（ViewModel）通过在解决方案目录中搜索定位。macOS 下默认用 JetBrains Rider 打开，可自定义：</p>
<pre><code>AVA_DEVTOOLS_EDITOR=<span class="s">"code --goto {file}:{line}"</span></code></pre>
<p>编译进主题程序集的 Fluent 样式在磁盘上没有源码 —— 弹窗会显示反射信息，并给出与你的 Avalonia 版本匹配的 "View theme XAML on GitHub" 链接。</p>` },
      { id: 'options', t: '选项', html: `<pre><code><span class="k">this</span>.AttachAvaDevTools(<span class="k">new</span> DevToolsOptions
{
    Gesture    = <span class="k">new</span> KeyGesture(Key.F11),
    WindowSize = <span class="k">new</span> Size(1280, 760),
    StayOnTop  = <span class="k">false</span>,
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
