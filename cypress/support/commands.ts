/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import Chainable = Cypress.Chainable
import { Routes } from '~enums/Routes'

Cypress.Commands.add('login' as keyof Chainable, () => {
    const buttonSelector = 'button[type="submit"]'

    cy.visit(Routes.LOGIN)
    cy.get('input[name="email"]').type('contato@harvtech.com')
    cy.get('input[name="password"]').type('HarvTech1234!')
    cy.get(buttonSelector).should('not.be.disabled')
    cy.get(buttonSelector).click()
})

Cypress.Commands.add('goBackToLoggedPage' as keyof Chainable, (nextUrl: string) => {
    cy.visit(nextUrl)
    cy.url().should('include', Routes.DASHBOARD)
})

Cypress.Commands.add('goBackToUnloggedPage' as keyof Chainable, (nextUrl: string) => {
    cy.visit(nextUrl)
    cy.url().should('include', Routes.HOME)
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare global {
    namespace Cypress {
        interface Chainable {
            login(): Chainable
            goBackToLoggedPage(nextUrl: string): Chainable
            goBackToUnloggedPage(nextUrl: string): Chainable
        }
    }
}
