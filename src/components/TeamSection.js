import React from 'react'
import e1 from "../images/employee1.jpg"
import e2 from "../images/employee2.jpg"
import e3 from "../images/employee3.jpg"
import e4 from "../images/employee4.jpg"

function TeamSection() {
  return (
<div className="flex items-center justify-center min-h-screen bg-white py-24">
    <div className="flex flex-col">

        <div className="flex flex-col mt-8">
            <div className="container max-w-7xl px-4">
                
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">
                        <h1 className="text-gray-900 text-4xl font-bold mb-8">
                            Meet the Team
                        </h1>

                        <p className="text-gray-700 text-lg font-light">
                            With over 10 years of combined experience, we've got a well-seasoned team at the helm.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col  scroll-animate ">

                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 object-cover"
                                    src={e4}/>
                            </a>

                            <div className="text-center mt-6">
                                
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                    Tranter Jaskulski
                                </h1>

                            
                                <div className="text-gray-700 font-light mb-2">
                                    Farm Manager
                                </div>

                        
                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                                    </a>

                                    
                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                                    </a>

                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

               
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col  scroll-animate ">
                         
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 object-cover "
                                    src={e1}/>
                            </a>

                    
                            <div className="text-center mt-6">
                            
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                    Denice Jagna
                                </h1>

                     
                                <div className="text-gray-700 font-light mb-2">
                                    Technical Specialist
                                </div>

                        
                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                   
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                                 
                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

               
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col  scroll-animate ">
                 
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 object-cover "
                                    src={e3}/>
                            </a>

                            <div className="text-center mt-6">
                               
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                    Kenji Milton
                                </h1>

                                <div className="text-gray-700 font-light mb-2">
                                    Relations Manager
                                </div>

                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                   
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                                  
                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                   
                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

            
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col  scroll-animate">
                            
                            <a href="#" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 object-contain"
                                    src={e2}/>
                            </a>

                        
                            <div className="text-center mt-6">
                                
                                <h1 className="text-gray-900 text-xl font-bold mb-1">
                                    Daniel Komu
                                </h1>

                                
                                <div className="text-gray-700 font-light mb-2">
                                    Product Manager
                                </div>

                                
                                <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300">
                                    
                                    <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                                    </a>

                                    
                                    <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                                    </a>

                                   
                                    <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default TeamSection