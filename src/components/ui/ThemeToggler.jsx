"use client";

import { MoonIcon, SunIcon } from "@/assets/icons";
import { useDarkMode } from "@/hooks";

export const ThemeToggler = () => {
	const [darkMode, setDarkMode] = useDarkMode();

	return (
		<button
			className="grid size-8 place-items-center text-zinc-500 dark:text-zinc-400"
			onClick={() => setDarkMode(prev => !prev)}
			aria-label="Toggle dark mode"
		>
			{darkMode ? <SunIcon width={20} /> : <MoonIcon width={20} />}
		</button>
	);
};
