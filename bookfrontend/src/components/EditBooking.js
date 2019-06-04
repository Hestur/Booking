import React, { Component } from "react";
import axios from "axios";
import DateBooking from "./DateBooking";




export default class Editbooking extends Component {
  constructor(props) {
    super(props);

    this.onChangebookingHeading = this.onChangebookingHeading.bind(this);
    this.onChangebookingContent = this.onChangebookingContent.bind(this);
    this.onChangebookingDate = this.onChangebookingDate.bind(this);
    this.onChangebookingCompleted = this.onChangebookingCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      booking_Heading: "",
      booking_Content: "",
      booking_Date: new Date(),
      booking_completeted: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5050/Booking/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          booking_Heading: response.data.booking_Heading,
          booking_Content: response.data.booking_Content,
          booking_Date: response.data.booking_Date,
          booking_completed: response.data.booking_completed
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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

  onChangebookingCompleted(e) {
    this.setState({
      booking_completed: !this.state.booking_completed
    });
  }
   onChangebookingDate(date){
     this.setState({
       booking_Date: date
     });
   }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      booking_Heading: this.state.booking_Heading,
      booking_Content: this.state.booking_Content,
      booking_Date: this.state.booking_Date,
      booking_completed: this.state.booking_completed
    };
    console.log(obj)
    axios
      .put(
        "http://localhost:5050/Booking/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

     this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h3>Update booking</h3>
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
         
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="completedCheckbox"
                name="completedCheckbox"
                onChange={this.onChangebookingCompleted}
                checked={this.state.booking_completed}
              />
              <label className="form-check-label" htmlFor="completedCheckbox">
                Completed
              </label>
            </div>
            <div className="form-group">
            
            <DateBooking/>
            <span>Format: DD/MM/YYYY</span>
            </div>


            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Update booking"
                className="btn btn-primary"
              />
            </div>
        </form>
      </div>
    );
  }
}
