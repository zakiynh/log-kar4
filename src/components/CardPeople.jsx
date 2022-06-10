import { Link } from "react-router-dom";
export default function CardPeople({ el, id }) {
    console.log("el: ", el);

    return (
        <Link 
        to={`/detail/${id}`}
        className="bg-black border-2 border-yellow-400 mt-2 rounded-xl py-2 w-full lg:w-40 h-[50%]">
            

            <div className="flex flex-row h-[80%] lg:flex-col lg:">
                
                <div className="w-[60%] lg:w-full text-white text-left p-2 space-y-1">
                    <div>
                        <h1 className="text-sm font-bold">Name: </h1>
                        <h1 className="text-yellow-400">
                            {el.name}
                        </h1>
                    </div>
                    {/* <div>
                        <h1 className="text-sm font-bold">Height:</h1>
                        <h1 className="text-yellow-400">{el.height}</h1>
                    </div>
                    <div>
                        <h1 className="text-sm font-bold">Birth Year:</h1>
                        <h1 className="text-yellow-400">{el.birth_year}</h1>
                    </div>
                    <div>
                        <h1 className="text-sm font-bold">Gender:</h1>
                        <h1 className="text-yellow-400">{el.gender}</h1>
                    </div>
                    <div>
                        <h1 className=" hidden lg:block text-sm font-bold">
                            Mass:
                        </h1>
                        <h1 className=" hidden text-yellow-400 lg:block">{el.mass}</h1>
                    </div>
                    <div>
                        <h1 className=" hidden lg:block text-sm font-bold">
                            Hair Color:
                        </h1>
                        <h1 className=" hidden text-yellow-400 lg:block">{el.hair_color}</h1>
                    </div>
                    <div>
                        <h1 className=" hidden lg:block text-sm font-bold">
                            Skin Color:
                        </h1>
                        <h1 className=" hidden text-yellow-400 lg:block">{el.skin_color}</h1>
                    </div> */}
                </div>
            </div>
        </Link>
    );
}
