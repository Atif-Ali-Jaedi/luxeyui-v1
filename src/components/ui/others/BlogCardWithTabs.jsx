"use client";

import { BlogCard } from "@/components";
import { metadata } from "@/content/blog/metadata";
import { common } from "@/content/docs/metadata";
import { motion } from "framer-motion";
import { useState } from "react";

const WIDTHS = [95.75, 117.14, 146.44];
const SIZE = 32;
const TABS = [
	{ key: "all-posts", label: "All Posts", width: WIDTHS[0] },
	{ key: "changelog", label: "Changelog", width: WIDTHS[1] },
	{ key: "announcement", label: "Announcement", width: WIDTHS[2] },
];

export const BlogCardWithTabs = () => {
	const [currentTab, setCurrentTab] = useState("all-posts");

	const handleTabClick = tabKey => setCurrentTab(tabKey);

	const currentTabIndex = TABS.findIndex(({ key }) => key === currentTab);

	const getFilteredPosts = () => {
		if (currentTab === "all-posts") {
			return Object.entries(metadata);
		}
		return Object.entries(metadata).filter(
			([key, value]) =>
				value.properties.category.toLowerCase() === currentTab,
		);
	};

	return (
		<>
			<header className="relative z-10 flex h-14 select-none items-center overflow-x-auto overflow-y-clip border-b border-zinc-200 px-1 pb-4 pt-1 text-sm dark:border-zinc-800 [&::-webkit-scrollbar]:hidden">
				{TABS.map(({ key, label }) => (
					<button
						key={key}
						onClick={() => handleTabClick(key)}
						className={`min-w-[${WIDTHS[TABS.findIndex(tab => tab.key === key)]}px] shrink-0 px-5 py-2 text-zinc-600 transition-all duration-300 hover:text-obsidian dark:text-zinc-300/90 dark:hover:text-zinc-100`}
					>
						{label}
					</button>
				))}

				<motion.div
					transition={{ type: "spring", duration: 1, damping: 15 }}
					initial={{ x: 0, width: WIDTHS[0] }}
					animate={{
						x: TABS.slice(0, currentTabIndex).reduce(
							(acc, { width }) => acc + width,
							0,
						),
						width: TABS[currentTabIndex].width,
					}}
					className="absolute bottom-4 z-[-1] h-9 rounded-full border border-zinc-200 bg-zinc-200/60 dark:border-zinc-700/80 dark:bg-zinc-700/40"
				/>
				<motion.div
					transition={{ type: "spring", duration: 1, damping: 15 }}
					initial={{ x: WIDTHS[0] / 2 - SIZE / 2 }}
					animate={{
						x:
							TABS.slice(0, currentTabIndex).reduce(
								(acc, { width }) => acc + width,
								0,
							) +
							WIDTHS[currentTabIndex] / 2 -
							SIZE / 2,
					}}
					className="absolute bottom-0 h-0.5 w-8 rounded bg-current"
				/>
			</header>
			<div>
				<h1 className="my-8 text-2xl !font-medium sm:text-3xl">
					{TABS.find(tab => tab.key === currentTab).label}
				</h1>
				<div className="grid gap-6 sm:grid-cols-2">
					{getFilteredPosts().map(([key, value]) => (
						<BlogCard
							key={key}
							cover={value.properties.cover}
							title={value.title.replace(common, "")}
							date={value.properties.date}
							category={value.properties.category}
							link={`/blog/${key}`}
						/>
					))}
				</div>
			</div>
		</>
	);
};
