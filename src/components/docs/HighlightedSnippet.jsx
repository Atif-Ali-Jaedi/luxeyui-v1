"use client";
import "@/app/styles/prism.css";
import { CopyIcon, Css, Html, Js, Tailwindcss, TickIcon } from "@/assets/icons";
import "@/lib/prism-bash";
import { cn } from "@/lib/utils";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/match-braces/prism-match-braces";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "..";

export const HighlightedSnippet = ({
	lang,
	code,
	showLineNumbers,
	disableCopyBtn,
	file,
	showHeader,
	className,
	showExpandCollapseBtn,
}) => {
	const codeRef = useRef(null);

	useEffect(() => {
		if (codeRef.current) Prism.highlightElement(codeRef.current);
	}, [code]);

	const [copied, setCopied] = useState(false);
	const [expanded, setExpanded] = useState(false);

	const handleCopyBtnClick = () => {
		setCopied(true);
		navigator.clipboard.writeText(code);

		setTimeout(() => {
			setCopied(false);
		}, 2500);
	};

	return (
		<div
			className={`highlighted-snippet not-prose relative ${className}`}
			tabIndex="0"
		>
			{showHeader && (
				<header
					className="flex items-center gap-4 rounded-t-xl bg-[--header-background] px-4"
					style={{ paddingBlock: !file ? "0.75em" : "" }}
				>
					<div className="flex items-center gap-2">
						{[1, 2, 3].map(i => (
							<div
								key={i}
								className={`size-3 rounded-full ${
									i == 1
										? "bg-red-500"
										: i == 2
											? "bg-yellow-500"
											: "bg-green-500"
								}`}
							></div>
						))}
					</div>
					{file && (
						<div className="relative mt-1.5 flex items-center gap-2 rounded-t-lg bg-[--background] py-2.5 pl-3.5 pr-5 text-sm text-gray-100 before:absolute before:-right-2 before:bottom-0 before:size-2 before:rounded-bl-xl before:bg-[#353742] before:shadow-[-2px_2px_var(--background)] before:content-[''] after:absolute after:-left-2 after:bottom-0 after:size-2 after:rounded-br-xl after:bg-[#353742] after:shadow-[2px_2px_var(--background)] after:content-['']">
							{file.type === "html" ? (
								<Html width={16} />
							) : file.type === "css" ? (
								<Css width={16} />
							) : file.type === "js" ? (
								<Js width={16} />
							) : (
								<Tailwindcss width={16} />
							)}
							{file.name}.{file.type}
						</div>
					)}
				</header>
			)}
			<pre
				style={{
					maxHeight: showExpandCollapseBtn
						? expanded
							? 650
							: 256
						: 650,
					overflow: showExpandCollapseBtn
						? expanded
							? "auto"
							: "hidden"
						: "auto",
				}}
				className={`cursor-text ${showLineNumbers ? "line-numbers" : ""} ${showHeader ? "!mt-0 !rounded-t-none outline-none" : ""}`}
			>
				<code
					ref={codeRef}
					className={`language-${lang || "html"} match-braces rainbow-braces`}
				>
					{code}
				</code>
			</pre>
			{!disableCopyBtn && (
				<Button
					variant={"light"}
					size={"sm"}
					isIconOnly
					className={`absolute right-2 top-2 text-smoke ${showHeader && !file ? "right-1 top-1" : ""}`}
					onClick={handleCopyBtnClick}
					aria-label="Copy snippet"
				>
					<TickIcon
						width={16}
						className={twMerge(
							`absolute scale-50 opacity-0 transition-all duration-300 ${copied ? "scale-100 opacity-100" : ""}`,
						)}
					/>
					<CopyIcon
						width={16}
						className={twMerge(
							`absolute scale-100 opacity-100 transition-all duration-300 ${copied ? "scale-50 opacity-0" : ""}`,
						)}
					/>
				</Button>
			)}
			{showExpandCollapseBtn && (
				<div
					className={cn(
						"absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 p-2",
						expanded ? "inset-x-0 top-[calc(650px-3rem)] h-12" : "",
					)}
				>
					<Button
						radius="sm"
						size="sm"
						className="bg-zinc-700 px-4"
						onClick={() => setExpanded(t => !t)}
					>
						{expanded ? "Collapse" : "Expand"}
					</Button>
				</div>
			)}
		</div>
	);
};
