import { NavLink } from "react-router-dom";

interface HeroProps {}

export default function Hero({}: HeroProps) {
	return (
		<div className="flex justify-around items-center max-w-[1312px]  m-auto mb-6 gap-6 ">
			<div className="bg-gray-100 rounded-[30px] max-w-[720px] h-[530px] py-[98px] px-[64px]">
				<h2 className="font-medium text-5xl mb-[32px] ">
					Unlock your potential with the best language
					tutors
				</h2>
				<p className="mb-[64px]">
					Embark on an Exciting Language Journey with Expert
					Language Tutors: Elevate your language proficiency
					to new heights by connecting with highly qualified
					and experienced tutors.
				</p>
				<NavLink
					className="px-[88px] py-[16px] bg-[#F4C550] hover:bg-[#FFDC86] rounded-xl  duration-300 ease-in-out"
					to={""}
				>
					Get started
				</NavLink>
			</div>
			<img className="max-w-[568px]" src="/img/block.jpg" />
		</div>
	);
}
