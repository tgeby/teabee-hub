import { useState, useEffect, useContext, createContext } from "react";
import { getRedirectResult, onAuthStateChanged, type User } from "firebase/auth";
import { getAuth } from "firebase/auth";

interface AuthContextType {
    user: User | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
function useProvideAuth(): AuthContextType {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            } else {
                try {
                    const result = await getRedirectResult(auth);
                    if (result?.user) setUser(result.user);
                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            }
        });

        // cleanup listener when component unmounts
        return () => unsubscribe();
    }, []);

    return { user, loading };
}