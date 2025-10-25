import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Puzzle1 from './Puzzle1';
import Puzzle2 from './Puzzle2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Puzzle1 />} />
        <Route path="/theemeraldlady" element={<Puzzle2 />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;