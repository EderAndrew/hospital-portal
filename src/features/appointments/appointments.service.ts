import { routes } from "@/services/routes"
import { Appointment, CreateAppointmentResponse } from "./appointments.type"
import { getRequest } from "@/services/getRequest"
import { Schedule } from "@/types/schedule.type"
import { postRequest } from "@/services/postRequest"

export const myActiveSchedules = (id: string) => {
    return getRequest<Appointment[]>(routes.myAppointments(id))
}

export const createAppointments = async (schedule: Schedule) => {
  return postRequest<CreateAppointmentResponse, Schedule>("/appointments/create", schedule)
};