"use client"

import { useState } from 'react';
import { questions } from '@/app/Components/Quiz/data/Questions';
import QuestionCard from './QuestionCard';
import Result from './Result';

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    if (selectedAnswer === null) {
      alert('Please select an answer or skip.');
      return;
    }

    // +1 for correct, 0 for wrong (no negative marking)
    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    } 

    moveToNext();
  };

  const handleSkip = () => {
    // Skip question - score unchanged
    moveToNext();
  };

  const moveToNext = () => {
    setSelectedAnswer(null);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div className="max-w-md mx-auto mt-12">
      {showResult ? (
        <Result score={score} total={questions.length} onRestart={restartQuiz} />
      ) : (
        <>
          <QuestionCard
            question={currentQuestion.question}
            options={currentQuestion.options}
            selectedAnswer={selectedAnswer}
            onSelect={setSelectedAnswer}
          />

          <div className="flex justify-between mt-4">
            <button
              onClick={handleSkip}
              className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500"
            >
              Skip
            </button>

            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
             
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
