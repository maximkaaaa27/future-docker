import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import { useRoutes } from "./routes";

function App() {
  const routes = useRoutes();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="main">
        <h4> ECMAScript FOR TABLE</h4>
        {routes}
      </div>
    </QueryClientProvider>
  );
}

export default App;
