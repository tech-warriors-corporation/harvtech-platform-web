import React, { useMemo } from 'react'

import { useTheme } from 'styled-components'

import { StyledLink } from './styles'

import { Target } from '~enums/Target'

export type Props = {
    text: string
    href: string
    target?: Target
    color?: string
    cyId?: string
}

export const Link: React.FC<Props> = ({ text, href, target, color, cyId }) => {
    const { colors } = useTheme()
    const linkColor = useMemo(() => color ?? colors.primary, [color, colors])

    return (
        <StyledLink data-cy={cyId} to={href} target={target} color={linkColor}>
            {text}
        </StyledLink>
    )
}
