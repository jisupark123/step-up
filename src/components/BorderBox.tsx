import { motion, useAnimation, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';
import { theme } from '../config/theme';
import { overLay_z_index } from './OverLay';

type boxType = 'all' | 'beginner' | 'middle' | 'semiPro';

interface IBorderBoxProps {
  boxType: boxType;
  title: string;
  detail: JSX.Element;
}
interface IContentsBoxProps {
  boxType: boxType;
}
const ContentsBox = styled(motion.div)<IContentsBoxProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 80px;
  color: #6610f2;
  border: 2px solid transparent;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  opacity: 1;
  background: ${(props) =>
    props.boxType === 'all'
      ? ' linear-gradient(#fff, #fff), linear-gradient(118deg, rgb(35, 182, 219), rgb(159, 215, 164) 100%)'
      : props.boxType === 'beginner'
      ? 'linear-gradient(#fff, #fff), linear-gradient(118deg, rgb(63, 135, 252), rgb(70, 216, 255) 100%)'
      : props.boxType === 'middle'
      ? 'linear-gradient(#fff, #fff), linear-gradient(118deg, rgb(62, 61, 252), rgb(173, 97, 255) 100%)'
      : 'linear-gradient(#fff, #fff), linear-gradient(118deg, rgb(183, 86, 255), rgb(255, 97, 159) 100%)'};
  background-origin: border-box;
  background-clip: content-box, border-box;
`;
const OverLay = styled(motion.div)`
  position: fixed;
  z-index: ${overLay_z_index};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: default;
`;

const DetailContainer = styled.div`
  position: fixed;
  z-index: ${overLay_z_index + 1};
  top: ${(window.innerHeight - 600) / 2}px;
  left: ${(window.innerWidth - 430) / 2}px;
  width: 30%;
  min-width: 430px;
  height: 70%;
  min-height: 600px;
  padding: 30px 20px;
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  color: ${(props) => props.theme.black};
  h1 {
    margin-bottom: 20px;
    font-size: 1.3rem;
    font-weight: 600;
  }
  div {
    line-height: 25px;
  }
`;
const ClosePopup = styled.button`
  all: unset;
  position: absolute;
  z-index: 10;
  top: 0px;
  right: 0px;
  transform: translate(-25%, 25%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => props.theme.gray};
  font-size: 1.4rem;
  cursor: pointer;
`;
const overLayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const contentsBoxVariants: Variants = {
  small: { scale: 1, color: theme.indigo },
  big: { scale: 1.1, color: theme.red },
};
const BorderBox: React.FC<IBorderBoxProps> = ({ boxType, title, detail }) => {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const contentsBoxAnimation = useAnimation();
  useEffect(() => {
    if (isHover || isClicked) {
      contentsBoxAnimation.start('big');
    } else {
      contentsBoxAnimation.start('small');
    }
  }, [isHover, isClicked]);
  return (
    <>
      <ContentsBox
        boxType={boxType}
        variants={contentsBoxVariants}
        initial='small'
        animate={contentsBoxAnimation}
        onClick={() => setIsClicked(true)}
        onMouseMove={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {title}
      </ContentsBox>
      {isClicked && (
        <OverLay variants={overLayVariants} initial='hidden' animate='visible'>
          <DetailContainer>
            <ClosePopup onClick={() => setIsClicked(false)}>
              <IoCloseSharp />
            </ClosePopup>
            {detail}
          </DetailContainer>
        </OverLay>
      )}
    </>
  );
};

export default BorderBox;
