import React, { useContext } from "react";
import TopBar from "../topbar";
import Footer from "../footer";
import ToastContext from "../../context/toast-context";
import Toast from "../toast";

function Layout({ children, ...props }) {
	const { toast } = useContext(ToastContext);
	return (
		<div>
			{toast && <Toast message={toast.message} type={toast.type} />}
			<TopBar {...props} />
			{children}
			<Footer {...props} />
		</div>
	);
}

export default Layout;
