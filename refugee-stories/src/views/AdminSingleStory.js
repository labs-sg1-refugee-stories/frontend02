import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

class SingleStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        <h1>Single Story Admin</h1>
        <p>
          {" "}
          {this.props.adminStories.map((story, index) =>
            story.id == this.props.match.params.id ? story.title : null
          )}
        </p>
        <button onClick={this.acceptStory}>accept</button>
        <button onClick={this.rejectStory}>reject</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adminStories: state.adminStories
});

export default connect(
  mapStateToProps,
  { getData }
)(SingleStory);
