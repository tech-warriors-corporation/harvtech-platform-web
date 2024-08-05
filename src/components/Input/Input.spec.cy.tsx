import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { object, string } from 'yup'

import { InputMode, InputType } from './enums'
import { Input } from './Input'

import { EXCEEDED_MAX_LENGTH, FIELD_MAX_LENGTH, REQUIRED_FIELD } from '~utils/validations'

const initialValue = 'abcd'
const label = 'Field'

type Props = {
    type?: InputType
    mode?: InputMode
    maxLength?: number
    minLength?: number
    isRequired?: boolean
}

const InputTest = ({ type, mode, maxLength, minLength, isRequired }: Props) => {
    const name = 'field'
    const placeholder = 'Fill the field'
    const form = useForm({
        resolver: yupResolver(
            object({
                [name]: string()
                    .required(REQUIRED_FIELD)
                    .max(maxLength ?? FIELD_MAX_LENGTH, EXCEEDED_MAX_LENGTH)
                    .min(minLength ?? 0, 'Minimum chars'),
            }).required(),
        ),
        defaultValues: { [name]: initialValue },
        mode: 'all',
    })

    return (
        <Input
            label={label}
            placeholder={placeholder}
            name={name}
            type={type ?? InputType.TEXT}
            mode={mode!}
            form={form}
            maxLength={maxLength!}
            minLength={minLength!}
            isRequired={isRequired!}
        />
    )
}

describe('<Input />', () => {
    const selector = '[data-cy="input"]'
    const inputSelector = `${selector} [data-cy="input-field"]`
    const inputPasswordButtonSelector = `${selector} [data-cy="input-password-button"]`

    it('Should render the component', () => {
        cy.mount(<InputTest />)

        cy.get(inputSelector).should('exist')
    })

    it('Should use the initial value', () => {
        cy.mount(<InputTest />)

        cy.get(inputSelector).should('have.value', initialValue)
    })

    it(`Should render the "${InputType.TEXT}" type`, () => {
        cy.mount(<InputTest />)

        cy.get(inputSelector).should('have.prop', 'type', InputType.TEXT)
    })

    it(`Should render the "${InputType.EMAIL}" type`, () => {
        cy.mount(<InputTest type={InputType.EMAIL} />)

        cy.get(inputSelector).should('have.prop', 'type', InputType.EMAIL)
    })

    it(`Should render the "${InputType.PASSWORD}" type`, () => {
        cy.mount(<InputTest type={InputType.PASSWORD} />)

        cy.get(inputSelector).should('have.attr', 'type', InputType.PASSWORD)
        cy.get(inputPasswordButtonSelector).should('have.attr', 'aria-label', 'Mostrar senha')
        cy.get(inputPasswordButtonSelector).click()

        cy.get(inputSelector).should('have.attr', 'type', InputType.TEXT)
        cy.get(inputPasswordButtonSelector).should('have.attr', 'aria-label', 'Esconder senha')
        cy.get(inputPasswordButtonSelector).click()

        cy.get(inputSelector).should('have.attr', 'type', InputType.PASSWORD)
    })

    it('Should use the input modes', () => {
        cy.mount(<InputTest mode={InputMode.TEXT} />)

        cy.get(inputSelector).should('have.prop', 'inputMode', InputMode.TEXT)

        cy.mount(<InputTest mode={InputMode.EMAIL} />)

        cy.get(inputSelector).should('have.prop', 'inputMode', InputMode.EMAIL)
    })

    it('Should use the required property', () => {
        cy.mount(<InputTest isRequired={true} />)

        cy.get(inputSelector).should('have.prop', 'required')
    })

    it('Should type in input', () => {
        const value = 'test'

        cy.mount(<InputTest />)

        cy.get(inputSelector).type(value)
        cy.get(inputSelector).should('have.value', `${initialValue}${value}`)
    })

    it('Should use the length properties', () => {
        const maxLength = 200
        const minLength = 4

        cy.mount(<InputTest maxLength={maxLength} minLength={minLength} />)

        cy.get(inputSelector).should('have.attr', 'maxlength', maxLength)
        cy.get(inputSelector).should('have.attr', 'minlength', minLength)
    })

    it('Should show the label', () => {
        cy.mount(<InputTest />)

        cy.get(`${selector} [data-cy="label"]`).contains(label)
    })

    it('Should show the error message', () => {
        cy.mount(<InputTest />)

        cy.get(inputSelector).clear()
        cy.get(inputSelector).blur()
        cy.get(`${selector} [data-cy="error-message"]`).contains(REQUIRED_FIELD)
    })
})
