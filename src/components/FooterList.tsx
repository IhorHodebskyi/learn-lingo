import { Data } from "./Footer";

interface FooterListProps {
	data: Data[];
}

export default function FooterList({
	data,
}: FooterListProps) {
	return data.map(({ numeric, advantage }: Data) => (
		<li className="flex">
			<h2 className="font-medium text-2xl m-auto">
				{numeric}
			</h2>
			<span className="m-auto mr-[16px]">+</span>
			<p className="font-normal text-sm text-balance m-auto">
				{advantage}
			</p>
		</li>
	));
}
