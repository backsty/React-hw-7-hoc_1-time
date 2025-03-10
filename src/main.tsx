import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Находим корневой элемент
const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

// Создаем и рендерим приложение
createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
