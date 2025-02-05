import { StyledLink } from "@/components";

export const Footer = () => {
	return (
		<footer className="mx-auto my-6 flex max-w-7xl flex-col items-center justify-between gap-1 px-6 text-xs text-zinc-500 dark:text-zinc-400 sm:flex-row md:text-sm">
			<span>© LuxeyUI 2024. All rights reserved.</span>
			<span>
				Maintained by{" "}
				<StyledLink
					href={"https://github.com/Atif-Ali-Jaedi"}
					isExternal
					hideAnchorIcon
					underline="always"
					className="text-xs text-zinc-500 dark:text-zinc-400 md:text-sm"
				>
					Atif Ali Jaedi
				</StyledLink>
				.
			</span>
		</footer>
	);
};
