import React from 'react'

import { ThemeProvider } from 'styled-components'

import 'reset-css'
import 'animate.css/animate.min.css'

import { theme } from './theme'

import { StyledGlobal } from '~/styles'

export const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <StyledGlobal />
        <h1>HarvTech</h1>
    </ThemeProvider>
)
