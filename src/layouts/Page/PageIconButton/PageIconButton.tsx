import React from 'react'
import { IconType } from 'react-icons'

import { StyledButton } from './styles'

import { Tooltip } from '~components/Tooltip'

type Props = {
    text: string
    icon: IconType
    onClick: () => void
    isDisabled?: boolean
    id?: string
    cyId?: string
}

export const PageIconButton: React.FC<Props> = ({ id, cyId, text, icon, onClick, isDisabled = false }) => (
    <Tooltip text={text}>
        <StyledButton data-cy={cyId} id={id} aria-label={text} disabled={isDisabled} onClick={onClick}>
            {icon({ 'aria-hidden': true })}
        </StyledButton>
    </Tooltip>
)
