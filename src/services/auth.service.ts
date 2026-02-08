import { LoginSchema } from "@/schemas/login.schema";
import { api } from "./api.service";
import { TokenService } from "./token.service";

export const signIn = async (payload: LoginSchema) => {
  const { data } = await api.post("/auth/login", payload, {
    headers: {
      "x-platform": "mobile",
    },
  });
  TokenService.setAccessToken(data.accessToken);
  await TokenService.setRefreshToken(data.refreshToken);

  const me = await api.get("/users/me");
  return me.data;
};
