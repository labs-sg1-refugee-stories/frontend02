import React from "react";
import { connect } from "react-redux";
import { getData,deleteStory } from "actions";
import styled from "styled-components";
import Navbar from "components/AuthNavbar";

const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;

  justify-content: space-around;
  
  background-size: contain;
  font-size: 4rem;
  color: white;
`;
const StoryWrapper = styled.div`
  padding: 20px;
  margin-bottom: 200px;
  margin-top: 100px;
  width: 400px;
  border: 1px solid white;
  background-color: rgba(000, 000, 000, 0.4);
  button {
    margin-right: 20px;
  }
`;

const ButtonStyle = styled.button`
  padding: 10px 20px;
  font-size: 2rem;
  border-radius: 5px;
  color: white;
  background-color: #9c000b;
`;

class AdminDeleteSingleStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getData();
  }

  deleteStory(id) {
    this.props.deleteStory(id);
    console.log("helper function", id)
    this.props.history.push("/admin_accepted_stories_list");
  }


  render() {
    return (
      <div>
        <Navbar />
        <HeroWrapper>
          <StoryWrapper>
            <div>
              {this.props.stories.map((story, index) =>
                story.id == this.props.match.params.id ? (
                  <div key={index}>
                    <h1>{story.title}</h1>
                    <h4>{story.name}</h4>
                    <h4>{story.country}</h4>
                    <p>{story.storytext}</p>
                    <ButtonStyle
                      text={"delete"}
                      onClick={() => {
                        this.deleteStory(story.id);
                      }}
                    >
                      delete
                    </ButtonStyle>
                  </div>
                ) : null
              )}
            </div>
            <div />
          </StoryWrapper>
        </HeroWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stories: state.stories
});

export default connect(
  mapStateToProps,
  { getData, deleteStory }
)(AdminDeleteSingleStory);