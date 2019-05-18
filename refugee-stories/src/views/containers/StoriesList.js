import React from "react";
import { getData } from "../../actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class StoriesList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {


    return (
    
    <div>
         
        <h1>Stories List</h1>
        <Link to="/stories_list/add_story" ><button>Submit New Story</button></Link>
        {/* needs to go to the id of the story create map function to search for correct story - */}
        {this.props.stories.map((story,index) => <div><Link to={`/stories_list/${story.id}`}>{story.title}</Link></div>)}
      </div>
    );
  
}
}

const mapStateToProps = state => ({
  stories: state.stories
});

export default connect(mapStateToProps,{ getData })(StoriesList);
