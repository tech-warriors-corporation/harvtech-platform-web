import { Routes } from '~enums/Routes'

describe('<PrivacyPolicyAndDataProcessing />', () => {
    const selector = '[data-cy="privacy-policy-and-data-processing-list"]'

    it('Should render the list', () => {
        cy.visit(Routes.PRIVACY_POLICY_AND_DATA_PROCESSING)
        cy.get(selector).should('exist')
    })
})
