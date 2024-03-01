import { Link } from './Link'

describe('<Link />', () => {
    beforeEach(() => {
        cy.mount(
            <Link href={'https://github.com/tech-warriors-corporation'} text={'Navigate to Tech Warriors (GitHub)'} />,
        )
    })

    it('Should render the component', () => {
        cy.get('a').should('exist')
    })

    it('Should click in the component', () => {
        cy.get('a').click()
    })
})
