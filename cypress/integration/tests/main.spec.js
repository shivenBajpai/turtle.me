/// <reference types="cypress" />

context('General Functionality Tests', () => {
  it('Server Online?', () => {
    cy.request('http://localhost:8080/ping').then((res) => {
      expect(res.body.status).to.equal('optimal')
    })
  })
})
