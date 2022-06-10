import { FaBars } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="h-[15%] bg-black border-b-2 border-yellow-400 flex justify-between">
            <div className="w-[50%] flex items-center">
                <button className="lg:hidden ml-2 text-2xl hover:text-gray-500">
                    <FaBars />
                </button>
                <img
                    src="https://clipart.info/images/ccovers/1513358462Star-Wars-Logo-PNG.png"
                    alt="log-kar"
                    className="ml-5 w-28 lg:w-40"
                />
            </div>
            <div className="flex space-x-3 items-center p-3">
                <div className="flex space-x-1">
                    <h1 className="text-yellow-400 hidden lg:block">Hallo, Dart Vader</h1>
                </div>
                <h1 className="w-12 h-12 flex items-center justify-center rounded-full border-2 lg:w-16 lg:h-16 border-white">
                    <img src="https://yt3.ggpht.com/a/AATXAJxuEQp8gZgQx_yEDW2EyDXZNtUdq6pCMhXi0Q=s900-c-k-c0xffffffff-no-rj-mo" className="h-full w-full rounded-full "/>
                </h1>
            </div>
        </nav>
    );
}
