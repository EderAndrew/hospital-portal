import { Doctor } from "@/types/doctor.type";
import { Exam } from "@/types/exam.type";
import { Patient } from "@/types/patient.type";
import { Room } from "@/types/room.type";
import { AppointmentStatus } from "@/types/schedule.type";

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

export type CreateAppointmentResponse = {
  appointment: Appointment;
  message: string;
}