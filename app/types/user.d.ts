export interface SpotifyUser {
  id: string;
  display_name: string;
  email?: string;
  images?: Array<{ url: string }>;
  // Dodaj inne pola, które chcesz typować
}

declare module 'nuxt-auth-utils' {
  interface UserSession {
    user: SpotifyUser | null;
    loggedIn: boolean;
    clear: () => void;
  }
  function useUserSession(): UserSession;
}
