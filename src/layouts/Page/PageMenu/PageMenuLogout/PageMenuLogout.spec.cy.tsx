import { PageMenuLogout } from './PageMenuLogout'

// TODO: implement more tests
describe('<PageMenuLogout />', () => {
    const selector = '[data-cy="page-menu-logout"]'

    beforeEach(() => {
        cy.mount(<PageMenuLogout />)
    })

    it('Should render the component', () => {
        cy.get(selector).should('exist')
    })
})
