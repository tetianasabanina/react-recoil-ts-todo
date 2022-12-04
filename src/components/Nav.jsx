import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { authAtom } from "../state";
import { useUserActions } from "../_actions";

function Nav() {
	const auth = useRecoilValue(authAtom);
	const userActions = useUserActions();

	// only show nav when logged in
	if (!auth) return null;

	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark">
			<div className="navbar-nav">
				<NavLink end to="/" className="nav-item nav-link">
					Home
				</NavLink>
				<a onClick={userActions.logout} className="nav-item nav-link">
					Logout
				</a>
			</div>
		</nav>
	);
}

export { Nav };
