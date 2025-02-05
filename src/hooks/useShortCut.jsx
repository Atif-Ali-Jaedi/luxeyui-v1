import { useEffect } from "react";

export const useShortCut = (shortcutKeys, callback) => {
	useEffect(() => {
		const handleKeyDown = event => {
			const keys = shortcutKeys
				.toLowerCase()
				.split("+")
				.map(key => key.trim());

			const allKeysPressed = keys.every(key => {
				if (key === "ctrl") return event.ctrlKey;
				if (key === "shift") return event.shiftKey;
				if (key === "alt") return event.altKey;
				if (key === "meta") return event.metaKey;
				if (key === "esc" || key === "escape")
					return event.key === "Escape";
				return event.key.toLowerCase() === key;
			});

			if (allKeysPressed) {
				event.preventDefault();
				callback(event);
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [shortcutKeys, callback]);
};
