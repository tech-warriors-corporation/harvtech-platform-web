import { Routes } from '~enums/Routes'

describe('<Login />', () => {
    const title = 'Login'
    const invalidEmail = 'email@test.com'
    const emailSelector = 'input[name="email"]'
    const passwordSelector = 'input[name="password"]'
    const buttonSelector = 'button[type="submit"]'

    beforeEach(() => {
        cy.visit(Routes.LOGIN)
    })

    it(`Should verify if there is a "${title}" title`, () => {
        cy.contains(title)
    })

    it('Should validate the button', () => {
        cy.get(emailSelector).type(invalidEmail)
        cy.get(passwordSelector).type('1234')
        cy.get(buttonSelector).should('be.disabled')
        cy.get(passwordSelector).type('12345678')
        cy.get(buttonSelector).should('be.disabled')
        cy.get(passwordSelector).type('1234ABCD')
        cy.get(buttonSelector).should('be.disabled')
        cy.get(passwordSelector).type('1234ABcd')
        cy.get(buttonSelector).should('be.disabled')
        cy.get(passwordSelector).type('1234ABcd!')
        cy.get(buttonSelector).should('not.be.disabled')
    })

    it('Should use invalid login', () => {
        cy.get(emailSelector).type(invalidEmail)
        cy.get(passwordSelector).type('1234ABcd!')
        cy.get(buttonSelector).should('not.be.disabled')
        cy.get(buttonSelector).click()
        cy.get('.Toastify__toast-body').contains('Conta não encontrada')
    })

    it('Should use valid login', () => {
        cy.get(emailSelector).type('contato@harvtech.com')
        cy.get(passwordSelector).type('HarvTech1234!')
        cy.get(buttonSelector).should('not.be.disabled')
        cy.get(buttonSelector).click()
    })
})
