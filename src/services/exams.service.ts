import { api } from "./api.service";

export const findExams = async () => {
  try {
    const { data } = await api.get("/specialties/allSpecialties");

    return data;
  } catch (error: any) {
    console.log(error.response?.data);

    throw new Error(
      error.response?.data?.message || "Erro ao buscar os exames",
    );
  }
};

export const findExamsById = async (id: string) => {
  try {
    const { data } = await api.get(`exams/exam/${id}`);

    return data;
  } catch (error: any) {
    console.log(error.response?.data);

    throw new Error(error.response?.data?.message || "Erro ao buscar o exame");
  }
};
