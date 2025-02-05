import { ArrowIcon } from "@/assets/icons";
import { Button } from "@/components";
import {
	GlowingStarsBackgroundCard,
	GlowingStarsDescription,
	GlowingStarsTitle,
} from "@/components/ui/others/GlowingBackgroundStarsCard";
import {
	TextRevealCard,
	TextRevealCardDescription,
	TextRevealCardTitle,
} from "@/components/ui/others/TextRevealCard";
import Image from "next/image";

export const HeroIllustration = () => {
	return (
		<div className="not-prose grid grid-cols-2 gap-4">
			<div className="col-span-2">
				<TextRevealCard
					text="Hover over this text"
					revealText="Copy and paste this"
				>
					<TextRevealCardTitle>
						Design your UI within minutes
					</TextRevealCardTitle>
					<TextRevealCardDescription>
						Build great UIs for your next design project within
						minutes.
					</TextRevealCardDescription>
				</TextRevealCard>
			</div>
			<div className="col-span-2 sm:col-span-1">
				<div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl dark:border-zinc-800 dark:bg-dark">
					<div className="relative w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
						<Image
							src={"/introduction.png"}
							alt="thumbnail"
							width={300}
							height={200}
							className="my-0.5 w-full object-cover transition-all duration-200 group-hover:scale-95 group-hover:rounded-2xl"
						/>
					</div>
					<div className="p-4">
						<h2 className="mb-4 text-lg font-bold text-zinc-700 dark:text-zinc-200">
							Customization Made Effortless
						</h2>
						<div className="flex flex-row items-center justify-between">
							<span className="text-sm text-gray-500 dark:text-gray-400">
								28 February, 2025
							</span>
							<Button className="bg-dark dark:bg-light dark:text-dark">
								Read More
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="col-span-2 sm:col-span-1">
				<GlowingStarsBackgroundCard>
					<GlowingStarsTitle>LuxeyUI 1.0</GlowingStarsTitle>
					<div className="flex items-end justify-between">
						<GlowingStarsDescription>
							The Ultimate Version of LuxeyUI awaits.
						</GlowingStarsDescription>
						<Button
							isIconOnly
							radius="full"
							size="sm"
							className="bg-white/10"
						>
							<ArrowIcon className="size-4" />
						</Button>
					</div>
				</GlowingStarsBackgroundCard>
			</div>
		</div>
	);
};
