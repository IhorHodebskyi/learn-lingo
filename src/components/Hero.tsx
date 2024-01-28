import { NavLink } from "react-router-dom";

interface HeroProps {}

export default function Hero({}: HeroProps) {
	return (
		<div className="flex">
			<div className="w-full mr-6 bg-gray-100 rounded-[30px]">
				<h2 className="font-medium text-5xl mb-5 ">
					Unlock your potential with the best language
					tutors
				</h2>
				<p className=" w-2/3">
					Embark on an Exciting Language Journey with Expert
					Language Tutors: Elevate your language proficiency
					to new heights by connecting with highly qualified
					and experienced tutors.
				</p>
				<NavLink
					to={""}
					className="px-46 py-4 bg-amber-400 hover:bg-amber-300 rounded-xl duration-300 ease-in-out"
				>
					Log In
				</NavLink>
			</div>
			<img className="w-full" src="/img/block.jpg" />
		</div>
	);
}
