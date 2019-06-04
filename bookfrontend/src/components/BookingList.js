import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Booking = props => (
  <tr>
    <td className={props.booking.booking_completed ? "completed" : ""}>
      {props.booking.booking_Heading}
    </td>
    <td className={props.booking.booking_completed ? "completed" : ""}>
      {props.booking.booking_Content}
    </td>
    <td className={props.booking.booking_completed ? "completed" : ""}>
      {props.booking.booking_Date}
    </td>

    <td>
      <Link to={"/edit/" + props.booking._id}>Edit</Link>

      <Link to={"/delete/" + props.booking._id}>Delete</Link>
    </td>
  </tr>
);

export default class bookingsList extends Component {
  constructor(props) {
    super(props);
    this.state = { bookings: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5050/Booking")
      .then(response => {
        this.setState({ bookings: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  bookingsList() {
    return this.state.bookings.map(function(currentbooking, i) {
      return <Booking booking={currentbooking} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>booking List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Heading</th>
              <th>Content</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{this.bookingsList()}</tbody>
        </table>
      </div>
    );
  }
}
