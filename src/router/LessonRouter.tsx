import { Route, Routes } from 'react-router-dom';
import Beginner from '../screens/Beginner';
import Lesson from '../screens/Lesson';
import Middle from '../screens/Middle';
import SemiPro from '../screens/SemiPro';

export default function LessonRouter() {
  return (
    <Routes>
      <Route path='' element={<Lesson />} />
      <Route path='beginner' element={<Beginner />} />
      <Route path='middle' element={<Middle />} />
      <Route path='semi-pro' element={<SemiPro />} />
    </Routes>
  );
}
