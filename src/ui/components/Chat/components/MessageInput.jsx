import { useState, useEffect } from "react"
import { FormControl, InputGroup, Input, ScaleFade, InputRightElement, Text } from "@chakra-ui/react"


const MessageInput = ({ handleInput, messageRef }) => {

    const [showButton, setShowButton] = useState(false)


    useEffect(() => {

        setShowButton(false)

    }, [handleInput])


    const handleOnchange = (e) => {
        e.target.value.length > 0 ? setShowButton(true) : setShowButton(false)
    }

    return (
        <FormControl as="form" onSubmit={handleInput} onChange={handleOnchange} px={"2%"}>
            <InputGroup size='md'>
                <Input
                    ref={messageRef}
                    placeholder='Escribe un mensaje...'
                    pr='4.5rem'
                />
                {showButton &&
                    <ScaleFade initialScale={0.9} in={true}>
                        <InputRightElement>
                            <Text
                                as={"button"}
                                type="submit"
                                bgColor={"transparent"}
                                mr={"70%"}
                                fontWeight={"600"}
                                color={"#3182CE"}
                            >
                                Enviar
                            </Text>
                        </InputRightElement>
                    </ScaleFade>
                }
            </InputGroup>

        </FormControl>
    )
}

export default MessageInput

