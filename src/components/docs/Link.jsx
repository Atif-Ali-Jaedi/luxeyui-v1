"use client";

import { ExternalIcon } from "@/assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tv } from "tailwind-variants";

const linkVariants = tv({
	base: [
		"relative inline-flex select-none items-center gap-1.5 transition-[color,opacity] duration-300 hover:opacity-70 active:opacity-50",
	],
	variants: {
		size: {
			sm: "text-sm",
			md: "text-[0.975rem]",
			lg: "text-lg",
		},
		color: {
			primary: "text-primary-500",
			foreground: "text-obsidian dark:text-smoke",
			active: "!font-semibold !text-primary-500",
		},
		underline: {
			none: "no-underline",
			hover: "hover:underline",
			always: "underline",
			active: "active:underline",
			focus: "focus:underline",
		},
	},
	compoundVariants: [
		{
			underline: ["hover", "always", "active", "focus"],
			class: "underline-offset-4",
		},
	],
	defaultVariants: {
		size: "md",
		color: "foreground",
		underline: "none",
	},
});

export const StyledLink = ({
	size,
	color,
	underline,
	children,
	isExternal,
	hideAnchorIcon,
	href,
	onClick,
	className,
	id,
	isLinkedHeading,
	draggable,
}) => {
	const pathname = usePathname();
	const handleLinkClick = e => {
		e.preventDefault();

		const headingElement = document.querySelector(
			`a[href="#${e.target.id}`,
		);
		window.scrollTo({
			top: headingElement.offsetTop - 68, // Adjust to account for the header height
			behavior: "smooth",
		});
	};
	return (
		<>
			{isExternal ? (
				<Link
					href={href}
					className={linkVariants({
						size,
						color,
						underline,
						class: className,
					})}
					target="_blank"
					rel="noopener noreferrer"
					onClick={onClick && onClick()}
					id={id}
					draggable={draggable}
				>
					{children}
					{hideAnchorIcon ? null : (
						<ExternalIcon width={16} height={16} />
					)}
				</Link>
			) : (
				<Link
					href={href}
					id={id}
					draggable={draggable}
					onClick={
						isLinkedHeading ? handleLinkClick : onClick && onClick()
					}
					className={linkVariants({
						size,
						color: pathname === href ? "active" : color,
						underline,
						class: className,
					})}
				>
					{children}
				</Link>
			)}
		</>
	);
};
