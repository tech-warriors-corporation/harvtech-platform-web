import React from 'react'

import { StyledLink } from './styles'

export type Props = {
    text: string
    href: string
}

export const Link: React.FC<Props> = ({ text, href }) => <StyledLink href={href}>{text}</StyledLink>
