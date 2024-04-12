import axios from "axios";
import useSWR from "swr";
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

export default useSWRData;
