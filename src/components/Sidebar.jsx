import { FaFilm, FaUsers, FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="bg-yellow-400 w-0 lg:w-1/4 ">
            <div className="bg-yellow-400 text-left border-r-2 border-yellow-400 m-5 space-y-3">
                <Link to={"/"} className="flex space-x-2 items-center active:text-white hover:text-white">
                    <FaFilm />
                    <h1>Home</h1>
                </Link>
                <Link to={"/people"} className="flex space-x-2 items-center active:text-white hover:text-white">
                    <FaUsers />
                    <h1>Character List</h1>
                </Link>
            </div>
        </div>
    );
}
