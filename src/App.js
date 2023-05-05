import { useState } from "react";
import "./App.css";
import Header from "./pages/Header/Header";
import Nav from "./pages/Nav/Nav";
import Overview from "./pages/Overview/Overview";
import Grid from "./pages/Grid/Grid";

function App() {
    const [isNavOpen, setIsNavOpen] = useState(true);

    return (
        <>
            <div className="app">
                <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
                <Grid />
                {isNavOpen && <Nav />}
            </div>
        </>
    );
}

export default App;
