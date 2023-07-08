import "./styles/App.css";
import React, { Component } from "react";
import CvForm from "./components/CvForm";
import CvPreview from "./components/CvPreview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: false,
    };
  }

  render() {
    return (
      <div>
        <div className="preview">
          <img
            src="https://fontawesome.com/icons/eye?f=sharp&s=regular"
            alt="preview"
          />
        </div>
        <CvForm />
        <CvPreview />
      </div>
    );
  }
}

export default App;
