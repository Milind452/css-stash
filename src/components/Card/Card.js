import "./Card.css";

import {
    SandpackLayout,
    SandpackPreview,
    SandpackProvider,
} from "@codesandbox/sandpack-react";

export default function Card({ name, html, css, js }) {
    return (
        <section className="card">
            <div className="preview">
                <SandpackProvider
                    template="static"
                    files={{
                        "/index.html": html,
                        "/styles.css": css,
                        "/index.js": js,
                    }}
                >
                    <SandpackLayout
                        style={{
                            maxHeight: 200,
                            maxWidth: 230,
                        }}
                    >
                        <SandpackPreview />
                    </SandpackLayout>
                </SandpackProvider>
            </div>
            <div className="title">{name}</div>
        </section>
    );
}
