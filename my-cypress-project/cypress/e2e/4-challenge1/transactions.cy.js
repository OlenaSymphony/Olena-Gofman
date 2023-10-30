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

  it('verifies that current date can be selected via datepicker on the Home screen', () => {
    realWordAppPage.navigateToHomePage()
    realWordAppPage.selectCurrentDate()
  })

  it.only('verifies that desired $ amount range can be selected via slider on the Home screen', () => {
    realWordAppPage.navigateToHomePage()
    realWordAppPage.changeAmountRange()
  })
})