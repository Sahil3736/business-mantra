import React from 'react'
import img1 from '../img/22.jpg'

function Gold() {
  return (
    <div> 
        <section class="relative h-screen  ">

          <img src={img1} alt="About Us" class="w-full h-full object-cover absolute inset-0 	" />

          <div class="absolute inset-0 flex items-center justify-center bg-opacity-70 bg-black">
            <div class="	 text-center p-4 text-yellow-600">
              <h2 class="text-3xl  font-semibold mb-2">Gold</h2>
              <p class="text-lg text-white">Gold has emotional, cultural and financial value and is bought by different people across the globe for different reasons. Throughout the history Gold has been treasured for its natural beauty and radiance. </p>  </div>
          </div>
        </section>
    </div>
  )
}

export default Gold