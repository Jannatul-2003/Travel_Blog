import { supabase } from "./supabase";

type AuthState = {
  isAuthenticated: boolean;
  user: any | null;
  loading: boolean;
};

class AuthStore {
  private state: AuthState = {
    isAuthenticated: false,
    user: null,
    loading: true,
  };
  
  private listeners: Set<(state: AuthState) => void> = new Set();

  constructor() {
    if (typeof window !== "undefined") {
      this.initializeAuth();
    }
  }

  private async initializeAuth() {
    try {
      // Check current session
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (!error && session?.user) {
        this.setState({
          isAuthenticated: true,
          user: session.user,
          loading: false,
        });
      } else {
        this.setState({
          isAuthenticated: false,
          user: null,
          loading: false,
        });
      }

      // Listen for auth changes
      supabase.auth.onAuthStateChange((event, session) => {
        this.setState({
          isAuthenticated: !!session?.user,
          user: session?.user || null,
          loading: false,
        });
      });
    } catch (error) {
      console.error("Auth initialization error:", error);
      this.setState({
        isAuthenticated: false,
        user: null,
        loading: false,
      });
    }
  }

  private setState(newState: Partial<AuthState>) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(listener => listener(this.state));
  }

  getState() {
    return this.state;
  }

  subscribe(listener: (state: AuthState) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  async login(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      // State will be updated automatically by onAuthStateChange
      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  async logout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      // State will be updated automatically by onAuthStateChange
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  }
}

export const authStore = new AuthStore();