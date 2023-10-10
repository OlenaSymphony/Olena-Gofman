export default class InventoryPage {
    constructor() { }

    visit() {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')

    }
    getPageTitle() {
        return cy.get('.product_label')

    }
    addItemToShoppingCart(inventoryItemName, itemsInCart) {
        cy.get('div[class=inventory_list] >div:has(a>div:contains(' + inventoryItemName + ')) button').click()
        cy.get('div[class=inventory_list] >div:has(a>div:contains(' + inventoryItemName + ')) button').should('have.text', 'REMOVE')
        return itemsInCart = itemsInCart + 1
    }
    checkShoppingCartCounter(expectedValue){
        cy.get('.fa-layers-counter').should('have.text', expectedValue)
    }
}