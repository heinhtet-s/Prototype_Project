import React from "react";
import { styled } from "styled-components";
import { CustomButton } from "./UI";
import AboutTablet from "../assets/images/AboutTablet.png";
import AboutTabletBg from "../assets/images/AboutTabletBg.png";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutContent
        initial={{ x: -150, opacity: 0, scale: 0.7 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1>
          About <span>TRIPPRO</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          aspernatur tempora veniam quod delectus ipsa iusto nobis! Quam
          deserunt earum incidunt ipsa ullam nostrum voluptatum provident. A at
          quisquam qui. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus, eos quis? Neque dolorem molestiae aliquam, eius similique
        </p>
        <CustomButton text="TOUR TO WEBSITE" />
      </AboutContent>
      <AboutImage
        initial={{ x: 150, opacity: 0, scale: 0.7 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img src={AboutTablet} alt="" />
        <AboutBackgroundCircle>
          <img src={AboutTabletBg} alt="" />
        </AboutBackgroundCircle>
      </AboutImage>
    </AboutContainer>
  );
};
const AboutContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
  }

  .dash {
    position: absolute;
    width: 8px;
    height: 2px;
    background-color: #000;
    top: 50%;
  }
  .circle-loader {
    display: inline-block;
    position: relative;
    width: 50px;
    height: 50px;
  }
`;
const AboutContent = styled(motion.div)`
  width: 50%;
  padding-right: 50px;
  padding-left: 50px;
  h1 {
    font-size: 36px;
    font-weight: 600;
    display: inline-block;
    position: relative;
    height: fit-content;

    span {
      color: var(--secondary-color);
    }
    &:after {
      content: "";
      display: block;
      width: 50%;
      height: 3px;
      background: var(--secondary-color);
      position: absolute;
      bottom: -7px;
      left: 0;
    }
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--color-black);
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;
const AboutImage = styled(motion.div)`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  img {
    width: 370px;
    height: 500px;
  }
`;
const AboutBackgroundCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;

  z-index: -1;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    height: 100%;
  }
`;

export default About;
