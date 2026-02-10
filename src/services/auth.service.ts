import { LoginSchema } from "@/schemas/login.schema";
import { api } from "./api.service";
import { TokenService } from "./token.service";
import { useAuthStore } from "@/stores/useAuth.store";

export const signIn = async (payload: LoginSchema) => {
  try {
    const { data } = await api.post("/auth/login", payload, {
      headers: {
        "x-platform": "mobile",
      },
    });

    TokenService.setAccessToken(data.accessToken);
    await TokenService.setRefreshToken(data.refreshToken);

    const me = await api.get("/users/me");

    useAuthStore.getState().setUser(me.data);

    return me.data;
  } catch (error: any) {
    console.log(error.response?.data);

    throw new Error(error.response?.data?.message || "Erro ao autenticar");
  }
};
