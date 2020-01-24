import axios from "axios";

export const weatherRequest = ({
	url,
	parameters,
	mapper,
}) => {
	return axios
		.get(url, {params: parameters})
		.then(response => {
			return mapper(response);
		})
} 