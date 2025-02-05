import { useEffect, useState } from "react";

export const useDarkMode = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);

		if (isMounted) {
			const storedMode = localStorage.getItem("mode");
			if (storedMode === "dark") {
				setDarkMode(true);
				document.documentElement.classList.add("dark");
			}
		}
	}, [isMounted]);

	useEffect(() => {
		if (isMounted) {
			if (darkMode) {
				document.documentElement.classList.add("dark");
				localStorage.setItem("mode", "dark");
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("mode", "light");
			}
		}
	}, [darkMode, isMounted]);

	return [darkMode, setDarkMode];
};
