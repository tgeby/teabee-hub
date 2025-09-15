import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth } from "../../contexts/AuthContext";
function AuthButton() {
    const { user: isAuthenticated, loading: isLoading } = useAuth();
    if (isLoading) {
        return <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>;
    }

    if (isAuthenticated) {
        return <LogoutButton />;
    }

    // Done loading and not authenticated
    return <LoginButton />;
}

export default AuthButton;