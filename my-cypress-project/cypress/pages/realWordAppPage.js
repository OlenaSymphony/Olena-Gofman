export default class LoginPage {
    constructor() {
        this.userInfo = {
            firstName: "Olena",
            lastName: "Gofman",
            username: "OlenaGofman",
            password: "secret",
            confirmPassword: "secret"
        }

        this.date = new Date().getTime();
    }
    openRealWorldApp() {
        cy.visit('http://localhost:3000/')

    }
    signUp() {
        cy.get('[data-test="signup"]').click()
        cy.get('#firstName').type(this.userInfo.firstName)
        cy.get('#lastName').type(this.userInfo.lastName)
        cy.get('#username').type(this.userInfo.username + this.date)
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
        cy.getBySel('transaction-list-filter-amount-range-slider')
            .find('.MuiSlider-thumb')
            .eq(1) //second thumb
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { clientX: 500, clientY: 0 })
        cy.getBySel('transaction-list-filter-amount-range-text').should('have.text', 'Amount Range: $0 - $280')
    }
    paginateTransactions() {
        // Intercept the general request
        cy.intercept('GET', 'http://localhost:3001/transactions/public').as('getTransactions')

        // Intercept the 2nd page request
        cy.intercept('GET', 'http://localhost:3001/transactions/public?page=2').as('getTransactionsPage2')

        // Scroll to load the contest
        cy.get('[class="ReactVirtualized__Grid__innerScrollContainer"]>div').last().scrollIntoView()

        // Wait fo0r the 2nd page rquest to complete and assert the condition 
        cy.wait('@getTransactionsPage2').then((interception) => {
            expect(interception.response.statusCode).to.be.oneOf([200, 304])
        })
    }
    openMyAccount() {
        cy.getBySelLike('sidenav-user-settings').click()
        cy.get('.MuiPaper-root > .MuiTypography-root').should('have.text', 'User Settings')
    }
    verifyErrorForEmptyField(fieldName, errorMessage) {
        cy.getBySel(`user-settings-${fieldName}-input`).clear()
        this.getErrorMessage(`#user-settings-${fieldName}-input-helper-text`, errorMessage)
    }
    verifyErrorForInvalidFormat(fieldName, errorMessage) {
        cy.getBySel(`user-settings-${fieldName}-input`).clear().type('a')
        this.getErrorMessage(`#user-settings-${fieldName}-input-helper-text`, errorMessage)
    }
    getErrorMessage(errorContainer, errorMessage) {
        cy.get(errorContainer).should('have.text', errorMessage)
    }
    updateUserInformation(newFirstName, newLastName, newEmailAddress, newPhoneNumber) {
        cy.getBySel('user-settings-firstName-input').clear().type(newFirstName)
        cy.getBySel('user-settings-lastName-input').clear().type(newLastName)
        cy.getBySel('user-settings-email-input').clear().type(newEmailAddress)
        cy.getBySel('user-settings-phoneNumber-input').clear().type(newPhoneNumber)
        cy.getBySelLike('user-settings-submit').should("not.be.disabled")
        cy.getBySelLike('user-settings-submit').click()
        // Assert that user information is saved successfully
        cy.wait("@updateUser").its("response.statusCode").should("equal", 204)

    }
}