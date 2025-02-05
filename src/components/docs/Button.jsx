"use client";
import { useRef } from "react";
import { tv } from "tailwind-variants";

const buttonVariants = tv({
	base: [
		"group relative z-0 box-border inline-flex min-w-max select-none appearance-none items-center justify-center overflow-hidden whitespace-nowrap font-normal subpixel-antialiased outline-none transition-all duration-300 active:scale-95",
	],
	variants: {
		size: {
			sm: "h-8 min-w-16 gap-2 rounded-lg px-3 text-xs",
			md: "h-10 min-w-20 gap-2 rounded-xl px-4 text-sm",
			lg: "h-12 min-w-24 gap-3 rounded-[14px] px-6 text-base",
		},
		radius: {
			none: "rounded-none",
			sm: "rounded-lg",
			md: "rounded-xl",
			lg: "rounded-[14px]",
			full: "rounded-full",
		},
		variant: {
			light: "bg-transparent",
			primary: "bg-primary-500 text-light",
			bordered: "border-2 border-current bg-transparent",
		},
		fullWidth: {
			true: "w-full",
		},
		isIconOnly: {
			true: "!gap-0 px-0",
			false: "[&>svg]:max-w-8",
		},
	},
	defaultVariants: {
		size: "md",
		radius: "md",
		variant: "primary",
		fullWidth: false,
	},
	compoundVariants: [
		{
			isIconOnly: true,
			size: "sm",
			class: "h-8 w-8 min-w-8",
		},
		{
			isIconOnly: true,
			size: "md",
			class: "h-10 w-10 min-w-10",
		},
		{
			isIconOnly: true,
			size: "lg",
			class: "h-12 w-12 min-w-12",
		},
	],
});

export const Button = ({
	size,
	radius,
	variant,
	fullWidth,
	children,
	onClick,
	isIconOnly,
	className,
	...props
}) => {
	const btn = useRef(null);

	const handleClick = e => {
		if (onClick) onClick(e);

		const ripple = document.createElement("span");
		const rect = btn.current.getBoundingClientRect();
		const size = Math.max(rect.width, rect.height);
		const x = e.clientX - rect.left - size / 2;
		const y = e.clientY - rect.top - size / 2;
		const originalColor = window.getComputedStyle(btn.current).color;

		Object.assign(ripple.style, {
			width: `${size}px`,
			height: `${size}px`,
			left: `${x}px`,
			top: `${y}px`,
			background: originalColor
				.replace("rgb", "rgba")
				.replace(")", ",0.1)"),
		});

		ripple.className = "ripple";
		btn.current.appendChild(ripple);
		ripple.addEventListener("animationend", () => ripple.remove());
	};

	return (
		<button
			ref={btn}
			className={buttonVariants({
				size,
				radius,
				variant,
				fullWidth,
				isIconOnly,
				class: className,
			})}
			onClick={handleClick}
			{...props}
		>
			{children}
		</button>
	);
};
