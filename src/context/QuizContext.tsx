import React, { useState, createContext, useContext, ReactNode } from 'react';
import { quizData, Question, Answer } from '../data/quizData';

// --- Helper function để xáo trộn mảng ---
const shuffleArray = (array: any[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};
// -----------------------------------------

interface QuizContextType {
  questions: Question[];
  mode: 'test' | 'practice' | null;
  currentQuestionIndex: number;
  userAnswers: Record<number, Answer | null>;
  timeRemaining: number;
  isQuizCompleted: boolean;
  setCurrentQuestionIndex: (index: number) => void;
  selectAnswer: (questionId: number, answer: Answer) => void;
  submitQuiz: () => void;
  startQuiz: (mode: 'test' | 'practice') => void;
  updateTimer: React.Dispatch<React.SetStateAction<number>>;
  calculateScore: () => {
    correct: number;
    incorrect: number;
    total: number;
    percentage: number;
  };
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [mode, setMode] = useState<'test' | 'practice' | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, Answer | null>>({});
  const [timeRemaining, setTimeRemaining] = useState<number>(50 * 60);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const startQuiz = (selectedMode: 'test' | 'practice') => {
    setMode(selectedMode);
    setIsQuizCompleted(false);
    setUserAnswers({});
    setCurrentQuestionIndex(0);

    if (selectedMode === 'test') {
      const shuffledQuestions = shuffleArray([...quizData]);
      setQuestions(shuffledQuestions.slice(0, 45)); // Lấy 45 câu ngẫu nhiên
      setTimeRemaining(50 * 60); // 50 phút
    } else { // Practice mode
      setQuestions(quizData); // Lấy tất cả 82 câu
      setTimeRemaining(Infinity); // Không giới hạn thời gian
    }
  };

  const selectAnswer = (questionId: number, answer: Answer) => {
    if (isQuizCompleted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const submitQuiz = () => {
    setIsQuizCompleted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    let incorrect = 0;
    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correct += 1;
      } else if (userAnswers[question.id]) {
        incorrect += 1;
      }
    });
    const total = questions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, incorrect, total, percentage };
  };

  const value = {
    questions,
    mode,
    currentQuestionIndex,
    userAnswers,
    timeRemaining,
    isQuizCompleted,
    setCurrentQuestionIndex,
    selectAnswer,
    submitQuiz,
    startQuiz,
    updateTimer: setTimeRemaining,
    calculateScore
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};