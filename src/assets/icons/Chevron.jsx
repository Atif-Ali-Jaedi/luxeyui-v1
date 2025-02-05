export const ChevronIcon = ({ type, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			className={
				type === "top"
					? "-rotate-90"
					: type === "bottom"
						? "rotate-90"
						: type === "left"
							? "rotate-180"
							: ""
			}
			role="img"
			{...props}
		>
			<path
				d="M9.00005 6L15 12L9 18"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="16"
				strokeLinecap="round"
				strokeLinejoin="round"
			></path>
		</svg>
	);
};
