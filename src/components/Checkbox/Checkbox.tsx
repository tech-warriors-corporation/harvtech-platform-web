import React, { PropsWithChildren } from 'react'
import { UseFormReturn } from 'react-hook-form'

import { useTheme } from 'styled-components'

import { StyledCheck, StyledCheckbox, StyledLabel, StyledText } from './styles'

type Props = {
    name: string
    form: UseFormReturn<any>
    cyId?: string
}

export const Checkbox: React.FC<PropsWithChildren<Props>> = ({ name, form, cyId, children }) => {
    const {
        spaces: { one },
    } = useTheme()
    const size = '20px'
    const viewBox = 16
    const nameAsAny = name as any
    const checked = form.watch(nameAsAny)

    return (
        <StyledLabel
            data-cy={cyId}
            data-checked={checked}
            tabIndex={0}
            onKeyDown={(event) => {
                const { key, target } = event

                if (key === 'Enter' || key === ' ') {
                    event.preventDefault()
                    ;(target as HTMLLabelElement)?.querySelector('input')?.click()
                }
            }}
        >
            <StyledCheckbox {...form.register(nameAsAny)} tabIndex={-1} />
            <StyledCheck size={size} data-checked={checked}>
                <svg
                    style={{ marginTop: `-${one}`, scale: '1.1' }}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={one}
                    viewBox={`0 0 ${viewBox} ${viewBox}`}
                    height={size}
                    width={size}
                >
                    <polyline points={'4,8 7,12 12,6'} />
                </svg>
            </StyledCheck>
            <StyledText>{children}</StyledText>
        </StyledLabel>
    )
}
