export type Exam = {
  id: string;
  name: string;
  description: string;
  preparetion: string;
  duration: string;
  specialty: Specialty
};

type Specialty = {
    id: string;
    name: string
}