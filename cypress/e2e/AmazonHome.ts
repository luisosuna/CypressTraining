import { When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";


beforeEach(() => {
cy.viewport(1600, 720);
});


Given("I navigate to the Website", () => {

    cy.visit("https://www.amazon.com");

});

When("I open the home page and validate the title", () => {
    cy.title().should('include', 'Amazon')
});

Then("Validate the menus in home page", () => {
    cy.get('#nav-search-submit-button').should('exist')
    cy.get('#nav-logo-sprites').should('be.visible')
});

When("I search in the page for multiple items", (table: DataTable) => {

    table.hashes().forEach((element) => {

        cy.get('#twotabsearchtextbox').type(element.Item);
        cy.get('#nav-search-submit-button').click();
        cy.get('#twotabsearchtextbox').clear();
        
        });

});