import { Text, Flex, Avatar } from '@chakra-ui/react'
import BubbleOption from './BubbleOption'

const Bubble = ({ text, isRobot, options, handleOption }) => {

    return (
        <>
            {isRobot ?
                <Flex
                    position={"relative"}
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
                    <Flex
                        flexDirection={"column"}
                        borderRadius={"16px"}
                        border={"1px solid #BEE3F8"}
                        maxWidth={["45%", "20%"]}
                    >
                        <Text
                            as={"span"}
                            py={["4%"]}
                            px={["10px"]}
                            variant={"bubble"}
                            background={"transparent"}
                            alignSelf={"start"}
                        >
                            {text}
                        </Text>
                        <Flex
                            flexDirection={"column"}
                            pt={["3px"]}
                            pb={["6px"]}
                            px={["10px"]}
                            rowGap={["5px"]}
                        >
                            {
                                options?.map((option, idx) => (
                                    <BubbleOption key={idx} text={option} handleOption={handleOption} />
                                )
                                )
                            }
                        </Flex>
                    </Flex>
                </Flex>
                :
                <Flex
                    flexDirection={"column"}
                    my={"1%"}
                    mx={"7%"}

                >
                    <Text
                        as={"span"}
                        py={["2%"]}
                        px={"10px"}
                        variant={"bubble"}
                        background={"#BEE3F8"}
                        borderRadius={"16px"}
                        alignSelf={"end"}
                        maxWidth={["45%", "30%"]}

                    >
                        {text}
                    </Text>
                </Flex>
            }
        </>
    )
}

export default Bubble