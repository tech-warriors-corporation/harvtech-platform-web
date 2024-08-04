import React, { startTransition, useCallback, useEffect, useMemo, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import * as Ariakit from '@ariakit/react'

import { StyledAutocomplete, StyledImage } from './styles'
import { AutocompleteOptions } from './types'

import { ErrorMessage } from '~components/ErrorMessage'
import { Label } from '~components/Label'
import { getUUID } from '~utils/ids'
import { INVALID_FIELD } from '~utils/validations'

type Props = {
    label: string
    placeholder: string
    name: string
    options: AutocompleteOptions
    form: UseFormReturn<any>
    isRequired?: boolean
    isDisabled?: boolean
}

export const Autocomplete: React.FC<Props> = ({
    label,
    placeholder,
    name,
    options,
    form: {
        getFieldState,
        watch,
        trigger,
        setValue,
        formState: { errors },
    },
    isRequired = false,
    isDisabled = false, // TODO: add style for disabled
}) => {
    const nameAsAny = name as any
    const [search, setSearch] = useState('')
    const id = useMemo(() => getUUID(), [])

    const filteredOptions = useMemo(
        () => options.filter(({ text }) => text.toLowerCase().includes(search.toLowerCase())),
        [options, search],
    )

    const { isTouched } = getFieldState(nameAsAny)
    const error = errors[name]
    const hasError = isTouched && !!error
    const errorMessage = (error?.message || INVALID_FIELD) as string
    const value = watch(nameAsAny) as any
    const valueOptions = { shouldValidate: true, shouldDirty: true }

    const findOptionText = useCallback(
        (value: string) => options.find((option) => option.value === value)?.text ?? '',
        [options],
    )

    useEffect(() => {
        setSearch(findOptionText(value))
    }, [value])

    return (
        <StyledAutocomplete data-cy={'autocomplete'}>
            <Ariakit.ComboboxProvider
                setValue={(nextSearch) => {
                    if (options.map(({ value }) => value).includes(nextSearch)) return

                    startTransition(() => {
                        setSearch(nextSearch)
                        setValue(nameAsAny, '' as any, valueOptions)
                    })
                }}
                setSelectedValue={(nextValue: string) => setValue(nameAsAny, nextValue as any, valueOptions)}
                selectedValue={search}
                value={search}
                orientation={'vertical'}
                includesBaseElement={true}
                resetValueOnSelect={false}
                virtualFocus={true}
                focusWrap={true}
                focusLoop={true}
                animated={true}
                resetValueOnHide={false}
            >
                <Label label={label} htmlFor={id} isRequired={isRequired!} />
                <Ariakit.Combobox
                    data-cy={'autocomplete-input'}
                    id={id}
                    className={'input'}
                    placeholder={placeholder}
                    name={name}
                    required={isRequired}
                    disabled={isDisabled!}
                    onBlur={async () => {
                        setValue(nameAsAny, value, { ...valueOptions, shouldTouch: true })

                        await trigger(nameAsAny)
                    }}
                />
                <Ariakit.ComboboxPopover gutter={4} sameWidth={true} className={'popover'}>
                    {filteredOptions.length !== 0 ? (
                        filteredOptions.map(({ text, value, imageUrl }) => (
                            <Ariakit.ComboboxItem key={value} className={'item'} value={value}>
                                <StyledImage src={imageUrl} alt={`Imagem de "${text}"`} /> {text}
                            </Ariakit.ComboboxItem>
                        ))
                    ) : (
                        <span className='no-results'>Resultados não encontrados</span>
                    )}
                </Ariakit.ComboboxPopover>
                {hasError && <ErrorMessage message={errorMessage} />}
            </Ariakit.ComboboxProvider>
        </StyledAutocomplete>
    )
}
