"use client";

import { SearchIcon } from "@/assets/icons";
import { useModal } from "@/hooks";
import { Button } from "..";

export const SearchButton = () => {
	const openModal = useModal(state => state.openModal);
	return (
		<Button
			variant="light"
			className="min-h-6 min-w-6 px-0 text-zinc-500 subpixel-antialiased dark:text-zinc-400 lg:ml-3 lg:h-10 lg:min-w-20 lg:bg-zinc-400/20 lg:px-4 lg:dark:bg-zinc-500/20 [&>.ripple]:hidden lg:[&>.ripple]:block"
			tabIndex="0"
			onClick={openModal}
		>
			<SearchIcon />
			<span className="hidden lg:block">Quick Search...</span>
			<kbd
				focusable="false"
				className="hidden items-center space-x-0.5 rounded-lg bg-zinc-100 px-2 py-0.5 text-center font-sans text-sm font-normal text-zinc-600 shadow-sm dark:bg-zinc-800 dark:text-zinc-300 lg:block"
			>
				<abbr className="no-underline" title="Control">
					⌘
				</abbr>
				<span>K</span>
			</kbd>
		</Button>
	);
};
