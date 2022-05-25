import React from "react";
import { Button, Frame, Input, Text, Wrapper } from "./styles/cta-form.style";

function CtaForm() {
	return (
		<Wrapper>
			<Text>
				If you like this Newflix Clone and want to get in touch with me. Feel
				free to contact me.
			</Text>
			<Frame>
				<Input placeholder="Click on the button to send me a email" />
				<Button
					href="mailto:agbato.dani@gmail.com?subject=From Netflix Clone&body=Hello Daniel, I would like to talk about you and your project..."
					target="_blank"
					rel="noreferrer">
					Contact Me <img src="/assets/icons/chevron-right.png" alt="arrow" />
				</Button>
			</Frame>
		</Wrapper>
	);
}

export default CtaForm;
