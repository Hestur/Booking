import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class DeleteBooking extends React.Component {
    constructor(props) {
        super(props);
        this.deleteBooking = this.deleteBooking.bind(this);
    }
    deleteBooking() {
        axios.delete('http://localhost:5050/Booking/delete/'+this.props.match.params.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
            window.history.back()
    }
render(){
    return(
        <div>
            <Link to={"/edit/"+this.props.match.params.id} className="btn btn-primary">Edit</Link>
         
            <button onClick={this.deleteBooking} className="btn btn-danger">Delete</button>
            </div>
    )
}
}


