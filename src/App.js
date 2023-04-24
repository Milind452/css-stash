import "./App.css";
import Header from "./pages/Header/Header";
import Nav from "./pages/Nav/Nav";
import Overview from "./pages/Overview/Overview";

function App() {
    return (
        <>
            <div class="app">
                <Header />
                <Overview />
                <Nav />
            </div>
        </>
    );
}

export default App;
