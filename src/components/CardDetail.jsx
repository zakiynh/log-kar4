import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CardDetail() {
    const { id } = useParams();
    const [people, setPeople] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`).then((res) => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json();
        })
            .then((data) => {
                setPeople(data);
            })
    }, [id]);

    return (
        <div className="bg-black border-2 border-yellow-400 mt-2 rounded-xl py-2 w-full lg:w-[50%] h-[50%]">
            <div className="flex flex-row h-[80%] lg:flex-col lg:">
                <div className="w-[60%] lg:w-full text-white text-left p-2 space-y-1">
                    <div>
                        <h1 className="text-sm font-bold">Name: </h1>
                        <h1 className="text-yellow-400">{people.name}</h1>
                    </div>
                    <div>
                        <h1 className="text-sm font-bold">Birth Year:</h1>
                        <h1 className="text-yellow-400">{people.birth_year}</h1>
                    </div>
                    <div>
                        <h1 className=" hidden lg:block text-sm font-bold">Gender:</h1>
                        <h1 className=" hidden text-yellow-400 lg:block">{people.gender}</h1>
                    </div>
                    <div>
                        <h1 className=" hidden lg:block text-sm font-bold">Height:</h1>
                        <h1 className=" hidden text-yellow-400 lg:block">{people.height}</h1>
                    </div>
                    <div>
                        <h1 className=" hidden lg:block text-sm font-bold">Mass:</h1>
                        <h1 className=" hidden text-yellow-400 lg:block">{people.mass}</h1>
                    </div>
                    <div>
                        <h1 className=" hidden lg:block text-sm font-bold">Hair Color:</h1>
                        <h1 className=" hidden text-yellow-400 lg:block">{people.hair_color}</h1>
                    </div>
                    <div>
                        <h1 className=" hidden lg:block text-sm font-bold">Skin Color:</h1>
                        <h1 className=" hidden text-yellow-400 lg:block">{people.skin_color}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
