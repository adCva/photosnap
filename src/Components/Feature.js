import React from 'react';
import styled from "styled-components";



function Feature(props) {
  return (
    <FeatureCard>
        <img src={`./images/${props.featureImage}`} alt={props.altTitle} />
        <h3>{props.featureTitle}</h3>
        <p>{props.featureDesc}</p>
    </FeatureCard>
  )
}

export default Feature;







//

const FeatureCard = styled.div`
    width: 300px;
    margin: 0 auto;
    text-align: center;

    @media (min-width: 768px) {
        width: 400px;
    }
    @media (min-width: 1200px) {
        width: auto;
    }

    h3 {
        margin: 2rem 0;
        font-size: 1.45rem;
        font-weight: var(--fw-bold);
        letter-spacing: 0.5px;
    }

    p {
        line-height: 1.5;
    }
`