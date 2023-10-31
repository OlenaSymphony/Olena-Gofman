/// <reference types="cypress" />

import RealWordAppPage from "../../pages/realWordAppPage"

let realWordAppPage;

describe('Real World App functionality', () => {
  beforeEach(() => {
    realWordAppPage = new RealWordAppPage()
    realWordAppPage.navigateToHomePage()
    realWordAppPage.openMyAccount()
  })

  it('verifies that the User is able to open the User Setting page', () => {
    // the test execution is in pre-conditions
  })

  it('verifies that first username cannot be blank in User Setting', () => {
    realWordAppPage.verifyErrorForEmptyField('firstName', 'Enter a first name')
  })

  it('verifies that last username cannot be blank in User Setting', () => {
    realWordAppPage.verifyErrorForEmptyField('lastName', 'Enter a last name')
  })

  it('verifies that invalid email address is not accepted in User Setting', () => {
    realWordAppPage.verifyErrorForInvalidFormat('email', 'Must contain a valid email address')
  })

  it('verifies that invalid phone is not accepted in User Setting', () => {
    realWordAppPage.verifyErrorForInvalidFormat('phoneNumber', 'Phone number is not valid')
  })
  
  it('verifies that user information can be updated correctly in User Setting', () => {
    realWordAppPage.updateUserInformation('Test', 'User', 'test@test.com', '987654321')
  })

})
