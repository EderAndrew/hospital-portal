import { Plan } from "./plan.type";

export type User = {
  id: string;
  plan: Plan;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  status: boolean;
  phone: string;
};
