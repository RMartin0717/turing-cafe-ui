import React from 'react'
import ReservationCard from '../ReservationCard/ReservationCard'
import './AllReservations.css'

const AllReservations = ({ reservationData, cancelReservation }) => {
  const reservations = reservationData.map(reservation => {
    return <ReservationCard
      id={reservation.id}
      key={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      cancelReservation={cancelReservation}
    />
  })

  return (
    <section className='reservations'>
      {reservations}
    </section>
  )

}

export default AllReservations
