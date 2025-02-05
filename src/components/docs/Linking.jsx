"use client";

import { ChevronIcon } from "@/assets/icons";
import { sidebarLinks } from "@/data/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "..";

export const Linking = () => {
	const pathname = usePathname();

	const currentIndex = sidebarLinks.findIndex(page => page.link === pathname);

	const lastPage = currentIndex > 0 ? sidebarLinks[currentIndex - 1] : null;
	const nextPage =
		currentIndex < sidebarLinks.length - 1
			? sidebarLinks[currentIndex + 1]
			: null;

	return (
		<div
			className={`mt-12 flex items-center ${lastPage && !nextPage ? "justify-start" : !lastPage && nextPage ? "justify-end" : "justify-between"}`}
		>
			{lastPage && (
				<Link href={lastPage.link}>
					<Button variant="light" className="text-base">
						<ChevronIcon
							width={20}
							className="rotate-180 text-primary-500"
						/>
						{lastPage.name}
					</Button>
				</Link>
			)}
			{nextPage && (
				<Link href={nextPage.link}>
					<Button variant="light" className="text-base">
						{nextPage.name}
						<ChevronIcon width={20} className="text-primary-500" />
					</Button>
				</Link>
			)}
		</div>
	);
};
