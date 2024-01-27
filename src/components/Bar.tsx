import { useState } from "react";
import Sprite from "/icon/symbol.svg";

export default function Bar() {
	const [showLogin, setShowLogin] = useState(false);
	const [showSignIn, setShowSignIn] = useState(false);
	const toggleLogin = () => {
		setShowLogin(!showLogin);
	};

	const toggleSingIn = () => {
		setShowSignIn(!showSignIn);
	};
	return (
		<ul className="flex justify-around items-center gap-8">
			<li>
				<button type="button" onClick={toggleLogin}>
					<svg width={73} height={20}>
						<use href={`${Sprite}#login`} />
					</svg>
				</button>
			</li>
			<li>
				<button
					onClick={toggleSingIn}
					className="py-3 px-14 br-4 rounded-lg font-normal text-white bg-black br-4"
					type="button"
				>
					Registration
				</button>
			</li>
		</ul>
	);
}
