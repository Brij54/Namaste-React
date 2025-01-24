import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "I am an h1 tag"),
            React.createElement("h2", {}, "I am an h2 tag")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
