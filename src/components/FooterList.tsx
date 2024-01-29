import { Data } from "./Footer";

interface FooterListProps {
	data: Data[];
}

export default function FooterList({
	data,
}: FooterListProps) {
	return data.map(({ numeric, advantage }: Data) => (
		<li>
			<h2>{numeric}</h2>
			<p>{advantage}</p>
		</li>
	));
}
