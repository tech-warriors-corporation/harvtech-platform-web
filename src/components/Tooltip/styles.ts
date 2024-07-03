import * as Ariakit from '@ariakit/react'

import styled from 'styled-components'

export const StyledTooltipAnchor = styled(Ariakit.TooltipAnchor)`
    width: fit-content;
`

export const StyledTooltip = styled(Ariakit.Tooltip)`
    display: block !important;
    padding: ${({ theme }) => `${theme.spaces.two} ${theme.spaces.three}`};
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-radius: ${({ theme }) => theme.spaces.two};
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme: { colors, spaces } }) => `0 1px ${spaces.one} 0 ${colors.lightGray}`};
    cursor: default;
    z-index: 50;
    transition: opacity ${({ theme }) => theme.times.short};
    opacity: 0;

    &[data-open='true'] {
        opacity: 1;
    }
`
