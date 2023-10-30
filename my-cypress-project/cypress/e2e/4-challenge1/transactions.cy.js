/// <reference types="cypress" />

import RealWordAppPage from "../../pages/realWordAppPage"

let realWordAppPage;

describe('Real World App functionality', () => {
  beforeEach(() => {
    realWordAppPage = new RealWordAppPage()
  })

  it('verifies that the network request status for transactions is 200', () => {
    realWordAppPage.navigateToHomePage()
    realWordAppPage.makeNewTransaction('Kaylin Homenick', 5)
  })

  it('verifies that User can inrerract with datepicker', () => {
    realWordAppPage.navigateToHomePage()
    realWordAppPage.selectCurrentDate()
  })

  it('verifies that User can inrerract with amount range slider', () => {
    realWordAppPage.navigateToHomePage()
    realWordAppPage.changeAmountRange()
  })

  it('verifies that User can scoll the transactions feed', () => {
    realWordAppPage.navigateToHomePage()
    cy.get('footer').scrollIntoView().should('be.visible')
    //The test needs to be completed, got stuck with it
  })

})