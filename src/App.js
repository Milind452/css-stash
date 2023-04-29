import { useEffect, useState } from "react";
import "./App.css";
import Header from "./pages/Header/Header";
import Nav from "./pages/Nav/Nav";
import Overview from "./pages/Overview/Overview";
import { getCategories } from "./services/categoryService";

function App() {
    const [isNavOpen, setIsNavOpen] = useState(true);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        console.log("App start...");
        const fetchData = async () => {
            const data = await getCategories();
            setCategories(data);
        };
        fetchData();
        console.log(categories);
    }, []);

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
