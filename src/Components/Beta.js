import React from 'react';
import styled from "styled-components";



function Beta() {
  return (
    <BetaWrapper>
        <BetaContainer>
            <h3>We're in Beta. Get your invite today!</h3>
            <button></button>
            <button>Get an invite <img src="./images/arrow.svg" alt="Arrow" /></button>
        </BetaContainer>
    </BetaWrapper>
  )
}

export default Beta;







// ========================================================== Styled Components ==========================================================

// ====================================== Wrapper
const BetaWrapper = styled.section`
  background: url("./images/bg-beta-mobile.jpg") center/cover no-repeat;
  height: 300px;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    background: url("./images/bg-beta-tablet.jpg") center/cover no-repeat;
    height: 350px;
  }
  @media (min-width: 1200px) {
    background: url("./images/bg-beta-desktop.jpg") center/cover no-repeat;
    height: 400px;
  }
`


// ====================================== Container
const BetaContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  color: var(--white);

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  // ========== Text
  h3 {
    font-size: 2rem;
    font-weight: var(--fw-bold);
    line-height: 1.4;
    margin-bottom: 1.5rem;

    @media (min-width: 768px) {
      font-size: 2.25rem;
      width: 300px;
    }
    @media (min-width: 1200px) {
      font-size: 2.1rem;
    }
  }


  // ========== Button
  button {
    background: none;
    color: var(--white); 
    display: flex;
    align-items: center;
    gap: 1.5rem;
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

    @media (min-width: 1200px) {
      font-size: 0.85rem;
    }
  }
`