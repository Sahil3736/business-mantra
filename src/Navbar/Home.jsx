import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/7.jpg'

function Home() {

  return (
    <div>
     

  
    <div className="bg-gray-100 ">
      <div className="w-auto h-auto	 mx-auto">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={1000}
        >
          <div>
          <img src={img1}alt="Slide 1" />
          </div>
          <div>
          <img src={img2}alt="Slide 2" />
          </div>
          <div>
          <img src={img3} alt="Slide 3" />
          </div>
          <div>
          <img src={img4} alt="Slide 4" />
          </div>
          <div>
          <img src={img5} alt="Slide 5" />
          </div>
          <div>
          <img src={img6} alt="Slide 6" />
          </div>
        </Carousel>
      </div>
    </div>
  
    </div>
  )
}

export default Home