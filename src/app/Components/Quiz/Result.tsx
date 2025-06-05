type Props = {
    score: number;
    correct: number;
    wrong: number;
    skipped: number;
    total: number;
    onRestart: () => void;
  };
  
  const Result = ({ score,correct,wrong,skipped, total, onRestart }: Props) => {
    return (
    
         <div className="bg-white dark:bg-gray-800 p-6 rounded shadow text-center">
         <h1 className="text-lg font-semibold mb-4">Result</h1>
         <h2 className="text-lg font-semibold mb-4">Your Score : {score} / {total}</h2>
         <h2 className="text-lg font-semibold mb-4">Correct Answers : {correct} / {total}</h2>
         <h2 className="text-lg font-semibold mb-4">Incorrect Answers : {wrong} / {total}</h2>
         <h2 className="text-lg font-semibold mb-4">Skipped Questions : {skipped} / {total}</h2>
   
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={onRestart}>
          Restart Quiz
        </button>
      </div>
    );
  };
  
  export default Result;
  