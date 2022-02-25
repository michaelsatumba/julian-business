import React from 'react';

function Menu() {
	return (
		<div className="flex justify-evenly">
			{/* logo */}
			<p>Julian Sanchez</p>
			{/* hamburger */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
			{/* order here button */}
			<button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
				<span>Order Here</span>
			</button>
		</div>
	);
}

export default Menu;
