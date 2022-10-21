import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styled from "@emotion/styled"
import CarouselItem from "./components/CarouselItem"


const Carousel = ({ children }) => {

    const [sliderRef] = useKeenSlider()

    return (
        <SCCarousel
            ref={sliderRef}
            className="keen-slider"
        >
            {children.map(({ text, img, title, href }, idx) => {

                return (
                    <CarouselItem key={idx + "carousel"} text={text} img={img} title={title} href={href} />
                )
            })
            }
        </SCCarousel>
    )
}

export default Carousel

const SCCarousel = styled.div`
  height: 500px;
  max-height: 100vh;
`

