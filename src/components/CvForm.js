import "../styles/CvForm.css";
import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import CvPreview from "./CvPreview";

class CvForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        name: "",
        phone: "",
        email: "",
        linkedin: "",
        location: "",
        photo: "",
      },
    };
  }

  togglePreview = () => {
    const preview = document.querySelector(".preview");
    preview.classList.toggle("on");
  };

  onChange = (e) => {
    this.setState({
      generalInfo: {
        ...this.state.generalInfo,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <div className="previewBtn" onClick={this.togglePreview}>
          <img
            src="https://fontawesome.com/icons/eye?f=sharp&s=regular"
            alt="preview"
          />
        </div>
        <div className="cv">
          <GeneralInfo onChange={this.onChange} />
        </div>
        <div className="preview">
          <CvPreview {...this.state.generalInfo} />
        </div>
      </div>
    );
  }
}

export default CvForm;
