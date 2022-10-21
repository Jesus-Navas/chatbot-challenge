
import { Box, Flex, ScaleFade } from '@chakra-ui/react'
import Bubble from './Bubble'
import Carousel from '../../Carousel/Carousel'


const Conversation = ({ messageList }) => {

    return (
        <Box
            position={"realtive"}
            height={"50vh"}
            overflowY={"scroll"}
            pt={"10px"}
            scrollBehavior={"smooth"}
        >
            {
                messageList?.map((elem, idx) => (
                    elem.isCarousel == false ?
                        elem.isRobot ?
                            <>
                                <ScaleFade key={idx} initialScale={0.9} in={true}>
                                    <Bubble text={elem.text} isRobot={true} isOption={false} />
                                </ScaleFade>
                                <Flex
                                    width={"100%"}
                                    justifyContent={"left"}
                                    ml={"8%"}
                                    mt={"2%"}
                                    columnGap={"1%"}
                                >
                                    {
                                        elem.options?.map((option, idx) => (
                                            <ScaleFade key={idx} initialScale={0.9} in={true}>
                                                <Bubble text={option.button} isRobot={true} isOption={true} />
                                            </ScaleFade>
                                        )
                                        )
                                    }
                                </Flex>
                            </>
                            :
                            <ScaleFade key={idx} initialScale={0.9} in={true}>
                                <Bubble text={elem.text} isRobot={false} isOption={false} />
                            </ScaleFade>
                        :
                        <Carousel key={idx}>
                            {elem.options}
                        </Carousel>
                ))
            }
        </Box>
    )
}

export default Conversation

