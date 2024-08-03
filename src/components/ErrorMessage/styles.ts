import styled from 'styled-components'

export const StyledErrorMessage = styled.span`
    display: flex;
    align-items: center;
    column-gap: ${({ theme }) => theme.spaces.two};
    color: ${({ theme }) => theme.colors.red};
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.1;
    margin-top: 6px;
`
