import React from "react";
import { connect } from "react-redux";
import { getData } from "../../actions";
import styled from "styled-components";
import hero from "../../assets/hero.jpg";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button"


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
`;

const StoryWrapper = styled.div`

    button{
      margin-left: 10px
      
    }
`

class SingleStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
      <Navbar/>
      <HeroWrapper>
        <StoryWrapper>
        <h1>Single Story Admin</h1>
        <p>
          {" "}
          {this.props.adminStories.map((story, index) =>
            story.id == this.props.match.params.id ? story.title : null
          )}
        </p>
        <div>
        <Button text={"accept"} onClick={this.acceptStory}>accept</Button>
        <Button text={"decline"} onClick={this.rejectStory}>reject</Button>
        </div>
        </StoryWrapper>
      </HeroWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adminStories: state.adminStories
});

export default connect(
  mapStateToProps,
  { getData }
)(SingleStory);
