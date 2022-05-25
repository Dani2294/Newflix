import React from "react";
import { Form, Hero, Layout } from "../components";
import SignInForm from "../components/form/SignInForm";

function SignIn() {
	return (
		<Layout>
			<Hero>
				<Form>
					<SignInForm />
				</Form>
			</Hero>
		</Layout>
	);
}

export default SignIn;
