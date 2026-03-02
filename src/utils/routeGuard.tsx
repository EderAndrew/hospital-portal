import { bootstrapAuth } from "@/services/bootstrapAuth";
import { useAuthStore } from "@/stores/useAuth.store";
import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoading } = useAuthStore();
  const segments = useSegments();

  useEffect(()=>{
    bootstrapAuth();
  }, [])

  useEffect(() => {
    if(isLoading) return;

    const inAuthGroup = segments[0] === "(auth)";
    
    if (!user && !inAuthGroup) {
      router.replace("(auth)/login");
    } else if (user && inAuthGroup) {
      router.replace("(dashboard)");
    }
  }, [user, segments, isLoading])

  if (isLoading) return null; //or SplashScreen

  return <>{children}</>;
}