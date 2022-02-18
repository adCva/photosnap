import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";


function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterContainer>

      <FooterMenu>
        <LogoAndSocial>

          <img src="./images/logo.svg" alt="Logo" />
          <div>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src="./images/facebook.svg" alt="Facebook" /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img src="./images/youtube.svg" alt="Youtube" /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><img src="./images/twitter.svg" alt="Twitter" /></a>
            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><img src="./images/pinterest.svg" alt="Pinterest" /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src="./images/instagram.svg" alt="Instagram" /></a>
          </div>
        </LogoAndSocial>

        <FooterLinks>
          <PageLink to="/">Home</PageLink>
          <PageLink to="/stories">Stories</PageLink>
          <PageLink to="/features">Features</PageLink>
          <PageLink to="/pricing">Pricing</PageLink>
        </FooterLinks>

      </FooterMenu>


      <FooterCopy>
        <button>Get an invite <img src="./images/arrow.svg" alt="Arrow" /></button>
        <p>Copyright {year}. All rights reserved</p>
      </FooterCopy>


    </FooterContainer>
  )
}

export default Footer;







// ========================================================== Styled Components ==========================================================


const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
  text-align: center;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }
`

const FooterMenu = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    gap: 5rem;
  }
`




const LogoAndSocial = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 140px;
  }

  div {
    width: 250px;
    margin: 3rem auto 0;
    display: flex;
    justify-content: space-around;

    @media (min-width: 500px) {
      width: 300px;
    }
    @media (min-width: 1200px) {
      width: 100%;
      justify-content: space-between;
    }
  }
`






const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0 5rem;

  :last-of-type {
    margin: 0;
  }
`

const PageLink = styled(Link)`
  color: var(--white);
  font-size: 1.1rem;
  font-weight: var(--fw-medium);
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 1.5rem;

  :last-of-type {
    margin-bottom: 0;
  }
`



const FooterCopy = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 140px;
    text-align: left;
  }

  button {
    margin: 0 auto 2rem;
    background: none;
    color: var(--white);
    display: flex;
    justify-content: center;
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
      filter: invert(100%);
    }

    @media (min-width: 1200px) {
      margin: 0;
    }
  }
`
