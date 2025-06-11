import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { BookOpenIcon, ClockIcon, PencilIcon, ZapIcon, EditIcon } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const { startQuiz } = useQuiz();

  const handleStartPractice = () => {
    startQuiz('practice'); // Bắt đầu chế độ luyện tập
    navigate('/quiz');
  };

  const handleStartTest = () => {
    startQuiz('test'); // Bắt đầu chế độ thi thử
    navigate('/quiz');
  };

  return (
      <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 to-white flex flex-col items-center">
        <header className="w-full bg-white shadow-sm py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-800">Luyện Thi Tiếng Nhật</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 flex-1 flex flex-col items-center">
          <div className="max-w-3xl w-full text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Chọn chế độ của bạn
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Luyện tập không giới hạn hoặc thử sức với bài thi mô phỏng.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Chế độ Luyện tập */}
              <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
                <EditIcon className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-700 mb-3">Chế độ Luyện tập</h3>
                <p className="text-gray-500 mb-6 text-center h-24">
                  Ôn luyện toàn bộ 82 câu hỏi. Xem đáp án và giải thích ngay lập tức. Không giới hạn thời gian.
                </p>
                <button
                    onClick={handleStartPractice}
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-medium py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  Bắt đầu Luyện tập
                </button>
              </div>

              {/* Chế độ Thi thử */}
              <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
                <ZapIcon className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-700 mb-3">Chế độ Thi thử</h3>
                <p className="text-gray-500 mb-6 text-center h-24">
                  Làm bài thi ngẫu nhiên gồm 45 câu trong 50 phút để kiểm tra năng lực của bạn.
                </p>
                <button
                    onClick={handleStartTest}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  Bắt đầu Thi thử
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
};

export default HomePage;