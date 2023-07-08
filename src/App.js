import "./styles/App.css";
import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: false,
    };
  }

  
  render() {
    return (
      <div className="cv">
        <div className="preview">
          <img
            src="https://fontawesome.com/icons/eye?f=sharp&s=regular"
            alt="preview"
          />
        </div>
        <GeneralInfo />
      </div>
    );
  }
}

export default App;
