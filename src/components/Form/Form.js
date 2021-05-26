import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitReservation = (event) => {
    event.preventDefault()
    const newRes = {
      id: Date.now(),
      ...this.state
    }
    this.props.createReservation(newRes)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    return (
      <form className='res-form'>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='date'
          name='date'
          value={this.state.date}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='time'
          name='time'
          value={this.state.time}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type='number'
          placeholder='number of guests'
          name='number'
          value={this.state.number}
          onChange={(event) => this.handleChange(event)}
        />
        <button onClick={(event) => this.submitReservation(event)}>Create Reservation</button>
      </form>
    )
  }
}

export default Form
