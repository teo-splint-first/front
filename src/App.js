import React from "react";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index component={<>test</>} />
      </Route>
    </Routes>
  );
};

export default App;
