import { Routes } from '~enums/Routes'

describe('<Dashboard />', () => {
    const title = 'Dashboard'

    it(`Should verify if there is a "${title}" title`, () => {
        cy.login()
        cy.visit(Routes.DASHBOARD)
        cy.contains(title)
    })

    it('Should not access page as unlogged', () => {
        cy.goBackToUnloggedPage(Routes.DASHBOARD)
    })
})
