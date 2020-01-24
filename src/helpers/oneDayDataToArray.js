import React from 'react';

export const values = (data) => {
	return [
		{
			icon:  <i className="fas fa-temperature-high"></i>,
			value: data.temp.toFixed(0) + " ℃"
		}, 
		{
			icon:  <i className="fas fa-cloud-rain"></i>,
			value: data.precipitation + " %"
		},
		{
			icon:  <i className="fas fa-wind"></i>,
			value: data.wind + " mps"
		},
		{
			icon:  <i className="fas fa-tint"></i>,
			value: data.humidity + " %"
		}
	]
}