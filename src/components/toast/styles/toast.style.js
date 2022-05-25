import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";

export const ToastNotif = styled(motion.div)`
	${tw`
        fixed
        top-5
        left-[50%]
        mx-auto
        py-2
        px-4
        text-center
        text-white
        rounded
        shadow-lg
        z-50
    `}

	transform: translateX(-50%);
	background-color: ${({ bg }) => bg};
`;
