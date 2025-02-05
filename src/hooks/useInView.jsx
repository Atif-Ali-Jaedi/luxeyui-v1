import { useEffect, useState } from "react";

export function useInView(ref, options = {}) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(([entry]) => {
			setIntersecting(entry.isIntersecting);
		}, options);

		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref, options]);

	return isIntersecting;
}
