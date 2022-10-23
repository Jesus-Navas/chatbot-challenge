import { Button } from '@chakra-ui/react'

const BubbleOption = ({ text, handleOption }) => {
    return (
        <Button
            size={["xs"]}
            colorScheme='blue'
            variant={"outline"}
            borderRadius={["16px"]}
            onClick={handleOption}
        >
            {text}
        </Button>
    )
}

export default BubbleOption