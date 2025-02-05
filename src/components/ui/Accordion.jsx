"use client";

import { ChevronIcon } from "@/assets/icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const accordionItem = tv({
	slots: {
		header: "flex cursor-pointer items-center justify-between gap-3 py-2",
		title: "select-none text-base text-obsidian dark:text-smoke",
		icon: "",
		content: "relative overflow-hidden",
	},
	variants: {
		hasLine: {
			true: {
				content:
					"before:absolute before:left-2 before:top-2.5 before:h-[calc(100%-1em)] before:w-px before:bg-zinc-200 before:content-[''] dark:before:bg-zinc-700",
			},
		},
	},
});

const Accordion = ({ children, className }) => {
	return (
		<div
			className={twMerge(
				`relative mb-3 flex w-full flex-col ${className}`,
			)}
		>
			{children}
		</div>
	);
};

const { header, title, icon, content } = accordionItem();

const AccordionItem = ({
	heading,
	children,
	classNames = {},
	expanded,
	hasLine,
}) => {
	const [open, setOpen] = useState(expanded ? expanded : false);
	return (
		<>
			<div
				className={header({
					class: classNames.header,
				})}
				onClick={() => setOpen(prev => !prev)}
			>
				<span className={title({ class: classNames.title })}>
					{heading}
				</span>
				<motion.span
					className={icon({ class: classNames.icon })}
					animate={{ rotate: open ? -90 : 0 }}
					transition={{ type: "tween" }}
				>
					<ChevronIcon width={20} type={"left"} />
				</motion.span>
			</div>
			<motion.div
				className={content({ class: classNames.content, hasLine })}
				animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
			>
				{children}
			</motion.div>
		</>
	);
};

export { Accordion, AccordionItem };
