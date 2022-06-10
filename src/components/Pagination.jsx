import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function Pagination({ page, currentPage, data }) {
    return (
        <div className="flex justify-center items-center space-x-10 pt-4">
            <button
                onClick={() =>
                    page(currentPage === 0 ? currentPage : currentPage - 1)
                }
                className={
                    currentPage === 0
                        ? "flex items-center justify-center cursor-not-allowed"
                        : "flex items-center justify-center hover:text-gray-500"
                }
            >
                <FaAngleLeft className={currentPage === 0 ? "text-gray-500" : "text-white"}/>
                <h1 className={currentPage === 0 ? "text-gray-500" : "text-left text-white"}>Previous Page</h1>
            </button>
            <button
                onClick={() =>
                    page(
                        currentPage === data.length - 1
                            ? currentPage
                            : currentPage + 1
                    )
                }
                className={
                    currentPage === data.length - 1
                        ? "flex items-center justify-center cursor-not-allowed"
                        : "flex items-center justify-center hover:text-gray-500"
                }
            >
                <h1 className={currentPage === data.length -1 ? "text-gray-500" : "text-left text-white"}>Next Page</h1>
                <FaAngleRight className={currentPage === data.length -1 ? "text-gray-500" : "text-white"} />
            </button>
        </div>
    );
}
