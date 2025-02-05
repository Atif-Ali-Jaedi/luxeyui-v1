import { StyledLink } from "@/components";

export const NotAvailable = () => {
	return (
		<div className="mt-6 flex items-start overflow-x-auto rounded-lg border border-yellow-100 bg-yellow-50 py-5 pr-4 text-yellow-900 contrast-more:border-current dark:border-yellow-200/30 dark:bg-yellow-700/30 dark:text-yellow-200 contrast-more:dark:border-current">
			<div className="select-none pl-3 pr-2 text-xl">🚧</div>
			<div className="text-sm">
				This page is a work in progress. If you have any questions,
				please contact me at{" "}
				<StyledLink
					href={"mailto:atifalijaedi@gmail.com"}
					isExternal
					underline={"always"}
					className={"text-yellow-900 dark:text-yellow-200"}
				>
					atifalijaedi@gmail.com
				</StyledLink>
				.
			</div>
		</div>
	);
};
