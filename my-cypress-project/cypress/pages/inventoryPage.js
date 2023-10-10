export default class InventoryPage {
    constructor() { }

    visit() {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')

    }
    getPageTitle(){
        return cy.get('.product_label')

    }
}