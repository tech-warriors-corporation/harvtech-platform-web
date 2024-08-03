import styled from 'styled-components'

import { fieldStyles, fixSize } from '~utils/css-toolkit'

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledInputWrapper = styled.div`
    position: relative;
    width: 100%;
`

export const StyledInput = styled.input<{ isPassword: boolean }>`
    ${fieldStyles};

    ${({ theme, isPassword }) => isPassword && `padding-right: ${theme.spaces.six}`};
`

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 14px;
    right: ${({ theme }) => theme.spaces.three};
    color: ${({ theme }) => theme.colors.background};
    padding: 0;
    margin: 0;
    border: 0;
    border-radius: ${({ theme }) => theme.spaces.two};
    font-size: ${({ theme }) => theme.spaces.four};
    background-color: transparent;
    cursor: pointer;

    ${({ theme }) => fixSize(theme.spaces.four)};
`
