import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({
	cover,
	title,
	category,
	date,
	link = "/",
	writer = {
		name: "Atif Ali Jaedi",
		profession: "Frontend Dev",
		image: "/Atif_Ali_Jaedi.jpg",
	},
}) => {
	return (
		<Link
			href={link}
			className="rounded-[20px] border border-secondary/10 p-1 no-underline transition-all duration-300 hover:border-secondary/25 hover:bg-[radial-gradient(circle_at_50%_60%,_transparent,_rgb(121_94_247_/_0.025))] active:scale-[0.97] dark:border-secondary/20 dark:hover:border-secondary/30 dark:hover:bg-[radial-gradient(circle_at_50%_60%,_transparent,_rgb(121_94_247_/_0.075))]"
			draggable={false}
		>
			<div className="mb-6 rounded-2xl border border-primary-100/90 shadow-lg dark:border-primary-900/80">
				<Image
					alt={title}
					src={cover}
					width={300}
					height={300}
					draggable={false}
					className="pointer-events-none !my-0 aspect-video h-auto w-full select-none rounded-2xl object-cover object-top"
				/>
			</div>
			<div className="mb-4 ml-6 w-max rounded-full border border-zinc-200 bg-zinc-200/80 px-4 py-1 text-sm dark:border-zinc-800 dark:bg-zinc-800/60">
				{category}
			</div>
			<strong className="ml-6 text-lg font-medium">{title}</strong>
			<div className="flex items-center justify-between p-6">
				<div className="flex items-center gap-3">
					<Image
						className="!my-0 rounded-full object-cover"
						src={writer.image}
						alt={writer.name}
						width={40}
						height={40}
						draggable={false}
					/>
					<div className="flex flex-col gap-0.5">
						<strong className="text-sm font-medium">
							{writer.name}
						</strong>
						<span className="text-xs text-zinc-400 dark:text-zinc-500">
							{writer.profession}
						</span>
					</div>
				</div>
				<div className="text-sm text-zinc-400 dark:text-zinc-500">
					{date}
				</div>
			</div>
		</Link>
	);
};
