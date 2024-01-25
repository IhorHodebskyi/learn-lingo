import Navigation from "./Navigation";
import Logo from "/icon/logo.svg";
import Login from "/icon/login.svg";
export default function AppBar() {
	return (
		<div className="flex">
			<img src={Logo} width={133} height={28} />
			<Navigation />
			<img src={Login} width={73} height={20} />
			<button type="button">Registration</button>
		</div>
	);
}
