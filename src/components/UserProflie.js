import React from 'react'
import { LocationMarkerIcon, PhoneIcon, MailIcon } from "@heroicons/react/outline";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import BarChart from './BarChart';

const UserProflie = () => {
    return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center">

            <div className="grid cols-1 md:grid-cols-3 shadow-xl rounded-lg h-[90vh] w-[75vw] bg-white">
                <div className="grid grid-rows-2 rounded-lg bg-[#FFC7BF] shadow-lg">
                   
                        <div className=" flex flex-col items-center justify-between  ">
                            {/* user Avatar */}
                            <img className="h-[250px] w-[250px] mt-3 pt-4 shadow-md hover:shadow-xl rounded-full object-cover  hover:scale-110 transtion-all duration-500 ease-out" src="https://c.ndtvimg.com/2021-12/ebpsij18_samantha-ruth-prahu-naga-chaitanya_295x200_08_December_21.jpg" alt="" />
                            <h1 className="text-3xl pb-5 hover:text-gray-500 hover:scale-95 transiton-all duration-500 ease-out">Samantha Akhineni</h1>
                        </div>
                        <div className="flex flex-col items-center justify-around">
                            <h1 className="font-bold text-5xl text-[#4C4267] hover:text-[#010001]">Civil Engineer</h1>
                            <div className="flex flex-col hover:scale-105  rounded-lg p-2 space-y-3 text-gray-700 transtion-all duration-500 ease-out">
                                <div className="flex space-x-3">
                                    <LocationMarkerIcon className="h-6" />
                                    <p>Sangamner,dist-Ahemed-Nagar </p>

                                </div>
                                <div className="flex space-x-3">
                                    <PhoneIcon className="h-6" />

                                    <p>8788637472 </p>

                                </div>
                                <div className="flex space-x-3">
                                    <MailIcon className="h-6" />

                                    <p>samanthaakhineni@gmail.com </p>

                                </div>

                            </div>
                            <div className="flex justify-between space-x-8">
                                 <FacebookIcon className="hover:scale-110 transtion-all duration-500 ease-out hover:text-gray-700" />
                                 <LinkedInIcon className="hover:scale-110 transtion-all duration-500 ease-out hover:text-gray-700" />
                                 <GitHubIcon className="hover:scale-110 transtion-all duration-500 ease-out hover:text-gray-700" />
                                 <TwitterIcon className="hover:scale-110 transtion-all duration-500 ease-out hover:text-gray-700" />

                            </div>
                        </div>
                    </div>
                    <div>
                        <BarChart />
                    </div>
                </div>
                
                
            </div>
     
    )
}

export default UserProflie
