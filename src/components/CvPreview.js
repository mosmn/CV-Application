import "../styles/CvPreview.css";

const CvPreview = (props) => {
  const {
    name,
    title,
    phone,
    email,
    linkedin,
    location,
    src,
    summary,
    experience,
    education,
  } = props;
  return (
    <div className="print">
      <div className="general-info-preview">
        <div className="info-preview">
          <div className="name-preview">{name}</div>
          <div className="title-preview">{title}</div>
          <div className="phone-preview">{phone}</div>
          <div className="email-preview">{email}</div>
          <div className="linkedin-preview">{linkedin}</div>
          <div className="location-preview">{location}</div>
        </div>
        <div className="photo-preview">
          <div className="img-wrap-preview img-upload-preview">
            <img src={src} alt="pp" />
          </div>
        </div>
      </div>
      <div className="summary-preview">
        <div className="summary-title">Summary</div>
        <div className="line"></div>
        <div className="summary-text">{summary}</div>
      </div>
      <div className="experience-preview">
        <div className="experience-title">Experience</div>
        <div className="line"></div>
        {experience.map((item) => (
          <div key={item.id} className="obj">
            <div className="job-title-preview">{item.jobTitle}</div>
            <div className="company-preview">{item.company}</div>
            <div className="city-preview">{item.city}</div>
            <div className="dates-preview">
              {item.from} - {item.to}
            </div>
            <div className="description-preview">{item.description}</div>
          </div>
        ))}
      </div>
      <div className="education-preview">
        <div className="education-title">Education</div>
        <div className="line"></div>
        {education.map((item) => (
          <div key={item.id} className="obj">
            <div className="degree-preview">{item.degree}</div>
            <div className="school-preview">{item.school}</div>
            <div className="dates-preview">
              {item.from} - {item.to}
              </div>
              </div>
              ))}
              </div>
    </div>
  );
};

export default CvPreview;
