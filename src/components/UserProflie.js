import React from 'react'
import { LocationMarkerIcon, PhoneIcon, MailIcon, HeartIcon, ChatIcon } from "@heroicons/react/outline";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import BarChart from './BarChart';
import { useState } from 'react';
import ImgModal from './ImgModal';

const UserProflie = () => {
    const [imgModal, setImgModal] = useState(false);

    return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center">

            <div className="grid cols-1 md:grid-cols-3 shadow-xl rounded-lg h-[90vh] w-[75vw] bg-white">
                <div className="grid grid-rows-2 rounded-lg bg-[#FFC7BF] shadow-lg">

                    <div className=" flex flex-col items-center justify-between  ">
                        {/* user Avatar */}
                        <img onClick={() => { setImgModal(!imgModal) }} className="h-[250px] w-[250px] mt-3 pt-4 shadow-md hover:shadow-xl rounded-full object-cover  hover:scale-110 transtion-all duration-500 ease-out" src="https://c.ndtvimg.com/2021-12/ebpsij18_samantha-ruth-prahu-naga-chaitanya_295x200_08_December_21.jpg" alt="" />
                        <ImgModal imgModal={imgModal} setImgModal={setImgModal} />
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

                <div className="hidden md:inline flex flex-col col-span-2">
                    <div className="flex items-center justify-center bg-[#f8f1f0] w-full h-[100px] rounded-md">
                        <div className="flex text-xl font-bold text-blue-900 justify-between w-[50%]">
                            <p className=" hover:text-gray-600 cursor-pointer hover:shadow-slate-600 tranform transtion duration-300 ease-out">20 Posts</p>
                            <p className=" hover:text-gray-600 cursor-pointer hover:shadow-slate-600 tranform transtion duration-300 ease-out">201 Following</p>
                            <p className=" hover:text-gray-600 cursor-pointer hover:shadow-slate-600 tranform transtion duration-300 ease-out">330 Followers</p>

                        </div>
                    </div>
                    <div className="overflow-scroll bg-[#FFF8F8]">
                        <div className="grid grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 h-[695px] rounded-md">
                            <div className="relative m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className=" w-full object-cover rounded-xl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Samantha_at_10_Enradhukulla_Teaser_Launch.jpg/1200px-Samantha_at_10_Enradhukulla_Teaser_Launch.jpg" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>500</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>43</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className=" m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className="h-full w-full object-cover rounded-xl" src="https://images.indianexpress.com/2021/10/samantha-1.jpeg" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>300</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>47</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className=" m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className="h-full w-full object-cover rounded-xl" src="https://www.mrdustbin.com/wp-content/uploads/2020/05/Samantha-Akkineni-820x1024.jpg" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>700</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>9</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className=" m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className="h-full w-full object-cover rounded-xl" src="https://images.bhaskarassets.com/web2images/521/2021/12/22/samantha_1640161062.jpg" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>434</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>34</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className=" m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className="h-full w-full object-cover rounded-xl" src="https://1.bp.blogspot.com/-UwrVyn9PpUk/XyVvstBrM_I/AAAAAAAACwQ/d2BUgGUyIYgJENJ0Y509YLi2UBra2owUgCLcBGAsYHQ/s1600/images.jpeg" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>3434</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>433</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className=" m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className="h-full w-full object-cover rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8Bxusl0nbbOwbXWTKK1ZL0iBRsUNA6mTxfsvDnt-HKRfBHynjNTuS3LhKEsvFgzHmYs&usqp=CAU" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>656</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>23</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="h-[375px]  m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className="h-full w-full object-cover rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpYMKiBGDWUS6rkk8xC6Jo-2bUrSvScmjDlC-gzT815VevOVzuK4Zt9vXlJqWlcFqpPw&usqp=CAU" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/70 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>577</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>87</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="h-[375px]  m-2 hover:scale-105 hover:shadow-lg  cursor-pointer transform transition duration-300 ease-out">
                                <img className="h-full w-full object-cover rounded-xl" src="https://images.indianexpress.com/2021/11/samantha-4.jpg" alt="" />
                                <div className="flex items-center justify-center opacity-0 hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/50 rounded-xl">
                                    <div className="flex space-x-6 text-white">
                                        <div className="flex space-x-2 items-center">
                                            <HeartIcon className="h-9" />
                                            <p>767</p>
                                        </div>
                                        <div className="flex space-x-2 items-center">
                                            <ChatIcon className="h-9" />
                                            <p>45</p>
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

export default UserProflie
