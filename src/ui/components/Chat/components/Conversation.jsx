import { useEffect, useRef } from 'react'
import { Box, ScaleFade, SlideFade } from '@chakra-ui/react'
import styled from "@emotion/styled"
import Bubble from './Bubble'
import Carousel from '../../Carousel/Carousel'


const Conversation = ({ messageList, handleOption }) => {

    const lastMessageRef = useRef()

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ smooth: true })
        }

    })

    return (
            <Box
                position={"relative"}
                mt={["15%","0"]}
                mb={["16%", "10%"]}
                overflowY={"scroll"}
                overflowX={"hidden"}
                width={["100%"]}
                scrollBehavior={"smooth"}
            >
                {
                    messageList?.map((elem, idx) => {

                        const lastMessage = messageList.length - 1 === idx

                        return (
                            (elem.isCarousel == false ?
                                elem.isRobot ?
                                    <ScaleFade ref={lastMessage ? lastMessageRef : null} key={idx} initialScale={0.9} in={true}>
                                        <Bubble text={elem.text} isRobot={elem.isRobot} options={elem.options} handleOption={handleOption} />
                                    </ScaleFade>
                                    :
                                    <ScaleFade ref={lastMessage ? lastMessageRef : null} key={idx} initialScale={0.9} in={true}>
                                        <Bubble text={elem.text} isRobot={elem.isRobot} />
                                    </ScaleFade>
                                :
                                <SlideFade ref={lastMessage ? lastMessageRef : null} key={idx} offsetX={"50px"} offsetY={"0px"} in={true}>
                                    <Carousel>
                                        {elem.options}
                                    </Carousel>
                                </SlideFade>
                            )
                        )
                    })
                }
            </Box>
    )
}

export default Conversation

