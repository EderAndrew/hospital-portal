import { Schedule } from "@/types/schedule.type";
import { api } from "./api.service";

export const myActiveSchedules = async (id: string) => {
  try {
    const { data } = await api.get(`/appointments/myAppointments/${id}`);
    return data;
  } catch (error: any) {
    console.log(error.response?.data);

    throw new Error(
      error.response?.data?.message || "Erro ao buscar os agendamentos",
    );
  }
};

export const createAppointments = async (schedule: Schedule) => {
  try {
    const { data } = await api.post("/appointments/create", schedule, {
      headers: {
        "x-platform": "mobile",
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};
