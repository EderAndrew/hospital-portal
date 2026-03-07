import { Doctor } from "./doctor.type";
import { Exam } from "./exam.type";
import { Room } from "./room.type";
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
  };
  exam: Exam;
  doctor: Doctor;
  room: Room;
  start_time: string;
  end_time: string;
  status: string;
  notes?: string;
};

export type Schedule = {
  patient_id: string;
  exam_id: string;
  doctor_id: string;
  room_id: string;
  start_time: string;
  notes: string;
  scheduled_by?: string;
};
