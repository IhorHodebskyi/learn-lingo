import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
interface LayoutProps {}

export default function Layout({}: LayoutProps) {
	return (
		<div>
			<AppBar />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
