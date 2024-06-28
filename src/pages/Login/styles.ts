import styled from 'styled-components'

export const StyledSideLinesBackground = styled.img`
    position: fixed;
    right: 0;
    top: 0;
    width: 194px;
    pointer-events: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        width: 126px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        display: none;
    }
`
