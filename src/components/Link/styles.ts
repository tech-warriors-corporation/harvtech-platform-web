import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { focusVisibleOutline, opacityStyles } from '~utils/css-toolkit'

export const StyledLink = styled(Link)<{ color: string }>`
    color: ${({ color }) => color};
    text-decoration: underline;
    width: fit-content;

    ${({ color }) => focusVisibleOutline(color)};

    ${opacityStyles};
`
