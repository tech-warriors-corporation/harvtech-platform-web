describe('<App />', () => {
    it('Should verify if there is a <h1>', () => {
        cy.visit('/')
        cy.get('h1').should('contain', 'HarvTech')
    })
})
