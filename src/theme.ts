import { DefaultTheme } from 'styled-components'

const backgroundRgb = '12, 12, 12'

export const theme: DefaultTheme = {
    colors: {
        primary: '#07f6bf',
        text: '#fdfdfd',
        background: '#0c0c0c',
        darkerGray: `rgba(${backgroundRgb}, .72)`,
        darkGray: '#1c1c1c',
        lightGray: `rgba(${backgroundRgb}, .24)`,
        lighterGray: `rgba(${backgroundRgb}, .12)`,
        red: '#fb2416',
        purple: '#a315fb',
        blue: '#1688f1',
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
