import Layout from "./pages/layout/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import ListPage from "./pages/listPage/listPage";
import SinglePage from "./pages/singlePage/singlePage";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import ProfilePage from "./pages/profilePage/profilePage";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <HomePage />,
				},
				{
					path: "/list",
					element: <ListPage />,
				},
				{
					path: "/:id",
					element: <SinglePage />,
				},
				{
					path: "/profile",
					element: <ProfilePage />,
				},
				{
					path: "/login",
					element: <Login />,
				},
				{
					path: "/register",
					element: <Register />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
