import "../styles/GeneralInfo.css";
import React, { Component } from "react";

class GeneralInfo extends Component {
  render() {
    const { onChange, uploadPic, src } = this.props;

    return (
      <div>
        <form className="general-info">
            <div className="info">
            <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={onChange}
          />
          <input
            type="text"
            name="title"
            placeholder="The role you're applying for"
            onChange={onChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={onChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={onChange}
          />
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn"
            onChange={onChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={onChange}
          />
            </div>
            <div className="photo">
                <label htmlFor="photo" className="photoLabel">
                    <div className="img-wrap img-upload">
                        <img for="photo-upload" src={src} alt="pp"/>
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
