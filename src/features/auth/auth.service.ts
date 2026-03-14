import { LoginSchema } from "@/schemas/login.schema";
import { api } from "@/services/api.service";
import { postRequest } from "@/services/postRequest";
import { TokenService } from "@/services/token.service";
import { useAuthStore } from "@/stores/useAuth.store";
import { AuthResponse } from "./auth.types";
import { User } from "@/types/user.type";
import { routes } from "@/services/routes";
import { AxiosError } from "axios";

export const signIn = async (credentials: LoginSchema) => {
  try {
    const data = await postRequest<AuthResponse, LoginSchema>(routes.authLogin, credentials);
    
    TokenService.setAccessToken(data.accessToken);
    await TokenService.setRefreshToken(data.refreshToken);

    const me = await api.get<User>(routes.myProfile);
    useAuthStore.getState().setUser(me.data);

    return me.data;
  } catch (error) {
    const err = error as AxiosError
    console.error("Failed to refresh session:", err.response?.data);
  }
};

export const refreshSession = async (): Promise<User | null> => {
  const refreshToken = await TokenService.getRefreshToken();
  try {

    if (!refreshToken) {
      return null;
    };

    const data = await postRequest<AuthResponse, {refreshToken: string}>(routes.authRefresh, {
      refreshToken,
    })

    TokenService.setAccessToken(data.accessToken);
    await TokenService.setRefreshToken(data.refreshToken);

    const {data: user} = await api.get<User>(routes.myProfile);

    useAuthStore.getState().setUser(user);

    return user;
  } catch (error) {
    const err = error as AxiosError
    console.error("Failed to refresh session:", err.response?.data);
    await TokenService.clear()
    return null
  } finally {
    useAuthStore.getState().setLoading(false)
  }
}