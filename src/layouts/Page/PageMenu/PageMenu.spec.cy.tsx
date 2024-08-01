import { PageMenu } from './PageMenu'

// TODO: implement more tests
describe('<PageMenu />', () => {
    const selector = '[data-cy="page-menu"]'

    beforeEach(() => {
        cy.mount(<PageMenu />)
    })

    it('Should render the component', () => {
        cy.get(selector).should('exist')
    })
})
