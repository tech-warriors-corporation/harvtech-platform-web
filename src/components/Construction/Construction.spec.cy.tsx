import { Construction } from './Construction'

// TODO: implement more tests
describe('<Construction />', () => {
    beforeEach(() => {
        cy.mount(<Construction />)
    })

    it('Should render the component', () => {
        cy.get('[data-cy="construction"]').should('exist')
    })
})
