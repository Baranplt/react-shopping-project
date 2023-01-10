import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Header from './components/Global/HeaderNav'
import Router from './Router/Router';
function App() {

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
