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
		window.addEventListener("keydown", e => {
			if (e.code === "Escape") {
				onClose();
			}
		});
		return () => {
			window.removeEventListener("keydown", e => {
				if (e.code === "Escape") {
					onClose();
				}
			});
		};
	}, []);

	const handleClickBackdrop = (
		e: MouseEvent<HTMLDivElement>,
	) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};
	return (
		<div onClick={handleClickBackdrop}>{children}</div>
	);
}
