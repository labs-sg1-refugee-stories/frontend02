import React from "react";
import { getData } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AdminStoriesList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        <h1>Admin Stories List</h1>

        {/* needs to go to the id of the story create map function to search for correct story - */}
        {this.props.adminStories.map((story, index) => (
          <div>
            <Link to={`/admin_stories_list/${story.id}`}>{story.title}</Link>
          </div>
        ))}
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
)(AdminStoriesList);
