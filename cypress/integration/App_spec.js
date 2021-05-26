describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Should display the page title', () => {
    cy.get('h1').should('contain.text', 'Turing Cafe Reservations')
  })
  it('Should display a reservation form', () => {
    cy.get('.res-form').should('exist')
  })
  it('Should display a field displaying all reservations', () => {
    cy.get('.reservations').should('exist')
  })
})
