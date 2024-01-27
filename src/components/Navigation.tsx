import { NavLink } from "react-router-dom";

interface NavigationProps {}
export default function Navigation({}: NavigationProps) {
	return (
		<>
			<ul className="flex gap-14">
				<li className="font-normal">
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="">Teachers</NavLink>
				</li>
			</ul>
		</>
	);
}
