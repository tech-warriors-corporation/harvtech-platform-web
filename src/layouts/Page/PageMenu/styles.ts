import { Link } from 'react-router-dom'

import { transparentize } from 'polished'
import styled from 'styled-components'

import { customScroll, fixWidth, opacityStyles } from '~utils/css-toolkit'

const height = '56px'

export const StyledMenu = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    padding: ${({ theme }) => `${theme.spaces.five} ${theme.spaces.six}`};

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        padding: ${({ theme }) => theme.spaces.four};
    }
`

export const StyledContainer = styled.div`
    display: flex;
    flex-grow: 1;
    height: 100%;
`

export const StyledSide = styled.aside<{ isOpened: boolean }>`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => transparentize(0.88, theme.colors.primary)};
    height: 100%;
    border-radius: ${({ theme }) => theme.spaces.two};
    overflow-y: auto;
    z-index: 1;

    ${fixWidth('278px')};

    ${customScroll};

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        position: fixed;
        left: -100%;
        top: 0;
        background-color: ${({ theme }) => theme.colors.background};
        border-radius: 0;

        ${fixWidth('100%')};

        ${({ isOpened }) => isOpened && 'left: 0'};
    }
`

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

export const StyledItem = styled.li`
    width: 100%;
`

export const StyledLink = styled(Link)<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    text-decoration: none;
    border-bottom: ${({ theme }) => theme.spaces.one} solid
        ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.text)};
    color: ${({ theme, isActive }) => (isActive ? theme.colors.primary : theme.colors.text)};
    font-weight: 500;
    font-size: 1rem;
    padding: ${({ theme }) => theme.spaces.four};
    height: ${height};
    column-gap: ${({ theme }) => theme.spaces.three};
    transition:
        color ${({ theme }) => theme.times.short},
        opacity ${({ theme }) => theme.times.short};

    ${opacityStyles};

    svg {
        font-size: 1.375rem;
    }
`

export const StyledActions = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spaces.four};
    padding: ${({ theme }) => theme.spaces.four};

    > button {
        width: 100%;
    }
`

export const StyledInfo = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: ${({ theme }) => theme.spaces.four};
`

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: ${({ theme }) => `0 0 0 ${theme.spaces.five}`};
    row-gap: ${({ theme }) => theme.spaces.five};

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        padding: 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        row-gap: ${({ theme }) => theme.spaces.four};
    }
`

export const StyledHeader = styled.div`
    display: none;
    align-items: center;
    justify-content: space-between;
    column-gap: ${({ theme }) => theme.spaces.four};
    padding: ${({ theme }) => `12px ${theme.spaces.four}`};
    border-bottom: ${({ theme }) => theme.spaces.one} solid ${({ theme }) => theme.colors.text};
    height: ${height};

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: flex;
    }
`

export const StyledTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
`
