import axios from "axios";

export const weatherRequest = ({
	url,
	parameters,
	mapper,
}) => {
	return axios
		.get(url, { parameters })
		.then(response => {
			mapper(response);
		});
} 