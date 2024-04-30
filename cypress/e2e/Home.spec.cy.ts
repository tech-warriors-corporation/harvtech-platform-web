import { Routes } from '~/routes'

describe('<Home />', () => {
    const title = 'Home'

    it(`Should verify if there is a "${title}" title`, () => {
        cy.visit(Routes.HOME)
        cy.contains(title)
    })
})
