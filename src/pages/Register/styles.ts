import styled from 'styled-components'

import { Card } from '~components/Card'
import { Link } from '~components/Link'

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: ${({ theme }) => theme.spaces.five};
    height: fit-content;
    margin-bottom: 86px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        flex-direction: column-reverse;
        margin-top: ${({ theme }) => theme.spaces.four};
    }
`

export const StyledImage = styled.img`
    width: 100%;
    max-width: 672px;
    border-bottom: ${({ theme }) => theme.spaces.three} solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.spaces.two};
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        display: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: block;
        max-width: 100%;
    }
`

export const StyledCard = styled(Card)`
    max-width: 668px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        max-width: 100%;
    }
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spaces.five};

    button[type='submit'] {
        width: 100%;
        margin-top: ${({ theme }) => theme.spaces.four};
    }
`

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    text-align: center;
    margin: 0 auto;
`

export const StyledTitle = styled.h2`
    font-size: 1.875rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 1.75rem;
    }
`

export const StyledText = styled.p`
    margin: ${({ theme }) => `-${theme.spaces.four} 0 0`};

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        font-size: 0.875rem;
    }
`

export const StyledActions = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spaces.four};
`

export const StyledAcceptedTermsLink = styled(Link)`
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
`
