import { transparentize } from 'polished'
import { css } from 'styled-components'

export const focusVisibleOutline = (color: string) => css`
    &:focus-visible {
        outline: ${({ theme }) => theme.spaces.two} solid ${transparentize(0.32, color)};
        outline-offset: 0;
    }
`

export const fixSize = (size: string) => css`
    width: ${size};
    height: ${size};
`

export const selectionStyles = css`
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.primary};
`
