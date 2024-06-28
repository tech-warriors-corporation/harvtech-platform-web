import { Link } from 'react-router-dom'

import { darken } from 'polished'
import styled, { css } from 'styled-components'

import { ButtonLayout } from './enums'

type Props = {
    layout: ButtonLayout
}

const layoutColors = {
    [ButtonLayout.PRIMARY]: {
        backgroundColor: 'primary',
    },
    [ButtonLayout.SECONDARY]: {
        backgroundColor: 'text',
    },
}

const getLayout = (layout: ButtonLayout) => {
    const { backgroundColor } = layoutColors[layout]

    return css(({ theme }) => {
        const backgroundColorValue = theme.colors[backgroundColor]

        return `
            background-color: ${backgroundColorValue};

            &:hover,
            &:focus {
                background-color: ${darken(0.1, backgroundColorValue)};
            }

            &:active {
                background-color: ${darken(0.2, backgroundColorValue)};
            }
        `
    })
}

const styles = css<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
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
`

export const StyledButton = styled.button<Props>`
    ${styles}
`

export const StyledLink = styled(Link)<Props>`
    ${styles}
`
