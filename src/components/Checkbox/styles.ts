import * as Ariakit from '@ariakit/react'

import styled from 'styled-components'

import { fixSize } from '~utils/css-toolkit'

const strokeDash = 14

export const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    width: fit-content;
    cursor: pointer;
    line-height: 1;
    user-select: none;
    position: relative;
`

export const StyledCheckbox = styled(Ariakit.Checkbox)`
    opacity: 0;
    margin: 0;
    top: 0;
    left: 0;
    position: absolute;

    ${fixSize('1px')};
`

export const StyledCheck = styled.div<{ size: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text};
    border: ${({ theme }) => theme.spaces.one} solid ${({ theme }) => theme.colors.lighterGray};
    border-radius: ${({ theme }) => theme.spaces.two};
    background-color: ${({ theme }) => theme.colors.text};
    padding: 0;
    margin: 0 ${({ theme }) => theme.spaces.three} 0 0;
    transition:
        stroke-dashoffset cubic-bezier(0.4, 0, 0.2, 1) ${({ theme }) => theme.times.short},
        background-color ${({ theme }) => theme.times.short};
    stroke-dasharray: ${strokeDash};
    stroke-dashoffset: ${strokeDash};

    ${({ size }) => fixSize(size)};

    &[data-checked='true'] {
        background-color: ${({ theme }) => theme.colors.purple};
        stroke-dashoffset: 0;
    }
`

export const StyledText = styled.span`
    font-size: 0.875rem;
    white-space: break-spaces;
`
