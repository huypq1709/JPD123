import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { CheckCircleIcon, XCircleIcon, ClipboardListIcon } from 'lucide-react';
const ResultsPage = () => {
  const navigate = useNavigate();
  const {
    isQuizCompleted,
    calculateScore,
    questions
  } = useQuiz();
  useEffect(() => {
    // Nếu người dùng truy cập trang này mà chưa hoàn thành bài thi, chuyển về trang chủ
    if (!isQuizCompleted) {
      navigate('/');
    }
  }, [isQuizCompleted, navigate]);
  const {
    correct,
    incorrect,
    total,
    percentage
  } = calculateScore();
  const unanswered = total - (correct + incorrect);
  const handleReviewAnswers = () => {
    navigate('/review');
  };
  const handleRetakeQuiz = () => {
    navigate('/');
  };
  return <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">Kết Quả Bài Thi</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 flex-1">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              HOÀN THÀNH BÀI THI!
            </h2>
            <p className="text-gray-500">Dưới đây là kết quả của bạn</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
            <div className="p-8 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {correct} / {total}
              </div>
              <div className="text-xl text-gray-600">Điểm của bạn</div>
            </div>
            <div className="w-full h-3 bg-gray-200">
              <div className="h-full bg-blue-600" style={{
              width: `${percentage}%`
            }}></div>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <CheckCircleIcon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-2xl font-semibold">{correct}</div>
                  <div className="text-gray-500">Câu trả lời đúng</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                  <XCircleIcon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <div className="text-2xl font-semibold">{incorrect}</div>
                  <div className="text-gray-500">Câu trả lời sai</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  <div className="text-lg font-medium text-gray-500">?</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">{unanswered}</div>
                  <div className="text-gray-500">Câu chưa trả lời</div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Tỷ lệ chính xác</div>
                  <div className="text-xl font-semibold">{percentage}%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Số câu hỏi</div>
                  <div className="text-xl font-semibold">{total} câu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <button onClick={handleReviewAnswers} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition-colors">
              <ClipboardListIcon className="w-5 h-5 mr-2" />
              Xem Lại Đáp Án & Giải Thích
            </button>
            <button onClick={handleRetakeQuiz} className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg shadow-md border border-gray-200 flex items-center justify-center transition-colors">
              <div className="w-5 h-5 mr-2" />
              Làm Lại Bài Thi
            </button>
          </div>
        </div>
      </main>
    </div>;
};
export default ResultsPage;