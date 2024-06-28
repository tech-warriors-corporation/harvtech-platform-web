import { Button } from './Button'
import { ButtonLayout } from './enums'

describe('<Button />', () => {
    const cyId = 'id'
    const selector = `[data-cy="${cyId}"]`
    const text = 'Content text'

    beforeEach(() => {
        cy.mount(<Button cyId={cyId} text={text} />)
    })

    it('Should render the component', () => {
        cy.get(selector).should('exist')
    })

    it(`Should use the "${ButtonLayout.PRIMARY}" layout`, () => {
        cy.mount(<Button cyId={cyId} text={text} layout={ButtonLayout.PRIMARY} />)

        cy.get(selector).should('have.attr', 'layout', ButtonLayout.PRIMARY)
    })

    it(`Should use the "${ButtonLayout.SECONDARY}" layout`, () => {
        cy.mount(<Button cyId={cyId} text={text} layout={ButtonLayout.SECONDARY} />)

        cy.get(selector).should('have.attr', 'layout', ButtonLayout.SECONDARY)
    })

    describe('As <button />', () => {
        beforeEach(() => {
            cy.mount(<Button cyId={cyId} text={text} onClick={() => alert('Test with Cypress')} />)
        })

        it('Should click in the component', () => {
            cy.get(selector).click()
        })
    })

    describe('As <a />', () => {
        const href = 'https://www.google.com'

        beforeEach(() => {
            cy.mount(<Button cyId={cyId} text={text} href={href} />)
        })

        it(`Should has the link "${href}"`, () => {
            cy.get(selector).should('have.attr', 'href', href)
        })
    })
})
