import { useState } from "react";
import "./App.css";
import Header from "./pages/Header/Header";
import Nav from "./pages/Nav/Nav";
import Overview from "./pages/Overview/Overview";
import Grid from "./pages/Grid/Grid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [isNavOpen, setIsNavOpen] = useState(true);

    return (
        <>
            <div className="app">
                <BrowserRouter>
                    <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
                    {isNavOpen && <Nav />}
                    <Routes>
                        <Route path="/" element={<Overview />} />
                        <Route path="/:category" element={<Grid />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
