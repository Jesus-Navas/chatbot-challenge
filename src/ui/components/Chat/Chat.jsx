import { useRef, useState, useEffect } from 'react'
import { Box, ScaleFade, Input, FormControl, Button, Flex } from '@chakra-ui/react'
import ChatBubble from './components/Bubble'
import { botMessages } from '../../../mocks/bot.mock'

const Chat = () => {
    const [chat, setChat] = useState([botMessages[0]])
    const [hasOptions, setHasOptions] = useState(false)
    const messageRef = useRef()


    useEffect(() => {

        chat[chat.length - 1].isRobot == false &&

            setTimeout(() => {
                setChat([...chat, botMessages[3]])
            }, 1000)

    }, [chat])

    useEffect(() => {

        chat[chat.length - 1].isRobot == true && chat[chat.length - 1].type == "options" ? setHasOptions(true) : setHasOptions(false)

    }, [chat])


    function onSubmit(e) {

        e.preventDefault()

        messageRef.current.value.length > 0 && setChat([...chat, { text: messageRef.current.value, isRobot: false }])

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
                chat.map(({ text, isRobot }, idx) => (
                    <ScaleFade key={idx} initialScale={0.5} in={true}>
                        <ChatBubble text={text} isRobot={isRobot} />
                    </ScaleFade>
                ))
            }
            <FormControl as="form" onSubmit={onSubmit}>
                {hasOptions &&
                    chat[chat.length - 1].options?.map((elem, idx) => (
                        <Button key={idx}>{elem.button}</Button>
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
