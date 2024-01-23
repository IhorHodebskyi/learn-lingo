import { NavLink } from "react-router-dom";

interface NavigationProps {}
export default function Navigation({}: NavigationProps) {
	return (
		<>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="">Teachers</NavLink>
				</li>
			</ul>
		</>
	);
}
