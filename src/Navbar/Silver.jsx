import React from 'react'
import img2 from '../img/33.jpg'

function Silver() {
  return (
    <div>
      <section class="relative h-screen  ">

        <img src={img2} alt="About Us" class="w-full h-full object-cover absolute inset-0 	" />

        <div class="absolute inset-0 flex items-center justify-center bg-opacity-70 bg-black">
          <div class="	 text-center text-white p-4">
            <h2 class="text-3xl  font-semibold mb-2">Silver</h2>
            <p class="text-lg ">Silver is valued as a precious metal and one of the rare elements on earth. Silver is a white, soft and shiny metal, which can be shaped easily. Indian women and jewellery are inherently linked.The history of Indian jewellery is as ancient as the country itself. Indian jewellery designs are very unique and purely depend on craftsmanship. Silver jewellery designs are quite rich in India. The ethnic and tribal designs in jewellery are right back in fashion these days.Traditional silver jewellery like Payal, Jhumka, Rings, necklaces and even bangles are in fashion. We at MAJATI JEWELLERS offer traditional as well as modern designs in 925 silver jewellery.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Silver