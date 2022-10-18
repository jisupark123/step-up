import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

export const overLay_z_index = 10;
const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: default;
`;

const overLayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function OverLay() {
  return (
    <Container variants={overLayVariants} initial='hidden' animate='visible' />
  );
}
