import React, { useMemo, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { MdWarning } from 'react-icons/md'

import { InputMode, InputType } from './enums'
import { StyledButton, StyledErrorMessage, StyledInput, StyledInputWrapper, StyledLabel, StyledWrapper } from './styles'

import { Tooltip } from '~components/Tooltip'
import { FIELD_MAX_LENGTH, INVALID_FIELD, REQUIRED_FIELD } from '~utils/validations'

type Props = {
    label: string
    placeholder: string
    name: string
    form: UseFormReturn<any>
    type?: InputType
    mode?: InputMode
    maxLength?: number
    minLength?: number
    isRequired?: boolean
    autoComplete?: string
    cyId?: string
}

export const Input: React.FC<Props> = ({
    label,
    placeholder,
    name,
    form: {
        getFieldState,
        trigger,
        register,
        formState: { errors },
    },
    autoComplete,
    cyId,
    minLength,
    maxLength = FIELD_MAX_LENGTH,
    type = InputType.TEXT,
    mode = InputMode.TEXT,
    isRequired = false,
}) => {
    const [internalType, setInternalType] = useState(type)
    const id = useMemo(() => crypto.randomUUID().replaceAll('-', ''), [])
    const isHidingPassword = useMemo(() => internalType === InputType.PASSWORD, [internalType])

    const passwordButtonText = useMemo(
        () => (isHidingPassword ? 'Mostrar senha' : 'Esconder senha'),
        [isHidingPassword],
    )

    const { isTouched } = getFieldState(name)
    const error = errors[name]
    const hasError = isTouched && !!error
    const errorMessage = (error?.message || INVALID_FIELD) as string

    const getCyId = (suffix?: string) => {
        let finalCyId = cyId

        if (finalCyId && suffix) finalCyId += `-${suffix}`

        return finalCyId ? { 'data-cy': finalCyId } : {}
    }

    return (
        <StyledWrapper {...getCyId()}>
            <StyledLabel htmlFor={id} {...getCyId('label')}>
                {label} {isRequired ? <span aria-label={REQUIRED_FIELD}>*</span> : ''}
            </StyledLabel>
            <StyledInputWrapper>
                <StyledInput
                    {...getCyId('input')}
                    id={id}
                    placeholder={placeholder}
                    type={internalType}
                    inputMode={mode}
                    required={isRequired}
                    maxLength={maxLength}
                    minLength={minLength}
                    autoComplete={autoComplete}
                    {...register(name, {
                        required: isRequired,
                        maxLength,
                        minLength,
                        onBlur: async () => {
                            await trigger(name)
                        },
                    })}
                />
                {type === InputType.PASSWORD && (
                    <Tooltip text={passwordButtonText}>
                        <StyledButton
                            {...getCyId('password-button')}
                            aria-label={passwordButtonText}
                            type={'button'}
                            onClick={() => setInternalType(isHidingPassword ? InputType.TEXT : type)}
                        >
                            {isHidingPassword ? <IoMdEye aria-hidden={true} /> : <IoMdEyeOff aria-hidden={true} />}
                        </StyledButton>
                    </Tooltip>
                )}
            </StyledInputWrapper>
            {hasError && (
                <StyledErrorMessage {...getCyId('error-message')}>
                    <MdWarning aria-hidden={true} /> {errorMessage}
                </StyledErrorMessage>
            )}
        </StyledWrapper>
    )
}
