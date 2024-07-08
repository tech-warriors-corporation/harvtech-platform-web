import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { object, string } from 'yup'

import { InputMode, InputType } from './enums'
import { Input } from './Input'

import { EXCEEDED_MAX_LENGTH, FIELD_MAX_LENGTH, REQUIRED_FIELD } from '~utils/validations'

const initialValue = 'abcd'
const label = 'Field'

type Props = {
    cyId: string
    type?: InputType
    mode?: InputMode
    maxLength?: number
    minLength?: number
    isRequired?: boolean
}

const InputTest = ({ cyId, type, mode, maxLength, minLength, isRequired }: Props) => {
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
            cyId={cyId}
            label={label}
            placeholder={placeholder}
            name={name}
            type={type ?? InputType.TEXT}
            mode={mode}
            form={form}
            maxLength={maxLength}
            minLength={minLength}
            isRequired={isRequired}
        />
    )
}

describe('<Input />', () => {
    const cyId = 'field'
    const selector = `[data-cy="${cyId}"]`
    const labelSelector = `${selector} [data-cy="${cyId}-label"]`
    const inputSelector = `${selector} [data-cy="${cyId}-input"]`
    const passwordButtonSelector = `${selector} [data-cy="${cyId}-password-button"]`
    const errorMessageSelector = `${selector} [data-cy="${cyId}-error-message"]`

    it('Should render the component', () => {
        cy.mount(<InputTest cyId={cyId} />)

        cy.get(inputSelector).should('exist')
    })

    it('Should use the initial value', () => {
        cy.mount(<InputTest cyId={cyId} />)

        cy.get(inputSelector).should('have.value', initialValue)
    })

    it(`Should render the "${InputType.TEXT}" type`, () => {
        cy.mount(<InputTest cyId={cyId} />)

        cy.get(inputSelector).should('have.prop', 'type', InputType.TEXT)
    })

    it(`Should render the "${InputType.EMAIL}" type`, () => {
        cy.mount(<InputTest cyId={cyId} type={InputType.EMAIL} />)

        cy.get(inputSelector).should('have.prop', 'type', InputType.EMAIL)
    })

    it(`Should render the "${InputType.PASSWORD}" type`, () => {
        cy.mount(<InputTest cyId={cyId} type={InputType.PASSWORD} />)

        cy.get(inputSelector).should('have.attr', 'type', InputType.PASSWORD)
        cy.get(passwordButtonSelector).should('have.attr', 'aria-label', 'Mostrar senha')
        cy.get(passwordButtonSelector).click()

        cy.get(inputSelector).should('have.attr', 'type', InputType.TEXT)
        cy.get(passwordButtonSelector).should('have.attr', 'aria-label', 'Esconder senha')
        cy.get(passwordButtonSelector).click()

        cy.get(inputSelector).should('have.attr', 'type', InputType.PASSWORD)
    })

    it('Should use the input modes', () => {
        cy.mount(<InputTest cyId={cyId} mode={InputMode.TEXT} />)

        cy.get(inputSelector).should('have.prop', 'inputMode', InputMode.TEXT)

        cy.mount(<InputTest cyId={cyId} mode={InputMode.EMAIL} />)

        cy.get(inputSelector).should('have.prop', 'inputMode', InputMode.EMAIL)
    })

    it('Should use the required property', () => {
        cy.mount(<InputTest cyId={cyId} isRequired={true} />)

        cy.get(inputSelector).should('have.prop', 'required')
    })

    it('Should type in input', () => {
        const value = 'test'

        cy.mount(<InputTest cyId={cyId} />)

        cy.get(inputSelector).type(value)
        cy.get(inputSelector).should('have.value', `${initialValue}${value}`)
    })

    it('Should use the length properties', () => {
        const maxLength = 200
        const minLength = 4

        cy.mount(<InputTest cyId={cyId} maxLength={maxLength} minLength={minLength} />)

        cy.get(inputSelector).should('have.attr', 'maxlength', maxLength)
        cy.get(inputSelector).should('have.attr', 'minlength', minLength)
    })

    it('Should show the label', () => {
        cy.mount(<InputTest cyId={cyId} />)

        cy.get(labelSelector).contains(label)
    })

    it('Should show the error message', () => {
        cy.mount(<InputTest cyId={cyId} />)

        cy.get(inputSelector).clear()
        cy.get(inputSelector).blur()
        cy.get(errorMessageSelector).contains(REQUIRED_FIELD)
    })
})
