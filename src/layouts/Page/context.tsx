import React, { createContext, PropsWithChildren, useEffect, useMemo, useState } from 'react'

import { useTheme } from 'styled-components'

import { valueToNumber } from '~utils/css-toolkit'

export type PageData = {
    isMenuOpened: boolean
    openMenu: () => void
    closeMenu: () => void
}

export const PageContext = createContext<PageData>({} as PageData)

export const PageProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const {
        breakpoints: { medium },
    } = useTheme()

    const [isMenuOpened, setIsMenuOpened] = useState(false)
    const mediumWidth = useMemo(() => valueToNumber(medium), [medium])

    const openMenu = () => setIsMenuOpened(true)

    const closeMenu = () => setIsMenuOpened(false)

    useEffect(() => {
        const handleResize = () => setIsMenuOpened(window.innerWidth > mediumWidth)

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <PageContext.Provider
            value={{
                isMenuOpened,
                openMenu,
                closeMenu,
            }}
        >
            {children}
        </PageContext.Provider>
    )
}
