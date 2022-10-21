import { Flex, Text, Avatar } from "@chakra-ui/react"

const Header = () => {
  return (
    <Flex
        as={"header"}
    >
        <Avatar name="Hr Bot" src="images/hrbotfactory-420.png"/>
        <Text>
            HR BOT
        </Text>
        <CloseIcon/>
    </Flex>
  )
}

export default Header