"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export const TextRevealCard = ({ text, revealText, children, className }) => {
	const [widthPercentage, setWidthPercentage] = useState(0);
	const cardRef = useRef(null);
	const [left, setLeft] = useState(0);
	const [localWidth, setLocalWidth] = useState(0);
	const [isMouseOver, setIsMouseOver] = useState(false);

	useEffect(() => {
		if (cardRef.current) {
			const { left, width: localWidth } =
				cardRef.current.getBoundingClientRect();
			setLeft(left);
			setLocalWidth(localWidth);
		}
	}, []);

	function mouseMoveHandler(event) {
		event.preventDefault();

		const { clientX } = event;
		if (cardRef.current) {
			const relativeX = clientX - left;
			setWidthPercentage((relativeX / localWidth) * 100);
		}
	}

	function mouseLeaveHandler() {
		setIsMouseOver(false);
		setWidthPercentage(0);
	}
	function mouseEnterHandler() {
		setIsMouseOver(true);
	}
	function touchMoveHandler(event) {
		event.preventDefault();
		const clientX = event.touches[0].clientX;
		if (cardRef.current) {
			const relativeX = clientX - left;
			setWidthPercentage((relativeX / localWidth) * 100);
		}
	}

	const rotateDeg = (widthPercentage - 50) * 0.1;
	return (
		<div
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
			onMouseMove={mouseMoveHandler}
			onTouchStart={mouseEnterHandler}
			onTouchEnd={mouseLeaveHandler}
			onTouchMove={touchMoveHandler}
			ref={cardRef}
			className={cn(
				"relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-[#18181b] p-8 transition-shadow duration-300 hover:shadow-xl",
				className,
			)}
		>
			{children}
			<div className="relative flex h-40 items-center overflow-hidden">
				<motion.div
					style={{
						width: "100%",
					}}
					animate={
						isMouseOver
							? {
									opacity: widthPercentage > 0 ? 1 : 0,
									clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
								}
							: {
									clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
								}
					}
					transition={
						isMouseOver ? { duration: 0 } : { duration: 0.4 }
					}
					className="absolute z-20 bg-[#1d1c20] will-change-transform"
				>
					<p
						style={{
							textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
						}}
						className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text py-10 text-base font-bold text-transparent text-white sm:text-[3rem]"
					>
						{revealText}
					</p>
				</motion.div>
				<motion.div
					animate={{
						left: `${widthPercentage}%`,
						rotate: `${rotateDeg}deg`,
						opacity: widthPercentage > 0 ? 1 : 0,
					}}
					transition={
						isMouseOver ? { duration: 0 } : { duration: 0.4 }
					}
					className="absolute z-50 h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent will-change-transform"
				></motion.div>

				<div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
					<p className="bg-[#323238] bg-clip-text py-10 text-base font-bold text-transparent sm:text-[3rem]">
						{text}
					</p>
					<MemoizedStars />
				</div>
			</div>
		</div>
	);
};

export const TextRevealCardTitle = ({ children, className }) => {
	return (
		<h2 className={twMerge("mb-2 text-lg text-white", className)}>
			{children}
		</h2>
	);
};

export const TextRevealCardDescription = ({ children, className }) => {
	return (
		<p className={twMerge("text-sm text-[#a9a9a9]", className)}>
			{children}
		</p>
	);
};

const Stars = () => {
	const randomMove = () => Math.random() * 4 - 2;
	const randomOpacity = () => Math.random();
	const random = () => Math.random();
	return (
		<div className="absolute inset-0">
			{[...Array(80)].map((_, i) => (
				<motion.span
					key={`star-${i}`}
					animate={{
						top: `calc(${random() * 100}% + ${randomMove()}px)`,
						left: `calc(${random() * 100}% + ${randomMove()}px)`,
						opacity: randomOpacity(),
						scale: [1, 1.2, 0],
					}}
					transition={{
						duration: random() * 10 + 20,
						repeat: Infinity,
						ease: "linear",
					}}
					style={{
						position: "absolute",
						top: `${random() * 100}%`,
						left: `${random() * 100}%`,
						width: `2px`,
						height: `2px`,
						backgroundColor: "white",
						borderRadius: "50%",
						zIndex: 1,
					}}
					className="inline-block"
				></motion.span>
			))}
		</div>
	);
};

export const MemoizedStars = memo(Stars);
