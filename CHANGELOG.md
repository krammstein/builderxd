# CHANGELOG — BuilderXD

All notable changes to this project are documented in this file.  
Format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.6.0] — 2026-06-12 · `0cadb24`

> **feat: refine builder layout with custom inspector widgets, vertical tabs sidebar, canvas labels & handles, and new block types**

### Added — Custom Inspector Widgets
- Prohibited and replaced all native `<select>`, `<input type="color">`, and `<input type="date">` elements with custom React widgets in `src/components/inspector/`:
  - **`ColorPicker`**: HSV canvas 2D picker with Hue/Alpha custom sliders and presets.
  - **`AlignButtonGroup`**: Toggle button group using Lucide icons for alignment.
  - **`NumberStepper`**: Numeric input with +/- step buttons and unit configuration.
  - **`SliderWithInput`**: Combined slider range and numeric editable input.
  - **`PaddingEditor`**: Linked and independent multi-side padding controller.
  - **`CustomSelect`**: Popover dropdown list with keyboard navigation and custom renders.
  - **`FontFamilyPicker`**: Dropdown displaying Web-safe and Google Fonts previews with search support.
  - **`DateTimePicker`**: Custom calendar days grid with Navigation controls and Hour/Minute picker.
  - **`LinkInput`**: URL input with tabs specifying link types (Web URL, Email, Tel, Anchor).
  - **`VisibilityToggle`**: Device-level viewport visibility switcher (Desktop and Mobile).

### Added — Layout Refinements
- **Left Panel Sidebar**: Added a vertical 44px icon tab bar (Components, Layers, Assets).
- **Draggable Components Grid**: Available elements rendered in a modern 2-column grid.
- **Collapsible Outline**: Nested outline elements grouped under a root 'Design System Layers' header.
- **Section Labels**: Floating text banners indicating element types on hover/selection inside Canvas.
- **8-Point Selection Handles**: 8 visual control points on the edges/corners of selected blocks via pure CSS rules.
- **5 New Blocks**: Integrated `'icon' | 'nav_menu' | 'image_text' | 'product_card' | 'quote'` block types, default properties, and compiler compilation rules.

### Added — Code Drawer
- Integrated line numbering column dynamically counting rows.
- Lightweight custom regex-based tokenizer for syntax highlighting (MJML and HTML tag tags, attributes, strings, comments).

### Files Changed
`src/App.tsx`, `src/types.ts`, `src/utils/compiler.ts`, `src/components/CodeDrawer.tsx`, `src/components/InspectorPanel.tsx`, `src/components/LeftPanel.tsx`, `src/components/inspector/*`
**+2,560 lines / -340 lines across 16 files**

---

## [1.5.0] — 2026-06-12 · `6c82359`

> **feat: implement fileManagerProviders and espIntegrations, optimize Canvas DOM patching, and resolve library export configurations**

### Added — External Integrations
- `FileManagerProvider` and `ESPIntegration` interfaces added to `src/types.ts`.
- `fileManagerProviders` and `espIntegrations` added as optional SDK props to `AppProps`.
- Header dynamically renders one button per configured provider/ESP integration using `Cloud` and `Share2` icons (lucide-react).
- **File Manager Modal** — full file browser UI:
  - Folder navigation with breadcrumb path display.
  - File listing with type icons (📁 dirs, 📄 files).
  - Selection highlight with visual indicator.
  - "Subir archivo" upload button using `onUpload` callback.
  - "Cargar Plantilla" to load JSON template into editor from cloud file.
  - Async loading spinner while `onBrowse` is executing.
- **ESP Sync Modal** — bidirectional template sync:
  - **Push**: Sends compiled HTML + MJML to ESP via `onPush`.
  - **Pull**: Imports template by ID via `onPull`, automatically loads nodes into canvas.
  - Loading spinners, success and error feedback messages.
- Full mock implementations in `src/main.tsx`:
  - **Google Drive** mock with `onBrowse` (nested folders: Templates, Images), `onUpload`, and `onAuth`.
  - **Mailchimp** mock with `onPush` (async delay) and `onPull` (returns live `nodes[]` tree).

