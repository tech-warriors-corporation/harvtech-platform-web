import { createGlobalStyle } from 'styled-components'

import { toastStyles } from '~components/Toast'
import { focusVisibleOutline, fontFamily, selectionStyles } from '~utils/css-toolkit'

export const StyledGlobal = createGlobalStyle<{ isCypressMode: boolean }>`
    * {
        box-sizing: border-box;

        ${({ theme }) => focusVisibleOutline(theme.colors.primary)}
    }

    html{
        overflow-y: hidden;
    }

    html, body {
        font-family: ${fontFamily};
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.background};
        line-height: 1.2;
        word-break: break-word;
        scroll-behavior: smooth;
        height: 100%;
        overflow-x: hidden;

        ${({ isCypressMode, theme }) => isCypressMode && `padding: ${theme.spaces.two}`};

        ::-moz-selection{
            ${selectionStyles};
        }

        ::selection{
            ${selectionStyles};
        }
    }

    #root {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        height: inherit;
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Kanit', sans-serif;
        font-weight: 500;
        line-height: 1;
    }

    button, a{
        transition: background-color ${({ theme }) => theme.times.short}, opacity ${({ theme }) => theme.times.short};
        font-family: inherit;
    }

    img{
        pointer-events: none;
    }

    ${toastStyles};
`
