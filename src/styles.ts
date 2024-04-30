import { transparentize } from 'polished'
import { createGlobalStyle } from 'styled-components'

export const StyledGlobal = createGlobalStyle<{ isCypressMode: boolean }>`
    * {
        box-sizing: border-box;

        &:focus-visible {
            outline: ${({ theme }) => theme.spaces.two} solid ${({ theme }) => transparentize(0.32, theme.colors.primary)};
            outline-offset: 0;
        }
    }

    html, body {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.background};
        line-height: 1;
        word-break: break-word;
        scroll-behavior: smooth;
        height: 100%;

        ${({ isCypressMode, theme }) => isCypressMode && `padding: ${theme.spaces.two}`}
    }

    #root {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        height: inherit;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Kanit', sans-serif;
        color: ${({ theme }) => theme.colors.primary};
    }

    button{
        transition: background-color ${({ theme }) => theme.times.short};
    }
`
