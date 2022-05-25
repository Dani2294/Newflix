import React, { useContext, useEffect, useState } from "react";
import {
	Button,
	FormFrame,
	Input,
	Link,
	Text,
	Title,
} from "./styles/form.style";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { logIn } from "../../services/firebase/auth";
import ToastContext from "../../context/toast-context";

function SignInForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setToast } = useContext(ToastContext);
	const navigate = useNavigate();

	// useEffect to set toast to be null so it doesn't display
	useEffect(() => {
		setToast(null);
	}, [setToast]);

	// If fields are empty, disable the button
	const isInvalid = email === "" || password === "";

	async function handleSubmit(e) {
		e.preventDefault();

		// We try to login and get errors messages from account creation in the variable logInAttempt
		const logInAttempt = await logIn(email, password);

		// redirect to browse page if there is no errors
		if (!logInAttempt) {
			navigate("/browse");
		} else {
			// display errors messages
			setToast({ message: logInAttempt, type: "danger" });
		}
	}

	return (
		<FormFrame onSubmit={handleSubmit}>
			<Title>Sign In</Title>
			<Input
				value={email}
				onChange={({ target }) => setEmail(target.value)}
				type="email"
				placeholder="Email"
			/>
			<Input
				value={password}
				onChange={({ target }) => setPassword(target.value)}
				type="password"
				placeholder="Password"
			/>
			<Button disabled={isInvalid} type="submit">
				Sign In
			</Button>
			<Text>
				New to Newflix ?{" "}
				<ReactRouterLink to="/signup">
					<Link>Sign up now</Link>
				</ReactRouterLink>
				.
			</Text>
		</FormFrame>
	);
}

export default SignInForm;
