import React from "react";
import styled from "styled-components";
import { getApprovedStories } from "actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "components/AuthNavbar";
import ReactPaginate from "react-paginate";
import Button from "../../components/Button"

const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  min-height: 900px;
  justify-content: space-around;
  font-size: 4rem;
  color: white;
  flex-direction: column;
  //* Pagination styles *//
  .pagination {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0 auto 30px;
    font-weight: 600;
    
    .previous,
    .next {
      a {
        width: 50px;
        height: 50px;
      }
    }
    .active,
    .focus {
      outline: none;
      background: #0180c7;

    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid white;
      border-radius: 5px;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        font-size: 2rem;
        cursor: pointer;
      }
      &:hover {
        background: #0180c7;
        outline: none;
      }
    }
  }
`;
const Title = styled.h1`
  margin: 50px auto;
`;
const ListWrapper = styled.div`
  min-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  a {
    color: white;
    font-size: 3rem;
    text-decoration: none;
    display: flex;
    width: 80%;
    border: 1px solid white;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    @media (max-width: 950px) {
      flex-direction: column;
      padding-bottom: 20px;
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
class AdminAcceptedStoriesList extends React.Component {
  componentDidMount() {
    this.props.getApprovedStories(this.props.offset);
  }

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.limit);
    this.props.getApprovedStories(offset);
  };



  render = () => {
    return (
      <div>
        {this.props.stories && (
          <div>
            <Navbar />
            <HeroWrapper>
              <Title>Select Story </Title>
              <ListWrapper>
                {this.props.stories.map((story, index) => (
                  <Link key={index} to={`/admin_accepted_stories_list/${story.id}`}>
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
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(this.props.count / this.props.limit) || 1}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                initialPage={
                  Math.floor(this.props.offset / this.props.limit) || 0
                }
              />
            </HeroWrapper>
          </div>
        )}
      </div>
    );
  };
}

const mapStateToProps = state => ({
  stories: state.stories,
  offset: state.storiesOffset,
  limit: state.storiesLimit,
  count: state.storiesCount,
});

export default connect(
  mapStateToProps,
  { getApprovedStories }
)(AdminAcceptedStoriesList);