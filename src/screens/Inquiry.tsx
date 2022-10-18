import styled from 'styled-components';
import TitleHeader from '../components/TitleHeader';
import { IoIosCall } from 'react-icons/io';
import { RiKakaoTalkFill } from 'react-icons/ri';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const InquiryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 400px;
  margin: 50px auto;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  font-size: 3rem;
  color: #009432;
`;
const KakaoIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: #ffc312;
  color: black;
  border-radius: 30px;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20%;
`;
const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 1.3rem;
`;
const SubTitle = styled.div``;
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
`;
const InquiryBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 60px;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  border-radius: 50px;
  cursor: pointer;
`;

const Inquiry = () => {
  return (
    <Container>
      <TitleHeader title='1:1 문의' contents='상담은 언제나 환영합니다' />
      <InquiryContainer>
        <Box>
          <IconBox>
            <IoIosCall />
          </IconBox>
          <Desc>
            <Title>010-6278-5746 (무료)</Title>
            <SubTitle>10:00 ~ 17:00 상담 가능</SubTitle>
          </Desc>
          <BtnContainer>
            <InquiryBtn href='tel:010-6278-5746'>전화걸기</InquiryBtn>
          </BtnContainer>
        </Box>
        <Box>
          <IconBox>
            <KakaoIcon>
              <RiKakaoTalkFill />
            </KakaoIcon>
          </IconBox>
          <Desc>
            <Title>Step Up 오픈채팅방</Title>
            <SubTitle>24시간 상담 가능</SubTitle>
          </Desc>
          <BtnContainer>
            <InquiryBtn href='tel:010-2471-9342'>전화걸기</InquiryBtn>
          </BtnContainer>
        </Box>
      </InquiryContainer>
    </Container>
  );
};

export default Inquiry;
