import React from 'react'

import { ButtonLayout, ButtonType } from './enums'
import { StyledButton, StyledLink } from './styles'

type Props = {
    text: string
    href?: string
    onClick?: () => void
    type?: ButtonType
    layout?: ButtonLayout
    cyId?: string
}

export const Button: React.FC<Props> = ({
    text,
    href,
    onClick,
    type = ButtonType.BUTTON,
    layout = ButtonLayout.PRIMARY,
    cyId,
}) =>
    href ? (
        <StyledLink data-cy={cyId} layout={layout} to={href}>
            {text}
        </StyledLink>
    ) : (
        <StyledButton data-cy={cyId} type={type} layout={layout} onClick={onClick}>
            {text}
        </StyledButton>
    )
