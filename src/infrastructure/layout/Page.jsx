import { Box } from "@chakra-ui/react"
import Meta from "../../ui/layout/Meta/Meta"

const Page = ({ children, metaConfig, boxProps = {}, ...props }) => {
    return (

        <Box position={"relative"} {...props}>
            <Meta {...metaConfig} />
            <Box {...props} {...boxProps}>
                {children}
            </Box>
        </Box>
    )
}
export default Page