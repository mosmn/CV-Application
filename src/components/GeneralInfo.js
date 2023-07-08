import "../styles/GeneralInfo.css";
import React, { Component } from "react";

class GeneralInfo extends Component {
  render() {
    const {onChange} = this.props;

    return (
      <div className="general-info">
        <form className="general-info">
          <input
            type="text"
            name="name"
            placeholder="Name"
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
          <input
            type="file"
            name="photo"
            placeholder="Photo"
            onChange={onChange}
          />
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
