import { useRef, useState, useEffect } from 'react'
import { Box, ScaleFade, Input, FormControl, Button, Flex } from '@chakra-ui/react'
import ChatBubble from './components/Bubble'
import { botMessages } from '../../../mocks/bot.mock'

const Chat = () => {

    const [chat, setChat] = useState([botMessages[0]])
    const messageRef = useRef()


    useEffect(() => {
        chat[chat.length - 1].isRobot == false &&
            setTimeout(() => {
                setChat([...chat, botMessages[1]])
            }, 800)
    }, [chat])


    function handleInput(e) {
        e.preventDefault()
        messageRef.current.value.length > 0 && setChat([...chat, { text: messageRef.current.value, isRobot: false }])
    }

    function handleClick() {

    }

    return (
        <Box
            position={"relative"}
            width={"50%"}
            height={"50vh"}
            as='section'
            bgColor={"#F7FAFC"}
            backdropFilter={"filter: blur(2px)"}
            borderRadius={"10px"}
            border={"1px solid RGBA(255, 255, 255, 0.48)"}
        >
            {
                chat.map(({ text, isRobot, isCarousel}, idx) => (
                    <ScaleFade key={idx} initialScale={0.9} in={true}>
                        <ChatBubble text={text} isRobot={isRobot} />
                    </ScaleFade>
                ))
            }
            <FormControl as="form" onSubmit={handleInput}>
                {chat[chat.length - 1].hasOwnProperty("options") &&
                    chat[chat.length - 1].options?.map((elem, idx) => (
                        <Button onClick={handleClick} key={idx}>{elem.button}</Button>
                    ))
                }
                <Flex>
                    <Input ref={messageRef} placeholder='Escribe un mensaje...' />
                    <Button type="submit">Send</Button>
                </Flex>
            </FormControl>
        </Box>
    )
}

export default Chat
