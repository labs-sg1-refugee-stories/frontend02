import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../../actions'
import { Link } from 'react-router-dom'


class SingleStory extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }

    }


componentDidMount(){
    this.props.getData();
}



    
    render(){
        console.log(this.props.match.params.id)
    return ( 
        <div>
        <h1>Single Story</h1>
        <p> {this.props.stories.map((story,index) => story.id == this.props.match.params.id ? story.title: null)}</p>
        </div>
     );
    }
}


// if(props.match.params.id === this.props.story.id)

const mapStateToProps = state =>({
    stories: state.stories
})

export default connect(mapStateToProps,{getData})(SingleStory);



