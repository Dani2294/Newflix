import React from "react";
import jumboData from "../../data/jumbo.json";
import {
	Image,
	ImageBox,
	Inner,
	Item,
	SubTitle,
	TextBox,
	Title,
	Wrapper,
} from "./styles/jumbotron.style";

function Jumbotron() {
	return (
		<Wrapper>
			{jumboData.map((jumbo) => (
				<Item key={jumbo.id} className="home-bottom-border">
					<Inner direction={jumbo.direction}>
						<TextBox>
							<Title>{jumbo.title}</Title>
							<SubTitle>{jumbo.subTitle}</SubTitle>
						</TextBox>
						<ImageBox>
							<Image src={jumbo.image} alt={jumbo.alt} />
						</ImageBox>
					</Inner>
				</Item>
			))}
		</Wrapper>
	);
}

export default Jumbotron;
