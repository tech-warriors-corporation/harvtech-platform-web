import { darken } from 'polished'
import styled from 'styled-components'

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    width: fit-content;
    border: none;
    border-radius: ${({ theme }) => theme.spaces.two};
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    cursor: pointer;
    padding: ${({ theme }) => `${theme.spaces.three} ${theme.spaces.four}`};
    white-space: nowrap;

    &:hover,
    &:focus {
        background-color: ${({ theme }) => darken(0.1, theme.colors.primary)};
    }

    &:active {
        background-color: ${({ theme }) => darken(0.2, theme.colors.primary)};
    }
`
