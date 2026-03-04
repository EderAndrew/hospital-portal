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

export type Schedule = {
  patient_id: string;
  exam_id: string;
  doctor_id: string;
  room_id: string;
  start_time: string;
  notes: string;
  scheduled_by?:string;
}