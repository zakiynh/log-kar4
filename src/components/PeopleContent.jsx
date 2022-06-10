import Header from "./Header";
import CardPeople from "./CardPeople";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPeople } from "../store/actions/action";

export default function PeopleContent() {
    const dispatch = useDispatch();

    const [string, setString] = useState("");

    const data = useSelector((state) => state.movies);

    let searchFilter = data.peoples;

    const filterData = searchFilter;

    useEffect(() => {
        dispatch(fetchAllPeople());
    }, [dispatch]);
    return (
        <>
            {/* Body 2 */}
            <div className="bg-black w-full p-2 h-full">
                {/* Headers */}

                <Header str={"People"} />

                {/* Card */}
                <div className="flex flex-col lg:flex lg:flex-row justify-center lg:flex-wrap w-full gap-3 lg:pt-1">
                    {filterData.map((peoples, idx) => (
                        <CardPeople el={peoples} id={idx+1} />
                    ))}
                </div>
            </div>
        </>
    );
}
