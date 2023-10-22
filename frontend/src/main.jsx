import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import './index.css';
import CreateParty from './screens/CreateParty';
import Home from './screens/Home/Index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/party/create" element={<CreateParty />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
