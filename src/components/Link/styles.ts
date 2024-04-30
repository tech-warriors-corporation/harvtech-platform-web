import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    width: fit-content;
`
