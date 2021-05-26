import React, { Component } from 'react';
import AllReservations from '../AllReservations/AllReservations'
import './App.css';
import { fetchReservations } from '../../utilities/APICalls'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: []
    }
  }

  cancelReservation = () => {

  }

  componentDidMount() {
    fetchReservations()
      .then(data => this.setState({ reservations: data }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
        <AllReservations reservationData={this.state.reservations} cancelReservation={this.cancelReservation} />
        </div>
      </div>
    )
  }
}

export default App;
