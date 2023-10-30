export default class LoginPage {
    constructor() {
        this.userInfo = {
            firstName: "Olena",
            lastName: "Gofman",
            username: "OlenaGofman" + new Date().getTime(),
            password: "secret",
            confirmPassword: "secret"
        }
    }

    openRealWorldApp() {
        cy.visit('http://localhost:3000/')

    }
    signUp() {
        console.log(this.userInfo)
        cy.get('[data-test="signup"]').click()
        cy.get('#firstName').type(this.userInfo.firstName)
        cy.get('#lastName').type(this.userInfo.lastName)
        cy.get('#username').type(this.userInfo.username)
        cy.get('#password').type(this.userInfo.password, { log: false })
        cy.get('#confirmPassword').type(this.userInfo.confirmPassword, { log: false })
        cy.get('.MuiButton-label').click()

    }
    signIn() {
        cy.get('#username').type(this.userInfo.username)
        cy.get('#password').type(this.userInfo.password, { log: false })
        cy.get('.MuiButton-label').click()
    }
    onboard() {
        cy.getBySel('user-onboarding-dialog-title').should('be.visible').and('contain', 'Get Started with Real World App')
        cy.getBySel('user-onboarding-next').click()
        cy.getBySel('user-onboarding-dialog-title').should('be.visible').and('contain', 'Create Bank Account')
        cy.getBySelLike('bankName-input').type('My Bank')
        cy.getBySelLike('routingNumber-input').type('123456789')
        cy.getBySelLike('accountNumber-input').type('987654321')
        cy.getByClassLike('MuiButton-fullWidth').click()
        cy.getBySel('user-onboarding-dialog-title').should('contain', 'Finished')
        cy.getBySel('user-onboarding-next').click()
    }
    makeNewTransaction(username, transactionAmount) {
        cy.getBySel('nav-top-new-transaction').click()
        cy.location("pathname").should("eq", "/transaction/new")
        cy.getBySelLike('user-list-item').contains(`${username}`).click({ force: true })
        cy.get('#amount').type(transactionAmount)
        cy.get('#transaction-create-description-input').type('testing purpose')
        cy.intercept('POST', '/transactions').as('transactions')
        cy.getBySelLike('submit-payment').click()
        cy.wait('@transactions').its('response.statusCode').should('equal', 200)
    }
    navigateToHomePage() {
        this.openRealWorldApp()
        this.signUp()
        this.signIn()
        this.onboard()
    }
    selectCurrentDate() {
        const date = new Date()
        const currentMonth = date.toLocaleString('default', { month: 'short' })
        const currentDay = date.toLocaleString('default', { day: "numeric" })
        const currentYear = date.getFullYear()
        cy.getBySel('transaction-list-filter-date-range-button').click({ force: true })
        cy.getByClassLike('Cal__Container__root').should('be.visible')
        cy.getByClassLike('Cal__Day__today').click()
        cy.get('.Cal__Header__root').contains(currentYear)
        cy.get('.Cal__Header__root').contains(`${currentMonth} ${currentDay}`)
        cy.getByClassLike('Cal__Day__today').click()
        cy.getBySel('transaction-list-filter-date-clear-button').should('be.visible')
    }
    changeAmountRange() {
        cy.getBySel('transaction-list-filter-amount-range-button').click({ force: true })
        cy.getByClassLike('MuiGrid-root').should('be.visible')
        cy.get('.MuiSlider-track').click('center')
        cy.getBySel('transaction-list-filter-amount-range-text').should('have.text', 'Amount Range: $0 - $500')



    }
}