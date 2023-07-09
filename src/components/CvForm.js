import "../styles/CvForm.css";
import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import CvPreview from "./CvPreview";
import html2pdf from "html2pdf.js";
import uniqid from "uniqid";

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
      experience: [
        {
          id: uniqid(),
          jobTitle: "",
          company: "",
          city: "",
          from: "",
          to: "",
          description: "",
        },
      ],
      education: [
        {
          id: uniqid(),
          degree: "",
          school: "",
          from: "",
          to: "",
        },
      ],
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

  onExperienceChange = (e) => {
    const { name, value } = e.target;
    const index = e.target.dataset.index;
    const { experience } = this.state;
    const updatedExperience = [...experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };
    this.setState({
      experience: updatedExperience,
    });
  };

  addExperience = (e) => {
    e.preventDefault();
    const { experience } = this.state;
    const newExperience = {
      id: uniqid(),
      jobTitle: "",
      company: "",
      city: "",
      from: "",
      to: "",
      description: "",
    };
    this.setState({
      experience: [...experience, newExperience],
    });
  };

  removeExperience = (e) => {
    const { experience } = this.state;
    const id = e.target.dataset.id;
    const updatedExperience = experience.filter((item) => item.id !== id);
    this.setState({
      experience: updatedExperience,
    });
  };

  onEducationChange = (e) => {
    const { name, value } = e.target;
    const index = e.target.dataset.index;
    const { education } = this.state;
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };

    this.setState({
      education: updatedEducation,
    });
  };

  addEducation = (e) => {
    e.preventDefault();
    const { education } = this.state;
    const newEducation = {
      id: uniqid(),
      degree: "",
      school: "",
      from: "",
      to: "",
    };
    this.setState({
      education: [...education, newEducation],
    });
  };

  removeEducation = (e) => {
    const { education } = this.state;
    const id = e.target.dataset.id;
    const updatedEducation = education.filter((item) => item.id !== id);
    this.setState({
      education: updatedEducation,
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
    const { generalInfo, imagePreviewUrl, summary, experience, education } =
      this.state;

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
            <div className="experience">
              <div className="title">Experience</div>
              <div className="line"></div>
              <Experience
                experience={experience}
                onExperienceChange={this.onExperienceChange}
                addExperience={this.addExperience}
                removeExperience={this.removeExperience}
              />
            </div>
            <div className="education">
              <div className="title">Education</div>
              <div className="line"></div>
              <Education
                education={education}
                onEducationChange={this.onEducationChange}
                addEducation={this.addEducation}
                removeEducation={this.removeEducation}
              />
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
              experience={experience}
                education={education}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CvForm;
