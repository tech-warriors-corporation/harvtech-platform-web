import { Card } from './Card'

describe('<Card />', () => {
    const id = 'myCard'
    const selector = `[data-cy="${id}"]`
    const children = 'My children'

    beforeEach(() => {
        cy.mount(<Card cyId={id}>{children}</Card>)
    })

    it('Should render the component', () => {
        cy.get(selector).should('exist')
    })

    it('Should render the children', () => {
        cy.get(selector).contains(children)
    })
})
