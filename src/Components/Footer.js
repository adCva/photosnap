import React from 'react'
import styled from "styled-components";


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
          <button>Home</button>
          <button>Stories</button>
          <button>Features</button>
          <button>Pricing</button>
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
`

const FooterMenu = styled.div``

const LogoAndSocial = styled.div``

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FooterCopy = styled.div``