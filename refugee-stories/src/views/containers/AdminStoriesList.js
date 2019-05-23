import React from "react";
import styled from "styled-components";
import { getData } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../components/AuthNavbar";
import hero from "../../assets/hero.jpg";

const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 900px;
  justify-content: space-around;
  background-image: linear-gradient(
      rgba(000, 000, 000, 0.9),
      rgba(111, 111, 111, 0.8)
    ),
    url(${hero});
  background-size: contain;
  font-size: 4rem;
  color: white;
  flex-direction: column;
`;
const Title = styled.h1`
margin: 50px auto;
margin

`;
const ListWrapper = styled.div`
height: 800px;
display:flex;
flex-direction: column
align-items: center;
margin-bottom:10px;
  a{
    color:white;
    font-size: 3rem;
    text-decoration:none;
    display:flex;
    width:80%;
    border: 1px solid white;
    padding: 20px;
    border-radius: 5px;
    margin-bottom:20px;
    background-color: rgba(0,0,0,.3);
      
  }
`;
const Content = styled.div`
  width: 100%;
  padding-left: 40px;
`;

const ContentWrapper = styled.div`
width: 50%
@media (max-width: 700px) {
  width: 30%
`;

class AdminStoriesList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props) {
      return (
        <div>
          <Navbar />
          <HeroWrapper>
            <Title>Select Story for Review</Title>
            <ListWrapper>
              {/* needs to go to the id of the story create map function to search for correct story - */}
              {this.props.adminStories.map((story, index) => (
                <Link to={`/admin_stories_list/${story.id}`}>
                  <ContentWrapper>
                    <Content>{story.title}</Content>
                  </ContentWrapper>
                  <ContentWrapper>
                    <Content>{story.name}</Content>
                  </ContentWrapper>
                  <ContentWrapper>
                    <Content>{story.country}</Content>
                  </ContentWrapper>
                </Link>
              ))}
            </ListWrapper>
          </HeroWrapper>
        </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  adminStories: state.adminStories
});

export default connect(
  mapStateToProps,
  { getData }
)(AdminStoriesList);
