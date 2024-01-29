import Bar from "./Bar";
import Header from "./Header";
import Navigation from "./Navigation";

export default function AppBar() {
	return (
		<Header>
			<Navigation />
			<Bar />
		</Header>
	);
}
