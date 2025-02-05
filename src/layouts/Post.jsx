import { ArrowIcon } from "@/assets/icons";
import { StyledLink } from "@/components";
import { TracingBeam } from "@/components/ui/others/TracingBeam";
import Image from "next/image";

export const Post = ({
	cover,
	title,
	category,
	date,
	description,
	writer = {
		name: "Atif Ali Jaedi",
		profession: "Frontend Dev",
		image: "/Atif_Ali_Jaedi.jpg",
	},
	Content,
}) => {
	return (
		<TracingBeam>
			<StyledLink
				href="/blog"
				draggable={false}
				className="text-sm text-zinc-600 dark:text-zinc-300"
			>
				<ArrowIcon type={"left"} />
				Go Back
			</StyledLink>
			<div className="mb-10 mt-8 rounded-2xl border border-primary-100/90 shadow-lg dark:border-primary-900/80">
				<Image
					alt={title}
					src={cover}
					width={1080}
					height={720}
					className="pointer-events-none !my-0 aspect-video h-auto w-full select-none rounded-2xl object-top"
				/>
			</div>
			<div className="mb-4 w-max rounded-full border border-secondary/20 bg-[radial-gradient(circle_at_50%_50%,_transparent,_rgb(121_94_247_/_0.25))] px-4 py-1 text-sm">
				{category}
			</div>
			<h1>{title}</h1>
			<p className="mt-2">{description}</p>
			<div className="mb-6 mt-8 flex items-center justify-between border-b border-zinc-200 pb-8 dark:border-zinc-800">
				<div className="flex items-center gap-3">
					<Image
						className="!my-0 rounded-full object-cover"
						src={writer.image}
						alt={writer.name}
						width={40}
						height={40}
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
			<article className="mt-10 prose-li:my-3 [&_ul>li>strong]:font-medium [&_ul>li>strong]:text-pink-500 dark:[&_ul>li>strong]:text-cyan-500">
				{Content && <Content />}
			</article>
		</TracingBeam>
	);
};
