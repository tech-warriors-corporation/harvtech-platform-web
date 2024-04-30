describe('<Wrapper />', () => {
    beforeEach(() => {
        cy.mount(null)
    })

    it('Should render the component', () => {
        cy.get('[data-cy="wrapper"]').should('exist')
    })
})
