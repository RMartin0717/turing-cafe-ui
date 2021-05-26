const fetchReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
}

const postReservation = (newRes) => {
  return fetch(('http://localhost:3001/api/v1/reservations'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newRes),
  })
}

export { fetchReservations, postReservation }
