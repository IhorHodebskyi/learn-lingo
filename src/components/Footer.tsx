import FooterList from "./FooterList";

interface FooterProps {}
export interface Data {
	numeric: string;
	advantage: string;
}
const data: Data[] = [
	{
		numeric: "32,000",
		advantage: "Experienced tutors",
	},
	{ numeric: "300,000", advantage: "5-star tutor reviews" },
	{ numeric: "120", advantage: "Subjects taught" },
	{ numeric: "200", advantage: "Tutor nationalities" },
];

export default function Footer({}: FooterProps) {
	return (
		<footer>
			<ul className="flex justify-around items-center m-auto max-w-[1312px] px-[132px] py-[40px] gap-[100px] rounded-[30px] border-dashed border-solid  border-2 border-[#F4C550] ">
				<FooterList data={data} />
			</ul>
		</footer>
	);
}
