import { transparentize } from 'polished'
import styled, { css } from 'styled-components'

import { centerStyles, opacityStyles } from '~utils/css-toolkit'

const size = '76px'

const cardStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 180px;
    border-radius: ${({ theme }) => theme.spaces.two};
    border: ${({ theme }) => theme.spaces.one} solid ${({ theme }) => theme.colors.blue};
`

export const StyledFieldset = styled.fieldset`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${({ theme }) => theme.spaces.four};

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const StyledLegend = styled.legend`
    grid-column: 1 / 5;
    margin-bottom: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.1;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        grid-column: 1 / 3;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        grid-column: 1 / 2;
    }
`

export const StyledLabel = styled.label<{ isDisabled: boolean }>`
    cursor: pointer;
    padding: ${({ theme }) => theme.spaces.five};
    transition: opacity ${({ theme }) => theme.times.short};

    ${cardStyles};
    ${opacityStyles};
    ${({ isDisabled }) => isDisabled && 'pointer-events: none;'};

    svg {
        font-size: ${size};
    }
`

export const StyledInput = styled.input`
    display: none;
`

export const StyledImageContainer = styled.div<{ isDisabled: boolean }>`
    position: relative;

    ${({ isDisabled }) => isDisabled && 'pointer-events: none;'};
`

export const StyledImage = styled.img`
    object-fit: cover;

    ${cardStyles};
`

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: ${({ theme }) => transparentize(0.14, theme.colors.background)};
    padding: 0;
    margin: 0;
    border: 0;
    opacity: 0;
    cursor: pointer;
    transition: opacity ${({ theme }) => theme.times.short};
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.spaces.two};

    ${centerStyles};

    &:hover,
    &:focus {
        opacity: 1;
    }

    &:active {
        opacity: 0.8;
    }

    svg {
        font-size: ${size};
    }
`
