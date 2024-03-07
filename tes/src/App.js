 import React from 'react'
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import He from './he'
 import Nex from './nex'
 
 export default function App() {
   return (
     <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<He />} />
            <Route path="/get" element={<Nex />} />
          </Routes>
        </BrowserRouter>

     </div>
   )
 }
 