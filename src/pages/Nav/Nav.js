import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./Nav.css";
import { getCategories } from "../../services/categoryService";
import { Link } from "react-router-dom";

export default function Nav() {
    const [categories, setCategories] = useLocalStorage("categories", []);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getCategories();
            setCategories(data);
        };
        fetchData();
    }, [setCategories]);

    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Overview</a>
                </li>
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link to={category.name.toLowerCase()}>
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
