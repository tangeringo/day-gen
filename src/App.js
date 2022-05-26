import { Routes, Route } from 'react-router-dom';

import Navigation from './pages/navigation/navigation.component';
import Quiz_Section from './pages/quiz/quiz-overview';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route path="quiz/*" element={<Quiz_Section />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
