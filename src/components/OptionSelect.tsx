import { motion, useAnimation, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { IOptionSettings, optionSettings } from '../utility';
import { navHeight } from './Header';
import { Link } from 'react-router-dom';
import { theme } from '../config/theme';

interface IOptionSelectProps {
  courseName: keyof IOptionSettings;
}
interface OptionBtnProps {
  selected: boolean;
}
interface CheckBtnProps {
  active: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
`;
const HeaderTitle = styled.h2`
  margin-top: 100px;
  font-size: 2.5rem;
`;
const HeaderSubTitle = styled.h3`
  margin-top: 30px;
  font-size: 1.2rem;
`;
const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 200px;
`;
const OptionTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 70px;
  margin-right: 100px;
  border: 2px solid transparent;
  border-radius: 10px;
  background: linear-gradient(#fff, #fff),
    linear-gradient(to right, red 0%, orange 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  font-size: 1.5rem;
`;
const Btns = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const Btn = styled.button<OptionBtnProps>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 30px;
  margin-right: 50px;
  padding: 15px;
  background-color: ${(props) =>
    props.selected ? props.theme.blue : props.theme.white};
  color: ${(props) => (props.selected ? props.theme.white : props.theme.blue)};
  border: 2px solid ${(props) => props.theme.blue};
  border-radius: 50px;
  font-size: 1.2rem;
  opacity: ${(props) => (props.selected ? 1 : 0.5)};
  cursor: pointer;
  :hover {
    opacity: 1;
    transition-duration: 0.3s;
  }
`;
const PriceCheckBtn = styled.button<CheckBtnProps>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 80px;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  border-radius: 50px;
  font-size: 1.5rem;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  cursor: pointer;
`;
const ApplyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
`;
const ApplyBox = styled(motion.div)`
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 400px;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;
const PricePart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const Price = styled.div`
  color: ${(props) => props.theme.black};
  font-size: 3rem;
  font-weight: 600;
`;
const PriceDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
  margin-left: 10px;
  span {
    display: block;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${(props) => props.theme.gray};
  }
`;
const ApplyPart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 65%;
  background-color: ${(props) => props.theme.indigo};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const ApplyDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: ${(props) => props.theme.white};
  font-size: 1.3rem;
`;
const InquiryBtn = styled(Link)`
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 80px;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.indigo};
  font-size: 1.5rem;
  border-radius: 8px;
  cursor: pointer;
`;
const applyBoxVariants: Variants = {
  initial: { display: 'none' },
  animate: { display: 'flex' },
};

const OptionSelect: React.FC<IOptionSelectProps> = ({ courseName }) => {
  const [option1, setOption1] = useState<number | null>(null);
  const isOnline = option1 === 0;
  const [option2, setOption2] = useState<number | null>(null);
  const [option3, setOption3] = useState<number | null>(null);
  const [prevPrice, setPrevPrice] = useState<number | null>(null);
  const [newPrice, setNewPrice] = useState<number | null>(null);
  const [active, setActive] = useState(false);
  const applyBoxAnimation = useAnimation();
  function selectBtn(setOption: Function, index: number) {
    setOption(index);
  }
  useEffect(() => {
    if (isOnline) setOption3(0);
    if (option1 === null || option2 === null || option3 === null) return;
    setActive(true);
    const basicPay =
      optionSettings[courseName].option1[option1].hourlyPay *
      optionSettings[courseName].option2[option2].times;
    const basicDiscount = optionSettings[courseName].option2[option2].discount;
    const groupDiscount =
      optionSettings[courseName].option3[option3].discount || 0;
    setNewPrice((basicPay * (1 - basicDiscount) - groupDiscount) * 4);
  }, [option1, option2, option3]);
  const checkPriceBtnClicked = () => {
    if (!active) return;
    if (prevPrice === null) applyBoxAnimation.start('animate');
    setPrevPrice(newPrice);
    setActive(false);
  };
  return (
    <Container>
      <Header>
        <HeaderTitle>Smart Selector</HeaderTitle>
        <HeaderSubTitle>원하는 옵션의 가격을 확인해보세요</HeaderSubTitle>
      </Header>
      <OptionContainer>
        <Row>
          <OptionTitle>Option 1</OptionTitle>
          <Btns>
            {optionSettings[courseName].option1.map((option) => {
              const index = optionSettings[courseName].option1.indexOf(option);
              return (
                <Btn
                  key={index}
                  selected={option1 === index}
                  onClick={() => selectBtn(setOption1, index)}
                >
                  {option.title}
                </Btn>
              );
            })}
          </Btns>
        </Row>
        <Row>
          <OptionTitle>Option 2</OptionTitle>
          <Btns>
            {optionSettings[courseName].option2.map((option) => {
              const index = optionSettings[courseName].option2.indexOf(option);
              return (
                <Btn
                  key={index}
                  selected={option2 === index}
                  onClick={() => selectBtn(setOption2, index)}
                >
                  {option.title}
                </Btn>
              );
            })}
          </Btns>
        </Row>
        <Row>
          <OptionTitle>Option 3</OptionTitle>
          <Btns>
            {optionSettings[courseName].option3.map((option) => {
              const index = optionSettings[courseName].option3.indexOf(option);

              return (
                (!isOnline || index !== 1) && (
                  <Btn
                    key={index}
                    selected={option3 === index}
                    onClick={() => selectBtn(setOption3, index)}
                  >
                    {option.title}
                  </Btn>
                )
              );
            })}
          </Btns>
        </Row>
      </OptionContainer>
      <ScrollLink
        to={active ? 'priceCheckBtn' : ''}
        smooth
        offset={-navHeight - 30}
        duration={500}
      >
        <PriceCheckBtn
          id='priceCheckBtn'
          active={active}
          onClick={checkPriceBtnClicked}
        >
          가격 확인하기
        </PriceCheckBtn>
      </ScrollLink>
      <ApplyContainer>
        <ApplyBox
          variants={applyBoxVariants}
          initial='initial'
          animate={applyBoxAnimation}
        >
          <PricePart>
            <Price>월 {prevPrice}</Price>
            <PriceDesc>
              <span>원</span>
              {!isOnline && <span>(교재비 포함)</span>}
            </PriceDesc>
          </PricePart>
          <ApplyPart>
            <ApplyDesc>상담은 100% 무료입니다.</ApplyDesc>
            <InquiryBtn to='/inquiry'>상담하기</InquiryBtn>
          </ApplyPart>
        </ApplyBox>
      </ApplyContainer>
    </Container>
  );
};

export default OptionSelect;
