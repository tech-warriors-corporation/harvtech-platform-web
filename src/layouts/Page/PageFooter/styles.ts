import styled from 'styled-components'

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => `${theme.spaces.five} ${theme.spaces.six}`};
    white-space: break-spaces;
    font-weight: 500;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        text-align: center;
        padding: ${({ theme }) => theme.spaces.four};
    }
`
