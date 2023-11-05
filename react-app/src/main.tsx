import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';
import ErrorBoundary from './components/ErrorBoundary';

import { Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path=":page" element={<SearchPage />}>
            <Route path="details/:details" element={<DetailPage />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
