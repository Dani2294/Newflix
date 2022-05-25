import tw, { styled } from "twin.macro";
import { Button } from "../../form/styles/form.style";

export const Container = styled.header`
	${tw`
        flex
        flex-col
        pt-8
    `}
	background: linear-gradient(180deg, rgba(25,25,25,1) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0.19) 40%, rgba(0,0,0,1) 100%),
		url(${({ src }) => (src ? src : "/assets/images/home-bg-recent.jpeg")})
			no-repeat 0% 20%/cover;
`;

/* =================== HOME HERO SECTION ====================== */

export const HomeHeroContainer = styled.div`
	${tw`
        flex
        flex-col
        items-center
        py-36 px-11
        text-center
    `}
`;

export const HomeTitle = styled.h1`
	${tw`
        text-3xl
        text-white
        font-bold
        max-w-[640px]
        mx-auto
        leading-[1.1]

        sm:text-5xl
        xl:text-[4rem]
    `}
`;

export const HomeSubtitle = styled.h2`
	${tw`
        text-lg
        text-white
        max-w-[640px]
        my-4 mx-auto
        font-normal

        sm:text-2xl
    `}
`;

/* =================== BROWSE HERO SECTION ====================== */

export const BrowseFeature = styled.div`
	${tw`
        flex
        flex-col
        px-8
        pt-28
        pb-72
        text-white

        lg:(px-14 pt-40 pb-80 max-w-2xl)
        2xl:(max-w-5xl)
    `}
`;

export const BrowseFeatureTitle = styled.h1`
	${tw`
        text-5xl
        font-bold
        2xl:text-7xl
    `}
`;

export const BrowseFeatureText = styled.p`
	${tw`
        text-lg
        font-medium
        my-6
        leading-[1.5]

        2xl:(text-xl my-8)
    `}
	text-shadow: 0 2px 1px 2px rgba(0,0,0,0.9)
`;

export const BrowseFeatureButtons = styled.div`
	${tw`
        md:(flex space-x-4)
    `}
`;

export const BrowseFeatureButton = styled.button`
	${tw`
        flex
        items-center
        justify-center
        cursor-pointer
        font-bold
        rounded
        px-7
        py-2
        mt-2
        text-[1.25rem]
        transition
        hover:opacity-70
    `}
	background-color: ${({ playBtn }) =>
		playBtn ? "white" : "rgba(109, 109, 110, 0.7)"};
	color: ${({ playBtn }) => (playBtn ? "black" : "white")};

	& > img {
		width: 20px;
		margin-right: 8px;
		filter: ${({ playBtn }) => !playBtn && "brightness(0) invert(1)"};
		@media (max-width: 600px) {
			width: 20px;
		}
	}
`;

/* =================== NOT FOUND HERO SECTION ====================== */

export const NotFoundHeroContainer = styled(HomeHeroContainer)`
	${tw`
        py-28
    `}
`;

export const NotFoundHeroTitle = styled(HomeTitle)`
	${tw`
        mb-5
    `}
`;

export const NotFoundHeroImg = styled.img`
	${tw`
        h-auto
        w-[600px]
    `}
`;

export const NotFoundHeroButton = styled(Button)`
	${tw`
        mt-8
        px-8
        py-3
    `}
`;
