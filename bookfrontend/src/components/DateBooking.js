import 'rc-time-picker/assets/index.css';

import React from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

export default class DateBooking extends React.Component {
  state = {
    value: moment(),
  };

//   handleValueChange = value => {
//     //  console.log(value && value.format('HH:mm:ss'));
//     this.setState({ value });
//   };
//   handleValueChangeDate = value => {
//     this.setState({ booking_Date: value });
//   };

  render() {
    const { value } = this.state;
    return (
      <div>
          <input type="date" value={moment()} onChange={this.handleValueChange}/>
        <TimePicker defaultValue={value} onChange={this.handleValueChange} showSecond={false} />
        <TimePicker value={value} onChange={this.handleValueChange} showSecond={false} />
      </div>
    );
  }
}