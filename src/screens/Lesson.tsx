import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navHeight } from '../components/Header';
import {
  BsFillCheckCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import OverLay, { overLay_z_index } from '../components/OverLay';

interface ICurriculumProps {
  level: 'beginner' | 'middle' | 'semiPro';
}

const Container = styled.div`
  width: 100%;
  height: ${window.innerHeight - navHeight};
  margin-top: ${navHeight}px;
  background-color: ${(props) => props.theme.white};
`;

const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 70px 0;
  background: linear-gradient(
    ${(props) => props.theme.indigo},
    rgba(102, 16, 242, 0.8)
  );
`;
const RecommendTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  font-size: 2rem;
  h1 {
    margin-bottom: 20px;
    color: ${(props) => props.theme.whiteSmoke};
  }
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
`;
const CommentBoxex = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  width: 60%;
  padding-left: 50px;
`;
const CommentBox = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
const ComentContents = styled.div`
  width: 100%;
  height: 80%;
  padding: 20px;
  font-size: 1.1rem;
  color: ${(props) => props.theme.black};
  line-height: 30px;
`;
const Writter = styled.h2`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 1rem;
`;
const RecommendBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 50vh;
  margin: 0 auto;
  color: ${(props) => props.theme.whiteSmoke};
  font-size: 1.3rem;
`;
const CommentRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60%;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
`;
const RecommendComment = styled.h2`
  margin-left: 20px;
`;
const BtnRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
`;
const InquiryBtn = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100px;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.indigo};
  border-radius: 10px;
  cursor: pointer;
`;

const LessonChoose = styled.div`
  position: fixed;
  z-index: ${overLay_z_index + 1};
  top: ${(window.innerHeight - 600) / 2}px;
  left: ${(window.innerWidth - 430) / 2}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  min-width: 430px;
  height: 70%;
  min-height: 600px;
  padding: 30px 0;
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
`;

const Curriculum = styled.div<ICurriculumProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 30%;
  margin: 20px auto;
  padding: 20px;
  background: ${(props) =>
    props.level === 'beginner'
      ? 'linear-gradient(118deg, rgb(63, 135, 252), rgb(70, 216, 255) 100%)'
      : props.level === 'middle'
      ? 'linear-gradient(118deg, rgb(62, 61, 252), rgb(173, 97, 255) 100%)'
      : 'linear-gradient(118deg, rgb(183, 86, 255), rgb(255, 97, 159) 100%)'};
  color: ${(props) => props.theme.whiteSmoke};
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
const CurriculumInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CurriculumName = styled.h1`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
`;
const CurriculumDesc = styled.div``;
const CurriculumMore = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-right: 10px;
    font-size: 1.1rem;
  }
`;

const ClosePopup = styled.button`
  all: unset;
  position: absolute;
  z-index: 10;
  top: 0px;
  right: 0px;
  transform: translate(45%, -45%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.white};
  font-size: 1.2rem;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const commentBoxexVariants: Variants = {
  hidden: { scale: 0, opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.1 },
  },
};
const commentBoxVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Lesson() {
  const [popupOpened, setPopupOpened] = useState(false);
  return (
    <Container>
      <RecommendContainer>
        <RecommendTitle>
          <h1>수강생 100% 만족도</h1>
          <h1>후기로 인증하는 Step Up의 노하우</h1>
        </RecommendTitle>
        <Contents>
          <CommentBoxex
            variants={commentBoxexVariants}
            initial='hidden'
            animate='visible'
          >
            <CommentBox variants={commentBoxVariants}>
              <ComentContents>
                수업만 시작하면 시간가는 줄 모르게돼요.
              </ComentContents>
              <Writter>세미프로 수강생 양민* 님</Writter>
            </CommentBox>
            <CommentBox variants={commentBoxVariants}>
              <ComentContents>
                평생 5단에서 놀 줄 알았는데 선생님 덕분에 처음으로 7단에 올라갈
                수 있었어요.
              </ComentContents>
              <Writter>세미프로 수강생 이상* 님</Writter>
            </CommentBox>
            <CommentBox variants={commentBoxVariants}>
              <ComentContents>
                평생 5단에서 놀 줄 알았는데 선생님 덕분에 처음으로 7단에 올라갈
                수 있었어요.
              </ComentContents>
              <Writter>세미프로 수강생 이상* 님</Writter>
            </CommentBox>
            <CommentBox variants={commentBoxVariants}>
              <ComentContents>
                평생 5단에서 놀 줄 알았는데 선생님 덕분에 처음으로 7단에 올라갈
                수 있었어요.
              </ComentContents>
              <Writter>세미프로 수강생 이상* 님</Writter>
            </CommentBox>
            <CommentBox variants={commentBoxVariants}>
              <ComentContents>
                평생 5단에서 놀 줄 알았는데 선생님 덕분에 처음으로 7단에 올라갈
                수 있었어요.
              </ComentContents>
              <Writter>세미프로 수강생 이상* 님</Writter>
            </CommentBox>
            <CommentBox variants={commentBoxVariants}>
              <ComentContents>
                평생 5단에서 놀 줄 알았는데 선생님 덕분에 처음으로 7단에 올라갈
                수 있었어요.
              </ComentContents>
              <Writter>세미프로 수강생 이상* 님</Writter>
            </CommentBox>
          </CommentBoxex>
          <RecommendBox>
            <CommentRow>
              <div>
                <BsFillCheckCircleFill color='white' />
                <RecommendComment>
                  실력에 맞게 설정하는 커리큘럼
                </RecommendComment>
              </div>
              <div>
                <BsFillCheckCircleFill color='white' />
                <RecommendComment>온라인, 오프라인 모두 가능</RecommendComment>
              </div>
              <div>
                <BsFillCheckCircleFill color='white' />
                <RecommendComment>
                  실력에 맞게 설정하는 커리큘럼
                </RecommendComment>
              </div>
            </CommentRow>
            <BtnRow>
              <InquiryBtn onClick={() => setPopupOpened(true)}>
                레슨 살펴보기
              </InquiryBtn>
            </BtnRow>
          </RecommendBox>
        </Contents>
      </RecommendContainer>
      {popupOpened && (
        <>
          <OverLay />
          <LessonChoose>
            <Curriculum level='beginner'>
              <CurriculumInfo>
                <CurriculumName>Beginner</CurriculumName>
                <CurriculumDesc>18급~5급</CurriculumDesc>
              </CurriculumInfo>
              <CurriculumMore to='beginner'>
                <span>더 알아보기</span>
                <BsFillArrowRightCircleFill />
              </CurriculumMore>
            </Curriculum>
            <Curriculum level='middle'>
              <CurriculumInfo>
                <CurriculumName>Middle</CurriculumName>
                <CurriculumDesc>5급~3단</CurriculumDesc>
              </CurriculumInfo>
              <CurriculumMore to='middle'>
                <span>더 알아보기</span>
                <BsFillArrowRightCircleFill />
              </CurriculumMore>
            </Curriculum>
            <Curriculum level='semiPro'>
              <CurriculumInfo>
                <CurriculumName>Semi Pro</CurriculumName>
                <CurriculumDesc>3단~9단</CurriculumDesc>
              </CurriculumInfo>
              <CurriculumMore to='semi-pro'>
                <span>더 알아보기</span>
                <BsFillArrowRightCircleFill />
              </CurriculumMore>
            </Curriculum>
            <ClosePopup onClick={() => setPopupOpened(false)}>
              <IoCloseSharp />
            </ClosePopup>
          </LessonChoose>
        </>
      )}
    </Container>
  );
}
