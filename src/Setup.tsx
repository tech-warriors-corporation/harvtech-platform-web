import React, { PropsWithChildren } from 'react'

import { ThemeProvider } from 'styled-components'

import 'reset-css'
import 'animate.css/animate.min.css'

import { StyledGlobal } from '~/styles'
import { theme } from '~/theme'

type Props = {
    isCypressMode?: boolean
} & PropsWithChildren

export const Setup: React.FC<Props> = ({ isCypressMode = false, children }) => (
    <ThemeProvider theme={theme}>
        <StyledGlobal isCypressMode={isCypressMode as boolean} />
        {children}
    </ThemeProvider>
)
