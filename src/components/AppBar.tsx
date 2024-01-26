import Navigation from "./Navigation";
import Logo from "/icon/logo.svg";
import Login from "/icon/login.svg";
import Button from "./Button";
export default function AppBar() {
	return (
		<div className="flex">
			<img src={Logo} width={133} height={28} />
			<Navigation />
			<ul>
				<li className="">
					<Button type="button">
						<img src={Login} width={73} height={20} />
					</Button>
				</li>
				<li>
					<Button type="button">Registration</Button>
				</li>
			</ul>
		</div>
	);
}
