import { ReactNode, useEffect, MouseEvent } from "react";
import Sprite from "/icon/symbol-defs.svg";
interface ModalProps {
	onClose: () => void;
	children: ReactNode;
}

export default function Modal({
	onClose,
	children,
}: ModalProps) {
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	const handleKeyDown = (
		e: KeyboardEvent | React.KeyboardEvent,
	) => {
		if (e.code === "Escape") {
			onClose();
		}
	};

	const handleClickBackdrop = (
		e: MouseEvent<HTMLDivElement>,
	) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};
	return (
		<div
			className="fixed top-0 left-0 w-screen h-lvh flex justify-center items-center bg-gray-950/50 z-50"
			onClick={handleClickBackdrop}
		>
			<div className="relative p-16 bg-zinc-50 max-w-lg max-h-lg rounded-[40px]">
				<img
					className="absolute top-6 right-6 cursor-pointer"
					width={32}
					height={32}
					src="/icon/x.svg"
					onClick={() => onClose()}
				/>
				{children}
			</div>
		</div>
	);
}
