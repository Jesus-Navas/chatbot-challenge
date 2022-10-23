import { useRef, useState, useEffect } from 'react'
import styled from "@emotion/styled"
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
        <SCChat
            className="invisible-scrollbar"
            as='section'
            position={"relative"}
        >
            <Header isOnline />
            <Conversation messageList={chat} handleOption={handleClick} />
            <MessageInput messageRef={messageRef} handleInput={handleInput} />
        </SCChat>
    )
}

export default Chat

const SCChat = styled.div`

    .invisible-scrollbar::-webkit-scrollbar {
        display: none;
    }
`