import React, { useMemo } from 'react'
import { IconType } from 'react-icons'

import { ButtonLayout, ButtonType } from './enums'
import { StyledButton, StyledLink, StyledSpinner } from './styles'

type Props = {
    text?: string
    id?: string
    href?: string
    ariaLabel?: string
    icon?: IconType
    onClick?: () => void
    type?: ButtonType
    layout?: ButtonLayout
    isLoading?: boolean
    isDisabled?: boolean
    cyId?: string
}

export const Button: React.FC<Props> = ({
    text,
    id,
    href,
    ariaLabel,
    icon,
    onClick,
    type = ButtonType.BUTTON,
    layout = ButtonLayout.PRIMARY,
    isLoading = false,
    isDisabled = false,
    cyId,
}) => {
    const props = useMemo(
        () => ({ 'data-cy': cyId, id, 'aria-label': ariaLabel, layout }),
        [cyId, id, ariaLabel, layout],
    )

    const content = useMemo(
        () =>
            icon ? (
                <>
                    {icon({ 'aria-hidden': true })} {text}
                </>
            ) : (
                text
            ),
        [text, icon],
    )

    return href ? (
        <StyledLink to={href} {...props}>
            {content}
        </StyledLink>
    ) : (
        <StyledButton type={type} disabled={isDisabled || isLoading} onClick={onClick} {...props}>
            {isLoading ? (
                <StyledSpinner role={'status'} aria-live={'polite'} aria-label={'Botão em estado de carregando'} />
            ) : (
                content
            )}
        </StyledButton>
    )
}
