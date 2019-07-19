import React from "react";
import Navbar from "components/Navbar";
import styled from "styled-components";
import colorPainting from "../../assets/BASEL.HOPE-1.jpg";
import books from "../../assets/Capture.jpg";
import shoes from "../../assets/andrew-itaga-QNyWeFHjZJY-unsplash.jpg";
import hope from "../../assets/kristopher-roller-PC_lbSSxCZE-unsplash.jpg";
import desert from "../../assets/ivars-krutainis-jTJ9-4ESzU4-unsplash.jpg";

const Heading = styled.h1`
  background-color: white;
  font-weight: 400;
`;
const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;
`;

const TopContent = styled.div`
  display: flex;
`;
const SubMenu = styled.p`
  margin: 0;
  font-size: 1.3rem;
  margin-bottom: 30px;
`;
const HeroContent = styled.div`
  width: 50%;
  padding-right: 20px;
`;

const Author = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 1.3rem;
`;

const Content = styled.p`
  font-size: 1.6rem;
`;

const MiddleContent = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 200px;
`;

const TopStories = styled.div`
  border-top: 1px solid lightgray;
  width: 55%;
`;

const StoryList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ColumnStory = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Contributers = styled.div`
  border-top: 1px solid lightgray;
  width: 30%;
  margin-bottom:20px;
`;

const ContributerList = styled.ul`
margin-bottom: 40px;
`

const StoriesImage = styled.img`
  width: 100%;
  height: 250px;
`;

const Story = styled.div`
  padding: 10px;
  width: 100%;
  height: 480px;
  p {
    font-size: 1.4rem;
  }
`;

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 400;
`;

const Border =styled.div`
border-bottom: 1px solid lightgray;
`
const SocialMedia = styled.div`
display:flex;

  i {
    margin-right:40px;
    font-size:40px;
    
    
  }
  i:first-child{
    margin-left:50px;
  }

`


class Home extends React.Component {
  state = {};
  render() {
    return (
      <div class="container">
        <div>
          <Navbar />
          <HeadingWrapper>
            <Heading>write</Heading>
            <Heading>read</Heading>
          </HeadingWrapper>
          <SubMenu>spotlight</SubMenu>
          <TopContent>
            <HeroContent>
              <Heading>Dear Scissors</Heading>
              <Author>published by: Zainulabdeen</Author>
              <Content>
                Dear Scissors, I bought you in a shop. The same shop in Baghdad
                where I bought my fabric. I bought you the same day I opened my
                shop when I was 14 years old. Afterward, I bought more scissors,
                but I will always remember you, as you were my first pair.
                <br />
                <br />
                You were black, not plastic but metal, just a bit bigger than my
                hand. You didn’t smell of anything, or at least I don’t
                remember. I liked you because you helped me make my work. With
                you I made many curtains. Every time I opened my shop I had you
                with me. I used you to cut my fabric, but I had to leave you
                behind because I had to close my shop and sell everything,
                including you.
                <br />
                <br />
                Even though I know that I will have other pairs of scissors in
                the future, I will never forget you because with you I created
                my first curtains. I hope you are in good hands now and that you
                will never forget about me too.
                <br />
                <br />
                Love,
                <br />
                Zainulabdeen
              </Content>
            </HeroContent>
            <div>
              <img src={colorPainting} alt={"hope painting"} />
            </div>
          </TopContent>
          <MiddleContent>
            <TopStories>
              <SubMenu>top stories</SubMenu>
              <StoryList>
                <ColumnStory>
                  <Story>
                    <Title>Dear Books</Title>
                    <Author>Mohammad Kamal</Author>
                    <StoriesImage src={books} />
                    <p>
                      Thanks for all the information you gave me throughout
                      these years. It’s really helped me. I still remember when
                      I got you, even though you were small. But you were heavy
                      because of all the pages you ...
                    </p>
                  </Story>
                  <Story>
                    <Title>Dear Hope</Title>
                    <Author>Basel Al Sheakh Ali</Author>
                    <StoriesImage src={hope} />
                    <p>
                      We had some problems being in the same place. You were
                      getting upset every time I told you, “I made you.” You are
                      a little child, you are so small, but even you – so small
                      – I could not carry you ...
                    </p>
                  </Story>
                </ColumnStory>
                <ColumnStory>
                  <Story>
                    <Title>Dear My Sexy Green Shoes</Title>
                    <Author>Hayder Al-Hilo</Author>
                    <StoriesImage src={shoes} />
                    <p>
                      The first time I left Iraq to go to Sweden, I had to take
                      a small boat to Greece from Turkey. There were too many
                      people in the boat, so it flipped over and everyone fell
                      in the water. I had to swim to the island and leave ...{" "}
                    </p>
                  </Story>
                  <Story>
                    <Title>Leaving El Salvador Forever</Title>
                    <Author>Anonymous</Author>
                    <StoriesImage src={desert} />
                    <p>
                      When I saw my grandma answer the phone, I knew it was the
                      smugglers calling. My family had paid some smugglers—which
                      everyone calls coyotes—to take me from El Salvador ...
                    </p>
                  </Story>
                </ColumnStory>
              </StoryList>
            </TopStories>
            <Contributers>
              <SubMenu>partners</SubMenu>
              <ContributerList>
                <li>Echo 100 Plus</li>
                <Author>An Austrian charity helping refugees</Author>
                <li>Zine</li>
                <Author>A publication by and for refugees</Author>
                <li>Comic</li>
                <p />
                <li>etc.</li>
              </ContributerList>
              <Border></Border>
              <SubMenu>Contact Us</SubMenu>
              <SocialMedia>
                <i className="fab fa-github-square" />
                <i className="fab fa-facebook-square" />
                <i className="fab fa-twitter-square" />
              </SocialMedia>
            </Contributers>
            <div />
          </MiddleContent>
        </div>
      </div>
    );
  }
}

export default Home;
