import React from 'react';
import styled from "styled-components";



function Descriptive(props) {
  return (
    <DescriptiveContainer imageFirst={props.imageFirst}>
        <TextContainer darkBg={props.darkBg}>
            <h1>{props.descriptiveTitle}</h1>
            <p>{props.descriptiveParagraph}</p>
            <button>{props.buttonText} <img src="./images/arrow.svg" alt="Arrow" /></button>
        </TextContainer>
        <DescImage>
            <source media="(min-width: 1200px)" srcSet={`./images/${props.descImage}-desktop.jpg`} />
            <source media="(min-width: 768px)" srcSet={`./images/${props.descImage}-tablet.jpg`} />
            <img src={`./images/${props.descImage}-mobile.jpg`} alt="Descriptive" />
        </DescImage>
    </DescriptiveContainer>
  )
}

export default Descriptive;







// ========================================================== Styled Components ==========================================================

// ====================================== Container
const DescriptiveContainer = styled.section`
    display: flex;
    flex-direction: column-reverse;
    gap: 0;

    @media (min-width: 768px) {
        flex-direction: ${({imageFirst}) => (imageFirst ? "row-reverse" : "row")};
    }
`



// ====================================== Text Container
const TextContainer = styled.div`
    background-color: ${({darkBg}) => (darkBg ? "var(--black)" : "var(--white)")};
    color: ${({darkBg}) => (darkBg ? "var(--white)" : "var(--black)")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
    padding: 4rem 1.85rem; 

    @media (min-width: 768px) {
        width: 65%;
        padding: 0 2.5rem; 
    }
    @media (min-width: 1200px) {
        width: 40%;
        padding: 0 3.5rem; 
    }


    // ========== Title
    h1 {
        font-size: 2.05rem;
        font-weight: var(--fw-bold);
        text-transform: uppercase;
        letter-spacing: 2.5px;
        line-height: 1.2;

        @media (min-width: 768px) {
            font-size: 2.6rem;
        }
        @media (min-width: 1200px) {
            font-size: 2.8rem;
        }
    }


    // ========== Paragraph
    p {
        color: var(--very-dark-gray);
        font-size: 0.9375rem;
        line-height: 1.6;
        margin: 2rem 0 1.5rem;

        @media (min-width: 540px) {
            width: 380px;
        }
        @media (min-width: 768px) {
            width: 410px;
            font-size: 1rem;
        }
        @media (min-width: 1200px) {
            width: 470px;
            font-size: 1.15rem;
        }
    }


    // ========== Button
    button {
        background: none;
        color: ${({darkBg}) => (darkBg ? "var(--white)" : "var(--black)")}; 
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
            filter: ${({darkBg}) => (darkBg ? "invert(100%)" : "none")};
        }

        @media (min-width: 1200px) {
            font-size: 0.85rem;
        }
    }
`



// ====================================== Image
const DescImage = styled.picture`
    img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 768px) {
        width: 35%;
    }
    @media (min-width: 1200px) {
        width: 60%;
    }
`