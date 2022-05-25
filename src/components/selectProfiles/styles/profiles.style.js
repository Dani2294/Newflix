import tw, { styled } from "twin.macro";

export const Container = styled.div`
	${tw`
        flex
        flex-col
        justify-center
        items-center
        min-h-screen
        pt-8
        px-[5%]
    `}
`;

export const Title = styled.h1`
	${tw`
        text-center
        text-4xl
        mb-8

		lg:text-6xl
        2xl:text-8xl
    `}
`;

export const Box = styled.div`
	${tw`
        space-y-4
        cursor-pointer
    `}
`;

export const Picture = styled.img`
	${tw`
        h-36
        w-36
        rounded
        border-4
        border-transparent

        group-hover:(border-white)
        2xl:(h-48 w-48)
    `}
`;

export const Text = styled.p`
	${tw`
        my-3
        text-gray-400
        text-lg
        text-center

        group-hover:text-white
        2xl:text-2xl
    `}
`;

export const Spinner = styled.div`
	position: fixed;
	width: 100%;
	height: 80%;
	background-color: black;
	z-index: 999;
	:after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		background-image: url(/assets/images/spinner.png);
		background-size: contain;
		background-repeat: no-repeat;
		margin-top: -150px;
		margin-left: -75px;
		width: 150px;
		height: 150px;
		animation-name: spin;
		animation-duration: 1000ms;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}
	@-ms-keyframes spin {
		from {
			-ms-transform: rotate(0deg);
		}
		to {
			-ms-transform: rotate(360deg);
		}
	}
	@-moz-keyframes spin {
		from {
			-moz-transform: rotate(0deg);
		}
		to {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
