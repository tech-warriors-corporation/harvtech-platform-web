import { Routes } from '~enums/Routes'

// TODO: implement more tests
describe('<Settings />', () => {
    const title = 'Configurações'

    it(`Should verify if there is a "${title}" title`, () => {
        cy.login()
        cy.visit(Routes.SETTINGS)
        cy.contains(title)
    })

    it('Should not access page as unlogged', () => {
        cy.goBackToUnloggedPage(Routes.SETTINGS)
    })
})
