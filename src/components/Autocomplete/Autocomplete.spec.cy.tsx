import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { object, string } from 'yup'

import { Autocomplete } from './Autocomplete'
import { AutocompleteOptions } from './types'

import { REQUIRED_FIELD } from '~utils/validations'

const options: AutocompleteOptions = [
    { value: '1', text: 'Option 1' },
    { value: '2', text: 'Option 2' },
]

const [firstOption] = options
const label = 'Option'

type Props = {
    isRequired?: boolean
}

const AutocompleteTest = ({ isRequired }: Props) => {
    const name = 'option'
    const placeholder = 'Select the option'
    const form = useForm({
        resolver: yupResolver(
            object({
                [name]: string().required(REQUIRED_FIELD),
            }).required(),
        ),
        defaultValues: { [name]: firstOption.value },
        mode: 'all',
    })

    return (
        <Autocomplete
            label={label}
            placeholder={placeholder}
            name={name}
            form={form}
            isRequired={isRequired!}
            options={options}
        />
    )
}

// TODO: add more tests
describe('<Autocomplete />', () => {
    const selector = '[data-cy="autocomplete"]'
    const inputSelector = `${selector} [data-cy="autocomplete-input"]`

    it('Should render the component', () => {
        cy.mount(<AutocompleteTest />)

        cy.get(selector).should('exist')
    })

    it('Should use an initial value', () => {
        cy.mount(<AutocompleteTest />)

        cy.get(inputSelector).should('have.value', firstOption.text)
    })

    it('Should show the label', () => {
        cy.mount(<AutocompleteTest />)

        cy.get(`${selector} [data-cy="label"]`).contains(label)
    })

    it('Should show the error message', () => {
        cy.mount(<AutocompleteTest />)

        cy.get(inputSelector).clear()
        cy.get(inputSelector).blur()
        cy.get(`${selector} [data-cy="error-message"]`).contains(REQUIRED_FIELD)
    })

    it('Should use the required property', () => {
        cy.mount(<AutocompleteTest isRequired={true} />)

        cy.get(inputSelector).should('have.prop', 'required')
    })
})
