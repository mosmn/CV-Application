import "./styles/App.css";
import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  render() {
    return (
      <div className="cv">
        <GeneralInfo />
      </div>
    );
  }
}

export default App;
