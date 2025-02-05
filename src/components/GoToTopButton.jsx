"use client";

import { ChevronIcon } from "@/assets/icons";
import { useEffect, useState } from "react";
import { Button } from ".";

export const GoToTopButton = () => {
	const [scrolled, setScrolled] = useState(false);
	const scrollToTop = () =>
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 250) setScrolled(true);
			else setScrolled(false);

			if (window.scrollY > 2)
				document
					.querySelector("#navbar")
					.classList.add(
						"bg-white/70",
						"dark:bg-dark/70",
						"backdrop-blur-lg",
					);
			else
				document
					.querySelector("#navbar")
					.classList.remove(
						"bg-white/70",
						"dark:bg-dark/70",
						"backdrop-blur-lg",
					);
		});
	});

	return (
		scrolled && (
			<Button
				isIconOnly
				size={"lg"}
				radius={"lg"}
				onClick={scrollToTop}
				className={
					"fixed bottom-6 right-6 z-10 bg-dark/5 text-obsidian backdrop-blur-xl backdrop-saturate-150 dark:bg-light/5 dark:text-smoke"
				}
			>
				<ChevronIcon type={"top"} />
			</Button>
		)
	);
};
