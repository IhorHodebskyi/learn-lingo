import Bar from "./Bar";
import Navigation from "./Navigation";

export default function AppBar() {
	return (
		<header className="flex justify-around items-center ">
			<img
				className="w-[133px] h-[28px]"
				src="/icon/Frame-11.png"
			/>
			<Navigation />
			<Bar />
		</header>
	);
}
