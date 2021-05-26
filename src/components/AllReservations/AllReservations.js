import React from 'react'
import ReservationCard from '../ReservationCard/ReservationCard'

const AllReservations = ({ reservationData, cancelReservation }) => {
  //needs to accept cancelReservation method as props and pass it down to each ReservationCard
  //stored in a variable, iterate over reservation data and create a ReservationCard for each data point, passing in data as props
  //return a section containing previously created variable
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
    <section>
      {reservations}
    </section>
  )

}

export default AllReservations
