// TODO: implement more tests
describe('<Page />', () => {
    beforeEach(() => {
        cy.mount(null)
    })

    it('Should render the component', () => {
        cy.get('[data-cy="page"]').should('exist')
    })
})
