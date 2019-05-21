import React from "react";
import styled from 'styled-components';
import { getData } from "../../actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import hero from "../../assets/hero.jpg";


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

class AdminStoriesList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {

    if(this.props){
    return (
      <div>
      <Navbar />
    <HeroWrapper>
      
        <h1>Select Story for Review</h1>
        <ListWrapper>
        
        {/* needs to go to the id of the story create map function to search for correct story - */}
        {this.props.stories.map((story,index) => <div><Link to={`/admin_stories_list/${story.id}`}>{story.title}</Link></div>)}
        </ListWrapper>
      </HeroWrapper>
      </div>
    );
  
}}
}
const mapStateToProps = state => ({
  stories: state.stories
});

export default connect(
  mapStateToProps,
  { getData }
)(AdminStoriesList);

