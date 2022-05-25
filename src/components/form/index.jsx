import React from "react";
import { Container, TextSmall, Wrapper } from "./styles/form.style";

function Form({ children }) {
	return (
		<Container>
			<Wrapper>
				{children}
				<TextSmall>
					This page is protected by Google reCAPTCHA to ensure you're not a bot.
					<a href="#">Learn more.</a>
				</TextSmall>
			</Wrapper>
		</Container>
	);
}

export default Form;
