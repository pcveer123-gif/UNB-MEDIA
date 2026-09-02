// Safe window.fetch getter/setter definition
try {
  const originalFetch = window.fetch;
  let currentFetch = originalFetch ? originalFetch.bind(window) : undefined;
  Object.defineProperty(window, 'fetch', {
    configurable: true,
    enumerable: true,
    get: () => currentFetch,
    set: (fn) => {
      currentFetch = fn;
    },
  });
} catch {
  // Ignored if already writable or configured
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
