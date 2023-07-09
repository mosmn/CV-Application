import "../styles/Summary.css";
import React, { Component } from "react";

class Summary extends Component {
  render() {
    const { onSummaryChange } = this.props;

    return (
      <div>
        <form className="summary-input">
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
