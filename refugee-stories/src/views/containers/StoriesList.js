import React from "react";
import styled from 'styled-components';
import { getApprovedStories } from "../../actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import hero from "../../assets/hero.jpg";
import Button from '../../components/Button'

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
  color: white;
  flex-direction:column;
`;

const ListWrapper = styled.div`
height: 800px;
flex-direction:column;
justify-content: left
    a{
      color:white;
      font-size: 3rem;
      text-decoration:none;
    }

`

class StoriesList extends React.Component {
  componentDidMount() {
    this.props.getApprovedStories();
  }

render = () => {
  console.log(this.props.stories)
return(
  <div>
    {this.props.stories &&

      <div>
      <Navbar />
    <HeroWrapper>
      
        <h1>Choose a Recent Refugee Story</h1>
        <ListWrapper>
        
        {/* needs to go to the id of the story create map function to search for correct story - */}
        {this.props.stories.map((story,index) => <div><Link to={`/stories_list/user/${story.id}`}>{story.title}</Link></div>)}
        </ListWrapper>
      </HeroWrapper>
      </div>
      
    }
   </div> )
  
}
}

const mapStateToProps = state => ({
  stories: state.stories
});

export default connect(mapStateToProps,{ getApprovedStories })(StoriesList);
