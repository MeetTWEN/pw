// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});

// package.json
{
  "name": "react-project",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "format": "prettier --write ."
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.0.0"
  },
  "devDependencies": {
    "vite": "latest",
    "@vitejs/plugin-react": "latest",
    "eslint": "latest",
    "prettier": "latest"
  }
}

// .gitignore
node_modules/
dist/
.vscode/
.env

// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './style/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';
import NotFound from './views/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicLayout />} />
      <Route path="/private/*" element={<PrivateLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

// src/views/NotFound.jsx
import React from 'react';

const NotFound = () => {
  return <h1>404 - Page Not Found</h1>;
};

export default NotFound;

// src/layouts/PublicLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <div>
      <h1>Public Layout</h1>
      <Outlet />
    </div>
  );
};

export default PublicLayout;

// src/layouts/PrivateLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  return (
    <div>
      <h1>Private Layout</h1>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
