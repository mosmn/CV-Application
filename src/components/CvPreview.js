import "../styles/CvPreview.css";

const CvPreview = (props) => {
  const { name, title, phone, email, linkedin, location, file, imagePreviewUrl } = props;
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
            <img src={imagePreviewUrl} alt="pp" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default CvPreview;
