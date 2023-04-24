import { useState } from "react";
import "./App.css";
import Header from "./pages/Header/Header";
import Nav from "./pages/Nav/Nav";
import Overview from "./pages/Overview/Overview";

function App() {
    const [isNavOpen, setIsNavOpen] = useState(true);

    return (
        <>
            <div className="app">
                <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
                <Overview />
                {isNavOpen && <Nav />}
            </div>
        </>
    );
}

export default App;
