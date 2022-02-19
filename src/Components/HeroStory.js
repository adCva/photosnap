import React from 'react';
import styled from "styled-components";



function HeroStory() {
  return (
    <HeroStoryWrapper>
        <img src="./images/moon-of-appalacia-mobile.jpg" alt="Appalacia" className="mobile-img" />
        <HeroStoryContainer>
            <h5>Last month's featured story</h5>
            <h1>Hazy full <span>moon of</span> <span>Appalachia</span></h1>
            <h6>March 2nd 2020 by John Appleseed</h6>
            <p>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
            <button>Read the story <img src="./images/arrow.svg" alt="Arrow" /></button>
        </HeroStoryContainer>
    </HeroStoryWrapper>
  )
}

export default HeroStory;







// ========================================================== Styled Components ==========================================================


// ====================================== Wrapper
const HeroStoryWrapper = styled.div`
    animation: opacity 0.4s linear;

    .mobile-img {
        width: 100%;
        height: 100%;

        @media (min-width: 768px) {
            display: none;
        }
    }

    @media (min-width: 768px) {
        background: url("./images/moon-of-appalacia-tablet.jpg") center/cover no-repeat;
        height: 700px;
    }
    @media (min-width: 1200px) {
        background: url("./images/moon-of-appalacia-desktop.jpg") center/cover no-repeat;
        height: 850px;
    }
`



// ====================================== Container
const HeroStoryContainer = styled.div`
    background-color: var(--black);
    color: var(--white);
    margin-top: -1rem;
    padding: 5rem 1.8rem;

    @media (min-width: 768px) {
        background-color: transparent;
        width: 450px;
        padding: 6rem 0 6rem 2.5rem;
    }

    @media (min-width: 1200px) {
        width: 500px;
        padding: 8rem 0 8rem 5rem;
    }

    
    h5 {
        font-size: 0.75rem;
        font-weight: var(--fw-bold);
        letter-spacing: 3px;
        line-height: 1.25;
        text-transform: uppercase;
    }


    h1 {
        font-size: 2rem;
        font-weight: var(--fw-bold);
        letter-spacing: 3px;
        line-height: 1.3;
        text-transform: uppercase;
        margin: 0.1rem 0 1.2rem;

        @media (min-width: 768px) {
            font-size: 2.5rem;
            margin: 1rem 0;

            span {
                display: block;
            }
        }
    }


    h6 {
        font-size: 0.95rem;
        line-height: 1.5;
    }


    p {
        font-size: 0.95rem;
        line-height: 1.67;
        margin: 2rem 0 1.5rem;
        opacity: 0.65;
    }


    button {
        background: none;
        color: var(--white); 
        display: flex;
        align-items: center;
        gap: 1rem;
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
            width: 40px;
            filter: invert(100%);
        }

        @media (min-width: 768px) {
            img {
                width: 30px;
            }
        }

        @media (min-width: 1200px) {
            font-size: 0.85rem;
        }
    }
`