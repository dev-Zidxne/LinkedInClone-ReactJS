import React from "react";

import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        {/*Header*/}
        <Header />:{/*Sidebar*/}
        {/*Feed*/}
        {/*Widgets*/}
      </header>
    </div>
  );
}

export default App;
