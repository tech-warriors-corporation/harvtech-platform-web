import React, { PropsWithChildren, useEffect, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router'

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

const THIRTY_MINUTES = 1000 * 60 * 30

type Props = {
    title?: string
    type?: PageType
    isCypressMode?: boolean
} & PropsWithChildren

export const Page: React.FC<Props> = ({ title, type, isCypressMode = false, children }) => {
    const { getAccount, getRefreshedToken } = useAccount()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const content = useMemo(
        () => (type ? <PageContentLimiter>{children}</PageContentLimiter> : children),
        [children, type],
    )

    const navigateBasedOnAccount = () => {
        const account = getAccount()

        if (account && (!type || type === PageType.UNLOGGED)) navigate(Routes.DASHBOARD)
        else if (!account && type === PageType.LOGGED) navigate(Routes.HOME)
    }

    useEffect(() => {
        if (type !== PageType.LOGGED) return

        const intervalId = setInterval(async () => {
            const wasSuccessful = await getRefreshedToken()

            if (!wasSuccessful) navigate(Routes.HOME)
        }, THIRTY_MINUTES)

        return () => {
            clearInterval(intervalId)
        }
    }, [type])

    useEffect(() => {
        navigateBasedOnAccount()
    }, [pathname])

    return (
        <ThemeProvider theme={theme}>
            <div hidden data-cy={'page'} />

            <StyledGlobal isCypressMode={isCypressMode!} />

            {isCypressMode ? (
                children
            ) : (
                <StyledPage>
                    <PageHeader title={title!} pageType={type!} />
                    <StyledMain removePadding={!type}>{content}</StyledMain>
                    <PageFooter />
                </StyledPage>
            )}

            <Toast />
        </ThemeProvider>
    )
}
