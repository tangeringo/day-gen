import { Routes, Route } from 'react-router-dom';
import First_Quiz_Page from '../../components/quiz/1-st.quiz-page/1-st.quiz-page.component';

const Quiz_Section = () => {
    return (
        <Routes>
            
            <Route index element={<First_Quiz_Page />} /> 
        </Routes>
    )
}

export default Quiz_Section;
// path='quiz-outro-page'