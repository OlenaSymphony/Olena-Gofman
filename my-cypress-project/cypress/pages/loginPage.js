export default class LoginPage {
    constructor() { }

    visit() {
        cy.visit('https://www.saucedemo.com/v1/')

    }
    fillUsername(username) {
        cy.get('[data-test="username"]').type(username, {log:false})
    }
    fillPassword(password) {
        cy.get('[data-test="password"]').type(password, {log:false})
    }
    clickSubmit() {
        cy.get('#login-button').click()
    }
    login(username, password) {
        this.visit()
        this.fillUsername(username)
        this.fillPassword(password)
        this.clickSubmit()
    }
    getErrorMessage() {
        return cy.get('[data-test="error"]')
    }
}