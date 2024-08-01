import { MdCake } from 'react-icons/md'

import { PageIconButton } from './PageIconButton'

// TODO: implement more tests
describe('<PageIconButton />', () => {
    const cyId = 'my-button'
    const selector = `[data-cy="${cyId}"]`

    beforeEach(() => {
        cy.mount(
            <PageIconButton cyId={cyId} text={'My button'} icon={MdCake} onClick={() => alert('My button alert')} />,
        )
    })

    it('Should render the component', () => {
        cy.get(selector).should('exist')
    })
})
