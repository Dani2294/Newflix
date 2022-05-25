import React from "react";
import { AnimatePresence } from "framer-motion";
import { ToastNotif } from "./styles/toast.style";

function Toast({ message, type }) {
	const bg = type === "success" ? "#16a34a" : "#dc2626";

	const toastVariant = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};
	return (
		<AnimatePresence exitBeforeEnter>
			<ToastNotif
				bg={bg}
				variants={toastVariant}
				initial="hidden"
				animate="visible"
				exit="hidden">
				{message}
			</ToastNotif>
		</AnimatePresence>
	);
}

export default Toast;
