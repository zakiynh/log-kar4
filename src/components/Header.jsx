import { FaSistrix, FaPlus } from "react-icons/fa";
import { useState } from "react";

export default function Header({ str }) {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const pageFilter = str === "Movie"
    return (
        <div className="bg-black flex border-2 border-yellow-400 flex-col lg:flex-row justify-between rounded-md p-2 mb-1 text-left">
            <div className="lg:text-left">
                <h1 className="text-yellow-400 text-3xl font-bold">
                    {str} List
                </h1>
                <h1 className="text-white text-xl">
                    List of all {str.toLowerCase()}
                </h1>
            </div>
            {pageFilter && <div className="flex flex-col lg:flex-row lg:space-x-3 lg:items-center space-y-1">
                <div className="flex items-center justify-center h-10">
                    <div className="border-l-2 border-y-2 border-yellow-400 h-full pl-2">
                        <FaSistrix className="text-white font-bold text-xl h-full" />
                    </div>
                    <form className="w-full text-white" onSubmit={handleSubmit}>
                        <input
                            onChange={handleSearch}
                            type="text"
                            className="bg-black lg:w-40 w-full h-10 px-1 border-y-2 border-r-2 border-yellow-400 text-white focus:outline-none"
                            placeholder="FindMovie"
                        />
                    </form>
                </div>
            </div>}
        </div>
    );
}
