import { QuizQuestion } from '../types';

interface Props {
  question: QuizQuestion;
  index: number;
  selectedAnswer: string | undefined;
  onAnswerSelect: (answer: string) => void;
}

export default function Question({ question, index, selectedAnswer, onAnswerSelect }: Props) {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
      
      {question.image && (
        <div className="my-4">
          <img 
            src={question.image} 
            alt={`Question ${index + 1} illustration`} 
            className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
          />
        </div>
      )}

      <div className="space-y-2">
        {question.type === 'multiple-choice' && question.options && 
          Object.entries(question.options).map(([key, value]) => (
            <label 
              key={key}
              className="flex items-center space-x-2 cursor-pointer p-2 bg-gray-100 rounded hover:bg-gray-200"
            >
              <input
                type="radio"
                name={`question${index}`}
                value={key}
                checked={selectedAnswer === key}
                onChange={(e) => onAnswerSelect(e.target.value)}
                className="form-radio text-blue-600"
              />
              <span>{key}. {value}</span>
            </label>
          ))
        }

        {question.type === 'true-false' && (
          <>
            <label className="flex items-center space-x-2 cursor-pointer p-2 bg-green-100 rounded hover:bg-green-200">
              <input
                type="radio"
                name={`question${index}`}
                value="Benar"
                checked={selectedAnswer === "Benar"}
                onChange={(e) => onAnswerSelect(e.target.value)}
                className="form-radio text-green-600"
              />
              <span>Benar</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer p-2 bg-red-100 rounded hover:bg-red-200">
              <input
                type="radio"
                name={`question${index}`}
                value="Salah"
                checked={selectedAnswer === "Salah"}
                onChange={(e) => onAnswerSelect(e.target.value)}
                className="form-radio text-red-600"
              />
              <span>Salah</span>
            </label>
          </>
        )}
      </div>
    </div>
  );
}
