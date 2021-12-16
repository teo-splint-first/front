import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import MakeTemplate from "./components/pages/Make";
import Result from "./components/pages/Result";
import Roulette from "./components/pages/Roulette";
import Templates from "./components/pages/Templates";
const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="template" element={<Templates />} />
        <Route path="make" element={<MakeTemplate />} />
        <Route path="roulette" element={<Roulette />} />
        <Route path="result" element={<Result />} />
      </Route>
    </Routes>
  );
};

export default App;
