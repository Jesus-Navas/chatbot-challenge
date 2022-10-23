import { Flex, Text, Avatar, AvatarBadge } from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons'


const Header = ({ img, isOnline, name, description }) => {
    //TODO: MODAL
    return (
        <Flex
            position={"fixed"}
            zIndex={"2"}
            top={"0"}
            width={"100%"}
            as={"header"}
            alignItems={"center"}
            justifyContent={"space-between"}
            pl={"6px"}
            pr={"14px"}
            py={"6px"}
            bgColor={"#EBF8FF"}
        >
            <Flex
                alignItems={"center"}
                columnGap={"10px"}
            >
                <Avatar
                    name="Hr Bot"
                    src={img || "images/bot.jpeg"}
                    size='sm'
                >
                    <AvatarBadge boxSize='1em' bg={isOnline ? 'green.500' : 'tomato'} />
                </Avatar>
                <Flex
                    flexDirection={"column"}
                    alignItems={"left"}
                    mt={"10%"}
                >
                    <Text
                        fontSize={"0.6rem"}
                        fontWeight={"600"}
                        lineHeight={"10px"}
                    >
                        {name || "HR BOT"}
                    </Text>
                    <Text
                        fontSize={"0.6rem"}
                        fontWeight={"100"}
                        color={"gray.500"}
                    >
                        {description || "Asistente virtual"}
                    </Text>
                </Flex>
            </Flex>
            <CloseIcon boxSize={"0.7rem"} /> {/* MODAL TRIGGER */}
        </Flex>
    )
}

export default Header