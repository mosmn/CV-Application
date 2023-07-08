import "../styles/CvForm.css";
import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import CvPreview from "./CvPreview";
import html2pdf from "html2pdf.js";

class CvForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        name: "",
        title: "",
        phone: "",
        email: "",
        linkedin: "",
        location: "",
        photo: "",
      },
    };
  }

  togglePreview = () => {
    const preview = document.querySelector(".previewContainer");
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

  downloadAsPdf = () => {
    const cv = document.querySelector(".print");
    const options = {
      margin: 0.5,
      filename: "cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(options).from(cv).save();
  };

  render() {
    const { generalInfo } = this.state;

    return (
      <div>
        <div className="formContainer">
          <div className="previewBtn" onClick={this.togglePreview}>
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
              alt="preview"
            />
          </div>
          <div className="cv">
            <GeneralInfo onChange={this.onChange} />
          </div>
        </div>
        <div className="previewContainer">
          <div className="btns">
            <button className="downloadBtn" onClick={this.downloadAsPdf}>
              Download as PDF
            </button>
            <div className="previewBtnInside" onClick={this.togglePreview}>
              <img
                className="icon"
                src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
                alt="preview"
              />
            </div>
          </div>
          <div className="preview">
            <CvPreview {...generalInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default CvForm;
