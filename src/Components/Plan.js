import React from 'react';
import styled from "styled-components";


function Plan(props) {
  return (
    <PlanContainer bgColor={props.planTimeline}>
        <h3>{props.title}</h3>
        <p>{props.planDescription}</p>
        <h4>${props.price}</h4>
        <p>{props.timeline}</p>
        <button>pick plan</button>
    </PlanContainer>
  )
}

export default Plan;







// ========================================================== Styled Components ==========================================================

// ====================================== Container
const PlanContainer = styled.div`
  background-color: ${({bgColor}) => (bgColor)};
  width: 85%;
  max-width: 340px;
  margin: 0 auto;
  padding: 2.5rem 1rem 3rem; 
  user-select: none;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: var(--transition);

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media (min-width: 1200px) {
    margin: 0;
  }


  h3 {
    color: var(--black);
    font-size: 1.55rem;
    font-weight: var(--fw-bold);
    margin-bottom: 0.5rem;
  }


  p {
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.55;
    transition: var(--transition);
  }


  h4 {
    color: var(--black);
    font-size: 2.5rem;
    font-weight: var(--fw-bold);
    margin: 2rem 0 0;
    transition: var(--transition);
  }


  button {
    width: 85%;
    height: 43px;
    background-color: var(--black);
    color: var(--white);
    font-size: 0.75rem;
    font-weight: var(--fw-bold);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-top: 3rem;
    cursor: pointer;
    transition: var(--transition);

    :hover {
      background-color: var(--blue);
    }

    :focus {
      background-color: var(--blue);
    }
  }
` 