import tw, { styled } from "twin.macro";

export const Container = styled.footer``;

export const Wrapper = styled.div`
	${tw`
        flex
        flex-col
        max-w-[1000px]
        mx-auto
        py-8 px-6
        text-[#757575]

        lg:(py-12 px-4)
    `}
`;

export const Text = styled.p`
	${tw`
        text-base
        my-[30px]
    `}
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	gap: 15px;

	@media (min-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	}
`;

export const Column = styled.ul`
	${tw`
        flex
        flex-col
        p-0
        m-0
        mt-4
        space-y-[20px]
    `}
`;

export const Item = styled.li`
	font-size: 0.8rem;
`;

export const Link = styled.a`
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export const Credits = styled.div`
	${tw`
        text-white
        text-base
        text-center
        pt-10
        lg:text-xl
    `}
	& > a {
		font-weight: bold;
		color: #ed5c68;
	}
`;
