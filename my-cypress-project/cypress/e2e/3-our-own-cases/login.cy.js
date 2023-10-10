/// <reference types="cypress" />

import LoginPage from "../../pages/loginPage"
import InventoryPage from "../../pages/inventoryPage"

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

describe('sauce demo login page', () => {
  it.only('verifies that a user is able to correctly login to the site ', () => {
    loginPage.login('standard_user', 'secret_sauce')
    inventoryPage.getPageTitle().should('exist').and('have.text', ('Products'))
  })
  it.only('verifies that a user is NOT able to login with invalid password', () => {
    loginPage.login('standard_user', 'test')
    loginPage.getErrorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })
})