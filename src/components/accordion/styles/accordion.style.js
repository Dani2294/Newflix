import tw, { styled } from "twin.macro";

export const Wrapper = styled.section``;

export const Inner = styled.div`
	${tw`
        flex
        flex-col
        pt-[70px] px-[5%]
        max-w-[815px]
        mx-auto

        lg:px-11
    `}
`;

export const Title = styled.h2`
	${tw`
        text-4xl
        text-white
        leading-[1.1]
        font-bold
        text-center
        mb-2

        md:text-5xl
    `}
`;

export const List = styled.div`
	${tw`
        list-none
        my-6
        w-full
    `}
`;

export const Item = styled.div`
	${tw`
        block
        mb-2.5
    
        last:mb-0
    `}
`;

export const Button = styled.button`
    ${tw`
        border-none
        flex
        justify-between
        items-center
        w-full
        cursor-pointer
        text-base
        text-white
        bg-[#303030]
        py-[0.8em] px-5
        mb-px
        select-none

        md:text-[26px]
    `}
	img {
		filter: brightness(0) invert(1);
		width: 24px;
		user-select: none;
        @media (max-width: 600px) {
            width: 16px;
	}
`;

export const Body = styled.div`
	${tw`
        text-base
        text-white
        font-normal
        leading-[1.2]
        bg-[#303030]
        whitespace-pre-wrap
        select-none
        overflow-hidden
        md:text-[26px]
    `}
	p {
		display: block;
		padding: 1.2em;
	}
`;
