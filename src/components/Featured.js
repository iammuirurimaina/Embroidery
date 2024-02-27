import React from 'react';
import embroideryImage from "../images/embroidery.jpg";

function Featured() {
  return (
    <div>
      <section className="relative pt-16 bg-blueGray-50">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="hidden md:flex w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="scroll-animate animate__slideInUp relative flex flex-col min-w-0 break-words bg-pink-50 w-full mb-6 shadow-lg rounded-lg bg-pink-50">
                <img alt="Embroidery" src={embroideryImage} className="w-full h-128 align-middle rounded-t-lg" />
                <blockquote className="relative p-8 mb-4">
                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon points="-30,95 583,95 583,65" className="text-lime-300 fill-current"></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-black">
                    Elevate Your Brand with Embroidery
                  </h4>
                  <p className="text-md font-light mt-2 text-black">
                  We specialize in providing top-notch embroidery designs, including school logos. Our goal is to make accessing school logos in Kenya simple and convenient. With our well-designed logos and stitching- friendly EMB and DST formats, you'll have the perfect designs for your stitching projects. Get ready to showcase your school pride in style!
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="scroll-animate animate__slideInUp px-4 py-5 flex-auto">
                      <div className="text-lime-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-palette"></i>
                      </div>
                      <h6 className="text-transparent text-xl bg-clip-text mb-1 font-semibold bg-gradient-to-r from-pink-300 to-blue-600"> Custom Embroidery</h6>
                      <p className="mb-4 text-blueGray-500">
                        Experience the fusion of art and technology with our expertise in custom embroidery. We bring your designs to life with precision and creativity.
                      </p>
                    </div>
                  </div>
                  <div className="scroll-animate animate__slideInUp relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-lime-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-leaf"></i>
                      </div>
                      <h6 className="text-transparent text-xl bg-clip-text mb-1 font-semibold bg-gradient-to-r from-pink-300 to-blue-600">
                        Sustainable Materials
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Embrace eco-friendly fashion. Our commitment to sustainability is reflected in our use of organic and ethically sourced materials for embroidery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="scroll-animate animate__slideInUp w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-lime-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-handshake"></i>
                      </div>
                      <h6 className="text-transparent text-xl bg-clip-text mb-1 font-semibold bg-gradient-to-r from-pink-300 to-blue-600">Customer-Centric Approach</h6>
                      <p className="mb-4 text-blueGray-500">
                        Join hands with us for a personalized experience. We prioritize customer satisfaction, ensuring your unique embroidery needs are met with dedication and care.
                      </p>
                    </div>
                  </div>
                  <div className="scroll-animate animate__slideInUp relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-lime-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-wallet"></i>
                      </div>
                      <h6 className="text-transparent text-xl bg-clip-text mb-1 font-semibold bg-gradient-to-r from-pink-300 to-blue-600">Affordable</h6>
                      <p className="mb-4 text-blueGray-500">
                        Experience the luxury of custom embroidery without breaking the bank. Our affordable pricing ensures high-quality craftsmanship accessible to all.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featured;
