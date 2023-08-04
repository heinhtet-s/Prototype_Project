import FooterImage from "../assets/images/Footer.jpeg";
import { styled } from "styled-components";
import PayPal from "../assets/images/PayPal.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterListContainer>
        <FooterNavList>
          <FooterNav>
            <h3>Quick Link</h3>
            <ul>
              <li>
                <a href="/">Service</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Quotation</a>
              </li>
              <li>
                <a href="/">Partnership</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </FooterNav>
          <FooterNav>
            <h3>Our Service</h3>
            <ul>
              <li>
                <a href="/">Web Development</a>
              </li>
              <li>
                <a href="/">Web Design</a>
              </li>
              <li>
                <a href="/">Responsive Website Design</a>
              </li>
              <li>
                <a href="/">CMS Website Design</a>
              </li>
              <li>
                <a href="/">Custom Website Design</a>
              </li>
              <li>
                <a href="/">UI & UX Website Design</a>
              </li>
              <li>
                <a href="/">360 Virtual Tour</a>
              </li>
            </ul>
          </FooterNav>
          <FooterNav>
            <ul
              style={{
                marginTop: "50px",
              }}
            >
              <li>
                <a href="/">Ecommerce Develoment</a>
              </li>
              <li>
                <a href="/">WooCommerce Development</a>
              </li>
              <li>
                <a href="/">osCommerce Development</a>
              </li>
              <li>
                <a href="/">Magenoto Development</a>
              </li>
              <li>
                <a href="/">BigCommerce Development</a>
              </li>
              <li>
                <a href="/">SSL Certificate</a>
              </li>
              <li>
                <a href="/">Promotion Video</a>
              </li>
            </ul>
          </FooterNav>
          <FooterNavInfo>
            <h3>VISIBLE ONE SINGAPORE</h3>
            <PhoneNumber>+65 6248 0838</PhoneNumber>
            <p>info@visible.com</p>
            <p>24 Sin Minng Lane, #02-100 Midview City, Singapore 573970</p>
            <p>Office Hour : Mon-Fri(9am- 6pm)</p>
          </FooterNavInfo>
        </FooterNavList>
        <FooterPaterners>
          <FooterParternerLeftSide>
            <img src={PayPal} alt="PayPal" />
          </FooterParternerLeftSide>
          <FooterParternerRightSide>
            <FooterMailBox placeholder="123@Text.com" />
            <MailSubmit>Submit</MailSubmit>
          </FooterParternerRightSide>
        </FooterPaterners>
        <FooterMedia>
          <a href="/">
            <FaFacebookF />
          </a>
          <a href="/">
            <AiOutlineTwitter />
          </a>
          <a href="/">
            <AiOutlineInstagram />
          </a>
          <a href="/">
            <AiOutlineLinkedin />
          </a>
        </FooterMedia>
        <FooterCopyRight>
          <p>Shopping T&C</p>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
          <p>© 2018 - Visible One</p>
        </FooterCopyRight>
      </FooterListContainer>
    </FooterContainer>
  );
};
const FooterContainer = styled.footer`
  width: 100%;

  padding-top: 40px;
  padding-bottom: 20px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${FooterImage}) center/cover no-repeat;
`;
const FooterListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const FooterNavList = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;
const FooterNav = styled.div`
  h3 {
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  ul {
    margin-left: 20px;
    li {
      margin-bottom: 10px;
      color: white;
      list-style-type: disc;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 14px;
        &:hover {
          color: var(--secondary-color);
        }
      }
    }
  }
`;
const FooterNavInfo = styled.div`
  h3 {
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    color: #fff;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;
const PhoneNumber = styled.div`
    color: #fff;
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 700;
    }
`;
const FooterPaterners = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
  height: 100px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`;
const FooterParternerLeftSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  align-items: center;
  img {
    height: 100px;
  }
`;
const FooterParternerRightSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterMailBox = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #fff;
  outline: none;
  padding-left: 10px;
  font-size: 14px;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
`;
const MailSubmit = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  outline: none;
  background-color: var(--secondary-color);
  color: #fff;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
`;
const FooterMedia = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  a {
    margin-left: 10px;
    color: #fff;
    display: block;
    font-size: 40px;
    &:hover {
      color: var(--secondary-color);
    }
  }
`;
const FooterCopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  p {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }
`;

export default Footer;
