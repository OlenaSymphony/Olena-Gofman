/// <reference types="cypress" />

import RealWordAppPage from "../../pages/realWordAppPage"

let realWordAppPage;

describe('Real World App functionality', () => {
  beforeEach(() => {
    realWordAppPage = new RealWordAppPage()
    realWordAppPage.navigateToHomePage()
  })

  it('verifies that the network request status for transactions is 200', () => {
    realWordAppPage.makeNewTransaction('Kaylin Homenick', 5)
  })

  it('verifies that User can inrerract with datepicker', () => {
    realWordAppPage.selectCurrentDate()
  })

  it('verifies that User can inrerract with amount range slider', () => {
    realWordAppPage.changeAmountRange()
  })

  it('verifies that User can scoll the transactions feed', () => {
    cy.get('footer').scrollIntoView().should('be.visible')
    //The test needs to be completed, got stuck with it
  })

})