import { transparentize } from 'polished'
import styled from 'styled-components'

import { customScroll, fixSize, fixWidth } from '~utils/css-toolkit'

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spaces.five};
`

export const StyledText = styled.p`
    font-size: 1.125rem;
`

export const StyledModelTypeContainer = styled.div`
    max-width: 600px;
    width: 100%;
`

export const StyledActions = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spaces.five};

    button[type='submit'] {
        min-width: 260px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        flex-direction: column-reverse;

        button {
            ${fixWidth('100%')};
        }
    }
`

export const StyledPredictedImages = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${({ theme }) => theme.spaces.four};
    margin-top: ${({ theme }) => theme.spaces.five};
    padding-top: ${({ theme }) => theme.spaces.five};
    border-top: ${({ theme }) => theme.spaces.three} solid ${({ theme }) => theme.colors.darkGray};

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const StyledPredictedImage = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    position: relative;
    background-color: ${({ theme }) => transparentize(0.82, theme.colors.primary)};
    border-radius: ${({ theme }) => theme.spaces.two};
`

export const StyledImage = styled.img`
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: ${({ theme }) => `${theme.spaces.two} ${theme.spaces.two} 0 0`};
    border: ${({ theme }) => theme.spaces.one} solid ${({ theme }) => theme.colors.primary};
`

export const StyledPredictedText = styled.p`
    width: 100%;
    font-size: 0.75rem;
    line-height: 1.5;
    padding: ${({ theme }) => theme.spaces.four};
    max-height: 280px;
    overflow-y: auto;

    ${customScroll};

    * {
        all: revert;
        margin: 0;
    }
`

export const StyledIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: ${({ theme }) => theme.spaces.two};
    background-color: ${({ theme }) => theme.colors.primary};

    ${fixSize('36px')};

    svg {
        color: ${({ theme }) => theme.colors.background};
        font-size: 28px;
    }
`
