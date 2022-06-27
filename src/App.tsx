import React from "react";
import Helmet from "react-helmet";
import "./App.css";

function App() {
  return (
    <>
      <Helmet bodyAttributes={{ class: "bg-slate-600" }}></Helmet>
      <div className="bg-slate-100"></div>
    </>
  );
}

export default App;
