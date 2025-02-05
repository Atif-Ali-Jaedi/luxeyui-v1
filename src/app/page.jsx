import { Vercel } from "@/assets/icons";
import { Hero } from "@/layouts";
import Image from "next/image";

export const metadata = {
	title: "LuxeyUI - Elevate your design effortlessly and quickly",
	description:
		"Design the web prettier. Make stunning, modern, and fast websites regardless of your level of design expertise.",
};

const Home = () => {
	return (
		<>
			<Hero />

			<div className="relative z-[2] flex flex-col items-center justify-between gap-6 sm:flex-row">
				<div className="flex cursor-default items-center gap-px text-2xl font-bold text-obsidian no-underline dark:text-smoke">
					<Image
						src="/logo.png"
						width={24}
						draggable={false}
						height={24}
						className="!my-0 h-auto w-auto"
						alt="LuxeyUI Logo"
					/>
					uxeyUI
				</div>
				<span className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
					Deployed on <Vercel />
				</span>
			</div>
		</>
	);
};

export default Home;
