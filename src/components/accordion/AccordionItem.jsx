import React, { useState } from "react";
import PropTypes from "prop-types";
import { Body, Button, Item } from "./styles/accordion.style";

function AccordionItem({ faq }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Item>
			<Button onClick={() => setIsOpen(!isOpen)}>
				{faq.header}
				{isOpen ? (
					<img src="/assets/icons/close-slim.png" alt="Close" />
				) : (
					<img src="/assets/icons/add.png" alt="Open" />
				)}
			</Button>
			{isOpen && (
				<Body>
					<p>{faq.body}</p>
				</Body>
			)}
		</Item>
	);
}

AccordionItem.propTypes = {
	faq: PropTypes.object.isRequired,
};

export default AccordionItem;
