import React from "react";
import {
	Column,
	Container,
	Credits,
	Item,
	Link,
	Row,
	Text,
	Wrapper,
} from "./styles/footer.style";

function Footer({ home }) {
	const classes = home ? "home-top-border" : "";

	return (
		<Container className={classes}>
			<Wrapper>
				<Text>Questions? Call (+33) 0805-543-064</Text>
				<Row>
					<Column>
						<Item>
							<Link>FAQ</Link>
						</Item>
						<Item>
							<Link>Investor Relations</Link>
						</Item>
						<Item>
							<Link>Ways to Watch</Link>
						</Item>
						<Item>
							<Link>Corporate Information</Link>
						</Item>
						<Item>
							<Link>Only on Netflix</Link>
						</Item>
					</Column>
					<Column>
						<Item>
							<Link>Help Center</Link>
						</Item>
						<Item>
							<Link>Jobs</Link>
						</Item>
						<Item>
							<Link>Terms of Use</Link>
						</Item>
						<Item>
							<Link>Contact Us</Link>
						</Item>
					</Column>
					<Column>
						<Item>
							<Link>Account</Link>
						</Item>
						<Item>
							<Link>Redeem Gift Cards</Link>
						</Item>
						<Item>
							<Link>Privacy</Link>
						</Item>
						<Item>
							<Link>Speed Test</Link>
						</Item>
					</Column>
					<Column>
						<Item>
							<Link>Media Center</Link>
						</Item>
						<Item>
							<Link>Buy Gift Cards</Link>
						</Item>
						<Item>
							<Link>Cookie Preferences</Link>
						</Item>
						<Item>
							<Link>Legal Notices</Link>
						</Item>
					</Column>
				</Row>
				<Text>Newflix France</Text>
				<Credits>
					Designed and built w/ ❤️ by{" "}
					<a
						style={{ textDecoration: "underline" }}
						target="_blank"
						rel="noreferrer"
						href="https://daniel-agbato.vercel.app/">
						Daniel Agbato
					</a>
				</Credits>
			</Wrapper>
		</Container>
	);
}

export default Footer;
