import React from 'react'

const ReservationCard = ({ id, name, date, time, number, cancelReservation }) => {
  return (
    <article>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
      <button onClick={cancelReservation()}>Cancel</button>
    </article>
  )
  //needs to accept cancelReservation method as props and have it on a cancel button
  //needs to accept all relevant data for reservations and display it
}

export default ReservationCard
