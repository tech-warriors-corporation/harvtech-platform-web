import { PageMenuVersion } from './PageMenuVersion'

// TODO: implement more tests
describe('<PageMenuVersion />', () => {
    const selector = '[data-cy="page-menu-version"]'

    beforeEach(() => {
        cy.mount(<PageMenuVersion />)
    })

    it('Should render the component', () => {
        cy.get(selector).should('exist')
    })
})
