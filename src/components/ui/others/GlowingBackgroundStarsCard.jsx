"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const GlowingStarsBackgroundCard = ({ className, children }) => {
	const [mouseEnter, setMouseEnter] = useState(false);

	return (
		<div
			onMouseEnter={() => {
				setMouseEnter(true);
			}}
			onMouseLeave={() => {
				setMouseEnter(false);
			}}
			className={cn(
				"h-full max-h-[20rem] w-full max-w-md rounded-2xl border border-zinc-300 bg-[linear-gradient(110deg,#18181b_0.6%,#09090b)] p-4 transition-shadow duration-300 hover:shadow-xl dark:border-zinc-800",
				className,
			)}
		>
			<div className="flex items-center justify-center">
				<Illustration mouseEnter={mouseEnter} />
			</div>
			<div className="px-2 pb-6">{children}</div>
		</div>
	);
};

export const GlowingStarsDescription = ({ className, children }) => {
	return (
		<p
			className={cn(
				"mr-1 max-w-[16rem] text-sm text-zinc-400",
				className,
			)}
		>
			{children}
		</p>
	);
};

export const GlowingStarsTitle = ({ className, children }) => {
	return (
		<h2 className={cn("mb-4 text-lg font-bold text-zinc-200", className)}>
			{children}
		</h2>
	);
};

export const Illustration = ({ mouseEnter }) => {
	const stars = 108;
	const columns = 18;

	const [glowingStars, setGlowingStars] = useState([]);

	const highlightedStars = useRef([]);

	useEffect(() => {
		const interval = setInterval(() => {
			highlightedStars.current = Array.from({ length: 5 }, () =>
				Math.floor(Math.random() * stars),
			);
			setGlowingStars([...highlightedStars.current]);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			className="h-48 w-full p-1"
			style={{
				display: "grid",
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: `1px`,
			}}
		>
			{[...Array(stars)].map((_, starIdx) => {
				const isGlowing = glowingStars.includes(starIdx);
				const delay = (starIdx % 10) * 0.1;
				const staticDelay = starIdx * 0.01;
				return (
					<div
						key={`matrix-col-${starIdx}}`}
						className="relative flex items-center justify-center"
					>
						<Star
							isGlowing={mouseEnter ? true : isGlowing}
							delay={mouseEnter ? staticDelay : delay}
						/>
						{mouseEnter && <Glow delay={staticDelay} />}
						<AnimatePresence mode="wait">
							{isGlowing && <Glow delay={delay} />}
						</AnimatePresence>
					</div>
				);
			})}
		</div>
	);
};

const Star = ({ isGlowing, delay }) => {
	return (
		<motion.div
			key={delay}
			initial={{
				scale: 1,
			}}
			animate={{
				scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
				background: isGlowing ? "#fff" : "#666",
			}}
			transition={{
				duration: 2,
				ease: "easeInOut",
				delay: delay,
			}}
			className={cn(
				"relative z-20 h-[1px] w-[1px] rounded-full bg-[#666]",
			)}
		></motion.div>
	);
};

const Glow = ({ delay }) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				duration: 2,
				ease: "easeInOut",
				delay: delay,
			}}
			exit={{
				opacity: 0,
			}}
			className="absolute left-1/2 z-10 h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-blue-500 shadow-2xl shadow-blue-400 blur-[1px]"
		/>
	);
};
