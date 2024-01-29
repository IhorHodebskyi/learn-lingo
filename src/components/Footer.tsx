import FooterList from "./FooterList";

interface FooterProps {}
export interface Data {
	numeric: number;
	advantage: string;
}
const data: Data[] = [
	{ numeric: 32000, advantage: "Experienced tutors" },
	{ numeric: 300000, advantage: "5-star tutor reviews" },
	{ numeric: 120, advantage: "Subjects taught" },
	{ numeric: 200, advantage: "Tutor nationalities" },
];

export default function Footer({}: FooterProps) {
	return (
		<footer>
			<ul className="flex justify-around items-center outline-dashed outline-[1.px] outline-offset-[2px]  ">
				<FooterList data={data} />
			</ul>
		</footer>
	);
}
