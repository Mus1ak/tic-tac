import React from "react";

const Box = ({ onClick, ref, data }) => {
	return (
		<div
			onClick={onClick}
			ref={ref}
			className="bg-zinc-700 h-30 w-30 cursor-pointer rounded-md hover:bg-zinc-800 flex items-center justify-center text-5xl"
		>
			{data}
		</div>
	);
};

export default Box;
