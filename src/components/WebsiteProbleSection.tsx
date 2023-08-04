import React, { useState } from "react";
import { styled } from "styled-components";
import smartphone from "../assets/images/smartphone.svg";
import ArrowRight from "../assets/images/arrow.svg";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import WPSlideImage from "../assets/images/WPSlideImage.png";
import WPSlideImage1 from "../assets/images/WPSlideImage1.png";
import PhoneSlide from "../assets/images/PhoneSlide.png";
import PhoneSlide1 from "../assets/images/PhoneSlide1.png";
import phoneSlide2 from "../assets/images/PhoneSlide2.png";
import phoneSlide3 from "../assets/images/PhoneSlide3.png";
import SlideLaptop from "../assets/images/SlideLaptop.png";
import SlidePhoneBg from "../assets/images/Iphone.png";
import { motion } from "framer-motion";
type SliderProps = {
  isChecked: boolean;
};
type TextProps = {
  show: boolean;
};
const container = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    x: -150,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};
const WebsiteProbleSection: React.FC = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <WebsiteProbleSectionContainer>
      <WebsiteSlide
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <DesktopContentContainer isChecked={isChecked}>
          <DesktopImage1 src={WPSlideImage} alt="Website Slide" />
          <DesktopBg>
            <DesktopImage src={SlideLaptop} alt="Website Slide" />
            <DesktopContent src={WPSlideImage1} alt="Website Slide" />
          </DesktopBg>
        </DesktopContentContainer>
        <MobileContentContainer isChecked={isChecked}>
          <MobileImage src={PhoneSlide} alt="Website Slide" />
          <MobileImage src={PhoneSlide1} alt="Website Slide" />
          <MobileImage src={phoneSlide2} alt="Website Slide" />
          <MobileBg>
            <MobileImage src={SlidePhoneBg} alt="Website Slide" />
            <MobileContent src={phoneSlide3} alt="Website Slide" />
          </MobileBg>
        </MobileContentContainer>
      </WebsiteSlide>
      <WebsiteSlideContent>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h1 variants={item}>Their Old Website & Problems</motion.h1>
          <WebsiteSlideContentList variants={item}>
            <ArrowRightIcon src={ArrowRight} alt="Arrow Right" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              esse officiis nobis mollitia minus asperiores expedita? Assumenda
              maxime
            </p>
          </WebsiteSlideContentList>
          <WebsiteSlideContentList variants={item}>
            <ArrowRightIcon src={ArrowRight} alt="Arrow Right" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              esse officiis nobis mollitia minus asperiores expedita? Assumenda
              maxime
            </p>
          </WebsiteSlideContentList>
          <WebsiteSlideContentList variants={item}>
            <ArrowRightIcon src={ArrowRight} alt="Arrow Right" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              esse officiis nobis mollitia minus asperiores expedita? Assumenda
              maxime
            </p>
          </WebsiteSlideContentList>
        </motion.div>
        <SideNavContainer>
          <MdArrowBackIosNew size={25} />
          <MdArrowForwardIos size={25} />
        </SideNavContainer>

        <ToggleSwitchWrapper onClick={handleToggle}>
          <Text show={isChecked}>Desktop</Text>
          <PhoneIcon src={smartphone} alt="Phone Icon" show={!isChecked} />
          <Slider isChecked={isChecked}>
            <Thumb isChecked={isChecked} />
          </Slider>
          <PhoneText show={!isChecked}>Mobile</PhoneText>
        </ToggleSwitchWrapper>
      </WebsiteSlideContent>
    </WebsiteProbleSectionContainer>
  );
};
export default WebsiteProbleSection;
const WebsiteProbleSectionContainer = styled.div`
  display: flex;
  margin-top: 100px;
`;
const WebsiteSlide = styled(motion.div)`
  position: relative;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  // transform: translateX(-330px);
`;
const DesktopImage1 = styled.img`
  display: block;
  height: 85%;
`;
const WebsiteSlideContent = styled.div`
  width: 60%;
  padding-top: 40px;
  padding-right: 40px;
  padding-left: 270px;
  background: transparent linear-gradient(116deg, #3ae7ab 0%, #2dc4ea 100%) 0%
    0% no-repeat padding-box;

  color: var(--white-color);
  @media (min-width: 1500px) {
    padding-left: 320px;
  }
  h1 {
    font-size: 36px;
    margin-bottom: 50px;
  }
  p {
    font-size: 18px;
  }
`;
const DesktopContentContainer = styled.div<SliderProps>`
  position: absolute;
  height: 100%;
  display: flex;
  transition: right 0.5s ease-in-out;
  right: ${(props) => (props.isChecked ? "-40%" : "200%")};
  @media (min-width: 1500px) {
    right: ${(props) => (props.isChecked ? "-36%" : "200%")};
  }
`;
const WebsiteSlideContentList = styled(motion.div)`
  display: flex;
  margin-bottom: 25px;
  font-size: 18px;
`;
const DesktopBg = styled.div`
  width: 490px;

  height: 102%;
  transform: translateY(-5px);
  position: relative;
  @media (min-width: 1500px) {
    width: 580px;
  }
`;
const DesktopContent = styled.img`
  width: 96%;
  height: 75%;
  position: absolute;
  top: 15px;
  border-radius: 10px;
  left: 12px;
`;
const DesktopImage = styled.img`
  width: 100%;
  height: 100%;
`;
const MobileContentContainer = styled.div<SliderProps>`
  position: absolute;
  height: 100%;
  display: flex;
  transition: right 0.5s ease-in-out;
  right: ${(props) => (!props.isChecked ? "-37%" : "200%")};
  @media (min-width: 1500px) {
    right: ${(props) => (!props.isChecked ? "-36%" : "200%")};
  }
`;
const MobileImage = styled.img`
  display: block;
  height: 100%;
  width: 230px;
  @media (min-width: 1500px) {
    width: 300px;
  }
`;
const MobileBg = styled.div`
  height: 102%;
  transform: translate(-6px, -5px);
  position: relative;
`;
const MobileContent = styled.img`
  width: 91%;
  height: 77%;
  position: absolute;
  top: 69px;
  left: 11px;
  @media (min-width: 1500px) {
    top: 60px;
  }
`;

const ArrowRightIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;
const SideNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 50px;
`;

const ToggleSwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  margin-left: 50px;
  width: 214px;
  height: 37px;
  cursor: pointer;
`;
const PhoneIcon = styled.img<TextProps>`
  position: absolute;
  top: 50%;
  z-index: 1;
  user-select: none;
  left: 40px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  transition: opacity 0.5s;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

const Slider = styled.span<SliderProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-color);
  border-radius: 34px;
  cursor: pointer;
`;

const Thumb = styled.span<SliderProps>`
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 8px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.5s;
  transform: ${({ isChecked }) =>
    isChecked ? "translateX(170px)" : "translateX(10px)"};
`;

const Text = styled.span<TextProps>`
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  color: #fff;
  z-index: 1;
  color: var(--white-color);
  font-weight: 600;
  transition: opacity 0.5s;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
const PhoneText = styled.span<TextProps>`
  position: absolute;
  top: 50%;
  font-weight: 600;
  left: 65px;
  color: #fff;
  transition: opacity 0.5s;
  transform: translateY(-50%);
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
