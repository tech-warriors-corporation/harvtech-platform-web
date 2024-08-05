import { ErrorMessage } from './ErrorMessage'

describe('<ErrorMessage />', () => {
    const selector = '[data-cy="error-message"]'
    const message = 'Message'

    beforeEach(() => {
        cy.mount(<ErrorMessage message={message} />)
    })

    it('Should render the component', () => {
        cy.get(selector).should('exist')
        cy.get(selector).contains(message)
    })
})
