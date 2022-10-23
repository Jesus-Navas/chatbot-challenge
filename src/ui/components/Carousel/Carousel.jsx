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

    const Arrow = (props) => {
        const disabeld = props.disabled ? " arrow--disabled" : ""
        return (
            <svg
                onClick={props.onClick}
                className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                    } ${disabeld}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                {props.left && (
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                )}
                {!props.left && (
                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
                )}
            </svg>
        )
    }

    return (
        <SCCarousel className="navigation-wrapper"
        >
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
            {loaded && instanceRef.current &&
                (<>
                    <Arrow
                        left
                        onClick={(e) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                        disabled={currentSlide === 0}
                    />
                    <Arrow
                        onClick={(e) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                        disabled={
                            currentSlide ===
                            instanceRef.current.track.details.slides.length - 1
                        }
                    />
                </>)
            }
        </SCCarousel>
    )
}

export default Carousel

const SCCarousel = styled.div`
    .navigation-wrapper {
        position: relative;
    }
    .arrow {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        fill: #BEE3F8;
        cursor: pointer;
    }
    .arrow--left {
        left: 20px;
    }
    .arrow--right {
        left: auto;
        right: 20px;
    }
    .arrow--disabled {
        fill: rgba(255, 255, 255, 0.5);
    }

`

