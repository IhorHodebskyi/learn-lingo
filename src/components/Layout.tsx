import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";
import Footer from "./Footer";
interface LayoutProps {}

export default function Layout({}: LayoutProps) {
	return (
		<>
			<AppBar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
