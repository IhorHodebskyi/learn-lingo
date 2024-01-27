import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
	onclick?: () => void;
	children: ReactNode | string;
	type: "submit" | "reset" | "button";
	size: string;
}

export default function Button({
	disabled,
	onclick,
	children,
	type,
}: ButtonProps) {
	return (
		<button
			className={clsx("")}
			disabled={disabled}
			onClick={onclick}
			type={type}
		>
			{children}
		</button>
	);
}
