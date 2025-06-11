import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { ChevronDownIcon, ChevronUpIcon, HomeIcon } from 'lucide-react';
const ReviewPage = () => {
  const navigate = useNavigate();
  const {
    questions,
    userAnswers
  } = useQuiz();
  const [filter, setFilter] = useState<'all' | 'correct' | 'incorrect'>('all');
  const [expandedExplanations, setExpandedExplanations] = useState<Record<number, boolean>>({});
  const toggleExplanation = (questionId: number) => {
    setExpandedExplanations(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };
  const filteredQuestions = questions.filter(question => {
    if (filter === 'all') return true;
    if (filter === 'correct') return userAnswers[question.id] === question.correctAnswer;
    if (filter === 'incorrect') return userAnswers[question.id] !== question.correctAnswer && userAnswers[question.id] !== undefined;
    return true;
  });
  return <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Ôn Tập & Giải Thích
          </h1>
          <button onClick={() => navigate('/')} className="flex items-center text-blue-600 hover:text-blue-800">
            <HomeIcon className="w-5 h-5 mr-1" />
            <span>Trang Chủ</span>
          </button>
        </div>
      </header>
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-wrap gap-2">
          <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-md ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Xem Tất Cả
          </button>
          <button onClick={() => setFilter('correct')} className={`px-4 py-2 rounded-md ${filter === 'correct' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Chỉ Xem Câu Đúng
          </button>
          <button onClick={() => setFilter('incorrect')} className={`px-4 py-2 rounded-md ${filter === 'incorrect' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            Chỉ Xem Câu Sai
          </button>
        </div>
      </div>
      <main className="container mx-auto px-4 pb-12 flex-1">
        <div className="max-w-3xl mx-auto space-y-6">
          {filteredQuestions.length === 0 ? <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <p className="text-gray-500">
                Không có câu hỏi nào phù hợp với bộ lọc đã chọn.
              </p>
            </div> : filteredQuestions.map(question => {
          const userAnswer = userAnswers[question.id];
          const isCorrect = userAnswer === question.correctAnswer;
          const isAnswered = userAnswer !== undefined;
          return <div key={question.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-medium">Câu {question.id}</h3>
                      {isAnswered && <div className={`px-3 py-1 rounded-full text-sm ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {isCorrect ? 'Đúng' : 'Sai'}
                        </div>}
                    </div>
                    <p className="text-gray-800 mb-6">{question.content}</p>
                    <div className="space-y-3 mb-6">
                      {Object.entries(question.options).map(([key, value]) => <div key={key} className={`p-3 border rounded-lg flex items-center ${key === question.correctAnswer ? 'bg-green-50 border-green-200' : userAnswer === key && userAnswer !== question.correctAnswer ? 'bg-red-50 border-red-200' : 'border-gray-200'}`}>
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center mr-3 ${key === question.correctAnswer ? 'bg-green-600 text-white' : userAnswer === key && userAnswer !== question.correctAnswer ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
                            {key}
                          </div>
                          <div>{value}</div>
                        </div>)}
                    </div>
                    <button onClick={() => toggleExplanation(question.id)} className="flex items-center text-blue-600 hover:text-blue-800">
                      {expandedExplanations[question.id] ? <>
                          <ChevronUpIcon className="w-5 h-5 mr-1" />
                          <span>Ẩn giải thích</span>
                        </> : <>
                          <ChevronDownIcon className="w-5 h-5 mr-1" />
                          <span>Xem giải thích</span>
                        </>}
                    </button>
                  </div>
                  {expandedExplanations[question.id] && <div className="p-6 bg-blue-50 border-t border-blue-100">
                      <h4 className="font-medium text-blue-800 mb-2">
                        Giải thích:
                      </h4>
                      <p className="text-gray-800">{question.explanation}</p>
                    </div>}
                </div>;
        })}
        </div>
      </main>
    </div>;
};
export default ReviewPage;