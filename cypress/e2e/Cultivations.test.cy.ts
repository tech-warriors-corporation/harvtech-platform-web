import { Routes } from '~enums/Routes'

// TODO: implement more tests
describe('<Cultivations />', () => {
    const title = 'Cultivos'

    it(`Should verify if there is a "${title}" title`, () => {
        cy.login()
        cy.visit(Routes.CULTIVATIONS)
        cy.contains(title)
    })

    it('Should not access page as unlogged', () => {
        cy.goBackToUnloggedPage(Routes.CULTIVATIONS)
    })
})
