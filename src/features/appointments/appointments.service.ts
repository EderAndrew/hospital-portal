import { routes } from "@/services/routes"
import { Appointment, CreateAppointmentResponse, Schedule } from "./appointments.type"
import { getRequest } from "@/services/getRequest"
import { postRequest } from "@/services/postRequest"

export const myActiveSchedules = (id: string) => {
    return getRequest<Appointment[]>(routes.myAppointments(id))
}

export const createAppointments = async (schedule: Schedule) => {
  return postRequest<CreateAppointmentResponse, Schedule>(routes.createAppointment, schedule)
};