import { Patient } from "./patient.type";

export type User = {
  id: string;
  name: string;
  email: string;
  photo: string;
  photo_url: string;
  role: string;
  status: boolean;
  patient: Patient
  createdAt: string;
  updatedAt: string;
};
