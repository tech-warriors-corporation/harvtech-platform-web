import { Routes } from '~enums/Routes'

describe('<Dashboard />', () => {
    const title = 'Dashboard'

    it(`Should verify if there is a "${title}" title`, () => {
        cy.visit(Routes.DASHBOARD)
        cy.contains(title)
    })
})
