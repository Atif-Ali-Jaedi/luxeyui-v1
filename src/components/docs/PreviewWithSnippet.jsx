"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HighlightedSnippet } from "..";
import { Preview } from "./Preview";

export const CodeDemo = ({
	lang,
	code,
	showLineNumbers,
	disableCopyBtn,
	file,
	showHeader,
	isAdvanced,
	showExpandCollapseBtn,
	initialHeight,
}) => {
	const [showPreview, setShowPreview] = useState(true);

	const togglePreview = () => setShowPreview(true);
	const toggleSnippet = () => setShowPreview(false);

	return (
		<div className="flex w-full flex-col">
			<div
				className="relative mb-4 flex items-center gap-2 rounded-none bg-transparent p-1 text-[0.95rem] dark:bg-transparent"
				role="tablist"
			>
				<button
					className={`px-3 py-1 outline-none transition-all ${showPreview ? "" : "text-zinc-500 hover:opacity-50 dark:text-zinc-400"}`}
					onClick={togglePreview}
				>
					Preview
				</button>
				<button
					className={`px-3 py-1 outline-none transition-all ${!showPreview ? "" : "text-zinc-500 hover:opacity-50 dark:text-zinc-400"}`}
					onClick={toggleSnippet}
				>
					Code
				</button>
				<motion.div
					className="absolute -bottom-0.5 left-1 h-0.5 w-6 bg-current"
					initial={{
						x: 8,
						width: 65,
					}}
					animate={{
						x: showPreview ? 8 : 96,
						width: showPreview ? 65 : 54,
					}}
					transition={{
						duration: 0.5,
						type: "spring",
					}}
				></motion.div>
			</div>
			{showPreview ? (
				<Preview
					code={code}
					showHeader={isAdvanced}
					initialHeight={initialHeight}
				/>
			) : (
				<HighlightedSnippet
					showHeader={showHeader}
					code={code}
					lang={lang}
					showExpandCollapseBtn={showExpandCollapseBtn}
					showLineNumbers={showLineNumbers || isAdvanced}
					disableCopyBtn={disableCopyBtn}
					file={file}
					className={"[&_pre]:!my-0"}
				/>
			)}
		</div>
	);
};
