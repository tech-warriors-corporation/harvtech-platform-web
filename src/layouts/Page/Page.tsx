import React, { PropsWithChildren, useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { ThemeProvider } from 'styled-components'

import 'reset-css'
import 'animate.css/animate.min.css'

import { StyledGlobal } from '../../styles'
import { theme } from '../../theme'

import { PageProvider } from './context'
import { PageType } from './enums'
import { PageContentLimiter } from './PageContentLimiter'
import { PageFooter } from './PageFooter'
import { PageHeader } from './PageHeader'
import { PageMenu } from './PageMenu'
import { StyledMain, StyledPage } from './styles'

import { Toast } from '~components/Toast'
import { Routes } from '~enums/Routes'
import { useAccount } from '~hooks/useAccount'

const THIRTY_MINUTES = 1000 * 60 * 30

type Props = {
    title?: string
    type?: PageType
    removeMenu?: boolean
    isCypressMode?: boolean
} & PropsWithChildren

export const Page: React.FC<Props> = ({ title, type, removeMenu, isCypressMode = false, children }) => {
    if (removeMenu === undefined) removeMenu = type === PageType.UNLOGGED

    const { getAccount, getRefreshedToken } = useAccount()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const isPageTypeLogged = useMemo(() => type === PageType.LOGGED, [type])

    const wrapper = useMemo(() => {
        const components = (
            <>
                <PageHeader title={title!} pageType={type!} removeMenu={removeMenu!} />
                <StyledMain removePadding={!type || !removeMenu}>
                    {removeMenu ? <PageContentLimiter>{children}</PageContentLimiter> : children}
                </StyledMain>
            </>
        )

        return isPageTypeLogged && !removeMenu ? <PageMenu pageType={type!}>{components}</PageMenu> : components
    }, [isPageTypeLogged, removeMenu, title, type, children])

    const navigateBasedOnAccount = () => {
        const account = getAccount()

        if (account && (!type || type === PageType.UNLOGGED)) navigate(Routes.DASHBOARD)
        else if (!account && type === PageType.LOGGED) navigate(Routes.HOME)
    }

    useEffect(() => {
        if (!isPageTypeLogged) return

        const intervalId = setInterval(async () => {
            const wasSuccessful = await getRefreshedToken()

            if (!wasSuccessful) navigate(Routes.HOME)
        }, THIRTY_MINUTES)

        return () => {
            clearInterval(intervalId)
        }
    }, [isPageTypeLogged])

    useEffect(() => {
        navigateBasedOnAccount()
    }, [pathname])

    return (
        <ThemeProvider theme={theme}>
            <PageProvider>
                <div hidden data-cy={'page'} />

                <StyledGlobal isCypressMode={isCypressMode!} />

                {isCypressMode ? (
                    children
                ) : (
                    <StyledPage>
                        {wrapper}
                        <PageFooter />
                    </StyledPage>
                )}

                <Toast />
            </PageProvider>
        </ThemeProvider>
    )
}
