import React, { useRef, useState } from "react";
import Box from "./Box";

const Tictactoe = () => {
	const [data, setData] = useState(Array(9).fill(""));
	const player_img = ["/user1.jpg", "/user2.jpg"];

	let div_ref = useRef(null);

	const [count, setCount] = useState(0);
	const [lock, setLock] = useState(false);
	const [winner, setWinner] = useState("");
	const [winner_img, setWinner_img] = useState("");

	function toggle(e, i) {
		console.log(i);

		if (lock | (data[i] !== "")) return;
		const newData = [...data];
		if (count % 2 === 0) {
			newData[i] = "❌";
		} else {
			newData[i] = "⭕";
		}
		setData(newData);
		setCount(count + 1);
		checkWin(newData);
	}

	function checkWin(data) {
		if (data[0] === data[1] && data[1] === data[2] && data[2] != "") won(data);
		else if (data[0] === data[4] && data[4] === data[8] && data[8] != "")
			won(data);
		else if (data[1] === data[4] && data[4] === data[7] && data[7] != "")
			won(data);
		else if (data[2] === data[5] && data[5] === data[8] && data[8] != "")
			won(data);
		else if (data[2] === data[4] && data[4] === data[6] && data[6] != "")
			won(data);
		else if (data[0] === data[3] && data[3] === data[6] && data[6] != "")
			won(data);
		else if (data[3] === data[4] && data[4] === data[5] && data[5] != "")
			won(data);
		else if (data[6] === data[7] && data[7] === data[8] && data[8] != "")
			won(data);
		console.log(data);
	}

	function won() {
		console.log(count);
		if (count % 2 === 0) {
			setWinner("Player 1");
			setWinner_img(player_img[0]);
		} else {
			setWinner("Player 2");
			setWinner_img(player_img[1]);
		}
		div_ref.current.style.display = "flex";
		setLock(true);
	}

	function reset() {
		const empty = Array(9).fill("");
		setData(empty);
		setCount(0);
		setLock(false);
		div_ref.current.style.display = "none";
	}

	return (
		<div className="bg-zinc-900 h-screen w-screen flex flex-col items-center justify-evenly text-white">
			<h1 className="text-4xl tracking-tighter">TIC - TAC - TOE</h1>
			<div className="boxes flex flex-col gap-1">
				<div className="flex gap-1">
					{[0, 1, 2].map((i) => (
						<Box data={data[i]} key={i} onClick={(e) => toggle(e, i)} />
					))}
				</div>

				<div className="flex gap-1">
					{[3, 4, 5].map((i) => (
						<Box data={data[i]} key={i} onClick={(e) => toggle(e, i)} />
					))}
				</div>

				<div className="flex gap-1">
					{[6, 7, 8].map((i) => (
						<Box data={data[i]} key={i} onClick={(e) => toggle(e, i)} />
					))}
				</div>
			</div>
			<button
				onClick={() => {
					reset();
				}}
				className="bg-zinc-800 px-6 py-3 rounded-md cursor-pointer active:scale-95 hover:bg-zinc-700"
			>
				Reset
			</button>
			<div
				ref={div_ref}
				style={{ display: "none" }}
				className="absolute bg-zinc-800 h-100 w-100 rounded-lg flex items-center justify-center flex-col gap-5"
			>
				<img
					className="rounded-full h-40 w-40 object-cover"
					src={winner_img}
					alt=""
				/>
				<span className="text-3xl">{winner}</span>
				<h1>has won the game!</h1>
			</div>
		</div>
	);
};

export default Tictactoe;
