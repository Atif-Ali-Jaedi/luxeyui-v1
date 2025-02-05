import { SearchModal } from "@/components";
import { GoToTopButton } from "@/components/GoToTopButton";
import { Footer, MobileNavigation, Navbar } from "@/layouts";
import localFont from "next/font/local";
import "./globals.css";

const axiforma = localFont({
	src: [
		{
			path: "../assets/fonts/Axiforma-Thin.woff2",
			weight: "100",
			style: "normal",
		},
		{
			path: "../assets/fonts/Axiforma-ExtraLight.woff2",
			weight: "200",
			style: "normal",
		},
		{
			path: "../assets/fonts/Axiforma-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../assets/fonts/Axiforma-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../assets/fonts/Axiforma-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../assets/fonts/Axiforma-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../assets/fonts/Axiforma-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../assets/fonts/Axiforma-ExtraBold.woff2",
			weight: "800",
			style: "normal",
		},
	],
});

export const metadata = {
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-32x32.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/manifest.json",
	authors: [
		{
			name: "atif ali jaedi",
			url: "https://x.com/atif-ali-jaedi",
		},
	],
	keywords: [
		"TypeScript",
		"Tailwind CSS",
		"Tailwind Components",
		"UI Components",
		"UI Kit",
		"UI Library",
		"UI Framework",
		"UI Design System",
		"LuxeyUI",
		"UI library for UI challenges",
	],
	creator: "atif ali jaedi",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://luxeyui.vercel.app",
		siteName: "LuxeyUI",
		description: "Elevate your design effortlessly and quickly",
		images: [
			{
				url: "/introduction.png",
				width: 1200,
				height: 630,
				alt: "LuxeyUI",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "LuxeyUI - Elevate your design effortlessly and quickly",
		description:
			"Design the web prettier. Make stunning, modern, and fast websites regardless of your level of design expertise.",
		image: "/introduction.png",
		creator: "@atif_ali_jaedi",
	},
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body
				className={`${axiforma.className} min-h-screen bg-white dark:bg-dark`}
			>
				<Navbar />
				<MobileNavigation />
				<main className="prose prose-zinc mx-auto max-w-7xl px-6 dark:prose-invert">
					{children}
					<GoToTopButton />
				</main>
				<SearchModal />
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
