import React from "react";
import { connect } from "react-redux";
import { getStory, getComments, addComment } from "actions";
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
const CommentsWrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;

  h4 {
    margin-bottom: 0px;
  }
  label {
    font-size: 18px;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  textarea.form-control {
    height: auto;
  }

  [type="button"]:not(:disabled),
  [type="reset"]:not(:disabled),
  [type="submit"]:not(:disabled),
  button:not(:disabled) {
    cursor: pointer;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .btn-primary.focus,
  .btn-primary:focus {
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }

  .btn.focus,
  .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }

  h6 {
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 0px;
  }
  p {
    margin: 0px;
  }
`;

class SingleStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getStory(this.props.match.params.id);
    this.props.getComments(this.props.match.params.id);
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

  textChangeHandler = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitComment = event => {
    event.preventDefault();
    this.props.addComment(this.state);
  };

  render() {
    return (
      <div>
        <Navbar />
        <HeroWrapper>
          <StoryWrapper>
            <div>
              {this.props.singleStory ? (
                <div>
                  <h1>{this.props.singleStory.title}</h1>
                  <h4>{this.props.singleStory.name}</h4>
                  <h4>{this.props.singleStory.country}</h4>
                  <p>{this.props.singleStory.storytext}</p>
                  {this.props.singleStory.photoUrl && (
                    <img src={this.props.singleStory.photoUrl} alt="story" />
                  )}
                  {this.props.singleStory.authorUrl && (
                    <img src={this.props.singleStory.authorUrl} alt="author" />
                  )}
                </div>
              ) : null}
            </div>

            <CommentsWrapper>
              <hr />

              <h4>Comments</h4>

              {this.props.singleStory &&
              this.props.singleStory.allowComments === true ? (
                <form onSubmit={this.onSubmitComment}>
                  <div className="form-group">
                    <label htmlFor="input-name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={this.textChangeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="input-text">Message</label>
                    <textarea
                      rows="4"
                      name="text"
                      className="form-control"
                      onChange={this.textChangeHandler}
                      required={true}
                    />
                  </div>
                  <button type="submit" className="btn btn-block btn-primary">
                    Add Comment
                  </button>
                </form>
              ) : null}

              {this.props.comments
                ? this.props.comments.map((comment, index) => (
                    <div key={index}>
                      <h6>{comment.name}</h6>
                      <p>{comment.text}</p>
                    </div>
                  ))
                : null}
            </CommentsWrapper>
          </StoryWrapper>
        </HeroWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleStory: state.singleStory,
  comments: state.comments,
});

export default connect(
  mapStateToProps,
  { getStory, getComments, addComment }
)(SingleStory);
