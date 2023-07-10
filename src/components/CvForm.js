import "../styles/CvForm.css";
import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import Summary from "./Summary";
import Experience from "./Experience";
import Education from "./Education";
import CvPreview from "./CvPreview";
import html2pdf from "html2pdf.js";
import uniqid from "uniqid"
import userImage from "../imgs/user.png";
import Man from "../imgs/man.jpeg";

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
        imagePreviewUrl: userImage,
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
        generalInfo: {
            ...this.state.generalInfo,
            file: file,
            imagePreviewUrl: reader.result,
        },
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

  generateRandom = () => {
    const randomGeneralInfo = {
      name: "John Doe",
      title: "Web Developer",
      phone: "123-456-7890",
      email: "johndoe@example.com",
      linkedin: "linkedin.com/in/johndoe",
      location: "New York City",
      file: "",
      imagePreviewUrl: Man,
    };
  
    const randomSummary = "Experienced web developer with a passion for creating user-friendly and visually appealing websites. Skilled in HTML, CSS, and JavaScript, with a focus on front-end development. Proven track record of delivering high-quality projects on time and within budget.";
  
    const randomExperience = [
      {
        id: uniqid(),
        jobTitle: "Front-end Developer",
        company: "ABC Company",
        city: "New York",
        from: "2018-01-01",
        to: "2020-12-31",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: uniqid(),
        jobTitle: "UI Designer",
        company: "XYZ Agency",
        city: "San Francisco",
        from: "2016-01-01",
        to: "2017-12-31",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      },
    ];
  
    const randomEducation = [
      {
        id: uniqid(),
        degree: "Bachelor of Science",
        school: "University of ABC",
        from: "2012-01-01",
        to: "2016-12-31",
      },
    ];
  
    this.setState({
      generalInfo: randomGeneralInfo,
      summary: randomSummary,
      experience: randomExperience,
      education: randomEducation,
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
    const { generalInfo, summary, experience, education } =
      this.state;
      const { name, title, phone, email, linkedin, location, imagePreviewUrl } = generalInfo;
      const generalInfoInputValues = { name, title, phone, email, linkedin, location, imagePreviewUrl };

    return (
      <div>
        <div className="formContainer">
            <div className="form-btns">
            <div className="previewBtn" onClick={this.togglePreview}>
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/709/709612.png"
              alt="preview"
            />
          </div>
          <div className="generate-random">
            <button className="randomBtn" onClick={this.generateRandom}>
                Generate random CV
            </button>
            </div>
            </div>
          <div className="cv">
            <GeneralInfo
              onInfoChange={this.onInfoChange}
              uploadPic={this.photoUpload}
              src={imagePreviewUrl}
              inputValues={generalInfoInputValues}
            />
            <div className="summary">
              <div className="title">Summary</div>
              <div className="line"></div>
              <Summary onSummaryChange={this.onSummaryChange} value={summary}/>
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
              src={imagePreviewUrl}
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
