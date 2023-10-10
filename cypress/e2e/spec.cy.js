import {getIframeDocument,GoToSignIn} from "../general/generalFunctions.js";
import registerData from "../support/register.json";

describe('Work With IFrames', () => {
  it.skip('passes', () => {
    cy.visit('https://www.apple.com/')

    GoToSignIn()
    getIframeDocument().find('.form-checkbox-indicator').click()

  })
})

it("API testing Using Cypress API Plugin", () => {

  let year = 0;
  let yearValidation = 2000;

  cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
    expect(response.status).to.eq(200);
    cy.log(response.status)
    cy.log(response.body.data)
  })
  
  cy.request('POST', 'https://reqres.in/api/users', { name: 'Luis', job: "QA" }).then(
  (response) => {
    // response.body is automatically serialized into JSON
    expect(response.status).to.eq(201)
    expect(response.body).to.have.property('name', 'Luis')
    cy.log(response.body.data)
  })

  cy.request('POST', 'https://reqres.in/api/register', { email: registerData.email, password: registerData.password}).then(
  (response) => {
    // response.body is automatically serialized into JSON
    expect(response.status).to.eq(200)
    expect(response.body).to.have.property('id')
    cy.log(response.body.data)
  })

  cy.request('GET', 'https://reqres.in/api/unknown').then(
    (response) => {
      // response.body is automatically serialized into JSON
      expect(response.status).to.eq(200)

      response.body.data.forEach(element => {
        year = element.year;
        expect(year).to.equal(yearValidation)
        yearValidation = yearValidation+1

      });
    })

})