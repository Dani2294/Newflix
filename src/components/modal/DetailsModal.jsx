/* eslint-disable no-dupe-keys */
import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { Backdrop } from "./styles/modal.style";
import DetailsModalWrapper from "./DetailsModalWrapper";
import PlayerModal from "./PlayerModal";
import ToastContext from "../../context/toast-context";

function DetailsModal({ id, setShowModal, data }) {
	const [showPlayer, setShowPlayer] = useState(false);
	const { setToast } = useContext(ToastContext);
	const modalRef = useRef();

	const closeModalBgClick = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const escapePress = useCallback(
		(e) => {
			if (e.key === "Escape" && !showPlayer) {
				setShowModal(false);
			}
		},
		[setShowModal, showPlayer]
	);

	useEffect(() => {
		document.addEventListener("keydown", escapePress);
		return () => document.removeEventListener("keydown", escapePress);
	}, [escapePress]);

	const handleToast = (message, type) => {
		setToast({ message, type });
		setTimeout(() => {
			setToast(null);
		}, 3500);
	};

	const backdrop = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0 },
	};

	const modalVariant = {
		hidden: { scale: 0, opacity: 0, scale: 0 },
		visible: { scale: 1, opacity: 1, scale: 1 },
	};

	return (
		<>
			<AnimatePresence exitBeforeEnter={true}>
				<motion.div
					variants={backdrop}
					initial="hidden"
					animate="visible"
					exit="exit">
					<Backdrop ref={modalRef} onClick={closeModalBgClick}>
						<DetailsModalWrapper
							data={data}
							modalVariant={modalVariant}
							setShowModal={setShowModal}
							setShowPlayer={setShowPlayer}
							handleToast={handleToast}
						/>
					</Backdrop>
				</motion.div>
			</AnimatePresence>
			{showPlayer && (
				<PlayerModal
					id={id}
					setShowPlayer={setShowPlayer}
					videosData={data?.videos?.results}
				/>
			)}
		</>
	);
}

DetailsModal.propTypes = {
	id: PropTypes.number,
	setShowModal: PropTypes.func,
	data: PropTypes.object,
};

export default DetailsModal;
