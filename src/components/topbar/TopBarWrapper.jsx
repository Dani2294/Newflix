import React, { useEffect, useState } from "react";
import { Inner, Wrapper } from "./styles/topbar.style";

function TopBarWrapper({ children }) {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const navBarDark = window.addEventListener("scroll", () => {
			const isDark = window.scrollY > 0;
			setIsDark(isDark);
		});

		return () => {
			window.removeEventListener("scroll", navBarDark);
		};
	}, []);

	return (
		<Wrapper isDark={isDark}>
			<Inner>{children}</Inner>
		</Wrapper>
	);
}

export default TopBarWrapper;
