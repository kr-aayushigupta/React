"use client";

import { useState } from "react";
import { questions } from "@/app/Components/Quiz/data/Questions";
import QuestionCard from "./QuestionCard";
import Result from "./Result";

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [attemptCount, setAttemptCount] = useState(1);

  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    if (selectedAnswer === null) {
      alert("Please select an answer or skip.");
      return;
    }

    // +1 for correct, -0.5 for wrong (negative marking)
    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + 1);
      setCorrectCount((prev)=>prev+1);
    }
    else{
        setScore((prev) => prev - 0.5);
      setWrongCount((prev)=>prev+1);
        
    }

    moveToNext();
  };

  const handleSkip = () => {
    // Skip question - score unchanged
    setSkippedCount((prev)=>prev+1);
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

  const restartQuiz = () => { // here most of the state variables are changed hence - causes re render- quiz is reloaded.
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAttemptCount(prev=>prev+1)
  };

  return (
    <div className="max-w-md mx-auto mt-12">
    
      {showResult ? (
        <Result
          score={score}
          correct={correctCount}
          wrong={wrongCount}
          skipped={skippedCount}
          total={questions.length}
          attemptcount={attemptCount}
          onRestart={restartQuiz}
          
        />
      ) : (
        <>
          <QuestionCard
          questionumber={currentIndex+1}
            question={currentQuestion.question}
            options={currentQuestion.options}
            selectedAnswer={selectedAnswer}
            onSelect={setSelectedAnswer}
          />

          <div className="flex justify-between mt-4">
            <button
              onClick={handleSkip}
              className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 hover:cursor-pointer"
            >
              Skip
            </button>

            <button
              onClick={handleNext}
              className=" text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer bg-green-500"
            >
              {currentIndex + 1 == questions.length ? "Submit" : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
