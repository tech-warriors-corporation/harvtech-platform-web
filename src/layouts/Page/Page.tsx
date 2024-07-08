import React, { PropsWithChildren, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router'

import { ThemeProvider } from 'styled-components'

import 'reset-css'
import 'animate.css/animate.min.css'

import { StyledGlobal } from '../../styles'
import { theme } from '../../theme'

import { PageType } from './enums'
import { PageContentLimiter } from './PageContentLimiter'
import { PageFooter } from './PageFooter'
import { PageHeader } from './PageHeader'
import { StyledMain, StyledPage } from './styles'

import { Toast } from '~components/Toast'
import { Routes } from '~enums/Routes'
import { useAccount } from '~hooks/useAccount'

type Props = {
    title?: string
    type?: PageType
    isCypressMode?: boolean
} & PropsWithChildren

export const Page: React.FC<Props> = ({ title, type, isCypressMode = false, children }) => {
    const { account } = useAccount()
    const navigate = useNavigate()

    const content = useMemo(
        () => (type ? <PageContentLimiter>{children}</PageContentLimiter> : children),
        [children, type],
    )

    useEffect(() => {
        if (account && (!type || type === PageType.UNLOGGED)) navigate(Routes.DASHBOARD)
        else if (!account && type === PageType.LOGGED) navigate(Routes.HOME)
    }, [account, navigate, type])

    return (
        <ThemeProvider theme={theme}>
            <div hidden data-cy={'page'} />

            <StyledGlobal isCypressMode={isCypressMode as boolean} />

            {isCypressMode ? (
                children
            ) : (
                <StyledPage>
                    <PageHeader title={title} pageType={type} />
                    <StyledMain removePadding={!type}>{content}</StyledMain>
                    <PageFooter />
                </StyledPage>
            )}

            <Toast />
        </ThemeProvider>
    )
}
