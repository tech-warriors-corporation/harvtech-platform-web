import React from 'react'

import { ButtonLayout, ButtonType } from './enums'
import { StyledButton, StyledLink, StyledSpinner } from './styles'

type Props = {
    text: string
    href?: string
    onClick?: () => void
    type?: ButtonType
    layout?: ButtonLayout
    isLoading?: boolean
    isDisabled?: boolean
    cyId?: string
}

export const Button: React.FC<Props> = ({
    text,
    href,
    onClick,
    type = ButtonType.BUTTON,
    layout = ButtonLayout.PRIMARY,
    isLoading = false,
    isDisabled = false,
    cyId,
}) =>
    href ? (
        <StyledLink data-cy={cyId} layout={layout!} to={href}>
            {text}
        </StyledLink>
    ) : (
        <StyledButton data-cy={cyId} type={type} layout={layout!} onClick={onClick} disabled={isDisabled || isLoading}>
            {isLoading ? (
                <StyledSpinner role={'status'} aria-live={'polite'} aria-label={'Botão em estado de carregando'} />
            ) : (
                text
            )}
        </StyledButton>
    )
