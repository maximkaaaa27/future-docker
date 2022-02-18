import React from 'react';
import './App.css';
import { useRoutes } from './routes';

function App() {
  
  const routes = useRoutes();

  
  return (
    <div className="main">
      {routes}
    </div>
  );
}

export default App;