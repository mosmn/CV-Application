import "../styles/Summary.css";
import React, { Component } from "react";

class Summary extends Component {
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
    const { onSummaryChange } = this.props;
    const { isFocused } = this.state;

    return (
      <div>
        <form
          className={`summary-input ${isFocused ? "focused" : ""}`}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        >
          <textarea
            type="text"
            name="summary"
            placeholder="Whats the  one thing that makes you stand out?"
            onChange={onSummaryChange}
          />
        </form>
      </div>
    );
  }
}

export default Summary;
