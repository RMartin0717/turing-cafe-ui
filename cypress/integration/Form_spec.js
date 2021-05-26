describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
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
      .get('form input[name="number"]').type('2')
      .get('form > button').click()
      .get('article[title="Riley"]').should('exist')
  })
  it('Should only submit a reservation if all input fields are filled out', () => {

  })
  it('Should clear the input fields after a reservation is successfully submitted', () => {

  })
  it('Should return an error message if the user does not fill out all input fields', () => {

  })
})
