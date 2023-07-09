import "../styles/Education.css"
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
            <div
            className="educations-container"
            >
            {education.map((item, i) => (
                <div key={item.id}>
                <form className={`education-form ${isFocused ? "focused" : ""}`}
                onFocus={() => this.handleFocus(i)}
                onBlur={this.handleBlur}>
                    <div className="degree">
                    <input
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        data-index={i}
                        value={item.degree}
                        onChange={onEducationChange}
                    />
                    </div>
                    <div className="school">
                    <input
                        type="text"
                        name="school"
                        placeholder="School"
                        data-index={i}
                        value={item.school}
                        onChange={onEducationChange}
                    />
                    </div>
                    <div className="dates">
                    <input
                        type="text"
                        name="from"
                        placeholder="From"
                        data-index={i}
                        value={item.from}
                        onChange={onEducationChange}
                    />
                    <input
                        type="text"
                        name="to"
                        placeholder="To"
                        data-index={i}
                        value={item.to}
                        onChange={onEducationChange}
                    />
                    </div>
                    <div className="remove-btn">
                    <button
                        type="button"
                        className="btn"
                        data-id={item.id}
                        onClick={removeEducation}
                    > Remove
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
