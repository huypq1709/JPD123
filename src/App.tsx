import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage'; // Đổi tên import
import ResultsPage from './pages/ResultsPage';
import ReviewPage from './pages/ReviewPage';
import { QuizProvider } from './context/QuizContext';

export function App() {
  return (
      <Router>
        <QuizProvider>
          <div className="w-full min-h-screen bg-gray-50">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quiz" element={<QuizPage />} /> {/* Đổi đường dẫn */}
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/review" element={<ReviewPage />} />
            </Routes>
          </div>
        </QuizProvider>
      </Router>
  );
}