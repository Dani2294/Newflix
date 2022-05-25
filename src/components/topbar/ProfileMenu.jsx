import React, { useState } from "react";
import {
	DropDown,
	DropDownItem,
	DropDownItemLink,
	DropDownItemText,
	Profile,
	ProfileImage,
} from "./styles/topbar.style";
import { getCurrentUser, logOut } from "../../services/firebase/auth";
import { useNavigate } from "react-router-dom";

function ProfileMenu() {
	const [showDropDown, setShowDropDown] = useState(false);
	const navigate = useNavigate();
	const userData = getCurrentUser();

	const handleSignOut = () => {
		logOut();
		navigate("/");
	};

	return (
		<Profile>
			<ProfileImage
				onClick={() => setShowDropDown(!showDropDown)}
				src={`/assets/users/${userData?.photoURL}.png`}
			/>
			{showDropDown && (
				<DropDown>
					<DropDownItem>
						<ProfileImage src={`/assets/users/${userData?.photoURL}.png`} />
						<DropDownItemText>{userData?.displayName}</DropDownItemText>
					</DropDownItem>
					<DropDownItem>
						<DropDownItemLink
							href="https://daniel-agbato.vercel.app/"
							rel="noreferrer"
							target="_blank">
							My Portfolio
						</DropDownItemLink>
					</DropDownItem>
					<DropDownItem>
						<DropDownItemLink
							href="https://github.com/Dani2294"
							rel="noreferrer"
							target="_blank">
							My GitHub
						</DropDownItemLink>
					</DropDownItem>
					<DropDownItem>
						<DropDownItemText onClick={handleSignOut}>
							Sign Out
						</DropDownItemText>
					</DropDownItem>
				</DropDown>
			)}
		</Profile>
	);
}

export default ProfileMenu;
