import styled from 'styled-components';
import { motion, useAnimation, Variants } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Menus = {
  intro: {
    main: 'Intro',
    sub: [
      { title: 'Why Step Up?', url: '/intro' },
      { title: '스텝업의 활동', url: '/activity' },
    ],
  },
  lesson: {
    main: 'Lesson',
    sub: [
      { title: '실력별 레슨', url: '/lesson' },
      { title: '수업 진행 방식', url: '/way-of-lesson' },
    ],
  },
  qna: {
    main: 'Q&A',
    sub: [
      { title: '자주하는 질문', url: '/qna' },
      { title: '1:1 상담하기', url: '/inquiry' },
    ],
  },
};

interface IItemsProps {
  selected?: boolean;
}
export const navHeight = 70;

const Nav = styled(motion.nav)`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  height: ${navHeight}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 15%; */
  margin-left: 20px;
  color: ${(props) => props.theme.purple};
  font-size: 2rem;
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  width: 80%;
  height: 100%;
  padding-left: 100px;
`;
const Item = styled.li<IItemsProps>`
  display: flex;
  align-items: center;
  width: 150px;
  padding-left: 70px;
  font-size: 0.9rem;
  color: ${(props) => (props.selected ? props.theme.blue : props.theme.gray)};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: ${(props) =>
      props.selected ? props.theme.blue : props.theme.grayDark};
  }
`;
const SubNav = styled(motion.div)`
  position: fixed;
  z-index: 100;
  top: ${navHeight}px;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
const FakeDiv = styled.div`
  width: 15%;
`;
const SubMenu = styled.div`
  display: flex;
  width: 72%;
  height: 100%;
`;
const SubItems = styled.ul`
  display: flex;
  flex-direction: column;
  width: 170px;
  padding: 20px 0 0 20px;
  &:hover {
    background-color: ${(props) => props.theme.bgColor};
  }
`;
const SubItem = styled.li<IItemsProps>`
  margin-bottom: 20px;
  font-size: 0.9rem;
  color: ${(props) =>
    props.selected ? props.theme.blue : props.theme.grayDark};
  font-weight: ${(props) => (props.selected ? 600 : 'inherit')};
  cursor: pointer;
  &:hover {
    font-weight: 600;
    color: ${(props) =>
      props.selected ? props.theme.blue : props.theme.grayDark};
  }
`;

const subMenuVariants: Variants = {
  initial: { scaleY: 0, transformOrigin: 'top' },
  hover: { scaleY: 1 },
};

export default function Header() {
  const { pathname } = useLocation();
  const subMenuAnimation = useAnimation();
  const toggleSubMenu = (direction: 'up' | 'down') => {
    subMenuAnimation.start(direction === 'down' ? 'hover' : 'initial');
  };

  return (
    <>
      <Nav>
        <Link to='/'>
          <Logo>Step Up</Logo>
        </Link>
        <Menu
          onMouseEnter={() => toggleSubMenu('down')}
          onMouseLeave={() => toggleSubMenu('up')}
        >
          <Link to={Menus.intro.sub[0].url}>
            <Item
              selected={
                pathname === Menus.intro.sub[0].url ||
                pathname === Menus.intro.sub[1].url
              }
            >
              {Menus.intro.main}
            </Item>
          </Link>
          <Link to={Menus.lesson.sub[0].url}>
            <Item
              selected={
                pathname === Menus.lesson.sub[0].url ||
                pathname === Menus.lesson.sub[1].url
              }
            >
              {Menus.lesson.main}
            </Item>
          </Link>
          <Link to={Menus.qna.sub[0].url}>
            <Item
              selected={
                pathname === Menus.qna.sub[0].url ||
                pathname === Menus.qna.sub[1].url
              }
            >
              {Menus.qna.main}
            </Item>
          </Link>
        </Menu>
      </Nav>
      <SubNav
        onMouseEnter={() => toggleSubMenu('down')}
        onMouseLeave={() => toggleSubMenu('up')}
        variants={subMenuVariants}
        initial='initial'
        animate={subMenuAnimation}
        transition={{ duration: 0.3 }}
      >
        <FakeDiv />
        <SubMenu>
          <SubItems>
            <Link to={Menus.intro.sub[0].url}>
              <SubItem selected={pathname === Menus.intro.sub[0].url}>
                {Menus.intro.sub[0].title}
              </SubItem>
            </Link>
            <Link to={Menus.intro.sub[1].url}>
              <SubItem selected={pathname === Menus.intro.sub[1].url}>
                {Menus.intro.sub[1].title}
              </SubItem>
            </Link>
          </SubItems>
          <SubItems>
            <Link to={Menus.lesson.sub[0].url}>
              <SubItem selected={pathname === Menus.lesson.sub[0].url}>
                {Menus.lesson.sub[0].title}
              </SubItem>
            </Link>
            <Link to={Menus.lesson.sub[1].url}>
              <SubItem selected={pathname === Menus.lesson.sub[1].url}>
                {Menus.lesson.sub[1].title}
              </SubItem>
            </Link>
          </SubItems>
          <SubItems>
            <Link to={Menus.qna.sub[0].url}>
              <SubItem selected={pathname === Menus.qna.sub[0].url}>
                {Menus.qna.sub[0].title}
              </SubItem>
            </Link>
            <Link to={Menus.qna.sub[1].url}>
              <SubItem selected={pathname === Menus.qna.sub[1].url}>
                {Menus.qna.sub[1].title}
              </SubItem>
            </Link>
          </SubItems>
        </SubMenu>
      </SubNav>
    </>
  );
}
