import "../styles/GeneralInfo.css";
import React, { Component } from "react";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
    };
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  render() {
    const { onInfoChange, uploadPic, src } = this.props;
    const { isFocused } = this.state;

    return (
      <div>
        <form
          className={`general-info ${isFocused ? "focused" : ""}`}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        >
          <div className="info">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={onInfoChange}
            />
            <input
              type="text"
              name="title"
              placeholder="The role you're applying for"
              onChange={onInfoChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={onInfoChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={onInfoChange}
            />
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn"
              onChange={onInfoChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={onInfoChange}
            />
          </div>
          <div className="photo">
            <label htmlFor="photo-upload" className="photoLabel">
              <div className="img-wrap img-upload">
                <img src={src} alt="pp" />
              </div>
              <input id="photo-upload" type="file" onChange={uploadPic} />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
