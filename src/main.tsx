// Esse é o arquivo responsável por injetar nossa aplicação react no html que o navegador vai ler.
// É o responsável por renderizar e atualizar os elementos React. Ele faz isso por meio do ReactDOM, que, por padrão, renderiza o componente <App /> do arquivo src/App.tsx. Ainda, o componente App será renderizado na <div id="root"></div>, no arquivo index.html.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
