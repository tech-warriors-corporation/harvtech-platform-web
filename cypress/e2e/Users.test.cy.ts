import { Routes } from '~enums/Routes'

// TODO: implement more tests
describe('<Users />', () => {
    const title = 'Usuários'

    it(`Should verify if there is a "${title}" title`, () => {
        cy.login()
        cy.visit(Routes.USERS)
        cy.contains(title)
    })

    it('Should not access page as unlogged', () => {
        cy.goBackToUnloggedPage(Routes.USERS)
    })
})
