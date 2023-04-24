import "./Hamburger.css";

export default function Hamburger({ isNavOpen, setIsNavOpen }) {
    return (
        <>
            <button className="ham" onClick={() => setIsNavOpen(!isNavOpen)}>
                <div className="bar left"></div>
                <div className="bar right"></div>
                <div className="bar left"></div>
            </button>
            <div className="ham-overlay"></div>
        </>
    );
}
