import React from 'react'

import { ButtonLayout } from './enums'
import { StyledButton, StyledLink } from './styles'

type Props = {
    text: string
    href?: string
    onClick?: () => void
    layout?: ButtonLayout
    cyId?: string
}

export const Button: React.FC<Props> = ({ text, href, onClick, layout = ButtonLayout.PRIMARY, cyId }) =>
    href ? (
        <StyledLink data-cy={cyId} layout={layout} to={href}>
            {text}
        </StyledLink>
    ) : (
        <StyledButton data-cy={cyId} layout={layout} onClick={onClick}>
            {text}
        </StyledButton>
    )
