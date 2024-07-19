import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { boolean, object } from 'yup'

import { Checkbox } from '~components/Checkbox'

type Props = {
    cyId: string
    value?: boolean
}

const CheckboxTest = ({ cyId, value = false }: Props) => {
    const name = 'control'
    const form = useForm({
        resolver: yupResolver(object({ [name]: boolean().required() }).required()),
        defaultValues: { [name]: value },
        mode: 'all',
    })

    return (
        <Checkbox cyId={cyId} name={name} form={form}>
            Accept the terms and conditions
        </Checkbox>
    )
}

describe('<Checkbox />', () => {
    const cyId = 'checkbox'
    const selector = `[data-cy="${cyId}"]`

    beforeEach(() => {
        cy.mount(<CheckboxTest cyId={cyId} />)
    })

    it('Should render the Checkbox with correct initial state', () => {
        cy.get(`${selector}[data-checked="false"]`).should('exist')

        cy.mount(<CheckboxTest cyId={cyId} value={true} />)

        cy.get(`${selector}[data-checked="true"]`).should('exist')
    })

    it('Should toggle the Checkbox when clicked', () => {
        cy.get(selector).click()
        cy.get(selector).should('have.attr', 'data-checked', 'true')
        cy.get(selector).click()
        cy.get(selector).should('have.attr', 'data-checked', 'false')
    })

    it('Should toggle the Checkbox when pressing "Enter" or "Space" key', () => {
        cy.get(selector).focus().type(' ')
        cy.get(selector).should('have.attr', 'data-checked', 'true')
        cy.get(selector).focus().type(' ')
        cy.get(selector).should('have.attr', 'data-checked', 'false')

        cy.get(selector).focus().type('{enter}')
        cy.get(selector).should('have.attr', 'data-checked', 'true')
        cy.get(selector).focus().type('{enter}')
        cy.get(selector).should('have.attr', 'data-checked', 'false')
    })
})
