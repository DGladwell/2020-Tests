// import {} from
import vars from "../support/variables";
import {backToHomePage, legoSearch} from "../support/functions";

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

    it('Access Help', function(){
        cy.get(vars.helpButton).click();
        cy.url().should('eq', vars.helpPage);
        cy.get(vars.faqTab).click();
        cy.url().should('eq', vars.faqPage);
        cy.contains(vars.faqPageHeader).should('be.visible');
        backToHomePage(cy)
    });

    it('Search Bar Functionality', function(){
        legoSearch(cy)
        cy.get(vars.searchBar).clear();
        cy.get(vars.searchBar).type('Star Wars');
        cy.get(vars.searchButton).click();
        cy.url().should('eq','https://www.base.com/fsearch.htm?search=Star+Wars');
        cy.contains('Results found for : “Star Wars”').should('be.visible');
        backToHomePage(cy)
    });

    it('Add Item to Basket and View Item in Basket', function(){
        legoSearch(cy)
        cy.get(vars.legoMarvel2).click();
        cy.contains('LEGO Marvel Superheroes 2 (Xbox One)').should('be.visible');
        cy.contains('Add to Basket').click();
        cy.contains('1 item').should('be.visible');
        cy.get(vars.yourBasket).click();
        cy.url().should('eq', vars.yourBasketPage);
        cy.contains('Your Basket').should('be.visible');
        backToHomePage(cy)
    });

    // it.skip('', function(){
    // });

})