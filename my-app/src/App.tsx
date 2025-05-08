import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Counter from "./pages/Counter";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counter2" element={<Counter />} />
        {/* これはうまく動かないらしい */}
        {/* <ContextAProvider>
          <Route path="/context" element={<Context />} />
        </ContextAProvider> */}

      </Routes>
    </Router>
  );
};

export default App;
