import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { atom, useSetRecoilState } from 'recoil';

type TMenu =
  | string
  | '/'
  | '/intro'
  | '/activity'
  | '/lesson'
  | '/way-of-lesson'
  | '/qna'
  | '/inquiry';

interface IOptions {
  name: string;
  option1: { title: string; hourlyPay: number }[];
  option2: { title: string; times: number; discount: number }[];
  option3: { title: string; discount?: number }[];
}

export interface IOptionSettings {
  beginner: IOptions;
  middle: IOptions;
  semiPro: IOptions;
}

export const selectedMenuAtom = atom<TMenu>({
  key: 'selectedMenu',
  default: '/',
});

export const optionSettings: IOptionSettings = {
  beginner: {
    name: 'beginner',
    option1: [
      { title: '온라인', hourlyPay: 30000 },
      { title: '오프라인', hourlyPay: 50000 },
    ],
    option2: [
      { title: '주 1회 / 1시간', times: 1, discount: 0.03 },
      { title: '주 1회 / 2시간', times: 2, discount: 0.06 },
      { title: '주 2회 / 1시간', times: 2, discount: 0.06 },
      { title: '주 2회 / 2시간', times: 4, discount: 0.1 },
    ],
    option3: [{ title: '1:1 레슨' }, { title: '그룹 레슨', discount: 20000 }],
  },
  middle: {
    name: 'middle',
    option1: [
      { title: '온라인', hourlyPay: 30000 },
      { title: '오프라인', hourlyPay: 50000 },
    ],
    option2: [
      { title: '주 1회 / 1시간', times: 1, discount: 0.03 },
      { title: '주 1회 / 2시간', times: 2, discount: 0.06 },
      { title: '주 2회 / 1시간', times: 2, discount: 0.06 },
      { title: '주 2회 / 2시간', times: 4, discount: 0.1 },
    ],
    option3: [{ title: '1:1 레슨' }, { title: '그룹 레슨', discount: 20000 }],
  },
  semiPro: {
    name: 'semiPro',
    option1: [
      { title: '온라인', hourlyPay: 30000 },
      { title: '오프라인', hourlyPay: 50000 },
    ],
    option2: [
      { title: '주 1회 / 1시간', times: 1, discount: 0.03 },
      { title: '주 1회 / 2시간', times: 2, discount: 0.06 },
      { title: '주 2회 / 1시간', times: 2, discount: 0.06 },
      { title: '주 2회 / 2시간', times: 4, discount: 0.1 },
    ],
    option3: [{ title: '1:1 레슨' }, { title: '그룹 레슨', discount: 20000 }],
  },
};

export const HandleUrlChange = () => {
  const { pathname } = useLocation();
  const setSelectedMenu = useSetRecoilState(selectedMenuAtom);
  useEffect(() => {
    setSelectedMenu(pathname);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};
