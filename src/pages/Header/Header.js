import { FaGithub } from "react-icons/fa";
import Hamburger from "../../components/Hamburger/Hamburger";
import "./Header.css";

export default function Header({ isNavOpen, setIsNavOpen }) {
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
                <input />
                <FaGithub />
            </div>
        </section>
    );
}
