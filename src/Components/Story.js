import React from 'react';
import styled from "styled-components";



function Story(props) {
  return (
    <StoryContainer bgImage={props.bgImage}>
      <h3>{props.storyTitle}</h3>
      <p>by {props.author}</p>
      <button>Read story <img src="./images/arrow.svg" alt="Arrow" /></button>
    </StoryContainer>
  )
}

export default Story;







// ========================================================== Styled Components ==========================================================

const StoryContainer =styled.div``