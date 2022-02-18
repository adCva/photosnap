import React from 'react';
import styled from "styled-components";



function Story(props) {
  return (
    <StoryContainer bgImage={props.bgImage}>
      <div>
        <h3>{props.storyTitle}</h3>
        <p>by {props.author}</p>
        <button>Read story <img src="./images/arrow.svg" alt="Arrow" /></button>
      </div>
    </StoryContainer>
  )
}

export default Story;






//background-image: "url(`.Assets/bgImage-mobile.jpg`)";
// ========================================================== Styled Components ==========================================================

const StoryContainer =styled.div`
  width: 100%;
  height: 370px;
  background-image: url(./images/${({bgImage}) => (bgImage)}-mobile.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 411px) {
    height: 410px;
  }
  @media (min-width: 768px) {
    height: 550px;
    background-image: url(./images/${({bgImage}) => (bgImage)}-desktop.jpg);
  }
  @media (min-width: 1200px) {
    height: 450px;
  }
  @media (min-width: 1400px) {
    height: 550px;
  }
  @media (min-width: 1600px) {
    height: 650px;
  }


  div {
    background-color: rgba(0, 0, 0, 0.5);
    color: var(--white);
    padding: 2.2rem 1.6rem;


    h3 {
      font-size: 1.5rem;
      font-weight: var(--fw-bold);
      letter-spacing: 0.5px;
    }

    p {
      font-size: 0.93rem;
      letter-spacing: 0.5px;
      margin: 0.75rem 0 0.9rem;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    }

    button {
      width: 100%;
      background: none;
      color: var(--white);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.75rem;
      font-weight: var(--fw-bold);
      letter-spacing: 1.5px;
      text-transform: uppercase;
      cursor: pointer;
      transition: var(--transition);

      :hover {
        text-decoration: underline;
      }

      img {
        filter: invert(100%);
      }
    }
  }
`