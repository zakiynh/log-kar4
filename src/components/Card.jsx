import { FaEllipsisH } from "react-icons/fa";

export default function Card({ el }) {

    return (
        <div
        onClick={() => {}} 
        className="bg-black border-2 border-yellow-400 mt-2 rounded-xl py-2 w-full lg:w-[50%] h-[50%]">
            

            <div className="flex flex-row h-[80%] lg:flex-col lg:">
                
                <div className="w-[60%] lg:w-full text-white text-left p-2 space-y-1">
                    <div>
                        <h1 className="text-sm font-bold">Title: </h1>
                        <h1 className="text-yellow-400">
                            {el.title}
                        </h1>
                    </div>
                    <div>
                        <h1 className="text-sm font-bold">Director:</h1>
                        <h1 className="text-yellow-400">{el.director}</h1>
                    </div>
                    <div>
                        <h1 className=" hidden lg:block text-sm font-bold">
                            Producer:
                        </h1>
                        <h1 className=" hidden text-yellow-400 lg:block">{el.producer}</h1>
                    </div>
                    <div>
                        <h1 className=" hidden lg:block text-sm font-bold">
                            Release Date:
                        </h1>
                        <h1 className=" hidden text-yellow-400 lg:block">{el.release_date}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
