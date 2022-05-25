import { createContext, useState } from "react";

const ToastContext = createContext();

export function ToastContextProvider({ children }) {
	const [toast, setToast] = useState(null);

	return (
		<ToastContext.Provider value={{ toast, setToast }}>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastContext;
