import { Toast } from '~components/Toast'
import { useToast } from '~hooks/useToast'

describe('<Toast />', () => {
    const toast = useToast()
    const selector = '.Toastify__toast-container'
    const message = 'My message'

    beforeEach(() => {
        cy.mount(<Toast />)
    })

    it('Should render the toast', () => {
        cy.get('.Toastify').should('exist')
    })

    describe('error', () => {
        it('Should show the error toast', () => {
            toast.error(message)

            cy.get(selector).contains(message)
        })

        it('Should close the error toast', () => {
            toast.error(message)

            cy.get('.Toastify__close-button').click()
            cy.wait(1000)
            cy.get(selector).should('not.exist')
        })
    })
})
