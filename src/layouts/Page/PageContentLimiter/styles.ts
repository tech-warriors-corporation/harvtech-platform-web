import styled from 'styled-components'

export const StyledContentLimiter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: ${({ theme }) => theme.breakpoints.full};
    margin: 0 auto;
`
