import { useParams } from "react-router";
import "./Grid.css";
import { useState, useEffect } from "react";
import { getCodes } from "../../services/codeService";
import Card from "../../components/Card/Card";

export default function Grid() {
    const { category } = useParams();
    const [codes, setCodes] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getCodes(category);
            setCodes(data);
        };
        fetchData();
    }, [category]);

    return (
        <div id="codes" className="codes">
            <h1>
                {category.charAt(0).toUpperCase() +
                    category.substring(1).toLowerCase()}
            </h1>
            <div className="grid">
                {/* <div>Grid - {category}</div> */}
                {/* <div>{JSON.stringify(codes)}</div> */}
                {codes &&
                    codes.map((code) => (
                        <Card
                            key={code.id}
                            name={code.name}
                            html={code.html}
                            css={code.css}
                            js={code.js}
                        />
                    ))}
            </div>
        </div>
    );
}
