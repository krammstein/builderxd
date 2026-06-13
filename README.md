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
| `initialTemplate` | `string` | `undefined` | Initial MJML or HTML string to load. |
| `initialNodes` | `BlockNode[]` | `undefined` | Initial JSON nodes array. |
| `fileManager` | `FileManagerProvider` | `undefined` | Custom file manager for image/video uploads. |
| `espIntegration` | `ESPIntegration` | `undefined` | Integration object for Push/Pull templates. |
| `uiConfig` | `UIConfig` | `{}` | Configure visibility of UI elements (e.g. `showExport`, `showThemeToggle`). |
| `googleFonts` | `string[]` | `['Roboto', 'Open Sans', ...]` | List of Google Fonts available in the editor. |

### Methods (via ref)

You can call these methods using a React ref attached to the `BuilderXD` component:

- `exportHTML()`: Returns the compiled responsive HTML string.
- `exportMJML()`: Returns the compiled MJML string.
- `exportJSON()`: Returns the internal nodes state as a JSON array.
- `loadTemplate(code: string, mode: 'html' | 'mjml')`: Loads a new template into the builder.

## Advanced Setup

If you want to use custom image uploading, implement the `FileManagerProvider`:

```tsx
const myFileManager = {
  id: 'my-uploader',
  name: 'My Cloud Storage',
  onUpload: async (file) => {
    // upload file and return URL
    return 'https://my-cdn.com/' + file.name;
  }
};

<BuilderXD fileManager={myFileManager} />
```

## License

MIT License
