import React from 'react'
import ReactDOM from "react-dom";
import { XIcon } from "@heroicons/react/outline";

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
                        <div className="h-[80vh] w-[30vw]  rounded-lg ">
                            <img  className="w-full h-full  object-contain" src={post} alt="" />

                        </div>
                       
                    </div>
                   


                </div>

            </div>
        </>,
        document.getElementById('portal')
    )
}

export default PostModal
