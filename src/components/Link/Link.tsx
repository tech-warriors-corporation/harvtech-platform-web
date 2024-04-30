import React from 'react'

import { StyledLink } from './styles'

export type Props = {
    text: string
    href: string
    cyId?: string
}

export const Link: React.FC<Props> = ({ text, href, cyId }) => (
    <StyledLink data-cy={cyId} to={href}>
        {text}
    </StyledLink>
)
