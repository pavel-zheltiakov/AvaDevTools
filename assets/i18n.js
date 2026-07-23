// AvaDevTools site string resources. One object per language; site.js applies them.
window.I18N = {

en: {
  title: 'AvaDevTools — free DevTools for Avalonia 12',
  descr: 'Free in-process developer tools for Avalonia 12: tree inspector, live property editing, styles, 3D view, events, logs and go-to-source. Press F12.',
  nav: { features: 'Features', docs: 'Documentation', releases: 'Releases' },
  hero: {
    title: 'DevTools for <em>Avalonia 12</em>.<br>Free. In-process. One key away.',
    tag: 'The built-in F12 tools are gone in Avalonia 12. AvaDevTools brings them back — inspector, live editors, styles, 3D view, events and logs — as a single open-source NuGet package.',
    get: 'Get started', watch: '▶ Watch the demo', copy: 'copy',
  },
  video: { h: 'See it in action', sub: 'A real workflow: pick, edit, trace, watch events fire — fifty seconds from F12 to fixed.' },
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
    { img: 'tab-events.png', t: 'Events and logs, tamed',
      lead: 'Watch routed events finish routing and read Avalonia’s own logs.',
      pts: ['Full event registry with a Common preset, source + handled state',
            'Log viewer with level/area/text filters — feedback-loop safe'] },
  ],
  feat: {
    h: 'Everything you expect from DevTools', sub: 'Attach once, press F12 in any window.',
    cards: [
      { i: '🌳', t: 'Tree inspector', d: 'Visual and logical tree with names and style classes, live highlight overlay with margin/padding bands, and a click-to-pick element mode.' },
      { i: '✏️', t: 'Live property editing', d: 'Typed editors — checkboxes, enum dropdowns, flat segmented switches — grouped attached properties, and instant visual feedback without rebuilds.' },
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
    lead: 'Free in-process DevTools for Avalonia 12 — an open-source analog of the classic F12 tools.',
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
<p>Or attach to a single window: <code>myWindow.AttachAvaDevTools()</code>. Press <span class="kbd">F12</span> in the app window to open DevTools for it. The DevTools window stays on top by default (📌 toggle in the toolbar).</p>` },
      { id: 'tabs', t: 'Tabs', html: `<h3>Properties</h3>
<ul><li>Styled, direct, attached (grouped under 📎 owners) and plain CLR properties.</li>
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
  nav: { features: 'Можливості', docs: 'Документація', releases: 'Релізи' },
  hero: {
    title: 'DevTools для <em>Avalonia 12</em>.<br>Безкоштовно. In-process. Одна клавіша.',
    tag: 'Вбудованих інструментів F12 в Avalonia 12 більше немає. AvaDevTools повертає їх — інспектор, живі редактори, стилі, 3D-вигляд, події та логи — одним open-source NuGet-пакетом.',
    get: 'Почати', watch: '▶ Дивитися демо', copy: 'копіювати',
  },
  video: { h: 'Подивіться в дії', sub: 'Реальний робочий процес: вибір, редагування, трасування, події — п’ятдесят секунд від F12 до виправлення.' },
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
    { img: 'tab-events.png', t: 'Події та логи під контролем',
      lead: 'Спостерігайте routed-події та читайте власні логи Avalonia.',
      pts: ['Повний реєстр подій із пресетом Common, джерело + стан handled',
            'Лог-в’ювер із фільтрами за рівнем/областю/текстом — без зациклень'] },
  ],
  feat: {
    h: 'Усе, що очікуєш від DevTools', sub: 'Підключіть один раз і натискайте F12 у будь-якому вікні.',
    cards: [
      { i: '🌳', t: 'Інспектор дерева', d: 'Візуальне та логічне дерево з іменами і класами стилів, підсвічування з зонами margin/padding та режим вибору елемента кліком.' },
      { i: '✏️', t: 'Живе редагування властивостей', d: 'Типізовані редактори — чекбокси, списки enum, плоскі сегментні перемикачі — згруповані attached-властивості та миттєвий результат без перезбирання.' },
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
    lead: 'Безкоштовні in-process DevTools для Avalonia 12 — open-source аналог класичних інструментів F12.',
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
<p>Або для одного вікна: <code>myWindow.AttachAvaDevTools()</code>. Натисніть <span class="kbd">F12</span> у вікні застосунку. Вікно DevTools за замовчуванням поверх інших (перемикач 📌 на панелі).</p>` },
      { id: 'tabs', t: 'Вкладки', html: `<h3>Properties</h3>
<ul><li>Styled-, direct-, attached- (згруповані під 📎 власниками) та звичайні CLR-властивості.</li>
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
  nav: { features: '功能', docs: '文档', releases: '版本' },
  hero: {
    title: '<em>Avalonia 12</em> 的 DevTools。<br>免费、进程内、一键打开。',
    tag: 'Avalonia 12 移除了内置的 F12 工具。AvaDevTools 把它们带了回来 —— 检查器、实时编辑器、样式、3D 视图、事件和日志 —— 全部打包在一个开源 NuGet 包里。',
    get: '快速上手', watch: '▶ 观看演示', copy: '复制',
  },
  video: { h: '实际效果', sub: '真实的工作流：拾取、编辑、溯源、观察事件 —— 从 F12 到修好只要五十秒。' },
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
    { img: 'tab-events.png', t: '事件与日志，尽在掌握',
      lead: '观察路由事件完成路由，并阅读 Avalonia 自身的日志。',
      pts: ['完整事件注册表 + Common 预设，来源与 handled 状态',
            '日志查看器带级别/区域/文本过滤 —— 无反馈循环'] },
  ],
  feat: {
    h: 'DevTools 应有的一切', sub: '接入一次，在任意窗口按 F12。',
    cards: [
      { i: '🌳', t: '树检查器', d: '可视化树与逻辑树，显示名称与样式类；高亮覆盖层带 margin/padding 色带；支持点击拾取元素。' },
      { i: '✏️', t: '实时属性编辑', d: '类型化编辑器 —— 复选框、枚举下拉、扁平分段开关 —— 附加属性分组显示，无需重新编译即刻生效。' },
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
    lead: 'Avalonia 12 的免费进程内 DevTools —— 经典 F12 工具的开源替代品。',
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
<p>也可以只附加到单个窗口：<code>myWindow.AttachAvaDevTools()</code>。在应用窗口中按 <span class="kbd">F12</span> 即可打开。工具窗口默认置顶（工具栏上的 📌 可切换）。</p>` },
      { id: 'tabs', t: '选项卡', html: `<h3>Properties（属性）</h3>
<ul><li>Styled、direct、attached（按 📎 所有者分组）以及普通 CLR 属性。</li>
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
