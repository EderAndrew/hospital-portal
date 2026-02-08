import * as SecureStore from "expo-secure-store";

export const TokenService = {
  getAccessToken: () => accessToken,
  setAccessToken: (token: string) => {
    accessToken = token;
  },

  getRefreshToken: async () => {
    return SecureStore.getItemAsync("refreshToken");
  },

  setRefreshToken: async (token: string) => {
    await SecureStore.setItemAsync("refreshToken", token);
  },

  clear: async () => {
    accessToken = null;
    await SecureStore.deleteItemAsync("refreshToken");
  },
};

let accessToken: string | null = null;
