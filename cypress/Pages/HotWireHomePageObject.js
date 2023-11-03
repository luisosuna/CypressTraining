
class BookingHomePageObject{

    elements ={

        CarsMenu : () => cy.get("li > a.nav-link[href='https://www.hotwire.com/car-rentals/']"),
        FlightsMenu : () => cy.get("li > a.nav-link[href='https://www.hotwire.com/flights/']"),
        Vacations : () => cy.get("li > a.nav-link[href='https://www.hotwire.com/packages/']"),
        SearchBar : () => cy.get("input[data-bdd = 'farefinder-hotel-destination-input']"),
        FirstOption : () => cy.get("li.active > .active"),
        FindAHotelBtn : () => cy.get(".submit-button > .btn > .btn__label")
    }   

    ValidateMainPage(){
        this.elements.FlightsMenu().should('be.visible');
        this.elements.CarsMenu().should('be.visible');
        this.elements.Vacations().should('be.visible');

        this.elements.SearchBar().type("Brooklyn, New York, United States of America");

        this.elements.FirstOption().should('be.visible');
        this.elements.FirstOption().click();
        this.elements.FindAHotelBtn().click();
    }

    ValidateTitle(){
        cy.title().should('include', 'Cheap Hotels, Cars, & Flights | Last Minute Travel Deals | Hotwire')

    }
}


module.exports = new BookingHomePageObject();