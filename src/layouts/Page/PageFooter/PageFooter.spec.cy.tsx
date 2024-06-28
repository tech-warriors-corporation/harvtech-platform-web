import { PageFooter } from './PageFooter'

describe('<PageFooter />', () => {
    const selector = '[data-cy="page-footer"]'

    beforeEach(() => {
        cy.mount(<PageFooter />)
    })

    it('Should render the component', () => {
        cy.get(selector).should('exist')
    })

    it('Should contains the text', () => {
        cy.get(selector).contains('Um ecossistema Tech Warriors')
    })

    it('Should contains the GitHub link', () => {
        const githubLink = cy.get(`${selector} [data-cy="page-footer-github-link"]`)

        githubLink.contains('Tech Warriors')
        githubLink.should('have.attr', 'href', 'https://github.com/tech-warriors-corporation')
    })
})
