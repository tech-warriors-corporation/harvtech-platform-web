import { Tooltip } from './Tooltip'

describe('<Tooltip />', () => {
    const cyId = 'tooltip'
    const selector = `[data-cy="${cyId}"]`

    beforeEach(() => {
        cy.mount(
            <Tooltip text={'Tooltip'}>
                <span data-cy={cyId}>Focus or hover on</span>
            </Tooltip>,
        )
    })

    it('Should render the component', () => {
        cy.get(selector).should('exist')
    })

    it('Should focus the component', () => {
        cy.get(selector).focus()
    })
})
