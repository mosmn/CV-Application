import "../styles/CvPreview.css";

const CvPreview = (props) => {
  const { name, phone, email, linkedin, location, photo } = props;
  return (
    <div className="print">
      <div className="name">{name}</div>
      <div className="phone">{phone}</div>
      <div className="email">{email}</div>
      <div className="linkedin">{linkedin}</div>
      <div className="location">{location}</div>
      <div className="photo">{photo}</div>
    </div>
  );
};

export default CvPreview;
