import { transparentize } from 'polished'
import styled from 'styled-components'

export const StyledCard = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spaces.four};
    border-radius: ${({ theme }) => theme.spaces.three};
    background-color: ${({ theme }) => transparentize(0.88, theme.colors.primary)};
    padding: ${({ theme }) => theme.spaces.five};
    margin: 0 auto;
    width: 100%;
`
