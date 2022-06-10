import React from "react";
import Header from "../components/Header";
import CardDetail from "../components/CardDetail";

function Detail({ el }) {
    return (
        <div className="bg-black w-full p-6 h-full">
            <Header str={"Detail"} />
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:pt-1">
                <CardDetail el={el} />
            </div>
        </div>
    );
}

export default Detail;
