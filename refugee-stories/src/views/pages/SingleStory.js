import React from 'react'
import { connect } from 'react-redux'
import { getData } from '../../actions'
import hero from "../../assets/hero.jpg";
import Navbar from "../../components/Navbar";
import styled from "styled-components";

const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  height: 900px;
  justify-content: space-around;
  background-image: linear-gradient(
      rgba(000, 000, 000, 0.9),
      rgba(111, 111, 111, 0.8)
    ),
    url(${hero});
  background-size: contain;
  font-size: 4rem;
  color:white;
`;
const StoryWrapper = styled.div`

`


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
        console.log(this.props.stories.id)
    return ( 
        <div>
        <Navbar />
        <HeroWrapper>
            <StoryWrapper>
        <h1>Single Story</h1>
        <p> {this.props.stories.map((story,index) => story.id == this.props.match.params.id ? story.title: null)}</p>
        
        </StoryWrapper>
        </HeroWrapper>
        </div>
     );
    }
}

const mapStateToProps = state =>({
    stories: state.stories
})

export default connect(mapStateToProps,{getData})(SingleStory);



