import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import PeopleContent from "../components/PeopleContent";
import { Route, Routes } from "react-router-dom";
import Detail from "../components/DetailContent";

export default function HomePage() {
    return (
        <div className="lg:h-screen h-screen">
            {/* Navbar */}

            <Navbar />

            {/* Body 1 */}

            <div className="h-[85%] flex">
                {/* Sidebar */}

                <Sidebar />

                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/people" element={<PeopleContent />} />
                    <Route path="detail/:id" element={<Detail />} />
                </Routes>
            </div>
        </div>
    );
}
