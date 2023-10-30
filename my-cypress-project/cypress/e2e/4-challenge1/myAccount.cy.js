/// <reference types="cypress" />

import RealWordAppPage from "../../pages/realWordAppPage"

let realWordAppPage;

describe('Real World App functionality', () => {
  beforeEach(() => {
    realWordAppPage = new RealWordAppPage()
  })

  it('verifies that the User is able to open the User Setting page', () => {
    realWordAppPage.navigateToHomePage()
    realWordAppPage.openMyAccount()
  })

  it('verifies that first username cannot be blank in User Setting', () => {
    realWordAppPage.navigateToHomePage()
    realWordAppPage.openMyAccount()
    realWordAppPage.verifyErrorForEmptyField('firstName', 'Enter a first name')
  })

  it('verifies that second username cannot be blank in User Setting', () => {
    realWordAppPage.navigateToHomePage()
    realWordAppPage.openMyAccount()
    realWordAppPage.verifyErrorForEmptyField('lastName', 'Enter a last name')
  })

  it('verifies that invalid email address is not accepted in User Setting', () => {
    realWordAppPage.navigateToHomePage()
    realWordAppPage.openMyAccount()
    realWordAppPage.verifyErrorForInvalidFormat('email', 'Must contain a valid email address')
  })

  it('verifies that invalid phone is not accepted in User Setting', () => {
    realWordAppPage.navigateToHomePage()
    realWordAppPage.openMyAccount()
    realWordAppPage.verifyErrorForInvalidFormat('phoneNumber', 'Phone number is not valid')
  })

})