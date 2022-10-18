import styled from 'styled-components';
import BorderBox from '../components/BorderBox';
import { navHeight } from '../components/Header';

const lessonWays = {
  onlineLesson: {
    title: '온라인 레슨',
    detail: (
      <>
        <h1>온라인 레슨</h1>
        <div>타이젬과 줌(zoom)을 활용한 비대면 수업입니다.</div>
      </>
    ),
  },
  offlineLesson: {
    title: '오프라인 레슨',
    detail: (
      <>
        <h1>오프라인 레슨</h1>
        <div>
          대면으로 진행하는 수업입니다.
          <br />
          오프라인 레슨에서는 1:1 레슨과 그룹 레슨 중 선택할 수 있습니다.
        </div>
      </>
    ),
  },
  manToManLesson: {
    title: '1:1 레슨',
    detail: (
      <>
        <h1>1:1 레슨</h1>
        <div>
          일대일로 진행하는 수업입니다. 실력을 빨리 키우고 싶은 분들께 추천하는
          방식입니다.
        </div>
      </>
    ),
  },
  groupLesson: {
    title: '그룹 레슨',
    detail: (
      <>
        <h1>그룹 레슨</h1>
        <div>
          2명 ~ 4명이 같이 진행하는 수업입니다. 사람이 많은 만큼 더 좋은 분위기
          속에서 수업할 수 있습니다.
        </div>
      </>
    ),
  },
  game: {
    title: '대국 & 복기',
    detail: (
      <>
        <h1>대국 {'&'} 복기</h1>
        <div>
          최소 준프로급의 강자와 대국할 수 있는 절호의 기회입니다. 끝나고
          복기까지 진행됩니다.
        </div>
      </>
    ),
  },
  gameOf13Line: {
    title: '13줄 대국',
    detail: (
      <>
        <h1>13줄 대국</h1>
        <div>
          스텝업에서 고안한 초급자에게 효과적인 공부 방법입니다. 대국 시간이
          짧아서 재미있게 즐길 수 있고 수읽기에 더 집중할 수 있습니다.
        </div>
      </>
    ),
  },
  textbook: {
    title: '교재',
    detail: (
      <>
        <h1>교재</h1>
        <div>
          인터넷 바둑 18급 ~ 1급에 해당되는 수업입니다. 초급자에게 가장 중요한
          부분은 이론입니다. 다양한 문제를 풀어보면서 재미있게 공부할 수
          있습니다.
        </div>
      </>
    ),
  },
  review: {
    title: '개인 바둑 복기',
    detail: (
      <>
        <h1>개인 바둑 복기</h1>
        <div>
          고급반에게 해당되는 수업입니다. 개인적으로 둔 바둑 중 하나를 뽑아서
          복기하는 방법입니다. 포인트만 콕콕 짚는 강의로 효과적이고 재미있게
          공부할 수 있습니다.
        </div>
      </>
    ),
  },
  studyProBaduk: {
    title: '프로기보 분석 & 연구',
    detail: (
      <>
        <h1>프로기보 분석 {'&'} 연구</h1>
        <div>
          고급반에게 해당되는 수업입니다. 박정환, 신진서등 고수가 둔 바둑을 같이
          연구하면서 프로기사들의 호흡을 느껴볼 수 있습니다.
        </div>
      </>
    ),
  },
};

const curriculums = {
  all: [
    lessonWays.onlineLesson,
    lessonWays.offlineLesson,
    lessonWays.manToManLesson,
    lessonWays.groupLesson,
  ],
  beginner: [lessonWays.game, lessonWays.gameOf13Line, lessonWays.textbook],
  middle: [lessonWays.game, lessonWays.review],
  semiPro: [lessonWays.game, lessonWays.studyProBaduk],
};

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  height: 90vh;
  margin-top: ${navHeight}px;
  background-color: #f0f0f5;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  :first-child > h1 {
    background: linear-gradient(
      118deg,
      rgb(35, 182, 219),
      rgb(159, 215, 164) 100%
    );
  }
  &:nth-child(2) > h1 {
    background: linear-gradient(
      96deg,
      rgb(63, 135, 252),
      rgb(70, 216, 255) 100%
    );
  }
  :nth-child(3) > h1 {
    background: linear-gradient(
      118deg,
      rgb(62, 61, 252),
      rgb(173, 97, 255) 100%
    );
  }
  :nth-child(4) > h1 {
    background: linear-gradient(
      118deg,
      rgb(183, 86, 255),
      rgb(255, 97, 159) 100%
    );
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  color: ${(props) => props.theme.white};
  font-size: 1.3rem;
  border-radius: 10px;
`;

export default function WayOfLesson() {
  return (
    <Container>
      <Row>
        <Title>All</Title>
        {curriculums.all.map((obj, i) => (
          <BorderBox
            key={i}
            boxType='all'
            title={obj.title}
            detail={obj.detail}
          >
            {obj.title}
          </BorderBox>
        ))}
      </Row>
      <Row>
        <Title>Beginner</Title>
        {curriculums.beginner.map((obj, i) => (
          <BorderBox
            key={i}
            boxType='beginner'
            title={obj.title}
            detail={obj.detail}
          >
            {obj.title}
          </BorderBox>
        ))}
      </Row>
      <Row>
        <Title>Middle</Title>
        {curriculums.middle.map((obj, i) => (
          <BorderBox
            key={i}
            boxType='middle'
            title={obj.title}
            detail={obj.detail}
          >
            {obj.title}
          </BorderBox>
        ))}
      </Row>
      <Row>
        <Title>Semi Pro</Title>
        {curriculums.semiPro.map((obj, i) => (
          <BorderBox
            key={i}
            boxType='semiPro'
            title={obj.title}
            detail={obj.detail}
          >
            {obj.title}
          </BorderBox>
        ))}
      </Row>
    </Container>
  );
}
