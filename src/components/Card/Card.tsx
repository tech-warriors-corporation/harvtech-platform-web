import React, { PropsWithChildren } from 'react'

import { StyledCard } from './styles'

type Props = {
    className?: string
    cyId?: string
}

export const Card: React.FC<PropsWithChildren<Props>> = ({ className, cyId, children }) => (
    <StyledCard data-cy={cyId} className={className}>
        {children}
    </StyledCard>
)
