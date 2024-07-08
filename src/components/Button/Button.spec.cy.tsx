import { Button } from './Button'
import { ButtonLayout, ButtonType } from './enums'

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
        const type = ButtonType.SUBMIT
        const loadingSelector = `${selector} [role="status"]`

        beforeEach(() => {
            cy.mount(<Button cyId={cyId} text={text} type={type} onClick={() => alert('Test with Cypress')} />)
        })

        it('Should click in the component', () => {
            cy.get(selector).click()
        })

        it(`Should use type "${type}" in the component`, () => {
            cy.get(selector).should('have.attr', 'type', type)
        })

        it('Should show the loading', () => {
            cy.mount(<Button cyId={cyId} text={text} isLoading={true} />)

            cy.get(loadingSelector).should('exist')
            cy.get(selector).should('have.prop', 'disabled', true)
        })

        it('Should be disabled', () => {
            cy.mount(<Button cyId={cyId} text={text} isDisabled={true} />)

            cy.get(selector).should('have.prop', 'disabled', true)
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
