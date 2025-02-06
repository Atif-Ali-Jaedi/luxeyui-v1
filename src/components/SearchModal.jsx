"use client";

import {
	ChevronIcon,
	CodeFileIcon,
	CrossIcon,
	SearchIcon,
} from "@/assets/icons";
import { components, defaultSidebarLinks } from "@/data/constants";
import { useModal, useShortCut } from "@/hooks";
import { Command } from "cmdk";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from ".";
import { ScrollArea } from "./ui/others/ScrollArea";

export const SearchModal = () => {
	const [value, setValue] = useState("");
	const isOpen = useModal(state => state.isOpen);

	const setOpen = useModal(state => state.setValue);

	useShortCut("ctrl+k", () => setOpen(!isOpen));
	useShortCut("esc", () => setOpen(false));

	useEffect(() => {
		document.body.style.overflowY = isOpen ? "hidden" : "scroll";
	}, [isOpen]);

	const closeModal = useModal(state => state.closeModal);

	return (
		<div role="dialog" aria-label="Search Docs">
			<motion.div
				onClick={closeModal}
				className={twMerge(
					`pointer-events-none fixed inset-0 z-50 h-screen w-screen bg-black/80 backdrop-opacity-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`,
				)}
				animate={{ opacity: isOpen ? 1 : 0 }}
				initial={{ opacity: 0 }}
			></motion.div>
			<div
				className={`fixed left-1/2 top-1/2 z-50 flex max-h-[calc(100%_-_8rem)] w-full max-w-xl -translate-x-1/2 -translate-y-1/2 scale-105 flex-col rounded-xl border bg-light/80 opacity-0 shadow-sm outline-none backdrop-blur-md backdrop-saturate-150 transition-all duration-300 dark:border-zinc-800 dark:bg-dark/30 ${isOpen ? "pointer-events-auto !scale-100 !opacity-100" : "pointer-events-none"}`}
			>
				<Command
					label="Quick Search Command"
					value={value}
					onChange={e => setValue(e.target.value)}
				>
					<div className="flex w-full items-center border-b border-zinc-400/50 px-4 dark:border-zinc-800">
						<SearchIcon width={24} height={24} />
						<Command.Input
							className="h-14 w-full rounded-none bg-transparent px-2 text-lg text-zinc-700 placeholder-zinc-500 outline-none dark:text-zinc-400 dark:placeholder:text-zinc-600"
							placeholder="Search docs"
							value={value}
						/>
						<Button
							isIconOnly
							onClick={() => setValue("")}
							className={twMerge(
								`pointer-events-none border border-zinc-400 text-obsidian opacity-0 hover:bg-zinc-50 dark:border-zinc-800 dark:text-smoke dark:hover:bg-zinc-900 focus-visible:outline focus-visible:outline-primary-500 focus-visible:outline-2 ${value !== "" ? "pointer-events-auto opacity-100" : ""}`,
							)}
							variant="light"
							size="sm"
							radius="full"
							aria-label="Clear input field"
						>
							<CrossIcon width={12} height={12} />
						</Button>
						<kbd className="ml-2 hidden items-center space-x-0.5 rounded-lg border-none bg-zinc-100 px-2 py-1 text-center font-sans text-[0.6rem] font-medium text-zinc-600 shadow-sm dark:bg-zinc-800 dark:text-zinc-300 md:block">
							ESC
						</kbd>
					</div>
					<Command.List className="grid">
						<ScrollArea className="mt-2 h-full max-h-[50vh] overflow-y-auto px-4 pb-4">
							<Command.Empty>
								<div className="flex h-32 flex-col items-center justify-center text-center">
									<div>
										<p className="text-obsidian dark:text-smoke">
											No results for &quot;{value}
											&quot;
										</p>
										<p className="text-zinc-400 dark:text-zinc-500">
											Try searching for something else.
										</p>
									</div>
								</div>
							</Command.Empty>
							{Object.entries(defaultSidebarLinks).map(
								([key, value]) => (
									<Command.Group
										key={key}
										heading={key
											.split(" ")
											.map(
												word =>
													word[0].toUpperCase() +
													word.slice(1),
											)
											.join(" ")}
										className="mt-2 [&:not(:first-child)]:mt-4 [&_[cmdk-group-heading]]:text-zinc-600 dark:[&_[cmdk-group-heading]]:text-zinc-300"
									>
										{value.map((element, i) => (
											<Command.Item key={i}>
												<Link
													onClick={closeModal}
													href={element.link}
													className="group mt-2 flex h-16 items-center justify-between rounded-lg bg-zinc-100/50 px-4 shadow transition-opacity hover:!bg-primary-500 hover:text-white active:opacity-70 dark:bg-zinc-800/50"
												>
													<div className="flex w-full max-w-full items-center gap-3">
														<CodeFileIcon className="text-zinc-500 group-hover:text-white dark:text-zinc-600" />
														<div className="flex max-w-[80%] flex-col justify-center gap-0">
															<p className="select-none truncate text-zinc-500 group-hover:text-white dark:text-zinc-400">
																{element.name}
															</p>
														</div>
													</div>
													<ChevronIcon
														width={14}
														height={14}
														className="text-zinc-700 group-data-[active=true]:text-white dark:text-zinc-200"
													/>
												</Link>
											</Command.Item>
										))}
									</Command.Group>
								),
							)}
							<Command.Group
								heading="Components"
								className="mt-2 [&:not(:first-child)]:mt-4 [&_[cmdk-group-heading]]:text-zinc-600 dark:[&_[cmdk-group-heading]]:text-zinc-300"
							>
								{Object.entries(components).map(
									([key, value]) => (
										<Command.Item key={key}>
											<Link
												onClick={closeModal}
												className="group mt-2 flex h-16 cursor-pointer items-center justify-between rounded-lg bg-zinc-100/50 px-4 shadow transition-opacity hover:!bg-primary-500 hover:text-white active:opacity-70 dark:bg-zinc-800/50"
												href={value.link}
											>
												<div className="flex w-full max-w-full items-center gap-3">
													<CodeFileIcon className="text-zinc-500 group-hover:text-white dark:text-zinc-600" />
													<div className="flex max-w-[80%] flex-col justify-center gap-0">
														<p className="select-none truncate text-zinc-500 group-hover:text-white dark:text-zinc-400">
															{value.name}
														</p>
													</div>
												</div>
												<ChevronIcon
													width={14}
													height={14}
													className="text-zinc-700 group-data-[active=true]:text-white dark:text-zinc-200"
												/>
											</Link>
										</Command.Item>
									),
								)}
							</Command.Group>
						</ScrollArea>
					</Command.List>
				</Command>
			</div>
		</div>
	);
};
