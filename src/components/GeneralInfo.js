import "../styles/GeneralInfo.css";
import React, { Component } from "react";
import Cv from "./Cv";

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      email: "",
      linkedin: "",
      location: "",
      photo: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="general-info">
        <form className="general-info">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.onChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={this.onChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.onChange}
          />
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn"
            onChange={this.onChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={this.onChange}
          />
          <input
            type="file"
            name="photo"
            placeholder="Photo"
            onChange={this.onChange}
          />
        </form>
        <Cv {...this.state} />
      </div>
    );
  }
}

export default GeneralInfo;
