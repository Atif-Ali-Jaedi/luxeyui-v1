"use client";

import { CrossIcon, SearchIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export function PlaceholdersAndVanishInput({
	placeholders,
	onChange,
	onSubmit,
}) {
	const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

	const intervalRef = useRef(null);
	const startAnimation = () =>
		(intervalRef.current = setInterval(
			() =>
				setCurrentPlaceholder(prev => (prev + 1) % placeholders.length),
			3000,
		));

	const handleVisibilityChange = () => {
		if (document.visibilityState !== "visible" && intervalRef.current) {
			clearInterval(intervalRef.current); // Clear the interval when the tab is not visible
			intervalRef.current = null;
		} else if (document.visibilityState === "visible") startAnimation(); // Restart the interval when the tab becomes visible
	};

	useEffect(() => {
		startAnimation();
		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);

			document.removeEventListener(
				"visibilitychange",
				handleVisibilityChange,
			);
		};
	}, [placeholders]);

	const canvasRef = useRef(null);
	const newDataRef = useRef([]);
	const inputRef = useRef(null);
	const [value, setValue] = useState("");
	const [animating, setAnimating] = useState(false);

	const draw = useCallback(() => {
		if (!inputRef.current) return;
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d", { willReadFrequently: true });
		if (!ctx) return;

		canvas.width = 800;
		canvas.height = 800;
		ctx.clearRect(0, 0, 800, 800);
		const computedStyles = getComputedStyle(inputRef.current);

		const fontSize = parseFloat(
			computedStyles.getPropertyValue("font-size"),
		);
		ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
		ctx.fillStyle = "#a1a1aa";
		ctx.fillText(value, 16, 40);

		const imageData = ctx.getImageData(0, 0, 800, 800);
		const pixelData = imageData.data;
		const newData = [];

		for (let t = 0; t < 800; t++) {
			let i = 4 * t * 800;
			for (let n = 0; n < 800; n++) {
				let e = i + 4 * n;
				if (
					pixelData[e] !== 0 &&
					pixelData[e + 1] !== 0 &&
					pixelData[e + 2] !== 0
				) {
					newData.push({
						x: n,
						y: t,
						color: [
							pixelData[e],
							pixelData[e + 1],
							pixelData[e + 2],
							pixelData[e + 3],
						],
					});
				}
			}
		}

		newDataRef.current = newData.map(({ x, y, color }) => ({
			x,
			y,
			r: 1,
			color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
		}));
	}, [value]);

	useEffect(() => {
		draw();
	}, [value, draw]);

	const animate = start => {
		const animateFrame = (pos = 0) => {
			requestAnimationFrame(() => {
				const newArr = [];
				for (let i = 0; i < newDataRef.current.length; i++) {
					const current = newDataRef.current[i];
					if (current.x < pos) {
						newArr.push(current);
					} else {
						if (current.r <= 0) {
							current.r = 0;
							continue;
						}
						current.x += Math.random() > 0.5 ? 1 : -1;
						current.y += Math.random() > 0.5 ? 1 : -1;
						current.r -= 0.05 * Math.random();
						newArr.push(current);
					}
				}
				newDataRef.current = newArr;
				const ctx = canvasRef.current?.getContext("2d");
				if (ctx) {
					ctx.clearRect(pos, 0, 800, 800);
					newDataRef.current.forEach(t => {
						const { x: n, y: i, r: s, color: color } = t;
						if (n > pos) {
							ctx.beginPath();
							ctx.rect(n, i, s, s);
							ctx.fillStyle = color;
							ctx.strokeStyle = color;
							ctx.stroke();
						}
					});
				}
				if (newDataRef.current.length > 0) {
					animateFrame(pos - 8);
				} else {
					setValue("");
					setAnimating(false);
				}
			});
		};
		animateFrame(start);
	};

	const handleKeyDown = e => {
		if (e.key === "Enter" && !animating) vanishAndSubmit();
	};

	const vanishAndSubmit = () => {
		setAnimating(true);
		draw();

		const value = inputRef.current?.value || "";
		if (value && inputRef.current) {
			const maxX = newDataRef.current.reduce(
				(prev, current) => (current.x > prev ? current.x : prev),
				0,
			);
			animate(maxX);
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		vanishAndSubmit();
		onSubmit && onSubmit(e);
	};
	return (
		<form
			className={cn(
				"relative mt-1 h-14 w-[calc(100%-3em)] overflow-hidden rounded-full transition duration-200",
				value && "",
			)}
			onSubmit={handleSubmit}
		>
			<canvas
				className={cn(
					"pointer-events-none absolute left-[2.5rem] top-[0.865rem] origin-top-left scale-50 transform pr-20 text-base invert filter dark:invert-0",
					!animating ? "opacity-0" : "opacity-100",
				)}
				ref={canvasRef}
			/>
			<SearchIcon
				className="absolute left-4 top-4 text-zinc-400 dark:text-zinc-500"
				width={24}
				height={24}
			/>
			<input
				onChange={e => {
					if (!animating) {
						setValue(e.target.value);
						onChange && onChange(e);
					}
				}}
				onKeyDown={handleKeyDown}
				ref={inputRef}
				value={value}
				type="text"
				className={cn(
					"relative z-50 h-full w-full rounded-full border-none bg-transparent pl-12 pr-20 text-sm text-zinc-700 placeholder:text-zinc-500 focus:outline-none focus:ring-0 dark:text-zinc-400 dark:placeholder:text-zinc-600 sm:text-base",
					animating && "text-transparent dark:text-transparent",
				)}
			/>
			<motion.button
				disabled={!value}
				type="submit"
				className="absolute right-2 top-1/2 z-50 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-400 transition-colors duration-300 hover:bg-zinc-100 dark:border-zinc-800 dark:text-smoke dark:hover:bg-zinc-800"
				animate={{ opacity: value ? 1 : 0 }}
			>
				<CrossIcon width={14} />
			</motion.button>
			<div className="pointer-events-none absolute inset-0 flex items-center rounded-full">
				<AnimatePresence mode="wait">
					{!value && (
						<motion.p
							initial={{
								y: 5,
								opacity: 0,
							}}
							key={`current-placeholder-${currentPlaceholder}`}
							animate={{
								y: 0,
								opacity: 1,
							}}
							exit={{
								y: -15,
								opacity: 0,
							}}
							transition={{
								duration: 0.3,
								ease: "linear",
							}}
							className="w-[calc(100%-2rem)] truncate pl-4 text-left text-sm font-normal text-neutral-500 dark:text-zinc-500 sm:pl-12 sm:text-base"
						>
							{placeholders[currentPlaceholder]}
						</motion.p>
					)}
				</AnimatePresence>
			</div>
		</form>
	);
}
