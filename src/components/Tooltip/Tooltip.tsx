import React, { PropsWithChildren, ReactElement } from 'react'
import * as Ariakit from '@ariakit/react'

import { StyledTooltip, StyledTooltipAnchor } from './styles'
import { TooltipTextAlign } from './types'

type Props = {
    text: string
    textAlign?: TooltipTextAlign
}

export const Tooltip: React.FC<PropsWithChildren<Props>> = ({ text, textAlign, children }) => (
    <Ariakit.TooltipProvider showTimeout={0} hideTimeout={0} placement={'bottom'}>
        <StyledTooltipAnchor render={children as ReactElement} onClick={(event) => event.preventDefault()} />
        <StyledTooltip textAlign={textAlign!}>{text}</StyledTooltip>
    </Ariakit.TooltipProvider>
)
