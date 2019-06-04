import React from "react";
import styled from "styled-components";
import { getApprovedStories } from "actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "components/Navbar";
import hero from "assets/hero.jpg";


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

`;
const ListWrapper = styled.div`
min-height: 800px;
display:flex;
flex-direction: column;
align-items: center;
margin-bottom: 10px;

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
    @media (max-width: 950px) {
      flex-direction:column;
      padding-bottom:20px;
      }
      
    }
`;
const Content = styled.div`
  width: 100%;
  padding-left: 100px;
  @media (max-width: 950px) {
    padding-bottom: 20px;
    padding-left: 0;
  }
`;

const ContentWrapper = styled.div`
width: 50%;
 @media (max-width: 950px) {
    width: 100%;
  }
`;
class StoriesList extends React.Component {
  componentDidMount() {
    this.props.getApprovedStories();
  }

  render = () => {
    console.log(this.props.stories);
    return (
      <div>
        {this.props.stories && (
          <div>
            <Navbar />
            <HeroWrapper>
              <Title>Select Story </Title>
              <ListWrapper>
                {this.props.stories.map((story, index) => (
                  <Link to={`/stories_list/user/${story.id}`}>
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
        )}
      </div>
    );
  };
}

const mapStateToProps = state => ({
  stories: state.stories,
});

export default connect(
  mapStateToProps,
  { getApprovedStories }
)(StoriesList);
