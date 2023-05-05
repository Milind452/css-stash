import { useParams } from "react-router";
import "./Grid.css";

export default function Grid() {
    const { category } = useParams();
    return <div>Grid - {category}</div>;
}
