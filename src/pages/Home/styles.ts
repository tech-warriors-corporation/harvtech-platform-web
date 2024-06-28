import { transparentize } from 'polished'
import styled from 'styled-components'

import { fixSize } from '~utils/css-toolkit'

export const StyledContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        flex-direction: column;
    }
`

export const StyledBranding = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: inherit;
    background-image: url('./images/home-wallpaper.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: ${({ theme }) => `${theme.spaces.five} ${theme.spaces.six}`};

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        width: 40%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        padding: ${({ theme }) => theme.spaces.four};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        width: 100%;
        background: none;
    }
`

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: ${({ theme }) => theme.spaces.four};
`

export const StyledLogo = styled.img`
    ${fixSize('268px')};

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        ${fixSize('204px')};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        ${fixSize('136px')};
    }
`

export const StyledTitle = styled.h1`
    font-size: 4rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        font-size: 3rem;
    }
`

export const StyledText = styled.p`
    font-size: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        font-size: 1.5rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 1.25rem;
    }
`

export const StyledActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${({ theme }) => `${theme.spaces.five} ${theme.spaces.six}`};
    width: 40%;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        width: 60%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        padding: ${({ theme }) => theme.spaces.four};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        width: 100%;
        padding-top: 0;
    }
`

export const StyledCard = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spaces.four};
    border-radius: ${({ theme }) => theme.spaces.three};
    background-color: ${({ theme }) => transparentize(0.88, theme.colors.primary)};
    padding: ${({ theme }) => theme.spaces.five};
    width: 100%;
    max-width: 416px;
    margin: 0 auto;

    a,
    button {
        width: 100%;
    }
`

export const StyledSubTitle = styled.h2`
    font-size: 2.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 2rem;
    }
`

export const StyledSubText = styled.p`
    font-size: 1rem;
    margin-bottom: ${({ theme }) => theme.spaces.three};

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 0.875rem;
    }
`
