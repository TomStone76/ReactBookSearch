import React from "react";

function Jumbotron({ children }) {
    return (
        <div
            style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
            className="jumbotron"
        >
            {children}
        <h1>React Book Search</h1>
        </div>
    );
}

export default Jumbotron;