/// <reference types="cypress" />

import RealWordAppLoginPage from "../../pages/realWordAppLoginPage"

const realWordAppLoginPage = new RealWordAppLoginPage()

describe('Real World App Sign in page', () => {
  it.only('allows a User sign up, log in and onboard', () => {
    realWordAppLoginPage.openRealWorldApp()
    realWordAppLoginPage.signUp()
    realWordAppLoginPage.signIn()
    realWordAppLoginPage.onboard()
   })
})