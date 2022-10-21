import { useRef, useState, useEffect } from 'react'
import { Flex } from '@chakra-ui/react'
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


    function handleInput(e) {

        e.preventDefault()
        messageRef.current.value.length > 0 && setChat([...chat, { text: messageRef.current.value, isRobot: false, isCarousel: false }])
        e.target.reset()
    }

    function handleClick() {

        setChat([...chat, botMessages[2]])
    }

    return (
        <Flex
            position={"relative"}
            flexDirection={"column"}
            width={"50%"}
            as='section'
            bgColor={"#F7FAFC"}
            border={"1px solid #E2E8F0"}
        >
            <Flex
                flexDirection={"column"}
            >
                <Header isOnline />
                <Conversation messageList={chat}/>
                <MessageInput messageRef={messageRef} handleInput={handleInput} />
            </Flex>
        </Flex>
    )
}

export default Chat
