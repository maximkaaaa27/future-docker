import React from "react";
import "./App.css";

import { QueryClientProvider, QueryClient } from "react-query";
import { SelectTable } from "./components/SelectTable";
import { useSpring, animated } from "react-spring";
import { Route, Routes } from "react-router-dom";
import { MainTable } from "components/Table";

function App() {
  const queryClient = new QueryClient();
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="main" id="capture">
        <animated.h4 style={props}>ECMAScript FOR TABLE</animated.h4>
        <Routes>
          <Route path="/" element={<SelectTable />} />
          <Route path="/:size" element={<MainTable />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
