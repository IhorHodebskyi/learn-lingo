import Hero from "../../components/Hero";

interface HomeProps {}

export default function Home({}: HomeProps) {
	return (
		<section className="px-4">
			<Hero />
		</section>
	);
}
