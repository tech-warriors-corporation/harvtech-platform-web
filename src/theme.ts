import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
    colors: {
        primary: '#07f6bf',
        text: '#fdfdfd',
        background: '#0c0c0c',
        lightGray: 'rgba(12, 12, 12, .24)',
        darkGray: '#1c1c1c',
        red: '#fb2416',
    },
    spaces: {
        one: '2px',
        two: '4px',
        three: '8px',
        four: '16px',
        five: '24px',
        six: '32px',
    },
    times: {
        short: '200ms',
        medium: '750ms',
    },
    breakpoints: {
        full: '1760px',
        large: '1244px',
        medium: '836px',
        small: '580px',
    },
}
