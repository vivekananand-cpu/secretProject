import React from 'react'

const Suggestions = () => {
    return (
        <div>
            <div className="flex-col items-center rounded-lg p-2 mt-[80px]  ">
                <div className="container flex justify-between  p-2">
                    <h3 className="font-bold ">Suggestions for you</h3>
                    <button>See all</button>

                </div>


                <div  className="mt-3 flex-col overflow-y-scroll items-center h-[200px]  justify-between ">

                   <div className="flex p-2">
                   <img src="data:image/jpeg;base64,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" className="w-10 h-10  rounded-full border p-[2px] " />
                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">Vivek thorat</h2>
                        <h3 className="text-xs text-gray-400">Civil Engineer</h3>
                    </div>


                    <button className="text-blue-400 text-xs font-bold">Follow</button>
                   </div>
                     <div className="flex p-2">
                   <img src="data:image/jpeg;base64,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" className="w-10 h-10  rounded-full border p-[2px] " />
                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">Gaurav Haral</h2>
                        <h3 className="text-xs text-gray-400">Gavandi</h3>
                    </div>


                    <button className="text-blue-400 text-xs font-bold">Follow</button>
                   </div>
                   <div className="flex p-2">
                   <img src="data:image/jpeg;base64,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" className="w-10 h-10  rounded-full border p-[2px] " />
                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">Aditya gadge</h2>
                        <h3 className="text-xs text-gray-400">Plumber</h3>
                    </div>


                    <button className="text-blue-500 text-xs font-bold">Follow</button>
                    
                   </div>
                  
                  


                </div>


            </div>
        </div>
    )
}

export default Suggestions
