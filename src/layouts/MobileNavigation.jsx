"use client";

import { Accordion, AccordionItem, StyledLink } from "@/components";
import { components, defaultSidebarLinks, navLinks } from "@/data/constants";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export const MobileNavigation = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.querySelector("#navbar").dataset.menuopen = open.toString();
	}, [open]);

	const line1 = useRef(null);
	const line2 = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 1024);

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	useEffect(() => {
		document.body.style.overflowY = isMobile && open ? "hidden" : "scroll";
	}, [isMobile, open]);

	const handleClick = () => {
		if (!open) {
			gsap.to(line1.current, {
				keyframes: {
					"25%": { y: 5, scaleX: 1, rotate: 0 },
					"50%": { y: 5, scaleX: 0.1, rotate: 0 },
					"75%": { y: 5, scaleX: 0.1, rotate: 45 },
					"100%": { y: 5, scaleX: 1 },
				},
				duration: 1,
			});
			gsap.to(line2.current, {
				keyframes: {
					"25%": { y: -4.5, scaleX: 1, rotate: 0 },
					"50%": { y: -4.5, scaleX: 0.1, rotate: 0 },
					"75%": { y: -4.5, scaleX: 0.1, rotate: -45 },
					"100%": { y: -4.5, scaleX: 1 },
				},
				duration: 1,
			});
		} else {
			gsap.to(line1.current, {
				keyframes: {
					"25%": { y: 5, scaleX: 0.1, rotate: 45 },
					"50%": { y: 5, scaleX: 0.1, rotate: 0 },
					"75%": { y: 5, scaleX: 1, rotate: 0 },
					"100%": { y: 0, scaleX: 1, rotate: 0 },
				},
				duration: 1,
			});
			gsap.to(line2.current, {
				keyframes: {
					"25%": { y: -4.5, scaleX: 0.1, rotate: -45 },
					"50%": { y: -4.5, scaleX: 0.1, rotate: 0 },
					"75%": { y: -4.5, scaleX: 1, rotate: 0 },
					"100%": { y: 0, scaleX: 1, rotate: 0 },
				},
				duration: 1,
			});
		}
	};

	return (
		<>
			<div
				role="button"
				className="fixed right-6 top-[1.6em] z-40 h-2.5 w-5 lg:hidden"
				onClick={() => {
					setOpen(prev => !prev);
					handleClick();
				}}
			>
				<div
					ref={line1}
					className="absolute top-0 h-px w-full bg-obsidian dark:bg-smoke"
				/>

				<div
					ref={line2}
					className="absolute bottom-0 h-px w-full bg-obsidian dark:bg-smoke"
				/>
			</div>
			<div
				className={`fixed top-16 z-40 w-full overflow-y-auto bg-white/70 px-6 backdrop-blur-xl backdrop-saturate-150 transition-[height] duration-[1s] ease-in-out dark:bg-dark/70 lg:pointer-events-none lg:opacity-0 ${open ? "h-[calc(100dvh-64px)]" : "h-0"}`}
			>
				<ul className="not-prose flex flex-col gap-3 py-2">
					{navLinks.map((element, i) => (
						<li
							key={i}
							className="!m-0 list-none"
							onClick={() => {
								setOpen(false);
								handleClick();
							}}
						>
							<StyledLink
								href={element.href}
								className="w-full text-zinc-500 dark:text-zinc-400"
							>
								{element.label}
							</StyledLink>
						</li>
					))}
				</ul>
				<Accordion className="[&_svg]:text-obisdian pt-2 dark:[&_svg]:text-smoke">
					{Object.entries(defaultSidebarLinks).map(([key, value]) => (
						<AccordionItem
							key={key}
							heading={key
								.split(" ")
								.map(
									word =>
										word[0].toUpperCase() + word.slice(1),
								)
								.join(" ")}
							expanded
							hasLine
						>
							<ul className="not-prose flex flex-col gap-3 py-2 pl-7">
								{value.map((element, i) => (
									<li
										key={i}
										className="!m-0 list-none"
										onClick={() => {
											setOpen(false);
											handleClick();
										}}
									>
										<StyledLink
											href={element.link}
											className="w-full text-zinc-500 dark:text-zinc-400"
										>
											{element.name}
											{element.updated && (
												<div className="relative ml-1 inline-flex h-6 min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full bg-zinc-100/50 px-1 py-1 text-xs text-zinc-400 dark:bg-zinc-800/50 dark:text-zinc-500">
													<span className="flex-1 px-1 font-normal text-inherit">
														Updated
													</span>
												</div>
											)}
											{element.new && (
												<div className="relative ml-1 inline-flex h-6 min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full bg-primary-500/20 px-1 py-1 text-xs text-primary-700 dark:text-primary-200">
													<span className="flex-1 px-1 font-normal text-inherit">
														New
													</span>
												</div>
											)}
										</StyledLink>
									</li>
								))}
							</ul>
						</AccordionItem>
					))}
					<AccordionItem heading="Components" expanded hasLine>
						<ul className="not-prose flex flex-col gap-3 py-2 pl-7">
							{Object.entries(components).map(([key, value]) => (
								<li
									key={key}
									className="!m-0 list-none"
									onClick={() => {
										setOpen(false);
										handleClick();
									}}
								>
									<StyledLink
										href={value.link}
										className="w-full text-zinc-500 dark:text-zinc-400"
									>
										{value.name}
										{value.updated && (
											<div className="relative ml-1 inline-flex h-6 min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full bg-zinc-100/50 px-1 py-1 text-xs text-zinc-400 dark:bg-zinc-800/50 dark:text-zinc-500">
												<span className="flex-1 px-1 font-normal text-inherit">
													Updated
												</span>
											</div>
										)}
										{value.new && (
											<div className="relative ml-1 inline-flex h-6 min-w-min max-w-fit items-center justify-between whitespace-nowrap rounded-full bg-primary-500/20 px-1 py-1 text-xs text-primary-700 dark:text-primary-200">
												<span className="flex-1 px-1 font-normal text-inherit">
													New
												</span>
											</div>
										)}
									</StyledLink>
								</li>
							))}
						</ul>
					</AccordionItem>
				</Accordion>
			</div>
		</>
	);
};
