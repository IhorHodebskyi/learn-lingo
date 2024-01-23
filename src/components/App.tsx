import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Layout from "./Layout";

interface AppProps {}

export default function App({}: AppProps) {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</>
	);
}
