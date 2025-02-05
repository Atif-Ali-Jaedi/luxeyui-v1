import { GithubIcon, TwitterXIcon } from "@/assets/icons";
import { SearchButton, ThemeToggler } from "@/components";
import { currentVersion, navLinks } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
	return (
		<nav
			id="navbar"
			className="sticky inset-x-0 top-0 z-40 flex h-auto w-full items-center justify-center backdrop-saturate-150 data-[menuopen=true]:backdrop-blur-xl"
		>
			<header className="relative z-40 flex h-16 w-full max-w-[1280px] flex-row flex-nowrap items-center justify-between gap-4 px-6">
				<div className="flex items-center gap-4">
					<Link
						href="/"
						className="flex items-center gap-px text-2xl font-bold text-obsidian dark:text-smoke"
					>
						<Image
							src="/logo.png"
							width={24}
							draggable={false}
							height={24}
							className="h-auto w-auto"
							alt="LuxeyUI Logo"
						/>
						uxeyUI
					</Link>
					<div className="hidden rounded-full bg-zinc-400/20 px-2.5 py-1.5 text-xs dark:text-smoke sm:block">
						v{currentVersion}
					</div>
					<ul className="hidden items-center gap-5 text-zinc-600 dark:text-zinc-300 lg:flex">
						{navLinks.map((link, i) => (
							<li key={i}>
								<Link href={link.href}>{link.label}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="mr-8 flex items-center gap-2 lg:mr-0">
					<ThemeToggler />
					<Link
						href="https://x.com/atif_ali_jaedi"
						target="_blank"
						className="-ms-1.5 text-zinc-500 dark:text-zinc-400"
						rel="noopener noreferrer"
						aria-label="Follow Atif Ali Jaedi on X"
					>
						<TwitterXIcon width={20} />
					</Link>
					<Link
						href="https://github.com/Atif-Ali-Jaedi/luxeyui"
						target="_blank"
						className="text-zinc-500 dark:text-zinc-400"
						rel="noopener noreferrer"
						aria-label="LuxeyUI github repository, give it a star!"
					>
						<GithubIcon width={20} />
					</Link>
					<SearchButton />
				</div>
			</header>
		</nav>
	);
};
