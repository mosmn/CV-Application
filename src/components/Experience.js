import "../styles/Experience.css";
import React, { Component } from "react";

class Experience extends Component {
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
    const { experience, onExperienceChange, addExperience, removeExperience } =
      this.props;
    const { isFocused } = this.state;

    return (
      <div>
        <div className="experiences-container">
          {experience.map((item, i) => (
            <div key={item.id}>
              <form
                className={`experience-form ${isFocused ? "focused" : ""}`}
                onFocus={() => this.handleFocus(i)}
                onBlur={this.handleBlur}
              >
                <div className="job-title">
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    data-index={i}
                    value={item.jobTitle}
                    onChange={onExperienceChange}
                  />
                </div>
                <div className="company">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    data-index={i}
                    value={item.company}
                    onChange={onExperienceChange}
                  />
                </div>
                <div
                  className="city
                    "
                >
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    data-index={i}
                    value={item.city}
                    onChange={onExperienceChange}
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
                      onChange={onExperienceChange}
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
                      onChange={onExperienceChange}
                    />
                  </div>
                </div>
                <div className="description">
                  <textarea
                    type="text"
                    name="description"
                    placeholder="What did you do?"
                    data-index={i}
                    value={item.description}
                    onChange={onExperienceChange}
                  />
                </div>
                <div className="remove-experience">
                  <button
                    type="button"
                    data-id={item.id}
                    onClick={removeExperience}
                  >
                    Remove
                  </button>
                </div>
              </form>
            </div>
          ))}
          <div className="add-experience">
            <button type="button" onClick={addExperience}>
              Add Experience
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
