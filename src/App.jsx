import "./App.css";
import axios from "axios";
import useSWR from "swr";
import useOnline from "./customHooks/useOnline";

function App() {
	const { todos, error, isLoading } = useSWRData("http://localhost:3333");
	const onlineStatus = useOnline();

	if (isLoading) return <h1>Loading....</h1>;
	if (error) return <h3> error has occurred..</h3>;
	return (
		<div className="text-red-950 font-extrabold   lg:text-blue-400 grid  gap-2 grid-cols-1 text-center  ">
			<p>Custom Hooks</p>
			<p>The Status is {onlineStatus ? "online" : "offline"}</p>
			{todos.map((todo) => (
				<div key={todo.age}>
					<p>{todo.name}</p>
					<p>{todo.age}</p>
				</div>
			))}
		</div>
	);
}

export default App;

async function dataFetcher(url) {
	const data = await axios({
		method: "get",
		url: url,
	}).then((response) => response.data);

	return data;

	// const response = await fetch(url);
	// const data = await response.json();
	// return data;
}

function useSWRData(url) {
	const { data, error, isLoading } = useSWR(url, dataFetcher);
	return {
		todos: data,
		error,
		isLoading,
	};
}
