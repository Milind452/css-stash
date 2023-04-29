import { useEffect, useState } from "react";
import "./Nav.css";
import { getCategories } from "../../services/categoryService";

export default function Nav() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        console.log(getCategories());
        const fetchData = async () => {
            const data = await getCategories();
            setCategories(data);
        };
        fetchData();
    }, []);

    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Overview</a>
                </li>
                {categories.map((category) => (
                    <li key={category.id}>
                        <a href="/">{category.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
