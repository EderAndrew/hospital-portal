import { Exam } from "./exam.type";

export type Schedule = {
  id: string;
  user: {
    id: string;
    name: string;
  };
  exam: Exam;
  patient: string;
  date: string;
  time: string;
  info: string;
  status: string;
};
