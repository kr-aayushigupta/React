type Props = {
    score: number;
    total: number;
    onRestart: () => void;
  };
  
  const Result = ({ score, total, onRestart }: Props) => {
    return (
    
         <div className="bg-white dark:bg-gray-800 p-6 rounded shadow text-center">
         <h2 className="text-lg font-semibold mb-4">Your Score: {score} / {total}</h2>
   
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={onRestart}>
          Restart Quiz
        </button>
      </div>
    );
  };
  
  export default Result;
  