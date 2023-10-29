/// <reference types="cypress" />

import RealWordAppLoginPage from "../../pages/realWordAppLoginPage"

const realWordAppLoginPage = new RealWordAppLoginPage()

describe('Real World App Sign in page', () => {
  it('allows a User sign up, log in and onboard', () => {
    realWordAppLoginPage.openRealWorldApp()
    realWordAppLoginPage.signUp()
    realWordAppLoginPage.signIn()
    realWordAppLoginPage.onboard()
  })
  it.only('verifies that the network request status for transactions is 200', () => {
    realWordAppLoginPage.openRealWorldApp()
    realWordAppLoginPage.signUp()
    realWordAppLoginPage.signIn()
    realWordAppLoginPage.onboard()
    realWordAppLoginPage.doNewTransaction('Kaylin Homenick')
  })
})