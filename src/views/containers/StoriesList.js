import React from "react";
import styled from "styled-components";
import { getApprovedStories } from "actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "components/Navbar";
import ReactPaginate from "react-paginate";

const HeroWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  /* Pagination styles */
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
      color: black;

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
        color: lightgray;
        outline: none;
      }
    }
  }
`;
const Title = styled.h1`
  margin: 50px auto;
  font-weight: 400;
`;
const Content = styled.div`
  width: 100%;
  padding-left: 100px;
  @media (max-width: 950px) {
    padding-bottom: 20px;
    padding-left: 0;
  }
`;


class StoriesList extends React.Component {
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
        <div class="container">
          <div>
            <Navbar />
            <HeroWrapper>
              <Title>Select Story </Title>
             
                {this.props.stories.map((story, index) => (
                  <Link key={index} to={`/stories_list/user/${story.id}`}>
                  
                  
                      <Content>{story.title}</Content>
               
               
                      <Content>Author:{story.name}</Content>
                    
            
                      <Content>Location:{story.country}</Content>
                 
                  </Link>
                ))}
          
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
)(StoriesList);
