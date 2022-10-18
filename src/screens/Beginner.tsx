import styled from 'styled-components';
import { navHeight } from '../components/Header';
import { BsFillPeopleFill } from 'react-icons/bs';
import ShadowBox from '../components/ShadowBox';
import OptionSelect from '../components/OptionSelect';
import StepUpCurriculum from '../components/StepUpCurriculum';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    175deg,
    rgb(63, 135, 252),
    rgb(70, 216, 255) 500px,
    ${(props) => props.theme.cloud} 0
  );
`;
const HeaderTitle = styled.h3`
  margin-top: ${navHeight + 100}px;
  font-size: 3.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.white};
`;
const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 170px;
`;
const FaqRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 200px;
  margin-bottom: 50px;
  svg {
    font-size: 10rem;
    color: ${(props) => props.theme.grayDark};
  }
  img {
    border-radius: 10px;
  }
`;

export default function Biginner() {
  return (
    <Container>
      <HeaderTitle>Beginner Course</HeaderTitle>
      <DescContainer>
        <FaqRow>
          <BsFillPeopleFill />
          <ShadowBox
            width='60%'
            height='100%'
            title={'누구를 위한 수업인가요?'}
            contents={
              <div>
                비기너 코스는 인터넷 바둑 18~10급을 위한 수업입니다.
                <br />
                이론부터 차근차근 배워서 고수에 다가갈 수 있습니다.
              </div>
            }
          />
        </FaqRow>
        <FaqRow>
          <ShadowBox
            width='60%'
            height='100%'
            title={'수업은 어떻게 진행되나요?'}
            contents={
              <div>
                60분~120분으로 진행됩니다.
                <br />
                초급자에게 가장 중요한 부분은 이론입니다.
                <br />
                교재를 활용한 이론공부 {'&&'} 실전 대국으로 진행됩니다.
              </div>
            }
          />
          <img src={require('../img/lesson.png')} alt='' />
        </FaqRow>
        <FaqRow>
          <BsFillPeopleFill />
          <ShadowBox
            width='60%'
            height='100%'
            title={'누가 가르쳐요?'}
            contents={
              <div>
                스텝업은 유머와 실력을 모두 갖춘 선생님들을 보유하고 있습니다.
                <br />
                포인트만 콕콕 짚는 강의로 지루할 틈이 없습니다.
              </div>
            }
          />
        </FaqRow>
      </DescContainer>
      <StepUpCurriculum level='beginner' />
      <OptionSelect courseName='beginner' />
    </Container>
  );
}
