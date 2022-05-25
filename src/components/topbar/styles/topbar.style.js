import tw, { styled } from "twin.macro";

export const Wrapper = styled.nav`
	${tw`
        fixed
        top-0
        w-full
        h-20
        px-4
        py-4
        gap-x-2
        transition
        duration-200
        z-20

        lg:px-8
        2xl:py-10
    `}
	background-color: ${({ isDark }) => (isDark ? "#000" : "rgba(0, 0, 0, 0)")};
`;

export const Inner = styled.div`
	${tw`
        flex
        justify-between
        items-center
        h-full
    `}
`;

export const Group = styled.div`
	${tw`
        flex
        items-center
    `}
`;

/* =============== LEFT SIDE ==================== */
export const LeftGroup = styled(Group)`
	${tw`
        space-x-4
    `}
`;

export const Logo = styled.img`
	${tw`
        h-[34px]
        w-[100px]
        mr-4  
        
        2xl:(h-[50px] w-[144px])
    `}
	flex-shrink: 0;
`;

export const Menu = styled.div`
	${tw`
        flex
        items-center
        space-x-6
    `}
`;

export const MenuItem = styled.span`
	${tw`
        inline-block
        text-gray-400
        font-semibold

        hover:text-white
        active:text-white
    `}

	color: ${({ active }) => active && "#fff"};
`;

/* =============== RIGHT SIDE ==================== */

/* Profile Menu */
export const Profile = styled.div`
	${tw`
        relative
    `}
	& > * {
		cursor: pointer;
	}
`;

export const ProfileImage = styled.img`
	${tw`
        rounded
        h-[32px]
        w-[32px]
        bg-contain

        xl:(h-[42px] w-[42px])
    `}
	background: url(${({ src }) => src});
`;

export const DropDown = styled.div`
	${tw`
        absolute
        top-[34px]
        right-0
        w-[160px]
        bg-[rgba(0,0,0,0.7)]
        text-white
        border
        border-[#333]

        xl:(top-[44px])
    `}
	& div {
		padding: 0.625rem;
		justify-content: space-between;
		&:hover {
			background-color: black;
		}
	}
	& div img {
		transform: scale(0.8);
	}
`;

export const DropDownItem = styled.div`
	${tw`
        flex
        items-center
        justify-between
    `}
`;

export const DropDownItemLink = styled.a`
	${tw`
        text-[1.2rem]
        text-right
        ml-auto

        hover:underline
    `}
`;

export const DropDownItemText = styled.span`
	${tw`
        text-[1.2rem]
        text-right
        ml-auto

        hover:underline
    `}
`;
