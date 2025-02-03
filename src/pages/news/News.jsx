import PropTypes from "prop-types";
import { Component } from "react";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  componentWillUnmount() {
    console.log("News component will unmount");
  }
  componentDidMount() {
    console.log("News Component did mount");
  }
  componentDidUpdate() {
    console.log("News component did update");
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.test} </h1>
        <h2> Counter : {this.state.counter} </h2>
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          Click to rise
        </button>
      </div>
    );
  }
}

News.propTypes = {
  test: PropTypes.string,
};
// pure component

//component's life cycle: Constrution - Mounting - Updating - Unmounting
