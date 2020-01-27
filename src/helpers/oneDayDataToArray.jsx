import React from 'react'

export const values = data => {
  return [
    {
      icon: <i className="fas fa-temperature-high" />,
      value: data.temp.toFixed(0) + ' ℃',
    },
    {
      icon: <i className="fas fa-cloud-rain" />,
      value: data.precipitation + ' %',
    },
    {
      icon: <i className="fas fa-wind" />,
      value: data.wind + ' mps',
    },
    {
      icon: <i className="fas fa-tint" />,
      value: data.humidity + ' %',
    },
  ]
}
