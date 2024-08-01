import { Routes } from '~enums/Routes'

// TODO: implement more tests
describe('<NewCultivation />', () => {
    const title = 'Novo cultivo'

    it(`Should verify if there is a "${title}" title`, () => {
        cy.login()
        cy.visit(Routes.NEW_CULTIVATION)
        cy.contains(title)
    })

    it('Should not access page as unlogged', () => {
        cy.goBackToUnloggedPage(Routes.NEW_CULTIVATION)
    })
})
