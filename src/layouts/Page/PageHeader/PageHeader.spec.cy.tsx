import { PageType } from '../enums'

import { PageHeader } from './PageHeader'

describe('<PageHeader />', () => {
    const selector = '[data-cy="page-header"]'
    const logoSelector = '[data-cy="page-header-logo"]'
    const titleSelector = '[data-cy="page-header-title"]'

    after(() => {
        cy.mount(<PageHeader title={'HarvTech'} pageType={PageType.UNLOGGED} />)
    })

    it('Should render the component', () => {
        cy.mount(<PageHeader title={'HarvTech'} />)

        cy.get(selector).should('exist')
    })

    it('Should render the correct title', () => {
        const title = 'My page'

        cy.mount(<PageHeader title={title} />)

        cy.get(`${selector} ${titleSelector}`).contains(title)
    })

    it('Should not render the title', () => {
        cy.mount(<PageHeader />)

        cy.get(`${selector} ${titleSelector}`).should('not.exist')
    })

    it('Should render the HarvTech logo', () => {
        cy.mount(<PageHeader pageType={PageType.UNLOGGED} />)

        cy.get(`${selector} ${logoSelector}`).should('have.attr', 'alt', 'Logo do HarvTech')
    })

    it('Should not render the logo', () => {
        cy.mount(<PageHeader pageType={PageType.LOGGED} />)

        cy.get(`${selector} ${logoSelector}`).should('not.exist')

        cy.mount(<PageHeader />)

        cy.get(`${selector} ${logoSelector}`).should('not.exist')
    })
})
