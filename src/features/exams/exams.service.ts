import { getRequest } from "@/services/getRequest";
import { Exam } from "./exams.type";
import { routes } from "@/services/routes";
import { AxiosError } from "axios";

export const findExams = async () => {
  try {
    return await getRequest<Exam[]>(routes.findExams);
  } catch (error) {
    const err = error as AxiosError;
    console.error("Failed to find exams:", err.response?.data);
  }
};

export const findExamsById = async (id: string) => {
  try {
    return await getRequest<Exam>(routes.myExams(id));
  } catch (error) {
    const err = error as AxiosError;
    console.error("Failed to find exam:", err.response?.data);
  }
};