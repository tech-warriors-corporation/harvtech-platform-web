import styled from 'styled-components'

export const StyledContentLimiter = styled.div`
    display: block;
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.full};
    margin: 0 auto;
`
