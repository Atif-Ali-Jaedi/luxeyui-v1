export const Code = ({ children }) => {
	return (
		<code className="inline-block h-fit whitespace-nowrap rounded-xl bg-zinc-200/50 px-2 py-0.5 font-mono text-sm font-normal text-zinc-700 before:content-[''] after:content-[''] dark:bg-zinc-800/60 dark:text-zinc-200">
			{children}
		</code>
	);
};
