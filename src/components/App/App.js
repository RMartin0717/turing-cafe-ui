import React, { Component } from 'react';
import AllReservations from '../AllReservations/AllReservations'
import Form from '../Form/Form'
import './App.css';
import { fetchReservations, postReservation, deleteReservation } from '../../utilities/APICalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  createReservation = (newReservation) => {
    postReservation(newReservation)
    this.setState({ reservations: [...this.state.reservations, newReservation] })
  }

  cancelReservation = (id) => {
    deleteReservation(id)
      .then(data => this.setState({ reservations: data }))
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
          <Form createReservation={this.createReservation} />
        </div>
        <div className='resy-container'>
          <AllReservations reservationData={this.state.reservations} cancelReservation={this.cancelReservation} />
        </div>
      </div>
    )
  }
}

export default App;
