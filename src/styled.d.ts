import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string
            text: string
            background: string
            lightGray: string
            darkGray: string
            red: string
        }
        spaces: {
            one: string
            two: string
            three: string
            four: string
            five: string
            six: string
        }
        times: {
            short: string
            medium: string
        }
        breakpoints: {
            full: string
            large: string
            medium: string
            small: string
        }
    }
}
