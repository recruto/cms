/// <reference types="Cypress" />

describe('Login', () => {
  it('Redirect to Login "/"', () => {
    cy.visit('/')
    cy.location('pathname').should('equal', '/login')
    cy.location('search').should('equal', '?redirect=/')
    cy.contains('button', 'Login com Google')
    cy.signIn()
    cy.location('pathname').should('equal', '/')
    cy.signOut()
    cy.location('pathname').should('equal', '/login')
    cy.location('search').should('equal', '?redirect=/')
  })
})
