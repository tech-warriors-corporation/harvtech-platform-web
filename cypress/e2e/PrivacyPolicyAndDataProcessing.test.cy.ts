import { Routes } from '~enums/Routes'

describe('<PrivacyPolicyAndDataProcessing />', () => {
    const selector = '[data-cy="privacy-policy-and-data-processing"]'
    const listSelector = `${selector} [data-cy="privacy-policy-and-data-processing-list"]`
    const linkSelector = `${selector} a`

    it('Should render the list as unlogged', () => {
        cy.visit(Routes.PRIVACY_POLICY_AND_DATA_PROCESSING)
        cy.get(listSelector).should('exist')
        cy.get(linkSelector).should('exist')
    })

    it('Should render the list as logged', () => {
        cy.login()
        cy.visit(Routes.PRIVACY_POLICY_AND_DATA_PROCESSING)
        cy.get(listSelector).should('exist')
        cy.get(linkSelector).should('not.exist')
    })
})
