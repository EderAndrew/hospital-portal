import { AxiosError } from "axios";
import { api } from "./api.service";

export async function getRequest<T>(url: string): Promise<T> {
    try {
        const { data } = await api.get<T>(url)
        return data
    } catch (error) {
        const err = error as AxiosError<{message: string}>
        throw new Error(
            err.response?.data.message || "Erro na requisição"
        )
    }
}