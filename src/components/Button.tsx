import React, { ReactNode } from "react";

interface ButtonProps {
	className?: string;
	disabled?: boolean;
	onclick?: () => void;
	children: ReactNode | string;
	type: "submit" | "reset" | "button" | undefined;
}

export default function Button({
	className,
	disabled,
	onclick,
	children,
	type,
}: ButtonProps) {
	return (
		<button
			className={className}
			disabled={disabled}
			onClick={onclick}
			type={type}
		>
			{children}
		</button>
	);
}
