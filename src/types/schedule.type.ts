import { Doctor } from "./doctor.type";
import { Exam } from "./exam.type";
import { Patient } from "./patient.type";
import { Room } from "./room.type";
import { User } from "./user.type";

export type Appointment = {
  id: string;
  patient: Patient;
  exam: Exam;
  doctor: Doctor;
  room: Room;
  start_time: ISODate;
  end_time: ISODate;
  status: AppointmentStatus;
  notes?: string;
};

export type AppointmentStatus = "scheduled" | "confirmed" | "completed" | "canceled";
type ISODate = string

export type Schedule = {
  patient_id: string;
  exam_id: string;
  doctor_id: string;
  room_id: string;
  start_time: string;
  notes: string;
  scheduled_by?: string;
};
