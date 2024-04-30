import { Button } from './Button'

describe('<Button />', () => {
    const id = 'myButton'
    const selector = `[data-cy="${id}"]`
    const text = 'Open popup'

    beforeEach(() => {
        cy.mount(<Button cyId={id} text={text} onClick={() => alert('Test with Cypress')} />)
    })

    it('Should render the component', () => {
        cy.get(selector).should('exist')
    })

    it('Should click in the component', () => {
        cy.get(selector).click()
    })

    it(`Should contains "${text}" inside of component`, () => {
        cy.get(selector).contains(text)
    })
})
