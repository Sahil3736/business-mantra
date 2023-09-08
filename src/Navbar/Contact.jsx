import React from "react";
import { IoGlobeOutline, IoLogoWhatsapp, IoMail } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';



function Contact() {
  return (
    

    <div>
    <section class=" py-12">
        <div class="container mx-auto">
            <h1 class="text-3xl font-semibold text-center mb-8 text-blue-900">Contact Us</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-blue-900 p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold mb-4 text-yellow-500">Send Us a Message</h2>
                    <form>
                        <div class="mb-4">
                            <label for="name" class="block text-white">Name</label>
                            <input type="text" id="name" name="name" class="border  px-3 py-2 rounded-md w-full" required />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-white">Email</label>
                            <input type="email" id="email" name="email" class="border px-3 py-2 rounded-md w-full" required />
                        </div>
                        <div class="mb-4">
                            <label for="message" class="block text-white">Message</label>
                            <textarea id="message" name="message" class="border px-3 py-2 rounded-md w-full h-32" required />
                        </div>
                        <div class="text-center">
                            <button type="submit" class="bg-yellow-500 text-white w-36 px-4 py-2 rounded-md hover:bg-blue-700">Submit</button>
                        </div>
                    </form>
                </div>

                <div class="bg-blue-900 p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold mb-4 text-yellow-500">Contact Information</h2>
                    <div class="mb-4">
                        <p class="text-white"><strong>Address:</strong> 3931,Oppo.Laxmi Market Miraj,India,416401</p>
                    </div>
                    <div class="mb-4">
                        <p class="text-white"><strong>Phone:</strong> 9876543210</p>
                    </div>
                    <div class="mb-4">
                        <p class="text-white"><strong>Email:</strong> abc@gmail.com</p>
                    </div>
                    <h2 class="text-xl font-semibold mb-4 text-yellow-500 ">Social Media</h2>
                    <div class="mb-4">
                        <p class="text-white flex"><strong>Whats App:</strong>  <a target="_blank" rel="noopener noreferrer" className="ml-10 text-green-600 hover:text-green-800 mr-2">
                            <FaWhatsapp size='1.5rem' />
                        </a> </p>
                    </div>
                    <div class="mb-4 ">
                        <p class="text-white flex"><strong>Instagram:</strong>  <a href="#" className="text-pink-600 hover:text-pink-800 mr-2 ml-10">
                            <FaInstagram size='1.5rem' />
                        </a> </p>
                    </div>
                    <div class="mb-4">
                        <p class="text-white flex"><strong>Facebook:</strong> <a href="#" className="text-blue-500 hover:text-blue-700 ml-10">
                            <FaFacebook size='1.5rem' />
                        </a> </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div >
        <div class="container mx-auto px-4 py-12">
            <iframe
                class="w-full h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.033147049277!2d74.64760657427956!3d16.82471161877256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc12349ec2a0ebf%3A0x2417614e98933f43!2sMajati%20Jewellers%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1693823659763!5m2!1sen!2sin"
                frameborder="0"

                allowfullscreen
            ></iframe>
        </div>
    </div>

    <footer class="bg-blue-900 text-white py-4">
        <div class="container mx-auto text-center">
            &copy; 2023 Business Mantra. All rights reserved.
        </div>
    </footer>

</div>
  );
}

export default Contact;
