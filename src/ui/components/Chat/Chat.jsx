import { useRef, useState, useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'
import Header from './components/Header'
import MessageInput from './components/MessageInput'
import Conversation from './components/Conversation'
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


    const handleInput = (e) => {
        e.preventDefault()
        messageRef.current.value.length > 0 && setChat([...chat, { text: messageRef.current.value, isRobot: false, isCarousel: false }])
        e.target.reset()
    }

    const handleClick = () => {
        setChat([...chat, botMessages[2]])
    }

    return (
        <>
            <Box
                as='section'
                position={"relative"}
                display={["block", "none"]}
            >
                <Header isOnline />
                <Conversation messageList={chat} handleOption={handleClick} />
                <MessageInput messageRef={messageRef} handleInput={handleInput} />
            </Box>

            <Box
                as='section'
                position={"relative"}
                display={["none", "block"]}
                height={"100vh"}
            >
                <Text
                    as="h1"
                    textAlign={"center"}
                    mt={"30%"}
                    fontSize={"40px"}
                    fontWeight={"400"}
                >
                    PAGINA WEB DISEÑADA EN VERSION MÓVIL
                </Text>

            </Box>
        </>
    )
}
export default Chat
