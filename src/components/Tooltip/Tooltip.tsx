import React, { PropsWithChildren, ReactElement } from 'react'
import * as Ariakit from '@ariakit/react'

import { StyledTooltip, StyledTooltipAnchor } from './styles'

type Props = {
    text: string
}

export const Tooltip: React.FC<PropsWithChildren<Props>> = ({ text, children }) => (
    <Ariakit.TooltipProvider showTimeout={0} hideTimeout={0}>
        <StyledTooltipAnchor render={children as ReactElement} />
        <StyledTooltip>{text}</StyledTooltip>
    </Ariakit.TooltipProvider>
)
