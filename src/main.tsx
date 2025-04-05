import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import '@fontsource/inter/400.css';  // For normal weight of Inter
import '@fontsource/poppins/600.css'; // For bold weight of Poppins

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
