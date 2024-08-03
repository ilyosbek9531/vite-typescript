import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Blog from './pages/Blog';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-red-800">Vite + React </h1>
      <Blog
        name="Alisher"
        isAge={true}
        ages={[10, 12, 14]}
      />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
