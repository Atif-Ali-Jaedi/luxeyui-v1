"use client";
import { Astro, Html, Vite } from "@/assets/icons";
import { Button } from "@/components";
import AstroGuide from "@/content/installation/AstroGuide.mdx";
import BasicGuide from "@/content/installation/BasicGuide.mdx";
import ViteGuide from "@/content/installation/ViteGuide.mdx";
import { motion } from "framer-motion";
import { useState } from "react";

const Card = ({ onClick, Icon, name, text }) => {
	return (
		<Button
			onClick={onClick}
			variant={"light"}
			role="button"
			className="flex h-auto basis-1/2 flex-col items-center px-3 py-4 shadow-[rgba(17,_17,_26,_0.05)_0px_0px_16px] dark:bg-zinc-500/5"
		>
			<div className="flex items-center justify-center rounded-full bg-zinc-300/30 p-4 dark:bg-zinc-600/20">
				<Icon width={28} />
			</div>
			<p className="!my-0 text-base font-semibold text-obsidian dark:text-smoke">
				{name}
			</p>
			<span className="text-balance text-zinc-500 dark:text-zinc-400">
				{text}
			</span>
		</Button>
	);
};

export const InstallationGuide = () => {
	const [guide, setGuide] = useState("html");

	return (
		<>
			<p>How to install dependencies and structure your app.</p>
			<div className="flex flex-col items-stretch gap-4 md:flex-row">
				<Card
					Icon={Html}
					text="Old fashion way for creating web pages or completing UI Challenges."
					onClick={() => setGuide("html")}
					name="HTML"
				/>
				<Card
					Icon={Vite}
					text="Fast and modern development server and build tool."
					name="Vite"
					onClick={() => setGuide("vite")}
				/>
				<Card
					Icon={Astro}
					text="The all-in-one web framework designed for speed."
					name="Astro"
					onClick={() => setGuide("astro")}
				/>
			</div>
			<hr />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: guide === "html" ? 1 : 0,
					display: guide === "html" ? "block" : "none",
				}}
				transition={{ duration: 0.3 }}
			>
				<BasicGuide />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: guide === "vite" ? 1 : 0,
					display: guide === "vite" ? "block" : "none",
				}}
				transition={{ duration: 0.3 }}
			>
				<ViteGuide />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: guide === "astro" ? 1 : 0,
					display: guide === "astro" ? "block" : "none",
				}}
				transition={{ duration: 0.3 }}
			>
				<AstroGuide />
			</motion.div>
		</>
	);
};
