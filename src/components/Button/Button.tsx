import React from 'react'

import { StyledButton } from '~/components/Button/styles'

type Props = {
    text: string
    onClick: () => void
    cyId?: string
}

export const Button: React.FC<Props> = ({ text, onClick, cyId }) => (
    <StyledButton data-cy={cyId} onClick={onClick}>
        {text}
    </StyledButton>
)
