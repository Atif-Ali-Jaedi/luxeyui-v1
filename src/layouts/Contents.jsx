"use client";

import { ScrollShadow } from "@/components/ui/others/ScrollShadow";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import scrollIntoView from "scroll-into-view-if-needed";
import { twMerge } from "tailwind-merge";

// Helper function to extract headings and nest them based on their levels (h2, h3, h4)
function getHeadings() {
	const headings = Array.from(
		document.querySelectorAll("a > h2, a > h3, a > h4"),
	);
	const nestedHeadings = [];

	let currentH2 = null;
	let currentH3 = null;

	headings.forEach(heading => {
		const parentAnchor = heading.closest("a");
		const href = parentAnchor?.getAttribute("href");

		if (!href) return;

		if (heading.tagName === "H2") {
			currentH2 = { text: heading.innerText, href, children: [] };
			nestedHeadings.push(currentH2);
			currentH3 = null; // Reset currentH3 when new h2 is encountered
		} else if (heading.tagName === "H3") {
			if (currentH2) {
				// If there's an h2, nest the h3 under it
				currentH3 = { text: heading.innerText, href, children: [] };
				currentH2.children.push(currentH3);
			} else {
				// If no h2, treat h3 as a top-level heading
				currentH3 = { text: heading.innerText, href, children: [] };
				nestedHeadings.push(currentH3);
			}
		} else if (heading.tagName === "H4" && currentH3) {
			// Nest h4 under the most recent h3
			currentH3.children.push({ text: heading.innerText, href });
		}
	});

	return nestedHeadings;
}

function Contents() {
	const [headings, setHeadings] = useState([]);
	const [activeHeading, setActiveHeading] = useState(null);
	const headingRefs = useRef({});
	const containerRef = useRef(null);

	// Create an observer to track which heading is in view
	useEffect(() => {
		const handleIntersection = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const href = `#${entry.target.id}`; // Ensure we use the href format
					setActiveHeading(href);

					// Scroll to the active heading inside the container and center it
					const headingElement = headingRefs.current[entry.target.id];
					if (headingElement && containerRef.current) {
						scrollIntoView(headingElement, {
							behavior: "smooth",
							block: "center",
							inline: "center",
							scrollMode: "always",
							boundary: containerRef.current,
						});
					}
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			rootMargin: "0% 0% -80% 0%", // Adjust to control when a heading is "in view"
		});

		const headingsInDOM = Array.from(
			document.querySelectorAll("a > h2, a > h3, a > h4"),
		);

		headingsInDOM.forEach(heading => {
			// Ensure every heading has an ID
			if (!heading.id) {
				heading.id = heading
					.closest("a")
					?.getAttribute("href")
					?.substring(1); // Set the ID based on href if missing
			}
			headingRefs.current[heading.id] = heading;
			observer.observe(heading);
		});

		return () => observer.disconnect();
	}, []);

	// Extract headings from DOM when component mounts
	useEffect(() => {
		const nestedHeadings = getHeadings();
		setHeadings(nestedHeadings);
	}, []);

	// Handle link click to scroll smoothly to the heading
	const handleLinkClick = e => {
		e.preventDefault();

		const headingElement = document.querySelector(
			`a[href="#${e.target.href.match(/#(.*)$/)[1]}`,
		);
		window.scrollTo({
			top: headingElement.offsetTop - 68, // Adjust to account for the header height
			behavior: "smooth",
		});
	};

	return (
		<div className="not-prose mt-8 hidden pl-4 xl:col-span-2 xl:block">
			<ScrollShadow
				ref={containerRef}
				className="fixed top-28 flex h-[calc(100vh-121px)] w-full max-w-[12rem] flex-col gap-4 overflow-y-scroll pb-28 text-left [&::-webkit-scrollbar]:hidden"
			>
				<p className="text-sm text-obsidian dark:text-smoke">
					On this page:
				</p>
				<ul className="flex flex-col gap-2">
					{headings.map((h2OrH3, index) => (
						<li
							key={index}
							className={twMerge(
								`flex items-center pl-3 text-sm font-normal text-zinc-500 transition-colors dark:text-zinc-600 ${
									activeHeading === h2OrH3.href
										? "text-obsidian before:opacity-100 dark:text-smoke"
										: ""
								} ${h2OrH3.children.length > 0 ? "flex-col items-start" : ""}`,
							)}
							ref={el =>
								(headingRefs.current[h2OrH3.href.substring(1)] =
									el)
							}
						>
							<Link href={h2OrH3.href} onClick={handleLinkClick}>
								{h2OrH3.text}
							</Link>
							{h2OrH3.children.length > 0 && (
								<ul className="flex flex-col gap-2 pt-2">
									{h2OrH3.children.map((h3OrH4, i) => (
										<li
											key={i}
											className={twMerge(
												`flex items-center pl-3 text-sm font-normal text-zinc-500 transition-colors before:absolute before:-ml-3 before:h-1 before:w-1 before:rounded-full before:bg-zinc-400 before:opacity-0 before:transition-opacity before:content-[''] dark:text-zinc-600 dark:before:bg-zinc-500 [&:has(ul)::before]:mt-2 ${
													activeHeading ===
													h3OrH4.href
														? "text-obsidian before:opacity-100 dark:text-smoke"
														: ""
												} ${h3OrH4.children.length > 0 ? "flex-col items-start" : ""}`,
											)}
											ref={el =>
												(headingRefs.current[
													h3OrH4.href.substring(1)
												] = el)
											}
										>
											<Link
												href={h3OrH4.href}
												onClick={handleLinkClick}
											>
												{h3OrH4.text}
											</Link>
											{h3OrH4.children.length > 0 && (
												<ul className="flex flex-col gap-2 pt-2">
													{h3OrH4.children.map(
														(h4, j) => (
															<li
																key={j}
																className={twMerge(
																	`flex items-center pl-3 text-sm font-normal text-zinc-500 transition-colors before:absolute before:-ml-3 before:h-1 before:w-1 before:rounded-full before:bg-zinc-400 before:opacity-0 before:transition-opacity before:content-[''] dark:text-zinc-600 dark:before:bg-zinc-500 ${
																		activeHeading ===
																		h4.href
																			? "text-obsidian before:opacity-100 dark:text-smoke"
																			: ""
																	}`,
																)}
																ref={el =>
																	(headingRefs.current[
																		h4.href.substring(
																			1,
																		)
																	] = el)
																}
															>
																<Link
																	href={
																		h4.href
																	}
																	onClick={
																		handleLinkClick
																	}
																>
																	{h4.text}
																</Link>
															</li>
														),
													)}
												</ul>
											)}
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>
			</ScrollShadow>
		</div>
	);
}

export { Contents };
