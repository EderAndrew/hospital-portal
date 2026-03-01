import { api } from "./api.service";

export const myActiveSchedules = async (id: string) => {
  try {
    const { data } = await api.get(`/schedules/allUserSchedules/${id}`);
    return data;
  } catch (error: any) {
    console.log(error.response?.data);

    throw new Error(
      error.response?.data?.message || "Erro ao buscar os agendamentos",
    );
  }
};
