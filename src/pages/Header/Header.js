import { FaGithub } from "react-icons/fa";
import Hamburger from "../../components/Hamburger/Hamburger";
import "./Header.css";
import useWindowSize from "../../hooks/useWindowSize";
import { useEffect } from "react";

export default function Header({ isNavOpen, setIsNavOpen }) {
    const { width } = useWindowSize();

    useEffect(() => {
        if (width <= 700) {
            setIsNavOpen(false);
        } else {
            setIsNavOpen(true);
        }
    }, [width, setIsNavOpen]);

    return (
        <section className="header">
            <div className="left">
                <div className="hamburger">
                    <Hamburger
                        isNavOpen={isNavOpen}
                        setIsNavOpen={setIsNavOpen}
                    />
                </div>
                <p>#css stash</p>
            </div>
            <div className="right">
                <input
                    placeholder='press " ctrl + / " to search'
                    type="text"
                    name="search"
                />
                <a
                    rel="noreferrer"
                    href="https://github.com/milind452/css-stash"
                    target="_blank"
                >
                    <FaGithub />
                </a>
            </div>
        </section>
    );
}
