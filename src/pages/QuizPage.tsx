import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon } from 'lucide-react';

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

const QuizPage = () => {
  const navigate = useNavigate();
  const {
    mode,
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    userAnswers,
    selectAnswer,
    submitQuiz,
    timeRemaining,
    updateTimer,
    isQuizCompleted
  } = useQuiz();

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const userAnswerForCurrent = questions[currentQuestionIndex] ? userAnswers[questions[currentQuestionIndex].id] : null;

  // Timer effect for test mode
  useEffect(() => {
    if (mode !== 'test' || isQuizCompleted) return;

    const timer = setInterval(() => {
      updateTimer(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          submitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [mode, updateTimer, submitQuiz, isQuizCompleted]);

  // Navigate to results page after quiz completion in test mode
  useEffect(() => {
    if (isQuizCompleted && mode === 'test') {
      navigate('/results');
    }
  }, [isQuizCompleted, mode, navigate]);

  // Navigate home if no mode is selected
  if (questions.length === 0 || !mode) {
    useEffect(() => { navigate('/'); }, [navigate]);
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleAnswerSelect = (answer: 'A' | 'B' | 'C' | 'D') => {
    selectAnswer(currentQuestion.id, answer);
  };

  const handleSubmit = () => setShowConfirmModal(true);
  const confirmSubmit = () => {
    setShowConfirmModal(false);
    submitQuiz();
  };
  const cancelSubmit = () => setShowConfirmModal(false);

  return (
      <div className="min-h-screen w-full bg-gray-50 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm py-3 px-4 sticky top-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            {/* NÚT QUAY LẠI TRANG CHỦ */}
            <button
                onClick={() => navigate('/')}
                className="flex items-center px-3 py-2 rounded text-blue-600 hover:bg-blue-50 transition-colors"
                title="Quay lại Trang chủ"
            >
              <HomeIcon className="w-5 h-5" />
              <span className="ml-2 hidden sm:inline">Trang chủ</span>
            </button>

            <div className="text-gray-700 font-medium">
              Câu {currentQuestionIndex + 1} / {questions.length}
            </div>

            {mode === 'test' && (
                <div className="text-lg font-bold text-red-600 w-28 text-center">
                  {formatTime(timeRemaining)}
                </div>
            )}
            {mode === 'practice' && (
                <div className="text-lg font-bold text-green-600 w-28 text-center">Luyện tập</div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6 flex-1 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-6">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 whitespace-pre-wrap">
                Câu {currentQuestionIndex + 1}: {currentQuestion.content}
              </h2>
            </div>
            {/* Options */}
            <div className="space-y-4">
              {Object.entries(currentQuestion.options).map(([key, value]) => {
                const isSelected = userAnswerForCurrent === key;
                const isCorrect = currentQuestion.correctAnswer === key;
                let optionStyle = 'hover:bg-gray-50 border-gray-200';

                if (mode === 'practice' && userAnswerForCurrent) {
                  if (isCorrect) optionStyle = 'bg-green-100 border-green-400 text-green-800 font-semibold';
                  else if (isSelected) optionStyle = 'bg-red-100 border-red-400 text-red-800';
                } else if (isSelected) {
                  optionStyle = 'bg-blue-100 border-blue-400 text-blue-800';
                }

                return (
                    <div key={key} onClick={() => handleAnswerSelect(key as 'A' | 'B' | 'C' | 'D')} className={`p-4 border rounded-lg cursor-pointer transition-colors ${optionStyle}`}>
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm flex-shrink-0 ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
                          {key}
                        </div>
                        <div>{value}</div>
                      </div>
                    </div>
                );
              })}
            </div>

            {/* Explanation for Practice Mode */}
            {mode === 'practice' && userAnswerForCurrent && (
                <div className="mt-6 p-4 bg-blue-50 border-t border-b border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Giải thích:
                  </h4>
                  <p className="text-gray-800">{currentQuestion.explanation}</p>
                </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0} className="flex items-center px-4 py-2 rounded text-blue-600 hover:bg-blue-50 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-transparent">
                <ChevronLeftIcon className="w-5 h-5 mr-1" />
                <span>Câu Trước</span>
              </button>
              <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1} className="flex items-center px-4 py-2 rounded text-blue-600 hover:bg-blue-50 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-transparent">
                <span>Câu Tiếp Theo</span>
                <ChevronRightIcon className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-1/4 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-medium mb-3">Điều hướng câu hỏi</h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((q, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentQuestionIndex(index)}
                        className={`w-full aspect-square flex items-center justify-center rounded cursor-pointer text-sm transition-all ${currentQuestionIndex === index ? 'bg-blue-600 text-white ring-2 ring-blue-400' : userAnswers[q.id] ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      {index + 1}
                    </div>
                ))}
              </div>
            </div>
            {mode === 'test' && !isQuizCompleted && (
                <button onClick={handleSubmit} className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg shadow transition-colors">
                  NỘP BÀI
                </button>
            )}
          </div>
        </main>

        {/* Confirmation Modal for Test Mode */}
        {showConfirmModal && mode === 'test' && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl">
                <h3 className="text-xl font-semibold mb-4">Xác nhận nộp bài</h3>
                <p className="text-gray-600 mb-6">Bạn có chắc chắn muốn nộp bài không?</p>
                <div className="flex justify-end space-x-3">
                  <button onClick={cancelSubmit} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">Hủy</button>
                  <button onClick={confirmSubmit} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Xác nhận</button>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default QuizPage;