### Improved — Canvas DOM Patching
- Canvas `srcDoc` reloads replaced with intelligent partial DOM patching algorithm:
  - Compares `data-id` attribute trees between current and new HTML.
  - If structure is identical: patches only changed `outerHTML` nodes in-place, syncs `<style>` tag and `<body>` attributes.
  - If structure changes (add/remove/reorder): falls back to safe full reload.
  - Eliminates visual flickering when editing text, colors, padding, alignment.
- `lastHtmlRef` tracks previous HTML to skip unnecessary updates.

### Improved — Modal Styling System
- Added full CSS class set to `src/index.css`:
  - `.modal-overlay` — blurred backdrop (`backdrop-filter: blur(4px)`).
  - `.modal-content` — animated panel with spring entrance (`cubic-bezier(0.34, 1.56, 0.64, 1)`).
  - `.modal-header`, `.modal-body`, `.modal-footer` — structured layout with border separators.
  - `.modal-close-btn` — hover-state close button.
  - `@keyframes modalFadeIn` and `@keyframes modalScaleIn` entry animations.

### Fixed
- Removed unused `React` import from `src/index.tsx` (TS6133 error).
- Added `exports: 'named'` to Rollup output config in `vite.config.ts` to suppress `[MIXED_EXPORTS]` warning.

### Files Changed
`src/App.tsx`, `src/components/Canvas.tsx`, `src/components/Header.tsx`, `src/components/InspectorPanel.tsx`, `src/components/LeftPanel.tsx`, `src/context/LanguageContext.tsx`, `src/index.css`, `src/index.tsx`, `src/main.tsx`, `src/types.ts`, `src/utils/compiler.ts`, `vite.config.ts`
**+927 lines / -36 lines across 12 files**

---

## [1.4.0] — 2026-06-12 · `1dbafbe`

> **feat: migrate styling to Tailwind CSS v4 and support color schema configuration via SDK theme prop**

### Added
- Integrated **Tailwind CSS v4** via `@tailwindcss/vite` plugin.
- CSS custom properties (`--primary`, `--primary-hover`, `--accent-color`, `--border-radius-val`) bridged to Tailwind's `@theme` block in `src/index.css`.
- Dynamic SDK-level theme override: the `theme` prop (`primaryColor`, `primaryColorHover`, `accentColor`, `borderRadius`, `darkMode`) injects CSS variables at the root `<div>` via `style` attribute.
- `darkMode` boolean prop syncs automatically with the internal `ThemeContext`.

### Changed
- All component class names (`Header`, `LeftPanel`, `Canvas`, `InspectorPanel`, `CodeDrawer`) migrated from vanilla CSS utility classes to Tailwind v4 equivalents.
- `src/index.css` significantly slimmed down — removed manual utility rules in favour of Tailwind's generated output.
- Theme variables remain fully configurable at runtime from the consuming application.

### Files Changed
`package.json`, `package-lock.json`, `src/App.tsx`, `src/components/*.tsx`, `src/index.css`, `vite.config.ts`
**+645 lines / -1086 lines across 10 files**

---

## [1.3.0] — 2026-06-12 · `ac91ceb`

> **feat: implement asynchronous web worker compiler and real drag-and-drop elements insertion**

### Added — Web Worker Compiler
- Dedicated `src/utils/compiler.worker.ts` — off-main-thread MJML + HTML compilation using `postMessage`.
- Worker is instantiated in `App.tsx` via `new Worker(new URL(...), { type: 'module' })`.
- Posts `{ nodes, selectedId, isMobile }` on every state change, receives `{ mjml, html }` back asynchronously.
- Worker is cleanly terminated on component unmount via `useEffect` cleanup.

### Added — Real Drag & Drop
- Left panel items are now HTML5 `draggable` with `dragstart` setting `dataTransfer` data.
- Canvas `iframe` listens to `dragover` / `dragleave` / `drop` events on the live document body.
- Drop zones highlighted via `.drag-hover` CSS class injected into the iframe document.
- `DROP_ELEMENT` message posted from iframe to parent with `blockType` + `targetId`.
- `handleDropElement` handler in `App.tsx` performs tree insertion:
  - Drops into a **column** append block as child.
  - Drops into a **section** inserts into first column.
  - Drops next to a **sibling** element splices at correct index.
  - Falls back to appending to the first section if no target is found.
