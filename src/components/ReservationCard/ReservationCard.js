import React from 'react'
import './ReservationCard.css'

const ReservationCard = ({ id, name, date, time, number, cancelReservation }) => {
  return (
    <article className='res-card'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
      <button onClick={() => cancelReservation(id)}>Cancel</button>
    </article>
  )
}

export default ReservationCard
