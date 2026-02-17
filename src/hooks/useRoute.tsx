import { useRouter } from "expo-router";

export const useDefaultRoute = () => {
  const router = useRouter();

  return {
    push: (pathname: string, params?: Record<string, string>) =>
      router.push({ pathname, params }),
    replace: (pathname: string, params?: Record<string, string>) =>
      router.replace({ pathname, params }),
    back: router.back,
  };
};
