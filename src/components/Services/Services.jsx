import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import img1 from '../Assets/3.jpg'
import img2 from '../Assets/4.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Services = () => {
  return (
    <div id='services'>
        <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={3000}
        showThumbs={false}

        >
            <div>
                <img src={img1} alt="img" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img2} alt="img" />
                <p className='legend'>Peer-to-peer support</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services