import { keyframes, styled } from "styled-components";

type ButtonProps = {
  text: string;
};
type CustomLoadingProps = {
  height: string;
  width: string;
};
export const CustomButton: React.FC<ButtonProps> = ({ text }) => {
  return <CustomButtonContainer>{text}</CustomButtonContainer>;
};
export const CustomLoading: React.FC<CustomLoadingProps> = ({
  height,
  width,
}) => {
  return <CustomLoadingContainer height={height} width={width} />;
};
const shine = keyframes`
    to {
        background-position-x: -200%;
    } 
`;
const CustomLoadingContainer = styled.div<CustomLoadingProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 2px;
  margin: 20px 0;
  background-size: 200% 100%;
  animation: 1.5s ${shine} linear infinite;
`;

const CustomButtonContainer = styled.button`
  background: var(--gradient-color);
  color: var(--white-color);
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 50px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  user-select: none;
  align-items: center;
`;
