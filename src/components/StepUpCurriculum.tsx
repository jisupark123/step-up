import React from 'react';
import styled from 'styled-components';
// import ShadowBox from './ShadowBox';

const contents = {
  beginner: ['초반에 판을 잘 짤 수 있다.', '', ''],
  middle: ['', '', ''],
  semiPro: ['', '', ''],
};

type Level = 'beginner' | 'middle' | 'semiPro';
interface IStepUpCurriculumProps {
  level: Level;
}
interface IStepUpContainerProps {
  level: Level;
}

const StepUpContainer = styled.div<IStepUpContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 600px;
  background: linear-gradient(
    355deg,
    ${(props) =>
        props.level === 'beginner'
          ? 'rgb(65, 157, 253)'
          : props.level === 'middle'
          ? 'rgb(112,77,253)'
          : 'rgb(216,91,211)'}
      600px,
    ${(props) => props.theme.cloud} 0
  );
`;
const StepUpTitle = styled.h1`
  color: ${(props) => props.theme.white};
  margin: 170px 0 50px 0;
  font-size: 1.8rem;
  font-weight: 600;
`;
const Steps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;
const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 150px;
  margin: 0 10px;
  padding: 20px;
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
`;
const StepNum = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;
const Contents = styled.div`
  margin-top: 30px;
`;

const StepUpCurriculum: React.FC<IStepUpCurriculumProps> = ({ level }) => {
  return (
    <StepUpContainer level={level}>
      <StepUpTitle>한발 한발 차근차근 Step Up!</StepUpTitle>
      <Steps>
        {contents[level].map((contents, i) => (
          <Step>
            <StepNum>Step {i + 1}</StepNum>
            <Contents>{contents}</Contents>
          </Step>
        ))}
      </Steps>
    </StepUpContainer>
  );
};

export default StepUpCurriculum;
