// const helloWorld = () => {
//     return React.createElement("h1", {className: "heading"}, "Hello world")
// }
const HelloName = (props) => {
    const {name} = props;
    return React.createElement(
        "h1",
        {
            className: "heading",

        },
        `Hello ${name}` // props.name;
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(HelloName, {name: "Nguyễn Hiếu"}, null));


