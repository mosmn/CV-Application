import "../styles/Education.css";
import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
    };
  }

  handleFocus = (index) => {
    this.setState({ focusedIndex: index });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  render() {
    const { education, onEducationChange, addEducation, removeEducation } =
      this.props;
    const { isFocused } = this.state;

    return (
      <div>
        <div className="educations-container">
          {education.map((item, i) => (
            <div key={item.id}>
              <form
                className={`education-form ${isFocused ? "focused" : ""}`}
                onFocus={() => this.handleFocus(i)}
                onBlur={this.handleBlur}
              >
                <div className="degree">
                  <input
                    type="text"
                    name="degree"
                    placeholder="Degree and Field of Study"
                    data-index={i}
                    value={item.degree}
                    onChange={onEducationChange}
                  />
                </div>
                <div className="school">
                  <input
                    type="text"
                    name="school"
                    placeholder="School or University"
                    data-index={i}
                    value={item.school}
                    onChange={onEducationChange}
                  />
                </div>
                <div className="dates">
                  <div className="from">
                    <label htmlFor="from">From</label>
                    <input
                      type="date"
                      name="from"
                      placeholder="From"
                      data-index={i}
                      value={item.from}
                      onChange={onEducationChange}
                    />
                  </div>
                  <div className="to">
                    <label htmlFor="to">To</label>
                    <input
                      type="date"
                      name="to"
                      placeholder="To"
                      data-index={i}
                      value={item.to}
                      onChange={onEducationChange}
                    />
                  </div>
                </div>
                <div className="remove-btn">
                  <button
                    type="button"
                    className="btn"
                    data-id={item.id}
                    onClick={removeEducation}
                  >
                    {" "}
                    Remove
                  </button>
                </div>
              </form>
            </div>
          ))}
        </div>
        <div className="add-btn">
          <button type="button" className="btn" onClick={addEducation}>
            Add Education
          </button>
        </div>
      </div>
    );
  }
}

export default Education;
