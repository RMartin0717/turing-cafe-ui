describe('App', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/reservations',
        [
          {
            "id": 1,
            "name": "Christie",
            "date": "12/29",
            "time": "7:00",
            "number": 12
          },
          {
            "id": 2,
            "name": "Leta",
            "date": "4/5",
            "time": "7:00",
            "number": 2
          }
        ])
      .visit('http://localhost:3000/')
    })
  it('Should have a controlled input field for a reservation name whose value reflects the data typed into the form', () => {
    cy.get('form input[name="name"]').type('Riley')
    .get('form input[name="name"]').should('have.value', 'Riley')
  })
  it('Should have a controlled input field for reservation date whose value reflects the data typed into the form', () => {
    cy.get('form input[name="date"]').type('5/26')
    .get('form input[name="date"]').should('have.value', '5/26')
  })
  it('Should have a controlled input field for reservation time whose value reflects the data typed into the form', () => {
    cy.get('form input[name="time"]').type('12:00')
    .get('form input[name="time"]').should('have.value', '12:00')
  })
  it('Should have a controlled input field number of guests for the reservation whose value reflects the data typed into the form', () => {
    cy.get('form input[name="number"]').type('2')
    .get('form input[name="number"]').should('have.value', '2')
  })
  it('Should be able to create a new reservation when the Create Reservation button is clicked', () => {
    cy.get('form input[name="name"]').type('Riley')
      .get('form input[name="date"]').type('5/26')
      .get('form input[name="time"]').type('12:00')
      .get('form input[name="number"]').type('1')
      .get('form > button').click()
      .get('article[title="Riley"]').should('exist')
  })
  it('Should only submit a reservation if all input fields are filled out', () => {
    cy.get('form input[name="name"]').type('Jenny')
      .get('form input[name="date"]').type('5/26')
      .get('form input[name="time"]').type('12:00')
      .get('form > button').click()
      .get('article[title="Jenny"]').should('not.exist')
  })
  it('Should clear the input fields after a reservation is successfully submitted', () => {
    cy.get('form input[name="name"]').type('Riley')
      .get('form input[name="date"]').type('5/26')
      .get('form input[name="time"]').type('12:00')
      .get('form input[name="number"]').type('2')
      .get('form > button').click()
      .get('form input[name="name"]').should('have.value', '')
      .get('form input[name="date"]').should('have.value', '')
      .get('form input[name="time"]').should('have.value', '')
      .get('form input[name="number"]').should('have.value', '')
  })
  it('Should return an error message if the user does not fill out all input fields', () => {
    cy.get('form input[name="name"]').type('Riley')
      .get('form input[name="date"]').type('5/26')
      .get('form input[name="time"]').type('12:00')
      .get('form > button').click()
  })
})
