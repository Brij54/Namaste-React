const parent = React.createElement("div",{id : "parent"},
React.createElement("div",{children : "child1"},
[React.createElement(
    "h1",{},"I am an h1 tag"
),React.createElement("h2",{},"I am an h2 tag")]),);
// const heading = React.createElement("h1",{id :"heading"},"Hello world !!");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
