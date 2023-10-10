export function GoToSignIn() {
    cy.get('#globalnav-menubutton-link-bag').click()
    cy.contains('Sign in').click();
  }

  
  export function getIframeDocument() {
    return cy
    .get('#aid-auth-widget-iFrame')
    .its('0.contentDocument').should('exist')
  }