import styled, { css } from 'styled-components'

import { PageType } from '~layouts/Page'
import { fixSize } from '~utils/css-toolkit'

export const StyledHeader = styled.header<{ pageType?: PageType; removeMenu?: boolean }>`
    width: 100%;

    ${({ theme, pageType, removeMenu }) => {
        if (pageType === PageType.UNLOGGED || removeMenu)
            return css`
                padding: ${theme.spaces.five} ${theme.spaces.six} 0;

                @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
                    padding: ${({ theme }) => `${theme.spaces.four} ${theme.spaces.four} 0`};
                }
            `
    }};
`

export const StyledContent = styled.div`
    display: flex;
    align-items: center;
    column-gap: ${({ theme }) => theme.spaces.four};

    #page-header-open-menu {
        display: none;

        @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
            display: flex;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        column-gap: ${({ theme }) => theme.spaces.three};
    }
`

export const StyledTitle = styled.h1`
    font-size: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 1.5rem;
    }
`

export const StyledLogo = styled.img`
    ${fixSize('52px')};

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        ${fixSize('34px')};
    }
`
