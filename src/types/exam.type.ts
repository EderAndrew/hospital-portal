export type Specialties = {
  id: string;
  name: string;
  exams: Exam[];
};

export type Exam = {
  id: string;
  name: string;
  description: string;
  preparetion: string;
  duration: string;
  specialty: {
    id: string;
  };
};
