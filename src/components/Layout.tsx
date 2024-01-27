import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
interface LayoutProps {}

export default function Layout({}: LayoutProps) {
	return (
		<>
			<AppBar />
			<main>
				<Outlet />
			</main>
		</>
	);
}
