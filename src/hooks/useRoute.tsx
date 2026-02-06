import { useRouter } from "expo-router";

export const useDefaultRoute = () => {
    const router = useRouter();

    return {
        push: router.push,
        replace: router.replace,
        back: router.back,
    }
}