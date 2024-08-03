import React, { ClipboardEvent, ClipboardEventHandler, useEffect, useMemo, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'

import { InputMode, InputType } from './enums'
import { StyledButton, StyledInput, StyledInputWrapper, StyledWrapper } from './styles'

import { ErrorMessage } from '~components/ErrorMessage'
import { Label } from '~components/Label'
import { Tooltip } from '~components/Tooltip'
import { getUUID } from '~utils/ids'
import { FIELD_MAX_LENGTH, INVALID_FIELD } from '~utils/validations'

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
    noPaste?: boolean
    autoComplete?: string
    watchFields?: string[]
}

export const Input: React.FC<Props> = ({
    label,
    placeholder,
    name,
    form: {
        getFieldState,
        trigger,
        register,
        watch,
        formState: { errors },
    },
    autoComplete,
    minLength,
    maxLength = FIELD_MAX_LENGTH,
    type = InputType.TEXT,
    mode = InputMode.TEXT,
    isRequired = false,
    noPaste = false,
    watchFields = [],
}) => {
    const [internalType, setInternalType] = useState(type)
    const id = useMemo(() => getUUID(), [])
    const isPassword = useMemo(() => type === InputType.PASSWORD, [type])
    const isHidingPassword = useMemo(() => internalType === InputType.PASSWORD, [internalType])

    const passwordButtonText = useMemo(
        () => (isHidingPassword ? 'Mostrar senha' : 'Esconder senha'),
        [isHidingPassword],
    )

    const nameAsAny = name as any
    const { isTouched } = getFieldState(nameAsAny)
    const error = errors[name]
    const hasError = isTouched && !!error
    const errorMessage = (error?.message || INVALID_FIELD) as string

    const onPaste: ClipboardEventHandler<HTMLInputElement> = (event?: ClipboardEvent) => {
        if (noPaste) event?.preventDefault()
    }

    useEffect(() => {
        if (!watchFields?.length) return

        const subscription = watch(async (_, { name: nameChanged }) => {
            if (watchFields.includes(nameChanged as string)) await trigger(nameAsAny)
        })

        return () => subscription.unsubscribe()
    }, [watchFields])

    return (
        <StyledWrapper data-cy={'input'}>
            <Label label={label} htmlFor={id} isRequired={isRequired!} />
            <StyledInputWrapper>
                <StyledInput
                    data-cy={'input-field'}
                    id={id}
                    placeholder={placeholder}
                    type={internalType}
                    inputMode={mode}
                    required={isRequired}
                    maxLength={maxLength}
                    minLength={minLength}
                    autoComplete={autoComplete}
                    onPaste={onPaste}
                    isPassword={isPassword}
                    {...register(nameAsAny, {
                        required: isRequired,
                        maxLength,
                        minLength,
                        onBlur: async () => {
                            await trigger(nameAsAny)
                        },
                    })}
                />
                {isPassword && (
                    <Tooltip text={passwordButtonText}>
                        <StyledButton
                            data-cy={'input-password-button'}
                            aria-label={passwordButtonText}
                            type={'button'}
                            onClick={() => setInternalType(isHidingPassword ? InputType.TEXT : type)}
                        >
                            {isHidingPassword ? <IoMdEye aria-hidden={true} /> : <IoMdEyeOff aria-hidden={true} />}
                        </StyledButton>
                    </Tooltip>
                )}
            </StyledInputWrapper>
            {hasError && <ErrorMessage message={errorMessage} />}
        </StyledWrapper>
    )
}
