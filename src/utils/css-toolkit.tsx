import { transparentize } from 'polished'
import { css } from 'styled-components'

export const fontFamily = '"Poppins", sans-serif'

export const focusVisibleOutline = (color: string) => css`
    &:focus-visible {
        outline: ${({ theme }) => theme.spaces.two} solid ${transparentize(0.12, color)};
        outline-offset: 0;
    }
`

export const fixHeight = (height: string) => css`
    height: ${height};
    min-height: ${height};
    max-height: ${height};
`

export const fixSize = (size: string) => css`
    width: ${size};

    ${fixHeight(size)};
`

export const selectionStyles = css`
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.primary};
`

export const customScroll = css`
    &::-webkit-scrollbar {
        height: ${({ theme }) => theme.spaces.three};
        width: ${({ theme }) => theme.spaces.three};
    }

    &::-webkit-scrollbar-track {
        background: ${({ theme }) => transparentize(0.76, theme.colors.primary)};
        border-radius: ${({ theme }) => theme.spaces.two};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: ${({ theme }) => theme.spaces.two};
        border: none;
    }
`

export const opacityStyles = css`
    &:hover,
    &:focus {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`
