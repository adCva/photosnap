import React from 'react';
import styled from "styled-components";


function Plan(props) {
  return (
    <PlanContainer>
        <h3>{props.title}</h3>
        <p>{props.planDescription}</p>
        <h4>${props.price}</h4>
        <p>{props.timeline}</p>
        <button>pick plan</button>
    </PlanContainer>
  )
}

export default Plan;








const PlanContainer = styled.div`
  background-color: var(--gray);
  width: 85%;
  max-width: 350px;
  margin: 0 auto 2rem;
  padding: 2.5rem 1rem 3rem; 
  text-align: center;


  h3 {
    color: var(--black);
    font-size: 1.5rem;
    font-weight: var(--fw-bold);
    margin-bottom: 0.5rem;
  }


  p {
    color: var(--very-dark-gray);
    font-size: 0.95rem;
    line-height: 1.6;
    transition: var(--transition);
  }


  h4 {
    color: var(--black);
    font-size: 2.5rem;
    font-weight: var(--fw-bold);
    margin: 2.2rem 0 0.7rem;
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
  }
` 