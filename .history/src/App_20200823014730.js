import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
