import { Doctor } from "@/types/doctor.type";
import { Exam } from "@/types/exam.type";
import { Patient } from "@/types/patient.type";
import { Room } from "@/types/room.type";

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

type ISODate = string
type AppointmentStatus = "scheduled" | "completed" | "cancelled";

export type Schedule = {
  patient_id: string;
  exam_id: string;
  doctor_id: string;
  room_id: string;
  start_time: string;
  notes: string;
  scheduled_by?: string;
};



export type CreateAppointmentResponse = {
  appointment: Appointment;
  message: string;
}