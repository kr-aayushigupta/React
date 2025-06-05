// type Props = {
//     question: string;
//     options: string[];
//     onAnswer: (selected: string) => void;
//   };

//   const QuestionCard = ({ question, options, onAnswer }: Props) => {
//     return (
//       <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
//         <h2 className="text-lg font-semibold mb-4">{question}</h2>
//         <div className="flex flex-col gap-2">
//           {options.map((opt) => (
//             <button
//               key={opt}
//               className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//               onClick={() => onAnswer(opt)}
//             >
//               {opt}
//             </button>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   export default QuestionCard;

import React from "react";

type Props = {
  question: string;
  options: string[];
  selectedAnswer: string | null;
  onSelect: (option: string) => void;
};

const QuestionCard: React.FC<Props> = ({
  question,
  options,
  selectedAnswer,
  onSelect,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">{question}</h2>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            className="bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white px-4 py-2 rounded focus:border-2 focus:bg-blue-800"
            onClick={() => onSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
