import { Link } from './Link'

describe('<Link />', () => {
    const id = 'myLink'
    const selector = `[data-cy="${id}"]`
    const href = 'https://www.google.com'
    const text = 'Navigate to Google'

    beforeEach(() => {
        cy.mount(<Link cyId={id} href={href} text={text} />)
    })

    it('Should render the component', () => {
        cy.get(selector).should('exist')
    })

    it('Should have a valid href in the component', () => {
        cy.get(selector).should('have.attr', 'href', href)
    })

    it(`Should contains "${text}" in the component`, () => {
        cy.get(selector).contains(text)
    })
})
