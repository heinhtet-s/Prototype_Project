import React from "react";
import { styled } from "styled-components";
import ChallengeImage from "../assets/images/ChallengeImage.png";
import { CustomButton, CustomLoading } from "./UI";
import { motion } from "framer-motion";
import useFetch from "../service/CustomFetchFunction";
type AboutData =
  | {
      userId: number;
      id: number;
      title: string;
      body: string;
    }[]
  | [];
const Challenge: React.FC = () => {
  const container = {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity: 1,

      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };
  const animateItem = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const { data, error, isLoading } = useFetch<AboutData>("/posts");
  return (
    <ChallengeContainer>
      <ChallengeImageContainer
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <img src={ChallengeImage} alt="" />
      </ChallengeImageContainer>
      <ChallengeContent>
        <h1>
          OUR <span>CHALLENGES</span>
        </h1>
        <ChallengeItemContainer>
          {isLoading ? (
            [...Array(5)].map((_, index) => (
              <CustomLoading key={index} height="60px" width="100%" />
            ))
          ) : error ? (
            <ErrorChallengeMessage>
              <p>{error}</p>
            </ErrorChallengeMessage>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {data.slice(0, 5).map((item) => (
                <ChallengeItem variants={animateItem} key={item.id}>
                  <p>O{item.id}</p>
                  <p>{item.title}</p>
                </ChallengeItem>
              ))}
            </motion.div>
          )}

          <CustomButton text="VIEW MORE" />
        </ChallengeItemContainer>
      </ChallengeContent>
    </ChallengeContainer>
  );
};
const ChallengeContainer = styled.div`
  max-width: 1300px;
  margin: auto;

  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
const ChallengeImageContainer = styled(motion.div)`
  width: 50%;
  padding-right: 20px;
  padding-left: 20px;
  img {
    width: 100%;
  }
`;
const ChallengeContent = styled.div`
  width: 50%;
  padding-right: 50px;
  padding-left: 50px;
  h1 {
    font-size: 36px;
    font-weight: 600;
    span {
      color: var(--secondary-color);
    }
  }
`;
const ChallengeItemContainer = styled.div`
  margin-top: 10px;
  height: 100%;
`;
const ChallengeItem = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3px 10px;

  color: #2dc4ea;
  box-shadow: 0px 3px 10px #0000004d;
  margin-bottom: 20px;
  margin-top: 20px;
  &:first-child {
    background: var(--gradient-color);
    color: var(--white-color);
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 18px;
    font-weight: 300;
    opacity: 1;
    &:first-child {
      font-size: 40px;
      font-weight: 500;
      margin-right: 20px;
      opacity: 0.5;
    }
  }
`;
const ErrorChallengeMessage = styled.div`
  color: red;
  font-size: 30px;
  height: 80%;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export default Challenge;
