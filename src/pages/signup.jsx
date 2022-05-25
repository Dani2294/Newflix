import React from "react";
import { Form, Hero, Layout } from "../components";
import SignUpForm from "../components/form/SignUpForm";

function SignUp() {
	return (
		<Layout>
			<Hero>
				<Form>
					<SignUpForm />
				</Form>
			</Hero>
		</Layout>
	);
}

export default SignUp;
