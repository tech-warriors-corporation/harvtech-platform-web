import styled from 'styled-components'

import { opacityStyles } from '~utils/css-toolkit'

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    padding: 0;
    margin: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.spaces.six};
    cursor: pointer;

    ${opacityStyles};

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: ${({ theme }) => theme.spaces.five};
    }
`
