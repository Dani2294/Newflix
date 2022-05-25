import tw, { styled } from "twin.macro";

export const Wrapper = styled.form`
	${tw`
        flex
        flex-col
        justify-center
        items-center
        flex-wrap
        mx-auto
        max-w-[815px]
        pt-3.5
        px-[5%]
        pb-16

        lg:(flex-row max-w-[950px])
    `}
`;

export const Text = styled.h3`
	${tw`
        text-white
        font-bold
        text-lg
        text-center
        px-[5%]
        pb-5
        max-w-[815px]
        mx-auto
        leading-5

        sm:px-[10%]
        lg:(max-w-none text-2xl px-[5%] leading-normal)
    `}
	text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const Frame = styled.div`
	${tw`
        text-center
        w-full

        md:(flex mx-auto max-w-[700px])
    `}
`;

export const Input = styled.input`
	${tw`
        flex-1
        w-full
        mx-auto
        border-none
        p-2.5
        h-12
        text-black

        sm:(h-16)
    `}
`;

export const Button = styled.a`
	${tw`
        flex
        items-center
        justify-center
        max-w-max
        mt-5
        font-bold
        h-12
        bg-nf-red
        text-white
        px-8
        text-base
        border-none
        cursor-pointer
        mx-auto
        hover:bg-nf-red-hover

        md:(h-16 text-[26px] mt-0 mx-0 font-normal border-l border-[#333])
    `}
	img {
		margin-left: 10px;
		margin-top: 3px;
		filter: brightness(0) invert(1);
		width: 18px;
		@media (max-width: 1000px) {
			width: 16px;
		}
	}
`;
