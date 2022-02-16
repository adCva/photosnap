import React from 'react';
import styled from "styled-components";



function Descriptive(props) {
  return (
    <DescriptiveContainer imageFirst={props.imageFirst}>
        <TextContainer darkBg={props.darkBg}>
            <h1>{props.descriptiveTitle}</h1>
            <p>{props.descriptiveParagraph}</p>
            <button>Get an invite <img src="./images/arrow.svg" alt="Arrow" /></button>
        </TextContainer>
        <DescImage>
            <source media="(min-width: 1200px)" srcSet={`./images/${props.descImage}-desktop.jpg`} />
            <source media="(min-width: 768px)" srcSet={`./images/${props.descImage}-tablet.jpg`} />
            <img src={`./images/${props.descImage}-mobile.jpg`} alt="Descriptive Image" />
        </DescImage>
    </DescriptiveContainer>
  )
}

export default Descriptive;







// ========================================================== Styled Components ==========================================================

const DescriptiveContainer = styled.section`
    display: flex;
    flex-direction: column-reverse;
    gap: 0;

    @media (min-width: 768px) {
        flex-direction: ${({imageFirst}) => (imageFirst ? "row-reverse" : "row")};
    }
`



const TextContainer = styled.div`
    background-color: ${({darkBg}) => (darkBg ? "var(--black)" : "var(--white)")};
    color: ${({darkBg}) => (darkBg ? "var(--white)" : "var(--black)")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
    padding: 5rem 2rem; 

    @media (min-width: 768px) {
        width: 70%;
    }
    @media (min-width: 1200px) {
        width: 40%;
    }
`



const DescImage = styled.picture`
    img {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 768px) {
        width: 30%;
    }
    @media (min-width: 1200px) {
        width: 60%;
    }
`