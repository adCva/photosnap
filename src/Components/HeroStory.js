import React from 'react';
import styled from "styled-components";



function HeroStory() {
  return (
    <HeroStoryWrapper>
        <HeroStoryContainer>
            <h5>Last month's featured story</h5>
            <h1>Hazy full moon of Appalachia</h1>
            <h6>March 2nd 2020 by John Appleseed</h6>
            <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
            <button>Read the story <img src="./images/arrow.svg" alt="Arrow" /></button>
        </HeroStoryContainer>
    </HeroStoryWrapper>
  )
}

export default HeroStory;








const HeroStoryWrapper = styled.div`
    background: url("./images/moon-of-appalacia-mobile.jpg") center/cover no-repeat;
    height: 350px;

    @media (min-width: 768px) {
        background: url("./images/moon-of-appalacia-tablet.jpg") center/cover no-repeat;
        height: 650px;
    }
    @media (min-width: 1200px) {
        background: url("./images/moon-of-appalacia-desktop.jpg") center/cover no-repeat;
        height: 850px;
    }
`



const HeroStoryContainer = styled.div`
    background-color: var(--black);
    color: var(--white);


    @media (min-width: 768px) {
        background-color: transparent;
    }
`