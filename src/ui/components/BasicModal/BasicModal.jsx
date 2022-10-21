import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'

const BasicModal = ({ title, text, primaryAction, secondaryAction }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bgColor={"#F7FAFC"} border={"1px solid #E2E8F0"}>
                    <ModalHeader>{title || "¿QUIERES CERRAR EL CHAT?"}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {text || "Si lo cierras, perderás esta conversación"}
                    </ModalBody>
                    <ModalFooter
                        display={"flex"}
                        flexDirection={"column"}
                        width={"100%"}
                        rowGap={"15px"}
                    >
                        <Button colorScheme='blue' mr={3} onClick={onClose} width={"100%"}>
                            {primaryAction || "CERRAR"}
                        </Button>
                        <Button colorScheme='blue' variant='outline' mr={3} onClick={onClose} width={"100%"}>{secondaryAction || "CANCELAR"}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default BasicModal