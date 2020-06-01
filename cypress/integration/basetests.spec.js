// import {} from
import vars from "../support/variables";

describe('', function() {

    beforeEach(function () {
        cy.visit(vars.homePage);
        cy.contains(vars.coronaVirus).should('be.visible');
    });

    it('Failed Login Attempt', function(){
        cy.get(vars.myAccountButton).click();
        cy.url().should('eq', vars.loginPage);
        cy.get(vars.userNameInput).click();
        cy.get(vars.userNameInput).type('email@mail.com');
        cy.get(vars.passwordInput).click();
        cy.get(vars.passwordInput).type('incorrect password');
        cy.get(vars.loginButton).click();
        cy.contains(vars.incorrectDetailsMessage).should('be.visible');
    });

    it.only('Access Help', function(){
        cy.get(vars.helpButton).click();
        cy.url().should('eq', vars.helpPage);
        cy.get(vars.faqTab).click();
        cy.url().should('eq', vars.faqPage);
        cy.contains(vars.faqPageHeader).should('be.visible');
        cy.get(vars.homePageIcon).click();
        cy.url().should('eq', vars.homePage);
    });

    it('Search Bar Functionality', function(){
        cy.get(vars.searchBar).click();
        cy.get(vars.searchBar).type('Lego');
        cy.get(vars.searchButton).click();
        cy.url().should('eq', 'https://www.base.com/fsearch.htm?search=Lego');
        cy.contains('Results found for : “Lego”').should('be.visible');
        cy.get(vars.searchBar).clear();
        cy.get(vars.searchBar).type('Star Wars');
        cy.get(vars.searchButton).click();
        cy.url().should('eq','https://www.base.com/fsearch.htm?search=Star+Wars');
        cy.contains('Results found for : “Star Wars”').should('be.visible');
        cy.get(vars.homePageIcon).click();
        cy.url().should('eq', vars.homePage);
    });

    // it.skip('', function(){
    // });
    //
    // it.skip('', function(){
    // });

})