import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import * as ROUTES from "./constants/routes";
import { BrowseFilms, BrowseSeries } from "./containers";
import { ToastContextProvider } from "./context/toast-context";

import { useAuthStateChanged } from "./hooks";
import { Home, Browse, SignIn, SignUp, NotFound } from "./pages";

function App() {
	const user = useAuthStateChanged();

	return (
		<ToastContextProvider>
			<Router>
				<ScrollToTop>
					<Routes>
						<Route
							path={ROUTES.HOME}
							element={user ? <Navigate to={ROUTES.BROWSE} /> : <Home />}
						/>

						<Route
							path={ROUTES.SIGNIN}
							element={user ? <Navigate to={ROUTES.BROWSE} /> : <SignIn />}
						/>

						<Route
							path={ROUTES.SIGNUP}
							element={user ? <Navigate to={ROUTES.BROWSE} /> : <SignUp />}
						/>

						<Route
							path={ROUTES.BROWSE}
							element={!user ? <Navigate to={ROUTES.SIGNIN} /> : <Browse />}>
							{/* Home route ??? */}

							{/* Films route */}
							<Route
								path={ROUTES.BROWSE + ROUTES.FILMS}
								element={<BrowseFilms />}
							/>

							{/* Series route */}
							<Route
								path={ROUTES.BROWSE + ROUTES.SERIES}
								element={<BrowseSeries />}
							/>

							{/* Search route ??? */}
						</Route>

						<Route path="*" element={<NotFound />} />
					</Routes>
				</ScrollToTop>
			</Router>
		</ToastContextProvider>
	);
}

export default App;
