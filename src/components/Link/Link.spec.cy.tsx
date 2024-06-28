import { Link } from './Link'

import { Target } from '~enums/Target'

describe('<Link />', () => {
    const id = 'myLink'
    const selector = `[data-cy="${id}"]`
    const href = 'https://www.google.com'
    const text = 'Navigate to Google'
    const target = Target.BLANK
    const color = '#f00'

    beforeEach(() => {
        cy.mount(<Link cyId={id} href={href} target={target} text={text} color={color} />)
    })

    it('Should render the component', () => {
        cy.get(selector).should('exist')
    })

    it('Should have a valid href in the component', () => {
        cy.get(selector).should('have.attr', 'href', href)
    })

    it('Should have the target in the component', () => {
        cy.get(selector).should('have.attr', 'target', target)
    })

    it(`Should contains "${text}" in the component`, () => {
        cy.get(selector).contains(text)
    })

    it('Should have the color in the component', () => {
        cy.get(selector).should('have.attr', 'color', color)
    })
})
