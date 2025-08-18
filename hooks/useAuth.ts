import { useState, useEffect } from "react";
import { authStore } from "@/lib/authStore";

export function useAuth() {
  const [state, setState] = useState(authStore.getState());

  useEffect(() => {
    const unsubscribe = authStore.subscribe(setState);
    return () => { unsubscribe(); };
  }, []);

  return {
    ...state,
    login: authStore.login.bind(authStore),
    logout: authStore.logout.bind(authStore),
  };
}