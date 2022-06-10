import { Link } from "react-router-dom";
export default function CardPeople({ el, id }) {
    return (
        <Link to={`/detail/${id}`} className="bg-black border-2 border-yellow-400 mt-2 rounded-xl py-2 w-full lg:w-40 h-[50%]">
            <div className="flex flex-row h-[80%] lg:flex-col lg:">
                <div className="w-[60%] lg:w-full text-white text-left p-2 space-y-1">
                    <div>
                        <h1 className="text-sm font-bold">Name: </h1>
                        <h1 className="text-yellow-400">{el.name}</h1>
                    </div>
                </div>
            </div>
        </Link>
    );
}
