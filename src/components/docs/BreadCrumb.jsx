import { ChevronIcon } from "@/assets/icons";
import { twMerge } from "tailwind-merge";

export const Breadcrumb = ({ data }) => {
	const newData = ["Docs", ...data];

	return (
		<div className="flex items-center text-sm">
			{newData.map((item, i) => (
				<span
					key={i}
					className={twMerge(
						`flex items-center text-zinc-500 dark:text-zinc-400 ${
							i < newData.length - 1 ||
							"font-medium text-obsidian dark:text-smoke"
						}`,
					)}
				>
					{item
						.replace("%20", "-")
						.split("-")
						.map(s => s.charAt(0).toUpperCase() + s.slice(1))
						.join(" ")}
					{i < newData.length - 1 && <ChevronIcon width={16} />}
				</span>
			))}
		</div>
	);
};
