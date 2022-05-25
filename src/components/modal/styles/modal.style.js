import tw, { styled } from "twin.macro";
import { motion } from "framer-motion";
import { BrowseFeatureButton } from "../../hero/styles/hero.style";
import { MetaButton, MetaButtonImage } from "../../slides/styles/slides.style";

/* ============== Details modals ==================== */
export const Backdrop = styled(motion.div)`
	${tw`
        flex
        justify-center
        fixed
        inset-0
        h-full
        w-full
        bg-black
        bg-opacity-75
        overflow-y-scroll
        px-2
        overscroll-none
        z-30
    `}
`;

export const Wrapper = styled(motion.div)`
	${tw`
        relative
        max-w-[1024px]
        w-full
        h-full
        mx-auto
        mt-24
        grid
        grid-rows-2
        rounded
        bg-black
        z-20
        overscroll-none

        lg:mx-4
    `}
`;

/* Details Modal Header */

export const ModalHeader = styled.div`
	${tw`
        relative
        h-full
        rounded-t-lg
    `}
	flex-shrink: 0;
	background: linear-gradient(
			to top,
			rgba(0, 0, 0, 1) 0,
			rgba(0, 0, 0, 0.85) 20%,
			rgba(0, 0, 0, 0) 100%
		),
		url(${({ src }) => src && src}) no-repeat 0% 20% / cover;
`;

export const HeaderButtons = styled.div`
	${tw`
        relative
        flex
        items-center
        space-x-8
        absolute
        left-0
        bottom-20
        w-full
        px-4

        lg:px-8
    `}
`;

export const HeaderButtonPlay = styled(BrowseFeatureButton)`
	margin-top: 0;
`;

export const HeaderButtonList = styled(MetaButton)``;

export const ModalButtonImg = styled(MetaButtonImage)``;

export const CloseWrapper = styled.div`
	${tw`
        absolute
        top-0
        right-0
        bg-black
        bg-opacity-20
        flex
        items-center
        justify-between
        p-3
        rounded-bl-lg
        z-10
    `}
`;

export const CloseBtn = styled(MetaButton)`
	transform: rotate(45deg);
	width: 30px;
	@media (max-width: 600px) {
		width: 20px;
	}
`;

/* Details Modal Content */
export const ModalContent = styled.div`
	${tw`
        px-5
        py-6
        pb-12
        text-white
        overflow-y-scroll
        overflow-x-hidden

        lg:px-8
    `}
`;

export const ContentHeader = styled.div`
	margin-bottom: 2rem;
`;

export const ContentHeaderTitle = styled.div`
	${tw`
        text-3xl
        font-bold
        leading-[1.1]
        flex-1
        mb-1

        lg:text-5xl
    `}
`;

export const ContentHeaderRecommendation = styled.p`
	${tw`
        text-xl
        text-[#46d369]
        font-bold
        mt-3
    `}
`;

export const ContentMeta = styled.div`
	${tw`
        space-y-1
    `}
`;

export const ContentMetaText = styled.p`
	${tw`
        text-[rgba(255,255,255,0.6)]
        text-lg
        font-bold
    `}
`;

export const ContentOverview = styled.p`
	${tw`
        text-lg
        mt-10
        mb-8
        text-[rgba(255,255,255,0.85)]
        leading-[1.6]
    
        lg:(text-2xl max-w-[80%])
    `}
`;

/* ==================== Player Modal =========================== */
export const PlayerWrapper = styled.div`
	${tw`
        fixed
        inset-0
        w-full
        h-full
        bg-black
        z-[100]
        overflow-y-hidden
        overscroll-none
    `}
`;

export const PlayerCloseBtn = styled.div`
	${tw`
        absolute
        top-[65px]
        right-[50%]
        z-50
        rounded-full
        p-2
        border-2
        border-white
        bg-transparent
        cursor-pointer
        transition
        duration-300
    `}
    transform: translate(50%) rotate(45deg);
	& > img {
		filter: brightness(0) invert(1);
		width: 30px;
		user-select: none;
        @media (max-width: 600px) {
            width: 22px;
	}
`;

export const PlayerText = styled.h1`
	${tw`
        text-white
        text-5xl
        font-bold
        text-center
        mt-[40%]
        px-4
    `}
`;
