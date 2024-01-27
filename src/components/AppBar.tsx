import Bar from "./Bar";
import Navigation from "./Navigation";
import Sprite from "/icon/symbol.svg";

export default function AppBar() {
	return (
		<header className="flex justify-around items-center h-14">
			<svg className="" width={133} height={28}>
				<use href={`${Sprite}#logo`} />
			</svg>
			<Navigation />
			<Bar />
		</header>
	);
}
