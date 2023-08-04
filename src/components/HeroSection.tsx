import React from "react";
import { styled } from "styled-components";
import WordPressIcon from "../assets/images/wordpress-logo.svg";
import EcommerceIcon from "../assets/images/shopping-cart.svg";
import IndustryIcon from "../assets/images/responsive.svg";
import LaptopImage from "../assets/images/Laptop.png";
import LaptopBgImage from "../assets/images/HeroLaptopImage.png";
import BackgroundImage from "../assets/images/HeroImage.png";
import { motion } from "framer-motion";
const HeroSection: React.FC = () => {
  return (
    <HeroSectionContainer>
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1>TRIPPRO - AN ECOMMERCE SOLUTION</h1>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          pellentesque, nisl euismod convallis tincidunt, ante leo scelerisque
          tortor, ut elementum est nisl sit amet lectus.
        </h6>

        <HeroSectionAds>
          <HeroSectionAdsItem>
            <HeroSectionAdsText>
              <p className="FontBoldContent">Built for :</p>
            </HeroSectionAdsText>
            <img src={IndustryIcon} alt="" />
          </HeroSectionAdsItem>
          <HeroSectionAdsItem>
            <HeroSectionAdsText>
              <p className="FontBoldContent">Technologies :</p>
              <p>Wordpress</p>
            </HeroSectionAdsText>
            <img src={WordPressIcon} alt="" />
          </HeroSectionAdsItem>
          <HeroSectionAdsItem>
            <HeroSectionAdsText>
              <p className="FontBoldContent">Industry :</p>
              <p>Ecommerce</p>
            </HeroSectionAdsText>
            <img src={EcommerceIcon} alt="" />
          </HeroSectionAdsItem>
        </HeroSectionAds>
      </motion.div>
      <HeroLaptopContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <HeroLaptopImage>
          <HeroLaptopBgImage
            src={LaptopBgImage}
            alt="Laptop Background Image"
          />
        </HeroLaptopImage>
      </HeroLaptopContainer>
    </HeroSectionContainer>
  );
};

const HeroSectionContainer = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${BackgroundImage}) center/cover no-repeat;
  height: 637px;
  width: 100%;
  color: #fff;
  padding-top: 60px;
  position: relative;
  h1 {
    font-size: 60px;
    text-align: center;
    font-weight: 300;
  }
  h6 {
    font-size: 18px;
    padding-top: 25px;
    max-width: 1200px;
    width: 100%;
    display: block;
    text-align: center;
    margin: 0 auto;
    font-weight: 300;
  }
`;
const HeroSectionAds = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`;
const HeroSectionAdsItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  border-right: 1px solid #fff;
  &:last-child {
    border-right: none;
  }
  padding: 0 20px;
  font-weight: 300;
  .FontBoldContent {
    font-weight: 500;
  }
`;
const HeroSectionAdsText = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`;
const HeroLaptopContainer = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding-bottom: 20px;
`;
const HeroLaptopImage = styled.div`
  width: 100%;
  height: 100%;
  width: 850px;
  height: 480px;
  position: relative;
  background: url(${LaptopImage}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const HeroLaptopBgImage = styled.img`
  width: 644px;
  height: 426px;
  background-color: #ffffff;
  border: 2px solid #333333;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default HeroSection;
