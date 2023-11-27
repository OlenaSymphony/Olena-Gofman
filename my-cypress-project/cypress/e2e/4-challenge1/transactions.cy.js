/// <reference types="cypress" />

import RealWordAppPage from "../../pages/realWordAppPage"

let realWordAppPage;
realWordAppPage = new RealWordAppPage()

describe('Real World App functionality', () => {
  beforeEach(() => {
    realWordAppPage.openRealWorldApp()
    realWordAppPage.signIn()
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

  it('verifies that the application correctly renders and paginates all transaction feeds.', () => {
    realWordAppPage.paginateTransactions()
  })

})