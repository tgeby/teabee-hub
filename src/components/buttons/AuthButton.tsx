import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function AuthButton() {
    const { isAuthenticated, isLoading } = useAuth0();

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