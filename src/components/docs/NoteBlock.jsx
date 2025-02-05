export const NoteBlock = ({ children }) => {
	return (
		<blockquote className="my-6 rounded-xl border border-zinc-200 bg-zinc-200/20 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-700/20 [&>p::before]:content-[''] [&>p]:m-0 [&>p]:not-italic">
			{children}
		</blockquote>
	);
};
