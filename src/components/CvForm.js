import "../styles/CvForm.css";
import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import Summary from "./Summary";
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
        file: "",
        imagePreviewUrl:
          "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
      },
      summary: "",
    };
  }

  togglePreview = () => {
    const preview = document.querySelector(".previewContainer");
    preview.classList.toggle("on");
  };

  photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  onInfoChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      generalInfo: {
        ...prevState.generalInfo,
        [name]: value,
      },
    }));
  };

  onSummaryChange = (e) => {
    this.setState({
      summary: e.target.value,
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
    const { generalInfo, imagePreviewUrl, summary } = this.state;

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
            <GeneralInfo
              onInfoChange={this.onInfoChange}
              uploadPic={this.photoUpload}
              src={imagePreviewUrl}
            />
            <div className="summary">
              <div className="title">Summary</div>
              <div className="line"></div>
              <Summary onSummaryChange={this.onSummaryChange} />
            </div>
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
            <CvPreview
              {...generalInfo}
              imagePreviewUrl={imagePreviewUrl}
              summary={summary}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CvForm;
