import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import { LoadingDots } from "./components/LoadingDots";
import { SelectTable } from "./components/SelectTable";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="main">
        <h4> ECMAScript FOR TABLE</h4>
        <SelectTable />
        <LoadingDots />
      </div>
    </QueryClientProvider>
  );
}

export default App;
