/// <reference types="cypress" />

import LoginPage from "../../pages/loginPage"

const loginPage = new LoginPage()

describe('sauce demo login page', () => {
  it.only('verifies that a user is able to correctly login to the site ', () => {
    loginPage.login('standard_user', 'secret_sauce')
    cy.get('.product_label').should('be.visible')
  })
  it.only('verifies that a user is NOT able to login with invalid password', () => {
    loginPage.login('standard_user', 'test')
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })
})