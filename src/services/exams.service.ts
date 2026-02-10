import { api } from "./api.service";

export const findExams = async () => {
  try {
    const { data } = await api.get("/exams/findExams");

    return data;
  } catch (error: any) {
    console.log(error.response?.data);

    throw new Error(
      error.response?.data?.message || "Erro ao buscar os exames",
    );
  }
};