- Extended default props for new block types: `video`, `custom_html`, `countdown`, `accordion`, `carousel`.

### Files Changed
`src/App.tsx`, `src/components/Canvas.tsx`, `src/components/LeftPanel.tsx`, `src/utils/compiler.ts`, `src/utils/compiler.worker.ts`
**+250 lines / -8 lines across 5 files**

---

## [1.2.0] — 2026-06-12 · `7c0520d`

> **feat: configure package as a shareable library with types and CSS assets**

### Added — Library Mode
- Configured **Vite Library Mode** in `vite.config.ts`:
  - Formats: `es` (ESM) and `umd` (CommonJS-compatible).
  - Output filenames: `builderxd.es.js` / `builderxd.umd.js`.
  - CSS asset: `builderxd.css` auto-bundled via `import './index.css'` in entry.
- Added `vite-plugin-dts` for TypeScript declaration file generation (`.d.ts`).
  - `tsconfigPath` set to `tsconfig.app.json` to support Vite project references.
  - `compilerOptions.noEmit: false` to allow declaration emit.
- Configured `package.json` as a proper npm library package:
  - `"main"`, `"module"`, `"types"`, `"exports"` fields with correct paths.
  - `"files": ["dist"]` to include only built output.
  - `react` and `react-dom` moved to `peerDependencies`.

### Added — Imperative API via Ref
- `src/index.tsx` exposes `<BuilderXD />` as a `forwardRef` component.
- Wraps `<App />` with `<ThemeProvider>` and `<LanguageProvider>`.
- `useImperativeHandle` in `App.tsx` exposes:
  - `undo()` / `redo()` — history navigation.
  - `getCode()` — returns `{ mjml, html, mode }`.
  - `setCode(code)` — parses and loads JSON node tree.
  - `exportTemplate(format)` — returns MJML string, HTML string, or placeholder for ZIP.
  - `sendTest(emails[])` — programmatically triggers send-test modal.

### Added — Prop Callbacks
- `onSave(data)` — fires on every node change (autosave pattern).
- `onExport(data)` — fires when the export button is clicked.
- `onTemplateChange(mjml, html)` — fires on every compiled output change.
- `readOnly` prop guards all edit operations in the entire tree.

### Files Changed
`package.json`, `package-lock.json`, `src/App.tsx`, `src/index.tsx`, `vite.config.ts`
**+446 lines / -18 lines across 5 files**

---

## [1.1.0] — 2026-06-12 · `1e477c6`

> **feat: implement visual builder workspace with theme switcher, i18n support, and email size warnings**

### Added — Core Editor Components
- **`src/components/Header.tsx`** — Top bar with:
  - Brand title + dev badge.
  - Responsive viewport selector: Desktop / Tablet / Mobile toggle.
  - History controls: Undo / Redo buttons (disabled state aware).
  - Multiplayer avatar stack (UI placeholder for collaboration).
  - Dark/Light theme toggle.
  - Language selector: `ES` / `EN`.
  - Import / Export / Send Test action buttons.
- **`src/components/LeftPanel.tsx`** — Collapsible left sidebar with:
  - Search filter input for components.
  - 13 draggable component blocks: `Text`, `Image`, `Button`, `Divider`, `Spacer`, `Social`, `Section`, `Column`, `Video`, `Custom HTML`, `Countdown`, `Accordion`, `Carousel`.
  - Layers tab: interactive tree of the full block hierarchy with select, move up/down, delete controls.
- **`src/components/Canvas.tsx`** — Sandboxed iframe preview:
  - Rendered with `sandbox="allow-same-origin allow-scripts"`.
  - Receives compiled HTML via `srcDoc`.
  - Click events inside iframe post `SELECT_ELEMENT` message to parent.
  - Width animates between viewport sizes (375px / 600px / 100%) with CSS transition.
- **`src/components/InspectorPanel.tsx`** — Context-sensitive property editor:
  - Forms adapt to selected block type (all 13 block types supported).
  - Desktop and Mobile tabs for responsive property overrides.
  - Delete button per selected node.
