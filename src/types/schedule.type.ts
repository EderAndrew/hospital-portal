import { Exam } from "./exam.type";
import { User } from "./user.type";

export type Appointments = {
  id: string;
  patient: {
    id: string;
    user: User;
    cpf: string;
    phone: string;
    birth_date: string;
    gender: string;
    emergency_contact: string;
  }
  exam: Exam;
  date: string;
  time: string;
  info: string;
  status: string;
};
