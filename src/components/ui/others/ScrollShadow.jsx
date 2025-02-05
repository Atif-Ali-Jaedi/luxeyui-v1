"use client";

import { forwardRef, useCallback, useEffect, useState } from "react";

export const ScrollShadow = forwardRef(function ScrollShadow(
	{ children, ...props },
	ref,
) {
	const [atTop, setAtTop] = useState(false);
	const [isAtBottom, setIsAtBottom] = useState(false);

	const checkPosition = useCallback(() => {
		setAtTop(ref.current.scrollTop <= 28);
		const isContentFullyVisible =
			ref.current.scrollHeight <= ref.current.clientHeight;
		setIsAtBottom(
			!isContentFullyVisible &&
				Math.abs(
					ref.current.scrollHeight -
						ref.current.scrollTop -
						ref.current.clientHeight,
				) < 1,
		);
	}, [ref]);
	useEffect(() => {
		checkPosition();
		ref.current.addEventListener("scroll", () => checkPosition());
	}, [ref, checkPosition]);

	return (
		<div
			ref={ref}
			style={{
				maskImage: isAtBottom
					? "linear-gradient(0deg, #000 calc(100% - 40px),transparent)"
					: atTop
						? "linear-gradient(180deg, #000 calc(100% - 40px),transparent)"
						: !atTop && !isAtBottom
							? "linear-gradient(#000,#000,transparent 0,#000 40px,#000 calc(100% - 40px),transparent)"
							: "",
			}}
			{...props}
		>
			{children}
		</div>
	);
});
