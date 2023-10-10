/// <reference types="cypress" />

import LoginPage from "../../pages/loginPage"
import InventoryPage from "../../pages/inventoryPage"

const loginPage = new LoginPage()
const inventoryPage = new InventoryPage()

describe('sauce demo inventory page', () => {
  it.only('verifies that a user is able to add a product to cart', () => {
    let itemsInCart = 0
    loginPage.login('standard_user', 'secret_sauce')
    itemsInCart = inventoryPage.addItemToShoppingCart('Sauce Labs Backpack', itemsInCart)
    inventoryPage.checkShoppingCartCounter(itemsInCart)
  })
})

