# BuilderXD

BuilderXD is a powerful, modern, and open-source visual drag-and-drop email builder for React. It generates high-quality responsive HTML and compliant MJML code.

## Features

- 🏗️ **Drag and Drop Interface**: Build emails easily using a rich set of components (Text, Images, Buttons, Carousels, Navbars, etc.)
- 📱 **Responsive by Default**: Outputs responsive HTML and MJML that looks great on desktop and mobile.
- 🎨 **Visual Styling**: Customize colors, typography, margins, paddings, and borders directly from the UI.
- 🔄 **Bidirectional Import**: Import your existing MJML or HTML templates and continue editing them visually.
- ✍️ **Rich Text Editor**: Powered by Lexical (Meta) for a smooth and modern text editing experience.
- 🌐 **Global Settings**: Configure global fonts, backgrounds, and titles seamlessly.
- 🌙 **Dark Mode Ready**: Beautiful UI with built-in dark mode support.
- 🌍 **I18n Supported**: English and Spanish out of the box.

## Installation

```bash
npm install builderxd react react-dom
```

## Quick Start

Import the `BuilderXD` component and render it in your React application:

```tsx
import { useRef } from 'react';
import { BuilderXD } from 'builderxd';
import 'builderxd/dist/builderxd.css'; // Don't forget to import the CSS!

function App() {
  const builderRef = useRef(null);

  const handleExport = () => {
    if (builderRef.current) {
      const html = builderRef.current.exportHTML();
      const mjml = builderRef.current.exportMJML();
      console.log('Exported HTML:', html);
      console.log('Exported MJML:', mjml);
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <button onClick={handleExport} style={{ padding: '10px' }}>
        Export Email
      </button>
      <div style={{ flex: 1 }}>
        <BuilderXD ref={builderRef} />
      </div>
    </div>
  );
}

export default App;
```

## API Reference

### Props

The `BuilderXD` component accepts the following props (`AppProps`):

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'html' \| 'mjml'` | `undefined` | **Locks** the editor to a single output format. When set, the HTML/MJML switcher is hidden from the UI and the mode cannot be changed by the user. |
| `lang` | `'es' \| 'en'` | `undefined` | **Locks** the editor to a specific language. When set, the language toggle is hidden and the UI will always use the specified language. When not set, language defaults to the user's last choice (stored in localStorage). |
| `defaultMode` | `'html' \| 'mjml'` | `'mjml'` | Sets the initial mode but still allows the user to switch between HTML and MJML manually. |
| `initialTemplate` | `string` | `undefined` | Initial MJML or HTML string to load into the canvas. |
| `initialNodes` | `BlockNode[]` | `undefined` | Initial nodes array in JSON format (internal AST). |
| `fileManager` | `FileManagerProvider` | `undefined` | Custom file manager plugin for image/video uploads. |
| `espIntegration` | `ESPIntegration` | `undefined` | Integration object for Push/Pull templates to/from an ESP. |
| `uiConfig` | `UIConfig` | `{}` | Fine-grained control over UI element visibility (see table below). |
| `googleFonts` | `string[]` | `['Roboto', 'Open Sans', ...]` | List of Google Fonts available in the editor dropdowns. |
| `readOnly` | `boolean` | `false` | Disables all editing interactions. |
| `theme` | `{ darkMode?: boolean }` | `undefined` | Programmatically control the dark/light theme. |

#### `uiConfig` options

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `showImport` | `boolean` | `true` | Show the Import button in the header. |
| `showExport` | `boolean` | `true` | Show the Export button in the header. |
| `showSendTest` | `boolean` | `true` | Show the Send Test button. |
| `showThemeToggle` | `boolean` | `true` | Show the dark/light mode toggle. |
| `showLanguageToggle` | `boolean` | `true` | Show the language (ES/EN) toggle. |
| `showDeviceToggle` | `boolean` | `true` | Show the desktop/mobile preview toggle. |
| `showClearCanvas` | `boolean` | `true` | Show the "Clear Canvas" button. |
| `showTemplateModeToggle` | `boolean` | `true` | Show the HTML/MJML mode switcher in the left panel. Automatically hidden when `mode` prop is set. |

### Methods (via ref)

You can call these methods using a React ref attached to the `BuilderXD` component:

| Method | Returns | Description |
|--------|---------|-------------|
| `getNodes()` | `BlockNode[]` | Returns the raw internal node tree. |
| `setNodes(nodes)` | `void` | Replaces the canvas content with a new node array. |
| `getHTML()` | `string` | Returns the compiled responsive HTML string. |
| `getMJML()` | `string` | Returns the compiled MJML string. |
| `importTemplate(code, mode)` | `void` | Parses and loads an MJML or HTML string into the canvas. |
| `exportTemplate(format)` | `Promise<string>` | Exports the template as `'html'`, `'mjml'`, or `'zip'`. |

## Locking the output mode (`mode` prop)

Use the `mode` prop when you want to restrict the editor to a **single output format**. This is useful when your backend only supports one format (e.g., only MJML), or when you want to enforce a consistent workflow.

When `mode` is set:
- The editor initializes in that mode.
- The HTML/MJML switcher is **hidden** from the UI.
- The mode **cannot be changed** programmatically or by the user.

```tsx
// Always outputs MJML — switcher is hidden
<BuilderXD mode="mjml" ref={builderRef} />

// Always outputs HTML — switcher is hidden
<BuilderXD mode="html" ref={builderRef} />
```

To allow the user to switch modes freely, use `defaultMode` instead:

```tsx
// Starts in MJML mode but user can switch to HTML anytime
<BuilderXD defaultMode="mjml" ref={builderRef} />
```

## Advanced Setup

### Custom Image Uploader

Implement a `FileManagerProvider` to connect your own cloud storage:

```tsx
const myFileManager = {
  id: 'my-uploader',
  name: 'My Cloud Storage',
  onUpload: async (file) => {
    // Upload to S3, Cloudinary, etc. and return the public URL
    const url = await uploadToMyStorage(file);
    return url;
  }
};

<BuilderXD fileManager={myFileManager} />
```

### Loading an Existing Template

Pass any valid MJML or HTML string via `initialTemplate`:

```tsx
const savedMjml = await fetch('/api/campaigns/1').then(r => r.text());

<BuilderXD
  mode="mjml"
  initialTemplate={savedMjml}
  ref={builderRef}
/>
```

## Examples

We provide ready-to-use examples in the `examples/` directory of the package:
- **`examples/BasicImplementation.tsx`**: A minimal setup showing how to mount the builder and use the `ref` to save data to your backend.
- **`examples/AdvancedImplementation.tsx`**: An advanced implementation demonstrating the `mode` prop, `initialTemplate`, a custom `FileManagerProvider`, and a custom save handler.

## License

MIT License
