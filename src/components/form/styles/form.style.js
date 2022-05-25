import tw, { styled } from "twin.macro";

export const Container = styled.div`
	${tw`
        px-4
        md:(mx-auto px-0 bg-transparent max-w-[450px] min-h-[90vh])
    `}
`;

export const Wrapper = styled.div`
	${tw`
        relative
        top-10
        flex
        flex-col
        py-12
        bg-[rgba(0,0,0,0.7)]
        px-10
        min-h-[550px]

        md:(pt-16 px-14 pb-[0px] rounded)
        md:after:(content-[""] h-[150px] block)
    `}
`;

export const FormFrame = styled.form`
	${tw`
        flex
        flex-col
        w-full
    `}
`;

export const Title = styled.h1`
	${tw`
        mb-5
        text-3xl
        font-bold
        text-white
    `}
`;

export const Input = styled.input`
	${tw`
        bg-[#333]
        rounded
        text-white
        h-12
        leading-[50px]
        py-1.5 px-5
        mb-4
        border-none
        border-b-2
        border-red-500
    `}
`;

export const Button = styled.button`
	${tw`
        bg-nf-red
        rounded
        w-full
        py-4
        mt-4 mb-3
        text-base
        font-bold
        cursor-pointer
        text-white

        hover:bg-nf-red-hover
        disabled:(opacity-50 cursor-not-allowed)
    `}
`;

export const Text = styled.p`
	${tw`
        text-[#737373]
        font-medium
    `}
`;

export const Link = styled.span`
	${tw`
        cursor-pointer
        text-white
        hover:underline
    `}
`;

export const TextSmall = styled.p`
	${tw`
        mt-2.5
        text-xs
        text-[#8c8c8c]
    `}
	& > a {
		color: #0071eb;
		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Error = styled.p``;
