import tw, { styled } from "twin.macro";

export const HeroSkeleton = styled.div`
	${tw`
        bg-[#222]
        w-full
        h-[400px]
        mt-20
        mb-8
        animate-pulse
    `}
`;

export const Row = styled.div`
	${tw`
        flex
        mt-5
        py-3
        px-6
        w-full
        space-x-4
        overflow-x-scroll
        overflow-y-hidden
    `}
`;

export const SlideSkeleton = styled.div`
	${tw`
        h-[150px]
        w-full
        bg-[#222]
        rounded-lg
        animate-pulse
    `}

	aspect-ratio: 16 / 9;
`;
