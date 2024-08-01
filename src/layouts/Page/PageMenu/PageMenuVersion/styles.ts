import styled from 'styled-components'

import { fixSize } from '~utils/css-toolkit'

export const StyledVersion = styled.p`
    display: flex;
    align-items: center;
    column-gap: ${({ theme }) => theme.spaces.three};
    font-size: 0.875rem;
    line-height: 1;
    font-weight: 400;
`

export const StyledImage = styled.img`
    ${fixSize('20px')}
`
