import { QuizQuestion } from '../types';

interface Props {
  answers: (string | undefined)[];
  questions: QuizQuestion[];
}

export default function Results({ answers, questions }: Props) {
  const score = answers.reduce((acc, answer, index) => {
    if (answer === questions[index].correct) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-center">
        Total Skor: {score} / {questions.length}
      </h2>
      <div className="mt-4 space-y-2">
        {questions.map((question, index) => (
          <p key={index} className={
            !answers[index] 
              ? "text-yellow-600"
              : answers[index] === question.correct
                ? "text-green-600"
                : "text-red-600"
          }>
            Soal {index + 1}: {
              !answers[index]
                ? `Tidak Dijawab (Jawaban Benar: ${question.correct})`
                : answers[index] === question.correct
                  ? "Benar"
                  : `Salah (Jawaban Benar: ${question.correct})`
            }
          </p>
        ))}
      </div>
    </div>
  );
}
