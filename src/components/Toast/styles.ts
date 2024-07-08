import { css } from 'styled-components'

import { fixSize, fontFamily } from '~utils/css-toolkit'

const size = '12px'
const iconSize = '18px'

export const toastStyles = css`
    .Toastify {
        &__progress-bar--wrp {
            visibility: hidden;
        }

        &__close-button,
        &__toast {
            color: ${({ theme }) => theme.colors.text};
        }

        &__close-button {
            margin: ${({ theme }) => `-${theme.spaces.three} -${theme.spaces.three} 0 0`};
            opacity: 0.75;
            transition: opacity ${({ theme }) => theme.times.short};

            &,
            > svg {
                display: flex;
                align-items: center;
                justify-content: center;

                ${fixSize('14px')};
            }
        }

        &__toast {
            --toastify-font-family: ${fontFamily};

            border-radius: ${({ theme }) => theme.spaces.two};
            min-height: auto;
            max-height: fit-content;
            background-color: ${({ theme }) => theme.colors.darkGray};
            padding: ${({ theme }) => theme.spaces.four};
            box-shadow: none;
            margin-bottom: ${({ theme }) => theme.spaces.four};

            &:last-child {
                margin-bottom: 0;
            }

            &-body {
                font-size: 0.875rem;
                padding: 0;
                margin-right: ${size};
            }

            &-container {
                padding: 0;

                @media (max-width: 480px) {
                    padding: ${({ theme }) => theme.spaces.four};
                }
            }

            &-icon {
                --toastify-icon-color-error: ${({ theme }) => theme.colors.red};

                margin-right: ${size};
                font-size: ${iconSize};

                ${fixSize(iconSize)};
            }
        }
    }
`
