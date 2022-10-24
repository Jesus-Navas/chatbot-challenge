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
        <FormControl
            position={["fixed"]}
            zIndex={2}
            width={["100%"]}
            bottom={["0", "620"]}
            pt={"2%"}
            bgColor={"white_robot"}
            as="form"
            pb={"3%"}
            px={"2%"}
            onSubmit={handleInput}
            onChange={handleOnchange}
        >
            <InputGroup size='md'>
                <Input
                    ref={messageRef}
                    placeholder='Escribe un mensaje...'
                    pr='4.5rem'
                    borderRadius={"16px"}
                    border={"1px solid #BEE3F8"}
                />
                {showButton &&
                    <ScaleFade initialScale={0.9} in={true}>
                        <InputRightElement>
                            <Text
                                as={"button"}
                                type="submit"
                                variant={"message_input"}
                                bgColor={"transparent"}
                                mr={"70%"}
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

