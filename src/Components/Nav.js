import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTransition, animated } from 'react-spring';



function Nav() {
  const [ mobileMenu, setMobileMenu ] = useState(window.innerWidth > 767 ? true : false);

  const toogleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }


  const closeMobileMenuOnLinkClick = () => {
    if (window.innerWidth > 767) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  }


  useEffect(() => {
    let mobileNavScreenWidth = () => {
      if (window.innerWidth < 768) {
        setMobileMenu(false);
      } else {
        setMobileMenu(true);
      }
    }

    window.addEventListener("resize", mobileNavScreenWidth)
    
    return() => {
        window.removeEventListener("resize", mobileNavScreenWidth)
    }
  });


    // React Spring.
    const transition = useTransition(mobileMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });


  return (
    <NavContainer>
        <img src="./images/logo.svg" alt="Logo" />
        <img src={mobileMenu ? "./images/close-menu.svg" : "./images/menu.svg"} alt="Hamburgur" onClick={toogleMobileMenu} className="hamburgur-icon" />
        {transition((style, mobileMenu) => mobileMenu ? (
          <animated.div style={style} className="nav-menu">
                <ul>
                  <li><NavMenuLink to="/" onClick={closeMobileMenuOnLinkClick}>Home</NavMenuLink></li>
                  <li><NavMenuLink to="/stories" onClick={closeMobileMenuOnLinkClick}>Stories</NavMenuLink></li>
                  <li><NavMenuLink to="/features" onClick={closeMobileMenuOnLinkClick}>Features</NavMenuLink></li>
                  <li><NavMenuLink to="/pricing" onClick={closeMobileMenuOnLinkClick}>Pricing</NavMenuLink></li>
                </ul>
                <button>Get an invite</button>
            </animated.div>
        ) : null)}
        <InviteButtonDesktop>Get an invite</InviteButtonDesktop>
    </NavContainer>
  )
}

export default Nav;







// ========================================================== Styled Components ==========================================================


// ====================================== Container
const NavContainer = styled.nav`
  background-color: var(--white);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 1.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
    animation: opacity 0.25s linear;
  }
  @media (min-width: 1000px) {
    padding: 1rem 2rem;
  }


  // ========== Logo and hamburgur icon
  img {
    z-index: 99;
  }


  // ========== Hamburgur icon
  .hamburgur-icon {
    @media (min-width: 768px) {
      display: none; 
    }
  }



  // ========== Nav Menu
  .hide-menu {
    display: none;
  }

  .nav-menu {
    background-color: var(--white);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 6.5rem 1.5rem 2rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    @media (min-width: 768px) {
      position: initial;
      padding: 0;
      box-shadow: none;
    }


    // ====== UL
    ul {
      margin-bottom: 2.5rem;

      @media (min-width: 768px) {
        display: flex;
        margin-bottom: 0;
      }


      li {
        margin-bottom: 1.85rem;

        @media (min-width: 768px) {
            margin-bottom: 0;
            margin-right: 1.5rem;

            :last-of-type {
              margin-right: 0;
            }
        }

        @media (min-width: 1000px) {
          margin-right: 3rem;
        }
      }
    }


    // ====== Invite mobile btn
    button {
      background-color: var(--black);
      color: var(--white);
      width: 250px;
      height: 50px;
      font-size: 0.875rem;
      font-weight: var(--fw-medium);
      letter-spacing: 0.125rem;
      text-transform: uppercase;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

      @media (min-width: 360px) {
        width: 300px;
      }
      @media (min-width: 768px) {
        display: none;
      }
    }

  } // End of Nav-menu.
`



// ====================================== Link
const NavMenuLink = styled(Link)`
  color: var(--black);
  font-size: 1rem;
  font-weight: var(--fw-medium);
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);

  :hover {
    color: var(--very-dark-gray);
  }

  @media (min-width: 768px) {
    font-size: 0.8125rem;
    letter-spacing: 0.1rem;
  }

  @media (min-width: 1000px) {
    font-size: 0.9rem;
  }
`



// ====================================== Invite button on screens > 768px
const InviteButtonDesktop = styled.button`
  display: none;

  @media (min-width: 768px) {
    background-color: var(--black);
    color: var(--white);
    display: initial;
    width: 170px;
    height: 40px;
    font-size: 0.78rem;
    font-weight: var(--fw-medium);
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
    transition: var(--transition);
  }


  @media (min-width: 1000px) {
    width: 180px;
    height: 45px;
  }

  :hover {
    background-color: var(--blue);
  }
`