import React from "react";
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker'


export default class DateBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booking_Date: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    console.log(date)
    this.setState({
      booking_Date: date
    });
  }

  render() {
    return (
      <DateTimeRangePicker
        value = {this.state.booking_Date}
        selected={this.state.date}
        onChange={this.props.handleChange}
      />
    );
  }
}
