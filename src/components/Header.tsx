import { ReactNode } from "react";

interface HeaderProps {
	children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
	return (
		<header className="flex justify-around items-center ">
			<img
				className="w-[133px] h-[28px]"
				src="/icon/Frame-11.png"
			/>
			{children}
		</header>
	);
}
