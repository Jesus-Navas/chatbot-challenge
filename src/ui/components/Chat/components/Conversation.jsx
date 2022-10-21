
import {ScaleFade} from '@chakra-ui/react'
import Bubble from './Bubble'
import Carousel from '../../Carousel/Carousel'


const Conversation = ({messageList}) => {

  return (
    <>
        {
            messageList?.map((elem, idx) => (
                elem.isCarousel == false ?
                    <ScaleFade key={idx} initialScale={0.9} in={true}>
                        <Bubble text={elem.text} isRobot={elem.isRobot} />
                    </ScaleFade>
                    :
                    <Carousel key={idx}>
                        {elem.options}
                    </Carousel>
            ))
        }
    </>
  )
}

export default Conversation