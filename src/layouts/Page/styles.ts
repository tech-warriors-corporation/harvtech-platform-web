import styled from 'styled-components'

export const StyledPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const StyledMain = styled.main<{ removePadding: boolean }>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: ${({ theme, removePadding }) => (removePadding ? 0 : `${theme.spaces.five} ${theme.spaces.six}`)};

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        padding: ${({ theme, removePadding }) => (removePadding ? 0 : theme.spaces.four)};
    }
`
