import { Routes } from '~enums/Routes'

describe('<Register />', () => {
    const title = 'Criação de conta'
    const email = `email-${crypto.randomUUID()}@test.com`
    const password = 'abCD1234!'
    const nameSelector = 'input[name="name"]'
    const emailSelector = 'input[name="email"]'
    const emailConfirmationSelector = 'input[name="emailConfirmation"]'
    const passwordSelector = 'input[name="password"]'
    const passwordConfirmationSelector = 'input[name="passwordConfirmation"]'
    const planSelector = 'input[name="plan"]'
    const planStandardSelector = `${planSelector}[value="standard"]`
    const acceptedTermsSelector = 'input[name="acceptedTerms"]'
    const buttonSelector = 'button[type="submit"]'

    beforeEach(() => {
        cy.visit(Routes.REGISTER)
    })

    it('Should access the Register page as unlogged', () => {
        cy.url().should('include', Routes.REGISTER)
    })

    it('Should not access the Register page as logged', () => {
        cy.login()
        cy.goBackToLoggedPage(Routes.REGISTER)
    })

    it(`Should there is the "${title}" title`, () => {
        cy.contains(title)
    })

    it('Should render the form', () => {
        cy.get('form').should('exist')
    })

    it('Should show errors', () => {
        cy.get(nameSelector).focus()
        cy.get(nameSelector).blur()
        cy.get('[data-cy="name-error-message"]').should('exist')

        cy.get(emailSelector).focus()
        cy.get(emailSelector).blur()
        cy.get('[data-cy="email-error-message"]').should('exist')

        cy.get(emailSelector).type(email)
        cy.get(emailConfirmationSelector).type(`${email}1`)
        cy.get(emailConfirmationSelector).blur()
        cy.get('[data-cy="emailConfirmation-error-message"]').should('exist')

        cy.get(passwordSelector).focus()
        cy.get(passwordSelector).blur()
        cy.get('[data-cy="password-error-message"]').should('exist')

        cy.get(passwordSelector).type(password)
        cy.get(passwordConfirmationSelector).type(`${password}1`)
        cy.get(passwordConfirmationSelector).blur()
        cy.get('[data-cy="passwordConfirmation-error-message"]').should('exist')

        cy.get(planStandardSelector).click()

        cy.get(acceptedTermsSelector).click()

        cy.get(buttonSelector).should('be.disabled')
    })

    it('Should use invalid data', () => {
        const email = 'contato@harvtech.com'
        const password = 'HarvTech1234!'

        cy.get(nameSelector).type('Invalid user')
        cy.get(emailSelector).type(email)
        cy.get(emailConfirmationSelector).type(email)
        cy.get(passwordSelector).type(password)
        cy.get(passwordConfirmationSelector).type(password)
        cy.get(planStandardSelector).click()
        cy.get(acceptedTermsSelector).click()
        cy.get(buttonSelector).should('not.be.disabled')
        cy.get(buttonSelector).click()
        cy.get('.Toastify__toast-body').should('exist')
    })

    it('Should use valid data', () => {
        cy.get(nameSelector).type('User')
        cy.get(emailSelector).type(email)
        cy.get(emailConfirmationSelector).type(email)
        cy.get(passwordSelector).type(password)
        cy.get(passwordConfirmationSelector).type(password)
        cy.get(`${planSelector}[value="deluxe"]`).click()
        cy.get(acceptedTermsSelector).click()
        cy.get(buttonSelector).should('not.be.disabled')
        cy.get(buttonSelector).click()
        cy.url().should('include', Routes.DASHBOARD)
    })
})
