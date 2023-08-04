import { styled } from "styled-components";
import Logo from "../assets/images/logo.png";
import { BsTelephoneFill } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoDocumentTextSharp } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
type StyledHeaderProps = {
  isVisible: boolean;
};
const Header: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);
  return (
    <HeaderContainer isVisible={visible}>
      <HeaderInfoContainer>
        <HeaderInfo>
          <LogoContainer href="/">
            <img src={Logo} alt="logo" />
          </LogoContainer>
          <InfoItemContainer>
            <li>
              <a href="/">
                <BsTelephoneFill
                  style={{
                    color: "var(--secondary-color)",
                  }}
                />
                <p>6248 0838</p>
              </a>
            </li>
            <li>
              <a href="/">
                <FaViber
                  style={{
                    color: "var(--secondary-color)",
                  }}
                />
                <p>8484 9948</p>
              </a>
            </li>
            <li>
              <a href="/">
                <GrMail
                  style={{
                    color: "var(--secondary-color)",
                  }}
                />
                <p>info@visibleone.com</p>
              </a>
            </li>
            <QuoteButton>
              <IoDocumentTextSharp
                style={{
                  fontSize: "1.2rem",
                }}
              />
              <p>Get a Quote</p>
            </QuoteButton>
            <LanguageButton>
              <p>SG EN</p>
              <AiFillCaretDown />
            </LanguageButton>
          </InfoItemContainer>
        </HeaderInfo>
      </HeaderInfoContainer>
      <NavContainer>
        <li>
          <a href="/">
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href="/" className="ActiveNavItem">
            <p>Services</p>
            <BiChevronDown
              style={{
                fontSize: "1.2rem",
              }}
            />
          </a>
        </li>
        <li>
          <a href="/">
            <p>Company</p>
            <BiChevronDown
              style={{
                fontSize: "1.2rem",
              }}
            />
          </a>
        </li>
        <li>
          <a href="/">
            <p>Blog</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p>Contact Us</p>
            <BiChevronDown
              style={{
                fontSize: "1.2rem",
              }}
            />
          </a>
        </li>
        <NavSearch>
          <AiOutlineSearch
            style={{
              fontSize: "1.2rem",
              positive: "absolute",
              right: "0",
              top: "0",
            }}
          />
        </NavSearch>
      </NavContainer>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header<StyledHeaderProps>`
  display: flex;
  flex-direction: column;
transition: top 0.5s;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  position: sticky;
  top: ${(props) => (props.isVisible ? "0" : "-80px")};
  z-index: 1;


  }
`;
const LogoContainer = styled.a`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: end;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  background-color: #fff;
  position: relative;
  img {
    height: 40px;
  }
  &:after {
    content: "";
    display: block;
    width: 2px;
    height: 40px;
    background: #b5b2b2;
    position: absolute;
    top: 10px;
    right: 0;
  }
  &:before {
    content: "";
    display: block;
    width: 2px;
    height: 40px;
    background: #b5b2b2;
    position: absolute;
    top: 10px;
    left: 0;
  }
`;

const HeaderInfoContainer = styled.div`
  display: flex;
  height: 50%;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--header-info-color);
  }
`;
const HeaderInfo = styled.div`
max-width: 1200px;
  margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
} `;
const InfoItemContainer = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  li {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    a {
      text-decoration: none;

      color: var(--color-black);
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        margin-left: 0.5rem;
        font-weight: 400;
        margin-right: 0.5rem;
      }
    }
  }
`;
const QuoteButton = styled.button`
  background-color: #46b753;
  color: #fff;
  border: none;
  padding: 0.3rem;
  border-radius: 2px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  user-select: none;
  align-items: center;
  p {
    font-weight: 400;
    margin-left: 0.5rem;
    marign-right: 0.5rem;
  }
`;
const LanguageButton = styled.button`
  border: 1px solid var(--secondary-color);
  border-radius: 2px;
  color: var(--secondary-color);
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;

  padding: 0.3rem 0.5rem;
  font-size: 14px;
  p {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`;
const NavContainer = styled.nav`
  display: flex;
  height: 50%;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  li {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    list-style: none;
    a {
      text-decoration: none;
      color: var(--color-black);
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        margin-left: 0.2rem;
        margin-right: 0.2rem;
        font-weight: 400;
      }
      
    }
    .ActiveNavItem{
      color: var(--secondary-color);
    }
`;
const NavSearch = styled.div`
  display: flex;
  positive: relative;
  justify-content: end;
  align-items: center;
  width: 70px;
  font-size: 1.2rem;
  
  
  }
`;

export default Header;
