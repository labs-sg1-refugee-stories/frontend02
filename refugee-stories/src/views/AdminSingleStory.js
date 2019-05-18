import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions'



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
        <h1>Single Story Admin</h1>
      {this.props.adminStories.map((story,index) => story.id == this.props.match.params.id ? 
            <div>
            <p>{story.title}</p>
            <button>accept</button>
            <button>reject</button>
            </div>
            
            
            
            
            : null)}
        </div>

     );
    }
}



const mapStateToProps = state =>({
    adminStories: state.adminStories
})

export default connect(mapStateToProps,{getData})(SingleStory);
