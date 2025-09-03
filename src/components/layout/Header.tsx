import AuthButton from "../buttons/AuthButton";

const Header = () => {

	return (
		<div className="w-full bg-slate-800 relative grid grid-cols-3 items-center">
			<div></div>
			<h1 className="text-[clamp(1rem,6vw,3rem)] text-center self-center py-5 w-full">TeaBee</h1>
			<div className="flex justify-center">
				<AuthButton />
			</div>
		</div>
	);
}
export default Header;