import { Input, Button } from "@chakra-ui/react"
import { useRef } from "react"
import { conversation } from "../../../../mocks/bot.mock"


const MessageInput = () => {
    const messageRef = useRef()
    
    function onSubmit(e) {

        e.preventDefault()

        conversation.push({ text: messageRef.current.value, isRobot: true })
        console.log(conversation)
    }

    return (
        <form onSubmit={onSubmit}>
            <Input ref={messageRef} placeholder='Escribe un mensaje...' />
            <Button type="submit">Send</Button>
        </form>
    )
}

export default MessageInput