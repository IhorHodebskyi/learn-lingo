import { ReactNode, useEffect, MouseEvent } from "react";

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
			{children}
		</div>
	);
}
