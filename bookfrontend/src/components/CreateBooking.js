import React, { Component } from "react";
import axios from "axios";
import DateBooking from "./DateBooking";

export default class Createbooking extends Component {
  constructor(props) {
    super(props);

    this.onChangebookingHeading = this.onChangebookingHeading.bind(this);
    this.onChangebookingContent = this.onChangebookingContent.bind(this);
    this.onChangebookingDate = this.onChangebookingDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      booking_Heading: "",
      booking_Content: "",
      booking_Date: "",
      booking_TimeStart: "",
      booking_TimeEnd: "",
      booking_completeted: false
    };
  }
  onChangebookingHeading(e) {
    this.setState({
      booking_Heading: e.target.value
    });
  }
  onChangebookingContent(e) {
    this.setState({
      booking_Content: e.target.value
    });
  }
  onChangebookingDate(date) {
    this.setState({
      booking_Date: date.target.value
    });
  }






  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`booking Heading: ${this.state.booking_Heading}`);
    console.log(`booking Content: ${this.state.booking_Content}`);
    console.log(`booking Date: ${this.state.booking_Date}`);
    console.log(`booking TimeStart: ${this.state.booking_TimeStart}`);
    console.log(`booking TimeEnd: ${this.state.booking_TimeEnd}`);
    console.log(`booking Completed: ${this.state.booking_completed}`);
    const newbooking = {
      booking_Heading: this.state.booking_Heading,
      booking_Content: this.state.booking_Content,
      booking_Date: this.state.booking_Date,
      booking_TimeStart: this.booking_TimeStart,
      booking_TimeEnd: this.booking_TimeEnd,
      booking_completed: this.state.booking_completed
    };

    axios.post("http://localhost:5050/Booking/add", newbooking).then(res => {
      console.log(res.data);
    });

    this.setState({
      booking_Heading: "",
      booking_Content: "",
      booking_Date: "",
      booking_TimeStart: "",
      booking_TimeEnd: "",
      booking_completeted: false
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New booking</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Heading: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.booking_Heading}
              onChange={this.onChangebookingHeading}
            />
          </div>
          <div className="form-group">
            <label>Content: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.booking_Content}
              onChange={this.onChangebookingContent}
            />
          </div>
          <div className="form-group">
            <DateBooking
              selected={this.state.date}
              onChange={this.onChangebookingDate}
            />
          </div>
          
          <div className="form-group">
            <input
              type="submit"
              value="Create booking"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
