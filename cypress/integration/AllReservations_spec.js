describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Should display all reservation cards', () => {
    cy.get('article[id="1"]').should('exist')
      .get('article[id="2"]').should('exist')
      .get('article[id="3"]').should('exist')
  })
})
