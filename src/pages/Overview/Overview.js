import Link from "../../components/Link/Link";
import "./Overview.css";

import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Overview() {
    return (
        <article>
            <h1>Overview</h1>
            <section>
                <p>
                    This is a collection of pre-designed components written
                    using HTML, CSS and JS. I encourage you to use these in your
                    own apps.
                </p>
                <p>
                    Some of these are my own creations while some are inspired
                    from other creators.
                </p>
                <p>
                    For any queries or feedback, you can reach out to me on{" "}
                    <Link
                        href={"https://www.linkedin.com/in/milind452"}
                        content={"LinkedIn"}
                    />{" "}
                    or via{" "}
                    <Link
                        href={"mailto:mohapatra.milind@gmail.com"}
                        content={"Email"}
                    />
                </p>
            </section>
            <section>
                <a href="mailto:mohapatra.milind@gmail.com">
                    <FaEnvelope />
                </a>
                <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/milind452"
                    target="_blank"
                >
                    <FaLinkedin />
                </a>
            </section>
        </article>
    );
}
