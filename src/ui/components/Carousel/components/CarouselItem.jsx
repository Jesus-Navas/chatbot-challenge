import { Flex, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'

const CarouselItem = ({ img, title, text, href }) => {
    return (
        <Flex
            position={"relative"}
            flexDirection={"column"}
            alignItems={"center"}
            className="keen-slider__slide"
        >
            <Image
                boxSize={"100px"}
                objectFit={"cover"}
                src={img}
                alt={title}
            />
            <Text
                as="h3"
                variant="title"
            >
                {title}
            </Text>
            <Text
                as="p"
                variant="description"
            >
                {text}
            </Text>
            <Link href={href} as="button">Mas detalles</Link>
        </Flex>
    )
}

export default CarouselItem