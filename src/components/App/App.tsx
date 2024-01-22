import { Route, Routes } from "react-router-dom";
import "./App.css";


interface AppProps {}

export default function App({}: AppProps) {
	return (
		<>
      <Routes> 
        <Route path="/" element={""}>
				<Route index element={""} />
      </Routes>
		</>
	);
}
