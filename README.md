# jp-storybook-components

[![Storybook Live](https://img.shields.io/badge/Storybook-Live_Docs-FF4785?logo=storybook&logoColor=white)](https://japool.github.io/storybook-react/)

Librería de componentes React moderna construida con **TypeScript**, **CSS Modules**, **Storybook 10** y empaquetada con **tsup**.

## 🚀 Características

- ⚡ **Vite**: Entorno de desarrollo rápido.
- 🎨 **CSS Modules**: Estilos encapsulados sin colisiones globales.
- 📚 **Storybook 10**: Documentación visual e interactiva de componentes con soporte para Vitest y Playwright.
- 📦 **tsup**: Bundler ultrarrápido basado en esbuild para generar paquetes CJS, ESM y tipos `.d.ts`.
- 🛡️ **TypeScript**: Tipado estricto para componentes y props.

---

## 🛠️ Scripts Disponibles

| Comando                   | Descripción                                                                 |
| :------------------------ | :-------------------------------------------------------------------------- |
| `npm run dev`             | Inicia el servidor de desarrollo Vite con una app demo de componentes.      |
| `npm run storybook`       | Inicia Storybook en modo interactivo en `http://localhost:6006`.            |
| `npm run build:lib`       | Compila y empaqueta la librería con `tsup` en `dist/` (CJS, ESM y `.d.ts`). |
| `npm run build-storybook` | Genera la versión estática de Storybook en `storybook-static/`.             |
| `npm run build`           | Compila la aplicación de demostración Vite.                                 |

---

## 📁 Estructura del Proyecto

```text
jp-storybook-components/
├── .storybook/               # Configuración de Storybook (main.ts, preview.ts)
├── src/
│   ├── components/           # Componentes de la librería
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   ├── Card.module.css
│   │   │   ├── Card.stories.tsx
│   │   │   └── index.ts
│   │   └── index.ts          # Exportación de todos los componentes
│   ├── index.ts              # Entrypoint principal para distribución (tsup)
│   ├── App.tsx               # Aplicación demo
│   └── vite-env.d.ts         # Declaraciones de tipos (Vite y CSS Modules)
├── tsup.config.ts            # Configuración del bundler de librería
├── tsconfig.build.json       # Configuración de TypeScript para emisión de tipos
└── package.json              # Configuración del paquete y dependencias
```

---

## 📦 Consumir la Librería

Una vez compilada (`npm run build:lib`):

```tsx
import { Button, Card } from "jp-storybook-components";
import "jp-storybook-components/dist/index.css";

export function Example() {
  return (
    <Card title="Mi Tarjeta">
      <Button variant="primary" onClick={() => alert("Hola!")}>
        Presióname
      </Button>
    </Card>
  );
}
```
