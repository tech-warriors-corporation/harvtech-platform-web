import { transparentize } from 'polished'
import { css } from 'styled-components'

export const fontFamily = '"Poppins", sans-serif'

export const focusVisibleOutline = (color: string) => css`
    &:focus-visible {
        outline: ${({ theme }) => theme.spaces.two} solid ${transparentize(0.12, color)};
        outline-offset: 0;
    }
`

export const fixWidth = (width: string) => css`
    width: ${width};
    min-width: ${width};
    max-width: ${width};
`

export const fixHeight = (height: string) => css`
    height: ${height};
    min-height: ${height};
    max-height: ${height};
`

export const fixSize = (size: string) => css`
    ${fixWidth(size)};
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

export const valueToNumber = (value: string) => +value.replace(/\D/g, '')

export const fieldStyles = css`
    padding: 12px ${({ theme }) => theme.spaces.three};
    margin: 0;
    background-color: ${({ theme }) => theme.colors.text};
    border: ${({ theme }) => theme.spaces.one} solid ${({ theme }) => theme.colors.lighterGray};
    border-radius: ${({ theme }) => theme.spaces.two};
    width: inherit;
    transition: border-color ${({ theme }) => theme.times.short};
    color: ${({ theme }) => theme.colors.background};

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &::placeholder {
        line-height: inherit;
        color: ${({ theme }) => theme.colors.background};
        font-size: 0.875rem;
        font-family: ${fontFamily};
    }
`
