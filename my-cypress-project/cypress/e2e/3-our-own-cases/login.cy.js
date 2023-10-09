/// <reference types="cypress" />
describe('sauce demo login page', () => {
  it('verifies that a user is able to correctly login to the site ', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_label').should('be.visible')
 })
  it ('verifies that a user is NOT able to login with invalid password', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('test')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
    })
})  

