import React, { PropsWithChildren } from 'react'

import { ThemeProvider } from 'styled-components'

import 'reset-css'
import 'animate.css/animate.min.css'

import { Button } from '~/components/Button'
import { Link } from '~/components/Link'
import { StyledWrapper } from '~/components/Wrapper/styles'
import { Routes } from '~/routes'
import { StyledGlobal } from '~/styles'
import { theme } from '~/theme'

type Props = {
    isCypressMode?: boolean
} & PropsWithChildren

export const Wrapper: React.FC<Props> = ({ isCypressMode = false, children }) => (
    <ThemeProvider theme={theme}>
        <div hidden data-cy={'wrapper'} />

        <StyledGlobal isCypressMode={isCypressMode as boolean} />

        {isCypressMode ? (
            children
        ) : (
            <StyledWrapper>
                <header>
                    <h1>HarvTech</h1>
                </header>
                <main>
                    <Button text={'Tech Warriors'} onClick={() => alert('Tech Warriors')} />
                    {children}
                </main>
                <footer>
                    <Link href={Routes.HOME} text={'Home'} />
                    <Link href={Routes.LOGIN} text={'Login'} />
                    <Link href={'https://github.com/tech-warriors-corporation'} text={'Tech Warriors'} />
                </footer>
            </StyledWrapper>
        )}
    </ThemeProvider>
)
