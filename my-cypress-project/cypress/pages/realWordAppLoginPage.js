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
}