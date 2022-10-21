import { Text, Flex, Avatar } from '@chakra-ui/react'

const Bubble = ({ text, isRobot }) => {

    return (
        <>
            {isRobot ? (


                    <Flex
                        columnGap={"4px"}
                        my={"1%"}
                        mx={"2%"}
                    >
                        <Avatar
                            name="Hr Bot"
                            src="images/bot.jpeg"
                            size='xs'
                            alignSelf={"end"}
                            pb={"6px"}
                        />
                        <Text
                            as={"span"}
                            py={"3px"}
                            px={"10px"}
                            variant={"robot"}
                            background={"transparent"}
                            color={"RGBA(0, 0, 0, 0.80)"}
                            borderRadius={"16px"}
                            alignSelf={"start"}
                            maxWidth={"45%"}
                            border={"1px solid #BEE3F8"}
                            fontWeight={"200"}
                            fontSize={"14px"}
                        >
                            {text}
                        </Text>
                    </Flex>
            
            ) :
                <Flex
                    flexDirection={"column"}
                    my={"1%"}
                    mx={"2%"}

                >
                    <Text
                        as={"span"}
                        py={"3px"}
                        px={"10px"}
                        variant={"user"}
                        background={"#BEE3F8"}
                        color={"RGBA(0, 0, 0, 0.80)"}
                        borderRadius={"16px"}
                        alignSelf={"end"}
                        maxWidth={"40%"}
                        fontWeight={"200"}
                        fontSize={"14px"}
                    >
                        {text}
                    </Text>
                </Flex>
            }
        </>
    )
}

export default Bubble