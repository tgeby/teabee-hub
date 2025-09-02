import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<button
			onClick={() => loginWithRedirect()}
			className="
				bg-blue-500 
				hover:bg-blue-700 
				text-white 
				font-bold 
				rounded 
				px-3 sm:px-4 md:px-6
				py-0.5 sm:py-1 md:py-2
				text-[clamp(.5rem,3vw,1.5rem)]"
		>
			Log In
		</button>
	);
}

export default LoginButton;