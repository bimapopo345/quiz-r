import { useEffect, useState } from 'react';
import Header from './components/Header';
import Question from './components/Question';
import Results from './components/Results';
import { quizData } from './data/questions';
import { StudentInfo } from './types';

function App() {
  const [studentInfo, setStudentInfo] = useState<StudentInfo>(() => {
    const saved = localStorage.getItem('studentInfo');
    return saved ? JSON.parse(saved) : {
      name: '',
      nim: '',
      date: '',
      time: ''
    };
  });

  const [answers, setAnswers] = useState<(string | undefined)[]>(() => {
    const saved = localStorage.getItem('quizAnswers');
    return saved ? JSON.parse(saved) : Array(quizData.length).fill(undefined);
  });

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    localStorage.setItem('studentInfo', JSON.stringify(studentInfo));
  }, [studentInfo]);

  useEffect(() => {
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
  }, [answers]);

  const handleAnswerSelect = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleReset = () => {
    setAnswers(Array(quizData.length).fill(undefined));
    setShowResults(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Header 
          studentInfo={studentInfo}
          onStudentInfoChange={setStudentInfo}
        />

        <div className="mt-8">
          {quizData.map((question, index) => (
            <Question
              key={index}
              question={question}
              index={index}
              selectedAnswer={answers[index]}
              onAnswerSelect={(answer) => handleAnswerSelect(index, answer)}
            />
          ))}
        </div>

        <div className="flex space-x-4 mt-8">
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit Kuis
          </button>
          <button
            onClick={handleReset}
            className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Reset Kuis
          </button>
        </div>

        {showResults && (
          <Results 
            answers={answers}
            questions={quizData}
          />
        )}
      </div>
    </div>
  );
}

export default App;
