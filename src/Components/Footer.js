import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrFacebook, GrTwitter, GrPinterest } from "react-icons/gr";
import { SiYoutubemusic, SiInstagram } from "react-icons/si";


function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterWrapper>
      <FooterContainer>

        <FooterMenu>
          <LogoAndSocial>

            <h1 className="logo-footer">Photosnap</h1>
            <div>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><GrFacebook /></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><SiYoutubemusic/></a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer"><GrTwitter/></a>
              <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><GrPinterest/></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><SiInstagram/></a>
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
    </FooterWrapper>
  )
}

export default Footer;







// ========================================================== Styled Components ==========================================================

// ====================================== Container
const FooterWrapper = styled.section`
  padding: 4rem 0;
`



const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    height: 150px;
  }
`



// ====================================== Footer Menu
const FooterMenu = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    gap: 10rem;
  }
`



// ====================================== Logo & Social icons
const LogoAndSocial = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .logo-footer {
    font-size: 1.2rem;
    letter-spacing: 1px;
    font-weight: var(--fw-bold);
    text-transform: uppercase;
  }

  div {
    width: 250px;
    margin: 2rem auto 3.5rem;
    display: flex;
    justify-content: space-around;

    a {
      color: var(--white);
      font-size: 1.2rem;
      cursor: pointer;
      transition: var(--transition);

      :hover {
        color: var(--light-orange);
      }
    }

    @media (min-width: 500px) {
      width: 300px;
    }
    @media (min-width: 1200px) {
      width: 130%;
      justify-content: space-between;
      margin: 0;
    }
  }
`



// ====================================== Links Container
const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`



// ====================================== Links
const PageLink = styled(Link)`
  color: var(--white);
  font-size: 1rem;
  font-weight: var(--fw-medium);
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: var(--transition);

  :hover {
    color: var(--light-orange);
  }

  :last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 1200px) {
    margin-bottom: 0;
  }
`



// ====================================== Copyright message and invite btn
const FooterCopy = styled.div`
  margin-top: 3.5rem;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 0;
  }

  button {
    margin: 0 auto 1.3rem;
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
      width: 30px;
      filter: invert(100%);
    }

    @media (min-width: 1200px) {
      margin: 0;
    }
  }

  p {
    font-size: 0.9rem;
    opacity: 0.7;
  }
`
