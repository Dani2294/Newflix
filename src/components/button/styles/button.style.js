import tw, { styled } from "twin.macro";

export const Btn = styled.button`
	${tw`
        inline-block
        bg-nf-red
        whitespace-nowrap
        text-base
        h-[fit-content]
        w-20
        py-1 px-3.5
        rounded
        border-none
        cursor-pointer

        hover:bg-nf-red-hover
    `}
`;
