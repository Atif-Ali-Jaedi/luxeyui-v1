"use client";

import { CopyIcon, TickIcon } from "@/assets/icons";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "..";

export const Snippet = () => {
	const [copied, setCopied] = useState(false);

	const handleCopyBtnClick = () => {
		setCopied(true);
		navigator.clipboard.writeText("npm i luxeyui@latest");

		setTimeout(() => {
			setCopied(false);
		}, 2500);
	};
	return (
		<div className="flex h-fit w-full items-center justify-between gap-2 rounded-full bg-zinc-300/40 py-2.5 pl-5 pr-3.5 text-base dark:bg-zinc-600/40 sm:w-auto">
			<pre className="!my-0 inline-block whitespace-nowrap bg-transparent !p-0 font-['Fira_Code'] font-normal text-dark dark:text-light">
				<span className="select-none">$ </span>npm i luxeyui@latest
			</pre>
			<Button
				variant={"light"}
				size={"sm"}
				isIconOnly
				aria-label="Copy Installation Command"
				className={"!duration-0"}
				onClick={handleCopyBtnClick}
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
		</div>
	);
};
