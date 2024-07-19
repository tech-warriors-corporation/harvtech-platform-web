import styled from 'styled-components'

import { fixSize, fontFamily } from '~utils/css-toolkit'

const contentSpace = '6px'
const fontSize = '0.875rem'
const lineHeight = '1.1'

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledLabel = styled.label`
    font-size: ${fontSize};
    font-weight: 500;
    line-height: ${lineHeight};
    margin-bottom: ${contentSpace};
`

export const StyledInputWrapper = styled.div`
    position: relative;
    width: 100%;
`

export const StyledInput = styled.input<{ isPassword: boolean }>`
    padding: 12px ${({ theme }) => theme.spaces.three};
    margin: 0;
    background-color: ${({ theme }) => theme.colors.text};
    border: ${({ theme }) => theme.spaces.one} solid ${({ theme }) => theme.colors.lighterGray};
    border-radius: ${({ theme }) => theme.spaces.two};
    width: inherit;
    transition: border-color ${({ theme }) => theme.times.short};
    color: ${({ theme }) => theme.colors.background};

    ${({ theme, isPassword }) => isPassword && `padding-right: ${theme.spaces.six}`};

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &::placeholder {
        line-height: inherit;
        color: ${({ theme }) => theme.colors.background};
        font-size: ${fontSize};
        font-family: ${fontFamily};
    }
`

export const StyledErrorMessage = styled.span`
    display: flex;
    align-items: center;
    column-gap: ${({ theme }) => theme.spaces.two};
    color: ${({ theme }) => theme.colors.red};
    font-weight: 500;
    font-size: 0.75rem;
    line-height: ${lineHeight};
    margin-top: ${contentSpace};
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
