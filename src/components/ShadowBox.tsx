import styled from 'styled-components';
import React from 'react';

interface IShadowBoxProps {
  width: number | string;
  height: number | string;
  title?: JSX.Element | string;
  contents?: JSX.Element | string;
}

const Box = styled.div`
  /* width: 60%;
  height: 100%; */
  padding: 20px;
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.black};
`;
const Contents = styled.div`
  font-size: 1rem;
  line-height: 25px;
`;

const ShadowBox: React.FC<IShadowBoxProps> = ({
  width,
  height,
  title,
  contents,
}) => {
  return (
    <Box style={{ width, height }}>
      <Title>{title}</Title>
      <Contents>{contents}</Contents>
    </Box>
  );
};

export default ShadowBox;
