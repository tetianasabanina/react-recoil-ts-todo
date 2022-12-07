import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { TodoStatus } from "./components/TodoStatus";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { Nav, PrivateRoute } from "./components";
import { history } from "./_helpers";
import { Home } from "./pages";
import { Login } from "./pages";

import "./App.css";
import { Datepicker } from "./components/Datepicker";

const App = () => {
  return (
    <div>
      {/* <BrowserRouter history={history}>
				<Nav />
				<div className="container pt-4 pb-4">
					<Routes>
						<PrivateRoute exact path="/" component={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="*" element={<Navigate to="/" />} />
						<Navigate to="/" />
					</Routes>
				</div>
			</BrowserRouter> */}
      <TodoStatus />
      <AddTodo />
      <TodoList />
      <Datepicker />
    </div>
  );
};
export default App;
