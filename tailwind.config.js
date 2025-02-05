const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/content/docs/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/assets/icons/**/*.{js,ts,jsx,tsx,mdx}",
		"./mdx-components.js",
	],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				spotlight: "spotlight 2s ease .75s 1 forwards",
				marquee: "marquee var(--duration) linear infinite",
				"marquee-vertical":
					"marquee-vertical var(--duration) linear infinite",
			},
			keyframes: {
				spotlight: {
					"0%": {
						opacity: 0,
						transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
						opacity: 1,
						transform: "translate(-50%,-40%) scale(1)",
					},
				},
				marquee: {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				},
				"marquee-vertical": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				},
			},
			colors: {
				primary: {
					50: "#e6f5ff",
					100: "#bbe2ff",
					200: "#91d1fe",
					300: "#67c0fd",
					400: "#3daffc",
					500: "#139efb",
					600: "#1083cd",
					700: "#0c66a0",
					800: "#084973",
					900: "#042c46",
					950: "#000f19",
				},
				secondary: "#795ef7",
				dark: "#050505",
				light: "#faf9f6",
				obsidian: "#0B1215",
				smoke: "#f7f7f7",
				zinc: {
					50: "#FAFAFA",
					100: "#F4F4F5",
					200: "#E4E4E7",
					300: "#D4D4D8",
					400: "#A1A1AA",
					500: "#71717A",
					600: "#52525B",
					700: "#3F3F46",
					800: "#27272A",
					900: "#18181B",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
	);

	addBase({
		":root": newVars,
	});
}
