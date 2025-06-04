// This file exports TypeScript interfaces and types used throughout the application.

export interface HeaderProps {
    title: string;
    links: Array<{ name: string; url: string }>;
}

export interface AppState {
    isAuthenticated: boolean;
    user: { id: string; name: string } | null;
}

export type UserRole = 'admin' | 'user' | 'guest';