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
        //                     Unable to complete this test due to the recaptcha checkbox for login details.
        // cy.get('[style="width: 304px; height: 78px;"] > div > iframe').should('be.visible').click();
        // cy.get(vars.loginButton).click();
        // cy.contains(vars.incorrectDetailsMessage).should('be.visible');
    });

    // it('', function(){
    // });
    //
    // it('', function(){
    // });
    //
    // it.skip('', function(){
    // });
    //
    // it.skip('', function(){
    // });

})