import styled from 'styled-components'

import { Card } from '~components/Card'
import { Link } from '~components/Link'

export const StyledSideLinesBackground = styled.img`
    position: fixed;
    right: 0;
    top: 0;
    width: 194px;
    pointer-events: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        width: 106px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        display: none;
    }
`

export const StyledCard = styled(Card)`
    max-width: 516px;
    margin: auto auto 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
        max-width: 422px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        max-width: 334px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        margin: ${({ theme }) => `${theme.spaces.four} auto 0`};
        max-width: 100%;
    }
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spaces.four};
`

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    margin: ${({ theme }) => theme.spaces.four} auto auto auto;
    font-weight: 500;
`

export const StyledTitle = styled.h2`
    font-size: 1.75rem;
`

export const StyledText = styled.p`
    margin: ${({ theme }) => `-${theme.spaces.three} 0 ${theme.spaces.three}`};
`

export const StyledActions = styled.div`
    margin-top: ${({ theme }) => theme.spaces.five};

    button {
        width: 100%;
    }
`
