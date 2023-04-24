import "./Nav.css";

export default function Nav() {
    const links = [
        "Overview",
        "Featured",
        "Loading",
        "Background",
        "Emoticons",
        "Forms",
        "Animations",
        "Shapes",
        "Text",
    ];
    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href="/">{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
