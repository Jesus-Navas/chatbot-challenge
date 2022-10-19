import { Box, Text, Flex } from '@chakra-ui/react'

const ChatBubble = ({ text, isRobot }) => {

    return (
        <>
            {isRobot ? (

                <Flex
                    flexDirection={"column"}
                    my={"10px"}
                >
                    <Text
                        as={"span"}
                        p={"8px"}
                        variant={"robot"}
                        background={"#4299E1"}
                        color={"white"}
                        borderRadius={"8px"}
                        alignSelf={"start"}
                        maxWidth={"45%"}
                    >
                        {text}
                    </Text>
                </Flex>
            ) :
                <Flex
                    flexDirection={"column"}
                    my={"10px"}
                >
                    <Text
                        as={"span"}
                        p={"8px"}
                        variant={"user"}
                        background={"#9AE6B4"}
                        color={"white"}
                        borderRadius={"8px"}
                        alignSelf={"end"}
                        maxWidth={"45%"}
                    >
                        {text}
                    </Text>
                </Flex>
            }
        </>


    )
}

export default ChatBubble