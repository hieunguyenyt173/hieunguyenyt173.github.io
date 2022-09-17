import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: {
        name: "Hieu Nguyen",
        email: "abc@gmail.com",
      },
      post:[]
    };
  }

  componentDidMount() {
    console.log("mounted");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({post:data}));
  }
  componentDidUpdate() {
    console.log("updated")
  }
  componentWillUnmount() {
    console.log("unmount")
  }
  handleAdd = () => {
    // this.setState({count: this.state.count + 1});
    // this.setState({count: this.state.count + 1});
    // this.setState({count: this.state.count + 1});
    this.setState((prev) => ({ count: prev.count + 1 }));
    this.setState((prev) => ({ count: prev.count + 1 }));
    this.setState((prev) => ({ count: prev.count + 1 }));
  };
  changeName = () => {
    this.setState({ user: { name: "Nguyễn Văn A" } });
  };
  render() {
    let { count } = this.state;
    return (
      <>
        <h1 style={{ color: this.props.color }}>Counter: {count}</h1>
        <button onClick={this.handleAdd}>Add</button>
        <h2>Name: {this.state.user.name}</h2>
        <button onClick={this.changeName}>Change Name</button>
        <ul>
            {this.state.post.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
        {console.log("render")}
      </>
    );
  }
}

export default Counter;
