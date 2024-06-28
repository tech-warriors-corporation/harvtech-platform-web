import { Routes } from '~enums/Routes'

// TODO: create e2e tests
describe('<Login />', () => {
    const title = 'Login'

    it(`Should verify if there is a "${title}" title`, () => {
        cy.visit(Routes.LOGIN)
        cy.contains(title)
    })
})
