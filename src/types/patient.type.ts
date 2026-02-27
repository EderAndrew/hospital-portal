import { Plan } from "./plan.type";

export type Patient = {
    id: string;
    cpf: string;
    phone: string;
    birth_date: string;
    gender: string;
    emergency_contact: string;
    plan: Plan;
    createdAt: string;
    updatedAt: string;
}