import React from 'react';
import { createRoot } from 'react-dom/client'
import '../src/css/index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={"/tcp-international/"}>
      <Routes>
        <Route path='*' element={<App />} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
