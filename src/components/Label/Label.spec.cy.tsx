import { Label } from './Label'

import { REQUIRED_FIELD } from '~utils/validations'

describe('<Label />', () => {
    const label = 'Label'

    beforeEach(() => {
        cy.mount(<Label label={label} htmlFor={'label'} isRequired={true} />)
    })

    it('Should render the component', () => {
        const selector = '[data-cy="label"]'

        cy.get(selector).should('exist')
        cy.get(selector).contains(label)
        cy.get(`${selector} [aria-label="${REQUIRED_FIELD}"]`).contains('*')
    })
})
