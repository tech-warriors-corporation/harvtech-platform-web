import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string
            text: string
            background: string
        }
        spaces: {
            one: string
            two: string
            three: string
            four: string
        }
        times: {
            short: string
        }
    }
}
