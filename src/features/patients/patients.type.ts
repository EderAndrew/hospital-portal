import { Plan } from "@/types/plan.type";

export type Patient = {
    id: string;
    cpf: string;
    phone: string;
    birth_date: string;
    gender: Gender;
    emergency_contact: string;
    plan: Plan;
    createdAt: string;
    updatedAt: string;
}

export type Gender = "male" | "female" | "other";