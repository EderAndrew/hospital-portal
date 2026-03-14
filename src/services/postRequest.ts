import { AxiosError } from "axios"
import { api } from "./api.service"

export async function postRequest<T, B>(
    url: string,
    body: B
): Promise<T> {
    try{
        const { data } = await api.post<T>(url, body, {
            headers: {
                "x-platform": "mobile"
            }
        })
        return data
    }catch(error){
        const err = error as AxiosError<{message: string}>
        throw new Error(err.response?.data.message || "Failed to make POST request")
    }
}