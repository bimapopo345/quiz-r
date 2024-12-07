export interface QuizQuestion {
  question: string;
  type: 'true-false' | 'multiple-choice';
  correct: string;
  options?: {
    [key: string]: string;
  };
  image?: string;
}

export interface StudentInfo {
  name: string;
  nim: string;
  date: string;
  time: string;
}
