import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../../firebase";

export default function LoginButton () {
	const handleLogin = () => {
		const provider = new GoogleAuthProvider();

		//const redirectUrl = encodeURIComponent(window.location.href);
		//provider.setCustomParameters({ state: redirectUrl });
		signInWithRedirect(auth, provider);
	}
	return (
		<button
			onClick={handleLogin}
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
			Login with Google
		</button>
	);
}
