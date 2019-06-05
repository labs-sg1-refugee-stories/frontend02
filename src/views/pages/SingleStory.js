import React from "react";
import { connect } from "react-redux";
import { getData } from "actions";
import hero from "assets/hero.jpg";
import Navbar from "components/Navbar";
import styled from "styled-components";

const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;

  justify-content: space-around;
  background-image: linear-gradient(
      rgba(000, 000, 000, 0.9),
      rgba(111, 111, 111, 0.8)
    ),
    url(${hero});
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
class SingleStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getData();
  }

  rejectStory(id) {
    this.props.rejectStory(id);
    this.props.history.push("/admin_stories_list");
  }

  acceptStory(story) {
    console.log("launching accept story", story);
    this.props.acceptStory(story);
    this.props.history.push("/admin_stories_list");
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
  stories: state.stories,
});

export default connect(
  mapStateToProps,
  { getData }
)(SingleStory);
