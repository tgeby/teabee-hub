import LoginButton from "../buttons/LoginButton";
import LogoutButton from "../buttons/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {

	const { isAuthenticated, isLoading } = useAuth0();
	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="w-full bg-slate-800 relative grid grid-cols-3 items-center">
			<div></div>
			<h1 className="text-[clamp(1rem,6vw,3rem)] text-center self-center py-5 w-full">TeaBee</h1>
			<div className="flex justify-center">
				{isAuthenticated ? <LogoutButton /> : <LoginButton />}
			</div>
		</div>
	);
}
export default Header;