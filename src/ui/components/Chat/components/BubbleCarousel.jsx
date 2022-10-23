import { Flex, Image, Text, Button } from '@chakra-ui/react'


const BubbleCarousel = ({ img, title, text }) => {
    return (
        <Flex
            py={"5%"}
            position={"relative"}
            justifyContent={"center"}
            className="keen-slider__slide"
        >
            <Flex
                flexDirection={"column"}
                width={"60%"}
                maxWidth={["unset","150px"]}
                border={"1px solid #BEE3F8"}
                borderRadius={"16px"}
            >
                <Image
                    boxSize={["250px"]}
                    objectFit={"cover"}
                    src={img}
                    alt={title}
                    p={"5%"}
                />
                <Text
                    as="h3"
                    variant="carousel_title"
                    textAlign={"left"}
                    px={"5%"}
                    pt={"5%"}
                >
                    {title}
                </Text>
                <Text
                    variant="carousel_description"
                    minHeight={["104px"]}
                    px={"5%"}
                    py={"5%"}
                >
                    {text}
                </Text>
                <Button 
                    alignSelf={"center"} 
                    mb={"5%"} 
                    colorScheme='blue'
                    borderRadius={"16px"} 
                    size={"sm"} 
                    width={"90%"}
                >
                    Más información
                </Button>
            </Flex>
        </Flex>
    )
}

export default BubbleCarousel