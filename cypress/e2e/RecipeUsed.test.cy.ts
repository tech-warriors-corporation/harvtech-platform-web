import { Routes } from '~enums/Routes'

// TODO: implement more tests
describe('<RecipeUsed />', () => {
    const title = 'Receita usada'

    it(`Should verify if there is a "${title}" title`, () => {
        cy.login()
        cy.visit(Routes.RECIPE_USED)
        cy.contains(title)
    })

    it('Should not access page as unlogged', () => {
        cy.goBackToUnloggedPage(Routes.RECIPE_USED)
    })
})
