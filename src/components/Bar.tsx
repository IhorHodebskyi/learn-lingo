import { useState } from "react";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

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
					<img
						className="w-[73px] h-[20px]"
						src="/icon/login.png"
					/>
				</button>
				{showLogin && (
					<Modal onClose={toggleLogin}>
						<LoginForm />
					</Modal>
				)}
			</li>
			<li>
				<button
					onClick={toggleSingIn}
					className="py-3 px-14 br-4 rounded-lg font-normal text-white bg-black br-4"
					type="button"
				>
					Registration
				</button>
				{showSignIn && (
					<Modal onClose={toggleSingIn}>
						<SignUpForm />
					</Modal>
				)}
			</li>
		</ul>
	);
}
