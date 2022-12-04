import { useSetRecoilState } from "recoil";

import { history, useFetchWrapper } from "../_helpers";
import { authAtom, usersAtom } from "../state";

export { useUserActions };

function useUserActions() {
	const baseUrl = `${process?.env.REACT_APP_API_URL}/users`;
	const fetchWrapper = useFetchWrapper();
	const setAuth = useSetRecoilState(authAtom);
	const setUsers = useSetRecoilState(usersAtom);

	return {
		login,
		logout,
		getAll,
	};

	async function login(username, password) {
		const user = await fetchWrapper.post(`${baseUrl}/authenticate`, {
			username,
			password,
		});
		// store user details and jwt token in local storage to keep user logged in between page refreshes
		localStorage.setItem("user", JSON.stringify(user));
		setAuth(user);
		// get return url from location state or default to home page
		const { from } = history.location.state || { from: { pathname: "/" } };
		history.push(from);
	}

	function logout() {
		// remove user from local storage, set auth state to null and redirect to login page
		localStorage.removeItem("user");
		setAuth(null);
		history.push("/login");
	}

	function getAll() {
		return fetchWrapper.get(baseUrl).then(setUsers);
	}
}
