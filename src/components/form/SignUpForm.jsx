import React, { useContext, useEffect, useState } from "react";
import { createNewAccount } from "../../services/firebase/auth";
import {
	Button,
	FormFrame,
	Input,
	Link,
	Text,
	Title,
} from "./styles/form.style";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import ToastContext from "../../context/toast-context";

function SignUpForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setToast } = useContext(ToastContext);
	const navigate = useNavigate();

	// useEffect to set toast to be null so it doesn't display
	useEffect(() => {
		setToast(null);
	}, [setToast]);

	// If fields are empty, disable the button
	const isInvalid = email === "" || password === "" || name === "";

	async function handleSubmit(e) {
		e.preventDefault();

		// Do stuff with firebase auth
		// We create a new account and get errors messages from account creation in the variable newAccount
		const newAccount = await createNewAccount(name, email, password);

		// if there is no errors, redirect to browse page
		if (!newAccount) {
			navigate("/browse");
		} else {
			// display errors messages
			setToast({ message: newAccount, type: "danger" });
		}
	}

	return (
		<FormFrame onSubmit={handleSubmit}>
			<Title>Sign Up</Title>
			<Input
				value={name}
				onChange={({ target }) => setName(target.value)}
				type="text"
				placeholder="First Name"
			/>
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
				Sign Up
			</Button>
			<Text>
				Already a user ?{" "}
				<ReactRouterLink to="/signin">
					<Link>Sign in now</Link>
				</ReactRouterLink>
				.
			</Text>
		</FormFrame>
	);
}

export default SignUpForm;
