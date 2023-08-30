import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import {SignupElements} from "../pages/signup/signup.elements"

const signupElements = new SignupElements();

Given("I click on login button", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
})

And("I fill the Signup fields", () => {
    cy.get('[data-qa="signup-name"]').type('Roberto');
    cy.get('[data-qa="signup-email"]').type('roberto.sacramento@acct.global');
})

When('I click on Signup button', () =>{
    cy.get('[data-qa="signup-button"]').click();
})

Then('I should see the title of the page', () =>{
    cy.title().should('eq', 'Automation Exercise - Signup');
})