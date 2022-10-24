import { extendTheme } from "@chakra-ui/react"
import { breakpoints } from "./foundations/breakpoints.theme"
import { colors } from "./foundations/colors.theme"
import { Text } from "./components/text.theme"

const theme = extendTheme({
    config: {
        initialColorMode: "true",
        useSystemColorMode: false,
    },
    colors,
    fonts: {
        heading: "FiraSans-Regular",
        body: "FiraSans-Regular"
    },
    styles: {
        global: () => ({
            "html, body": {
                bgColor: "white",
                overflowX: "hidden",
                maxWidth: "100vw",
                scrollBehavior: "smooth"
            }
        })
    },
    breakpoints,
    components: {
        Text
    },
    shadows: {
        default: "-8px -8px 0px rgba(16, 39, 26, 0.08)"
    }
})

export default theme
