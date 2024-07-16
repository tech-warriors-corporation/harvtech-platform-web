import { Routes } from '~enums/Routes'

describe('<Home />', () => {
    const selector = '[data-cy="home"]'

    beforeEach(() => {
        cy.visit(Routes.HOME)
    })

    it('Should render the home page', () => {
        cy.get(selector).should('exist')
    })

    it('Should render the logo', () => {
        cy.get(`${selector} [data-cy="home-logo"]`).should('have.attr', 'alt')
    })

    it('Should has the title', () => {
        cy.get(`${selector} [data-cy="home-title"]`).should('have.text', 'HarvTech')
    })

    it('Should has the text', () => {
        cy.get(`${selector} [data-cy="home-text"]`).should('exist')
    })

    it('Should has the sub title', () => {
        cy.get(`${selector} [data-cy="home-sub-title"]`).should('exist')
    })

    it('Should has the sub text', () => {
        cy.get(`${selector} [data-cy="home-sub-text"]`).should('exist')
    })

    it('Should go to <Login />', () => {
        const link = cy.get(`${selector} [data-cy="home-login-link"]`)

        link.should('exist')
        link.contains('Entrar')
        link.click()
    })

    it('Should go to <Register />', () => {
        const link = cy.get(`${selector} [data-cy="home-register-link"]`)

        link.should('exist')
        link.contains('Criar conta')
        link.click()
    })

    it('Should not access page as logged', () => {
        cy.login()
        cy.goBackToLoggedPage(Routes.HOME)
    })
})
