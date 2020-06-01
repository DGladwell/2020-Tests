import vars from "./variables";

export const backToHomePage = (cy) => {
    cy.get(vars.homePageIcon).click();
    cy.url().should('eq', vars.homePage);
}

export const legoSearch = (cy) => {
    cy.get(vars.searchBar).click();
    cy.get(vars.searchBar).type('Lego');
    cy.get(vars.searchButton).click();
    cy.url().should('eq', 'https://www.base.com/fsearch.htm?search=Lego');
    cy.contains('Results found for : “Lego”').should('be.visible');
}