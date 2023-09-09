import React from 'react'
import './widget.css'

function Widget({ label, count }) {
	return (
		<div className="bg-white flex flex-wrap mx-auto h-3/4 font-semibold text-gray-600 px-4 items-center text-center rounded-lg shadow-lg border">
			<p className="px-3 text-lg">{label}</p>
			<p className="text-3xl px-1 text-sky-600">{count}</p>
			{/* <button onClick={handleClick}>Increment</button> */}
		</div>
	)
}

export default Widget
