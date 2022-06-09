import "styled-components"

declare module 'styled-components' {
    export interface DefaultTheme {
        colours: {
            main: {
                dark: string,
                light: string,
                background: string,
                accent: string
            },
            secondary: {
                dark: string,
                light: string,
                background: string,
                accent: string
            }
        },
        padding: {
            page: {
                horizontal: string,
                vertical: string
            }
        }
    }
}