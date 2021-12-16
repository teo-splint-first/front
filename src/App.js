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
        <Route index component={<Home />} />
        <Route path="template" component={<Templates />} />
        <Route path="make" component={<MakeTemplate />} />
        <Route path="roulette" component={<Roulette />} />
        <Route path="result" component={<Result />} />
      </Route>
    </Routes>
  );
};

export default App;
