import { useState } from "react";
import { Button, Card } from "./components";
import "./App.css";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header className="header">
        <h1>jp-storybook-components</h1>
        <p className="subtitle">
          Librería de componentes React moderna con TypeScript, CSS Modules,
          Storybook y tsup.
        </p>
      </header>

      <main className="main-content">
        <section className="section">
          <h2>Componentes Demo</h2>
          <div className="grid">
            <Card title="Botones y Variantes" hoverable>
              <p>
                Botones creados con CSS Modules y soporte para variantes y
                tamaños.
              </p>
              <div className="button-group">
                <Button
                  variant="primary"
                  onClick={() => setCount((c) => c + 1)}
                >
                  Clicks: {count}
                </Button>
                <Button variant="secondary" onClick={() => setCount(0)}>
                  Resetear
                </Button>
                <Button variant="outline" size="small">
                  Outline Pequeño
                </Button>
              </div>
            </Card>

            <Card title="Comandos Útiles" hoverable>
              <ul className="cmd-list">
                <li>
                  <code>npm run storybook</code>: Inicia Storybook en puerto
                  6006
                </li>
                <li>
                  <code>npm run build:lib</code>: Empaqueta la librería con tsup
                  (CJS, ESM y .d.ts)
                </li>
                <li>
                  <code>npm run build-storybook</code>: Genera la build estática
                  de Storybook
                </li>
              </ul>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
