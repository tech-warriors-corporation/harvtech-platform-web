import { transparentize } from 'polished'
import styled from 'styled-components'

import { customScroll, fieldStyles, fixHeight, fixWidth } from '~utils/css-toolkit'

const timingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)'

export const StyledAutocomplete = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .input {
        ${fieldStyles};
    }

    .popover {
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 54;
        max-height: 400px;
        overflow-x: hidden;
        overflow-y: auto;
        padding: ${({ theme }) => theme.spaces.two};
        overscroll-behavior: contain;
        border: none;
        border-radius: ${({ theme }) => theme.spaces.two};
        background-color: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.background};
        opacity: 0;
        transition-timing-function: ${timingFunction};
        transition-duration: ${({ theme }) => theme.times.short};
        animation-timing-function: ${timingFunction};
        animation-duration: ${({ theme }) => theme.times.short};
        transform: translateY(-6px);
        margin-top: ${({ theme }) => theme.spaces.one};

        ${customScroll};

        &[data-enter] {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    .item,
    .no-results {
        display: flex;
        cursor: default;
        align-items: center;
        padding: ${({ theme }) => `${theme.spaces.three} ${theme.spaces.two}`};
        outline: none;
        line-height: inherit;
        font-size: 0.875rem;
        border-radius: ${({ theme }) => theme.spaces.two};
        column-gap: ${({ theme }) => theme.spaces.three};

        ${fixHeight('40px')};
    }

    .item {
        transition: background-color ${({ theme }) => theme.times.short};

        &:hover {
            background-color: ${({ theme }) => transparentize(0.72, theme.colors.primary)};
        }

        &[data-active-item] {
            background-color: ${({ theme }) => transparentize(0.24, theme.colors.primary)};
        }
    }
`

export const StyledImage = styled.img`
    ${({ theme }) => fixWidth(theme.spaces.five)};
`
