import styled from 'styled-components'

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    column-gap: ${({ theme }) => theme.spaces.three};
    font-size: 0.875rem;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    font-weight: 400;
    line-height: 1;
`
