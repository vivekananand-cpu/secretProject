import React from 'react'
import ReactDOM from "react-dom";
import { XIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import { HeartIcon, ChatIcon, ShareIcon, BookmarkIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled }
    from "@heroicons/react/solid"

const PostModal = ({ postModal, setPostModal, post }) => {

    if (!postModal) return null;
    return ReactDOM.createPortal(
        <>
            <div className="fixed top-0 bottom-0 right-0 left-0 z-0 bg-black/70"></div>
            <div className="fixed  top-[10px] left-[20px] right-[20px] bottom-[10px] h[100vh] w-[100vw] flex items-center justify-center">
                <div className="rounded-xl h-[95vh] w-[60vw] bg-white ">
                    <div className="flex justify-end">
                        <XIcon onClick={() => setPostModal(!postModal)} className="h-8 m-3  hover:scale-110 cursor-pointer transtion-all duration-500 ease-out" />
                    </div>
                    <div className="flex ">
                        <div className="h-full w-[60%]  rounded-lg ">
                            <img className="w-full h-full p-2  object-contain" src={post} alt="" />
                        </div>
                        <div className=" w-[800px]  rounded-md border m-2">

                            <div className="p-3 flex border-b-[1px]  w-full items-center justify-between space-x-3 ">
                                <div className=" flex items-center space-x-2 ">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo-gcYmYymRK4zo6VyGAVxHO98HZnD-LlcYQ&usqp=CAU" className="h-10  rounded-full cursor-pointer object-contain" alt="profile-pic" />
                                    <p className="font-bold">Samantha Akhineni</p>
                                </div>
                                <div>
                                    <DotsHorizontalIcon className="h-6 cursor-pointer" />
                                </div>
                            </div>
                            <div className="h-[700px] w-full p-3 ">
                                <div className="flex  border-b-[1px] w-full  h-[80%]">
                                    <div className="flex h-[60px]  items-center space-x-2" >
                                        <img src="https://imgk.timesnownews.com/media/15906943c06218cb9d67d1855bc6cc5e.jpg" className="h-10  rounded-full cursor-pointer object-contain" alt="profile-pic" />
                                        <p className="text-sm font-semibold">Vivek Thorat</p>
                                        <p className="text-sm">looking Beautiful</p>

                                    </div>

                                </div>
                                <div className="h-[13%] flex flex-col p-t-2 border-b-[1px]">
                                    <div className="container flex justify-between align-center">
                                        <div className="flex space-x-3 p-3">




                                            <HeartIconFilled className="h-7 text-red-500 hover:scale-125 cursor-pointer transition-all duration-150 ease-out " />




                                            <ChatIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out " />
                                            <ShareIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out " />

                                        </div>
                                        <BookmarkIcon className="h-7 hover:scale-125 cursor-pointer transition-all duration-150 ease-out mt-3 ml-4 " />


                                    </div>
                                    <p className="font-bold mb-1 pl-4">345 likes</p>
                                </div>
                                <div className="h-[8%] ">
                                    <form className="flex items-center p-4" action="">
                                        <EmojiHappyIcon className="h-7 mr-3" />
                                        <input placeholder="Add a comment..." className="border-none  flex-1 focus:ring-0 outline-none" type="text" />
                                        <button type="submit" className="font-semibold text-blue-400">Post</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}







export default PostModal
