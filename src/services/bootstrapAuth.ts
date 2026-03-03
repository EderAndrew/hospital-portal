
import { useAuthStore } from "@/stores/useAuth.store";
import { TokenService } from "@/services/token.service";
import { api } from "./api.service";

export const bootstrapAuth = async () => {
  const store = useAuthStore.getState();
  store.setLoading(true);
  console.log("Bootstrap auth...", store.user);
  try {
    await TokenService.initialize();

    const refreshToken = await TokenService.getRefreshToken();

    if (!refreshToken) {
      store.setLoading(false);
      return;
    }

    // Apenas chama /users/me
    // Se accessToken estiver expirado, interceptor resolve
    const { data } = await api.get("/users/me");

    store.setUser(data);
  } catch (error) {
    await TokenService.clear();
    store.setLoading(false);
  }
};