import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../screens/Home';
import WayOfLesson from '../screens/WayOfLesson';
import LessonRouter from './LessonRouter';
import Qna from '../screens/Qna';
import { HandleUrlChange } from '../utility';
import Inquiry from '../screens/Inquiry';

export default function Router() {
  return (
    <BrowserRouter>
      <HandleUrlChange />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lesson*' element={<LessonRouter />} />
        <Route path='/way-of-lesson' element={<WayOfLesson />} />
        <Route path='/qna' element={<Qna />} />
        <Route path='/inquiry' element={<Inquiry />} />
      </Routes>
    </BrowserRouter>
  );
}
