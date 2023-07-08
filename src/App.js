import "./styles/App.css";
import React, { Component } from "react";
import CvForm from "./components/CvForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CvForm />
      </div>
    );
  }
}

export default App;
