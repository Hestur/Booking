import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateBooking from './components/CreateBooking';
import EditBooking from './components/EditBooking';
import BookingList from './components/BookingList'; 
import DateBooking from './components/DateBooking';
import DeleteBooking from './components/DeleteBooking';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://reddit.com" target="_blank">YEAH</a>
            <Link to="/" className="navbar-brand">Booking JA App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Bookings</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Booking</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={BookingList} />
          <Route path="/edit/:id" component={EditBooking} />
          <Route path="/create" component={CreateBooking} />
          <Route path="/delete/:id" component={DeleteBooking}/>
          <Route path="/date" component={DateBooking} />
        </div>
      </Router>
    );
  }
}

export default App;