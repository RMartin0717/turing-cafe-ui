import React, { Component } from 'react'
import './Form.css'

class From extends { Component } {
  constructor(props) {
    super(props);
    this.state = {
      //need state for each input field
    }
  }

  handleChange = () => {
    //update state
  }

  render() {
    return (
      //need input fields for name, date, time, number of guests
      <input
        onChange={(event) => this.handleChange(event)}
      />
    )
  }
}

export default Form
