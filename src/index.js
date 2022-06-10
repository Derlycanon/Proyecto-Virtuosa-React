import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './index.css';

import Maquillaje from './pages/Maquillaje';
import Labios from './pages/subMaquillaje/Labios';
import Ojos from './pages/subMaquillaje/Ojos';
import Piel from './pages/subMaquillaje/Piel';
import Rostro from './pages/subMaquillaje/Rostro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>

      <Route path='/home' element={<Navigate replace to={"/"} />}></Route>
      <Route path='/maquillaje' element={<Maquillaje />}></Route>
      <Route path='/ojos' element={<Ojos />} ></Route>
      <Route path='/labios' element={<Labios />} ></Route>
      <Route path='/piel' element={<Piel />}></Route>
      <Route path='/rostro' element={<Rostro />}></Route>

    </Routes>
  </BrowserRouter>

);






