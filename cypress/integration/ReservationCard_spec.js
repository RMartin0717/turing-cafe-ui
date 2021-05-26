describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Should display a reservation name', () => {
    cy.get('article[id="1"] > h3').should('include.text', "Christie")
  })
  it('Should display a reservation date', () => {
    cy.get('article[id="1"]').should('include.text', "12/29")
  })
  it('Should display a reservation time', () => {
    cy.get('article[id="1"]').should('include.text', "7:00")
  })
  it('Should display the number of guests for a reservation ', () => {
    cy.get('article[id="1"]').should('include.text', "12")
  })
  it('Should display a cancel button', () => {
    cy.get('article[id="1"] > button').should('exist')
  })
  it('Should cancel the reservation when the cancel button is clicked', () => {
    cy.get('article[id="1"] > button').click()
      .get('article[id="1"]').should('not.exist')
  })
})
