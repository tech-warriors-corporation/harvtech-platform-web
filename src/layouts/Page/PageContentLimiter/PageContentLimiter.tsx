import React, { PropsWithChildren } from 'react'

import { StyledContentLimiter } from './styles'

export const PageContentLimiter: React.FC<PropsWithChildren> = ({ children }) => (
    <StyledContentLimiter>{children}</StyledContentLimiter>
)
