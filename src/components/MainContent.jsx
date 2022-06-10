import Header from "../components/Header";
import Card from "../components/Card";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllMovie } from "../store/actions/action";

export default function MainContent() {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.movies);

    let searchFilter = data.movies;

    const [pagination, setPagination] = useState(0);

    const filterData = searchFilter.slice(pagination, pagination + 1);

    useEffect(() => {
        dispatch(fetchAllMovie());
    }, [dispatch]);
    return (
        <>
            {/* Body 2 */}
            <div className="bg-black w-full p-2 h-full">
                {/* Headers */}

                <Header str={"Movie"} />

                {/* Card */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:pt-1">
                    {filterData.map((movies, i) => (
                        <Card el={movies} key={i} />
                    ))}
                </div>

                {/* Pagination */}

                <Pagination page={setPagination} currentPage={pagination} data={data.movies} />
            </div>
        </>
    );
}
