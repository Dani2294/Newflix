import React from "react";
import faqsData from "../../data/faqs.json";
import AccordionItem from "./AccordionItem";
import { Inner, List, Title, Wrapper } from "./styles/accordion.style";

function Accordion() {
	return (
		<Wrapper>
			<Inner>
				<Title>Frequently Asked Questions</Title>
				<List>
					{faqsData.map((faq) => (
						<AccordionItem key={faq.id} faq={faq} />
					))}
				</List>
			</Inner>
		</Wrapper>
	);
}

export default Accordion;