- **`src/components/CodeDrawer.tsx`** — Collapsible bottom drawer:
  - Side-by-side MJML and HTML code view (monospace, scrollable).
  - Gmail 102KB size limit checker with visual warning/success badge.
  - Toggle open/close button.

### Added — State & Logic (`src/App.tsx`)
- Undo/redo history stack with diff-based structural updates (not full snapshots).
- Recursive helpers: `findNode`, `addRecursively`, `deleteRecursively`, `moveInArray`, `updateRecursively`.
- Import modal: paste JSON node tree to load into canvas.
- Export modal: download as `.mjml` or `.html` via Blob URL.
- Send Test modal: enter comma-separated email addresses with success alert.

### Added — Compiler (`src/utils/compiler.ts`)
- `compileToMJML(nodes)` — converts node tree to valid MJML markup string.
- `compileToHTML(nodes, selectedId, isMobile)` — outputs full HTML document with:
  - Inline CSS reset and builder styles.
  - `data-id` attributes on every element for click-to-select.
  - `.selected` highlight style.
  - `.drag-hover` hover style for drop targets.
  - Injected `<script>` for `SELECT_ELEMENT` postMessage on click.
  - Support for all 13 block types including responsive mobile overrides.

### Added — i18n System (`src/context/LanguageContext.tsx`)
- `LanguageProvider` and `useTranslation()` hook.
- Full `ES` / `EN` translation dictionaries (90+ keys).
- `TranslationDict` type exported from `src/types.ts`.

### Added — Theme System (`src/context/ThemeContext.tsx`)
- `ThemeProvider` and `useTheme()` hook.
- Toggles `dark` class on `<html>` element.
- Persists to `localStorage`.
- Light and dark CSS variable sets in `src/index.css`.

### Added — Initial Template
- 4-section demo template with header text, hero image, CTA button, and social footer pre-loaded on first render.

### Files Changed
`src/App.tsx`, `src/components/*.tsx`, `src/context/*.tsx`, `src/index.css`, `src/main.tsx`, `src/types.ts`, `src/utils/compiler.ts`, `package.json`, `package-lock.json`
**+5,633 lines / -199 lines across 14 files**

---

## [1.0.0] — 2026-06-12 · `dd6e4a7`

> **feat: initial project structure with React + Vite + TS and context docs**

### Added — Project Scaffolding
- Initialized React (TypeScript) + Vite project at `C:\xampp\htdocs\builderxd`.
- Git repository initialized with two-branch flow:
  - `main` — clean scaffolding only, protected from direct development.
  - `dev` — active development branch.
- `.GEMINI` context file documenting project goals, stack, and branch strategy.
- `README.md` with project overview.
- `docs/initial.md` — full SDK specification and internal feature requirements.
- `docs/preview/builderxd_mockup.png` — high-fidelity UI mockup generated before implementation.
- `eslint.config.js` — configured with `typescript-eslint` and `react-refresh`.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` — TypeScript project references.
- `vite.config.ts` — base Vite config with `@vitejs/plugin-react`.
- `public/` — favicon and icons SVG assets.

### Files Changed
21 files created, **+803 lines**

---

## Summary Table

| Version | Commit    | Date            | Highlights                                                          |
|---------|-----------|-----------------|---------------------------------------------------------------------|
| 1.5.0   | `6c82359` | 2026-06-12 13:23 | File Manager + ESP modals, DOM Patching, Modal CSS system          |
| 1.4.0   | `1dbafbe` | 2026-06-12 13:19 | Tailwind CSS v4, SDK theme prop with CSS variable bridging          |
| 1.3.0   | `ac91ceb` | 2026-06-12 12:56 | Web Worker compiler, real HTML5 Drag & Drop insertion               |
| 1.2.0   | `7c0520d` | 2026-06-12 12:54 | Library mode (ESM/UMD), `vite-plugin-dts`, Imperative API via ref  |
| 1.1.0   | `1e477c6` | 2026-06-12 12:49 | Full builder UI: 5 panels, 13 blocks, i18n, themes, compiler       |
| 1.0.0   | `dd6e4a7` | 2026-06-12 12:46 | Project scaffolding, branch flow, docs, mockup preview              |

---

> BuilderXD is maintained on the `dev` branch.
> Production-ready releases are merged into `main`.
