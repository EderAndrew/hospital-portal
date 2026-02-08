import {z} from "zod";

const Login = z.object({
    email: z
        .string()
        .trim()
        .toLowerCase()
        .email('Email inválido'),
    password: z
        .string()
        .min(6, "A senha deve ter no minimo 6 caracteres")
        .max(50, "Senha muito longa"),
})

export type LoginSchema = z.infer<typeof Login>