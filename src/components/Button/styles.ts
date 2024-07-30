import { Link } from 'react-router-dom'

import { darken } from 'polished'
import styled, { css, keyframes } from 'styled-components'

import { ButtonLayout } from './enums'

import { fixHeight, fixSize } from '~utils/css-toolkit'

type LayoutColors = {
    color: string
    backgroundColor: string
}

type Props = {
    layout: ButtonLayout
}

const layoutColors: Record<ButtonLayout, LayoutColors> = {
    [ButtonLayout.PRIMARY]: {
        color: 'background',
        backgroundColor: 'primary',
    },
    [ButtonLayout.SECONDARY]: {
        color: 'background',
        backgroundColor: 'text',
    },
    [ButtonLayout.TERTIARY]: {
        color: 'text',
        backgroundColor: 'purple',
    },
}

const getLayout = (layout: ButtonLayout) => {
    const { color, backgroundColor } = layoutColors[layout]

    return css(({ theme }) => {
        const { colors } = theme
        const colorValue = colors[color as keyof typeof colors]
        const backgroundColorValue = colors[backgroundColor as keyof typeof colors]
        const hoverAndFocusValue = 0.1
        const activeValue = 0.2
        const disabledValue = 0.3

        return `
            color: ${colorValue};
            background-color: ${backgroundColorValue};

            &:hover,
            &:focus {
                color: ${darken(hoverAndFocusValue, colorValue)};
                background-color: ${darken(hoverAndFocusValue, backgroundColorValue)};
            }

            &:active {
                color: ${darken(activeValue, colorValue)};
                background-color: ${darken(activeValue, backgroundColorValue)};
            }

            &:disabled {
                color: ${darken(disabledValue, colorValue)};
                background-color: ${darken(disabledValue, backgroundColorValue)};
                cursor: default;
                pointer-events: none;
            }
        `
    })
}

const styles = css<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({ theme }) => theme.spaces.three};
    text-align: center;
    font-size: 1rem;
    width: fit-content;
    border: none;
    border-radius: ${({ theme }) => theme.spaces.two};
    color: ${({ theme }) => theme.colors.background};
    font-weight: 600;
    cursor: pointer;
    padding: ${({ theme }) => `${theme.spaces.three} ${theme.spaces.four}`};
    white-space: nowrap;
    text-decoration: none;

    ${({ layout }) => getLayout(layout)};

    ${fixHeight('40px')};
`

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }

`

export const StyledButton = styled.button<Props>`
    ${styles}
`

export const StyledLink = styled(Link)<Props>`
    ${styles}
`

export const StyledSpinner = styled.div`
    border: ${({ theme }) => theme.spaces.two} solid ${({ theme }) => theme.colors.lightGray};
    border-top: ${({ theme }) => theme.spaces.two} solid ${({ theme }) => theme.colors.background};
    border-radius: 50%;
    animation: ${rotate} ${({ theme }) => theme.times.medium} linear infinite;
    display: flex;
    align-items: center;
    justify-content: center;

    ${fixSize('20px')};
`
