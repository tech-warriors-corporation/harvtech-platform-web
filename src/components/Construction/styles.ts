import styled from 'styled-components'

export const StyledConstruction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    row-gap: ${({ theme }) => theme.spaces.three};
    width: 100%;
    padding: ${({ theme }) => theme.spaces.four};
    background-color: ${({ theme }) => theme.colors.darkGray};
    border-radius: ${({ theme }) => theme.spaces.two};
`
