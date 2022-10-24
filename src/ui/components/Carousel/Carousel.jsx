import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import styled from "@emotion/styled"
import BubbleCarousel from "../Chat/components/BubbleCarousel"


const Carousel = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        slides: {
            perView: 1
        }
    })

    return (
        <SCCarousel className="navigation-wrapper">
            <div
                className="keen-slider"
                ref={sliderRef}
            >
                {children.map(({ text, img, title, href }, idx) => {

                    return (
                        <BubbleCarousel key={idx + "carousel"} text={text} img={img} title={title} href={href} />
                    )
                })
                }
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </SCCarousel>
    )
}

export default Carousel

const SCCarousel = styled.div`
    .navigation-wrapper {
        position: relative;
    }
   
    .dots {
        display: flex;
        justify-content: center;
    }
    .dot {
        border: none;
        width: 6px;
        height: 6px;
        background: #c5c5c5;
        border-radius: 50%;
        margin: 0 4px;
        padding: 4px;
        cursor: pointer;
    }

    .dot:focus {
        outline: none;
    }

    .dot.active {
        background: #3182CE;
    }

`

